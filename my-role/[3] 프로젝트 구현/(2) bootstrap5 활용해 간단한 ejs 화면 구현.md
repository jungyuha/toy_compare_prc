# (2) 메인 페이지 만들기

## \[0] 사용 스택 <a href="#undefined" id="undefined"></a>

### **1) 템플릿 : ejs**

### **2)  CSS 프레임워크 : bootstrap5**

## \[1] 주요 디자인 element  <a href="#1" id="1"></a>

### 1) 버튼 <a href="#1" id="1"></a>

1. 배치(JOB) 등록/수정 버튼
2. 배치(JOB) 목록 새로고침 버튼
3. 배치(JOB) 목록 전체 일시 정지 버튼

### 2) 입력창 <a href="#2" id="2"></a>

1. 배치(JOB) 신규 등록/수정 입력창

### 2) 테이블 <a href="#2" id="2"></a>

1. 배치(JOB) 목록 테이블

## \[2] bootstrap5 디자인 선정 <a href="#2" id="2"></a>

열심히 무료 웹페이지 퍼블리싱을 서치하다가 찾았다.\
한눈에 들어오는 큼지막한 버튼과 아래의 테이블 디자인이 간결하고 직관적이라 마음에 들었다.\
좋은건 공유😉 [클릭클릭!](https://startbootstrap.com/template/sb-admin)\


<figure><img src="https://velog.velcdn.com/images/yooha9621/post/4c58f9e4-0268-4038-bd73-b54d33a41af3/image.png" alt=""><figcaption></figcaption></figure>

## \[3] 메인 페이지 띄우기 <a href="#3" id="3"></a>

### (1) static 파일 경로 설정 <a href="#1-static" id="1-static"></a>

app.js 파일을 열어 우선 static 파일들의 경로를 쉽게 호출하기 위해 아래와 같이 선언해주었다.

**app.js**

```javascript
app.use('/statics/css',express.static(path.join(__dirname, 'public/stylesheets')));
app.use('/statics/images',express.static(path.join(__dirname, 'public/images')));
```

### (2) 라우터 설정 <a href="#2" id="2"></a>

**discord/main 진입시 메인페이지를 띄우도록 구현해보자**

#### 1. 라우터 파일 생성 <a href="#1" id="1"></a>

* **discord/main** 진입시 메인페이지를 띄우는 컨트롤러(라우터)를 선언한다.
* 라우팅 툴로는 **express의 router 기능을 사용했다.**

**webhook.js**

```javascript
var express = require('express');
var router = express.Router();
const processInfoService = require('../../services/processInfo-service');
/*
실행 : 메인화면
*/ 
router.get('/main', 
    async function(req, res, next) {
        res.render('discord/main',{"processInfo" : processInfoService.getProcessInfoMap() });
    }
);
```

#### 2. 라우터 선언 <a href="#2" id="2"></a>

**app.js**

```javascript
var express = require('express');
var app = express();

var discordRouter = require('./routes/discord/webhook');
app.use('/discord', discordRouter);
```

### (3) 메인 페이지 만들기 <a href="#3" id="3"></a>

**1. ejs 페이지 생성**

* 앞에서 라우터에서 다음과 같이 view 경로를 선언했다.

```javascript
res.render('discord/main',{"processInfo" : processInfoService.getProcessInfoMap() });
```

* 따라서 **views/discord 디렉터리에 메인페이지로 띄울 main.ejs 파일을 생성한다.**\
  ![](https://velog.velcdn.com/images/yooha9621/post/4140b0e7-7759-4130-bc2c-e6d8d133ebf4/image.png)

**2. static 경로 설정하기**

* static한 파일을 이용하려면 앞전에 app.js 에서 따로 설정한 static 경로를 적어주어야 한다.

**app.js**

```javascript
app.use('/statics/css',express.static(path.join(__dirname, 'public/stylesheets')));
app.use('/statics/images',express.static(path.join(__dirname, 'public/images')));
```

**main.ejs**

```html
<!-- css 선언하는 부분 -->
<link rel="stylesheet" href="/discord/statics/css/styles.css">
<!-- 이미지 선언하는 부분 -->
<img src="/discord/statics/images/spinner2.gif" width="100px">
```

## \[4] 결과 <a href="#4" id="4"></a>

### (1) 메인 페이지 <a href="#1" id="1"></a>

<figure><img src="../../.gitbook/assets/image (4).png" alt=""><figcaption></figcaption></figure>

### (2) 입력/수정 창 <a href="#2" id="2"></a>

#### 입력 이전 <a href="#undefined" id="undefined"></a>

![](https://velog.velcdn.com/images/yooha9621/post/372f4497-650f-42e0-8ba3-4f9f4c311c45/image.png)

#### 입력 후 <a href="#undefined" id="undefined"></a>

![](https://velog.velcdn.com/images/yooha9621/post/48c5874b-fa26-469f-9e0d-c7c3391d1e3a/image.png)

**설명**

1. **비교하고자 하는 StocX의 상품**을 입력
   * adidas-yeezy-boost-700-magnet
2. **비교하고자 하는 Kream의 상품번호**을 입력
   * 21933
3. **한국에서 미국으로 보내는 택배비**를 입력
   * 30,000원
4. **미국에서 한국으로 보내는 택배비**를 입력
   * 13달러
5. 실시간 이율 계산값을 **전송할 배치 타입과 배치 주기**를 선택
   * 배치 타입 : 분 단위 (Minutes)
   * 배치 주기 : 30분
