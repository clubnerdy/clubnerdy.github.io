import audioOnIcon from "../assets/volume-on.svg";
import "../styles/audio.css";

function Audio() {
  return (
    <div className="bgm-container">
      <figure>
        <img
          src={audioOnIcon}
          width={20}
          style={{ cursor: "pointer" }}
          alt="Toggle audio"
        />
      </figure>
    </div>
  );
}

export default Audio;
