---
title: "조합론"
description: "셈의 원리, 포함·배제 원리, 비둘기집 원리, 생성함수, 점화식을 다룹니다."
date: "2026-04-06"
subject: "math"
category: "이산수학"
level: "university"
tags: ["조합론", "생성함수", "포함배제", "비둘기집원리", "피보나치", "이산수학"]
---

조합론은 셈(counting)의 수학이다. [고등 확률과 통계](/math/high/probability-stats)의 순열·조합을 확장하여 복잡한 경우의 수를 체계적으로 구한다. 생성함수는 [수학Ⅰ](/math/high/math1)의 수열과 연결되며, 점화식 풀이는 알고리즘의 시간 복잡도 분석(마스터 정리)에 직접 쓰인다.

---

## 셈의 기본 원리

### 합·곱·뺄셈 원리

**합의 원리**: 서로소인 유한 집합 $A_1, \ldots, A_k$에 대해 $|A_1 \cup \cdots \cup A_k| = \sum |A_i|$

**곱의 원리**: 순서대로 $n_1$가지, $n_2$가지, ..., $n_k$가지 선택이 가능하면 전체 $n_1 n_2 \cdots n_k$가지.

**뺄셈 원리**: $|A^c| = |U| - |A|$ (전체에서 원하지 않는 경우 제거)

**나눗셈 원리**: 각 결과가 정확히 $k$번 중복 계산될 때, 실제 경우의 수 $= \dfrac{\text{총 계산 수}}{k}$.

### 순열과 조합 복습

$$
P(n,r) = {}_nP_r = \frac{n!}{(n-r)!}, \quad C(n,r) = \binom{n}{r} = \frac{n!}{r!(n-r)!}
$$

**이항 계수 성질**:

$$
\binom{n}{r} = \binom{n}{n-r}, \quad \binom{n}{r} + \binom{n}{r+1} = \binom{n+1}{r+1} \quad \text{(파스칼 항등식)}
$$

$$
\sum_{r=0}^{n}\binom{n}{r} = 2^n, \quad \sum_{r=0}^{n}(-1)^r\binom{n}{r} = 0, \quad \sum_{r=0}^{n}\binom{n}{r}^2 = \binom{2n}{n}
$$

### 다항 계수

$n$개의 원소를 각각 $k_1, k_2, \ldots, k_m$개로 나누는 방법의 수 ($k_1+\cdots+k_m=n$):

$$
\binom{n}{k_1, k_2, \ldots, k_m} = \frac{n!}{k_1! k_2! \cdots k_m!}
$$

**다항 정리**: $(x_1 + x_2 + \cdots + x_m)^n = \displaystyle\sum_{k_1+\cdots+k_m=n} \binom{n}{k_1,\ldots,k_m} x_1^{k_1}\cdots x_m^{k_m}$

---

## 포함·배제 원리 (Inclusion-Exclusion)

$$
|A_1 \cup \cdots \cup A_n| = \sum_i|A_i| - \sum_{i<j}|A_i \cap A_j| + \sum_{i<j<k}|A_i \cap A_j \cap A_k| - \cdots + (-1)^{n+1}|A_1 \cap \cdots \cap A_n|
$$

**예제.** 1부터 100까지 3 또는 5의 배수 개수:

$|A_3| = 33$, $|A_5| = 20$, $|A_{15}| = |A_3 \cap A_5| = 6$

$|A_3 \cup A_5| = 33 + 20 - 6 = 47$

**교란순열(Derangement)**: 아무도 자신의 자리에 앉지 않는 순열 수.

$$
D_n = n!\sum_{k=0}^{n}\frac{(-1)^k}{k!} \approx \frac{n!}{e}
$$

포함·배제 원리로 유도: $|$고정점 없는 순열$|$ = $n!$ - (고정점 하나 이상 있는 순열의 수)

$$
D_1 = 0,\; D_2 = 1,\; D_3 = 2,\; D_4 = 9,\; D_5 = 44
$$

점화식: $D_n = (n-1)(D_{n-1} + D_{n-2})$

---

## 비둘기집 원리

$n+1$개의 공을 $n$개의 상자에 넣으면, 적어도 하나의 상자에 **2개 이상**의 공이 들어간다.

**일반화**: $kn+1$개의 공을 $n$개의 상자에 넣으면, 적어도 하나의 상자에 $k+1$개 이상.

**예제 1.** 임의의 367명 중 생일이 같은 두 사람이 반드시 존재한다. (상자 = 366일)

**예제 2.** 임의의 5개의 정수 중 합이 같은 두 쌍이 존재한다. (합 $= S$의 가능한 범위는 유한하므로)

**예제 3 (람지 이론)**: 6명이 있으면 적어도 3명이 서로 아는 사람이거나, 서로 모르는 사람이 반드시 존재한다.

---

## 점화식 (Recurrence Relations)

### 정의와 풀이

**점화식**: $a_n$을 이전 항 $a_{n-1}, a_{n-2}, \ldots$으로 나타낸 관계식.

**선형 등차 점화식** ($k$계):

$$
a_n = c_1 a_{n-1} + c_2 a_{n-2} + \cdots + c_k a_{n-k} + f(n)
$$

**동차** ($f(n) = 0$): 특성방정식 $r^k - c_1 r^{k-1} - \cdots - c_k = 0$의 근으로 일반해 구성.

| 근의 유형 | 일반해 |
|----------|--------|
| 서로 다른 실근 $r_1, r_2$ | $a_n = \alpha r_1^n + \beta r_2^n$ |
| 중근 $r$ | $a_n = (\alpha + \beta n) r^n$ |

### 피보나치 수열

$$
F_n = F_{n-1} + F_{n-2}, \quad F_1 = F_2 = 1
$$

특성방정식: $r^2 - r - 1 = 0 \implies r = \dfrac{1 \pm \sqrt{5}}{2}$

**비네 공식(Binet's formula)**:

$$
F_n = \frac{1}{\sqrt{5}}\left[\left(\frac{1+\sqrt{5}}{2}\right)^n - \left(\frac{1-\sqrt{5}}{2}\right)^n\right]
$$

황금비 $\phi = \dfrac{1+\sqrt{5}}{2} \approx 1.618$. 큰 $n$에서 $F_n \approx \dfrac{\phi^n}{\sqrt{5}}$.

**응용**: 피보나치 수는 자연에서 꽃잎 수, 솔방울 나선, 황금나선에서 나타난다.

### 분할 정복 점화식

알고리즘 분석에서 자주 등장하는 패턴:

$$
T(n) = aT(n/b) + f(n)
$$

**마스터 정리**:

- $f(n) = O(n^{\log_b a - \varepsilon})$: $T(n) = \Theta(n^{\log_b a})$
- $f(n) = \Theta(n^{\log_b a})$: $T(n) = \Theta(n^{\log_b a}\log n)$
- $f(n) = \Omega(n^{\log_b a + \varepsilon})$: $T(n) = \Theta(f(n))$

예: 병합 정렬 $T(n) = 2T(n/2) + n \implies T(n) = \Theta(n\log n)$

---

## 생성함수 (Generating Functions)

### 정의

수열 $\{a_n\}$의 **생성함수**:

$$
G(x) = \sum_{n=0}^{\infty} a_n x^n = a_0 + a_1 x + a_2 x^2 + \cdots
$$

수열과 형식적 거듭제곱급수를 대응시켜 수열 연산을 함수 연산으로 변환.

### 주요 생성함수

$$
\sum_{n=0}^{\infty} x^n = \frac{1}{1-x}, \quad \sum_{n=0}^{\infty} \binom{n+k}{k} x^n = \frac{1}{(1-x)^{k+1}}
$$

$$
\sum_{n=0}^{\infty} \frac{x^n}{n!} = e^x, \quad \sum_{n=0}^{\infty} \binom{n}{k} x^n = \frac{x^k}{(1-x)^{k+1}}
$$

### 생성함수로 점화식 풀기

$a_n = a_{n-1} + n$, $a_0 = 0$ 풀기:

$G(x) = xG(x) + \dfrac{x}{(1-x)^2}$

$G(x)(1-x) = \dfrac{x}{(1-x)^2} \implies G(x) = \dfrac{x}{(1-x)^3} = \sum_{n=1}^{\infty} \binom{n+1}{2} x^n$

따라서 $a_n = \binom{n+1}{2} = \dfrac{n(n+1)}{2}$

---

## 연습문제

**문제 1.** 10명 중 3명을 줄 세우는 방법과 순서 없이 3명을 선택하는 방법의 수를 각각 구하여라.

> **풀이**
>
> 줄 세우기 (순서 있음): $P(10,3) = 10 \times 9 \times 8 = 720$
>
> 선택 (순서 없음): $\binom{10}{3} = \dfrac{720}{3!} = \dfrac{720}{6} = 120$

---

**문제 2.** 포함·배제 원리로 1 이상 30 이하에서 2, 3, 5 중 어느 것도 약수로 갖지 않는 수의 개수를 구하여라.

> **풀이**
>
> $|A_2| = 15$, $|A_3| = 10$, $|A_5| = 6$
>
> $|A_2 \cap A_3| = |A_6| = 5$, $|A_2 \cap A_5| = |A_{10}| = 3$, $|A_3 \cap A_5| = |A_{15}| = 2$
>
> $|A_2 \cap A_3 \cap A_5| = |A_{30}| = 1$
>
> $|A_2 \cup A_3 \cup A_5| = 15+10+6-5-3-2+1 = 22$
>
> 구하는 수 $= 30 - 22 = 8$ (1, 7, 11, 13, 17, 19, 23, 29)

---

**문제 3.** 점화식 $a_n = 5a_{n-1} - 6a_{n-2}$, $a_0 = 1$, $a_1 = 2$의 일반항을 구하여라.

> **풀이**
>
> 특성방정식: $r^2 - 5r + 6 = (r-2)(r-3) = 0 \implies r = 2, 3$
>
> 일반해: $a_n = \alpha \cdot 2^n + \beta \cdot 3^n$
>
> $a_0 = 1$: $\alpha + \beta = 1$
>
> $a_1 = 2$: $2\alpha + 3\beta = 2$
>
> 연립: $\beta = 0$, $\alpha = 1$
>
> $a_n = 2^n$

---

**문제 4.** 비둘기집 원리를 이용하여 임의의 $n+1$개의 정수 중에서 두 수의 차가 $n$의 배수인 쌍이 존재함을 보여라.

> **풀이**
>
> 각 정수를 $n$으로 나눈 나머지로 분류하면 나머지의 종류는 $\{0, 1, \ldots, n-1\}$의 $n$가지.
>
> $n+1$개의 정수를 $n$개의 상자에 넣으면, 비둘기집 원리에 의해 같은 나머지를 가진 두 수 $a, b$가 존재.
>
> $a \equiv b \pmod{n} \implies n \mid (a - b)$. ∎
