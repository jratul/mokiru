---
title: "집합론"
description: "집합의 연산, 함수와 관계, 무한집합과 칸토어 이론을 다룹니다."
date: "2026-04-06"
subject: "math"
category: "이산수학"
level: "university"
tags: ["집합론", "함수", "관계", "가산집합", "이산수학"]
---

## 집합의 기본 연산

### 집합 표기

$$
A = \{x \mid P(x)\}, \quad A \subseteq B \iff \forall x(x \in A \to x \in B)
$$

| 연산 | 기호 | 정의 |
|------|------|------|
| 합집합 | $A \cup B$ | $x \in A$ 또는 $x \in B$ |
| 교집합 | $A \cap B$ | $x \in A$ 이고 $x \in B$ |
| 차집합 | $A \setminus B$ | $x \in A$ 이고 $x \notin B$ |
| 여집합 | $A^c$ | $x \notin A$ |
| 곱집합 | $A \times B$ | 순서쌍 $(a,b)$ 의 집합 |

### 드 모르간 법칙

$$
(A \cup B)^c = A^c \cap B^c, \quad (A \cap B)^c = A^c \cup B^c
$$

---

## 관계

### 이항 관계

$A \times A$의 부분집합 $R$. $(a, b) \in R$을 $aRb$로 쓴다.

| 성질 | 조건 |
|------|------|
| 반사적 | $\forall a: aRa$ |
| 대칭적 | $aRb \implies bRa$ |
| 추이적 | $aRb, bRc \implies aRc$ |
| 반대칭적 | $aRb, bRa \implies a = b$ |

### 동치 관계

반사적 + 대칭적 + 추이적 → **동치 관계**

동치 관계 $R$은 집합을 **동치류**로 분할한다.

**예**: 정수에서 $a \equiv b \pmod{m}$ ($m \mid (a-b)$)는 동치 관계.

### 순서 관계

반사적 + 반대칭적 + 추이적 → **부분순서(poset)**

---

## 함수

### 단사·전사·전단사

- **단사(일대일)**: $f(a) = f(b) \implies a = b$
- **전사(위로의)**: $\forall y \in B, \exists x: f(x) = y$
- **전단사**: 단사 + 전사 → 역함수 존재

### 합성함수

$$
(g \circ f)(x) = g(f(x))
$$

---

## 무한집합과 가산성

### 가산집합

$\mathbb{N}$과 전단사 대응이 존재하는 집합을 **가산집합**이라 한다.

$\mathbb{Z}$, $\mathbb{Q}$: 가산, $\mathbb{R}$: 불가산 (칸토어 대각선 논법)

**칸토어의 정리**: 임의의 집합 $A$에 대해 $|A| < |\mathcal{P}(A)|$

---

## 연습문제

**문제 1.** $A = \{1,2,3\}$, $B = \{2,3,4,5\}$일 때, $A \cup B$, $A \cap B$, $A \setminus B$를 구하여라.

> **풀이**
>
> $A \cup B = \{1,2,3,4,5\}$
>
> $A \cap B = \{2,3\}$
>
> $A \setminus B = \{1\}$

---

**문제 2.** $f: \mathbb{R} \to \mathbb{R}$, $f(x) = 2x+1$이 전단사임을 보여라.

> **풀이**
>
> **단사**: $f(a) = f(b) \implies 2a+1 = 2b+1 \implies a = b$ ✓
>
> **전사**: 임의의 $y \in \mathbb{R}$에 대해 $x = \dfrac{y-1}{2}$로 놓으면 $f(x) = y$ ✓
>
> 따라서 전단사.
