# 기능 소개

**웹훅을 발송하는 프로세스를 추가한다.**

<figure><img src="../../../../.gitbook/assets/image (5) (2).png" alt="" width="370"><figcaption><p><strong>웹훅을 발송하는 프로세스를 추가한다.</strong></p></figcaption></figure>

&#x20;

## \[1] 프로세스(process)

<figure><img src="../../../../.gitbook/assets/image (15).png" alt="" width="334"><figcaption><p>주기 발송 프로세스</p></figcaption></figure>

<figure><img src="../../../../.gitbook/assets/image (17).png" alt="" width="284"><figcaption><p>1회 발송 프로세스</p></figcaption></figure>

* 웹훅을 실질적으로 발송하는 **작업(Job) 객체를** 가짐
* 클래스 자료형은 [1.-processinfo.md](<../../undefined/(1) VO 설계 및 설계도 작성/3./1.-processinfo.md> "mention") VO이다.&#x20;

## \[2] 작업(Job)

<figure><img src="../../../../.gitbook/assets/image (2) (2) (1).png" alt="" width="347"><figcaption><p>작업</p></figcaption></figure>

* 웹훅을 주기적으로 발송하는 데에 필요한 정보를 담은 객체이다.
* **웹훅을 발송하는 실질 구현체**를 Task로 가진다.
* **스케줄러**에 등록되어 주기적으로 **Task(웹훅 발송)** 가 실행된다.
* 클래스 자료형은 **toad-scheduler** 라이브러리의 **SimpleIntervalJob** 객체이다.

## \[3] 스케쥴러(scheduler)

<figure><img src="../../../../.gitbook/assets/image (3) (1) (2).png" alt=""><figcaption><p>스케줄러</p></figcaption></figure>

* Job 객체에 정의된 **주기**에 맞춰 Job 객체에 설정된 **Task**를 주기적으로 실행
* **toad-scheduler** 라이브러리의 **ToadScheduler** 객체를 사용한다.
