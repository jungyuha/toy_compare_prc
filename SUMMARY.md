# Table of contents

* [👟 상품 리셀 이율 자동 알림 시스템](README.md)
  * [시스템 소개](readme/undefined.md)
  * [기능 소개](readme/undefined-1.md)

## Detail

* [\[1\] 이론 학습](<my-role/\[1] 자바스크립트 이론 학습/README.md>)
  * [클래스 다이어그램 작성법](<my-role/\[1] 자바스크립트 이론 학습/undefined.md>)
  * [\[javascript\] enum 사용하기](<detail/\[1] 자바스크립트 이론 학습/javascript-enum.md>)
  * [\[javascript\]class 생성 , getter setter 적용하기](<detail/\[1] 자바스크립트 이론 학습/javascript-class-getter-setter.md>)
* [\[2\] 프로젝트 설계](<my-role/\[2] 프로젝트 설계/README.md>)
  * [클래스(객체)](<my-role/\[2] 프로젝트 설계/undefined/README.md>)
    * [(1) VO](<my-role/\[2] 프로젝트 설계/undefined/(1) VO 설계 및 설계도 작성/README.md>)
      * [1. VO 구조](<my-role/\[2] 프로젝트 설계/undefined/(1) VO 설계 및 설계도 작성/1.-vo.md>)
      * [2. 상품](<my-role/\[2] 프로젝트 설계/undefined/(1) VO 설계 및 설계도 작성/2./README.md>)
        * [1. 상품 VO 구조](<my-role/\[2] 프로젝트 설계/undefined/(1) VO 설계 및 설계도 작성/2./1.-vo.md>)
        * [2. prodObj (상품 기본)](<my-role/\[2] 프로젝트 설계/undefined/(1) VO 설계 및 설계도 작성/2./2.-prodobj.md>)
        * [3. prcInfo (상품 상세)](<my-role/\[2] 프로젝트 설계/undefined/(1) VO 설계 및 설계도 작성/2./3.-prcinfo.md>)
        * [4. apiResult (api 상태)](<my-role/\[2] 프로젝트 설계/undefined/(1) VO 설계 및 설계도 작성/2./4.-apiresult-api.md>)
        * [5. sizeMap(사이즈 맵핑)](<my-role/\[2] 프로젝트 설계/undefined/(1) VO 설계 및 설계도 작성/2./5.-sizemap.md>)
        * [6. templateInfo](<my-role/\[2] 프로젝트 설계/undefined/(1) VO 설계 및 설계도 작성/2./6.-templateinfo.md>)
      * [3. 작업](<my-role/\[2] 프로젝트 설계/undefined/(1) VO 설계 및 설계도 작성/3./README.md>)
        * [1. processInfo](<my-role/\[2] 프로젝트 설계/undefined/(1) VO 설계 및 설계도 작성/3./1.-processinfo.md>)
      * [4. 알림 메시지](<my-role/\[2] 프로젝트 설계/undefined/(1) VO 설계 및 설계도 작성/4./README.md>)
        * [1. 메시지 VO 구조](<my-role/\[2] 프로젝트 설계/undefined/(1) VO 설계 및 설계도 작성/4./1.-vo.md>)
        * [2. msgTemplate (메시지 단위)](<my-role/\[2] 프로젝트 설계/undefined/(1) VO 설계 및 설계도 작성/4./2.-msgtemplate.md>)
        * [3. msgInfo(사이즈별 단위)](<my-role/\[2] 프로젝트 설계/undefined/(1) VO 설계 및 설계도 작성/4./3.-msginfo.md>)
    * [(2) DTO](<my-role/\[2] 프로젝트 설계/undefined/2-dto/README.md>)
      * [1. body](<my-role/\[2] 프로젝트 설계/undefined/2-dto/1.-body.md>)
    * [(3) 서비스](<my-role/\[2] 프로젝트 설계/undefined/(2) 서비스 레이어 모듈화/README.md>)
      * [1. 서비스 구조](<my-role/\[2] 프로젝트 설계/undefined/(2) 서비스 레이어 모듈화/1..md>)
      * [2. gettingInfoService](<my-role/\[2] 프로젝트 설계/undefined/(2) 서비스 레이어 모듈화/2.-gettinginfoservice.md>)
      * [3. createTemplateService](<my-role/\[2] 프로젝트 설계/undefined/(2) 서비스 레이어 모듈화/3.-createtemplateservice.md>)
      * [4. sendingWebhookService](<my-role/\[2] 프로젝트 설계/undefined/(2) 서비스 레이어 모듈화/4.-sendingwebhookservice.md>)
      * [5. processInfoService](<my-role/\[2] 프로젝트 설계/undefined/(2) 서비스 레이어 모듈화/5.-processinfoservice.md>)
  * [메인 액티비티(동작)](<my-role/\[2] 프로젝트 설계/undefined-1/README.md>)
    * [1. 스케쥴러 등록](<my-role/\[2] 프로젝트 설계/undefined-1/1./README.md>)
      * [기능 소개](<my-role/\[2] 프로젝트 설계/undefined-1/1./undefined.md>)
      * [시퀀스 다이어그램](<my-role/\[2] 프로젝트 설계/undefined-1/1./undefined-1.md>)
    * [2. 스케쥴러(Job) 수정](<my-role/\[2] 프로젝트 설계/undefined-1/2.-job/README.md>)
      * [기능 소개](<my-role/\[2] 프로젝트 설계/undefined-1/2.-job/undefined.md>)
      * [시퀀스 다이어그램](<my-role/\[2] 프로젝트 설계/undefined-1/2.-job/undefined-1.md>)
    * [3. 상품 가격 정보 조회](<my-role/\[2] 프로젝트 설계/undefined-1/3..md>)
    * [4. 실시간 이율 계산](<my-role/\[2] 프로젝트 설계/undefined-1/4..md>)
    * [5. 실시간 이율 알림 전송](<my-role/\[2] 프로젝트 설계/undefined-1/5./README.md>)
      * [기능 플로우차트](<my-role/\[2] 프로젝트 설계/undefined-1/5./undefined.md>)
      * [시퀀스 다이어그램](<my-role/\[2] 프로젝트 설계/undefined-1/5./undefined-1.md>)
* [\[3\] 프로젝트 구현](<my-role/\[3] 프로젝트 구현/README.md>)
  * [(1) node 프로젝트 생성](<my-role/\[3] 프로젝트 구현/(1) node 프로젝트 생성.md>)
  * [(2) 메인 페이지 만들기](<my-role/\[3] 프로젝트 구현/(2) bootstrap5 활용해 간단한 ejs 화면 구현.md>)
  * [(3) gulp를 통해 빌드 자동화하기](<my-role/\[3] 프로젝트 구현/(3) gulp를 활용해 프로젝트 띄우기.md>)
  * [(4) jest를 활용해 단위테스트 구현](<my-role/\[3] 프로젝트 구현/(4) jest를 활용해 단위테스트 구현.md>)
  * [(5) stockX api 호출하기](<my-role/\[3] 프로젝트 구현/(5) stockX api 호출과 단위 테스트 구현.md>)
  * [(6) kream api 호출하기(got 라이브러리 사용법)](<my-role/\[3] 프로젝트 구현/(6) kream api 통신 단위 테스트 구현(got 라이브러리 사용법).md>)
  * [(7) discord 서버 webhook(웹훅) 생성](<my-role/\[3] 프로젝트 구현/(7) discord 서버 webhook(웹훅) 생성.md>)
  * [(8) 디스코드 webhook(웹훅) api 호출 및 단위 테스트 수행](<my-role/\[3] 프로젝트 구현/(8) 디스코드 webhook(웹훅) api 호출 및 단위 테스트 수행.md>)
  * [(9) webhook(웹훅) 배치 전송 스케쥴링 구현](<my-role/\[3] 프로젝트 구현/(9) webhook(웹훅) 배치 전송 스케쥴링 구현.md>)
