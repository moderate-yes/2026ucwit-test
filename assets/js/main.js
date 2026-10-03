const page = document.body.dataset.page;
const navigation = [
  ["index", "index.html", "행사안내"],
  ["organizer", "organizer.html", "대회조직"],
  ["submit", "submit.html", "논문투고"],
  ["program", "program.html", "프로그램"],
  ["registration", "registration.html", "등록"],
  ["details", "details.html", "발표 및 행사장소 안내"],
  ["contacts", "contacts.html", "연락처"],
  ["announcements", "announcements.html", "공지사항"],
];

document.querySelector("#site-header").innerHTML = `
  <div class="top">
    <a class="title" href="index.html">UCWIT2026</a>
    <div>
      <p><b>주최</b> 한국정보과학회</p>
      <p><b>주관</b> 한국정보과학회 영남지부</p>
    </div>
  </div>
  <header>
    <nav aria-label="주요 메뉴"><ul>
      ${navigation.map(([id, href, label]) => `<a href="${href}"${page === id ? ' class="active"' : ""}><li>${label}</li></a>`).join("")}
    </ul></nav>
  </header>`;

document.querySelector("#site-footer").innerHTML = `
  <footer>
    <div>
      <div class="flex-row">
        <span>경북대학교 컴퓨터학부</span>
        <span>(41566) 대구광역시 북구 대학로 80 경북대학교 크리에이티브 파크(KREATIVE PARK) (정보화본부 1층)</span>
      </div>
    </div>
  </footer>`;

