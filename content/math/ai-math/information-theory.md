---
title: "정보이론"
description: "엔트로피, KL 발산, 상호 정보량, 교차 엔트로피 손실의 AI 응용을 다룹니다."
date: "2026-04-06"
subject: "math"
category: "AI 수학"
level: "ai-math"
tags: ["정보이론", "엔트로피", "KL발산", "교차엔트로피", "AI수학", "상호정보량"]
---

정보이론은 1948년 클로드 섀넌(Claude Shannon)이 창시한 수학 분야로, "정보를 어떻게 정량화하고 효율적으로 전달할까"를 연구한다. [AI 확률·통계](/math/ai-math/probability-stats)의 MLE와 직접 연결되며, 딥러닝의 모든 분류 손실(교차 엔트로피)은 정보이론에서 나온다. [대학 확률론](/math/university/probability)의 조건부 확률과 독립성 개념이 바탕이 된다.

---

## 정보량과 섀넌 엔트로피

### 자기 정보량 (Self-Information)

사건 $x$가 발생했을 때의 정보량:

$$
I(x) = -\log_2 P(x) \quad \text{(단위: bit)}
$$

자연로그를 쓰면 단위는 **nat(내트)**.

**직관**: 드문 사건일수록 정보량이 크다.
- 동전 앞면 ($P = 0.5$): $I = 1$ bit
- 6면 주사위에서 6 ($P = 1/6$): $I = \log_2 6 \approx 2.58$ bits
- 확실한 사건 ($P = 1$): $I = 0$ bits (새 정보 없음)

### 섀넌 엔트로피 (Shannon Entropy)

확률분포 $P$의 **평균 정보량 (불확실성)**:

$$
H(X) = -\sum_x P(x)\log P(x) = E[-\log P(X)]
$$

**성질**:
- $H(X) \geq 0$ (항상 비음)
- $H(X) = 0$ ↔ $X$가 결정론적 (어떤 $x$에서 $P(x) = 1$)
- 균등분포일 때 최대: $H = \log n$ ($n$개 균등 결과)

**이진 엔트로피** $H(p)$ ($p$: 앞면 확률):

$$
H(p) = -p\log_2 p - (1-p)\log_2(1-p)
$$

$p = 0.5$에서 최대값 1 bit. $p \to 0$ 또는 $p \to 1$에서 $H \to 0$.

### 결합 엔트로피와 조건부 엔트로피

$$
H(X, Y) = -\sum_{x,y} P(x,y)\log P(x,y)
$$

$$
H(X|Y) = -\sum_{x,y} P(x,y)\log P(x|y) = H(X,Y) - H(Y)
$$

**연쇄 규칙**: $H(X, Y) = H(X) + H(Y|X)$

$H(X|Y) \leq H(X)$: 추가 정보 $Y$는 불확실성을 줄이거나 유지한다.

---

## KL 발산 (Kullback-Leibler Divergence)

### 정의

두 분포 $P$(참 분포)와 $Q$(근사 분포)의 차이:

$$
D_{KL}(P \| Q) = \sum_x P(x)\log\frac{P(x)}{Q(x)} \geq 0
$$

연속: $D_{KL}(P \| Q) = \int p(x)\log\frac{p(x)}{q(x)}\,dx$

### 성질

**비음성**: $D_{KL}(P\|Q) \geq 0$, 등호는 $P = Q$일 때만.

**증명 (젠센 부등식)**: $-\log$는 볼록 함수이므로 $D_{KL} = E_P[-\log(Q/P)] \geq -\log E_P[Q/P] = 0$.

**비대칭**: $D_{KL}(P\|Q) \ne D_{KL}(Q\|P)$ (일반적으로) → 거리 함수가 아님!

- $D_{KL}(P\|Q)$: **전방 KL** — $P \ne 0$인 곳에서 $Q$도 커야 함 → **평균 추구(mean-seeking)**
- $D_{KL}(Q\|P)$: **역방향 KL** — $P = 0$인 곳에서 $Q \approx 0$ → **최빈값 추구(mode-seeking)**

### AI에서의 응용

**VAE (변분 오토인코더)**: 사후 분포 $q(z|x)$와 사전 분포 $p(z)$의 KL 발산을 정규화 항으로 사용.

$$
\mathcal{L}_{\text{VAE}} = -E_{q(z|x)}[\log p(x|z)] + D_{KL}(q(z|x) \| p(z))
$$

**RL (강화학습) PPO**: 정책 업데이트 시 이전 정책과의 KL 발산을 제한해 안정성 확보.

**지식 증류(Knowledge Distillation)**: 교사 모델 분포 $T$와 학생 모델 분포 $S$의 KL 최소화.

---

## 교차 엔트로피 (Cross-Entropy)

### 정의

$$
H(P, Q) = -\sum_x P(x)\log Q(x) = H(P) + D_{KL}(P\|Q)
$$

교차 엔트로피 = 참 분포의 엔트로피 + KL 발산.

$H(P)$는 고정이므로 $H(P, Q)$를 최소화하는 것 = $D_{KL}(P\|Q)$ 최소화.

### 딥러닝 분류 손실

참 레이블 분포 $P$가 원-핫(one-hot)이고 모델 예측 $Q = \hat{y}$:

$$
\mathcal{L} = -\sum_i y_i \log \hat{y}_i
$$

다분류 소프트맥스와의 조합:

$$
\hat{y}_i = \frac{e^{z_i}}{\sum_j e^{z_j}}, \quad \mathcal{L} = -\log \hat{y}_{c}
$$

$c$: 정답 클래스. 소프트맥스 + 교차 엔트로피의 역전파가 특히 깔끔: $\partial\mathcal{L}/\partial z_i = \hat{y}_i - y_i$.

### 교차 엔트로피 = MLE

데이터의 참 분포 $P$, 모델 $Q_\theta$:

$$
H(P, Q_\theta) \approx -\frac{1}{n}\sum_{i=1}^n \log Q_\theta(x_i)
$$

이를 최소화 = $\sum_i \log Q_\theta(x_i)$ 최대화 = **로그 우도 최대화(MLE)**.

---

## 상호 정보량 (Mutual Information)

### 정의

두 확률변수 $X$, $Y$의 공유 정보량:

$$
I(X; Y) = \sum_{x,y} P(x,y)\log\frac{P(x,y)}{P(x)P(y)}
$$

$$
= H(X) - H(X|Y) = H(Y) - H(Y|X) = H(X) + H(Y) - H(X,Y)
$$

**직관**: $Y$를 알면 $X$에 대한 불확실성이 얼마나 줄어드는가.

$I(X;Y) = 0 \iff X$와 $Y$가 독립.

**$I$와 KL 발산의 관계**:

$$
I(X; Y) = D_{KL}(P(X,Y) \| P(X)P(Y))
$$

결합 분포와 주변 분포의 곱의 차이 → 독립에서 얼마나 멀어졌는지.

### AI에서의 응용

**특성 선택**: 입력 피처 $X_i$와 레이블 $Y$의 상호 정보량 $I(X_i; Y)$가 높은 것을 선택.

**InfoMax 원리**: 표현 학습에서 입력과 잠재 표현의 상호 정보량을 최대화.

**CPC (Contrastive Predictive Coding)**: 미래 예측과 현재 컨텍스트의 상호 정보량 최대화로 자기 지도 학습.

---

## 소스 코딩 이론

### 섀넌의 소스 코딩 정리

최적 코드의 평균 코드 길이 $\geq H(X)$.

허프만 코딩: 확률이 높은 심볼에 짧은 코드를 할당해 평균 길이를 엔트로피에 가깝게.

### 채널 용량

$$
C = \max_{P(X)} I(X; Y) \quad \text{(bit/channel use)}
$$

오류 없는 전송이 가능한 최대 속도 = 채널 용량 $C$ 이하. (섀넌의 채널 코딩 정리)

---

## 연습문제

**문제 1.** 공정한 동전을 던질 때의 엔트로피를 구하여라.

> **풀이**
>
> $P(\text{앞}) = P(\text{뒤}) = 0.5$
>
> $$H = -0.5\log_2 0.5 - 0.5\log_2 0.5 = -0.5 \times (-1) - 0.5 \times (-1) = 1 \text{ bit}$$
>
> 동전 1번 = 1 bit의 정보. 6면 주사위 1번 = $\log_2 6 \approx 2.58$ bits.

---

**문제 2.** 3분류 모델이 샘플에 대해 $\hat{y} = (0.7, 0.2, 0.1)$로 예측하고, 정답이 클래스 1일 때 교차 엔트로피 손실을 구하여라.

> **풀이**
>
> $y = (1, 0, 0)$ (원-핫)
>
> $$\mathcal{L} = -(1 \cdot \log 0.7 + 0 \cdot \log 0.2 + 0 \cdot \log 0.1) = -\log 0.7 \approx 0.357$$
>
> 모델이 정답 클래스에 확률 0.7을 부여했으므로 손실이 낮은 편이다.
>
> 만약 확률이 0.1이었다면 $-\log 0.1 \approx 2.30$으로 훨씬 크다.

---

**문제 3.** 교차 엔트로피 최소화가 MLE와 동일함을 보여라.

> **풀이**
>
> 데이터의 경험 분포를 $\hat{P}$, 모델 분포를 $Q_\theta$라 하면:
>
> $$H(\hat{P}, Q_\theta) = -\sum_x \hat{P}(x)\log Q_\theta(x) = -\frac{1}{n}\sum_{i=1}^n \log Q_\theta(x_i)$$
>
> $H(\hat{P})$는 $\theta$에 무관하므로:
>
> $$\arg\min_\theta H(\hat{P}, Q_\theta) = \arg\min_\theta D_{KL}(\hat{P}\|Q_\theta) = \arg\max_\theta \sum_i \log Q_\theta(x_i)$$
>
> 마지막 항이 정확히 로그 우도 최대화(MLE)이다.

---

**문제 4.** 두 가우시안 $P = \mathcal{N}(\mu_1, \sigma^2)$, $Q = \mathcal{N}(\mu_2, \sigma^2)$ (분산 같음) 사이의 KL 발산을 구하여라.

> **풀이**
>
> $$D_{KL}(P\|Q) = \int p(x)\log\frac{p(x)}{q(x)}\,dx = \int p(x)\left[-\frac{(x-\mu_1)^2}{2\sigma^2} + \frac{(x-\mu_2)^2}{2\sigma^2}\right]dx$$
>
> $= \dfrac{1}{2\sigma^2} E_P[(x-\mu_2)^2 - (x-\mu_1)^2]$
>
> $E_P[(x-\mu_1)^2] = \sigma^2$, $E_P[(x-\mu_2)^2] = \sigma^2 + (\mu_1-\mu_2)^2$
>
> $$D_{KL}(P\|Q) = \frac{(\mu_1 - \mu_2)^2}{2\sigma^2}$$
>
> 분산이 같을 때 KL 발산은 평균 차이의 제곱에 비례한다.
