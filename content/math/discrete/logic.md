---
title: "논리와 증명"
description: "명제논리, 술어논리, 증명 기법(직접증명·귀류법·수학적귀납법)을 다룹니다."
date: "2026-04-06"
subject: "math"
category: "이산수학"
level: "university"
tags: ["논리", "증명", "귀납법", "이산수학"]
---

## 명제논리

### 논리 연결사

| 기호 | 이름 | 참이 되는 조건 |
|------|------|--------------|
| $\lnot p$ | 부정 | $p$가 거짓 |
| $p \land q$ | 논리곱 | 둘 다 참 |
| $p \lor q$ | 논리합 | 하나 이상 참 |
| $p \to q$ | 함의 | $p$ 참이고 $q$ 거짓일 때만 거짓 |
| $p \leftrightarrow q$ | 동치 | 진리값 동일 |

### 동치 법칙

$$
\lnot(p \land q) \equiv \lnot p \lor \lnot q \quad \text{(드 모르간)}
$$

$$
p \to q \equiv \lnot p \lor q
$$

**대우**: $p \to q \equiv \lnot q \to \lnot p$ (동치)

**역**: $q \to p$ (원래와 동치 아님), **이**: $\lnot p \to \lnot q$ (대우의 역)

---

## 술어논리

### 한정사

$$
\forall x\, P(x): \text{모든 } x\text{에 대해 } P(x) \text{가 참}
$$

$$
\exists x\, P(x): P(x)\text{가 참인 } x\text{가 적어도 하나 존재}
$$

**부정**:

$$
\lnot\forall x\, P(x) \equiv \exists x\, \lnot P(x)
$$

$$
\lnot\exists x\, P(x) \equiv \forall x\, \lnot P(x)
$$

---

## 증명 기법

### 직접 증명

$p$가 참임을 가정하고 $q$를 도출.

**예제.** "$n$이 짝수이면 $n^2$도 짝수이다"

$n = 2k \implies n^2 = 4k^2 = 2(2k^2)$ → 짝수 ✓

### 귀류법 (모순에 의한 증명)

$\lnot q$를 가정하여 모순을 도출 → $q$ 참.

**예제.** "$\sqrt{2}$는 무리수이다"

$\sqrt{2} = p/q$ (기약분수)라 가정 → $2 = p^2/q^2 \implies p^2 = 2q^2$ → $p$는 짝수 → $p = 2m$ → $4m^2 = 2q^2 \implies q^2 = 2m^2$ → $q$도 짝수 → $p/q$가 기약분수라는 가정에 모순. ∎

### 수학적 귀납법

1. **기저** (base case): $P(1)$ 증명
2. **귀납 단계**: $P(k)$가 참이면 $P(k+1)$도 참임을 증명

**예제.** $\displaystyle\sum_{k=1}^{n} k = \dfrac{n(n+1)}{2}$

- 기저: $n=1$: $1 = \dfrac{1 \cdot 2}{2} = 1$ ✓
- 귀납: $\displaystyle\sum_{k=1}^{n+1} k = \frac{n(n+1)}{2} + (n+1) = \frac{(n+1)(n+2)}{2}$ ✓

---

## 연습문제

**문제 1.** 다음 명제의 부정을 구하여라: "모든 소수는 홀수이다."

> **풀이**
>
> $\forall x(\text{소수}(x) \to \text{홀수}(x))$의 부정:
>
> $\exists x(\text{소수}(x) \land \lnot\text{홀수}(x))$
>
> **"짝수인 소수가 적어도 하나 존재한다."** (실제로 $2$가 반례)

---

**문제 2.** 수학적 귀납법으로 $\displaystyle\sum_{k=1}^{n}(2k-1) = n^2$을 증명하여라.

> **풀이**
>
> - **기저** ($n=1$): $2(1)-1 = 1 = 1^2$ ✓
>
> - **귀납**: $\displaystyle\sum_{k=1}^{n}(2k-1) = n^2$이 성립한다고 가정.
>
>   $$\sum_{k=1}^{n+1}(2k-1) = n^2 + (2(n+1)-1) = n^2 + 2n + 1 = (n+1)^2$$
>
>   귀납 단계 성립. ∎
