---
title: "집합론"
description: "집합의 연산, 함수와 관계, 무한집합과 칸토어 이론, 가산성을 다룹니다."
date: "2026-04-06"
subject: "math"
category: "이산수학"
level: "university"
tags: ["집합론", "함수", "관계", "가산집합", "칸토어", "이산수학"]
---

집합론은 현대 수학의 공통 기반이다. [실해석학](/math/university/real-analysis)의 측도론, [확률론](/math/university/probability)의 시그마-대수, [선형대수학](/math/university/linear-algebra)의 벡터 공간 모두 집합론 위에 세워진다. 칸토어의 무한 이론은 "무한에도 크기가 있다"는 놀라운 결과를 보여준다.

---

## 집합의 기본 개념

### 집합 표기

**집합(set)**: 잘 정의된 대상들의 모임.

- 원소 나열: $A = \{1, 2, 3\}$
- 조건 제시: $B = \{x \in \mathbb{R} \mid x^2 < 4\} = (-2, 2)$
- 공집합: $\emptyset = \{\}$

$x \in A$: $x$는 $A$의 원소. $|A|$: $A$의 원소 수(유한 집합의 경우).

**부분집합**: $A \subseteq B \iff \forall x(x \in A \to x \in B)$

$A = B \iff A \subseteq B \text{ 이고 } B \subseteq A$

**멱집합**: $\mathcal{P}(A) = \{S \mid S \subseteq A\}$. $|A| = n$이면 $|\mathcal{P}(A)| = 2^n$.

### 집합 연산

| 연산 | 기호 | 정의 |
|------|------|------|
| 합집합 | $A \cup B$ | $x \in A$ 또는 $x \in B$ |
| 교집합 | $A \cap B$ | $x \in A$ 이고 $x \in B$ |
| 차집합 | $A \setminus B$ | $x \in A$ 이고 $x \notin B$ |
| 여집합 | $A^c = \overline{A}$ | 전체집합에서 $A$를 제외 |
| 대칭차 | $A \triangle B$ | $(A \setminus B) \cup (B \setminus A)$ |
| 곱집합 | $A \times B$ | 모든 순서쌍 $(a, b)$, $a \in A$, $b \in B$ |

### 드 모르간 법칙

$$
(A \cup B)^c = A^c \cap B^c
$$

$$
(A \cap B)^c = A^c \cup B^c
$$

**집합 항등식 (모든 집합에 성립)**:

$$
A \cup (B \cap C) = (A \cup B) \cap (A \cup C) \quad \text{(분배법칙)}
$$

$$
A \cap (B \cup C) = (A \cap B) \cup (A \cap C)
$$

---

## 관계 (Relation)

### 이항 관계

집합 $A$에서의 **이항 관계**: $A \times A$의 부분집합 $R$.

$(a, b) \in R$을 $a R b$ 또는 $a \sim b$로 쓴다.

**관계의 성질**:

| 성질 | 조건 | 예 |
|------|------|-----|
| 반사적 | $\forall a: aRa$ | $\leq$, $=$, $\mid$ (나눗셈) |
| 대칭적 | $aRb \implies bRa$ | $=$ |
| 추이적 | $aRb, bRc \implies aRc$ | $\leq$, $<$, $=$, $\mid$ |
| 반대칭적 | $aRb, bRa \implies a=b$ | $\leq$, $\mid$ |
| 비반사적 | $\forall a: \lnot(aRa)$ | $<$, $\ne$ |

### 동치 관계

**동치 관계**: 반사적 + 대칭적 + 추이적

동치 관계 $R$은 집합을 분리된 **동치류**로 분할한다:

$$
[a] = \{b \mid a R b\}
$$

**몫집합**: $A/R = \{[a] \mid a \in A\}$

**예 1.** 정수에서 $a \equiv b \pmod{m}$ (같은 나머지): 동치 관계. $\mathbb{Z}/m\mathbb{Z} = \{[0], [1], \ldots, [m-1]\}$.

**예 2.** 분수 $\dfrac{a}{b}$에서 $\dfrac{a}{b} = \dfrac{c}{d} \iff ad = bc$: 동치 관계. $\mathbb{Q} = (\mathbb{Z} \times \mathbb{Z}^*)/\sim$.

### 순서 관계

**부분순서(partial order)**: 반사적 + 반대칭적 + 추이적

순서쌍 $(A, \leq)$를 **부분순서 집합(poset)**이라 한다.

**전순서(total order)**: 부분순서이면서 임의의 두 원소가 비교 가능 ($a \leq b$ 또는 $b \leq a$).

**전순서의 예**: $(\mathbb{R}, \leq)$, $(\mathbb{N}, \mid)$는 부분순서이지만 전순서가 아님 (예: 2와 3은 나눗셈 관계 없음).

---

## 함수 (Function)

### 함수의 정의

$f: A \to B$: 집합 $A$의 각 원소에 $B$의 원소를 정확히 하나씩 대응시키는 관계.

$f$는 $A \times B$의 특별한 부분집합: 각 $a \in A$에 대해 $(a, b) \in f$인 $b$가 유일.

**정의역(domain)** $A$, **공역(codomain)** $B$, **치역(range/image)** $f(A) = \{f(a) \mid a \in A\} \subseteq B$.

### 함수의 종류

**단사(일대일, injective)**: $f(a) = f(b) \implies a = b$

**전사(위로의, surjective)**: $\forall y \in B, \exists x \in A: f(x) = y$ (치역 $= B$)

**전단사(bijective)**: 단사 + 전사. 역함수 $f^{-1}$이 존재.

**예**: $f: \mathbb{R} \to \mathbb{R}$, $f(x) = x^2$은 단사도 전사도 아님. $f: \mathbb{R} \to [0,\infty)$, $f(x) = x^2$는 전사이지만 단사 아님.

### 합성함수

$f: A \to B$, $g: B \to C$일 때 합성함수:

$$
(g \circ f): A \to C, \quad (g \circ f)(x) = g(f(x))
$$

- $f$, $g$ 모두 단사 → $g \circ f$도 단사
- $f$, $g$ 모두 전사 → $g \circ f$도 전사

---

## 무한집합과 가산성

### 같은 크기의 집합

두 집합 $A$, $B$ 사이에 전단사 함수가 존재하면 $|A| = |B|$ (크기가 같다).

**유한 집합**: $|A| = n$이면 $\{1, 2, \ldots, n\}$과 전단사 대응.

### 가산집합

$\mathbb{N}$과 전단사 대응이 존재하면 **가산(countably infinite)**.

$A$가 유한이거나 가산이면 **가부번(countable)**.

**$\mathbb{Z}$는 가산**: $f: \mathbb{N} \to \mathbb{Z}$, $f(n) = \begin{cases} n/2 & n \text{ 짝수} \\ -(n+1)/2 & n \text{ 홀수}\end{cases}$

**$\mathbb{Q}$는 가산**: 양의 유리수를 $\dfrac{p}{q}$ 형태로 격자 배열 후 대각선으로 나열.

**가산 집합의 합집합**: 가산개의 가산집합의 합집합은 가산.

### 불가산집합

**칸토어 대각선 논법**: $(0,1)$은 불가산이다.

임의의 나열 $r_1, r_2, r_3, \ldots$를 가정하고, $d = 0.d_1 d_2 d_3 \ldots$를 $d_n \ne n$번째 소수에서의 $n$번째 소수(또는 단순히 $r_n$의 $n$번째 소수 자리와 다른 수)로 정의하면 $d$는 목록에 없다 → 모순. ∎

따라서 $|\mathbb{R}| > |\mathbb{N}|$. **실수는 자연수보다 "더 많다"**.

**칸토어 정리**: 임의의 집합 $A$에 대해 $|A| < |\mathcal{P}(A)|$.

따라서 무한 크기의 계층이 존재한다:

$$
|\mathbb{N}| < |\mathcal{P}(\mathbb{N})| < |\mathcal{P}(\mathcal{P}(\mathbb{N}))| < \cdots
$$

---

## 연습문제

**문제 1.** $A = \{1,2,3\}$, $B = \{2,3,4,5\}$일 때, $A \cup B$, $A \cap B$, $A \setminus B$, $|A \times B|$를 구하여라.

> **풀이**
>
> $A \cup B = \{1,2,3,4,5\}$, $A \cap B = \{2,3\}$, $A \setminus B = \{1\}$
>
> $|A \times B| = |A| \times |B| = 3 \times 4 = 12$

---

**문제 2.** $f: \mathbb{R} \to \mathbb{R}$, $f(x) = 2x+1$이 전단사임을 보여라.

> **풀이**
>
> **단사**: $f(a) = f(b) \implies 2a+1 = 2b+1 \implies a = b$ ✓
>
> **전사**: 임의의 $y \in \mathbb{R}$에 대해 $x = \dfrac{y-1}{2}$로 놓으면 $f(x) = y$ ✓ → 전단사

---

**문제 3.** $A = \{a, b, c\}$일 때, $|\mathcal{P}(A)|$를 구하고 모든 원소를 나열하여라.

> **풀이**
>
> $|\mathcal{P}(A)| = 2^3 = 8$
>
> $\mathcal{P}(A) = \{\emptyset, \{a\}, \{b\}, \{c\}, \{a,b\}, \{a,c\}, \{b,c\}, \{a,b,c\}\}$

---

**문제 4.** 정수 위의 관계 $R$: "$a - b$가 3의 배수"가 동치 관계임을 증명하고 동치류를 구하여라.

> **풀이**
>
> **반사성**: $a - a = 0 = 3 \times 0$ → $aRa$ ✓
>
> **대칭성**: $aRb \implies 3 \mid (a-b) \implies 3 \mid (b-a) \implies bRa$ ✓
>
> **추이성**: $aRb, bRc \implies 3 \mid (a-b), 3 \mid (b-c) \implies 3 \mid (a-b+b-c) = (a-c)$ ✓
>
> 동치류: $[0] = \{\ldots, -6,-3,0,3,6,\ldots\}$, $[1] = \{\ldots,-5,-2,1,4,7,\ldots\}$, $[2] = \{\ldots,-4,-1,2,5,8,\ldots\}$
>
> 이것이 $\mathbb{Z}/3\mathbb{Z} = \mathbb{Z}_3$이다.
