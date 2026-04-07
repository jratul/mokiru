---
title: "최적화 이론"
description: "경사하강법, 볼록 최적화, 제약 최적화(KKT 조건), 딥러닝 최적화 알고리즘을 다룹니다."
date: "2026-04-06"
subject: "math"
category: "AI 수학"
level: "ai-math"
tags: ["최적화", "경사하강법", "볼록함수", "KKT", "Adam", "AI수학"]
---

최적화는 손실 함수 $\mathcal{L}(\theta)$를 최소화하는 매개변수 $\theta$를 찾는 작업이다. [AI 미적분](/math/ai-math/calculus)의 그래디언트 계산, [AI 선형대수](/math/ai-math/linear-algebra)의 헤시안, [수치해석](/math/university/numerical-analysis)의 반복법이 모두 결합된다. [대학 미적분학](/math/university/calculus)의 라그랑주 승수법이 SVM과 같은 제약 최적화의 기초이며, [이산수학 그래프이론](/math/discrete/graph-theory)의 최단경로 알고리즘도 최적화의 일종이다.

---

## 비제약 최적화

### 최적성 조건

**1차 필요 조건 (정류점)**: $\nabla f(\theta^*) = 0$

**2차 충분 조건**:
- 극솟값: $\nabla^2 f(\theta^*) \succ 0$ (헤시안 양정치)
- 극댓값: $\nabla^2 f(\theta^*) \prec 0$ (헤시안 음정치)
- 안장점: 헤시안의 고유값에 양과 음이 섞임

딥러닝 손실 경관에서는 안장점이 극솟값보다 훨씬 많다. 그러나 실제로 안장점보다 좋은 극솟값을 찾는 것이 목표.

---

## 경사하강법

### 기본 알고리즘

$$
\theta_{t+1} = \theta_t - \eta \nabla_\theta \mathcal{L}(\theta_t)
$$

- $\eta > 0$: 학습률 (step size)
- $\nabla_\theta \mathcal{L}$: 손실함수의 그래디언트

**학습률 선택**:
- 너무 크면: 발산 또는 진동
- 너무 작으면: 수렴 매우 느림
- 최적: 손실 경관에 따라 다르며 보통 0.001~0.1

### 배치 방식

| 방법 | 그래디언트 계산 | 특징 |
|------|--------------|------|
| 배치 GD | 전체 데이터셋 | 정확하지만 느림, 메모리 많이 사용 |
| 확률적 GD (SGD) | 샘플 1개 | 빠르고 노이즈 큼, 안장점 탈출 유리 |
| 미니배치 GD | $B$개 샘플 | 실제 표준 (B = 32~512) |

미니배치 노이즈가 오히려 정규화 효과를 내기도 한다 (암묵적 정규화).

### 모멘텀 (Momentum)

이전 업데이트 방향을 누적해 진동을 줄이고 수렴 가속:

$$
v_{t+1} = \beta v_t + (1-\beta)\nabla_\theta \mathcal{L}(\theta_t)
$$

$$
\theta_{t+1} = \theta_t - \eta v_{t+1}
$$

$\beta \approx 0.9$. 물리적으로 공이 경사면을 굴러 내려가는 운동량과 같다.

**네스테로프 모멘텀**: 예측 위치에서 그래디언트 계산 → 더 정확한 업데이트.

---

## 적응형 학습률 알고리즘

### AdaGrad

각 파라미터마다 누적 그래디언트 제곱으로 학습률 조정:

$$
G_t = \sum_{\tau=1}^t g_\tau^2, \quad \theta_{t+1} = \theta_t - \frac{\eta}{\sqrt{G_t + \epsilon}} g_t
$$

자주 업데이트된 파라미터는 학습률이 낮아짐. 희소 특성(NLP)에 효과적.
단점: 학습률이 단조 감소 → 학습이 너무 빨리 멈춤.

### RMSProp

누적 대신 지수 이동 평균:

$$
v_t = \beta v_{t-1} + (1-\beta)g_t^2, \quad \theta_{t+1} = \theta_t - \frac{\eta}{\sqrt{v_t + \epsilon}}g_t
$$

AdaGrad의 학습률 소실 문제 해결. $\beta \approx 0.999$.

### Adam (Adaptive Moment Estimation)

1차 모멘트(평균)와 2차 모멘트(분산)를 모두 추적:

$$
m_t = \beta_1 m_{t-1} + (1-\beta_1)g_t \quad \text{(1차 모멘트, 운동량)}
$$

$$
v_t = \beta_2 v_{t-1} + (1-\beta_2)g_t^2 \quad \text{(2차 모멘트, 적응 스케일)}
$$

편향 보정 (초기 값이 0 근처인 문제 해결):

$$
\hat{m}_t = \frac{m_t}{1-\beta_1^t}, \quad \hat{v}_t = \frac{v_t}{1-\beta_2^t}
$$

업데이트:

$$
\theta_{t+1} = \theta_t - \frac{\eta}{\sqrt{\hat{v}_t} + \epsilon}\hat{m}_t
$$

기본값: $\beta_1 = 0.9$, $\beta_2 = 0.999$, $\epsilon = 10^{-8}$.

**Adam의 장점**: 학습률 튜닝이 덜 민감, 대부분의 딥러닝 태스크에서 좋은 성능.

**AdamW**: Adam + 가중치 감쇠(Weight Decay). 정규화를 그래디언트가 아닌 가중치에 직접 적용.

---

## 학습률 스케줄링

고정 학습률 대신 학습 과정에서 학습률을 조정:

| 스케줄 | 수식 | 용도 |
|-------|------|------|
| 스텝 감쇠 | $\eta \leftarrow \eta \times \gamma^{\lfloor t/T\rfloor}$ | 단순 감소 |
| 코사인 어닐링 | $\eta_t = \eta_{\min} + \frac{\eta_{\max}-\eta_{\min}}{2}(1+\cos\frac{t\pi}{T})$ | 주기적 재시작 |
| 웜업 | $\eta$를 처음에 선형 증가 후 감소 | Transformer 표준 |

---

## 볼록 최적화

### 볼록 함수

$$
f(\lambda x + (1-\lambda)y) \leq \lambda f(x) + (1-\lambda)f(y), \quad \forall \lambda \in [0,1]
$$

**직관**: 어느 두 점을 이어도 함수 위에 있는 현이 그래프 위에 있다.

**1차 조건**: $f(y) \geq f(x) + \nabla f(x)^T(y-x)$ — 접선이 항상 함수 아래.

**2차 조건**: $\nabla^2 f(x) \succeq 0$ (헤시안이 양반정치) 이면 볼록.

**중요한 성질**: 볼록 함수의 **국소 최솟값 = 전역 최솟값** → 경사하강법이 전역 최솟값으로 수렴 보장.

### 강볼록 함수 (Strongly Convex)

$$
f(y) \geq f(x) + \nabla f(x)^T(y-x) + \frac{\mu}{2}\|y-x\|^2
$$

강볼록 함수: 유일한 최솟값 존재, 경사하강법이 기하급수적 수렴률 보장.

**예**: $L(\theta) = \|\theta\|^2$ (L2 정규화) — 강볼록.

딥러닝 손실은 일반적으로 볼록이 아니지만, 실제로는 경사하강법이 잘 작동한다 (과매개변수화(overparameterization)의 암묵적 볼록성 효과).

---

## 제약 최적화

### 등호 제약: 라그랑주 승수법

$$
\min_x f(x) \quad \text{s.t.} \quad g(x) = 0
$$

**라그랑지안**:

$$
\mathcal{L}(x, \lambda) = f(x) + \lambda g(x)
$$

**최적 조건**: $\nabla_x \mathcal{L} = 0$, $g(x) = 0$

**기하학적 의미**: 최적점에서 목적함수의 그래디언트와 제약식의 그래디언트가 평행:
$$
\nabla f(x^*) = -\lambda \nabla g(x^*)
$$

### 부등식 제약: KKT 조건

$$
\min_x f(x) \quad \text{s.t.} \quad g_i(x) \leq 0, \; i = 1,\ldots,m
$$

**라그랑지안**:

$$
\mathcal{L}(x, \mu) = f(x) + \sum_i \mu_i g_i(x)
$$

**KKT 조건** (최적해 $x^*$에서 필요 충분):

1. **정류성**: $\nabla_x \mathcal{L} = \nabla f(x^*) + \sum_i \mu_i \nabla g_i(x^*) = 0$
2. **원문제 가능성**: $g_i(x^*) \leq 0$
3. **이중 가능성**: $\mu_i \geq 0$
4. **상보성**: $\mu_i g_i(x^*) = 0$ (비활성 제약의 $\mu_i = 0$)

### SVM과 KKT

서포트 벡터 머신(SVM): 최대 마진 분류기.

$$
\min_{w, b} \frac{1}{2}\|w\|^2 \quad \text{s.t.} \quad y_i(w^T x_i + b) \geq 1
$$

부등식 제약을 $1 - y_i(w^T x_i + b) \leq 0$으로 변환 후 KKT 적용.

**지지 벡터(Support Vectors)**: KKT 상보성에 의해 $\mu_i > 0$인 샘플, 즉 마진 경계에 정확히 위치한 샘플만 솔루션에 기여.

**쌍대 문제(Dual Problem)**: KKT를 이용해 원문제를 쌍대 문제로 변환 → 커널 트릭 가능.

---

## 연습문제

**문제 1.** $f(x) = x^2 + 4x + 5$에 대해 경사하강법으로 최솟값을 구하여라. 학습률 $\eta = 0.5$, 시작점 $x_0 = 3$.

> **풀이**
>
> $f'(x) = 2x + 4$
>
> $x_1 = 3 - 0.5 \times (2 \cdot 3 + 4) = 3 - 5 = -2$
>
> $f'(-2) = -4 + 4 = 0$: 이미 정류점 도달!
>
> $x^* = -2$, $f(-2) = 4 - 8 + 5 = 1$ (최솟값)
>
> 이 경우 한 번에 수렴했지만, 일반적으로 볼록 함수도 여러 번 반복이 필요하다.

---

**문제 2.** 라그랑주 승수법으로 $f(x, y) = x^2 + y^2$ 최솟값을 구하여라. 조건: $x + y = 1$.

> **풀이**
>
> $\mathcal{L}(x, y, \lambda) = x^2 + y^2 + \lambda(x + y - 1)$
>
> $\partial_x$: $2x + \lambda = 0 \Rightarrow x = -\lambda/2$
>
> $\partial_y$: $2y + \lambda = 0 \Rightarrow y = -\lambda/2$
>
> $\partial_\lambda$: $x + y = 1 \Rightarrow 2(-\lambda/2) = 1 \Rightarrow \lambda = -1$
>
> $x = y = 1/2$, 최솟값: $f(1/2, 1/2) = 1/4 + 1/4 = \dfrac{1}{2}$
>
> 기하학적 의미: 직선 $x + y = 1$에 가장 가까운 원점에서의 거리 제곱.

---

**문제 3.** Adam 알고리즘에서 편향 보정이 필요한 이유를 설명하여라.

> **풀이**
>
> 초기화: $m_0 = 0$, $v_0 = 0$
>
> 1단계: $m_1 = \beta_1 \cdot 0 + (1-\beta_1)g_1 = (1-\beta_1)g_1$
>
> $E[m_1] = (1-\beta_1)E[g_1] \ne E[g_1]$ → 편향!
>
> 일반적으로 $E[m_t] = (1 - \beta_1^t)E[g]$이므로 $\hat{m}_t = m_t/(1-\beta_1^t)$로 보정하면 $E[\hat{m}_t] = E[g]$.
>
> $\beta_1 = 0.9$이면 $1 - \beta_1^{10} = 0.65$로 여전히 크지만, 100단계 후 $1 - \beta_1^{100} \approx 1$로 보정이 불필요해진다.

---

**문제 4.** 볼록 함수가 아닌 함수의 예를 들고, 경사하강법이 전역 최솟값을 찾지 못할 수 있음을 보여라.

> **풀이**
>
> $f(x) = x^4 - 4x^2 + x$ — 비볼록 함수 (이중 우물(double well) 구조)
>
> $f'(x) = 4x^3 - 8x + 1 = 0$의 근 3개: 약 $x \approx -1.46, 0.125, 1.33$
>
> - $x \approx -1.46$: 극솟값 (전역 최솟값 근처)
> - $x \approx 0.125$: 극댓값
> - $x \approx 1.33$: 극솟값 (국소 최솟값)
>
> 초기점이 $x_0 > 0.125$이면 경사하강법이 국소 최솟값 $x \approx 1.33$으로 수렴, 전역 최솟값을 놓친다.
>
> 대처: 무작위 다시 시작(random restarts), SGD의 노이즈, 모멘텀 등.
