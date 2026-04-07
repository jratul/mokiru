---
title: "실해석학"
description: "실수의 완비성, ε-δ 논법, 함수열의 수렴, 측도와 르베그 적분의 기초를 다룹니다."
date: "2026-04-06"
subject: "math"
category: "실해석학"
level: "university"
tags: ["실해석학", "완비성", "르베그적분", "균등수렴", "측도론", "대학수학"]
---

실해석학(Real Analysis)은 미적분학의 직관적 내용을 엄밀한 논리로 정당화하는 과목이다. [고등 수학Ⅱ](/math/high/math2)·[대학 미적분학](/math/university/calculus)에서 "명백히" 쓰던 극한·연속·미분·적분의 개념을 $\varepsilon$-$\delta$ 언어로 재정립한다. 실해석학의 개념은 [대학 확률론](/math/university/probability)의 측도론적 기반이 된다. [중학 수와 연산](/math/middle/number-algebra)에서 다룬 실수의 성질이 여기서 공리적으로 정당화된다.

---

## 실수의 구조

### 실수의 공리

실수 $\mathbb{R}$은 **완비 순서체(complete ordered field)**다.

- **체(field)**: 덧셈·곱셈이 정의되고 4칙연산이 가능
- **순서(order)**: $<$ 관계가 정의됨
- **완비성(completeness)**: 아래 공리가 성립

**완비성 공리(상한 공리)**: 공집합이 아니고 위로 유계인 $\mathbb{R}$의 부분집합은 반드시 상한(supremum)을 가진다.

유리수 $\mathbb{Q}$는 체이고 순서가 있지만 완비적이지 않다. 예: $S = \{x \in \mathbb{Q} \mid x^2 < 2\}$의 상한은 $\sqrt{2} \notin \mathbb{Q}$.

### 상한과 하한

집합 $S \subseteq \mathbb{R}$에서:
- **상한(supremum, lub)** $\sup S$: 최소 상계
- **하한(infimum, glb)** $\inf S$: 최대 하계

$\sup S = M$ $\iff$ ① $s \leq M$ ($\forall s \in S$) ② $\forall \varepsilon > 0$, $\exists s \in S : s > M - \varepsilon$

### 아르키메데스 성질

$$
\forall x \in \mathbb{R},\; \exists n \in \mathbb{N} : n > x
$$

자연수는 위로 유계가 아니다. 이를 이용해 $\mathbb{Q}$가 $\mathbb{R}$에서 **조밀**함을 증명한다: 임의의 두 실수 사이에 유리수가 존재한다.

---

## 수열의 극한

### 엄밀한 정의

$$
\lim_{n \to \infty} a_n = L \iff \forall \varepsilon > 0,\; \exists N \in \mathbb{N} : n > N \implies |a_n - L| < \varepsilon
$$

직관: "$a_n$이 $L$에 수렴한다" = 어떤 오차 $\varepsilon$을 주어도, 충분히 큰 $n$부터는 $a_n$이 $L$로부터 $\varepsilon$ 이내에 있다.

**극한의 유일성**: 수열의 극한이 존재하면 유일하다.

**수렴수열은 유계**: $a_n \to L$이면 $\{a_n\}$은 유계.

### 단조 수렴 정리

**단조증가 유계 수열은 수렴한다**: $a_1 \leq a_2 \leq \cdots$이고 $a_n \leq M$이면 $\lim a_n = \sup\{a_n\}$.

자연상수 $e = \lim_{n\to\infty}\left(1 + \dfrac{1}{n}\right)^n$의 존재를 이 정리로 증명.

### 코시 수열

$$
\{a_n\} \text{ 코시} \iff \forall \varepsilon > 0,\; \exists N : m, n > N \implies |a_m - a_n| < \varepsilon
$$

$\mathbb{R}$에서: 수렴 $\iff$ 코시. 이것이 $\mathbb{R}$의 완비성의 동치 조건.

**볼차노-바이어슈트라스 정리**: 유계인 수열은 수렴하는 부분수열을 가진다.

---

## 함수의 극한과 연속

### $\varepsilon$-$\delta$ 정의

$$
\lim_{x \to a} f(x) = L \iff \forall \varepsilon > 0,\; \exists \delta > 0 : 0 < |x - a| < \delta \implies |f(x) - L| < \varepsilon
$$

**예제.** $\lim_{x \to 2}(3x-1) = 5$ 증명:

$|f(x) - 5| = |3x - 6| = 3|x - 2| < 3\delta$. $\delta = \varepsilon/3$으로 놓으면 조건 만족.

### 연속의 $\varepsilon$-$\delta$ 정의

$$
f \text{ 가 } a \text{ 에서 연속} \iff \forall \varepsilon > 0,\; \exists \delta > 0 : |x - a| < \delta \implies |f(x) - f(a)| < \varepsilon
$$

### 균등 연속 (Uniform Continuity)

$$
f \text{ 가 } S \text{ 에서 균등 연속} \iff \forall \varepsilon > 0,\; \exists \delta > 0 : x, y \in S, |x-y| < \delta \implies |f(x)-f(y)| < \varepsilon
$$

**차이**: 점별 연속에서는 $\delta$가 $x$와 $\varepsilon$에 모두 의존하지만, 균등 연속에서는 $\delta$가 $\varepsilon$에만 의존한다.

**하이네-칸토어 정리**: 닫힌 유계 구간 $[a,b]$에서 연속인 함수는 균등 연속이다.

**예**: $f(x) = \dfrac{1}{x}$는 $(0,1)$에서 연속이지만 균등 연속이 아니다 (0 근방에서 $\delta$ 제어 불가능).

---

## 함수열의 수렴

### 점별 수렴

$$
f_n \xrightarrow{\text{p.w.}} f \iff \forall x \in E,\; f_n(x) \to f(x)
$$

각 점 $x$마다 수렴하지만, 수렴 속도는 $x$마다 다를 수 있다.

### 균등 수렴

$$
f_n \rightrightarrows f \iff \sup_{x \in E}|f_n(x) - f(x)| \to 0
$$

**균등 수렴의 장점**:
- 극한함수가 연속 (각 $f_n$이 연속이면)
- 적분과 극한의 교환: $\lim \int f_n = \int \lim f_n$
- 미분과 극한의 교환 (추가 조건 필요)

**예제.** $f_n(x) = x^n$ ($0 \leq x \leq 1$):

점별 극한: $f(x) = \begin{cases}0 & 0 \leq x < 1 \\ 1 & x = 1\end{cases}$ (불연속)

균등 수렴하지 않는다: $\sup|f_n - f| = 1 \not\to 0$

---

## 측도론과 르베그 적분

### 리만 적분의 한계

리만 적분은 함수가 충분히 "잘 행동"할 때만 적용된다. 예: 유리수에서 1, 무리수에서 0인 디리클레 함수는 리만 적분 불가능하지만, 르베그 적분값 = 0.

### 르베그 측도

구간 $(a,b)$의 르베그 측도: $\mu((a,b)) = b - a$.

**가산 가법성**: $\mu\!\left(\bigcup A_i\right) = \sum \mu(A_i)$ (서로소인 경우)

**가산 집합의 측도 = 0**: $\mathbb{Q}$의 측도 = 0.

**거의 모든 곳에서 (a.e., almost everywhere)**: 측도 0인 집합을 제외한 모든 곳에서.

### 르베그 적분

**단순함수** $\phi = \sum c_k \chi_{E_k}$ ($\chi_{E_k}$: 집합 $E_k$의 지시함수):

$$
\int \phi\,d\mu = \sum_k c_k \mu(E_k)
$$

**일반 함수**: 단순함수의 단조증가 수열로 근사.

### 수렴 정리

**단조 수렴 정리**: $0 \leq f_1 \leq f_2 \leq \cdots \to f$ (a.e.)이면

$$
\lim_{n\to\infty}\int f_n\,d\mu = \int f\,d\mu
$$

**지배 수렴 정리**: $|f_n| \leq g$ (a.e., $\int g < \infty$)이고 $f_n \to f$ (a.e.)이면

$$
\lim_{n\to\infty}\int f_n\,d\mu = \int f\,d\mu
$$

리만 적분에서는 극한과 적분의 교환에 강한 조건이 필요하지만, 르베그 적분에서는 "지배 함수"가 하나 있으면 충분하다.

### $L^p$ 공간

$$
L^p(\mu) = \left\{f : \int |f|^p\,d\mu < \infty\right\}, \quad \|f\|_p = \left(\int|f|^p\,d\mu\right)^{1/p}
$$

$p=2$인 $L^2$ 공간은 내적이 정의되는 힐베르트 공간 → 함수의 "직교기저" 전개(푸리에 급수)가 가능.

---

## 연습문제

**문제 1.** $\varepsilon$-$\delta$로 $\lim_{x \to 3}(2x+1) = 7$을 증명하여라.

> **풀이**
>
> $|(2x+1) - 7| = |2x - 6| = 2|x-3|$
>
> 임의의 $\varepsilon > 0$에 대해 $\delta = \varepsilon/2$로 놓으면:
>
> $0 < |x-3| < \delta \implies |(2x+1)-7| = 2|x-3| < 2 \cdot \frac{\varepsilon}{2} = \varepsilon$ □

---

**문제 2.** $f_n(x) = x^n$ ($0 \leq x \leq 1$)의 점별 극한함수를 구하고 균등 수렴 여부를 판단하여라.

> **풀이**
>
> $f(x) = \begin{cases}0 & 0 \leq x < 1 \\ 1 & x = 1\end{cases}$ (불연속)
>
> 각 $f_n$은 연속이지만 $f$는 불연속 → 균등 수렴하면 극한이 연속이어야 하므로 **균등 수렴하지 않는다**.
>
> 확인: $\sup_{x \in [0,1]}|x^n - f(x)| = \sup_{x \in [0,1)} x^n = 1 \not\to 0$

---

**문제 3.** $S = \left\{\dfrac{1}{n} \mid n \in \mathbb{N}\right\}$의 상한과 하한을 구하여라.

> **풀이**
>
> $\sup S = 1$ ($n=1$일 때 최댓값 = 상한)
>
> $\inf S = 0$ ($S$에 0은 없지만, $\dfrac{1}{n} \to 0$이고 모든 $s \in S$에 대해 $s > 0$이므로 하한은 0. 달성되지 않는 하한.)

---

**문제 4.** $\sum_{n=0}^{\infty} x^n = \dfrac{1}{1-x}$ ($|x|<1$)에서 항별 적분이 가능한지 논하고, $\displaystyle\int_0^{1/2} \dfrac{1}{1-x}\,dx$를 급수로 표현하여라.

> **풀이**
>
> $f_n(x) = x^n$이고 $[0, 1/2]$에서 균등 수렴한다: $\sup|x^n| \leq (1/2)^n \to 0$.
>
> 균등 수렴하므로 항별 적분 가능:
>
> $\displaystyle\int_0^{1/2} \sum_{n=0}^{\infty} x^n\,dx = \sum_{n=0}^{\infty} \int_0^{1/2} x^n\,dx = \sum_{n=0}^{\infty} \frac{(1/2)^{n+1}}{n+1} = \sum_{n=1}^{\infty} \frac{1}{n \cdot 2^n}$
>
> 한편 $\displaystyle\int_0^{1/2} \dfrac{1}{1-x}\,dx = \Big[-\ln(1-x)\Big]_0^{1/2} = \ln 2$, 이므로 $\ln 2 = \displaystyle\sum_{n=1}^{\infty} \dfrac{1}{n \cdot 2^n}$
