# (3) gulp를 통해 빌드 자동화하기

## \[0] 사용 스택 <a href="#undefined" id="undefined"></a>

### **1) 자동화 빌드 툴 :** gulp

## gulp를 활용해 빌드를 자동화하자! <a href="#gulp" id="gulp"></a>

> **✅ gulp란?**
>
> * GULP는 JavaScript의 빌드 자동화 툴이다.
> * 웹 개발 시 필요한 최적화, 유닛 테스트 등 반복되는 task들을 자동화 하기위해 사용된다.
> * gulp를 통해 프로젝트의 코드 변경 시 프로젝트를 자동으로 재시작하여 손쉽게 개발할 수 있다.
>   * gulp의 watch함수 기능

## \[1] gulp 적용하기 <a href="#1-gulp" id="1-gulp"></a>

### 1) gulp 설치하기 <a href="#1-gulp" id="1-gulp"></a>

기존에 쓰던 방식 그대로 다음과 같이 세 개의 gulp 패키지를 설치했다.

* gulp
* gulp-nodemon
* gulp-load-plugins

```
$ npm install gulp gulp-nodemon gulp-load-plugins
```

### 2) package.json에 gulp 패키지 추가하기 <a href="#2-packagejson-gulp" id="2-packagejson-gulp"></a>

**package.json**

```json
  "scripts": {
    "start": "node ./bin/www",
    "dev": "gulp"
  },
  "dependencies": {
    "gulp": "^4.0.2",
    "gulp-load-plugins": "^2.0.6",
    "gulp-nodemon": "^2.5.0"
  }
}
```

### 3) 빌드 실행 <a href="#3" id="3"></a>

```
$ npm run dev
```

실행하면 .. 두근두근 ! 💕\
.\
.\
.\
**오류남ㅎㅋ**\
**안녕히계세요. 이만 글 접습니다.**

## \[2] gulpfile 생성하기 <a href="#2-gulpfile" id="2-gulpfile"></a>

당연함 ㅋ 빌드 실행 설정 파일이 없으니 노드도 겁나 황당할것ㅎ\
왜 안되는지 노트북부터 때릴 생각말고 노드 쪽 입장도 들어봐야함\


<figure><img src="https://velog.velcdn.com/images/yooha9621/post/d1b1dd1b-79e0-43c3-9d3c-88ed21c0470c/image.png" alt=""><figcaption></figcaption></figure>

### 1) gulpfile.js 생성하기 <a href="#1-gulpfilejs" id="1-gulpfilejs"></a>

* gulpfile.js 파일을 루트 경로에 생성한다.
*   변경된 파일들은 자동으로 재빌드 될 수 있도록 한 폴더에 묶어놓고 싶어 src 폴더를 만들어 디렉토리 구조를 조금 변경했다.\


    <figure><img src="https://velog.velcdn.com/images/yooha9621/post/2171040c-9323-4384-8186-57a9d5103e16/image.png" alt=""><figcaption></figcaption></figure>

#### **gulpfile.js**

```javascript
'use strict';
var gulp = require('gulp');
var gulpLoadPlugins = require('gulp-load-plugins');
var plugins = gulpLoadPlugins();

gulp.task('server', function () {
	return plugins.nodemon({
		script: 'bin/www',
		watch: 'src/'
	});
});

gulp.task('default', gulp.series('server'));
```

## \[3] 빌드 실행 <a href="#3-1" id="3-1"></a>

### **1) 빌드 실행하기**

```
$ npm run dev
```

\
**잘 돌아간다!**

<figure><img src="https://velog.velcdn.com/images/yooha9621/post/fd071eb6-6200-4a83-a771-e3ece16e9114/image.png" alt=""><figcaption></figcaption></figure>

### **2) src안에 있는 파일들을 변경해보기**

**터미널에 다음과 같이 뜨면서 재시작된다.**\


<figure><img src="https://velog.velcdn.com/images/yooha9621/post/1f312821-913f-47cb-a990-e3315d6aba28/image.png" alt=""><figcaption></figcaption></figure>

