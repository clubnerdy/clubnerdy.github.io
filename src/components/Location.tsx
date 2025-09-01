import React from "react";
import "../styles/location.css";
import iconPhone from "../assets/img/icon-phone.svg";
import iconParking from "../assets/img/icon-parking.svg";
import iconBus from "../assets/img/icon-bus.svg";
import iconTrain from "../assets/img/icon-train.svg";
import iconCopy from "../assets/img/icon-copy.svg";
import iconMarker from "../assets/img/icon-marker.svg";
import { Map, MapMarker } from "react-kakao-maps-sdk";

function Location() {
  const handleCopyAddress = async () => {
    const address = "부산 해운대구 센텀중앙로 79 센텀 사이언스파크";
    try {
      await navigator.clipboard.writeText(address);
      alert("주소가 클립보드에 복사되었습니다");
    } catch (err) {
      console.error("복사 실패:", err);
      // fallback: 구형 브라우저 지원
      const textArea = document.createElement("textarea");
      textArea.value = address;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      alert("주소가 클립보드에 복사되었습니다");
    }
  };

  return (
    <div className="main-frame">
      <div className="location-container">
        <div className="location-header">
          <p className="heading-description">Location</p>
          <h1 className="heading-title">오시는 길</h1>
        </div>
        <div className="venue-info">
          <span className="venue-name">센텀사이언스파크</span>
          <div className="venue-container">
            <a href="tel:051-711-7755">
              <p className="venue-detail">
                <span>별관 4F</span> 더하우스홀
              </p>
              <img src={iconPhone} alt="전화" className="phone-icon" />
            </a>
          </div>
        </div>

        {/* 지도 섹션 */}
        <div className="map-section">
          <div className="map-placeholder">
            <Map
              center={{ lat: 35.173907, lng: 129.126316 }}
              style={{ width: "100%", height: "400px" }}
              level={4}
            >
              <MapMarker
                position={{ lat: 35.173907, lng: 129.126316 }}
                onCreate={(marker) => {
                  marker.setZIndex(1);
                }}
                image={{
                  src: iconMarker,
                  size: { width: 26, height: 33 },
                  options: { offset: { x: 13, y: 44 } },
                }}
              />
            </Map>
          </div>
        </div>

        {/* 주소 및 연락처 */}
        <div className="address-section">
          <div className="address-content">
            <button className="copy-button" onClick={handleCopyAddress}>
              <span className="address-text">
                부산 해운대구 센텀중앙로 79 센텀 사이언스파크
              </span>
              <img src={iconCopy} alt="복사" className="icon-image" />
            </button>
          </div>
        </div>

        {/* 교통 정보 */}
        <div className="transportation-info">
          {/* 주차 정보 */}
          <div className="info-section">
            <div className="section-header">
              <div className="icon-container parking">
                <img src={iconParking} alt="주차" className="icon-image" />
              </div>
              <h3 className="section-title">주차</h3>
            </div>
            <div className="section-content">
              <p className="info-text">
                웨딩홀 지하 주차장 : 하객 3시간 무료
                <br />※ 주차현장 주차 요원 안내를 받아주세요.
              </p>
            </div>
          </div>

          {/* 버스 정보 */}
          <div className="info-section">
            <div className="section-header">
              <div className="icon-container bus">
                <img src={iconBus} alt="버스" className="icon-image" />
              </div>
              <h3 className="section-title">버스</h3>
            </div>
            <div className="section-content">
              <div className="bus-route">
                <div className="bus-container">
                  <span className="bus-number">115</span>
                  <span className="bus-direction">(수영·광안리 방면)</span>
                </div>
                <span className="bus-detail">
                  SK텔레콤 정류장 하차 &gt; 도보 약 2-3분
                </span>
              </div>
              <div className="bus-route">
                <div className="bus-container">
                  <span className="bus-number">181</span>
                  <span className="bus-direction">(동래·온천장 방면)</span>
                </div>
                <span className="bus-detail">
                  SK텔레콤 정류장 하차 &gt; 도보 약 2-3분
                </span>
              </div>
              <div className="bus-route">
                <div className="bus-container">
                  <span className="bus-number">307</span>
                  <span className="bus-direction">(장산·좌동 방면)</span>
                </div>
                <span className="bus-detail">
                  SK텔레콤 정류장 하차 &gt; 도보 약 2-3분
                </span>
              </div>
              <div className="bus-route">
                <div className="bus-container">
                  <span className="bus-number">1002</span>
                  <span className="bus-direction">
                    (급행) (서면·부산역 방면)
                  </span>
                </div>
                <span className="bus-detail">
                  센텀중학교 정류장 하차 &gt; 도보 약 4분
                </span>
              </div>
            </div>
          </div>

          {/* 지하철 정보 */}
          <div className="info-section">
            <div className="section-header">
              <div className="icon-container subway">
                <img src={iconTrain} alt="지하철" className="icon-image" />
              </div>
              <h3 className="section-title">지하철</h3>
            </div>
            <div className="section-content">
              <p className="info-text subway-info-text">2호선 (센텀시티역)</p>
              <p className="info-detail">
                센텀시티역 6번 출구 &gt; 도보 약 12분
              </p>
            </div>
          </div>

          {/* 셔틀버스 정보 */}
          <div className="info-box">
            <div className="section-content">
              <div className="shuttle-info">
                <p className="info-text">
                  (4번출구 앞){" "}
                  <span className="highlight">하객전용 셔틀버스 이용가능</span>
                </p>
                <p className="info-detail">웨딩홀 앞까지 운행 / 10-15분 간격</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Location;
