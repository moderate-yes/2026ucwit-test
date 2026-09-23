# UCWIT 2026 Test Website

UCWIT 2026 테스트용 정적 홈페이지입니다.

## 현재 원칙

- 2024년의 날짜, 장소, 제출 링크, 등록 링크 등 행사별 정보는 재사용하지 않습니다.
- 2026년에 확정되지 않은 정보는 `{내용확인필요}`로 표시합니다.
- 현재 확정 조직 정보는 사이트의 `대회조직` 섹션에 반영했습니다.
- 모든 경로는 상대경로이므로 GitHub Pages의 `/REPOSITORY/` 경로와 향후 `https://hpclab.knu.ac.kr/2026ucwit/` 경로에서 모두 동작하도록 구성했습니다.

## 테스트 배포: GitHub Pages

1. 이 폴더의 내용을 GitHub 저장소의 `main` 브랜치에 올립니다.
2. Repository → Settings → Pages → Build and deployment에서 **GitHub Actions**를 선택합니다.
3. Actions의 `Deploy static site to GitHub Pages`가 완료되면 테스트 주소가 생성됩니다.

## 향후 연구실 서버 배포

최종 배포 시 이 저장소의 정적 파일을 연구실 웹서버의 `2026ucwit/` 디렉터리에 배포하면 됩니다. 서버의 실제 DocumentRoot와 계정 권한은 관리자 확인이 필요합니다.
