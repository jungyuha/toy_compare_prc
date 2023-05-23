# 기능 소개

**웹훅을 발송하는 프로세스를 추가한다.**

<figure><img src="../../../../.gitbook/assets/image (14).png" alt="" width="375"><figcaption></figcaption></figure>

&#x20;

{% file src="../../../../.gitbook/assets/kream.drawio" %}

## \[1] 프로세스(process)

* 웹훅을 실질적으로 발송하는 **작업(Job) 객체를** 가짐
* 클래스 자료형은 [1.-processinfo.md](<../../undefined/(1) VO 설계 및 설계도 작성/3./1.-processinfo.md> "mention") VO이다.&#x20;

<figure><img src="../../../../.gitbook/assets/image (5).png" alt="" width="346"><figcaption><p>프로세스(process)</p></figcaption></figure>

## \[2] 발송작업(Job)

웹훅을 실질적으로 발송하는 객체

### (1) 주기성 작업

전송 주기 : n분 / n시간 / n일

<figure><img src="../../../../.gitbook/assets/image (5) (1).png" alt="" width="368"><figcaption></figcaption></figure>

### (2) 일회성 작업

<figure><img src="../../../../.gitbook/assets/image (1).png" alt="" width="375"><figcaption></figcaption></figure>
