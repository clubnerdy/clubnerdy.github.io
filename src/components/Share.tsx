import React from "react";
import "../styles/share.css";
import iconKakao from "../assets/img/icon-kakao.svg";
import iconLink from "../assets/img/icon-link.svg";

function Share() {
  const handleKakaoShare = () => {
    // 카카오톡 공유하기
    if (!window.Kakao) {
      console.error("Kakao SDK not loaded");
      return;
    }

    window.Kakao.Share.sendDefault({
      objectType: "feed",
      content: {
        title: "임광휘♥권나영",
        description: "모바일 청첩장 공유합니다",
        imageUrl: "",
        link: {
          mobileWebUrl: "https://your-domain.com",
          webUrl: "https://your-domain.com",
        },
      },
      buttons: [
        {
          title: "웹으로 보기",
          link: {
            mobileWebUrl: "https://your-domain.com",
            webUrl: "https://your-domain.com",
          },
        },
      ],
    });
  };

  // 링크 복사사
  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      alert("청첩장 링크가 클립보드에 복사되었습니다");
    } catch (err) {
      console.error("복사 실패:", err);
      // fallback: 구형 브라우저 지원
      const textArea = document.createElement("textarea");
      textArea.value = window.location.href;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      alert("청첩장 링크가 클립보드에 복사되었습니다");
    }
  };

  return (
    <div className="main-frame share-frame">
      <div className="share-container">
        <div className="share-header">
          <h1 className="share-title">청첩장 공유하기</h1>
        </div>

        <div className="share-buttons">
          {/* 카카오톡 공유 */}
          <button className="share-button kakao" onClick={handleKakaoShare}>
            <div className="button-icon kakao-icon">
              <img src={iconKakao} alt="kakao" />
            </div>
          </button>

          {/* 링크 복사 */}
          <button className="share-button link" onClick={handleCopyLink}>
            <div className="button-icon link-icon">
              <img src={iconLink} alt="link" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Share;
