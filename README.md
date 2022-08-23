# Jejodo 기업과제

## [배포 주소](https://fe-jejodo-assignment.netlify.app/)

# 1. 프로젝트 실행 방법

git 레포 클론

```
git clone https://github.com/waterhumanB/FE-jejodo-assignment
```

사용한 라이브러리 설치

```
npm install
```

웹 실행하기

```
npm start
```

# 2. 사용한 기술

```
React, TypeScript, Styled-components, recoil
```

# 3.요구사항

## Banner

- [x] 배너는 스크롤 시 화면 에 고정, position: fix

## Search

- [x] 기본 값 : 검색 창 하단엔 태그의 갯수가 많은 순서로 좌측부터 보여진다. 총 4개의 태그가 노출 되고, 12px 간격으로 가운데 정렬된다.
      <br>-> api 데이터에는 태그가 없었음
- [x] DropDonwBOx : 검색 창 하단엔 해당 검색어의 갯수가 많은 순서로 좌측부터 보여진다. 총 4개의 태그가 노출 되고, 12px 간격으로 정렬된다.
      <br>-> api 데이터에는 태그가 없었음 nickname만 판단하여 검색을 할 수 있게 구현함
- [x] Result : 검색 결과 화면에서 본문 내용은 해당 검색어의 Background Color가 Corrent Color의 Opacity 50%

## Filter

- [x] 오른쪽 상단에 필터 버튼 만들기, 누르면 필터 메뉴가 나오고, 필터 아이콘이 검정색으로 반전됨
- [x] 보유 아파트로 필터링 메뉴는 5개이상, 4개, 3개, 2개, 1개
- [x] 필터 메뉴 클릭시 원통 모양 검정바탕 흰색 글자색, hover시 글자만 검정색, 기본 회색 글자색

## 반응형 웹

- [x] pc 버전 width: 1920px, height: 1693px, 배너 height: 300px, 제목 40px, 검색창 넓이 400px 높이 32px, 입주민들 넓이 560px, 높이 94px
- [x] tablet 버전 width: 1024px, height: 1693px, 배너 height: 299px, 제목 40px, 검색창 넓이 400px 높이 32px, 입주민들 넓이 560px, 높이 94px
- [x] moblie 버전 width: 360px, height: 1636px, 배너 height: 240px, 제목 28px, 검색창 넙이 320px 높이 32px, 입주민들 넓이 320px, 높이 94px
