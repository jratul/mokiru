---
title: "수학Ⅰ"
description: "지수·로그, 삼각함수, 수열을 다룹니다."
date: "2026-04-06"
subject: "math"
category: "고등수학"
level: "high"
tags: ["지수", "로그", "삼각함수", "수열", "고등수학"]
---

## 지수와 로그

### 거듭제곱과 거듭제곱근

$n$이 자연수일 때 $a$의 $n$제곱근은 $x^n = a$를 만족하는 $x$이다.

$$
\sqrt[n]{a} = a^{1/n}
$$

지수법칙:

$$
a^m \cdot a^n = a^{m+n}, \quad (a^m)^n = a^{mn}, \quad (ab)^n = a^n b^n
$$

$$
\frac{a^m}{a^n} = a^{m-n}, \quad a^0 = 1, \quad a^{-n} = \frac{1}{a^n}
$$

### 로그

$a > 0$, $a \ne 1$, $N > 0$일 때

$$
\log_a N = b \iff a^b = N
$$

**로그의 성질**

$$
\log_a MN = \log_a M + \log_a N
$$

$$
\log_a \frac{M}{N} = \log_a M - \log_a N
$$

$$
\log_a M^k = k\log_a M
$$

**밑 변환 공식**

$$
\log_a b = \frac{\log_c b}{\log_c a}
$$

상용로그($\log_{10}$)는 $\log$로 줄여 쓴다.

---

## 삼각함수

### 호도법

반지름 $r$인 원에서 호의 길이가 $r$인 부채꼴의 중심각을 **1 라디안(rad)**이라 한다.

$$
180° = \pi\,\text{rad}, \quad 1° = \frac{\pi}{180}\,\text{rad}
$$

### 삼각함수의 정의

단위원 위의 점 $P(\cos\theta, \sin\theta)$에서

$$
\sin\theta = y, \quad \cos\theta = x, \quad \tan\theta = \frac{y}{x}
$$

**피타고라스 항등식**

$$
\sin^2\theta + \cos^2\theta = 1
$$

$$
1 + \tan^2\theta = \sec^2\theta, \quad 1 + \cot^2\theta = \csc^2\theta
$$

**사인 법칙**

$$
\frac{a}{\sin A} = \frac{b}{\sin B} = \frac{c}{\sin C} = 2R
$$

**코사인 법칙**

$$
a^2 = b^2 + c^2 - 2bc\cos A
$$

### 삼각함수의 그래프

| 함수 | 주기 | 치역 |
|------|------|------|
| $y = \sin x$ | $2\pi$ | $[-1, 1]$ |
| $y = \cos x$ | $2\pi$ | $[-1, 1]$ |
| $y = \tan x$ | $\pi$ | $\mathbb{R}$ |

---

## 수열

### 등차수열

공차 $d$인 등차수열의 일반항:

$$
a_n = a_1 + (n-1)d
$$

합:

$$
S_n = \frac{n(a_1 + a_n)}{2} = \frac{n\{2a_1 + (n-1)d\}}{2}
$$

### 등비수열

공비 $r$인 등비수열의 일반항:

$$
a_n = a_1 \cdot r^{n-1}
$$

합 ($r \ne 1$):

$$
S_n = \frac{a_1(r^n - 1)}{r - 1}
$$

### 수열의 합과 일반항

$$
a_n = S_n - S_{n-1} \quad (n \geq 2)
$$

### 시그마 기호

$$
\sum_{k=1}^{n} k = \frac{n(n+1)}{2}, \quad \sum_{k=1}^{n} k^2 = \frac{n(n+1)(2n+1)}{6}, \quad \sum_{k=1}^{n} k^3 = \left(\frac{n(n+1)}{2}\right)^2
$$

---

## 연습문제

**문제 1.** $\log_2 3 = a$로 놓을 때, $\log_4 12$를 $a$로 나타내어라.

> **풀이**
>
> 밑 변환 공식을 사용한다.
>
> $$\log_4 12 = \frac{\log_2 12}{\log_2 4} = \frac{\log_2 (4 \times 3)}{2} = \frac{\log_2 4 + \log_2 3}{2} = \frac{2 + a}{2}$$

---

**문제 2.** $0 \leq \theta < 2\pi$에서 $2\sin^2\theta - \cos\theta - 1 = 0$을 풀어라.

> **풀이**
>
> $\sin^2\theta = 1 - \cos^2\theta$를 대입한다.
>
> $$2(1 - \cos^2\theta) - \cos\theta - 1 = 0$$
> $$2\cos^2\theta + \cos\theta - 1 = 0$$
> $$(2\cos\theta - 1)(\cos\theta + 1) = 0$$
>
> $\cos\theta = \dfrac{1}{2}$ 또는 $\cos\theta = -1$
>
> $$\theta = \frac{\pi}{3},\; \frac{5\pi}{3},\; \pi$$

---

**문제 3.** 첫째항이 $2$, 공비가 $3$인 등비수열의 첫째항부터 제$n$항까지의 합이 $242$일 때, $n$을 구하여라.

> **풀이**
>
> $$S_n = \frac{2(3^n - 1)}{3 - 1} = 3^n - 1 = 242$$
>
> $$3^n = 243 = 3^5 \implies n = 5$$
