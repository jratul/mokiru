---
title: "수학Ⅱ"
description: "함수의 극한, 연속, 미분, 적분을 다룹니다."
date: "2026-04-06"
subject: "math"
category: "고등수학"
level: "high"
tags: ["극한", "연속", "미분", "적분", "고등수학"]
---

수학Ⅱ는 고등 수학의 핵심이다. 극한·미분·적분의 아이디어는 [고등 미적분](/math/high/calculus)에서 더 깊이 다루고, [대학 미적분학](/math/university/calculus)에서 엄밀하게 확장된다. 이 내용은 [물리학](/science/physics/high)의 운동, [AI 수학 미적분](/math/ai-math/calculus)의 역전파에도 직접 쓰인다.

---

## 함수의 극한

### 직관적 정의

$x$가 $a$에 가까워질 때(단, $x \ne a$) $f(x)$가 $L$에 가까워지면:

$$
\lim_{x \to a} f(x) = L
$$

"$x \to a$일 때 $f(x)$의 극한은 $L$"이라 읽는다.

**중요**: 극한은 $x = a$에서의 값 $f(a)$와 관계 없다. $f(a)$가 정의되지 않아도 극한이 존재할 수 있다.

### 좌극한과 우극한

$$
\lim_{x \to a^-} f(x) = L_- \quad \text{(좌극한, 왼쪽에서 접근)}
$$

$$
\lim_{x \to a^+} f(x) = L_+ \quad \text{(우극한, 오른쪽에서 접근)}
$$

$$
\lim_{x \to a} f(x) = L \iff L_- = L_+ = L
$$

### 극한의 기본 정리

$\lim_{x\to a} f(x) = L$, $\lim_{x\to a} g(x) = M$이면:

$$
\lim_{x \to a}[f(x) \pm g(x)] = L \pm M
$$

$$
\lim_{x \to a} f(x) \cdot g(x) = L \cdot M
$$

$$
\lim_{x \to a} \frac{f(x)}{g(x)} = \frac{L}{M} \quad (M \ne 0)
$$

$$
\lim_{x \to a} [c \cdot f(x)] = c \cdot L
$$

### 부정형의 처리

극한 계산에서 $\dfrac{0}{0}$, $\dfrac{\infty}{\infty}$, $\infty - \infty$ 형태가 나오면 변형이 필요하다.

**$\dfrac{0}{0}$ 형**: 분자·분모를 인수분해하여 공통 인수 약분

**예제.** $\lim_{x \to 2} \dfrac{x^2 - 4}{x - 2} = \lim_{x \to 2} \dfrac{(x-2)(x+2)}{x-2} = \lim_{x \to 2}(x+2) = 4$

**$\dfrac{\infty}{\infty}$ 형**: 최고차항으로 나누기

**예제.** $\lim_{x \to \infty} \dfrac{3x^2 + 2x}{2x^2 - 1} = \lim_{x \to \infty} \dfrac{3 + 2/x}{2 - 1/x^2} = \dfrac{3}{2}$

### 중요한 극한

$$
\lim_{x \to 0} \frac{\sin x}{x} = 1 \quad (\text{$x$는 라디안})
$$

$$
\lim_{x \to \infty}\left(1 + \frac{1}{x}\right)^x = e \approx 2.71828\ldots
$$

$$
\lim_{x \to 0} \frac{\ln(1+x)}{x} = 1, \qquad \lim_{x \to 0} \frac{e^x - 1}{x} = 1
$$

$e$는 자연상수(자연로그의 밑). [대학 미적분학](/math/university/calculus)에서 더 자세히 다룬다.

---

## 함수의 연속

### 연속의 정의

$f$가 $x = a$에서 **연속**이려면 세 조건이 모두 성립해야 한다:

1. $f(a)$가 정의되어 있다 (함수값 존재)
2. $\lim_{x \to a} f(x)$가 존재한다 (극한값 존재)
3. $\lim_{x \to a} f(x) = f(a)$ (극한값 = 함수값)

세 조건 중 하나라도 안 되면 **불연속**.

**예제.** $f(x) = \dfrac{x^2 - 1}{x - 1}$은 $x = 1$에서 $f(1)$이 정의되지 않으므로 불연속. 하지만 $f(1) = 2$로 정의를 보완하면 연속이 된다.

### 연속함수의 성질

- 다항함수는 모든 실수에서 연속
- 유리함수는 분모가 0이 되는 점을 제외하고 연속
- $\sin x$, $\cos x$, $e^x$, $\ln x$ ($x > 0$) 모두 연속

**최댓값·최솟값 정리**: 닫힌 구간 $[a, b]$에서 연속인 함수는 반드시 최댓값과 최솟값을 갖는다.

**사이값 정리(중간값 정리)**: $f$가 $[a, b]$에서 연속이고 $f(a) \ne f(b)$이면, $f(a)$와 $f(b)$ 사이의 모든 값 $k$에 대해 $f(c) = k$인 $c \in (a, b)$가 존재한다. 방정식의 실근 존재 여부 판별에 사용된다.

---

## 미분

### 미분계수 (순간변화율)

$$
f'(a) = \lim_{h \to 0} \frac{f(a+h) - f(a)}{h}
$$

이는 $x = a$에서 $y = f(x)$의 **기울기**, 즉 **순간변화율**이다. 물리적으로는 시간에 대한 위치의 순간변화율 = **속도**다.

**미분가능**하다 $\iff$ $f'(a)$가 존재한다 $\implies$ $f$는 $x = a$에서 연속.

역은 성립하지 않는다. 예: $f(x) = |x|$는 $x = 0$에서 연속이지만 미분불가능.

### 도함수

$$
f'(x) = \lim_{h \to 0} \frac{f(x+h) - f(x)}{h}
$$

$y = f(x)$의 도함수를 $f'(x)$, $y'$, $\dfrac{dy}{dx}$, $\dfrac{d}{dx}f(x)$로 표기한다.

### 미분 공식

$$
(c)' = 0 \quad \text{(상수)}
$$

$$
(x^n)' = nx^{n-1} \quad \text{(거듭제곱, $n$은 실수)}
$$

$$
(e^x)' = e^x, \qquad (a^x)' = a^x \ln a
$$

$$
(\ln x)' = \frac{1}{x}, \qquad (\log_a x)' = \frac{1}{x \ln a}
$$

$$
(\sin x)' = \cos x, \qquad (\cos x)' = -\sin x, \qquad (\tan x)' = \sec^2 x
$$

**합·차·곱의 미분**:

$$
(f \pm g)' = f' \pm g'
$$

$$
(fg)' = f'g + fg' \quad \text{(라이프니츠 규칙)}
$$

$$
\left(\frac{f}{g}\right)' = \frac{f'g - fg'}{g^2}
$$

**연쇄 법칙 (합성함수 미분)**:

$$
\{f(g(x))\}' = f'(g(x)) \cdot g'(x)
$$

예: $(\sin(x^2))' = \cos(x^2) \cdot 2x = 2x\cos(x^2)$

### 고계 도함수

2차 도함수: $f''(x) = \dfrac{d^2y}{dx^2}$ — 곡선의 오목/볼록을 나타냄

$f''(x) > 0$: 아래로 볼록 (concave up), $f''(x) < 0$: 위로 볼록 (concave down)

### 접선의 방정식

$y = f(x)$ 위의 점 $(a, f(a))$에서의 접선:

$$
y - f(a) = f'(a)(x - a)
$$

### 함수의 증감과 극값

| 조건 | 의미 |
|------|------|
| $f'(x) > 0$ on $(a, b)$ | $f$는 $(a, b)$에서 증가 |
| $f'(x) < 0$ on $(a, b)$ | $f$는 $(a, b)$에서 감소 |
| $f'(a) = 0$ + 부호 변화 | $x = a$에서 극값 |

**극대**: $f'(a) = 0$이고 $x = a$ 근방에서 $f' : + \to -$ 변화  
**극소**: $f'(a) = 0$이고 $x = a$ 근방에서 $f' : - \to +$ 변화

$f'(a) = 0$이지만 부호 변화 없으면 극값이 아니다. 예: $f(x) = x^3$에서 $f'(0) = 0$이지만 극값 없음.

### 최댓값·최솟값 (닫힌 구간)

$f$가 $[a, b]$에서 연속이면, 최댓값과 최솟값은 다음 후보 중에 있다:
1. 극값 (내부 임계점: $f'(x) = 0$ 또는 미분불가능한 점)
2. 끝점 $f(a)$, $f(b)$

---

## 적분

### 부정적분

$F'(x) = f(x)$이면 $F(x)$를 $f(x)$의 **원시함수(antiderivative)**라 하고:

$$
\int f(x)\,dx = F(x) + C \quad \text{($C$: 적분상수)}
$$

**기본 공식**:

$$
\int x^n\,dx = \frac{x^{n+1}}{n+1} + C \quad (n \ne -1)
$$

$$
\int e^x\,dx = e^x + C, \qquad \int a^x\,dx = \frac{a^x}{\ln a} + C
$$

$$
\int \frac{1}{x}\,dx = \ln|x| + C
$$

$$
\int \sin x\,dx = -\cos x + C, \qquad \int \cos x\,dx = \sin x + C
$$

$$
\int \sec^2 x\,dx = \tan x + C
$$

**성질**:

$$
\int [af(x) + bg(x)]\,dx = a\int f(x)\,dx + b\int g(x)\,dx
$$

### 정적분

$$
\int_a^b f(x)\,dx = F(b) - F(a) \quad \text{(미적분학의 기본 정리)}
$$

단, $F'(x) = f(x)$. 이 정리가 미분과 적분을 연결하는 핵심이다.

**넓이와 정적분**:
- $f(x) \geq 0$이면 $\int_a^b f(x)\,dx$ = $x$축과 $f(x)$ 사이의 넓이
- 두 함수 사이의 넓이: $S = \int_a^b |f(x) - g(x)|\,dx$

**정적분의 성질**:

$$
\int_a^b f(x)\,dx = -\int_b^a f(x)\,dx
$$

$$
\int_a^a f(x)\,dx = 0
$$

$$
\int_a^b f(x)\,dx = \int_a^c f(x)\,dx + \int_c^b f(x)\,dx
$$

### 치환적분

$x = g(t)$로 치환하면 $dx = g'(t)\,dt$:

$$
\int f(x)\,dx = \int f(g(t)) g'(t)\,dt
$$

예: $\int 2x e^{x^2}\,dx$에서 $u = x^2$, $du = 2x\,dx$로 놓으면 $= \int e^u\,du = e^u + C = e^{x^2} + C$

### 부분적분

$$
\int u\,dv = uv - \int v\,du
$$

$$
\int f(x)g'(x)\,dx = f(x)g(x) - \int f'(x)g(x)\,dx
$$

선택 순서 (LIATE): **L**ogarithm, **I**nverse trig, **A**lgebraic, **T**rigonometric, **E**xponential

예: $\int x e^x\,dx$에서 $u = x$, $dv = e^x\,dx$로 놓으면 $= xe^x - \int e^x\,dx = xe^x - e^x + C = e^x(x-1) + C$

---

## 연습문제

**문제 1.** $f(x) = x^3 - 3x$의 극값을 구하여라.

> **풀이**
>
> $f'(x) = 3x^2 - 3 = 3(x-1)(x+1) = 0 \implies x = \pm 1$
>
> | $x$ | $\cdots$ | $-1$ | $\cdots$ | $1$ | $\cdots$ |
> |-----|----------|------|----------|-----|----------|
> | $f'$ | $+$ | $0$ | $-$ | $0$ | $+$ |
> | $f$ | ↗ | 극대 | ↘ | 극소 | ↗ |
>
> - 극댓값: $f(-1) = -1 + 3 = 2$
> - 극솟값: $f(1) = 1 - 3 = -2$

---

**문제 2.** $\displaystyle\int_0^2 (3x^2 - 2x + 1)\,dx$를 계산하여라.

> **풀이**
>
> $\displaystyle\int_0^2 (3x^2 - 2x + 1)\,dx = \Big[x^3 - x^2 + x\Big]_0^2 = (8 - 4 + 2) - 0 = 6$

---

**문제 3.** $y = x^2$과 $y = x + 2$로 둘러싸인 넓이를 구하여라.

> **풀이**
>
> 교점: $x^2 = x + 2 \implies (x-2)(x+1) = 0 \implies x = -1, 2$
>
> $-1 \leq x \leq 2$에서 $x + 2 \geq x^2$이므로
>
> $S = \displaystyle\int_{-1}^{2}(x + 2 - x^2)\,dx = \left[\dfrac{x^2}{2} + 2x - \dfrac{x^3}{3}\right]_{-1}^{2} = \left(2 + 4 - \dfrac{8}{3}\right) - \left(\dfrac{1}{2} - 2 + \dfrac{1}{3}\right) = \dfrac{9}{2}$

---

**문제 4.** $f(x) = x^3 + 3x^2 - 9x + 1$의 극대, 극소를 구하고, 닫힌 구간 $[-4, 3]$에서의 최댓값과 최솟값을 구하여라.

> **풀이**
>
> $f'(x) = 3x^2 + 6x - 9 = 3(x+3)(x-1)$
>
> $f'(x) = 0 \implies x = -3, 1$
>
> | $x$ | $-4$ | $\cdots$ | $-3$ | $\cdots$ | $1$ | $\cdots$ | $3$ |
> |-----|------|----------|------|----------|-----|----------|-----|
> | $f'$ | | $+$ | $0$ | $-$ | $0$ | $+$ | |
>
> 극댓값: $f(-3) = -27 + 27 + 27 + 1 = 28$  
> 극솟값: $f(1) = 1 + 3 - 9 + 1 = -4$
>
> 끝점: $f(-4) = -64 + 48 + 36 + 1 = 21$, $f(3) = 27 + 27 - 27 + 1 = 28$
>
> **최댓값** = $28$ ($x = -3$ 또는 $x = 3$에서), **최솟값** = $-4$ ($x = 1$에서)

---

**문제 5.** $\displaystyle\int x\sin x\,dx$를 구하여라.

> **풀이**
>
> 부분적분: $u = x$, $dv = \sin x\,dx$으로 놓으면 $du = dx$, $v = -\cos x$
>
> $\int x\sin x\,dx = -x\cos x - \int(-\cos x)\,dx = -x\cos x + \sin x + C$
