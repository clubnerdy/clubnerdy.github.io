import iconHtml from "../assets/images/skill_icon/html.svg";
import iconCss from "../assets/images/skill_icon/css.svg";
import iconJs from "../assets/images/skill_icon/js.svg";
import iconBootstrap from "../assets/images/skill_icon/bootstrap.svg";
import iconDart from "../assets/images/skill_icon/dart.svg";
import iconFlutter from "../assets/images/skill_icon/flutter.svg";
import iconMysql from "../assets/images/skill_icon/mysql.svg";
import iconReact from "../assets/images/skill_icon/react.svg";
import iconNextjs from "../assets/images/skill_icon/nextjs.svg";
import iconTs from "../assets/images/skill_icon/ts.svg";
import iconJava from "../assets/images/skill_icon/java.svg";
import iconSpring from "../assets/images/skill_icon/spring.svg";
import iconFigma from "../assets/images/skill_icon/figma.svg";
import iconPhotoshop from "../assets/images/skill_icon/photoshop.svg";
import iconAi from "../assets/images/skill_icon/ai.svg";
import iconPr from "../assets/images/skill_icon/pr.svg";
import iconGit from "../assets/images/skill_icon/git.svg";
import iconGithub from "../assets/images/skill_icon/github.svg";
import iconSlack from "../assets/images/skill_icon/slack.svg";
import iconNotion from "../assets/images/skill_icon/notion.svg";

export default function Section03() {
  return (
    <section id="section03" class="section03 page_section">
      <div class="inner">
        <h2 class="page_title">기술</h2>
        <nav class="skill_nav">
          <ul>
            <li class="skill_item on" data-filter="all">
              All
            </li>
            <li class="skill_item" data-filter="dev">
              Dev
            </li>
            <li class="skill_item" data-filter="design">
              Design
            </li>
            <li class="skill_item" data-filter="collab">
              Collab
            </li>
          </ul>
          <div class="nav_indicator"></div>
        </nav>
        <ul class="skill_list list">
          <li class="item on" data-category="dev">
            <img src={iconHtml} alt="HTML" />
          </li>
          <li class="item on" data-category="dev">
            <img src={iconCss} alt="CSS" />
          </li>
          <li class="item on" data-category="dev">
            <img src={iconJs} alt="JavaScript" />
          </li>
          <li class="item on" data-category="dev">
            <img src={iconBootstrap} alt="BootStrap" />
          </li>
          <li class="item on" data-category="dev">
            <img src={iconDart} alt="Dart" />
          </li>
          <li class="item on" data-category="dev">
            <img src={iconFlutter} alt="Flutter" />
          </li>
          <li class="item on" data-category="dev">
            <img src={iconMysql} alt="MySql" />
          </li>
          <li class="item on" data-category="dev">
            <img src={iconReact} alt="React" />
          </li>
          <li class="item on" data-category="dev">
            <img src={iconNextjs} alt="NextJs" />
          </li>
          <li class="item on" data-category="dev">
            <img src={iconTs} alt="TypeScript" />
          </li>
          <li class="item on" data-category="dev">
            <img src={iconJava} alt="Java" />
          </li>
          <li class="item on" data-category="dev">
            <img src={iconSpring} alt="SpringBoot" />
          </li>
          <li class="item on" data-category="design">
            <img src={iconFigma} alt="Figma" />
          </li>
          <li class="item on" data-category="design">
            <img src={iconPhotoshop} alt="Photoshop" />
          </li>
          <li class="item on" data-category="design">
            <img src={iconAi} alt="Illustrator" />
          </li>
          <li class="item on" data-category="design">
            <img src={iconPr} alt="Primere" />
          </li>
          <li class="item on" data-category="collab">
            <img src={iconGit} alt="Git" />
          </li>
          <li class="item on" data-category="collab">
            <img src={iconGithub} alt="GitHub" />
          </li>
          <li class="item on" data-category="collab">
            <img src={iconSlack} alt="Slack" />
          </li>
          <li class="item on" data-category="collab">
            <img src={iconNotion} alt="Notion" />
          </li>
        </ul>
      </div>
    </section>
  );
}
