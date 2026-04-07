---
title: "확률론"
description: "확률 공간, 확률변수, 주요 분포, 기댓값·분산, 극한 정리를 다룹니다."
date: "2026-04-06"
subject: "math"
category: "확률론"
level: "university"
tags: ["확률론", "확률변수", "기댓값", "중심극한정리", "측도론", "대학수학"]
---

확률론은 불확실성을 수학적으로 엄밀하게 다루는 학문이다. [고등 확률과 통계](/math/high/probability-stats)의 직관적 확률 계산을 측도론 위에 엄밀하게 올려놓은 것이다. 확률론의 핵심 결과인 중심극한정리·대수의 법칙은 [대학 통계학](/math/university/statistics)·[AI 수학 확률·통계](/math/ai-math/probability-stats)의 이론적 토대다.

---

## 확률 공간

### 콜모고로프 공리

표본공간 $\Omega$, $\sigma$-대수 $\mathcal{F}$, 확률 측도 $P$의 3중 쌍 $(\Omega, \mathcal{F}, P)$를 **확률 공간**이라 한다.

**콜모고로프 공리**:
1. **비음성**: $P(A) \geq 0$ for all $A \in \mathcal{F}$
2. **정규화**: $P(\Omega) = 1$
3. **가산가법성**: 서로소인 $A_1, A_2, \ldots \in \mathcal{F}$에 대해 $P\!\left(\bigcup_{i=1}^{\infty} A_i\right) = \sum_{i=1}^{\infty} P(A_i)$

**유도 성질**:
- $P(A^c) = 1 - P(A)$
- $P(\emptyset) = 0$
- $A \subseteq B \implies P(A) \leq P(B)$
- $P(A \cup B) = P(A) + P(B) - P(A \cap B)$

### 조건부 확률

$$
P(A|B) = \frac{P(A \cap B)}{P(B)}, \quad P(B) > 0
$$

**곱의 법칙**: $P(A \cap B) = P(A|B)P(B) = P(B|A)P(A)$

**전확률 공식**: $\{B_i\}$가 $\Omega$의 분할이면:

$$
P(A) = \sum_i P(A|B_i) P(B_i)
$$

### 베이즈 정리

$$
P(B_k | A) = \frac{P(A|B_k)P(B_k)}{\sum_j P(A|B_j)P(B_j)}
$$

- $P(B_k)$: 사전확률(prior)
- $P(A|B_k)$: 우도(likelihood)
- $P(B_k|A)$: 사후확률(posterior)

베이즈 정리는 관측 결과 $A$를 보고 원인 $B_k$의 확률을 업데이트하는 공식이다. [AI 수학 확률·통계](/math/ai-math/probability-stats)의 베이즈 분류기, 칼만 필터, MCMC의 수학적 기반이다.

### 독립

$$
A, B \text{ 독립} \iff P(A \cap B) = P(A)P(B)
$$

$P(A|B) = P(A)$ ($B$의 발생이 $A$의 확률에 영향을 주지 않음)

**쌍별 독립 ≠ 상호 독립**: $A, B, C$에서 각 쌍이 독립이어도 셋이 동시에 독립일 필요는 없다.

---

## 확률변수

### 이산 확률변수

확률 질량 함수(PMF) $p(x) = P(X = x)$:

$$
\sum_x p(x) = 1, \quad p(x) \geq 0
$$

**기댓값(평균)**:

$$
E[X] = \sum_x x \cdot p(x)
$$

**분산**:

$$
\text{Var}(X) = E[(X - E[X])^2] = E[X^2] - (E[X])^2
$$

**선형성**: $E[aX + b] = aE[X] + b$, $\text{Var}(aX + b) = a^2\text{Var}(X)$

### 연속 확률변수

확률 밀도 함수(PDF) $f(x)$:

$$
P(a \leq X \leq b) = \int_a^b f(x)\,dx, \quad \int_{-\infty}^{\infty} f(x)\,dx = 1
$$

누적 분포 함수(CDF): $F(x) = P(X \leq x) = \int_{-\infty}^x f(t)\,dt$

$$
E[X] = \int_{-\infty}^{\infty} x f(x)\,dx
$$

### 주요 분포

| 분포 | 기댓값 | 분산 | 활용 |
|------|--------|------|------|
| $\text{Bernoulli}(p)$ | $p$ | $p(1-p)$ | 이진 결과 |
| $B(n,p)$ | $np$ | $np(1-p)$ | 독립 반복 시행 |
| $\text{Geometric}(p)$ | $1/p$ | $(1-p)/p^2$ | 첫 성공까지 횟수 |
| $\text{Poisson}(\lambda)$ | $\lambda$ | $\lambda$ | 희귀 사건 수 |
| $N(\mu, \sigma^2)$ | $\mu$ | $\sigma^2$ | 자연 현상, CLT |
| $\text{Exp}(\lambda)$ | $1/\lambda$ | $1/\lambda^2$ | 대기 시간 |
| $\chi^2(k)$ | $k$ | $2k$ | 통계 검정 |
| $t(k)$ | $0$ ($k>1$) | $k/(k-2)$ ($k>2$) | 소표본 추론 |
| $F(d_1, d_2)$ | — | — | 분산 비교 |

**포아송 과정**: 단위 시간에 평균 $\lambda$번 사건이 독립적으로 발생할 때 횟수 $\sim \text{Poisson}(\lambda)$, 사건 간 시간 $\sim \text{Exp}(\lambda)$.

**정규분포**: $X \sim N(\mu, \sigma^2)$의 표준화: $Z = \dfrac{X-\mu}{\sigma} \sim N(0,1)$

---

## 결합 분포

### 결합 분포와 주변 분포

**결합 PDF**: $f(x,y)$, $\iint f(x,y)\,dx\,dy = 1$

**주변 PDF**: $f_X(x) = \int f(x,y)\,dy$, $f_Y(y) = \int f(x,y)\,dx$

**독립**: $X, Y$ 독립 $\iff$ $f(x,y) = f_X(x)f_Y(y)$

### 공분산과 상관계수

$$
\text{Cov}(X,Y) = E[XY] - E[X]E[Y] = E[(X-\mu_X)(Y-\mu_Y)]
$$

$$
\rho(X,Y) = \frac{\text{Cov}(X,Y)}{\sqrt{\text{Var}(X)\text{Var}(Y)}} \in [-1, 1]
$$

- $\rho = 1$: 완전 양의 선형 관계
- $\rho = -1$: 완전 음의 선형 관계
- $\rho = 0$: 선형 무상관 (독립이면 $\rho = 0$이지만 역은 불성립)

**합의 분산**: $\text{Var}(X + Y) = \text{Var}(X) + \text{Var}(Y) + 2\text{Cov}(X,Y)$

$X, Y$ 독립이면 $\text{Cov}(X,Y) = 0$이므로 $\text{Var}(X+Y) = \text{Var}(X) + \text{Var}(Y)$

### 변수 변환

$Y = g(X)$일 때 PDF: $f_Y(y) = f_X(g^{-1}(y)) \cdot \left|\dfrac{d}{dy}g^{-1}(y)\right|$

---

## 적률과 생성함수

### 적률생성함수 (MGF)

$$
M_X(t) = E[e^{tX}] = \sum_n \frac{E[X^n]}{n!} t^n
$$

$$
E[X^n] = M_X^{(n)}(0) \quad (n\text{차 적률})
$$

**독립이면 MGF의 곱**: $M_{X+Y}(t) = M_X(t) \cdot M_Y(t)$

**특성함수**: $\phi_X(t) = E[e^{itX}]$ — 항상 존재하며 분포를 유일하게 결정.

---

## 극한 정리

### 대수의 법칙 (LLN)

같은 분포($\mu$, $\sigma^2 < \infty$)에서 독립적으로 추출한 $X_1, X_2, \ldots$에 대해 표본평균 $\bar{X}_n = \dfrac{1}{n}\sum_{i=1}^n X_i$:

**약한 대수의 법칙**: $\bar{X}_n \xrightarrow{P} \mu$ (확률 수렴)

$$
\forall \varepsilon > 0,\; P(|\bar{X}_n - \mu| > \varepsilon) \to 0
$$

**강한 대수의 법칙**: $\bar{X}_n \xrightarrow{\text{a.s.}} \mu$ (거의 확실한 수렴)

### 중심극한정리 (CLT)

$$
\frac{\sqrt{n}(\bar{X}_n - \mu)}{\sigma} \xrightarrow{d} N(0, 1)
$$

$n$이 충분히 크면 ($n \geq 30$이 경험적 기준), 분포에 상관없이 표본평균은 정규분포로 근사된다. 이것이 정규분포가 자연 현상과 통계에서 편재하는 이유다.

**응용**: $n$이 큰 경우 $B(n,p)$를 $N(np, np(1-p))$로 근사.

### 체비셰프 부등식

$$
P(|X - \mu| \geq k\sigma) \leq \frac{1}{k^2}
$$

분포를 모를 때 확률의 상한을 주는 부등식 (약하지만 범용).

---

## 연습문제

**문제 1.** 공장 A가 전체 제품의 60%, B가 40%를 생산한다. A의 불량률은 2%, B의 불량률은 5%이다. 임의로 뽑은 제품이 불량품일 때, A가 만들었을 확률을 구하여라.

> **풀이** (베이즈 정리)
>
> $P(\text{불량}) = 0.6 \times 0.02 + 0.4 \times 0.05 = 0.012 + 0.02 = 0.032$
>
> $P(A|\text{불량}) = \dfrac{0.012}{0.032} = \dfrac{3}{8} = 0.375$

---

**문제 2.** $X \sim N(10, 4)$일 때 $P(8 \leq X \leq 14)$를 구하여라. ($P(0 \leq Z \leq 1) = 0.3413$, $P(0 \leq Z \leq 2) = 0.4772$)

> **풀이**
>
> $\sigma = 2$이므로
>
> $P(8 \leq X \leq 14) = P\!\left(\dfrac{8-10}{2} \leq Z \leq \dfrac{14-10}{2}\right) = P(-1 \leq Z \leq 2) = 0.3413 + 0.4772 = 0.8185$

---

**문제 3.** $X, Y$가 독립이고 각각 $\text{Exp}(2)$를 따를 때, $\text{Var}(3X - 2Y + 1)$을 구하여라.

> **풀이**
>
> $\text{Exp}(2)$의 분산 $= \dfrac{1}{\lambda^2} = \dfrac{1}{4}$
>
> $X, Y$ 독립이므로 $\text{Cov}(X,Y) = 0$
>
> $\text{Var}(3X - 2Y + 1) = 9\text{Var}(X) + 4\text{Var}(Y) = 9 \cdot \dfrac{1}{4} + 4 \cdot \dfrac{1}{4} = \dfrac{9}{4} + 1 = \dfrac{13}{4}$

---

**문제 4.** 어떤 콜센터에서 1시간에 평균 12번 전화가 온다. 1시간에 전화가 정확히 10번 올 확률을 포아송 분포로 구하여라. ($e^{-12} \approx 0.0000061$)

> **풀이**
>
> $X \sim \text{Poisson}(12)$
>
> $P(X=10) = \dfrac{e^{-12} \cdot 12^{10}}{10!} = \dfrac{0.0000061 \times 61917364224}{3628800} \approx 0.105$
