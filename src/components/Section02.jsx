import imageAbility01 from "../assets/images/ability/01.svg";
import imageAbility02 from "../assets/images/ability/02.png";
import imageAbility03 from "../assets/images/ability/03.png";

export default function Section02() {
  return (
    <section id="section02" class="section02 page_section">
      <div class="inner">
        <h2 class="page_title">역량</h2>
        <ul class="ability_list list">
          <li class="item">
            <figure>
              <img src={imageAbility01} alt="UI 설계와 퍼블리싱" />
            </figure>
            <div>
              <h3>UI 설계와 퍼블리싱</h3>
              <p>
                세밀한 인터페이스 설계와 픽셀 단위 구현에 능숙합니다. HTML, CSS,
                JavaScript를 활용해 반응형 웹을 제작하며, 접근성과
                크로스브라우징을 고려해 일관된 사용자 경험을 제공합니다.
              </p>
            </div>
          </li>
          <li class="item">
            <figure>
              <img src={imageAbility02} alt="레이아웃 구성 능력" />
            </figure>
            <div>
              <h3>레이아웃 구성 능력</h3>
              <p>
                Flutter를 활용해 직관적이고 구조적인 화면을 구현합니다. 디자인
                시안을 실제 서비스 화면으로 빠르고 정확하게 옮길 수 있으며, 코드
                구조와 재사용성을 고려한 화면 설계를 지향합니다.
              </p>
            </div>
          </li>
          <li class="item">
            <figure>
              <img src={imageAbility03} alt="협업과 커뮤니케이션" />
            </figure>
            <div>
              <h3>협업과 커뮤니케이션</h3>
              <p>
                Git과 Notion을 활용해 체계적으로 협업합니다. 디자인과 개발
                사이의 연결을 매끄럽게 조율하며, 작업 과정과 결과물을 명확하게
                공유할 수 있습니다.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
