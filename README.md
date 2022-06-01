<h1 align="center"> 모아데이타 기업과제 </h1>
<p align="center">
  <img src="https://img.shields.io/badge/-Typescript-3178C6?style=flat-square&logo=TypeScript&logoColor=white"> <img src="https://img.shields.io/badge/-React-61DAFB?style=flat-square&logo=React&logoColor=white"> <img src="https://img.shields.io/badge/-Sass-CC6699?style=flat-square&logo=Sass&logoColor=white">
</p>

<h2 align="center"><a href="/">배포 페이지</a></h2>

# 과제 설명

## 실행 방법

## 폴더 구조

```
아직 없
```

## 구현 방법과 이유, 사용한 기술

### 로그인 페이지

- 자동 로그인 기능을 구현하기 위해 로컬 스토리지에 로그인 현황을 저장하였습니다.

- 로컬 스토리지를 `localStorage`의 메서드로 접근하려면 JSON 형식으로의 변환이 필요하므로, 이 과정을 생략해 주기 위해 `store` 라이브러리를 사용하였습니다.

- `LoginCheck` 컴포넌트는 라우터의 최상위에 위치하면서 현재 유저가 로그인 상태인지 체크하며, 로그인이 되어있지 않으면 어떤 페이지로 접근해도 로그인 페이지로 리디렉션합니다.

  - 로그인이 되어있는 상태에서는 로그인 페이지 (/login) 에 접근하면 루트 경로로 리디렉션됩니다.

### 그래프

- 그래프는 `VictoryJs`라는 라이브러리를 사용하였으며 개인적으로 data 핸들링이 편하고 디자인 적인 측면에서 자유도가 높다고 느껴서 사용하였습니다.

- 데이터가 없거나 데이터가 그래프에 맞지 않는 상황에는 에러 메시지를 보여주게끔 하였습니다. 

### 검색 결과 테이블

- 테이블 전체를 랜더링할`UserTable`안에  각 검색 결과의 데이터가 들어갈 `TableRow`컴포넌트가 랜더링 되도록 구현했습니다.


- 검색 결과를 `filter`를 이용해서 구현하였고, 가독성을 높이기 위해 각 조건을 나눠서 작성해주었습니다.

- `useMemo`를 사용하여 검색어가 바뀔때마다 데이터가 바뀌도록 구현하였습니다.

- 검색 결과의 개수에 따라 결과가 없음을 알려주거나 , 개수를 알려주도록 구현했습니다.

 
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
