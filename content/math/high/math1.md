---
title: "수학Ⅰ"
description: "지수·로그, 삼각함수, 수열을 다룹니다."
date: "2026-04-06"
subject: "math"
category: "고등수학"
level: "high"
tags: ["지수", "로그", "삼각함수", "수열", "고등수학"]
---

수학Ⅰ의 지수·로그는 [대학 미적분학](/math/university/calculus)의 지수함수·로그함수 미분, 삼각함수는 [공학수학 푸리에 해석](/math/engineering-math/fourier)·[물리학](/science/physics/high)의 파동, 수열은 [이산수학 조합론](/math/discrete/combinatorics)·[확률과 통계](/math/high/probability-stats)와 긴밀하게 연결된다.

---

## 지수와 로그

### 거듭제곱과 거듭제곱근

$a > 0$이고 $n$이 자연수일 때, **$n$제곱근** $\sqrt[n]{a}$는 $x^n = a$를 만족하는 양의 실수다.

$$
\sqrt[n]{a} = a^{1/n}, \qquad \sqrt[n]{a^m} = a^{m/n}
$$

**지수법칙** ($a > 0$, $b > 0$, $m, n$은 실수):

$$
a^m \cdot a^n = a^{m+n}
$$

$$
(a^m)^n = a^{mn}
$$

$$
(ab)^n = a^n b^n
$$

$$
\frac{a^m}{a^n} = a^{m-n}, \qquad a^0 = 1, \qquad a^{-n} = \frac{1}{a^n}
$$

**유리지수·실수지수**: 지수를 유리수 $\dfrac{m}{n}$으로 확장하면 $a^{m/n} = \left(\sqrt[n]{a}\right)^m$. 더 나아가 $a^\pi$, $a^\sqrt{2}$ 같은 실수지수도 정의된다.

**예제.** $8^{2/3} = \left(\sqrt[3]{8}\right)^2 = 2^2 = 4$

$$
27^{-1/3} = \frac{1}{\sqrt[3]{27}} = \frac{1}{3}
$$

### 지수함수의 성질

$y = a^x$ ($a > 0$, $a \ne 1$):

| 조건 | 증감 | 지나는 점 | 점근선 |
|------|------|---------|-------|
| $a > 1$ | 증가함수 | $(0, 1)$, $(1, a)$ | $x$축 ($y = 0$) |
| $0 < a < 1$ | 감소함수 | $(0, 1)$, $(1, a)$ | $x$축 ($y = 0$) |

### 로그의 정의

$a > 0$, $a \ne 1$, $N > 0$일 때:

$$
\log_a N = b \iff a^b = N
$$

로그는 지수의 역연산이다. "$a$를 밑으로 하는 $N$의 로그"라고 읽는다.

**기본값**:
- $\log_a 1 = 0$ ($a^0 = 1$이므로)
- $\log_a a = 1$ ($a^1 = a$이므로)
- $\log_a a^k = k$

### 로그의 성질

$\log_a M$, $\log_a N$이 정의될 때:

$$
\log_a MN = \log_a M + \log_a N \quad \text{(곱의 로그 = 로그의 합)}
$$

$$
\log_a \frac{M}{N} = \log_a M - \log_a N \quad \text{(몫의 로그 = 로그의 차)}
$$

$$
\log_a M^k = k \log_a M \quad \text{(멱의 로그 = 로그에 지수 곱)}
$$

**밑 변환 공식** ($c > 0$, $c \ne 1$):

$$
\log_a b = \frac{\log_c b}{\log_c a}
$$

특히 $\log_a b = \dfrac{\ln b}{\ln a} = \dfrac{\log b}{\log a}$ (자연로그나 상용로그로 변환 가능)

**상용로그**: $\log_{10} N = \log N$. 실생활(지진 리히터 규모, 소음 데시벨, pH)에서 많이 쓰인다.

### 로그함수의 성질

$y = \log_a x$ ($a > 0$, $a \ne 1$):

| 조건 | 증감 | 지나는 점 | 점근선 |
|------|------|---------|-------|
| $a > 1$ | 증가함수 | $(1, 0)$, $(a, 1)$ | $y$축 ($x = 0$) |
| $0 < a < 1$ | 감소함수 | $(1, 0)$, $(a, 1)$ | $y$축 ($x = 0$) |

$y = a^x$와 $y = \log_a x$는 $y = x$에 대해 대칭이다 (역함수 관계).

---

## 삼각함수

### 각도의 두 가지 표현

**육십분법**: 1회전 = 360°, 직각 = 90°  
**호도법(라디안)**: 반지름 $r$인 원에서 호의 길이가 $r$인 부채꼴의 중심각 = 1 rad

$$
180° = \pi\,\text{rad} \quad \implies \quad 1° = \frac{\pi}{180}\,\text{rad}, \quad 1\,\text{rad} = \frac{180°}{\pi} \approx 57.3°
$$

| 도 | 0° | 30° | 45° | 60° | 90° | 180° | 270° | 360° |
|----|----|----|----|----|-----|-----|------|------|
| rad | 0 | $\dfrac{\pi}{6}$ | $\dfrac{\pi}{4}$ | $\dfrac{\pi}{3}$ | $\dfrac{\pi}{2}$ | $\pi$ | $\dfrac{3\pi}{2}$ | $2\pi$ |

호도법을 사용하는 이유: [수학Ⅱ](/math/high/math2)에서 $(\sin x)' = \cos x$가 성립하려면 $x$를 라디안으로 측정해야 한다.

### 삼각함수의 정의

단위원(반지름 1인 원) 위의 점 $P(\cos\theta, \sin\theta)$에서:

$$
\sin\theta = y, \qquad \cos\theta = x, \qquad \tan\theta = \frac{y}{x} \quad (x \ne 0)
$$

**부호 (사분면)**:

| 사분면 | $\sin$ | $\cos$ | $\tan$ |
|--------|--------|--------|--------|
| 1사분면 | $+$ | $+$ | $+$ |
| 2사분면 | $+$ | $-$ | $-$ |
| 3사분면 | $-$ | $-$ | $+$ |
| 4사분면 | $-$ | $+$ | $-$ |

암기법: "All Students Take Calculus" (1→2→3→4 순서로 양수인 것)

**특수각의 삼각비**:

| $\theta$ | $\sin\theta$ | $\cos\theta$ | $\tan\theta$ |
|----------|-------------|-------------|-------------|
| $0$ | $0$ | $1$ | $0$ |
| $\dfrac{\pi}{6}$ | $\dfrac{1}{2}$ | $\dfrac{\sqrt{3}}{2}$ | $\dfrac{1}{\sqrt{3}}$ |
| $\dfrac{\pi}{4}$ | $\dfrac{\sqrt{2}}{2}$ | $\dfrac{\sqrt{2}}{2}$ | $1$ |
| $\dfrac{\pi}{3}$ | $\dfrac{\sqrt{3}}{2}$ | $\dfrac{1}{2}$ | $\sqrt{3}$ |
| $\dfrac{\pi}{2}$ | $1$ | $0$ | 정의 안 됨 |

### 삼각함수 사이의 관계

**피타고라스 항등식**:

$$
\sin^2\theta + \cos^2\theta = 1
$$

이를 $\cos^2\theta$으로 나누면: $\tan^2\theta + 1 = \sec^2\theta$  
이를 $\sin^2\theta$으로 나누면: $1 + \cot^2\theta = \csc^2\theta$

$$
\tan\theta = \frac{\sin\theta}{\cos\theta}, \qquad \sec\theta = \frac{1}{\cos\theta}, \qquad \csc\theta = \frac{1}{\sin\theta}, \qquad \cot\theta = \frac{1}{\tan\theta}
$$

### 삼각함수의 그래프

| 함수 | 주기 | 치역 | 특징 |
|------|------|------|------|
| $y = \sin x$ | $2\pi$ | $[-1, 1]$ | 원점 대칭 (기함수) |
| $y = \cos x$ | $2\pi$ | $[-1, 1]$ | $y$축 대칭 (우함수) |
| $y = \tan x$ | $\pi$ | $(-\infty, \infty)$ | $x = \dfrac{\pi}{2} + n\pi$에서 불연속 |

**변형**: $y = A\sin(Bx + C) + D$에서
- $|A|$: 진폭 (최댓값 − 최솟값의 반)
- 주기 $= \dfrac{2\pi}{|B|}$
- $C$: 위상(수평 이동)
- $D$: 수직 이동

### 사인 법칙과 코사인 법칙

삼각형 $ABC$에서 $a, b, c$가 각각 $A, B, C$의 대변이고, 외접원 반지름이 $R$일 때:

**사인 법칙**:

$$
\frac{a}{\sin A} = \frac{b}{\sin B} = \frac{c}{\sin C} = 2R
$$

**코사인 법칙**:

$$
a^2 = b^2 + c^2 - 2bc\cos A
$$

$$
\cos A = \frac{b^2 + c^2 - a^2}{2bc}
$$

**삼각형의 넓이**:

$$
S = \frac{1}{2}ab\sin C = \frac{1}{2}bc\sin A = \frac{1}{2}ca\sin B
$$

---

## 수열

### 등차수열 (Arithmetic Sequence)

인접한 두 항의 차(**공차** $d$)가 일정한 수열.

$$
a_n = a_1 + (n-1)d
$$

**합** (항이 $n$개):

$$
S_n = \frac{n(a_1 + a_n)}{2} = \frac{n\{2a_1 + (n-1)d\}}{2}
$$

**예제.** 첫째항 3, 공차 4인 등차수열의 10번째 항과 첫 10항의 합:
- $a_{10} = 3 + 9 \times 4 = 39$
- $S_{10} = \dfrac{10(3 + 39)}{2} = \dfrac{10 \times 42}{2} = 210$

**등차중항**: $a$, $b$, $c$가 등차수열 $\iff$ $b = \dfrac{a+c}{2}$ ($b$를 $a$, $c$의 등차중항이라 함)

### 등비수열 (Geometric Sequence)

인접한 두 항의 비(**공비** $r$)가 일정한 수열 ($r \ne 0$).

$$
a_n = a_1 \cdot r^{n-1}
$$

**합**:

$$
S_n = \begin{cases} \dfrac{a_1(r^n - 1)}{r - 1} & (r \ne 1) \\[6pt] na_1 & (r = 1) \end{cases}
$$

**예제.** 첫째항 2, 공비 3인 등비수열의 5번째 항과 첫 5항의 합:
- $a_5 = 2 \cdot 3^4 = 2 \times 81 = 162$
- $S_5 = \dfrac{2(3^5 - 1)}{3-1} = \dfrac{2 \times 242}{2} = 242$

**등비중항**: $a$, $b$, $c$가 등비수열 $\iff$ $b^2 = ac$ ($b$를 $a$, $c$의 등비중항이라 함)

### 수열의 합과 일반항 관계

$$
a_n = \begin{cases} S_1 & (n = 1) \\ S_n - S_{n-1} & (n \geq 2) \end{cases}
$$

$n \geq 2$일 때 성립하는 공식이므로, $n = 1$에서 따로 확인해야 한다.

### 시그마 기호

$$
\sum_{k=1}^{n} f(k) = f(1) + f(2) + \cdots + f(n)
$$

**기본 공식**:

$$
\sum_{k=1}^{n} 1 = n
$$

$$
\sum_{k=1}^{n} k = \frac{n(n+1)}{2}
$$

$$
\sum_{k=1}^{n} k^2 = \frac{n(n+1)(2n+1)}{6}
$$

$$
\sum_{k=1}^{n} k^3 = \left[\frac{n(n+1)}{2}\right]^2
$$

**성질**:

$$
\sum_{k=1}^{n} (af(k) + bg(k)) = a\sum f(k) + b\sum g(k)
$$

### 점화식

수열의 인접항 사이의 관계식. $a_n$과 $a_{n+1}$ (또는 $a_{n-1}$) 사이의 관계로 수열을 정의한다.

**예**: 피보나치 수열 $a_{n+2} = a_{n+1} + a_n$, $a_1 = a_2 = 1$

점화식의 풀이는 [이산수학 조합론](/math/discrete/combinatorics)에서 더 깊이 다룬다.

### 수학적 귀납법

자연수에 관한 명제 $P(n)$이 모든 자연수에 대해 성립함을 증명하는 방법:

1. $P(1)$이 참임을 확인
2. $P(k)$가 참이라 가정 → $P(k+1)$이 참임을 증명

이는 [이산수학 논리와 증명](/math/discrete/logic)에서 공리론적으로 정당화된다.

---

## 연습문제

**문제 1.** $\log_2 3 = a$, $\log_2 5 = b$로 놓을 때, $\log_4 60$을 $a$, $b$로 나타내어라.

> **풀이**
>
> $\log_4 60 = \dfrac{\log_2 60}{\log_2 4} = \dfrac{\log_2 (4 \times 3 \times 5)}{2} = \dfrac{\log_2 4 + \log_2 3 + \log_2 5}{2} = \dfrac{2 + a + b}{2}$

---

**문제 2.** $0 \leq \theta < 2\pi$에서 $2\sin^2\theta - \cos\theta - 1 = 0$을 풀어라.

> **풀이**
>
> $\sin^2\theta = 1 - \cos^2\theta$ 대입:
>
> $2(1 - \cos^2\theta) - \cos\theta - 1 = 0 \implies 2\cos^2\theta + \cos\theta - 1 = 0$
>
> $(2\cos\theta - 1)(\cos\theta + 1) = 0$
>
> $\cos\theta = \dfrac{1}{2}$ → $\theta = \dfrac{\pi}{3},\; \dfrac{5\pi}{3}$
>
> $\cos\theta = -1$ → $\theta = \pi$

---

**문제 3.** 첫째항 2, 공비 3인 등비수열의 합이 242일 때, $n$을 구하여라.

> **풀이**
>
> $S_n = \dfrac{2(3^n - 1)}{3 - 1} = 3^n - 1 = 242 \implies 3^n = 243 = 3^5 \implies n = 5$

---

**문제 4.** $\displaystyle\sum_{k=1}^{n} (2k-1) = n^2$임을 수학적 귀납법으로 증명하여라.

> **풀이**
>
> **1단계** ($n = 1$): 좌변 $= 2(1) - 1 = 1$, 우변 $= 1^2 = 1$ ✓
>
> **2단계**: $\sum_{k=1}^{m} (2k-1) = m^2$이라 가정하면
>
> $\sum_{k=1}^{m+1} (2k-1) = m^2 + (2(m+1) - 1) = m^2 + 2m + 1 = (m+1)^2$ ✓
>
> 따라서 모든 자연수 $n$에 대해 성립한다.

---

**문제 5.** 삼각형 $ABC$에서 $a = 7$, $b = 5$, $C = 60°$일 때, $c$의 값을 구하여라.

> **풀이**
>
> 코사인 법칙: $c^2 = a^2 + b^2 - 2ab\cos C = 49 + 25 - 2 \times 7 \times 5 \times \dfrac{1}{2} = 74 - 35 = 39$
>
> $c = \sqrt{39}$
