---
title: "행렬 곱셈"
description: "행렬 곱셈의 정의, 성질, 선형 변환과의 연결, 컴퓨터 그래픽스·신경망 응용을 설명합니다."
date: "2026-04-04"
subject: "math"
category: "선형대수학"
level: "university"
tags: ["행렬", "선형변환", "선형대수", "행렬곱", "변환행렬"]
---

행렬 곱셈은 처음 보면 이상하게 느껴진다. 왜 원소끼리 단순히 곱하지 않고, 행과 열의 내적을 계산하는 복잡한 규칙을 쓸까? 이 규칙이 자연스럽고 필연적인 이유는, **행렬 곱셈이 선형 변환의 합성(composition)**을 나타내도록 설계되었기 때문이다.

공간을 회전하고, 이어서 크기를 늘리는 두 가지 변환을 연속으로 적용한다고 하자. 각 변환이 행렬로 표현된다면, 두 변환을 합친 "한 번에 하는 변환"은 두 행렬의 곱으로 표현된다. 이것이 행렬 곱셈이 정의된 이유다.

이 개념은 [선형대수학](/math/university/linear-algebra) 전체를 관통하며, [AI 수학 선형대수](/math/ai-math/linear-algebra)에서 신경망의 층별 계산, 컴퓨터 그래픽스의 3D 렌더링, 물리학의 변환군 이론까지 쓰인다.

---

## 행렬 곱셈의 정의

### 크기 조건

$m \times n$ 행렬 $A$와 $n \times p$ 행렬 $B$를 곱할 때:

$$
A_{m \times n} \cdot B_{n \times p} = C_{m \times p}
$$

핵심: **앞 행렬의 열 수 = 뒤 행렬의 행 수** 이어야 곱이 정의된다. 결과 행렬의 크기는 $m \times p$.

### 곱셈 공식

$(AB)$의 $(i, j)$ 성분:

$$
(AB)_{ij} = \sum_{k=1}^{n} a_{ik} b_{kj} = a_{i1}b_{1j} + a_{i2}b_{2j} + \cdots + a_{in}b_{nj}
$$

이것은 $A$의 $i$번째 **행**과 $B$의 $j$번째 **열**의 **내적(dot product)**이다.

### 직관적 이해

$A$를 행 벡터들의 묶음으로, $B$를 열 벡터들의 묶음으로 보면:

$$
AB = \begin{pmatrix} \text{---} \vec{r}_1 \text{---} \\ \text{---} \vec{r}_2 \text{---} \\ \vdots \end{pmatrix} \begin{pmatrix} | & | & \\ \vec{c}_1 & \vec{c}_2 & \cdots \\ | & | & \end{pmatrix}
= \begin{pmatrix} \vec{r}_1 \cdot \vec{c}_1 & \vec{r}_1 \cdot \vec{c}_2 & \cdots \\ \vec{r}_2 \cdot \vec{c}_1 & \vec{r}_2 \cdot \vec{c}_2 & \cdots \\ \vdots & \vdots & \ddots \end{pmatrix}
$$

### 예제로 이해하기

**예제 1.** $2 \times 3$ 행렬과 $3 \times 2$ 행렬의 곱:

$$
A = \begin{pmatrix} 1 & 2 & 3 \\ 4 & 5 & 6 \end{pmatrix}, \quad
B = \begin{pmatrix} 7 & 8 \\ 9 & 10 \\ 11 & 12 \end{pmatrix}
$$

결과는 $2 \times 2$ 행렬:

$$
(AB)_{11} = 1 \cdot 7 + 2 \cdot 9 + 3 \cdot 11 = 7 + 18 + 33 = 58
$$
$$
(AB)_{12} = 1 \cdot 8 + 2 \cdot 10 + 3 \cdot 12 = 8 + 20 + 36 = 64
$$
$$
(AB)_{21} = 4 \cdot 7 + 5 \cdot 9 + 6 \cdot 11 = 28 + 45 + 66 = 139
$$
$$
(AB)_{22} = 4 \cdot 8 + 5 \cdot 10 + 6 \cdot 12 = 32 + 50 + 72 = 154
$$

$$
AB = \begin{pmatrix} 58 & 64 \\ 139 & 154 \end{pmatrix}
$$

**예제 2.** $2 \times 2$ 행렬끼리의 곱:

$$
\begin{pmatrix} 1 & 0 \\ 2 & 3 \end{pmatrix} \begin{pmatrix} 4 & 1 \\ 0 & 2 \end{pmatrix}
= \begin{pmatrix} 1 \cdot 4 + 0 \cdot 0 & 1 \cdot 1 + 0 \cdot 2 \\ 2 \cdot 4 + 3 \cdot 0 & 2 \cdot 1 + 3 \cdot 2 \end{pmatrix}
= \begin{pmatrix} 4 & 1 \\ 8 & 8 \end{pmatrix}
$$

---

## 행렬 곱셈의 성질

### 결합 법칙 성립

$$
(AB)C = A(BC)
$$

이 덕분에 $ABC$처럼 괄호 없이 써도 된다. 계산 순서를 어떻게 잡느냐에 따라 효율이 크게 달라질 수 있다.

### 교환 법칙은 일반적으로 성립하지 않는다

$$
AB \ne BA \quad \text{(일반적으로)}
$$

이것이 숫자의 곱셈과 가장 다른 점이다.

**예제.** $AB$와 $BA$를 비교:

$$
A = \begin{pmatrix} 1 & 2 \\ 0 & 1 \end{pmatrix}, \quad
B = \begin{pmatrix} 1 & 0 \\ 1 & 1 \end{pmatrix}
$$

$$
AB = \begin{pmatrix} 1+2 & 0+2 \\ 0+1 & 0+1 \end{pmatrix} = \begin{pmatrix} 3 & 2 \\ 1 & 1 \end{pmatrix}
$$

$$
BA = \begin{pmatrix} 1+0 & 2+0 \\ 1+0 & 2+1 \end{pmatrix} = \begin{pmatrix} 1 & 2 \\ 1 & 3 \end{pmatrix}
$$

$AB \ne BA$. 행렬을 순서를 바꾸면 결과가 완전히 달라진다.

**특별한 경우에만 교환 가능**: $AB = BA$이면 $A$와 $B$는 "교환 가능(commute)"하다고 한다. 단위행렬 $I$는 모든 행렬과 교환 가능($AI = IA = A$).

### 분배 법칙

$$
A(B + C) = AB + AC, \qquad (A + B)C = AC + BC
$$

### 영행렬과의 곱

$$
A \cdot O = O, \qquad O \cdot A = O
$$

주의: $AB = O$라고 해서 $A = O$ 또는 $B = O$는 아니다. 예:

$$
\begin{pmatrix} 1 & 0 \\ 0 & 0 \end{pmatrix} \begin{pmatrix} 0 & 0 \\ 1 & 1 \end{pmatrix} = \begin{pmatrix} 0 & 0 \\ 0 & 0 \end{pmatrix}
$$

### 단위행렬

$$
IA = A, \qquad AI = A
$$

단위행렬 $I_n$: 대각선이 1이고 나머지가 0인 $n \times n$ 행렬.

### 전치행렬과 곱

$$
(AB)^T = B^T A^T
$$

순서가 뒤집힌다! 이것은 나중에 역행렬과 함께 매우 유용하게 쓰인다.

---

## 행렬 곱셈의 핵심 의미 — 선형 변환의 합성

### 행렬 = 선형 변환

$n$차원 벡터 $\vec{x}$에 $m \times n$ 행렬 $A$를 곱하면 $m$차원 벡터가 된다:

$$
\vec{y} = A\vec{x}
$$

이 연산은 **선형 변환(linear transformation)**이다: 공간을 늘리고, 회전하고, 반사하고, 투영하는 등의 연산을 수행한다.

### 두 변환의 합성

벡터에 변환 $B$를 먼저 적용하고, 그 결과에 변환 $A$를 적용한다:

$$
\vec{y} = A(B\vec{x}) = (AB)\vec{x}
$$

즉 **행렬 $AB$는 "먼저 $B$, 다음 $A$" 합성 변환**을 나타낸다. (순서 주의!)

이것이 $AB \ne BA$인 이유와도 연결된다. "먼저 회전하고 늘리는 것"과 "먼저 늘리고 회전하는 것"은 일반적으로 다른 결과를 낳는다.

### 2D 변환 예시

**회전 행렬** ($\theta$ 반시계 방향):

$$
R(\theta) = \begin{pmatrix} \cos\theta & -\sin\theta \\ \sin\theta & \cos\theta \end{pmatrix}
$$

**크기 변환 행렬** (x, y 방향 각각 $s_x$, $s_y$배):

$$
S(s_x, s_y) = \begin{pmatrix} s_x & 0 \\ 0 & s_y \end{pmatrix}
$$

먼저 크기를 2배 늘린 후 45° 회전:

$$
R\!\left(\frac{\pi}{4}\right) S(2,2) = \begin{pmatrix} \frac{\sqrt{2}}{2} & -\frac{\sqrt{2}}{2} \\ \frac{\sqrt{2}}{2} & \frac{\sqrt{2}}{2} \end{pmatrix} \begin{pmatrix} 2 & 0 \\ 0 & 2 \end{pmatrix} = \begin{pmatrix} \sqrt{2} & -\sqrt{2} \\ \sqrt{2} & \sqrt{2} \end{pmatrix}
$$

---

## 실용적 응용

### 컴퓨터 그래픽스

3D 게임이나 영화에서 물체를 회전·이동·투영하는 것은 모두 행렬 곱셈으로 구현된다. 점 $(x, y, z)$를 동차 좌표 $(x, y, z, 1)^T$로 나타내면, 회전·평행이동·원근 투영을 모두 $4 \times 4$ 행렬로 표현할 수 있다. GPU는 초당 수십억 번의 행렬 곱셈을 수행한다.

### 신경망

신경망의 한 층은 본질적으로 행렬 곱셈이다:

$$
\vec{h} = \sigma(W\vec{x} + \vec{b})
$$

$W$: 가중치 행렬, $\vec{x}$: 입력 벡터, $\vec{b}$: 편향 벡터, $\sigma$: 활성화 함수.

여러 층을 쌓는 것 = 여러 행렬 곱셈의 합성. [AI 수학 선형대수](/math/ai-math/linear-algebra)에서 자세히 다룬다.

### 연립방정식의 해

$n$개의 미지수, $m$개의 방정식으로 이루어진 연립방정식:

$$
a_{11}x_1 + a_{12}x_2 + \cdots + a_{1n}x_n = b_1
$$
$$
\vdots
$$
$$
a_{m1}x_1 + a_{m2}x_2 + \cdots + a_{mn}x_n = b_m
$$

을 행렬로 표현하면:

$$
A\vec{x} = \vec{b}
$$

여기서 $A$는 $m \times n$ 계수행렬, $\vec{x}$는 미지수 벡터, $\vec{b}$는 상수 벡터. 행렬 곱셈의 정의가 이 표현을 자연스럽게 만든다.

---

## 행렬의 거듭제곱

정방행렬($n \times n$)에서 $A^k = \underbrace{A \cdot A \cdots A}_{k\text{번}}$이 잘 정의된다.

$A^0 = I$, $A^1 = A$, $A^{k+1} = A^k \cdot A$.

**예제.** $A = \begin{pmatrix} 2 & 0 \\ 0 & 3 \end{pmatrix}$이면 $A^n = \begin{pmatrix} 2^n & 0 \\ 0 & 3^n \end{pmatrix}$

대각행렬의 거듭제곱은 각 대각 원소의 거듭제곱이다.

일반 행렬의 거듭제곱은 **대각화(diagonalization)**를 통해 효율적으로 계산할 수 있다. 이것은 [선형대수학](/math/university/linear-algebra)의 고유값·고유벡터 단원에서 다룬다.

---

## 흔한 실수

**크기 조건 미확인**: $3 \times 2$ 행렬과 $3 \times 4$ 행렬은 곱할 수 없다. 항상 "앞의 열 수 = 뒤의 행 수"를 확인하라.

**교환 법칙 적용**: $AB = BA$라 가정하고 계산하면 틀린다. 행렬은 기본적으로 순서가 중요하다.

**$AB = 0 \Rightarrow A = 0$ 또는 $B = 0$**: 실수에서는 성립하지만 행렬에서는 성립하지 않는다.

**$(AB)^{-1} = A^{-1}B^{-1}$**: 틀리다. 올바른 공식은 $(AB)^{-1} = B^{-1}A^{-1}$ (순서 뒤집힘).

---

## 연습문제

**문제 1.** 다음 행렬 곱셈을 계산하여라.

$$
\begin{pmatrix} 2 & 1 \\ -1 & 3 \end{pmatrix} \begin{pmatrix} 1 & 4 \\ 2 & -1 \end{pmatrix}
$$

> **풀이**
>
> $$\begin{pmatrix} 2 \cdot 1 + 1 \cdot 2 & 2 \cdot 4 + 1 \cdot (-1) \\ (-1) \cdot 1 + 3 \cdot 2 & (-1) \cdot 4 + 3 \cdot (-1) \end{pmatrix} = \begin{pmatrix} 4 & 7 \\ 5 & -7 \end{pmatrix}$$

---

**문제 2.** $AB \ne BA$임을 보여라.

$$
A = \begin{pmatrix} 1 & 1 \\ 0 & 0 \end{pmatrix}, \quad B = \begin{pmatrix} 0 & 0 \\ 1 & 1 \end{pmatrix}
$$

> **풀이**
>
> $$AB = \begin{pmatrix} 0+1 & 0+1 \\ 0+0 & 0+0 \end{pmatrix} = \begin{pmatrix} 1 & 1 \\ 0 & 0 \end{pmatrix}$$
>
> $$BA = \begin{pmatrix} 0+0 & 0+0 \\ 1+0 & 1+0 \end{pmatrix} = \begin{pmatrix} 0 & 0 \\ 1 & 1 \end{pmatrix}$$
>
> $AB \ne BA$ ✓

---

**문제 3.** $A = \begin{pmatrix} 0 & 1 \\ -1 & 0 \end{pmatrix}$로 표현되는 선형 변환은 무엇인가? $A^2$와 $A^4$를 계산하고, 기하학적 의미를 설명하여라.

> **풀이**
>
> 단위 벡터로 확인: $A\vec{e}_1 = \begin{pmatrix} 0 \\ -1 \end{pmatrix}$, $A\vec{e}_2 = \begin{pmatrix} 1 \\ 0 \end{pmatrix}$
>
> $\vec{e}_1 = (1,0)$이 $(0,-1)$로, $\vec{e}_2 = (0,1)$이 $(1,0)$으로 이동 → **시계 방향 90° 회전**
>
> $$A^2 = AA = \begin{pmatrix} -1 & 0 \\ 0 & -1 \end{pmatrix} = -I \quad \text{(180° 회전)}$$
>
> $$A^4 = (A^2)^2 = I \quad \text{(360° = 원위치)}$$
>
> 90° 회전을 4번 하면 원래로 돌아오는 것과 일치한다.

---

**문제 4.** $A = \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}$에 대해 $(A^T)^T = A$임을 확인하고, $(2A)^T = 2A^T$임을 보여라.

> **풀이**
>
> $A^T = \begin{pmatrix} 1 & 3 \\ 2 & 4 \end{pmatrix}$, $(A^T)^T = \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix} = A$ ✓
>
> $2A = \begin{pmatrix} 2 & 4 \\ 6 & 8 \end{pmatrix}$, $(2A)^T = \begin{pmatrix} 2 & 6 \\ 4 & 8 \end{pmatrix}$
>
> $2A^T = 2\begin{pmatrix} 1 & 3 \\ 2 & 4 \end{pmatrix} = \begin{pmatrix} 2 & 6 \\ 4 & 8 \end{pmatrix}$ ✓
