---
title: "최적화 이론"
description: "경사하강법, 볼록 최적화, 제약 최적화(KKT 조건)의 머신러닝 응용을 다룹니다."
date: "2026-04-06"
subject: "math"
category: "AI 수학"
level: "ai-math"
tags: ["최적화", "경사하강법", "볼록함수", "KKT", "AI수학"]
---

## 경사하강법

### 기본 알고리즘

$$
\theta_{t+1} = \theta_t - \eta \nabla_\theta \mathcal{L}(\theta_t)
$$

- $\eta$: 학습률 (learning rate)
- $\nabla_\theta \mathcal{L}$: 손실함수의 그래디언트

### 변형 알고리즘

| 방법 | 특징 |
|------|------|
| 배치 GD | 전체 데이터로 그래디언트 계산. 느리지만 안정 |
| 확률적 GD (SGD) | 샘플 1개씩 업데이트. 빠르지만 불안정 |
| 미니배치 GD | 실제로 가장 많이 사용 |
| 모멘텀 | 이전 방향을 유지해 진동 감소 |
| Adam | 적응형 학습률, 1·2차 모멘트 사용 |

**Adam 업데이트**:

$$
m_t = \beta_1 m_{t-1} + (1-\beta_1)g_t, \quad v_t = \beta_2 v_{t-1} + (1-\beta_2)g_t^2
$$

$$
\theta_{t+1} = \theta_t - \frac{\eta}{\sqrt{\hat{v}_t} + \epsilon}\hat{m}_t
$$

---

## 볼록 최적화

### 볼록 함수

$$
f(\lambda x + (1-\lambda)y) \leq \lambda f(x) + (1-\lambda)f(y), \quad \forall \lambda \in [0,1]
$$

볼록 함수의 **국소 최솟값 = 전역 최솟값** → 경사하강법이 수렴 보장.

**2차 조건**: $\nabla^2 f \succeq 0$ (헤시안이 양반정치행렬)이면 볼록함수.

---

## 제약 최적화

### 라그랑주 승수법

$$
\min f(x) \text{ s.t. } g(x) = 0
$$

$$
\mathcal{L}(x, \lambda) = f(x) + \lambda g(x)
$$

$$
\nabla_x \mathcal{L} = 0, \quad g(x) = 0
$$

### KKT 조건

부등식 제약 $g(x) \leq 0$가 있을 때 최적해에서:

1. 정류성: $\nabla f + \sum_i \mu_i \nabla g_i = 0$
2. 원문제 가능성: $g_i(x^*) \leq 0$
3. 이중 가능성: $\mu_i \geq 0$
4. 상보성: $\mu_i g_i(x^*) = 0$

**SVM**은 KKT 조건을 이용해 마진 최대화를 풀어낸다.

---

## 연습문제

**문제 1.** $f(x) = x^2 + 4x + 5$에 대해 경사하강법으로 최솟값을 구하여라. 학습률 $\eta = 0.5$, 시작점 $x_0 = 3$으로 3회 반복.

> **풀이**
>
> $f'(x) = 2x + 4$
>
> $x_1 = 3 - 0.5 \times 10 = -2$
>
> $x_2 = -2 - 0.5 \times 0 = -2$
>
> 2회 만에 최솟값 $x^* = -2$에 수렴. $f(-2) = 4 - 8 + 5 = 1$.

---

**문제 2.** 라그랑주 승수법으로 $x^2 + y^2$ 최솟값을 구하여라. 조건: $x + y = 1$.

> **풀이**
>
> $\mathcal{L} = x^2 + y^2 + \lambda(x+y-1)$
>
> $\partial_x$: $2x + \lambda = 0$, $\partial_y$: $2y + \lambda = 0$
>
> $2x = 2y \implies x = y$. 제약에서 $2x = 1 \implies x = y = \dfrac{1}{2}$.
>
> $$\min(x^2+y^2) = \frac{1}{4} + \frac{1}{4} = \frac{1}{2}$$
