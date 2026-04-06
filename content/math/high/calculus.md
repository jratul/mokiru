---
title: "미적분"
description: "수열의 극한, 급수, 미분법(지수·로그·삼각), 적분법(치환·부분)을 다룹니다."
date: "2026-04-06"
subject: "math"
category: "고등수학"
level: "high"
tags: ["미적분", "급수", "치환적분", "부분적분", "고등수학"]
---

## 수열의 극한

### 수렴과 발산

수열 $\{a_n\}$이 $n \to \infty$일 때 일정한 값 $L$에 가까워지면 **수렴**이라 하고

$$
\lim_{n \to \infty} a_n = L
$$

수렴하지 않으면 **발산**이라 한다.

**등비수열 $r^n$의 수렴·발산**

| $r$ 범위 | 수렴/발산 |
|---------|---------|
| $|r| < 1$ | $0$으로 수렴 |
| $r = 1$ | $1$로 수렴 |
| $r > 1$ 또는 $r \leq -1$ | 발산 |

### 급수

$$
\sum_{n=1}^{\infty} a_n = \lim_{n \to \infty} S_n
$$

**등비급수** ($|r| < 1$):

$$
\sum_{n=1}^{\infty} ar^{n-1} = \frac{a}{1-r}
$$

---

## 미분법

### 지수함수·로그함수의 미분

$$
(e^x)' = e^x, \quad (a^x)' = a^x \ln a
$$

$$
(\ln x)' = \frac{1}{x}, \quad (\log_a x)' = \frac{1}{x \ln a}
$$

### 삼각함수의 미분

$$
(\sin x)' = \cos x, \quad (\cos x)' = -\sin x, \quad (\tan x)' = \sec^2 x
$$

### 역함수의 미분

$$
\{f^{-1}(x)\}' = \frac{1}{f'(f^{-1}(x))}
$$

$$
(\arcsin x)' = \frac{1}{\sqrt{1-x^2}}, \quad (\arctan x)' = \frac{1}{1+x^2}
$$

---

## 적분법

### 치환적분

$x = g(t)$로 치환하면

$$
\int f(x)\,dx = \int f(g(t))\,g'(t)\,dt
$$

**예제.** $\displaystyle\int 2x\,e^{x^2}\,dx$

$u = x^2$으로 놓으면 $du = 2x\,dx$

$$
\int e^u\,du = e^u + C = e^{x^2} + C
$$

### 부분적분

$$
\int u\,v'\,dx = uv - \int u'\,v\,dx
$$

**LIATE 우선순위**: 로그 > 역삼각 > 대수(다항) > 삼각 > 지수

**예제.** $\displaystyle\int x e^x\,dx$

$u = x$, $v' = e^x$로 놓으면

$$
= xe^x - \int e^x\,dx = xe^x - e^x + C = (x-1)e^x + C
$$

---

## 연습문제

**문제 1.** $\displaystyle\sum_{n=1}^{\infty} \frac{3}{2^n}$을 구하여라.

> **풀이**
>
> 첫째항 $a = \dfrac{3}{2}$, 공비 $r = \dfrac{1}{2}$인 등비급수
>
> $$S = \frac{3/2}{1 - 1/2} = \frac{3/2}{1/2} = 3$$

---

**문제 2.** $\displaystyle\int \frac{\ln x}{x}\,dx$를 구하여라.

> **풀이**
>
> $u = \ln x$로 놓으면 $du = \dfrac{1}{x}\,dx$
>
> $$\int u\,du = \frac{u^2}{2} + C = \frac{(\ln x)^2}{2} + C$$

---

**문제 3.** $\displaystyle\int_0^{\pi} x\sin x\,dx$를 구하여라.

> **풀이**
>
> 부분적분: $u = x$, $v' = \sin x$이므로 $u' = 1$, $v = -\cos x$
>
> $$\int_0^{\pi} x\sin x\,dx = \Big[-x\cos x\Big]_0^{\pi} + \int_0^{\pi} \cos x\,dx$$
>
> $$= (-\pi\cos\pi + 0) + \Big[\sin x\Big]_0^{\pi} = \pi + 0 = \pi$$
