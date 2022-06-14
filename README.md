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

## 구현 방법과 이유, 사용한 기술

### 검색 결과 테이블

- 테이블 전체를 랜더링할`UserTable`안에  각 검색 결과의 데이터가 들어갈 `TableRow`컴포넌트가 랜더링 되도록 구현했습니다.

- 검색 결과를 `filter`를 이용해서 구현하였고, 가독성을 높이기 위해 각 조건을 나눠서 작성해주었습니다.

- `useMemo`를 사용하여 검색어가 바뀔때마다 데이터가 바뀌도록 구현하였습니다.

- 검색 결과의 개수에 따라 결과가 없음을 알려주거나 , 개수를 알려주도록 구현했습니다.

- 데이터가 없거나 데이터가 그래프에 맞지 않는 상황에는 에러 메시지를 보여주게끔 하였습니다.



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
