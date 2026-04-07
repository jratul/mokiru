---
title: "AI를 위한 확률·통계"
description: "베이즈 추론, MLE, MAP, 주요 분포, 정보이론의 머신러닝 응용을 다룹니다."
date: "2026-04-06"
subject: "math"
category: "AI 수학"
level: "ai-math"
tags: ["확률통계", "베이즈추론", "MLE", "MAP", "머신러닝", "AI수학"]
---

[대학 확률론](/math/university/probability)과 [통계학](/math/university/statistics)이 머신러닝의 이론적 기반이다. 분류 모델은 조건부 확률 $P(y|\vec{x})$를 추정하고, 학습은 우도(likelihood)를 최대화하는 최적화 문제이며, 정규화는 사전 분포의 베이즈 해석이다. [정보이론](/math/ai-math/information-theory)의 엔트로피와 교차 엔트로피 손실이 직접 연결된다.

---

## 확률론 기초 복습

### 확률의 규칙

**주변화(marginalization)**: $P(X) = \sum_Y P(X, Y)$

**연쇄 규칙**: $P(X, Y) = P(X|Y)P(Y) = P(Y|X)P(X)$

**독립**: $P(X, Y) = P(X)P(Y) \iff P(X|Y) = P(X)$

### 기댓값과 분산

$$
E[X] = \sum_x x P(x), \quad E[g(X)] = \sum_x g(x)P(x)
$$

$$
\text{Var}(X) = E[(X - \mu)^2] = E[X^2] - (E[X])^2
$$

**선형성**: $E[aX + bY] = aE[X] + bE[Y]$ (독립 여부 무관)

---

## 베이즈 추론

### 베이즈 정리

$$
P(\theta | D) = \frac{P(D|\theta)\,P(\theta)}{P(D)}
$$

| 항목 | 이름 | 의미 |
|------|------|------|
| $P(\theta)$ | 사전 분포 (prior) | 데이터 보기 전 믿음 |
| $P(D\|\theta)$ | 우도 (likelihood) | 매개변수 $\theta$에서 데이터 $D$가 관측될 확률 |
| $P(\theta\|D)$ | 사후 분포 (posterior) | 데이터 관측 후 업데이트된 믿음 |
| $P(D)$ | 증거 (evidence) | 정규화 상수 |

**스팸 필터 예제**: $P(\text{스팸}|\text{이메일 내용}) \propto P(\text{내용}|\text{스팸}) \cdot P(\text{스팸})$

### 베이즈 업데이트

관측 데이터가 누적될수록 사후 분포가 점점 날카로워진다 (불확실성 감소).

- 처음 믿음(사전): "동전이 공정할 것이다"
- 데이터: 10번 중 9번 앞
- 업데이트된 믿음(사후): "앞면 확률이 꽤 높다"

작은 데이터: 사후가 사전에 가깝다. 큰 데이터: 사후가 우도에 지배된다.

---

## 최대 우도 추정 (MLE)

### 정의

관측 데이터 $D = \{x_1, \ldots, x_n\}$에서 매개변수 $\theta$를 추정:

$$
\hat{\theta}_{\text{MLE}} = \arg\max_\theta P(D|\theta) = \arg\max_\theta \prod_i p(x_i|\theta)
$$

i.i.d. (독립 동일 분포) 가정 → 곱을 합으로 변환 (로그 우도):

$$
\hat{\theta}_{\text{MLE}} = \arg\max_\theta \sum_i \log p(x_i|\theta)
$$

### 가우시안 MLE

$x_i \sim \mathcal{N}(\mu, \sigma^2)$일 때:

$$
\hat{\mu}_{\text{MLE}} = \bar{x} = \frac{1}{n}\sum_i x_i
$$

$$
\hat{\sigma}^2_{\text{MLE}} = \frac{1}{n}\sum_i(x_i - \bar{x})^2
$$

주의: MLE 분산 추정량은 편향(biased). 비편향 추정은 $\hat{\sigma}^2 = \frac{1}{n-1}\sum_i(x_i-\bar{x})^2$.

### MLE와 손실 함수

**분류 (교차 엔트로피)**: 레이블 분포의 우도를 최대화 = 교차 엔트로피 최소화

**회귀 (MSE)**: 가우시안 노이즈 모델의 우도 최대화 = 평균 제곱 오차 최소화

---

## 최대 사후 추정 (MAP)

### 정의

사후 분포를 최대화하는 추정:

$$
\hat{\theta}_{\text{MAP}} = \arg\max_\theta P(\theta|D) = \arg\max_\theta \left[\log P(D|\theta) + \log P(\theta)\right]
$$

MLE에 사전 분포 항이 추가된 형태.

### 사전 분포와 정규화

| 사전 분포 | $\log P(\theta)$ | 동치 정규화 |
|---------|-----------------|-----------|
| 가우시안 $\mathcal{N}(0, 1/\lambda)$ | $-\lambda\|\theta\|_2^2/2$ | **L2 (Ridge) 정규화** |
| 라플라스 $\text{Laplace}(0, 1/\lambda)$ | $-\lambda\|\theta\|_1$ | **L1 (Lasso) 정규화** |

**결론**: 정규화는 사전 분포를 도입한 MAP 추정이다.

L1 정규화(Lasso)가 희소성을 유도하는 이유: 라플라스 분포는 0 근방에서 뾰족한 첨도 → 많은 가중치를 0으로 밀어내는 효과.

---

## 주요 분포

### 이산 분포

**베르누이 분포** $\text{Bernoulli}(p)$: 이진 결과. $P(x) = p^x(1-p)^{1-x}$

**이항 분포** $\text{Binomial}(n, p)$: $n$번 시행에서 성공 횟수.

**카테고리컬 분포** $\text{Categorical}(\vec{p})$: $K$개 클래스 중 하나. 다분류의 기본.

**포아송 분포** $\text{Poisson}(\lambda)$: 단위 시간당 사건 발생 횟수. $P(k) = e^{-\lambda}\lambda^k/k!$

### 연속 분포

**가우시안 분포** $\mathcal{N}(\mu, \sigma^2)$:

$$
p(x) = \frac{1}{\sqrt{2\pi}\sigma}e^{-(x-\mu)^2/(2\sigma^2)}
$$

**최대 엔트로피 성질**: 평균과 분산이 고정될 때 엔트로피가 최대인 분포 → 정보가 가장 적은 가정.

**다변량 가우시안** $\mathcal{N}(\vec{\mu}, \Sigma)$:

$$
p(\vec{x}) = \frac{1}{(2\pi)^{d/2}|\Sigma|^{1/2}} \exp\!\left(-\frac{1}{2}(\vec{x}-\vec{\mu})^T\Sigma^{-1}(\vec{x}-\vec{\mu})\right)
$$

- $\Sigma$가 대각: 피처 간 독립
- $\Sigma$가 단위행렬: 구형(isotropic) 가우시안

**디리클레 분포** $\text{Dir}(\vec{\alpha})$: 카테고리컬 분포의 사전 분포. $K$개 확률의 분포.

### 지수족 분포 (Exponential Family)

가우시안, 베르누이, 카테고리컬, 포아송, 베타, 디리클레 등이 모두 지수족:

$$
p(x|\eta) = h(x)\exp(\eta^T T(x) - A(\eta))
$$

지수족은 MLE 해가 닫힌 형태로 존재하며, GLM(일반화 선형 모델)의 기반.

---

## 기댓값 최대화 (EM 알고리즘)

잠재 변수 $Z$가 있는 모델에서 MLE:

$$
\hat{\theta} = \arg\max_\theta \log P(X|\theta) = \arg\max_\theta \log \sum_Z P(X, Z|\theta)
$$

직접 최적화 어려움 → EM으로 우회:

**E 단계**: $Q(\theta|\theta^{(t)}) = E_{Z|X,\theta^{(t)}}[\log P(X, Z|\theta)]$ 계산

**M 단계**: $\theta^{(t+1)} = \arg\max_\theta Q(\theta|\theta^{(t)})$

**응용**: 가우시안 혼합 모델(GMM) 클러스터링, 은닉 마르코프 모델(HMM).

---

## 연습문제

**문제 1.** 동전을 10번 던져 앞면이 7번 나왔다. MLE로 앞면 확률 $p$를 추정하여라.

> **풀이**
>
> $L(p) = \binom{10}{7}p^7(1-p)^3$
>
> $\log L = \text{const} + 7\log p + 3\log(1-p)$
>
> $\dfrac{d\log L}{dp} = \dfrac{7}{p} - \dfrac{3}{1-p} = 0 \implies 7(1-p) = 3p \implies p = \dfrac{7}{10} = 0.7$
>
> 직관적으로 관측 비율이 MLE 추정값이 된다.

---

**문제 2.** MLE와 MAP의 차이를 설명하고, MAP가 L2 정규화와 동일한 이유를 보여라.

> **풀이**
>
> MLE: $\arg\max_\theta \sum_i \log p(x_i|\theta)$ — 데이터만 고려
>
> MAP: $\arg\max_\theta \left[\sum_i \log p(x_i|\theta) + \log P(\theta)\right]$ — 사전 지식 추가
>
> 가우시안 사전 $P(\theta) = \mathcal{N}(0, 1/\lambda I)$:
>
> $\log P(\theta) = -\dfrac{\lambda}{2}\|\theta\|_2^2 + \text{const}$
>
> MAP 목적함수: $\sum_i \log p(x_i|\theta) - \dfrac{\lambda}{2}\|\theta\|_2^2$
>
> 이것은 L2 정규화된 음의 로그 우도 최소화와 동일하다.

---

**문제 3.** 다변량 가우시안에서 공분산 행렬 $\Sigma$가 단위행렬일 때와 대각행렬일 때의 기하학적 차이를 설명하여라.

> **풀이**
>
> 마할라노비스 거리 $(\vec{x}-\vec{\mu})^T\Sigma^{-1}(\vec{x}-\vec{\mu}) = c$의 등고선:
>
> - $\Sigma = I$: 구형(원). 모든 방향 동일 분산, 피처 간 독립
> - $\Sigma = \text{diag}(\sigma_1^2, \ldots, \sigma_d^2)$: 축에 정렬된 타원. 피처 간 독립이지만 분산이 다름
> - 일반 $\Sigma$: 회전된 타원. 피처 간 상관 관계 반영
>
> 가우시안 나이브 베이즈는 $\Sigma$가 대각이라고 가정한다.

---

**문제 4.** GMM(가우시안 혼합 모델)의 EM 알고리즘 E단계를 설명하여라.

> **풀이**
>
> 모델: $p(\vec{x}) = \sum_{k=1}^K \pi_k \mathcal{N}(\vec{x}|\vec{\mu}_k, \Sigma_k)$
>
> E단계: 각 데이터 포인트 $\vec{x}_i$가 클러스터 $k$에 속할 **책임도(responsibility)** 계산:
>
> $$r_{ik} = \frac{\pi_k \mathcal{N}(\vec{x}_i|\vec{\mu}_k, \Sigma_k)}{\sum_{j=1}^K \pi_j \mathcal{N}(\vec{x}_i|\vec{\mu}_j, \Sigma_j)}$$
>
> 베이즈 정리 적용: $r_{ik} = P(Z_i = k | \vec{x}_i, \theta^{\text{old}})$
>
> M단계에서 이 소프트 클러스터 할당을 이용해 $\vec{\mu}_k$, $\Sigma_k$, $\pi_k$를 업데이트한다.
