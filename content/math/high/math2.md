---
title: "수학Ⅱ"
description: "함수의 극한, 연속, 미분, 적분을 다룹니다."
date: "2026-04-06"
subject: "math"
category: "고등수학"
level: "high"
tags: ["극한", "연속", "미분", "적분", "고등수학"]
---

## 함수의 극한

### 극한의 정의

$x \to a$일 때 $f(x) \to L$이면

$$
\lim_{x \to a} f(x) = L
$$

**극한의 기본 정리** ($\lim_{x\to a} f(x) = L$, $\lim_{x\to a} g(x) = M$)

$$
\lim_{x \to a}[f(x) \pm g(x)] = L \pm M
$$

$$
\lim_{x \to a} f(x)g(x) = LM
$$

$$
\lim_{x \to a} \frac{f(x)}{g(x)} = \frac{L}{M} \quad (M \ne 0)
$$

**중요 극한**

$$
\lim_{x \to 0} \frac{\sin x}{x} = 1, \quad \lim_{x \to \infty}\left(1 + \frac{1}{x}\right)^x = e
$$

### 함수의 연속

$f$가 $x = a$에서 연속 $\iff$ $\lim_{x \to a} f(x) = f(a)$ (극한값 존재 + 일치)

---

## 미분

### 미분계수와 도함수

$$
f'(a) = \lim_{h \to 0} \frac{f(a+h) - f(a)}{h}
$$

**미분 공식**

$$
(x^n)' = nx^{n-1}, \quad (e^x)' = e^x, \quad (\ln x)' = \frac{1}{x}
$$

$$
(\sin x)' = \cos x, \quad (\cos x)' = -\sin x
$$

**곱의 미분**

$$
(fg)' = f'g + fg'
$$

**연쇄 법칙 (합성함수)**

$$
\{f(g(x))\}' = f'(g(x)) \cdot g'(x)
$$

### 접선의 방정식

$y = f(x)$ 위의 점 $(a, f(a))$에서의 접선:

$$
y - f(a) = f'(a)(x - a)
$$

### 함수의 증감과 극값

- $f'(a) > 0$: $x = a$ 근방에서 증가
- $f'(a) < 0$: $x = a$ 근방에서 감소
- $f'(a) = 0$ 이고 부호 변화 → **극값**

---

## 적분

### 부정적분

$$
\int x^n\,dx = \frac{x^{n+1}}{n+1} + C \quad (n \ne -1)
$$

$$
\int e^x\,dx = e^x + C, \quad \int \frac{1}{x}\,dx = \ln|x| + C
$$

$$
\int \sin x\,dx = -\cos x + C, \quad \int \cos x\,dx = \sin x + C
$$

### 정적분

$$
\int_a^b f(x)\,dx = F(b) - F(a)
$$

단, $F'(x) = f(x)$. 이를 **미적분학의 기본 정리**라 한다.

**넓이 계산**

$$
S = \int_a^b |f(x) - g(x)|\,dx
$$

---

## 연습문제

**문제 1.** $f(x) = x^3 - 3x$의 극값을 구하여라.

> **풀이**
>
> $$f'(x) = 3x^2 - 3 = 3(x-1)(x+1)$$
>
> $f'(x) = 0 \implies x = \pm 1$
>
> | $x$ | $\cdots$ | $-1$ | $\cdots$ | $1$ | $\cdots$ |
> |---|---|---|---|---|---|
> | $f'$ | $+$ | $0$ | $-$ | $0$ | $+$ |
> | $f$ | ↗ | 극대 | ↘ | 극소 | ↗ |
>
> - 극댓값: $f(-1) = -1 + 3 = 2$
> - 극솟값: $f(1) = 1 - 3 = -2$

---

**문제 2.** $\displaystyle\int_0^2 (3x^2 - 2x + 1)\,dx$를 계산하여라.

> **풀이**
>
> $$\int_0^2 (3x^2 - 2x + 1)\,dx = \Big[x^3 - x^2 + x\Big]_0^2$$
>
> $$= (8 - 4 + 2) - 0 = 6$$

---

**문제 3.** $y = x^2$과 $y = x + 2$로 둘러싸인 넓이를 구하여라.

> **풀이**
>
> 교점: $x^2 = x + 2 \implies x^2 - x - 2 = 0 \implies (x-2)(x+1) = 0 \implies x = -1, 2$
>
> $-1 \leq x \leq 2$에서 $x + 2 \geq x^2$이므로
>
> $$S = \int_{-1}^{2} (x + 2 - x^2)\,dx = \left[\frac{x^2}{2} + 2x - \frac{x^3}{3}\right]_{-1}^{2}$$
>
> $$= \left(2 + 4 - \frac{8}{3}\right) - \left(\frac{1}{2} - 2 + \frac{1}{3}\right) = \frac{9}{2}$$
