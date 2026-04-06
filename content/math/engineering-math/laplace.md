---
title: "라플라스 변환"
description: "라플라스 변환의 정의, 역변환, 미분방정식에 적용, 전달함수를 다룹니다."
date: "2026-04-06"
subject: "math"
category: "공학수학"
level: "university"
tags: ["라플라스변환", "전달함수", "공학수학", "ODE"]
---

## 라플라스 변환

### 정의

$$
\mathcal{L}\{f(t)\} = F(s) = \int_0^{\infty} e^{-st} f(t)\,dt
$$

### 기본 변환 표

| $f(t)$ | $F(s)$ |
|--------|--------|
| $1$ | $\dfrac{1}{s}$ |
| $t^n$ | $\dfrac{n!}{s^{n+1}}$ |
| $e^{at}$ | $\dfrac{1}{s-a}$ |
| $\sin\omega t$ | $\dfrac{\omega}{s^2+\omega^2}$ |
| $\cos\omega t$ | $\dfrac{s}{s^2+\omega^2}$ |
| $\delta(t)$ | $1$ |
| $u(t-a)$ | $\dfrac{e^{-as}}{s}$ |

### 주요 성질

$$
\mathcal{L}\{f'(t)\} = sF(s) - f(0)
$$

$$
\mathcal{L}\{f''(t)\} = s^2F(s) - sf(0) - f'(0)
$$

$$
\mathcal{L}\{e^{at}f(t)\} = F(s-a) \quad \text{(주파수 이동)}
$$

---

## 역 라플라스 변환

부분분수 분해를 이용한다.

**예제.** $F(s) = \dfrac{3s+7}{(s+1)(s+2)}$

$$
F(s) = \frac{A}{s+1} + \frac{B}{s+2}
$$

$s=-1$: $A = \dfrac{4}{1} = 4$, $s=-2$: $B = \dfrac{1}{-1} = -1$

$$
f(t) = 4e^{-t} - e^{-2t}$$

---

## ODE에 적용

**예제.** $y'' + 3y' + 2y = 0$, $y(0) = 1$, $y'(0) = 0$

라플라스 변환:

$$
(s^2 Y - s - 0) + 3(sY - 1) + 2Y = 0
$$

$$
Y(s^2 + 3s + 2) = s + 3 \implies Y = \frac{s+3}{(s+1)(s+2)} = \frac{2}{s+1} - \frac{1}{s+2}
$$

$$
y(t) = 2e^{-t} - e^{-2t}
$$

---

## 연습문제

**문제 1.** $\mathcal{L}\{t e^{2t}\}$를 구하여라.

> **풀이**
>
> $\mathcal{L}\{t\} = \dfrac{1}{s^2}$이고 주파수 이동 성질로
>
> $$\mathcal{L}\{te^{2t}\} = \frac{1}{(s-2)^2}$$

---

**문제 2.** $y' + 2y = 4$, $y(0) = 1$을 라플라스 변환으로 풀어라.

> **풀이**
>
> $(sY - 1) + 2Y = \dfrac{4}{s}$
>
> $Y(s+2) = 1 + \dfrac{4}{s} = \dfrac{s+4}{s}$
>
> $$Y = \frac{s+4}{s(s+2)} = \frac{2}{s} - \frac{1}{s+2}$$
>
> $$y(t) = 2 - e^{-2t}$$
