# (1) 상품 관련 VO 모음

## \[1] 클래스 다이어그램&#x20;

<figure><img src="../../../../.gitbook/assets/image.png" alt=""><figcaption></figcaption></figure>

## \[2] 구성

### (1) prodObj

#### 링크 이동 👉 [1.-vo.md](1.-vo.md "mention")

* **prcInfo , apiRsult 객체를 참조한다.**

### (2) prcInfo

#### 링크 이동 👉 [2.-vo.md](2.-vo.md "mention") (사이즈별)

* **prodObj 객체에 의존적이다.(= prodObj 자신의 부모 역할이기 때문에 prodObj가 반드시 존재한다.)**

### (3) apiResult

링크 이동 👉 [3.-api-vo.md](3.-api-vo.md "mention")

### (4) sizeMap

* **한국-미국 사이즈 맵핑 VO**
* **ENUM의 성격을 가진다.**

### (5) templateInfo

* **한국-미국 가격 현지화에 필요한 VO**

