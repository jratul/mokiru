---
title: "논리와 증명"
description: "명제논리, 술어논리, 증명 기법(직접증명·귀류법·대우·수학적귀납법)을 다룹니다."
date: "2026-04-06"
subject: "math"
category: "이산수학"
level: "university"
tags: ["논리", "증명", "귀납법", "명제", "술어논리", "이산수학"]
---

논리는 수학의 언어이자 증명의 기초다. 여기서 배우는 명제논리·술어논리는 집합론, 알고리즘 분석, 프로그래밍 언어의 형식 의미론에 두루 쓰인다. 수학적 귀납법은 [수학Ⅰ](/math/high/math1)에서 처음 등장하고 [이산수학 그래프이론](/math/discrete/graph-theory)·[조합론](/math/discrete/combinatorics)에서 반복적으로 활용된다.

---

## 명제논리

### 명제와 진리값

**명제(proposition)**: 참(T) 또는 거짓(F) 중 하나의 진리값을 갖는 선언문.

- "2는 소수이다." → 참
- "3 + 2 = 7이다." → 거짓
- "x는 양수이다." → 명제 아님 (x의 값에 따라 달라짐 → 명제함수)

### 논리 연결사

| 기호 | 이름 | 읽기 | 참이 되는 조건 |
|------|------|------|--------------|
| $\lnot p$ | 부정 (NOT) | "not $p$" | $p$가 거짓일 때 |
| $p \land q$ | 논리곱 (AND) | "$p$ and $q$" | 둘 다 참일 때 |
| $p \lor q$ | 논리합 (OR) | "$p$ or $q$" | 하나 이상 참일 때 |
| $p \to q$ | 함의 (implication) | "$p$ implies $q$" | $p$가 참이고 $q$가 거짓일 때만 거짓 |
| $p \leftrightarrow q$ | 쌍조건부 | "$p$ iff $q$" | 진리값이 같을 때 |

**함의 진리표** ($p \to q$는 "$p$이면 $q$이다"):

| $p$ | $q$ | $p \to q$ |
|-----|-----|-----------|
| T | T | T |
| T | F | **F** |
| F | T | T (이유: 거짓에서는 무엇이든 함의) |
| F | F | T |

"가을이면 나뭇잎이 진다" — 봄에도 나뭇잎이 지면 함의가 거짓이 되는 게 아니다.

### 동치 법칙

두 명제가 항상 같은 진리값을 가지면 **논리적 동치(≡)**:

$$
\lnot(p \land q) \equiv \lnot p \lor \lnot q \quad \text{(드 모르간 1)}
$$

$$
\lnot(p \lor q) \equiv \lnot p \land \lnot q \quad \text{(드 모르간 2)}
$$

$$
p \to q \equiv \lnot p \lor q \quad \text{(함의의 정의)}
$$

$$
p \to q \equiv \lnot q \to \lnot p \quad \text{(대우, contrapositive)}
$$

### 역·이·대우

$p \to q$에서:
- **역(converse)**: $q \to p$ (원 명제와 동치 아님)
- **이(inverse)**: $\lnot p \to \lnot q$ (역과 동치)
- **대우(contrapositive)**: $\lnot q \to \lnot p$ (원 명제와 동치)

**주의**: 역과 이는 원 명제와 논리적으로 무관하다.

### 항진명제와 모순

- **항진명제(tautology)**: 모든 진리 배당에서 참. 예: $p \lor \lnot p$
- **모순(contradiction)**: 모든 진리 배당에서 거짓. 예: $p \land \lnot p$

---

## 술어논리 (Predicate Logic)

### 명제함수와 한정사

**명제함수** $P(x)$: $x$에 값을 대입하면 명제가 되는 함수.

**전칭 한정사** $\forall$:

$$
\forall x\, P(x): \text{정의역의 모든 } x \text{에 대해 } P(x) \text{가 참}
$$

**존재 한정사** $\exists$:

$$
\exists x\, P(x): P(x) \text{가 참인 } x \text{가 적어도 하나 존재}
$$

**유일 존재** $\exists!$: 정확히 하나의 $x$에 대해 $P(x)$가 참.

### 한정사의 부정

$$
\lnot\forall x\, P(x) \equiv \exists x\, \lnot P(x)
$$

$$
\lnot\exists x\, P(x) \equiv \forall x\, \lnot P(x)
$$

**예**: "모든 실수는 양수이다"의 부정 = "음수이거나 0인 실수가 존재한다."

### 중첩 한정사

$$
\forall x\, \forall y\, P(x,y) \equiv \forall y\, \forall x\, P(x,y) \quad \text{(순서 교환 가능)}
$$

$$
\exists x\, \exists y\, P(x,y) \equiv \exists y\, \exists x\, P(x,y) \quad \text{(순서 교환 가능)}
$$

$$
\forall x\, \exists y\, P(x,y) \not\equiv \exists y\, \forall x\, P(x,y) \quad \text{(순서 교환 불가!)}
$$

예: "모든 사람에게는 사랑하는 사람이 있다" ≠ "어떤 한 사람이 모든 사람에게 사랑받는다".

---

## 증명 기법

### 직접 증명 (Direct Proof)

$p \to q$를 증명하기 위해: $p$가 참임을 가정하고 논리적 추론으로 $q$를 도출.

**예제.** "정수 $n$이 짝수이면 $n^2$도 짝수이다."

$n = 2k$ ($k \in \mathbb{Z}$)라 하면 $n^2 = 4k^2 = 2(2k^2)$. $2k^2$은 정수이므로 $n^2$는 짝수. ∎

### 간접 증명: 대우 증명

$p \to q$의 대우 $\lnot q \to \lnot p$를 증명.

**예제.** "$n^2$이 홀수이면 $n$도 홀수이다."

대우: "$n$이 짝수이면 $n^2$도 짝수이다." (바로 위 결과와 같음) ∎

### 귀류법 (Proof by Contradiction)

결론의 부정 $\lnot q$를 가정하여 모순($p$와 $\lnot p$ 동시 성립 등)을 이끌어냄.

**예제.** "$\sqrt{2}$는 무리수이다."

$\sqrt{2} = \dfrac{p}{q}$ (기약분수, $p, q \in \mathbb{Z}^+$)라 가정.

$2q^2 = p^2 \implies p$는 짝수 → $p = 2m$ 대입 → $2q^2 = 4m^2 \implies q^2 = 2m^2 \implies q$도 짝수.

$p$와 $q$ 모두 짝수이면 $\dfrac{p}{q}$가 기약분수라는 가정에 모순. ∎

### 수학적 귀납법

자연수에 대한 명제 $P(n)$을 증명하는 방법:

1. **기저(base case)**: $P(1)$이 참임을 증명
2. **귀납 단계(inductive step)**: $P(k)$가 참이면 $P(k+1)$도 참임을 증명

**강한 귀납법**: 귀납 단계에서 $P(1), P(2), \ldots, P(k)$가 모두 참이라고 가정하고 $P(k+1)$을 증명.

**잘 정렬 원리**: $\mathbb{N}$의 공집합이 아닌 부분집합은 최솟값을 가진다. 이는 수학적 귀납법과 동치다.

---

## 연습문제

**문제 1.** 다음 명제의 부정을 구하여라: "모든 소수는 홀수이다."

> **풀이**
>
> 기호화: $\forall x(\text{소수}(x) \to \text{홀수}(x))$
>
> 부정: $\exists x(\text{소수}(x) \land \lnot\text{홀수}(x))$
>
> **"짝수인 소수가 존재한다."** (실제로 $2$가 반례이므로 원 명제는 거짓)

---

**문제 2.** 수학적 귀납법으로 $\displaystyle\sum_{k=1}^{n}(2k-1) = n^2$을 증명하여라.

> **풀이**
>
> **기저** ($n=1$): 좌변 $= 1 = 1^2$ ✓
>
> **귀납**: $\sum_{k=1}^{n}(2k-1) = n^2$이 성립한다고 가정.
>
> $\sum_{k=1}^{n+1}(2k-1) = n^2 + (2(n+1)-1) = n^2 + 2n + 1 = (n+1)^2$ ✓ ∎

---

**문제 3.** "$n$이 홀수이면 $n^2$은 홀수이다"를 직접 증명과 대우 증명으로 각각 증명하여라.

> **풀이 (직접 증명)**
>
> $n = 2k+1$이면 $n^2 = 4k^2 + 4k + 1 = 2(2k^2+2k) + 1$ → 홀수 ✓
>
> **풀이 (대우 증명)**
>
> 대우: "$n^2$이 짝수이면 $n$은 짝수이다."
>
> 귀류법으로 $n$이 홀수라 가정하면 $n^2$은 홀수(위 결과)이므로 $n^2$이 짝수라는 가정에 모순. ∎

---

**문제 4.** 다음 중 $\forall x\, \exists y\, (y > x)$와 $\exists y\, \forall x\, (y > x)$의 참·거짓을 $\mathbb{R}$에서 판단하여라.

> **풀이**
>
> $\forall x\, \exists y\, (y > x)$: 임의의 실수 $x$에 대해 $y = x+1$로 택하면 $y > x$ **참**
>
> $\exists y\, \forall x\, (y > x)$: 모든 실수보다 큰 실수가 존재한다는 의미. 실수는 위로 유계가 아니므로 **거짓**
