<h1 align="center"> 모아데이타 기업과제 </h1>
<p align="center">
  <img src="https://img.shields.io/badge/-Typescript-3178C6?style=flat-square&logo=TypeScript&logoColor=white"> <img src="https://img.shields.io/badge/-React-61DAFB?style=flat-square&logo=React&logoColor=white"> <img src="https://img.shields.io/badge/-Sass-CC6699?style=flat-square&logo=Sass&logoColor=white">
</p>

<h2 align="center"><a href="https://4team-moadata.netlify.app">배포 페이지</a></h2>

<h3 align="center"><a href="https://github.com/Wanted-FOB-Group4/Project-Week5-Moadata/blob/dev/Testcase.md">테스트케이스 명세</a></h3>

# 과제 설명

## 실행 방법

```
$> npm i -f
$> npm start
```

## 폴더 구조

```
src
├── assets
│   ├── imgs
│   │   ├── office.webp
│   │   └── profile.png
│   └── svgs
│       ├── error.svg
│       ├── heartbeat.svg
│       ├── home.svg
│       ├── index.ts
│       ├── logout.svg
│       └── manage_accounts.svg
├── components
│   ├── Button
│   │   ├── button.module.scss
│   │   └── index.tsx
│   ├── Layout
│   │   ├── Header.tsx
│   │   ├── LNB.tsx
│   │   ├── index.tsx
│   │   └── layout.module.scss
│   ├── SearchDate
│   │   ├── index.tsx
│   │   ├── searchDate.module.scss
│   │   └── utils
│   │       └── dateCalc.ts
│   └── index.ts
├── data
│   ├── heartRate.json
│   ├── heartrate_data
│   │   ├── heartrate_136_0226_____1_.json
│   │   ├── heartrate_136_0308_____1_.json
│   │   ├── heartrate_136_0419_____1_.json
│   │   ├── heartrate_328_0416_____2_.json
│   │   ├── heartrate_328_0419_____2_.json
│   │   ├── heartrate_328_0420_____2_.json
│   │   ├── heartrate_380_0417_____3_.json
│   │   ├── heartrate_380_0418_____3_.json
│   │   └── heartrate_380_0419_____3_.json
│   ├── stepCount.json
│   ├── step_data
│   │   ├── step_136_0226_____1_.json
│   │   ├── step_136_0308_____1_.json
│   │   ├── step_136_0419_____1_.json
│   │   ├── step_328_0416_____2_.json
│   │   ├── step_328_0419_____2_.json
│   │   ├── step_328_0420_____2_.json
│   │   ├── step_380_0417_____3_.json
│   │   ├── step_380_0418_____3_.json
│   │   └── step_380_0419_____3_.json
│   ├── userLoginData.json
│   └── userdata.json
├── global.d.ts
├── hooks
│   └── index.ts
├── index.tsx
├── react-app-env.d.ts
├── reportWebVitals.ts
├── routes
│   ├── Dashboard
│   │   └── index.tsx
│   ├── Details
│   │   ├── HeartRateChart
│   │   │   ├── Chart.tsx
│   │   │   ├── heartRateChart.module.scss
│   │   │   └── index.tsx
│   │   ├── NeedForDate
│   │   │   ├── index.tsx
│   │   │   └── needMoreDate.module.scss
│   │   ├── StepCountChart
│   │   │   ├── Chart.tsx
│   │   │   ├── index.tsx
│   │   │   └── stepCountChart.module.scss
│   │   ├── UserInfo
│   │   │   ├── index.tsx
│   │   │   └── userInfo.module.scss
│   │   ├── detail.module.scss
│   │   └── index.tsx
│   ├── Login
│   │   ├── LoginAside
│   │   │   ├── index.tsx
│   │   │   └── loginAside.module.scss
│   │   ├── index.tsx
│   │   └── login.module.scss
│   ├── LoginCheck.tsx
│   ├── Manage
│   │   ├── UserSearch
│   │   │   ├── index.tsx
│   │   │   └── userSearch.module.scss
│   │   ├── UserTable
│   │   │   ├── TableRow.tsx
│   │   │   ├── index.tsx
│   │   │   └── userTable.module.scss
│   │   └── index.tsx
│   └── index.tsx
├── setupTests.ts
├── states
│   ├── currentUserState.ts
│   ├── index.ts
│   ├── searchedUserInfoState.ts
│   ├── userDataState.ts
│   └── userLoginDataState.ts
├── styles
│   ├── base
│   │   ├── _fonts.scss
│   │   ├── _more.scss
│   │   └── _reset.scss
│   ├── constants
│   │   ├── _colors.scss
│   │   ├── _levels.scss
│   │   └── _sizes.scss
│   ├── global.scss
│   ├── index.scss
│   ├── index.ts
│   └── mixins
│       ├── _animation.scss
│       ├── _flexbox.scss
│       ├── _position.scss
│       └── _responsive.scss
└── types
    └── types.d.ts
```

## 구현 방법과 이유, 사용한 기술

### 로그인 페이지

- 자동 로그인 기능을 구현하기 위해 로컬 스토리지에 로그인 현황을 저장하였습니다.

- 로컬 스토리지를 `localStorage`의 메서드로 접근하려면 JSON 형식으로의 변환이 필요하므로, 이 과정을 생략해 주기 위해 `store` 라이브러리를 사용하였습니다.

- `LoginCheck` 컴포넌트는 라우터의 최상위에 위치하면서 현재 유저가 로그인 상태인지 체크하며, 로그인이 되어있지 않으면 어떤 페이지로 접근해도 로그인 페이지로 리디렉션합니다.

  - 로그인이 되어있는 상태에서는 로그인 페이지 (/login) 에 접근하면 루트 경로로 리디렉션됩니다.

### 회원 관리

#### 회원 정보 검색

- DB에 저장되어 있는 회원 정보를 검색할 수 있도록 로그인 ID과 회원 번호를 state로 관리하며 input 창에 입력할 수 있도록 하였습니다.

- 검색 결과 테이블에 결과를 띄워주기 위해 Recoil을 이용하여 검색한 로그인 ID과 회원 정보 그리고 날짜를 전역으로 다룰 수 있도록 하였습니다.

#### 일자별 회원 정보 검색

- 검색 기간 상태관리를 객체로 하여 검색 시작일과 마지막일을 하나의 상태로 관리합니다.

- Date() 생성자를 사용하여 오늘, 1주일전, 전체 기간을 설정할 수 있도록 구현하였습니다.

#### 검색 결과 테이블

- 테이블 전체를 랜더링할`UserTable`안에  각 검색 결과의 데이터가 들어갈 `TableRow`컴포넌트가 랜더링 되도록 구현했습니다.

- 검색 결과를 `filter`를 이용해서 구현하였고, 가독성을 높이기 위해 각 조건을 나눠서 작성해주었습니다.

- `useMemo`를 사용하여 검색어가 바뀔때마다 데이터가 바뀌도록 구현하였습니다.

- 검색 결과의 개수에 따라 결과가 없음을 알려주거나 , 개수를 알려주도록 구현했습니다.

- 데이터가 없거나 데이터가 그래프에 맞지 않는 상황에는 에러 메시지를 보여주게끔 하였습니다.

### 상세 페이지

#### 회원 상세 정보

- 회원 관리 페이지에서 조회한 회원에 대한 상세 정보를 보여줍니다.

- 다음과 같은 정보를 열람할 수 있습니다.

  - 로그인 ID

  - 회원번호

  - 가입일시

  - 심박수 및 걸음수 그래프

#### 그래프

- 그래프는 `VictoryJs`라는 라이브러리를 사용하였으며 개인적으로 data 핸들링이 편하고 디자인 적인 측면에서 자유도가 높다고 느껴서 사용하였습니다.

- 데이터가 없거나 데이터가 그래프에 맞지 않는 상황에는 에러 메시지를 보여주게끔 하였습니다. 

### 전체 레이아웃

#### 사이드바

- 보다 깔끔한 레이아웃을 만들기 위해 과제 명세서에 있는 상단바를 제거하고, 유저 프로필과 로그아웃 버튼, navigation 링크를 모두 사이드바에 배치하였습니다.

#### 헤더

- 페이지 상단의 메뉴 링크와 제목도 모든 페이지에서 동일한 형식으로 나타나므로 레이아웃 컴포넌트에 포함시켰습니다. 그리고 URL에 따라 메뉴 링크와 제목이 동적으로 바뀔 수 있도록 구현했습니다.

<hr />

<h2 align="center">기여한 사람들</h2>
<p align="center">
<table align="center">
  <thead>
    <tr>
      <th><a href="https://github.com/kec0130">🌅 고은채</a></th>
      <th><a href="https://github.com/HyeongSeoku">🌇 김형석</a></th>
      <th><a href="https://github.com/lazy-sky">🌃 김하늘</a></th>
      <th><a href="https://github.com/han-byul-yang">🎇 양한별</a></th>
      <th><a href="https://github.com/yhnb3">🌠 엄강우</a></th>
      <th><a href="https://github.com/Keunyeong">🌉 이근영</a></th>
      <th><a href="https://github.com/chichoon">🏙 최지윤</a></th>
    </tr>
  </thead>
</table>
</p>
