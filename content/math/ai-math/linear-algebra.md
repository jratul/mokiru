---
title: "AI를 위한 선형대수"
description: "행렬 연산, 고유값 분해, SVD, PCA의 AI·ML 응용을 다룹니다."
date: "2026-04-06"
subject: "math"
category: "AI 수학"
level: "ai-math"
tags: ["선형대수", "SVD", "PCA", "머신러닝", "AI수학"]
---

## 벡터와 행렬의 기초

### 내적과 코사인 유사도

$$
\vec{a} \cdot \vec{b} = \sum_i a_i b_i = \|\vec{a}\|\|\vec{b}\|\cos\theta
$$

**코사인 유사도** (자연어 처리에서 사용):

$$
\text{sim}(\vec{a}, \vec{b}) = \frac{\vec{a} \cdot \vec{b}}{\|\vec{a}\|\|\vec{b}\|}
$$

### 행렬 연산의 의미

$\vec{y} = W\vec{x}$: 선형 변환(회전·스케일·반사)

신경망의 각 레이어: $\vec{h} = \sigma(W\vec{x} + \vec{b})$

---

## 고유값 분해 (EVD)

$$
A = Q\Lambda Q^T \quad \text{(대칭행렬)}
$$

$\Lambda = \text{diag}(\lambda_1, \ldots, \lambda_n)$, $Q$: 직교행렬

**응용**: 공분산 행렬의 고유벡터 = 주성분(PCA).

---

## 특이값 분해 (SVD)

$$
A = U\Sigma V^T
$$

- $U$: $m \times m$ 직교행렬 (좌 특이벡터)
- $\Sigma$: $m \times n$ 대각행렬 (특이값 $\sigma_1 \geq \sigma_2 \geq \cdots \geq 0$)
- $V$: $n \times n$ 직교행렬 (우 특이벡터)

**절단 SVD**: 큰 특이값 $k$개만 사용 → 데이터 압축, 노이즈 제거.

---

## 주성분 분석 (PCA)

### 알고리즘

1. 데이터 중심화: $X \leftarrow X - \bar{X}$
2. 공분산 행렬: $C = \dfrac{1}{n-1}X^TX$
3. 고유값 분해: $C = Q\Lambda Q^T$
4. 분산 설명 비율로 주성분 수 $k$ 결정

$$
\text{분산 설명 비율} = \frac{\sum_{i=1}^k \lambda_i}{\sum_{i=1}^n \lambda_i}
$$

---

## 연습문제

**문제 1.** $\vec{a} = (1,2,3)^T$, $\vec{b} = (4,0,-1)^T$의 코사인 유사도를 구하여라.

> **풀이**
>
> $\vec{a} \cdot \vec{b} = 4 + 0 - 3 = 1$
>
> $\|\vec{a}\| = \sqrt{14}$, $\|\vec{b}\| = \sqrt{17}$
>
> $$\text{sim} = \frac{1}{\sqrt{14 \times 17}} = \frac{1}{\sqrt{238}} \approx 0.0648$$

---

**문제 2.** SVD에서 절단 SVD로 행렬을 근사하는 이유를 설명하여라.

> **풀이**
>
> 행렬 $A$의 SVD를 $A = U\Sigma V^T$라 하면, 최적의 랭크-$k$ 근사는
>
> $$A_k = \sum_{i=1}^{k} \sigma_i \vec{u}_i \vec{v}_i^T$$
>
> 에크아트-영 정리에 의해 $\|A - A_k\|_F$를 최소화한다.
> 작은 특이값은 노이즈에 해당하므로 이를 제거하면 **차원 축소 + 노이즈 제거** 효과를 동시에 얻는다.
