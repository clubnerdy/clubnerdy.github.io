import React, { useState, useRef, useEffect } from "react";
import audioOnIcon from "../assets/img/volume-on.svg";
import audioOffIcon from "../assets/img/volume-off.svg";
import audioFile from "../assets/for-the-first-time.mp3";
import "../styles/audio.css";

function Audio() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const toggleAudio = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch((error) => {
          console.error("Audio play failed:", error);
        });
    }
  };

  // 최초 유저 입력 시 자동 재생
  useEffect(() => {
    const handleFirstInteraction = () => {
      if (!audioRef.current) return;

      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch((err) => console.log("Auto play blocked:", err));

      // 실행 후 이벤트 리스너 제거
      document.removeEventListener("touchstart", handleFirstInteraction);
      document.removeEventListener("click", handleFirstInteraction);
    };

    document.addEventListener("touchstart", handleFirstInteraction, { once: true });
    document.addEventListener("click", handleFirstInteraction, { once: true });

    return () => {
      document.removeEventListener("touchstart", handleFirstInteraction);
      document.removeEventListener("click", handleFirstInteraction);
    };
  }, []);

  return (
    <div className="bgm-container">
      <audio ref={audioRef} loop>
        <source src={audioFile} type="audio/mpeg" />
      </audio>
      <figure>
        <img
          src={isPlaying ? audioOnIcon : audioOffIcon}
          width={20}
          style={{ cursor: "pointer" }}
          alt={isPlaying ? "음악 끄기" : "음악 켜기"}
          onClick={toggleAudio}
        />
      </figure>
    </div>
  );
}

export default Audio;
