---
title: "선형대수학"
description: "벡터 공간, 선형변환, 행렬, 고유값·고유벡터, 대각화, SVD를 다룹니다."
date: "2026-04-06"
subject: "math"
category: "선형대수학"
level: "university"
tags: ["선형대수", "고유값", "대각화", "SVD", "행렬", "대학수학"]
---

선형대수학은 현대 수학·공학·데이터과학의 공통 언어다. 여기서 배우는 행렬·고유값·SVD는 [AI 수학 선형대수](/math/ai-math/linear-algebra)의 신경망·PCA·추천 시스템 그대로 쓰이고, 벡터 공간 개념은 [실해석학](/math/university/real-analysis)과 [함수해석학]의 기반이다. [고등 기하](/math/high/geometry)의 벡터와 내적이 이 과목의 출발점이다.

---

## 벡터 공간

### 공리적 정의

집합 $V$에 덧셈(+)과 스칼라 곱($\cdot$)이 정의되어 다음 8개 공리를 만족하면 **벡터 공간(vector space)**:

| 덧셈 공리 | 스칼라 곱 공리 |
|----------|-------------|
| 교환법칙: $\vec{u}+\vec{v}=\vec{v}+\vec{u}$ | 분배: $c(\vec{u}+\vec{v})=c\vec{u}+c\vec{v}$ |
| 결합법칙: $(\vec{u}+\vec{v})+\vec{w}=\vec{u}+(\vec{v}+\vec{w})$ | 분배: $(c+d)\vec{u}=c\vec{u}+d\vec{u}$ |
| 영벡터 존재: $\vec{u}+\vec{0}=\vec{u}$ | 결합: $c(d\vec{u})=(cd)\vec{u}$ |
| 역원 존재: $\vec{u}+(-\vec{u})=\vec{0}$ | 항등원: $1\cdot\vec{u}=\vec{u}$ |

벡터 공간의 예: $\mathbb{R}^n$, 다항식 전체, 연속함수 전체, $m \times n$ 행렬 전체.

### 부분공간

$W \subseteq V$가 **부분공간(subspace)** $\iff$:
1. $\vec{0} \in W$
2. $\vec{u}, \vec{v} \in W \implies \vec{u} + \vec{v} \in W$ (덧셈에 닫힘)
3. $\vec{u} \in W, c \in \mathbb{R} \implies c\vec{u} \in W$ (스칼라 곱에 닫힘)

조건 2, 3을 합쳐 "선형 결합에 닫혀 있다"고 한다.

### 선형 독립과 생성

벡터들 $\{\vec{v}_1, \ldots, \vec{v}_k\}$이 **선형 독립(linearly independent)**:

$$
c_1\vec{v}_1 + c_2\vec{v}_2 + \cdots + c_k\vec{v}_k = \vec{0} \implies c_1 = c_2 = \cdots = c_k = 0
$$

**생성(span)**: $\text{span}\{\vec{v}_1, \ldots, \vec{v}_k\} = \{c_1\vec{v}_1 + \cdots + c_k\vec{v}_k \mid c_i \in \mathbb{R}\}$

### 기저와 차원

$V$의 **기저(basis)**: 선형 독립이고 $V$를 생성하는 벡터들의 집합.

**차원(dimension)** $\dim V$: 기저의 원소 수. 이는 기저의 선택에 무관하게 일정하다.

$$
\mathbb{R}^n\text{의 표준기저}: \vec{e}_1=(1,0,\ldots,0),\; \vec{e}_2=(0,1,\ldots,0),\; \ldots,\; \vec{e}_n=(0,\ldots,0,1)
$$

---

## 행렬과 선형계

### 행렬 기본 연산

$m \times n$ 행렬 $A$, $n \times p$ 행렬 $B$의 곱 $AB$: $(i,j)$성분 $= A$의 $i$번째 행과 $B$의 $j$번째 열의 내적.

**성질**: 교환법칙 일반적으로 불성립 ($AB \ne BA$), 결합법칙 성립 $(AB)C = A(BC)$.

**전치행렬** $A^T$: $(A^T)_{ij} = A_{ji}$. $(AB)^T = B^T A^T$

**대칭행렬**: $A^T = A$. 항상 실수 고유값을 가지며 직교 대각화 가능.

### 행렬식 (Determinant)

$2 \times 2$: $\det\begin{pmatrix}a&b\\c&d\end{pmatrix} = ad - bc$

$n \times n$: 여인수 전개로 재귀적 계산 (코팩터 전개).

**기하학적 의미**: $|\det A|$ = $A$의 열(또는 행)벡터로 이루어진 평행체의 부피.

$\det A = 0 \iff A$는 특이행렬(singular, 역행렬 없음).

**성질**: $\det(AB) = \det A \cdot \det B$, $\det(A^T) = \det A$, $\det(A^{-1}) = \dfrac{1}{\det A}$

### 가우스 소거법과 해의 판별

첨가행렬 $(A | \vec{b})$를 행 기본 연산으로 행사다리꼴로 변환.

$$
\begin{pmatrix}1&2&|&5\\3&5&|&14\end{pmatrix} \xrightarrow{R_2-3R_1} \begin{pmatrix}1&2&|&5\\0&-1&|&-1\end{pmatrix}
$$

후진 대입: $y = 1$, $x = 3$

**해의 존재와 유일성**:
- $\text{rank}(A) = \text{rank}(A|\vec{b}) = n$: 유일한 해 (독립)
- $\text{rank}(A) = \text{rank}(A|\vec{b}) < n$: 무한히 많은 해 (종속)
- $\text{rank}(A) < \text{rank}(A|\vec{b})$: 해 없음 (불일치)

### 역행렬

$n \times n$ 행렬 $A$에 대해 $AA^{-1} = A^{-1}A = I$를 만족하는 $A^{-1}$:

$$
A^{-1} = \frac{1}{\det A}\text{adj}(A)
$$

단, $\text{adj}(A)$는 여인수행렬의 전치. $\det A \ne 0$일 때만 존재.

**계산 (가우스-조르당)**: $(A | I) \xrightarrow{\text{행 연산}} (I | A^{-1})$

---

## 행렬과 선형변환

### 선형변환

함수 $T: V \to W$가 **선형변환**:
- $T(\vec{u} + \vec{v}) = T(\vec{u}) + T(\vec{v})$
- $T(c\vec{u}) = cT(\vec{u})$

모든 선형변환은 행렬로 표현된다: $T(\vec{x}) = A\vec{x}$

**핵(kernel)**: $\ker T = \{\vec{x} \mid T(\vec{x}) = \vec{0}\}$, **상(image)**: $\text{im} T = \{T(\vec{x}) \mid \vec{x} \in V\}$

**차원 정리**: $\dim V = \dim(\ker T) + \dim(\text{im} T)$

### 행렬과 관련된 공간

$m \times n$ 행렬 $A$에서:
- **영공간(null space)**: $\{\vec{x} \mid A\vec{x} = \vec{0}\}$
- **열공간(column space)**: $A$의 열벡터들의 생성
- **행공간(row space)**: $A$의 행벡터들의 생성
- **계수(rank)**: $\dim(\text{열공간}) = \dim(\text{행공간})$

$$
\text{rank}(A) + \text{nullity}(A) = n \quad \text{(열의 수)}
$$

---

## 고유값과 고유벡터

### 정의

$n \times n$ 행렬 $A$에 대해:

$$
A\vec{v} = \lambda\vec{v}, \quad \vec{v} \ne \vec{0}
$$

- $\lambda$: **고유값(eigenvalue)**
- $\vec{v}$: **고유벡터(eigenvector)** (해당 $\lambda$에 대응)

**특성방정식**: $\det(A - \lambda I) = 0$

고유벡터는 $A$에 의해 변환되어도 방향이 바뀌지 않는다 (길이만 $\lambda$배 변함).

### 예제: $2 \times 2$ 행렬

$A = \begin{pmatrix}3&1\\1&3\end{pmatrix}$의 고유값·고유벡터:

특성방정식: $\det\begin{pmatrix}3-\lambda&1\\1&3-\lambda\end{pmatrix} = (3-\lambda)^2 - 1 = \lambda^2 - 6\lambda + 8 = (\lambda-2)(\lambda-4) = 0$

$\lambda_1 = 2$: $(A-2I)\vec{v} = \vec{0} \implies \vec{v}_1 = \begin{pmatrix}1\\-1\end{pmatrix}$

$\lambda_2 = 4$: $(A-4I)\vec{v} = \vec{0} \implies \vec{v}_2 = \begin{pmatrix}1\\1\end{pmatrix}$

### 대각화

$n \times n$ 행렬 $A$가 $n$개의 선형 독립인 고유벡터를 가지면 **대각화 가능**:

$$
A = PDP^{-1}
$$

단, $D = \text{diag}(\lambda_1, \ldots, \lambda_n)$ (대각행렬), $P$의 열 = 고유벡터들.

**응용**: $A^k = PD^kP^{-1}$이므로 행렬의 고차 거듭제곱을 쉽게 계산.

**스펙트럼 정리**: 대칭행렬 $A = A^T$는 항상 직교 대각화 가능 (고유벡터들이 서로 직교):

$$
A = Q\Lambda Q^T, \quad Q^T Q = I
$$

---

## 내적과 직교성

### 내적 공간

$$
\langle \vec{u}, \vec{v} \rangle = \vec{u}^T\vec{v} = u_1v_1 + u_2v_2 + \cdots + u_nv_n
$$

$$
\|\vec{v}\| = \sqrt{\langle \vec{v}, \vec{v} \rangle}, \qquad \cos\theta = \frac{\langle \vec{u}, \vec{v} \rangle}{\|\vec{u}\|\|\vec{v}\|}
$$

**직교**: $\langle \vec{u}, \vec{v} \rangle = 0$ ($\vec{u} \perp \vec{v}$)

**정규직교기저**: $\langle \vec{e}_i, \vec{e}_j \rangle = \delta_{ij}$ (크로네커 델타)

### 그람-슈미트 과정

독립인 벡터들 $\{\vec{v}_1, \vec{v}_2, \ldots, \vec{v}_n\}$에서 정규직교기저 $\{\vec{u}_1, \vec{u}_2, \ldots, \vec{u}_n\}$을 만드는 알고리즘:

$$
\vec{u}_1 = \frac{\vec{v}_1}{\|\vec{v}_1\|}
$$

$$
\vec{w}_2 = \vec{v}_2 - \langle \vec{v}_2, \vec{u}_1\rangle \vec{u}_1, \qquad \vec{u}_2 = \frac{\vec{w}_2}{\|\vec{w}_2\|}
$$

### 최소제곱 근사

$A\vec{x} = \vec{b}$가 해가 없을 때(과결정계), 오차 $\|A\vec{x} - \vec{b}\|^2$를 최소화하는 해:

$$
A^TA\hat{x} = A^T\vec{b} \quad \text{(정규 방정식)}
$$

이것이 **최소제곱법(least squares)**의 수학적 근거다. 선형회귀에 직접 사용된다.

---

## SVD (특이값 분해)

모든 $m \times n$ 행렬 $A$는 다음과 같이 분해된다:

$$
A = U\Sigma V^T
$$

- $U$: $m \times m$ 직교행렬 (좌 특이벡터)
- $\Sigma$: $m \times n$ 대각행렬 (특이값 $\sigma_1 \geq \sigma_2 \geq \cdots \geq 0$)
- $V$: $n \times n$ 직교행렬 (우 특이벡터)

**응용**:
- **차원 축소 (PCA)**: 상위 $k$개 특이값으로 $A \approx U_k\Sigma_k V_k^T$ (데이터 압축)
- **추천 시스템**: 사용자-아이템 행렬을 SVD로 분해
- **이미지 압축**: 이미지 행렬을 SVD로 분해하여 상위 성분만 유지
- **의사역행렬(pseudoinverse)**: $A^+ = V\Sigma^+U^T$

자세한 내용은 [AI 수학 선형대수](/math/ai-math/linear-algebra) 참고.

---

## 연습문제

**문제 1.** $A = \begin{pmatrix}3&1\\1&3\end{pmatrix}$의 고유값과 고유벡터를 구하여라.

> **풀이**
>
> 특성방정식: $(\lambda-2)(\lambda-4) = 0 \implies \lambda_1 = 2, \lambda_2 = 4$
>
> $\lambda_1 = 2$: $\vec{v}_1 = (1,-1)^T$; $\lambda_2 = 4$: $\vec{v}_2 = (1,1)^T$

---

**문제 2.** 가우스 소거법으로 $\begin{cases}x + 2y = 5 \\ 3x + 5y = 14\end{cases}$를 풀어라.

> **풀이**
>
> $\begin{pmatrix}1&2&|&5\\3&5&|&14\end{pmatrix} \xrightarrow{R_2-3R_1} \begin{pmatrix}1&2&|&5\\0&-1&|&-1\end{pmatrix}$
>
> $y = 1$, $x = 5 - 2(1) = 3$

---

**문제 3.** 벡터 $\vec{v}_1 = (1, 0, 1)$, $\vec{v}_2 = (0, 1, 1)$에 그람-슈미트 과정을 적용하여 정규직교기저를 구하여라.

> **풀이**
>
> $\vec{u}_1 = \dfrac{\vec{v}_1}{\|\vec{v}_1\|} = \dfrac{(1,0,1)}{\sqrt{2}} = \left(\dfrac{1}{\sqrt{2}}, 0, \dfrac{1}{\sqrt{2}}\right)$
>
> $\vec{w}_2 = \vec{v}_2 - \langle \vec{v}_2, \vec{u}_1\rangle \vec{u}_1$
>
> $\langle (0,1,1), \vec{u}_1\rangle = \dfrac{0+0+1}{\sqrt{2}} = \dfrac{1}{\sqrt{2}}$
>
> $\vec{w}_2 = (0,1,1) - \dfrac{1}{\sqrt{2}} \cdot \left(\dfrac{1}{\sqrt{2}}, 0, \dfrac{1}{\sqrt{2}}\right) = \left(-\dfrac{1}{2}, 1, \dfrac{1}{2}\right)$
>
> $\|\vec{w}_2\| = \sqrt{\dfrac{1}{4} + 1 + \dfrac{1}{4}} = \sqrt{\dfrac{3}{2}}$
>
> $\vec{u}_2 = \dfrac{\vec{w}_2}{\|\vec{w}_2\|} = \left(-\dfrac{1}{\sqrt{6}}, \dfrac{2}{\sqrt{6}}, \dfrac{1}{\sqrt{6}}\right)$

---

**문제 4.** $A = \begin{pmatrix}2&1\\1&2\end{pmatrix}$를 대각화하여 $A^5$를 계산하여라.

> **풀이**
>
> 고유값: $\lambda_1 = 1$, $\lambda_2 = 3$; 고유벡터: $\vec{v}_1 = (1,-1)^T$, $\vec{v}_2 = (1,1)^T$
>
> $P = \begin{pmatrix}1&1\\-1&1\end{pmatrix}$, $D = \begin{pmatrix}1&0\\0&3\end{pmatrix}$
>
> $A^5 = PD^5P^{-1}$, $D^5 = \begin{pmatrix}1&0\\0&243\end{pmatrix}$
>
> $P^{-1} = \dfrac{1}{2}\begin{pmatrix}1&-1\\1&1\end{pmatrix}$
>
> $A^5 = \dfrac{1}{2}\begin{pmatrix}1&1\\-1&1\end{pmatrix}\begin{pmatrix}1&0\\0&243\end{pmatrix}\begin{pmatrix}1&-1\\1&1\end{pmatrix} = \begin{pmatrix}122&121\\121&122\end{pmatrix}$
