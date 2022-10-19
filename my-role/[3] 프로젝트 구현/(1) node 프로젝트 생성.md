# (1) node 프로젝트 생성

<figure><img src="https://velog.velcdn.com/images/yooha9621/post/160db2b7-bac7-4507-b242-bfebb47b3ab6/image.png" alt=""><figcaption></figcaption></figure>

npm은 미리 설치가 되어있어 설명은 생략!\
흠..그래도 기본 개념은 못참지

> **✅ npm이란?**
>
> Node.js로 만들어진 모듈을 설치하고 관리해 주는 프로그램이다.

## express-generator로 프로젝트 구조까지 자동 생성하기 <a href="#express-generator" id="express-generator"></a>

*   나는 노드로 웹서버를 만들거라서 서버 구축에 필수인 express 모듈 설치겸 프로젝트 구조도 자동으로 잡고자 express-generator를 설치했다.

    > **✅ express 모듈은 무엇인가요?**
    >
    > * NodeJS를 사용하여 쉽게 서버를 구성할 수 있게 만든 클래스와 라이브러리의 집합체
    > * HTTP 통신 요청(Request; GET, POST, DELETE 등)에 대한 핸들러를 만든다.

### express-generator 설치 <a href="#express-generator" id="express-generator"></a>

프로젝트를 만들고자 하는 디렉토리에 들어가 다음 명령어를 실행한다.

```
$ npm -g install express-generator
```

express-generator를 설치한 뒤 다음 명령어로 잘 설치 되어있는지 확인한다.

```
$ express -h
```

express-generator로 프로젝트를 만드는 명령어는 다음과 같다.

```
$ express <프로젝트명> --view=<템플릿 엔진명>
```

나는 화면은 간단하게 ejs로 구현할 거라 ejs를 선택\~!

```
$ express compare_prc --view=ejs
```

### npm 패키지 생성 <a href="#npm" id="npm"></a>

만들어진 compare\_prc 프로젝트 디렉토리로 들어가 npm install을 실행해 노드 패키지로 만들어준다.

```
$ npm install
```

### 프로젝트 기초 구축 완성🤩 <a href="#undefined" id="undefined"></a>

![](https://velog.velcdn.com/images/yooha9621/post/d14ef407-dede-4368-894c-321eb822a113/image.png)

### (+) 깃허브 연동 오류 <a href="#undefined" id="undefined"></a>

이 게시글을 다 쓰고 나는 그냥 바로 커밋하면 될 줄 알았는데 ㅎ...\
vscode와 깃허브 계정 연동에 자꾸 오류가 나서 1시간을 잡아먹었다.🤬\
결론만 말하자면..

**password란에 이제 비밀번호가 아닌 새로 생성한 토큰을 쳐야함..^^..**

**그리고 토큰은 한번 만들고나면 다시 알 수 없으므로 만들어지자마자 복사해서 어딘가에 보관해둘것\~\~!!**

그럼 진짜 끝 ^^...

> **🐶 갑자기 아주 짧은 사담 타임(1)..**
>
> * 대학생때부터 시작해서 나름 코딩한다고 키보드를 잡은지 어언 5년정도가 되가니 느끼는 점이 몇 가지 있는데 그 중 하나가 불현듯 떠오름 ㅋㅋ
> * 코딩은 코드를 잘 짜는 것도 물론 엄청 중요하지만 남이 올린 패키지들을 얼마나 적재적소에 잘 활용하여 효율성있는 프로젝트를 구현할 수 있는지 도 한 몫 하는 것 같다.
> * 그리고 그렇게 남이 만든 패키지를 쉽게 가져와서 내가 원하는 프로젝트를 뚝딱뚝딱 만들기에는 노드만한 게 없는 것 같다.
> * 결론은 개인적으로 토이 프로젝트로 원하는 걸 재미있고 짧은 시간 내에 만들고 싶으면 노드가 짱👍 (npm 짱짱맨😆)
