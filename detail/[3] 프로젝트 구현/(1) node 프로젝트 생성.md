# (1) node 프로젝트 생성

<figure><img src="https://velog.velcdn.com/images/yooha9621/post/160db2b7-bac7-4507-b242-bfebb47b3ab6/image.png" alt="" width="375"><figcaption><p>프로젝트 구조</p></figcaption></figure>

## \[1] NPM이란? &#x20;

> **✅ npm이란?**
>
> Node.js로 만들어진 모듈을 설치하고 관리해 주는 프로그램이다.

## \[2] express-generator로 프로젝트 구조 자동 생성하기 <a href="#express-generator" id="express-generator"></a>

* express-generator는 프로젝트 생성 웹 프레임 워크이다.
* 노드의 프로젝트 구조를 자동으로 생성할 수 있다.
* 노드에서 웹 서버 구축에 필수인 express 모듈을 지원한다.

> **✅ express 모듈은 무엇인가요?**
>
> * NodeJS를 사용하여 쉽게 서버를 구성할 수 있게 만든 클래스와 라이브러리의 집합체
> * HTTP 통신 요청(Request; GET, POST, DELETE 등)에 대한 핸들러를 만든다.

### (1) express-generator 설치 <a href="#express-generator" id="express-generator"></a>

프로젝트를 만들고자 하는 디렉토리에 들어가 다음 명령어를 실행한다.

```
$ npm -g install express-generator
```

express-generator를 설치한 뒤 다음 명령어로 잘 설치 되어있는지 확인한다.

```
$ express -h
```

### (2) express-generator로 프로젝트 생성하기 <a href="#express-generator" id="express-generator"></a>

express-generator로 프로젝트를 만드는 명령어는 다음과 같다.

```
$ express <프로젝트명> --view=<템플릿 엔진명>
```

프론트 템플릿 엔진으로 ejs를 선택했다.

```
$ express compare_prc --view=ejs
```

### (3) npm 패키지 생성 <a href="#npm" id="npm"></a>

만들어진 compare\_prc 프로젝트 디렉토리로 들어가 npm install을 실행해 노드 패키지로 만들어준다.

```
$ npm install
```

## \[3] 프로젝트 기초 구축 완성🤩 <a href="#undefined" id="undefined"></a>

<figure><img src="../../.gitbook/assets/image (1) (1).png" alt="" width="375"><figcaption><p>프로젝트 구조</p></figcaption></figure>

### (+) 깃허브 연동 오류 <a href="#undefined" id="undefined"></a>

이 게시글을 다 쓰고 나는 그냥 바로 커밋하면 될 줄 알았는데\
vscode와 깃허브 계정 연동에 자꾸 오류가 나서 1시간을 잡아먹었다.\
결론은..

**password란에 이제 비밀번호가 아닌 새로 생성한 토큰을 쳐야했다.**

**토큰은 한번 만들고나면 다시 알 수 없으므로 만들어지자마자 복사해서 어딘가에 보관해둘것!**

> **🐶 오늘의 느낀점**
>
> *   코드를 잘 구현하는 것은 당연히 중요하고 더 나아가 오픈소스를 적재적소에 알맞은 용도로 활용하여
>
>     프로젝트를 효율적으로 진행해 나가야 한다.
> * 적당한 오픈소스를 찾아 프로젝트에 원하는 기능을 구현하는 데에 있어 노드만한 수단이 없는 것 같다.
