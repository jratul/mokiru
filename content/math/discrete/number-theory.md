---
title: "정수론"
description: "나눗셈 알고리즘, 최대공약수, 소수 이론, 합동식, 페르마·오일러 정리, RSA를 다룹니다."
date: "2026-04-06"
subject: "math"
category: "이산수학"
level: "university"
tags: ["정수론", "소수", "합동식", "페르마소정리", "RSA", "이산수학"]
---

정수론은 정수의 성질을 탐구하는 수학 분야다. [중학 수와 연산](/math/middle/number-algebra)에서 배운 소수·약수 개념을 공리적으로 확장한다. 현대 암호학(RSA, 타원곡선 암호)은 정수론의 직접적인 응용이고, 알고리즘 분석에서도 합동산술이 핵심적으로 쓰인다.

---

## 나눗셈과 정제성

### 나눗셈 알고리즘

임의의 정수 $a$와 양의 정수 $b$에 대해 유일한 정수 $q$(몫)와 $r$(나머지)가 존재하여:

$$
a = bq + r, \quad 0 \leq r < b
$$

$b \mid a$ ($b$가 $a$를 나눈다): $r = 0$인 경우.

**성질**:
- $a \mid b$이고 $b \mid c$이면 $a \mid c$ (추이성)
- $a \mid b$이고 $a \mid c$이면 $a \mid (bx + cy)$ (선형 결합)

### 최대공약수 (GCD)

$\gcd(a, b)$: $a$와 $b$의 공약수 중 가장 큰 것.

**유클리드 호제법**:

$$
\gcd(a, b) = \gcd(b, a \bmod b), \quad \gcd(a, 0) = a
$$

**예제.** $\gcd(252, 105)$:

$252 = 2 \times 105 + 42$

$105 = 2 \times 42 + 21$

$42 = 2 \times 21 + 0$

$\gcd(252, 105) = 21$

**시간 복잡도**: $O(\log \min(a,b))$ — 매우 효율적.

**베주 항등식(Bézout's Identity)**: $\gcd(a,b) = d$이면 정수 $x, y$가 존재하여 $ax + by = d$.

확장 유클리드 알고리즘으로 $x$, $y$를 계산한다. 이는 모듈러 역원을 구할 때 사용된다.

**서로소(coprime)**: $\gcd(a, b) = 1$이면 $a$와 $b$는 서로소.

### 최소공배수 (LCM)

$$
\text{lcm}(a, b) = \frac{|ab|}{\gcd(a, b)}
$$

---

## 소수

### 정의와 기본 성질

**소수(prime)**: $p > 1$이고, $1$과 $p$만을 약수로 가지는 자연수.

**합성수(composite)**: $1$과 자신 이외의 약수를 가지는 자연수.

**소수의 무한성** (유클리드 증명):

소수가 유한하다면 $\{p_1, p_2, \ldots, p_k\}$라 하자. $N = p_1 p_2 \cdots p_k + 1$은 어떤 $p_i$로도 나누어지지 않는다. 따라서 $N$의 소인수는 목록 밖의 소수 → 모순. ∎

### 산술의 기본 정리 (유일 인수분해)

1보다 큰 모든 자연수는 소수의 곱으로 **유일하게** 표현된다:

$$
n = p_1^{a_1} p_2^{a_2} \cdots p_k^{a_k}
$$

이 정리가 $\mathbb{Z}$를 **유일 인수분해 정역(UFD)**으로 만드는 핵심이다.

**약수의 개수**: $n = p_1^{a_1} \cdots p_k^{a_k}$이면 약수의 수 $= (a_1+1)(a_2+1)\cdots(a_k+1)$

**소수 판별**: $n$이 소수인지 확인하려면 $\sqrt{n}$ 이하의 소수로만 나눠보면 충분하다.

**소수 체(에라토스테네스의 체)**: 1부터 $n$까지의 소수를 $O(n \log \log n)$에 구하는 알고리즘.

**소수 정리**: $\pi(x)$ = $x$ 이하의 소수 개수. $\pi(x) \sim \dfrac{x}{\ln x}$ ($x \to \infty$).

---

## 합동식 (Modular Arithmetic)

### 정의와 성질

$$
a \equiv b \pmod{m} \iff m \mid (a - b)
$$

**동치 관계**: 반사·대칭·추이 성질 성립 → $\mathbb{Z}_m = \{0, 1, \ldots, m-1\}$ (잉여류)

**사칙연산 보존**:

$$
a \equiv b, c \equiv d \pmod{m} \implies a+c \equiv b+d, \quad ac \equiv bd \pmod{m}
$$

$$
a^k \equiv b^k \pmod{m} \quad (a \equiv b \pmod{m}인 경우)
$$

**나누기 주의**: $ac \equiv bc \pmod{m}$이어도 $a \equiv b \pmod{m}$은 $\gcd(c, m) = 1$일 때만 성립.

### 모듈러 역원

$\gcd(a, m) = 1$이면 $ax \equiv 1 \pmod{m}$의 해 $x = a^{-1} \pmod{m}$이 존재.

계산: 확장 유클리드 알고리즘으로 $ax + my = 1$의 $x$를 구하면 $x \equiv a^{-1} \pmod{m}$.

### 중국인의 나머지 정리 (CRT)

$m_1, m_2, \ldots, m_k$가 쌍으로 서로소일 때:

$$
\begin{cases} x \equiv a_1 \pmod{m_1} \\ x \equiv a_2 \pmod{m_2} \\ \vdots \\ x \equiv a_k \pmod{m_k} \end{cases}
$$

의 해는 $\pmod{m_1 m_2 \cdots m_k}$에서 유일하게 존재한다.

---

## 페르마·오일러 정리

### 페르마 소정리

$p$가 소수이고 $\gcd(a, p) = 1$이면:

$$
a^{p-1} \equiv 1 \pmod{p}
$$

더 일반적으로: $a^p \equiv a \pmod{p}$ (모든 정수 $a$에 대해)

**응용**: 거듭제곱의 모듈러 계산을 빠르게 할 수 있다.

### 오일러 피 함수

$\phi(n)$: 1 이상 $n$ 이하에서 $n$과 서로소인 수의 개수.

$$
\phi(1) = 1, \quad \phi(p) = p-1, \quad \phi(p^k) = p^{k-1}(p-1)
$$

**곱셈성**: $\gcd(m,n) = 1$이면 $\phi(mn) = \phi(m)\phi(n)$

$$
\phi(n) = n \prod_{p \mid n}\left(1 - \frac{1}{p}\right)
$$

예: $\phi(12) = \phi(4)\phi(3) = 2 \times 2 = 4$ (서로소인 수: 1, 5, 7, 11)

### 오일러 정리

$\gcd(a, n) = 1$이면:

$$
a^{\phi(n)} \equiv 1 \pmod{n}
$$

페르마 소정리는 $n=p$인 특수 경우: $\phi(p) = p-1$.

---

## RSA 암호

정수론의 현대적 응용. 소인수분해의 어려움에 기반.

### 키 생성

1. 큰 소수 $p$, $q$ 선택. $n = pq$, $\phi(n) = (p-1)(q-1)$
2. $\gcd(e, \phi(n)) = 1$인 $e$ 선택 (공개키)
3. $ed \equiv 1 \pmod{\phi(n)}$인 $d$ 계산 (비밀키, 확장 유클리드 사용)

### 암호화·복호화

$$
\text{암호화}: C \equiv M^e \pmod{n}
$$

$$
\text{복호화}: M \equiv C^d \pmod{n}
$$

**정확성**: $C^d = M^{ed} = M^{1 + k\phi(n)} = M \cdot (M^{\phi(n)})^k \equiv M \cdot 1^k = M \pmod{n}$ (오일러 정리 적용)

---

## 연습문제

**문제 1.** 유클리드 호제법으로 $\gcd(252, 105)$를 구하여라.

> **풀이**
>
> $\gcd(252, 105) = \gcd(105, 42) = \gcd(42, 21) = \gcd(21, 0) = 21$

---

**문제 2.** 페르마 소정리로 $3^{100} \pmod{7}$을 구하여라.

> **풀이**
>
> $3^6 \equiv 1 \pmod{7}$, $100 = 6 \times 16 + 4$
>
> $3^{100} = (3^6)^{16} \cdot 3^4 \equiv 1 \cdot 81 \equiv 81 \pmod{7}$
>
> $81 = 11 \times 7 + 4 \implies 3^{100} \equiv 4 \pmod{7}$

---

**문제 3.** $\phi(360)$을 구하여라.

> **풀이**
>
> $360 = 2^3 \times 3^2 \times 5$
>
> $\phi(360) = \phi(2^3)\phi(3^2)\phi(5) = 4 \times 6 \times 4 = 96$

---

**문제 4.** 연립합동식 $x \equiv 2 \pmod{3}$, $x \equiv 3 \pmod{5}$를 풀어라.

> **풀이**
>
> $x = 3k + 2$로 놓으면 $3k + 2 \equiv 3 \pmod{5} \implies 3k \equiv 1 \pmod{5}$
>
> $3^{-1} \equiv 2 \pmod{5}$ ($3 \times 2 = 6 \equiv 1$)이므로 $k \equiv 2 \pmod{5}$, $k = 5m + 2$
>
> $x = 3(5m+2) + 2 = 15m + 8$
>
> $\therefore x \equiv 8 \pmod{15}$
