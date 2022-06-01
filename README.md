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
  
### 심박수 그래프

심박수 차트는 기본적으로 선 그래프로 표현하였습니다.

#### 하루치 그래프

1일차 일때는 x 축 라벨은 겹치지 않도록 시간을 표기 하였으며 1일차 데이터의 모든 데이터를 표현 하였습니다.

#### 그외 그래프

이틀 이상의 데이터가 포함될 때 에는  각 날짜 별로 평균 심박수를 구하여 날짜 별로 선 그래프를 그렸습니다.

#### 조건부 그래프 표기

1. 날짜를 하루만 선택했을때 데이터가 있는경우

   하루짜리 그래프 표기

2. 날짜를 여러날 선택했을때 하루치 데이터만 포함되는 경우

   날짜를 정확히 지정하라는 에러 메시지 표기

3. 선택한 날짜에 데이터가 없는 경우

   날짜를 정확히 지정하라는 에러 메시지 표기

4. 선택한 날짜에 여러 날의 데이터가 있는 경우

   각 날의 평균 심박수를 이용해 선 그래프 표기

### 걸음수 그래프

기본적으로 막대 그래프로 표현하였습니다.

#### 하루치 그래프

1일차 일때는 x 축 라벨은 겹치지 않도록 시간을 표기하였으며 1일차 데이터의 모든 데티어의 표현하였습니다.

#### 그외 그래프

이틀 이상의 데이터가 포함되었을때에는 하루의 마지막 데이터가 누적된 걸음수라고 판단하여 그 데이터를 이용해 막대 그래프를 표현하였습니다.

#### 조건부 그래프 표기

1. 날짜를 하루만 선택했을때 데이터가 있는경우

   하루짜리 그래프 표기

2. 날짜를 여러날 선택했을때

   1. 데이터가 없는 경우

      날짜를 정확히 지정하라는 에러 메시지 표기

   2. 데이터가 있는 경우

      그날의 누적 걸음수를 이용해 막대 그래프 표기

3. 데이터가 없는 경우

   날짜를 정확히 지정하라는 에러 메시지 표기
 
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
