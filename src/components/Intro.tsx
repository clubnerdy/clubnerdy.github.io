import React from "react";
import "../styles/intro.css";
import inviteImage from "../assets/img/invite.png";

function Intro() {
  return (
    <div className="main-frame intro-frame">
      <div className="intro-container">
        <div className="heading">
          <p className="heading-description">
            INVITATION
          </p>
          <h1 className="heading-title">소중한 분들을 초대합니다</h1>
        </div>
        <p className="intro-main-text">
          각자 서로 다른 길을<br/>
          걸어온 저희가 이제 부부의 연으로<br/>
          한 길을 걸어가고자 합니다.<br/><br/>

          항상 처음을 생각하며,<br/>
          서로 아껴주고 사랑하며 살겠습니다.<br/><br/>

          부디 참석해 주시어 저희의 약속을<br/>
          따뜻한 격려로 축복해 주시기 바랍니다.
        </p>
        <figure className="intro-image">
          <img src={inviteImage} alt="권나영♥임광희" />
        </figure>
        <div className="family-list">
          <div className="family-item">
            <span className="parents">임영수 · 정인숙</span>
            <span className="relation">의 장남</span>
            <span className="name">임광휘</span>
          </div>
          <div className="family-item">
            <span className="parents">권병문 · 조명숙</span>
            <span className="relation">의 차녀</span>
            <span className="name">권나영</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intro;
