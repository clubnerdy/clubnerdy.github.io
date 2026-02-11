import brainImg from "../assets/images/brain.png";

export default function Section01() {
  return (
    <section id="section01" class="section01 page_section">
      <div class="inner">
        <div class="content">
          <figure class="main_icon">
            <img src={brainImg} alt="" />
          </figure>
          <h2 class="main_title">
            안녕하세요,
            <br />
            생각하는 퍼플리셔
            <br />
            <span class="text_blue">서회정</span>입니다.
          </h2>
          <p class="main_description">
            다양한 환경에서도 동일한 사용자 경험을 제공하기 위해
            <br />
            크로스브라우징과 접근성을 꾸준히 고민합니다.
            <br />
            함께 제품을 만들고 성장할 팀을 찾고 있습니다.
          </p>
        </div>
        <button class="download_btn">
          <a href="assets/doc/document_my.pdf" target="_blank">
            <p>이력서 다운로드</p>
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 11.4033L3 14.1694C3 14.5886 3.15804 14.9906 3.43934 15.287C3.72064 15.5835 4.10218 15.75 4.5 15.75H13.5C13.8978 15.75 14.2794 15.5835 14.5607 15.287C14.842 14.9906 15 14.5886 15 14.1694V11.4033M9.00084 2.25V11.2068M9.00084 11.2068L12.4294 7.78447M9.00084 11.2068L5.57227 7.78447"
                stroke="#888888"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>
        </button>
      </div>
    </section>
  );
}
