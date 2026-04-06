---
title: "실해석학"
description: "실수의 완비성, 수열과 함수의 수렴, 르베그 적분의 기초를 다룹니다."
date: "2026-04-06"
subject: "math"
category: "실해석학"
level: "university"
tags: ["실해석학", "완비성", "르베그적분", "측도론", "대학수학"]
---

## 실수의 완비성

### 상한과 하한

집합 $S$의 **상한(supremum)** $\sup S$: 최소 상계. **하한(infimum)** $\inf S$: 최대 하계.

**완비성 공리**: 공집합이 아니고 위로 유계인 실수 집합은 반드시 상한을 가진다.

### 코시 수열

$$
\forall \varepsilon > 0,\; \exists N : m, n > N \implies |a_m - a_n| < \varepsilon
$$

$\mathbb{R}$에서 코시 수열 $\iff$ 수렴 수열

---

## $\varepsilon$-$\delta$ 논법

### 극한의 정의

$$
\lim_{x \to a} f(x) = L \iff \forall \varepsilon > 0,\; \exists \delta > 0 : 0 < |x-a| < \delta \implies |f(x) - L| < \varepsilon
$$

### 균등 연속

$$
\forall \varepsilon > 0,\; \exists \delta > 0 : |x-y| < \delta \implies |f(x)-f(y)| < \varepsilon
$$

점별 연속보다 강한 조건. 폐구간의 연속함수는 균등 연속이다 (하이네-칸토어 정리).

---

## 함수열의 수렴

### 점별 수렴 vs 균등 수렴

$$
f_n \to f \text{ (점별)} : \forall x,\; f_n(x) \to f(x)
$$

$$
f_n \rightrightarrows f \text{ (균등)} : \sup_x |f_n(x) - f(x)| \to 0
$$

균등 수렴하면 극한과 적분·미분의 교환이 가능하다.

---

## 측도와 르베그 적분

### 르베그 측도

구간 $(a, b)$의 측도 $= b - a$. 가산 집합의 측도 $= 0$.

### 르베그 적분

**단순함수** $\phi = \sum c_k \chi_{E_k}$에 대해

$$
\int \phi\,d\mu = \sum c_k \mu(E_k)
$$

일반 함수는 단순함수의 극한으로 정의.

**단조 수렴 정리**: $0 \leq f_1 \leq f_2 \leq \cdots \to f$ (a.e.)이면

$$
\int f\,d\mu = \lim_{n\to\infty}\int f_n\,d\mu
$$

---

## 연습문제

**문제 1.** $\varepsilon$-$\delta$로 $\lim_{x \to 2}(3x-1) = 5$임을 증명하여라.

> **풀이**
>
> $|f(x) - 5| = |3x - 1 - 5| = |3x - 6| = 3|x-2|$
>
> 임의의 $\varepsilon > 0$에 대해 $\delta = \dfrac{\varepsilon}{3}$으로 놓으면
>
> $0 < |x - 2| < \delta \implies |f(x)-5| = 3|x-2| < 3\delta = \varepsilon$

---

**문제 2.** $f_n(x) = x^n$ ($0 \leq x \leq 1$)의 점별 극한함수를 구하고, 균등 수렴 여부를 판단하여라.

> **풀이**
>
> $$f(x) = \lim_{n\to\infty} x^n = \begin{cases}0 & 0 \leq x < 1 \\ 1 & x = 1\end{cases}$$
>
> $f$는 불연속이지만 $f_n$은 각각 연속 → 균등 수렴이면 극한도 연속이어야 하므로 **균등 수렴하지 않는다**.
>
> 실제로 $\sup_{x \in [0,1]}|f_n(x) - f(x)| = 1 \not\to 0$.
