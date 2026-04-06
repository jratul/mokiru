---
title: "미적분학"
description: "극한, 연속, 편미분, 중적분, 벡터미적분 등 대학 수준의 미적분학을 다룹니다."
date: "2026-04-06"
subject: "math"
category: "미적분학"
level: "university"
tags: ["미적분학", "편미분", "중적분", "테일러급수", "대학수학"]
---

## 수열과 급수

### 수렴 판정

**비율 판정법 (Ratio Test)**: $\displaystyle L = \lim_{n\to\infty}\left|\frac{a_{n+1}}{a_n}\right|$

- $L < 1$: 절대 수렴
- $L > 1$: 발산
- $L = 1$: 판정 불능

**테일러 급수**:

$$
f(x) = \sum_{n=0}^{\infty} \frac{f^{(n)}(a)}{n!}(x-a)^n
$$

주요 매클로린 급수:

$$
e^x = \sum_{n=0}^{\infty}\frac{x^n}{n!}, \quad \sin x = \sum_{n=0}^{\infty}\frac{(-1)^n x^{2n+1}}{(2n+1)!}, \quad \ln(1+x) = \sum_{n=1}^{\infty}\frac{(-1)^{n+1}x^n}{n}
$$

---

## 다변수 함수

### 편미분

$f(x, y)$를 $x$에 대해 편미분할 때는 $y$를 상수로 취급한다.

$$
f_x = \frac{\partial f}{\partial x}, \quad f_y = \frac{\partial f}{\partial y}
$$

**그래디언트(기울기 벡터)**:

$$
\nabla f = \left(\frac{\partial f}{\partial x}, \frac{\partial f}{\partial y}\right)
$$

### 연쇄 법칙

$z = f(x(t), y(t))$이면

$$
\frac{dz}{dt} = \frac{\partial f}{\partial x}\frac{dx}{dt} + \frac{\partial f}{\partial y}\frac{dy}{dt}
$$

### 극값

$f_x = f_y = 0$인 임계점에서 판별식 $D = f_{xx}f_{yy} - f_{xy}^2$:

- $D > 0$, $f_{xx} > 0$: 극솟값
- $D > 0$, $f_{xx} < 0$: 극댓값
- $D < 0$: 안장점

---

## 중적분

$$
\iint_R f(x,y)\,dA = \int_a^b\int_{g(x)}^{h(x)} f(x,y)\,dy\,dx
$$

**야코비안 변환** (극좌표):

$$
x = r\cos\theta,\; y = r\sin\theta \implies dA = r\,dr\,d\theta
$$

---

## 벡터미적분

### 선적분

$$
\int_C \vec{F} \cdot d\vec{r} = \int_a^b \vec{F}(\vec{r}(t)) \cdot \vec{r}'(t)\,dt
$$

### 그린 정리

$$
\oint_C P\,dx + Q\,dy = \iint_D\left(\frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y}\right)dA
$$

---

## 연습문제

**문제 1.** $f(x,y) = x^2 y + y^3$의 $f_x$, $f_y$를 구하여라.

> **풀이**
>
> $$f_x = 2xy, \quad f_y = x^2 + 3y^2$$

---

**문제 2.** $\displaystyle\iint_R x^2 y\,dA$를 구하여라. 단, $R = [0,1] \times [0,2]$.

> **풀이**
>
> $$\int_0^1 \int_0^2 x^2 y\,dy\,dx = \int_0^1 x^2 \left[\frac{y^2}{2}\right]_0^2 dx = \int_0^1 2x^2\,dx = \left[\frac{2x^3}{3}\right]_0^1 = \frac{2}{3}$$

---

**문제 3.** 급수 $\displaystyle\sum_{n=1}^{\infty} \frac{n}{2^n}$의 수렴 여부를 비율 판정법으로 확인하여라.

> **풀이**
>
> $$L = \lim_{n\to\infty}\frac{(n+1)/2^{n+1}}{n/2^n} = \lim_{n\to\infty}\frac{n+1}{2n} = \frac{1}{2} < 1$$
>
> 비율 판정법에 의해 **절대 수렴**한다.
