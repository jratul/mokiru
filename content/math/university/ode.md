---
title: "미분방정식"
description: "1계·2계 상미분방정식의 풀이, 라플라스 변환 적용, 계의 안정성을 다룹니다."
date: "2026-04-06"
subject: "math"
category: "미분방정식"
level: "university"
tags: ["미분방정식", "ODE", "변수분리", "2계선형", "대학수학"]
---

## 1계 미분방정식

### 변수분리법

$$
\frac{dy}{dx} = f(x)g(y) \implies \int \frac{dy}{g(y)} = \int f(x)\,dx
$$

**예제.** $\dfrac{dy}{dx} = xy$

$$
\int \frac{dy}{y} = \int x\,dx \implies \ln|y| = \frac{x^2}{2} + C \implies y = Ae^{x^2/2}
$$

### 1계 선형 방정식

$$
\frac{dy}{dx} + P(x)y = Q(x)
$$

적분인자 $\mu = e^{\int P(x)\,dx}$를 곱하면

$$
\frac{d}{dx}(\mu y) = \mu Q(x) \implies y = \frac{1}{\mu}\int \mu Q\,dx
$$

---

## 2계 선형 미분방정식

### 상수계수 동차방정식

$$
ay'' + by' + cy = 0
$$

특성방정식 $ar^2 + br + c = 0$의 근 $r_1, r_2$에 따라:

| 근의 유형 | 일반해 |
|----------|--------|
| 두 실근 $r_1 \ne r_2$ | $y = C_1 e^{r_1 x} + C_2 e^{r_2 x}$ |
| 중근 $r_1 = r_2 = r$ | $y = (C_1 + C_2 x)e^{rx}$ |
| 복소근 $\alpha \pm \beta i$ | $y = e^{\alpha x}(C_1\cos\beta x + C_2\sin\beta x)$ |

### 비동차 방정식

$$
ay'' + by' + cy = f(x)
$$

일반해 = 동차해 $y_h$ + 특수해 $y_p$

**미정계수법**: $f(x)$의 형태에 따라 $y_p$를 가정한다.

---

## 연립 미분방정식

$$
\frac{d\vec{x}}{dt} = A\vec{x}, \quad \vec{x}(0) = \vec{x}_0
$$

$A$의 고유값 $\lambda_i$와 고유벡터 $\vec{v}_i$로 해를 구성:

$$
\vec{x}(t) = \sum_i C_i e^{\lambda_i t} \vec{v}_i
$$

---

## 연습문제

**문제 1.** $\dfrac{dy}{dx} = \dfrac{x}{y}$, $y(0) = 2$를 풀어라.

> **풀이**
>
> $$y\,dy = x\,dx \implies \frac{y^2}{2} = \frac{x^2}{2} + C$$
>
> $y(0) = 2$: $\dfrac{4}{2} = C \implies C = 2$
>
> $$y^2 = x^2 + 4 \implies y = \sqrt{x^2 + 4}$$

---

**문제 2.** $y'' - 5y' + 6y = 0$의 일반해를 구하여라.

> **풀이**
>
> 특성방정식: $r^2 - 5r + 6 = (r-2)(r-3) = 0 \implies r = 2, 3$
>
> $$y = C_1 e^{2x} + C_2 e^{3x}$$

---

**문제 3.** $y'' + 4y = 0$, $y(0)=1$, $y'(0)=0$을 풀어라.

> **풀이**
>
> 특성방정식: $r^2 + 4 = 0 \implies r = \pm 2i$
>
> 일반해: $y = C_1\cos 2x + C_2\sin 2x$
>
> $y(0)=1$: $C_1 = 1$
>
> $y'(0)=0$: $-2C_1\sin 0 + 2C_2\cos 0 = 2C_2 = 0 \implies C_2 = 0$
>
> $$y = \cos 2x$$
