---
title: "선형대수학"
description: "벡터 공간, 선형변환, 고유값·고유벡터, 대각화, SVD를 다룹니다."
date: "2026-04-06"
subject: "math"
category: "선형대수학"
level: "university"
tags: ["선형대수", "고유값", "대각화", "SVD", "대학수학"]
---

## 벡터 공간

### 정의

집합 $V$가 덧셈과 스칼라 곱에 대해 닫혀 있고, 8가지 공리를 만족하면 **벡터 공간**이라 한다.

**부분공간 판별**: $W \subseteq V$가 부분공간 $\iff$ ① $\vec{0} \in W$, ② $W$가 덧셈과 스칼라 곱에 닫혀 있다.

### 기저와 차원

**기저**: 선형 독립이고 $V$를 생성하는 벡터들의 집합.

**차원** $\dim V$: 기저의 원소 개수.

$$
\mathbb{R}^n \text{의 표준기저}: \vec{e}_1, \vec{e}_2, \ldots, \vec{e}_n
$$

---

## 행렬과 선형계

### 가우스 소거법

$$
\begin{pmatrix} 2 & 1 & | & 5 \\ 4 & 3 & | & 11 \end{pmatrix} \xrightarrow{R_2 - 2R_1} \begin{pmatrix} 2 & 1 & | & 5 \\ 0 & 1 & | & 1 \end{pmatrix}
$$

후진 대입으로 $x_2 = 1$, $x_1 = 2$.

### 역행렬

$n \times n$ 행렬 $A$의 역행렬 $A^{-1}$:

$$
AA^{-1} = A^{-1}A = I
$$

$$
\det A \ne 0 \iff A \text{는 가역}
$$

$$
A^{-1} = \frac{1}{\det A}\text{adj}(A)
$$

---

## 고유값과 고유벡터

### 정의

$$
A\vec{v} = \lambda\vec{v}, \quad \vec{v} \ne \vec{0}
$$

$\lambda$: 고유값, $\vec{v}$: 고유벡터

**특성방정식**: $\det(A - \lambda I) = 0$

### 대각화

$A$가 $n$개의 선형 독립인 고유벡터를 가지면 대각화 가능:

$$
A = P D P^{-1}
$$

단, $D = \text{diag}(\lambda_1, \ldots, \lambda_n)$, $P$의 열 = 고유벡터.

**응용**: $A^k = P D^k P^{-1}$

---

## 내적과 직교성

### 내적과 노름

$$
\langle \vec{u}, \vec{v} \rangle = \vec{u}^T\vec{v}, \quad \|\vec{v}\| = \sqrt{\langle \vec{v}, \vec{v} \rangle}
$$

**직교**: $\langle \vec{u}, \vec{v} \rangle = 0$

**그람-슈미트 과정**: 기저 $\{\vec{v}_1, \ldots, \vec{v}_n\}$를 정규직교기저로 변환.

---

## 연습문제

**문제 1.** 행렬 $A = \begin{pmatrix} 3 & 1 \\ 1 & 3 \end{pmatrix}$의 고유값과 고유벡터를 구하여라.

> **풀이**
>
> $$\det(A - \lambda I) = (3-\lambda)^2 - 1 = \lambda^2 - 6\lambda + 8 = (\lambda-2)(\lambda-4) = 0$$
>
> $\lambda_1 = 2$: $(A - 2I)\vec{v} = 0 \implies \begin{pmatrix}1&1\\1&1\end{pmatrix}\vec{v} = 0 \implies \vec{v}_1 = \begin{pmatrix}1\\-1\end{pmatrix}$
>
> $\lambda_2 = 4$: $(A - 4I)\vec{v} = 0 \implies \begin{pmatrix}-1&1\\1&-1\end{pmatrix}\vec{v} = 0 \implies \vec{v}_2 = \begin{pmatrix}1\\1\end{pmatrix}$

---

**문제 2.** 다음 연립방정식을 가우스 소거법으로 풀어라.

$$
\begin{cases} x + 2y = 5 \\ 3x + 5y = 14 \end{cases}
$$

> **풀이**
>
> $$\begin{pmatrix}1&2&|&5\\3&5&|&14\end{pmatrix} \xrightarrow{R_2-3R_1} \begin{pmatrix}1&2&|&5\\0&-1&|&-1\end{pmatrix}$$
>
> $y = 1$, $x + 2 = 5 \implies x = 3$
