---
title: "미분방정식"
description: "1계·2계 상미분방정식의 풀이, 연립 미분방정식, 라플라스 변환 적용을 다룹니다."
date: "2026-04-06"
subject: "math"
category: "미분방정식"
level: "university"
tags: ["미분방정식", "ODE", "변수분리", "2계선형", "라플라스변환", "대학수학"]
---

미분방정식(ODE)은 함수와 그 도함수 사이의 관계를 기술하는 방정식이다. [대학 미적분학](/math/university/calculus)의 미분 개념을 응용하여 자연 현상(진동, 성장, 냉각, 전기회로)을 수학적으로 모델링한다. 라플라스 변환은 [공학수학 라플라스 변환](/math/engineering-math/laplace)에서 더 깊이 다루며, ODE 계통의 이론은 [상미분방정식 분야]의 기초다.

---

## 기본 개념

### 용어와 분류

$y$를 $x$의 함수로 볼 때, $y$와 그 도함수를 포함하는 방정식.

**계(order)**: 방정식에 나타나는 가장 높은 계의 도함수. $y'' + 2y' + y = 0$은 2계.

**선형/비선형**: $y$와 도함수가 1차식으로만 나타나면 선형.

**동차/비동차**: 우변이 0이면 동차(homogeneous), 아니면 비동차.

### 초기값 문제 (IVP)

미분방정식 + 초기 조건을 묶은 것. 예:

$$
y' = f(x,y), \quad y(x_0) = y_0
$$

**존재·유일성 정리**: $f$와 $\partial f/\partial y$가 연속이면 초기값 문제의 해가 유일하게 존재한다.

---

## 1계 미분방정식

### 변수분리법

$$
\frac{dy}{dx} = f(x)g(y) \implies \int \frac{dy}{g(y)} = \int f(x)\,dx + C
$$

**예제.** $\dfrac{dy}{dx} = xy$

$$
\int \frac{dy}{y} = \int x\,dx \implies \ln|y| = \frac{x^2}{2} + C \implies y = Ae^{x^2/2}
$$

**예제.** 자연 성장: 인구 $P$가 자신에 비례하여 성장.

$$
\frac{dP}{dt} = kP \implies P(t) = P_0 e^{kt}
$$

$k > 0$이면 지수 성장, $k < 0$이면 지수 감소.

### 1계 선형 방정식

$$
\frac{dy}{dx} + P(x)y = Q(x)
$$

**적분인자법**: $\mu(x) = e^{\int P(x)\,dx}$를 양변에 곱하면

$$
\frac{d}{dx}(\mu y) = \mu Q(x) \implies \mu y = \int \mu Q\,dx + C \implies y = \frac{1}{\mu}\int \mu Q\,dx
$$

**예제.** $y' + \dfrac{1}{x}y = x$

적분인자: $\mu = e^{\int \frac{1}{x}dx} = e^{\ln x} = x$

$$
\frac{d}{dx}(xy) = x^2 \implies xy = \frac{x^3}{3} + C \implies y = \frac{x^2}{3} + \frac{C}{x}
$$

### 베르누이 방정식

$$
\frac{dy}{dx} + P(x)y = Q(x)y^n
$$

$v = y^{1-n}$으로 치환하면 1계 선형 방정식으로 변환된다.

**예제.** 로지스틱 성장: $\dfrac{dP}{dt} = rP\!\left(1 - \dfrac{P}{K}\right)$ → 해: $P(t) = \dfrac{K}{1 + \left(\dfrac{K}{P_0}-1\right)e^{-rt}}$

---

## 2계 선형 미분방정식

### 상수계수 동차방정식

$$
ay'' + by' + cy = 0
$$

특성방정식 $ar^2 + br + c = 0$의 근에 따라:

| 판별식 $\Delta = b^2 - 4ac$ | 근 유형 | 일반해 |
|---------------------------|---------|--------|
| $\Delta > 0$ | 두 실근 $r_1 \ne r_2$ | $C_1 e^{r_1 x} + C_2 e^{r_2 x}$ |
| $\Delta = 0$ | 중근 $r = -b/(2a)$ | $(C_1 + C_2 x)e^{rx}$ |
| $\Delta < 0$ | 켤레 복소근 $\alpha \pm \beta i$ | $e^{\alpha x}(C_1\cos\beta x + C_2\sin\beta x)$ |

**물리적 해석**: $y'' + 2\gamma y' + \omega_0^2 y = 0$ (단순조화진동자)

- $\gamma < \omega_0$ (감쇠 부족): 진동하며 감쇠 (복소근)
- $\gamma = \omega_0$ (임계감쇠): 진동 없이 빠르게 0으로 수렴 (중근)
- $\gamma > \omega_0$ (과감쇠): 진동 없이 느리게 수렴 (두 실근)

### 비동차 방정식

$$
ay'' + by' + cy = f(x)
$$

**일반해** = **동차해** $y_h$ + **특수해** $y_p$:

$$
y = y_h + y_p
$$

**미정계수법**: $f(x)$의 형태에 따라 $y_p$를 가정.

| $f(x)$의 형태 | 가정하는 $y_p$ |
|--------------|-------------|
| $e^{ax}$ | $Ae^{ax}$ |
| $\sin bx$ 또는 $\cos bx$ | $A\cos bx + B\sin bx$ |
| 다항식 $x^n$ | $A_nx^n + \cdots + A_0$ |
| 조합 | 각각의 곱 |

**예외**: 가정한 $y_p$가 $y_h$와 겹칠 때는 $x$를 곱해야 한다 (공명).

**매개변수 변분법**: $y_h = C_1 y_1 + C_2 y_2$일 때, $C_1 = C_1(x)$, $C_2 = C_2(x)$로 놓고 $y_p$를 구함.

$$
y_p = -y_1\int\frac{y_2 f}{W}\,dx + y_2\int\frac{y_1 f}{W}\,dx
$$

단, $W = y_1 y_2' - y_1' y_2$ (론스키안)

---

## 연립 미분방정식

$$
\frac{d\vec{x}}{dt} = A\vec{x}, \quad \vec{x}(0) = \vec{x}_0
$$

$A$의 고유값 $\lambda_i$, 고유벡터 $\vec{v}_i$로 해를 구성:

$$
\vec{x}(t) = \sum_i C_i e^{\lambda_i t} \vec{v}_i
$$

**안정성**: 모든 고유값의 실수부가 음수 $\iff$ 원점이 안정 평형점 (계수행렬의 고유값 분석이 핵심).

---

## 라플라스 변환을 이용한 풀이

라플라스 변환은 ODE를 대수 방정식으로 변환하는 강력한 도구다. 자세한 내용은 [공학수학 라플라스 변환](/math/engineering-math/laplace) 참고.

$$
\mathcal{L}\{y'\} = sY(s) - y(0), \quad \mathcal{L}\{y''\} = s^2Y(s) - sy(0) - y'(0)
$$

**절차**: 라플라스 변환 → $Y(s)$ 풀기 → 역변환

---

## 연습문제

**문제 1.** $\dfrac{dy}{dx} = \dfrac{x}{y}$, $y(0) = 2$를 풀어라.

> **풀이**
>
> $y\,dy = x\,dx \implies \dfrac{y^2}{2} = \dfrac{x^2}{2} + C$
>
> $y(0)=2$: $2 = C$
>
> $y = \sqrt{x^2 + 4}$

---

**문제 2.** $y'' - 5y' + 6y = 0$의 일반해를 구하여라.

> **풀이**
>
> 특성방정식: $(r-2)(r-3) = 0 \implies r = 2, 3$
>
> $y = C_1 e^{2x} + C_2 e^{3x}$

---

**문제 3.** $y'' + 4y = \sin x$의 일반해를 구하여라.

> **풀이**
>
> 동차해: 특성방정식 $r^2 + 4 = 0 \implies r = \pm 2i$, $y_h = C_1\cos 2x + C_2\sin 2x$
>
> 특수해 가정: $y_p = A\cos x + B\sin x$ (공명 없음: $\omega = 1 \ne 2$)
>
> $y_p'' + 4y_p = -A\cos x - B\sin x + 4A\cos x + 4B\sin x = 3A\cos x + 3B\sin x = \sin x$
>
> $3A = 0 \implies A = 0$, $3B = 1 \implies B = \dfrac{1}{3}$
>
> $y = C_1\cos 2x + C_2\sin 2x + \dfrac{\sin x}{3}$

---

**문제 4.** $y'' + 4y = 0$, $y(0)=1$, $y'(0)=0$을 풀어라.

> **풀이**
>
> 일반해: $y = C_1\cos 2x + C_2\sin 2x$
>
> $y(0)=1 \implies C_1 = 1$
>
> $y'(0) = 2C_2 = 0 \implies C_2 = 0$
>
> $y = \cos 2x$

---

**문제 5.** 방사성 탄소의 반감기는 5730년이다. 현재 원래 양의 80%가 남아있다면 얼마나 지났는가?

> **풀이**
>
> $\dfrac{dN}{dt} = kN \implies N(t) = N_0 e^{kt}$
>
> 반감기: $\dfrac{1}{2}N_0 = N_0 e^{k \cdot 5730} \implies k = \dfrac{\ln(1/2)}{5730} = -\dfrac{\ln 2}{5730}$
>
> $0.8 = e^{kt} \implies t = \dfrac{\ln 0.8}{k} = \dfrac{\ln 0.8 \cdot 5730}{-\ln 2} = \dfrac{-0.2231 \times 5730}{0.6931} \approx 1845$년
