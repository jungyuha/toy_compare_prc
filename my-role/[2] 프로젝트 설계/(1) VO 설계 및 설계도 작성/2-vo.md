# (2) 프로세스 VO

## \[1] 객체 정보

### (1) 객체명 : processInfo

### (2) 용도

* **사용자가 등록한 JOB(배치) 프로세스 정보를 담는다.**

## \[2] 클래스 다이어그램

### (1) processInfo 클래스

#### 1. 다이어그램&#x20;

<figure><img src="../../../.gitbook/assets/image (2) (2).png" alt=""><figcaption></figcaption></figure>

#### 2. 속성

1. **processId** : 프로세스 일련번호
2. **stockXProdId** : stockX 상품 Id
3. **kreamProdId** : kream 상품 Id
4. **stockXUrl** : stockX 상품 url
5. **kreamUrl** : kream 상품 url
6. **intervalUnit** : 배치 타입
   * 1번만 전송
   * 분 단위
   * 시간 단위
   * 일 단위&#x20;
7. **interval** : 배치 값
   * ex) 30분 , 3일 ...
8. **status** : 프로세스 타입
   * 배치 실행중
   * 배치 일시 정지
   * 단발성 배치
9. **lastSent** : 마지막 전송 일시
10. **deliveryFeeToUs** : 한국에서 미국으로의 운송 비용
11. **deliveryFeeToKr** : 미국에서 한국으로의 운송 비용
12. **exchange** : 환율
13. **failMsg** : 배치 실패 사유
14. **lastModified** : 배치 마지막 수정일시
