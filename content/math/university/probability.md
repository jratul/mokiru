---
title: "확률론"
description: "확률 공간, 확률변수, 주요 분포, 기댓값·분산, 극한 정리를 다룹니다."
date: "2026-04-06"
subject: "math"
category: "확률론"
level: "university"
tags: ["확률론", "확률변수", "기댓값", "중심극한정리", "대학수학"]
---

## 확률 공간

### 정의

표본공간 $\Omega$, 사건의 집합 $\mathcal{F}$, 확률 측도 $P$의 3중 쌍 $(\Omega, \mathcal{F}, P)$를 **확률 공간**이라 한다.

**콜모고로프 공리**:
1. $P(A) \geq 0$
2. $P(\Omega) = 1$
3. 서로소인 $A_1, A_2, \ldots$에 대해 $P\!\left(\bigcup_i A_i\right) = \sum_i P(A_i)$

### 조건부 확률과 베이즈 정리

$$
P(A|B) = \frac{P(A \cap B)}{P(B)}
$$

**베이즈 정리**:

$$
P(A_i | B) = \frac{P(B|A_i)P(A_i)}{\sum_j P(B|A_j)P(A_j)}
$$

---

## 확률변수

### 이산 확률변수

$$
E[X] = \sum_x x \cdot p(x), \quad \text{Var}(X) = E[X^2] - (E[X])^2
$$

### 연속 확률변수

$$
E[X] = \int_{-\infty}^{\infty} x f(x)\,dx, \quad P(a \leq X \leq b) = \int_a^b f(x)\,dx
$$

### 주요 분포

| 분포 | 기댓값 | 분산 |
|------|--------|------|
| $\text{Bernoulli}(p)$ | $p$ | $p(1-p)$ |
| $B(n,p)$ | $np$ | $np(1-p)$ |
| $\text{Poisson}(\lambda)$ | $\lambda$ | $\lambda$ |
| $N(\mu,\sigma^2)$ | $\mu$ | $\sigma^2$ |
| $\text{Exp}(\lambda)$ | $1/\lambda$ | $1/\lambda^2$ |

---

## 결합 분포

### 공분산과 상관계수

$$
\text{Cov}(X,Y) = E[XY] - E[X]E[Y]
$$

$$
\rho(X,Y) = \frac{\text{Cov}(X,Y)}{\sqrt{\text{Var}(X)\text{Var}(Y)}} \in [-1, 1]
$$

$X, Y$ 독립 $\implies \text{Cov}(X,Y) = 0$ (역은 일반적으로 성립하지 않음)

---

## 극한 정리

### 대수의 법칙 (LLN)

$$
\bar{X}_n = \frac{1}{n}\sum_{i=1}^n X_i \xrightarrow{P} \mu \quad (n \to \infty)
$$

### 중심극한정리 (CLT)

$$
\frac{\sqrt{n}(\bar{X}_n - \mu)}{\sigma} \xrightarrow{d} N(0,1) \quad (n \to \infty)
$$

---

## 연습문제

**문제 1.** 공장 A가 전체 제품의 60%, B가 40%를 생산한다. A의 불량률은 2%, B의 불량률은 5%이다. 임의로 뽑은 제품이 불량품일 때, A가 만들었을 확률을 구하여라.

> **풀이** (베이즈 정리)
>
> $P(\text{불량}) = 0.6 \times 0.02 + 0.4 \times 0.05 = 0.012 + 0.02 = 0.032$
>
> $$P(A|\text{불량}) = \frac{0.012}{0.032} = \frac{3}{8} = 0.375$$

---

**문제 2.** $X \sim N(10, 4)$일 때, $P(8 \leq X \leq 14)$를 구하여라. (단, $P(0 \leq Z \leq 1) = 0.3413$, $P(0 \leq Z \leq 2) = 0.4772$)

> **풀이**
>
> $\sigma = 2$이므로
>
> $$P(8 \leq X \leq 14) = P\!\left(\frac{8-10}{2} \leq Z \leq \frac{14-10}{2}\right) = P(-1 \leq Z \leq 2)$$
>
> $$= 0.3413 + 0.4772 = 0.8185$$
