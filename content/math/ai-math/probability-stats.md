---
title: "AI를 위한 확률·통계"
description: "베이즈 추론, MLE, MAP, 정보이론의 머신러닝 응용을 다룹니다."
date: "2026-04-06"
subject: "math"
category: "AI 수학"
level: "ai-math"
tags: ["확률통계", "베이즈추론", "MLE", "머신러닝", "AI수학"]
---

## 베이즈 추론

### 베이즈 정리

$$
P(\theta | D) = \frac{P(D|\theta)P(\theta)}{P(D)}
$$

- $P(\theta)$: 사전 분포 (prior)
- $P(D|\theta)$: 우도 (likelihood)
- $P(\theta|D)$: 사후 분포 (posterior)

**예제**: 스팸 필터 — 이메일 내용이 주어졌을 때 스팸일 확률.

---

## 최대 우도 추정 (MLE)

$$
\hat{\theta}_{MLE} = \arg\max_\theta P(D|\theta) = \arg\max_\theta \sum_i \log p(x_i|\theta)
$$

로그 변환으로 곱을 합으로 바꿔 계산 편의성 증가.

**가우시안 MLE**:

$$
\hat{\mu} = \bar{x}, \quad \hat{\sigma}^2 = \frac{1}{n}\sum_i(x_i - \bar{x})^2
$$

## 최대 사후 추정 (MAP)

$$
\hat{\theta}_{MAP} = \arg\max_\theta P(\theta|D) = \arg\max_\theta[\log P(D|\theta) + \log P(\theta)]
$$

- 가우시안 사전 분포 → **L2 정규화** (Ridge)
- 라플라스 사전 분포 → **L1 정규화** (Lasso)

---

## 주요 분포

### 다변량 가우시안

$$
p(\vec{x}) = \frac{1}{(2\pi)^{d/2}|\Sigma|^{1/2}} \exp\!\left(-\frac{1}{2}(\vec{x}-\vec{\mu})^T\Sigma^{-1}(\vec{x}-\vec{\mu})\right)
$$

### 카테고리컬·디리클레 분포

다분류 문제에서 클래스 확률 모델링에 사용.

---

## 연습문제

**문제 1.** 동전을 10번 던져 앞면이 7번 나왔다. MLE로 앞면 확률 $p$를 추정하여라.

> **풀이**
>
> $L(p) = \binom{10}{7}p^7(1-p)^3$
>
> $\log L = \text{const} + 7\log p + 3\log(1-p)$
>
> $\dfrac{d\log L}{dp} = \dfrac{7}{p} - \dfrac{3}{1-p} = 0 \implies 7(1-p) = 3p \implies p = 0.7$

---

**문제 2.** MLE와 MAP의 차이를 설명하고, MAP가 정규화와 동일한 이유를 설명하여라.

> **풀이**
>
> MLE는 데이터만 고려해 우도를 최대화한다. MAP는 사전 분포(prior)도 함께 고려한다.
>
> 가우시안 사전 분포 $P(\theta) \propto e^{-\lambda\|\theta\|^2}$를 MAP 목적함수에 대입하면
>
> $$\arg\max_\theta \left[\sum_i \log p(x_i|\theta) - \lambda\|\theta\|^2\right]$$
>
> 이는 L2 정규화(Ridge) 손실과 동일하다. 즉 **정규화 = 사전 분포**의 베이즈 해석이다.
