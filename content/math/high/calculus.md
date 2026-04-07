---
title: "미적분"
description: "수열의 극한, 급수, 지수·로그·삼각함수의 미분법, 치환·부분 적분법을 다룹니다."
date: "2026-04-06"
subject: "math"
category: "고등수학"
level: "high"
tags: ["미적분", "급수", "치환적분", "부분적분", "역삼각함수", "고등수학"]
---

고등 미적분은 [수학Ⅱ](/math/high/math2)의 극한·미분·적분을 심화한다. 여기서 다루는 지수·로그·삼각함수의 미분과 급수의 수렴은 [대학 미적분학](/math/university/calculus)의 테일러급수·다변수미분의 직접적인 토대가 된다.

---

## 수열의 극한

### 수렴과 발산

수열 $\{a_n\}$이 $n \to \infty$일 때 일정한 값 $L$에 한없이 가까워지면 **수렴(converge)**:

$$
\lim_{n \to \infty} a_n = L
$$

수렴하지 않으면 **발산(diverge)**: 양의 무한대($+\infty$), 음의 무한대($-\infty$), 또는 진동.

**수렴의 사칙연산** ($\lim a_n = L$, $\lim b_n = M$이면):

$$
\lim (a_n \pm b_n) = L \pm M, \quad \lim a_n b_n = LM, \quad \lim \frac{a_n}{b_n} = \frac{L}{M} \; (M \ne 0)
$$

**샌드위치 정리**: $a_n \leq b_n \leq c_n$이고 $\lim a_n = \lim c_n = L$이면 $\lim b_n = L$.

### 등비수열 $r^n$의 수렴·발산

| $r$ 범위 | 극한 |
|---------|------|
| $r > 1$ | $+\infty$ (발산) |
| $r = 1$ | 1 (수렴) |
| $|r| < 1$ | 0 (수렴) |
| $r = -1$ | 진동 (발산) |
| $r < -1$ | 진동·발산 |

**자주 쓰는 극한**:

$$
\lim_{n \to \infty} \frac{1}{n} = 0, \qquad \lim_{n \to \infty} \sqrt[n]{n} = 1, \qquad \lim_{n \to \infty} \left(1 + \frac{1}{n}\right)^n = e
$$

$$
\lim_{n \to \infty} \frac{a_n}{b_n} \text{ 형태에서 최고차항으로 나눈다}
$$

---

## 급수

### 무한급수의 수렴

$$
\sum_{n=1}^{\infty} a_n = \lim_{N \to \infty} S_N, \quad S_N = \sum_{n=1}^{N} a_n
$$

**수렴의 필요조건**: $\sum a_n$이 수렴 $\implies$ $\lim_{n\to\infty} a_n = 0$.  
역은 성립하지 않는다: $\sum \dfrac{1}{n}$은 $\dfrac{1}{n} \to 0$이지만 발산(조화급수).

### 등비급수

첫째항 $a$, 공비 $r$인 등비급수:

$$
\sum_{n=1}^{\infty} ar^{n-1} = \frac{a}{1-r} \quad (|r| < 1)
$$

**유도**: $S = a + ar + ar^2 + \cdots$에서 $rS = ar + ar^2 + \cdots$이므로 $S - rS = a$, $S = \dfrac{a}{1-r}$.

**예제.** $\displaystyle\sum_{n=1}^{\infty} \frac{3}{2^n}$

첫째항 $= \dfrac{3}{2}$, 공비 $= \dfrac{1}{2}$이므로 $S = \dfrac{3/2}{1 - 1/2} = 3$

**순환소수와 등비급수**: $0.\overline{3} = 0.333\ldots = \dfrac{3}{10} + \dfrac{3}{100} + \cdots = \dfrac{3/10}{1-1/10} = \dfrac{1}{3}$

### 급수의 수렴 판정

수학Ⅱ 수준에서는 등비급수가 주된 대상이지만, 대학에서는 비율판정, 적분판정, 비교판정 등을 배운다. 자세한 내용은 [대학 미적분학](/math/university/calculus) 참고.

---

## 미분법 심화

### 지수함수와 로그함수의 미분

[수학Ⅱ](/math/high/math2)에서 다룬 공식을 복습하고 심화 적용:

$$
(e^x)' = e^x, \qquad (a^x)' = a^x \ln a
$$

$$
(\ln x)' = \frac{1}{x}, \qquad (\log_a x)' = \frac{1}{x \ln a}
$$

**로그 미분법**: 곱이나 복잡한 지수의 도함수를 구할 때 양변에 로그를 취한 후 미분한다.

$$
y = x^x \implies \ln y = x \ln x \implies \frac{y'}{y} = \ln x + 1 \implies y' = x^x(\ln x + 1)
$$

### 삼각함수의 미분

$$
(\sin x)' = \cos x, \quad (\cos x)' = -\sin x, \quad (\tan x)' = \sec^2 x
$$

$$
(\sec x)' = \sec x \tan x, \quad (\csc x)' = -\csc x \cot x, \quad (\cot x)' = -\csc^2 x
$$

**연쇄 법칙 적용**:

$$
(\sin 2x)' = \cos 2x \cdot 2 = 2\cos 2x
$$

$$
(e^{\sin x})' = e^{\sin x} \cdot \cos x
$$

### 역함수의 미분

$y = f^{-1}(x)$이면:

$$
\{f^{-1}(x)\}' = \frac{1}{f'(f^{-1}(x))}
$$

**역삼각함수의 도함수**:

$$
(\arcsin x)' = \frac{1}{\sqrt{1-x^2}} \quad (|x| < 1)
$$

$$
(\arccos x)' = -\frac{1}{\sqrt{1-x^2}} \quad (|x| < 1)
$$

$$
(\arctan x)' = \frac{1}{1+x^2}
$$

**유도 예시** ($y = \arcsin x$): $\sin y = x$이고 $\cos y \cdot y' = 1$이므로 $y' = \dfrac{1}{\cos y} = \dfrac{1}{\sqrt{1-\sin^2 y}} = \dfrac{1}{\sqrt{1-x^2}}$

### 매개변수 미분

$x = f(t)$, $y = g(t)$로 나타낸 곡선에서:

$$
\frac{dy}{dx} = \frac{dy/dt}{dx/dt} = \frac{g'(t)}{f'(t)}
$$

**예**: 원 $x = \cos t$, $y = \sin t$에서 $\dfrac{dy}{dx} = \dfrac{\cos t}{-\sin t} = -\cot t$

---

## 적분법 심화

### 치환적분

$u = g(x)$로 치환 ($du = g'(x)\,dx$):

$$
\int f(g(x)) g'(x)\,dx = \int f(u)\,du
$$

**자주 쓰는 패턴**:

$$
\int \frac{f'(x)}{f(x)}\,dx = \ln|f(x)| + C
$$

$$
\int f(x)^n f'(x)\,dx = \frac{f(x)^{n+1}}{n+1} + C \quad (n \ne -1)
$$

**예제.** $\displaystyle\int \tan x\,dx$

$= \displaystyle\int \dfrac{\sin x}{\cos x}\,dx$. $u = \cos x$, $du = -\sin x\,dx$로 놓으면

$= -\displaystyle\int \dfrac{du}{u} = -\ln|\cos x| + C = \ln|\sec x| + C$

### 부분적분

$$
\int u\,dv = uv - \int v\,du
$$

**LIATE 순서**: **L**og > **I**nverse trig > **A**lgebraic > **T**rig > **E**xponential

→ 왼쪽 것을 $u$로, 오른쪽 것을 $dv$로 설정.

**예제.** $\displaystyle\int \ln x\,dx$

$u = \ln x$, $dv = dx$ → $du = \dfrac{1}{x}dx$, $v = x$

$= x\ln x - \displaystyle\int x \cdot \dfrac{1}{x}\,dx = x\ln x - x + C$

**반복 부분적분**: $\displaystyle\int x^2 e^x\,dx$처럼 다항과 지수의 곱은 두 번 부분적분.

### 삼각치환

$\sqrt{a^2 - x^2}$ → $x = a\sin\theta$  
$\sqrt{a^2 + x^2}$ → $x = a\tan\theta$  
$\sqrt{x^2 - a^2}$ → $x = a\sec\theta$

**예제.** $\displaystyle\int \dfrac{1}{\sqrt{1-x^2}}\,dx$

$x = \sin\theta$, $dx = \cos\theta\,d\theta$로 치환하면 $\displaystyle\int \dfrac{\cos\theta}{\cos\theta}\,d\theta = \theta + C = \arcsin x + C$

---

## 연습문제

**문제 1.** $\displaystyle\sum_{n=1}^{\infty} \frac{3}{2^n}$을 구하여라.

> **풀이**
>
> 첫째항 $a = \dfrac{3}{2}$, 공비 $r = \dfrac{1}{2}$인 등비급수
>
> $S = \dfrac{3/2}{1 - 1/2} = \dfrac{3/2}{1/2} = 3$

---

**문제 2.** $\displaystyle\int \frac{\ln x}{x}\,dx$를 구하여라.

> **풀이**
>
> $u = \ln x$로 놓으면 $du = \dfrac{1}{x}\,dx$
>
> $\displaystyle\int u\,du = \dfrac{u^2}{2} + C = \dfrac{(\ln x)^2}{2} + C$

---

**문제 3.** $\displaystyle\int_0^{\pi} x\sin x\,dx$를 구하여라.

> **풀이**
>
> $u = x$, $dv = \sin x\,dx$ → $du = dx$, $v = -\cos x$
>
> $\Big[-x\cos x\Big]_0^{\pi} + \displaystyle\int_0^{\pi} \cos x\,dx = \pi + \Big[\sin x\Big]_0^{\pi} = \pi + 0 = \pi$

---

**문제 4.** $y = x^x$의 도함수를 구하여라.

> **풀이**
>
> 로그 미분법: $\ln y = x\ln x$
>
> 양변을 $x$로 미분: $\dfrac{y'}{y} = \ln x + x \cdot \dfrac{1}{x} = \ln x + 1$
>
> $y' = y(\ln x + 1) = x^x(\ln x + 1)$

---

**문제 5.** $\displaystyle\sum_{n=2}^{\infty} \frac{1}{n^2 - 1}$을 구하여라. (부분분수 이용)

> **풀이**
>
> $\dfrac{1}{n^2-1} = \dfrac{1}{(n-1)(n+1)} = \dfrac{1}{2}\left(\dfrac{1}{n-1} - \dfrac{1}{n+1}\right)$ (부분분수 분해)
>
> 부분합 $S_N = \dfrac{1}{2}\left[\left(1 - \dfrac{1}{3}\right) + \left(\dfrac{1}{2} - \dfrac{1}{4}\right) + \left(\dfrac{1}{3} - \dfrac{1}{5}\right) + \cdots\right]$
>
> 망원급수 정리하면 $S_N = \dfrac{1}{2}\left(1 + \dfrac{1}{2} - \dfrac{1}{N} - \dfrac{1}{N+1}\right)$
>
> $\therefore \displaystyle\sum_{n=2}^{\infty} \dfrac{1}{n^2-1} = \dfrac{1}{2} \times \dfrac{3}{2} = \dfrac{3}{4}$
