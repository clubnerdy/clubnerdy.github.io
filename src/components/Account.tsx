import React from "react";
import "../styles/account.css";
import iconCopy from "../assets/img/icon-copy.svg";

function Account() {
  const handleCopyAccount = async (accountNumber: string, accountHolder: string) => {
    try {
      await navigator.clipboard.writeText(accountNumber);
      alert(`${accountHolder}님의 계좌번호가 클립보드에 복사되었습니다`);
    } catch (err) {
      console.error("복사 실패:", err);
      // fallback: 구형 브라우저 지원
      const textArea = document.createElement("textarea");
      textArea.value = accountNumber;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      alert(`${accountHolder}님의 계좌번호가 클립보드에 복사되었습니다`);
    }
  };

  return (
    <div className="main-frame">
      <div className="account-container">
        <div className="heading">
          <p className="heading-description">마음전하실 곳</p>
          <h1 className="heading-title">(계좌번호)</h1>
        </div>
        <div className="account-content">
          <div className="account-item">
            <div className="item-heading">신랑측</div>
            <div className="item-content">
              <div className="item-name">임광휘</div>
              <div className="item-bank">
                <span className="bank-name">신한은행</span>
                <span className="bank-number">110-275-269630</span>
                <button 
                  className="copy-button" 
                  onClick={() => handleCopyAccount("110-275-269630", "임광휘")}
                >
                  <img src={iconCopy} alt="복사" className="icon-image" />
                </button>
              </div>
            </div>
          </div>
          <div className="account-item">
            <div className="item-heading">신부측</div>
            <div className="item-content">
              <div className="item-name">권나영</div>
              <div className="item-bank">
                <span className="bank-name">국민은행</span>
                <span className="bank-number">111102-04-094123</span>
                <button 
                  className="copy-button" 
                  onClick={() => handleCopyAccount("111102-04-094123", "권나영")}
                >
                  <img src={iconCopy} alt="복사" className="icon-image" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Account;
