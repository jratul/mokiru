---
title: "선형대수학"
description: "벡터 공간, 선형변환, 행렬, 고유값·고유벡터, 대각화, SVD를 다룹니다."
date: "2026-04-06"
subject: "math"
category: "선형대수학"
level: "university"
tags: ["선형대수", "고유값", "대각화", "SVD", "행렬", "대학수학"]
---

선형대수학은 현대 수학·공학·데이터과학의 공통 언어다. 여기서 배우는 행렬·고유값·SVD는 [AI 수학 선형대수](/math/ai-math/linear-algebra)의 신경망·PCA·추천 시스템에 그대로 쓰이고, 벡터 공간 개념은 [실해석학](/math/university/real-analysis)과 함수해석학의 기반이다. [고등 기하](/math/high/geometry)의 벡터와 내적이 이 과목의 출발점이다.

---

## 벡터 공간

### 왜 "공간"이라는 개념이 필요한가?

우리에게 익숙한 $\mathbb{R}^2$, $\mathbb{R}^3$ 외에도 "덧셈"과 "스칼라 배"가 잘 정의된 다양한 수학적 구조가 있다. 예를 들어:

- 2차 이하 다항식 전체: $(x^2 + 2x) + (3x - 1) = x^2 + 5x - 1$로 더해진다
- $2 \times 2$ 행렬 전체: 더하고 스칼라 배 할 수 있다
- 연속함수 전체: 두 연속함수의 합도 연속

이들 모두 공통된 규칙(공리)을 만족한다. 이 공통 구조를 **벡터 공간(vector space)**이라고 추상화하면, 하나의 이론으로 이 모든 경우를 다룰 수 있다.

**벡터 공간의 8가지 공리**

집합 $V$에 덧셈($+$)과 스칼라 곱이 정의되어:

| 공리 | 내용 |
|------|------|
| 교환법칙 | $\vec{u}+\vec{v}=\vec{v}+\vec{u}$ |
| 결합법칙 | $(\vec{u}+\vec{v})+\vec{w}=\vec{u}+(\vec{v}+\vec{w})$ |
| 영원소 | $\vec{u}+\vec{0}=\vec{u}$ |
| 역원 | $\vec{u}+(-\vec{u})=\vec{0}$ |
| 스칼라 분배 | $c(\vec{u}+\vec{v})=c\vec{u}+c\vec{v}$ |
| 벡터 분배 | $(c+d)\vec{u}=c\vec{u}+d\vec{u}$ |
| 결합 | $c(d\vec{u})=(cd)\vec{u}$ |
| 항등원 | $1\cdot\vec{u}=\vec{u}$ |

벡터 공간의 예: $\mathbb{R}^n$, $n$차 이하 다항식, $m \times n$ 행렬 전체, 연속함수 전체.

벡터 공간이 아닌 예: 양수 실수 집합 (역원 없음), 단위벡터 집합 (덧셈에 닫히지 않음).

### 부분공간 — 벡터 공간 안의 벡터 공간

$W \subseteq V$가 **부분공간(subspace)** ↔ 다음 세 조건:
1. $\vec{0} \in W$
2. $\vec{u}, \vec{v} \in W \implies \vec{u} + \vec{v} \in W$
3. $\vec{u} \in W, c \in \mathbb{R} \implies c\vec{u} \in W$

조건 2, 3을 합쳐 "$W$가 선형 결합에 닫혀 있다"고 한다.

**예제 1.** $\mathbb{R}^3$에서 $W = \{(x, y, 0) \mid x, y \in \mathbb{R}\}$ ($xy$평면):

- $\vec{0} = (0,0,0) \in W$ ✓
- $(x_1, y_1, 0) + (x_2, y_2, 0) = (x_1+x_2, y_1+y_2, 0) \in W$ ✓
- $c(x, y, 0) = (cx, cy, 0) \in W$ ✓

$W$는 부분공간이다. (기하적으로: $xy$ 평면은 원점을 지나는 "평평한 부분"이다.)

**예제 2.** $W = \{(x, y, 1) \mid x, y \in \mathbb{R}\}$ ($z=1$ 평면)는 부분공간이 아니다.

$\vec{0} = (0,0,0) \notin W$ (영벡터가 없음). 원점을 지나지 않는 평면은 부분공간이 아니다.

### 선형 독립과 기저

벡터들 $\{\vec{v}_1, \ldots, \vec{v}_k\}$이 **선형 의존(linearly dependent)**:

$$c_1\vec{v}_1 + \cdots + c_k\vec{v}_k = \vec{0}$$

을 만족하는 모두 0이 아닌 해 $(c_1, \ldots, c_k)$가 존재.

직관: 하나의 벡터가 나머지들의 선형 결합으로 표현될 수 있다. 즉 "중복 정보"가 있다.

**예제 3.** $\vec{v}_1 = (1, 0)$, $\vec{v}_2 = (0, 1)$, $\vec{v}_3 = (2, 3)$:

$\vec{v}_3 = 2\vec{v}_1 + 3\vec{v}_2$이므로 선형 의존. $\vec{v}_3$은 앞의 두 벡터로 표현 가능 → 중복.

**기저(basis)**: 선형 독립이고 $V$를 **생성(span)**하는 벡터들의 집합.

"최소한의 정보로 전체 공간을 표현할 수 있는 벡터들의 집합"이다.

**차원(dimension)**: 기저의 개수. 어떤 기저를 선택해도 항상 같다.

$\mathbb{R}^n$의 표준기저: $\vec{e}_1 = (1,0,\ldots,0)$, $\vec{e}_2 = (0,1,\ldots,0)$, ..., $\vec{e}_n = (0,\ldots,0,1)$

---

## 행렬과 선형계

### 행렬 — 선형변환의 표현

**행렬 곱의 의미**: $m \times n$ 행렬 $A$와 $n \times 1$ 벡터 $\vec{x}$의 곱 $A\vec{x}$는 $\vec{x}$에 선형변환 $T$를 적용한 결과다.

$A\vec{x} = x_1\vec{a}_1 + x_2\vec{a}_2 + \cdots + x_n\vec{a}_n$ (열벡터의 선형 결합)

여기서 $\vec{a}_j$는 $A$의 $j$번째 열. "행렬 $A$를 곱한다 = $A$의 열벡터들의 선형 결합 계수를 $\vec{x}$로 준다"는 의미다.

**행렬 곱의 규칙**: $(AB)_{ij} = A$의 $i$행과 $B$의 $j$열의 내적

$$AB = \begin{pmatrix}1&2\\3&4\end{pmatrix}\begin{pmatrix}5&6\\7&8\end{pmatrix} = \begin{pmatrix}1\cdot5+2\cdot7 & 1\cdot6+2\cdot8\\3\cdot5+4\cdot7 & 3\cdot6+4\cdot8\end{pmatrix} = \begin{pmatrix}19&22\\43&50\end{pmatrix}$$

**교환법칙 불성립 주의**: 일반적으로 $AB \neq BA$.

$$\begin{pmatrix}1&1\\0&0\end{pmatrix}\begin{pmatrix}0&1\\0&1\end{pmatrix} = \begin{pmatrix}0&2\\0&0\end{pmatrix}, \quad \begin{pmatrix}0&1\\0&1\end{pmatrix}\begin{pmatrix}1&1\\0&0\end{pmatrix} = \begin{pmatrix}0&0\\0&0\end{pmatrix}$$

### 행렬식 (Determinant)

**기하학적 의미**: $|\det A|$는 $A$의 열벡터로 이루어진 평행체의 **부피 비율**이다.

- $\det A = 0$: 열벡터들이 선형 의존 → 공간이 "납작해짐" → 역행렬 없음
- $\det A > 0$: 방향 보존 (행벡터들이 오른손 좌표계)
- $\det A < 0$: 방향 반전

$2 \times 2$: $\det\begin{pmatrix}a&b\\c&d\end{pmatrix} = ad - bc$

**직관**: $(a,b)$와 $(c,d)$로 이루어진 평행사변형의 (부호 포함) 넓이.

$3 \times 3$ (사러스 법칙 또는 여인수 전개):

$$\det A = a_{11}(a_{22}a_{33}-a_{23}a_{32}) - a_{12}(a_{21}a_{33}-a_{23}a_{31}) + a_{13}(a_{21}a_{32}-a_{22}a_{31})$$

**예제 4.** $\det\begin{pmatrix}2&1&0\\-1&3&2\\4&0&1\end{pmatrix}$:

$= 2(3\cdot1-2\cdot0) - 1((-1)\cdot1-2\cdot4) + 0 = 2\cdot3 - 1\cdot(-9) = 6+9 = 15$

### 가우스 소거법

$A\vec{x} = \vec{b}$를 풀 때 **첨가행렬** $(A|\vec{b})$를 행 기본 연산으로 **행사다리꼴**로 만든다.

세 가지 행 기본 연산:
1. 두 행 교환
2. 한 행에 스칼라 곱
3. 한 행에 다른 행의 스칼라 배를 더함

**예제 5.** $\begin{cases}2x + y - z = 8 \\ -3x - y + 2z = -11 \\ -2x + y + 2z = -3\end{cases}$

$$\begin{pmatrix}2&1&-1&|&8\\-3&-1&2&|&-11\\-2&1&2&|&-3\end{pmatrix}$$

$R_2 \leftarrow 2R_2 + 3R_1$, $R_3 \leftarrow R_3 + R_1$:

$$\begin{pmatrix}2&1&-1&|&8\\0&1&1&|&2\\0&2&1&|&5\end{pmatrix}$$

$R_3 \leftarrow R_3 - 2R_2$:

$$\begin{pmatrix}2&1&-1&|&8\\0&1&1&|&2\\0&0&-1&|&1\end{pmatrix}$$

후진 대입: $z = -1$, $y = 3$, $x = 2$.

**해의 존재와 유일성**:

$\text{rank}(A) = r$, $n$ = 변수의 수:

- $r = n$ 이고 $\text{rank}(A|\vec{b}) = r$: **유일한 해**
- $r < n$ 이고 $\text{rank}(A|\vec{b}) = r$: **무한히 많은 해** ($n-r$개의 자유변수)
- $\text{rank}(A) < \text{rank}(A|\vec{b})$: **해 없음** (불일치)

---

## 고유값과 고유벡터

### 직관 — "방향이 변하지 않는 벡터"

행렬 $A$를 적용하면 대부분의 벡터는 방향이 바뀐다. 하지만 특별한 벡터 $\vec{v}$는 방향이 유지되고 길이만 $\lambda$배 변한다:

$$A\vec{v} = \lambda\vec{v}$$

- $\lambda > 1$: 같은 방향으로 늘어남
- $0 < \lambda < 1$: 같은 방향으로 줄어듦
- $\lambda < 0$: 반대 방향으로 뒤집힘

**응용**: 마르코프 체인에서 고유값 1의 고유벡터가 **정상 분포(stationary distribution)**다.

### 고유값 계산

특성방정식: $\det(A - \lambda I) = 0$을 풀어 고유값 $\lambda$ 구함.

$\lambda$가 정해지면 $(A - \lambda I)\vec{v} = \vec{0}$의 영공간이 고유벡터 공간.

**예제 6.** $A = \begin{pmatrix}4&1\\2&3\end{pmatrix}$의 고유값과 고유벡터:

$$\det(A - \lambda I) = \det\begin{pmatrix}4-\lambda&1\\2&3-\lambda\end{pmatrix} = (4-\lambda)(3-\lambda) - 2 = \lambda^2 - 7\lambda + 10 = (\lambda-2)(\lambda-5) = 0$$

$\lambda_1 = 2$: $(A - 2I)\vec{v} = \vec{0}$

$$\begin{pmatrix}2&1\\2&1\end{pmatrix}\vec{v} = \vec{0} \implies 2v_1 + v_2 = 0 \implies \vec{v}_1 = \begin{pmatrix}1\\-2\end{pmatrix}$$

$\lambda_2 = 5$: $(A - 5I)\vec{v} = \vec{0}$

$$\begin{pmatrix}-1&1\\2&-2\end{pmatrix}\vec{v} = \vec{0} \implies -v_1 + v_2 = 0 \implies \vec{v}_2 = \begin{pmatrix}1\\1\end{pmatrix}$$

**예제 7.** $A = \begin{pmatrix}0&-1\\1&0\end{pmatrix}$ (90° 회전 행렬)의 특성방정식:

$$\lambda^2 + 1 = 0 \implies \lambda = \pm i$$

실수 고유값이 없다. 회전 변환은 실수 벡터 중 방향이 보존되는 것이 없다는 의미다.

### 대각화 — 행렬의 가장 단순한 표현

$n$개의 선형 독립인 고유벡터 $\vec{v}_1, \ldots, \vec{v}_n$이 있으면:

$$A = PDP^{-1}$$

여기서 $P = [\vec{v}_1 | \vec{v}_2 | \cdots | \vec{v}_n]$ (열에 고유벡터), $D = \text{diag}(\lambda_1, \ldots, \lambda_n)$ (대각에 고유값).

**대각화의 장점**:

$$A^k = PD^kP^{-1}, \quad D^k = \begin{pmatrix}\lambda_1^k & & \\ & \ddots & \\ & & \lambda_n^k\end{pmatrix}$$

행렬의 $k$제곱을 쉽게 계산할 수 있다.

**예제 8.** 피보나치 수열을 행렬로 계산.

피보나치: $F_{n+2} = F_{n+1} + F_n$은 다음 행렬 관계로 쓸 수 있다:

$$\begin{pmatrix}F_{n+1}\\F_n\end{pmatrix} = \begin{pmatrix}1&1\\1&0\end{pmatrix}\begin{pmatrix}F_n\\F_{n-1}\end{pmatrix} = A^{n-1}\begin{pmatrix}1\\1\end{pmatrix}$$

$A$를 대각화하면 $\lambda = \dfrac{1 \pm \sqrt{5}}{2}$ (황금비!)를 얻고, $n$번째 피보나치 수를 **닫힌 형태(closed form)**로 구할 수 있다.

### 스펙트럼 정리 (대칭행렬)

대칭행렬 $A^T = A$에 대해:

1. 고유값이 항상 **실수**
2. 다른 고유값에 대응하는 고유벡터들은 **직교**
3. 항상 **직교 대각화** 가능: $A = Q\Lambda Q^T$ ($Q^TQ = I$)

이것이 물리학에서 중요한 이유: 관측 가능한 양(에너지, 운동량)에 대응하는 연산자는 에르미트(실수 버전으로는 대칭)이므로 항상 실수 측정값을 가진다.

---

## 내적과 직교성

### 내적 — 기하학을 대수학으로

$$\langle \vec{u}, \vec{v} \rangle = \vec{u}^T\vec{v} = u_1v_1 + u_2v_2 + \cdots + u_nv_n$$

**코사인 공식**: $\cos\theta = \dfrac{\langle \vec{u}, \vec{v} \rangle}{\|\vec{u}\|\|\vec{v}\|}$

내적의 부호가 각도의 정보를 담는다:
- 내적 > 0: 예각 (60° 미만)
- 내적 = 0: 직각 (**직교**)
- 내적 < 0: 둔각

**예제 9.** $\vec{u} = (1, 2, 3)$, $\vec{v} = (4, -2, 0)$:

$\langle \vec{u}, \vec{v} \rangle = 4 - 4 + 0 = 0$ → 두 벡터는 **직교**

$\cos\theta = 0 \implies \theta = 90°$

### 최소제곱법 — 해가 없는 방정식에서 최선의 근사

측정 데이터로부터 모델을 구할 때, $A\vec{x} = \vec{b}$가 정확히 풀리지 않는 경우가 일반적이다 (방정식 수 > 변수 수, 측정 오차 포함). 이때 오차 $\|A\vec{x} - \vec{b}\|^2$를 최소화하는 $\hat{x}$를 구하는 것이 **최소제곱법**이다.

$$A^TA\hat{x} = A^T\vec{b} \quad \text{(정규 방정식)}$$

**예제 10.** 3개의 데이터 점 $(1, 2)$, $(2, 3)$, $(3, 5)$에 가장 잘 맞는 직선 $y = mx + b$ 찾기:

$$\begin{pmatrix}1&1\\2&1\\3&1\end{pmatrix}\begin{pmatrix}m\\b\end{pmatrix} = \begin{pmatrix}2\\3\\5\end{pmatrix}$$

3개 방정식, 2개 미지수 → 정확한 해가 없음.

$A^TA = \begin{pmatrix}14&6\\6&3\end{pmatrix}$, $A^T\vec{b} = \begin{pmatrix}23\\10\end{pmatrix}$

정규 방정식 풀면: $m = 1.5$, $b = 0.33$

직선: $y = 1.5x + 0.33$ (통계학의 선형회귀 공식과 동일!)

### 그람-슈미트 과정

독립인 벡터들로부터 **정규직교기저**를 만드는 체계적 방법.

아이디어: 새 벡터를 추가할 때마다 이미 구한 정규직교벡터들에 대한 "투영 성분"을 빼서 직교하게 만든다.

$$\vec{w}_2 = \vec{v}_2 - \underbrace{\langle \vec{v}_2, \vec{u}_1\rangle \vec{u}_1}_{\text{}\vec{v}_1\text{방향 성분 제거}}, \qquad \vec{u}_2 = \frac{\vec{w}_2}{\|\vec{w}_2\|}$$

**예제 11.** $\vec{v}_1 = (3, 0, 4)$, $\vec{v}_2 = (1, 0, 0)$에 그람-슈미트 적용:

$\vec{u}_1 = \dfrac{(3,0,4)}{5} = (0.6, 0, 0.8)$

투영: $\langle \vec{v}_2, \vec{u}_1\rangle = 1\cdot0.6 + 0 + 0 = 0.6$

$\vec{w}_2 = (1, 0, 0) - 0.6(0.6, 0, 0.8) = (1-0.36, 0, -0.48) = (0.64, 0, -0.48)$

$\|\vec{w}_2\| = \sqrt{0.64^2 + 0.48^2} = \sqrt{0.4096 + 0.2304} = 0.8$

$\vec{u}_2 = (0.8, 0, -0.6)$

확인: $\vec{u}_1 \cdot \vec{u}_2 = 0.6\cdot0.8 + 0 + 0.8\cdot(-0.6) = 0.48 - 0.48 = 0$ ✓

---

## SVD (특이값 분해)

### 모든 행렬에 적용 가능한 가장 강력한 분해

대각화는 정방행렬이고 $n$개의 독립 고유벡터가 있을 때만 가능하다. SVD는 **임의의 $m \times n$ 행렬**에 대해 적용된다.

$$A = U\Sigma V^T$$

- $U$: $m \times m$ 직교행렬 ($AA^T$의 고유벡터, **좌 특이벡터**)
- $\Sigma$: $m \times n$ 대각행렬 (특이값 $\sigma_1 \geq \sigma_2 \geq \cdots \geq 0$)
- $V$: $n \times n$ 직교행렬 ($A^TA$의 고유벡터, **우 특이벡터**)

**기하학적 의미**: 모든 선형변환은 "회전 → 늘리기 → 회전"으로 분해된다.

### SVD의 응용

**이미지 압축**: $200 \times 200$ 이미지를 행렬 $A$로 나타내면 40000개의 숫자가 필요하다. SVD로 분해 후 상위 $k$개 특이값만 유지하면:

$$A \approx \sigma_1\vec{u}_1\vec{v}_1^T + \sigma_2\vec{u}_2\vec{v}_2^T + \cdots + \sigma_k\vec{u}_k\vec{v}_k^T$$

각 항 $\vec{u}_i\vec{v}_i^T$는 $200 \times 200$ 행렬이지만, $200 + 200 = 400$개의 숫자로 표현 가능. $k = 20$이면 $20 \times (200 + 200 + 1) = 8020$개의 숫자로 원래 40000개를 근사 → 압축률 약 5배.

**PCA (주성분 분석)**: 데이터 행렬 $X$의 공분산 행렬 $\frac{1}{n}X^TX$의 고유벡터가 주성분이다. 이는 $X$의 SVD와 직결된다. 첫 번째 주성분이 데이터의 "가장 중요한 변동 방향"이다.

**추천 시스템**: 사용자 $m$명, 영화 $n$편의 평점 행렬 $A$ ($m \times n$)를 SVD 분해 후 낮은 랭크로 근사하면 "잠재 요인(latent factor)"을 추출할 수 있다. 사용자가 아직 보지 않은 영화의 평점을 예측하는 데 사용된다. Netflix Prize의 우승 알고리즘이 이 방법을 사용했다.

---

## 연습문제

**문제 1.** $A = \begin{pmatrix}1&2&1\\2&1&-1\\-1&3&4\end{pmatrix}$의 행렬식을 구하여라.

> **풀이**
>
> 1행으로 여인수 전개:
>
> $\det A = 1\cdot\det\begin{pmatrix}1&-1\\3&4\end{pmatrix} - 2\cdot\det\begin{pmatrix}2&-1\\-1&4\end{pmatrix} + 1\cdot\det\begin{pmatrix}2&1\\-1&3\end{pmatrix}$
>
> $= 1\cdot(4+3) - 2\cdot(8-1) + 1\cdot(6+1) = 7 - 14 + 7 = 0$
>
> 행렬식 = 0이므로 이 행렬은 **특이행렬**(역행렬 없음, 선형계에 유일한 해 없음).

---

**문제 2.** $A = \begin{pmatrix}5&2\\2&5\end{pmatrix}$를 직교 대각화하여라.

> **풀이**
>
> 특성방정식: $(5-\lambda)^2 - 4 = 0 \implies \lambda = 3, 7$
>
> $\lambda_1 = 3$: $(A-3I)\vec{v} = \vec{0} \implies \begin{pmatrix}2&2\\2&2\end{pmatrix}\vec{v}=\vec{0} \implies \vec{v}_1 = \dfrac{1}{\sqrt{2}}\begin{pmatrix}1\\-1\end{pmatrix}$
>
> $\lambda_2 = 7$: $(A-7I)\vec{v} = \vec{0} \implies \begin{pmatrix}-2&2\\2&-2\end{pmatrix}\vec{v}=\vec{0} \implies \vec{v}_2 = \dfrac{1}{\sqrt{2}}\begin{pmatrix}1\\1\end{pmatrix}$
>
> $\vec{v}_1 \cdot \vec{v}_2 = 0$ ✓ (대칭행렬이므로 자동으로 직교)
>
> $A = Q\Lambda Q^T$, $Q = \dfrac{1}{\sqrt{2}}\begin{pmatrix}1&1\\-1&1\end{pmatrix}$, $\Lambda = \begin{pmatrix}3&0\\0&7\end{pmatrix}$

---

**문제 3.** $A = \begin{pmatrix}1&2\\3&4\\5&6\end{pmatrix}$로 표현되는 방정식 $A\vec{x} = \vec{b}$에서 $\vec{b} = (1, 0, 1)^T$일 때 최소제곱해를 구하여라.

> **풀이**
>
> $A^TA = \begin{pmatrix}35&44\\44&56\end{pmatrix}$, $A^T\vec{b} = \begin{pmatrix}1+0+5\\2+0+6\end{pmatrix} = \begin{pmatrix}6\\8\end{pmatrix}$
>
> 정규 방정식: $\begin{pmatrix}35&44\\44&56\end{pmatrix}\hat{x} = \begin{pmatrix}6\\8\end{pmatrix}$
>
> $\det(A^TA) = 35\cdot56 - 44^2 = 1960 - 1936 = 24$
>
> $(A^TA)^{-1} = \dfrac{1}{24}\begin{pmatrix}56&-44\\-44&35\end{pmatrix}$
>
> $\hat{x} = \dfrac{1}{24}\begin{pmatrix}56\cdot6 + (-44)\cdot8\\(-44)\cdot6 + 35\cdot8\end{pmatrix} = \dfrac{1}{24}\begin{pmatrix}336-352\\-264+280\end{pmatrix} = \dfrac{1}{24}\begin{pmatrix}-16\\16\end{pmatrix} = \begin{pmatrix}-2/3\\2/3\end{pmatrix}$
