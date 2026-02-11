import iconNav from "./assets/images/icon-nav.svg";

export default function MainNav() {
  return (
    <div class="nav_wrap">
      <nav class="main_nav">
        <ul class="nav_list">
          <li class="nav_item is-active" data-target="section01">
            <figure>
              <img src={iconNav} alt="" />
            </figure>
          </li>
          <li class="nav_item" data-target="section02">
            역량
          </li>
          <li class="nav_item" data-target="section03">
            기술
          </li>
          <li class="nav_item" data-target="section04">
            경력
          </li>
          <li class="nav_item" data-target="section05">
            프로젝트
          </li>
          <li class="nav_item" data-target="section07">
            Design Book
          </li>
        </ul>
      </nav>
    </div>
  );
}
