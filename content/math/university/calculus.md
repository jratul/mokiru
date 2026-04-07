---
title: "미적분학"
description: "수열·급수의 수렴 판정, 테일러급수, 편미분, 중적분, 벡터미적분을 다룹니다."
date: "2026-04-06"
subject: "math"
category: "미적분학"
level: "university"
tags: ["미적분학", "편미분", "중적분", "테일러급수", "그린정리", "대학수학"]
---

대학 미적분학은 [고등 수학Ⅱ](/math/high/math2)·[고등 미적분](/math/high/calculus)을 엄밀하게 확장한다. 1변수 미적분 → 다변수 → 벡터장으로 이어지는 흐름을 파악하는 것이 핵심이다. 편미분은 [AI 수학 미적분](/math/ai-math/calculus)의 역전파, 벡터미적분은 [전자기학](/science/physics/university/electromagnetism)의 맥스웰 방정식의 언어다.

---

## 수열과 급수

### 급수 수렴 판정법

**비율 판정법 (Ratio Test)**: $L = \displaystyle\lim_{n\to\infty}\left|\dfrac{a_{n+1}}{a_n}\right|$

- $L < 1$: 절대 수렴
- $L > 1$: 발산
- $L = 1$: 판정 불능 (다른 방법 필요)

**비교 판정법**: $0 \leq a_n \leq b_n$이고 $\sum b_n$ 수렴 $\implies$ $\sum a_n$ 수렴

**적분 판정법**: $f$가 양수이고 감소할 때, $\sum_{n=1}^{\infty} f(n)$과 $\int_1^{\infty} f(x)\,dx$의 수렴·발산이 일치.

**교대급수 판정법**: $\sum (-1)^n b_n$에서 $b_n \searrow 0$ 이면 수렴.

**예제.** $\displaystyle\sum_{n=1}^{\infty} \dfrac{n}{2^n}$ 수렴 판정:

$L = \lim_{n\to\infty}\dfrac{(n+1)/2^{n+1}}{n/2^n} = \lim_{n\to\infty}\dfrac{n+1}{2n} = \dfrac{1}{2} < 1$ → **절대 수렴**

**조화급수** $\sum \dfrac{1}{n}$은 발산한다 (적분 판정: $\int_1^{\infty}\dfrac{1}{x}dx = \infty$).

**$p$-급수** $\sum \dfrac{1}{n^p}$: $p > 1$이면 수렴, $p \leq 1$이면 발산.

### 테일러 급수

함수 $f$를 $x = a$ 근방에서 무한 다항식으로 나타낸 것:

$$
f(x) = \sum_{n=0}^{\infty} \frac{f^{(n)}(a)}{n!}(x-a)^n
$$

$a = 0$이면 **매클로린 급수(Maclaurin series)**:

$$
e^x = \sum_{n=0}^{\infty}\frac{x^n}{n!} = 1 + x + \frac{x^2}{2!} + \frac{x^3}{3!} + \cdots \quad (\text{모든 } x)
$$

$$
\sin x = \sum_{n=0}^{\infty}\frac{(-1)^n x^{2n+1}}{(2n+1)!} = x - \frac{x^3}{6} + \frac{x^5}{120} - \cdots \quad (\text{모든 } x)
$$

$$
\cos x = \sum_{n=0}^{\infty}\frac{(-1)^n x^{2n}}{(2n)!} = 1 - \frac{x^2}{2} + \frac{x^4}{24} - \cdots \quad (\text{모든 } x)
$$

$$
\ln(1+x) = \sum_{n=1}^{\infty}\frac{(-1)^{n+1}x^n}{n} = x - \frac{x^2}{2} + \frac{x^3}{3} - \cdots \quad (-1 < x \leq 1)
$$

$$
\frac{1}{1-x} = \sum_{n=0}^{\infty} x^n = 1 + x + x^2 + \cdots \quad (|x| < 1)
$$

**응용**: $\lim_{x \to 0} \dfrac{\sin x - x}{x^3}$에서 $\sin x = x - \dfrac{x^3}{6} + \cdots$를 사용하면 $= -\dfrac{1}{6}$

**오일러 공식** (복소 지수):

$$
e^{i\theta} = \cos\theta + i\sin\theta \implies e^{i\pi} + 1 = 0
$$

---

## 다변수 함수

### 편미분

$f(x, y)$를 $x$에 대해 편미분할 때 $y$를 상수로 취급:

$$
f_x = \frac{\partial f}{\partial x} = \lim_{h \to 0} \frac{f(x+h, y) - f(x, y)}{h}
$$

$$
f_y = \frac{\partial f}{\partial y} = \lim_{h \to 0} \frac{f(x, y+h) - f(x, y)}{h}
$$

**2계 편미분**: $f_{xx} = \dfrac{\partial^2 f}{\partial x^2}$, $f_{xy} = \dfrac{\partial^2 f}{\partial x\,\partial y}$

**클레로의 정리**: $f_{xy}$와 $f_{yx}$가 연속이면 $f_{xy} = f_{yx}$ (혼합편미분 교환 가능)

**예제.** $f(x, y) = x^2 y + y^3$:

$f_x = 2xy$, $f_y = x^2 + 3y^2$, $f_{xx} = 2y$, $f_{xy} = 2x$

### 그래디언트 (기울기 벡터)

$$
\nabla f = \text{grad } f = \left(\frac{\partial f}{\partial x},\, \frac{\partial f}{\partial y},\, \frac{\partial f}{\partial z}\right)
$$

그래디언트는 함수가 **가장 빠르게 증가하는 방향**을 가리키며, 등위면에 **수직**이다.

**방향도함수**: 단위벡터 $\hat{u}$방향의 변화율: $D_{\hat{u}}f = \nabla f \cdot \hat{u}$

그래디언트는 [AI 수학 최적화](/math/ai-math/optimization)의 경사하강법에서 핵심 역할을 한다.

### 연쇄 법칙

$z = f(x, y)$, $x = x(t)$, $y = y(t)$이면:

$$
\frac{dz}{dt} = \frac{\partial f}{\partial x}\frac{dx}{dt} + \frac{\partial f}{\partial y}\frac{dy}{dt}
$$

$z = f(x, y)$, $x = x(s, t)$, $y = y(s, t)$이면:

$$
\frac{\partial z}{\partial s} = \frac{\partial f}{\partial x}\frac{\partial x}{\partial s} + \frac{\partial f}{\partial y}\frac{\partial y}{\partial s}
$$

### 극값 (2변수)

임계점 조건: $f_x = 0$ 이고 $f_y = 0$

판별식 $D = f_{xx}f_{yy} - (f_{xy})^2$:

| $D$ | $f_{xx}$ | 결론 |
|-----|---------|------|
| $D > 0$ | $> 0$ | 극솟값 |
| $D > 0$ | $< 0$ | 극댓값 |
| $D < 0$ | — | 안장점(saddle point) |
| $D = 0$ | — | 판정 불능 |

**라그랑주 승수법**: 조건 $g(x,y) = 0$ 하에서 $f$의 극값:

$$
\nabla f = \lambda \nabla g
$$

---

## 중적분

### 이중적분

$$
\iint_R f(x,y)\,dA = \int_a^b\int_{c}^{d} f(x,y)\,dy\,dx
$$

**푸비니 정리**: 연속 함수에 대해 적분 순서를 바꿀 수 있다 (단, 상한·하한도 바꿔야 함).

$$
\int_a^b\int_{g_1(x)}^{g_2(x)} f(x,y)\,dy\,dx = \int_c^d\int_{h_1(y)}^{h_2(y)} f(x,y)\,dx\,dy
$$

**예제.** $\displaystyle\iint_R x^2 y\,dA$, $R = [0,1] \times [0,2]$:

$$
\int_0^1 \int_0^2 x^2 y\,dy\,dx = \int_0^1 x^2 \left[\frac{y^2}{2}\right]_0^2 dx = \int_0^1 2x^2\,dx = \frac{2}{3}
$$

### 극좌표 치환

$x = r\cos\theta$, $y = r\sin\theta$이면 **야코비안(Jacobian)** $= r$:

$$
\iint_R f(x,y)\,dA = \iint_{R'} f(r\cos\theta, r\sin\theta)\, r\,dr\,d\theta
$$

**예제.** $\displaystyle\iint_D e^{-(x^2+y^2)}\,dA$, $D$: 원 $x^2 + y^2 \leq 1$

$$
= \int_0^{2\pi}\int_0^1 e^{-r^2} r\,dr\,d\theta = 2\pi \left[-\frac{e^{-r^2}}{2}\right]_0^1 = \pi(1 - e^{-1})
$$

**유명 결과**: $\displaystyle\int_{-\infty}^{\infty} e^{-x^2}\,dx = \sqrt{\pi}$ (가우스 적분, 정규분포의 기반)

### 삼중적분과 야코비안

야코비안 변환: $(x,y,z) \to (u,v,w)$일 때

$$
\iiint f(x,y,z)\,dV = \iiint f(x(u,v,w),\ldots)\,|J|\,du\,dv\,dw
$$

**원주좌표**: $x = r\cos\theta$, $y = r\sin\theta$, $z = z$, $|J| = r$

**구면좌표**: $x = \rho\sin\phi\cos\theta$, $y = \rho\sin\phi\sin\theta$, $z = \rho\cos\phi$, $|J| = \rho^2\sin\phi$

---

## 벡터미적분

### 기본 미분 연산자

벡터장 $\vec{F} = (P, Q, R)$, 스칼라 $f$:

$$
\text{div } \vec{F} = \nabla \cdot \vec{F} = \frac{\partial P}{\partial x} + \frac{\partial Q}{\partial y} + \frac{\partial R}{\partial z} \quad \text{(발산)}
$$

$$
\text{curl } \vec{F} = \nabla \times \vec{F} = \begin{vmatrix}\vec{i}&\vec{j}&\vec{k}\\\partial_x&\partial_y&\partial_z\\P&Q&R\end{vmatrix} \quad \text{(회전)}
$$

$$
\nabla^2 f = \frac{\partial^2 f}{\partial x^2} + \frac{\partial^2 f}{\partial y^2} + \frac{\partial^2 f}{\partial z^2} \quad \text{(라플라시안)}
$$

### 선적분

곡선 $C$: $\vec{r}(t)$, $t \in [a,b]$:

$$
\int_C \vec{F} \cdot d\vec{r} = \int_a^b \vec{F}(\vec{r}(t)) \cdot \vec{r}'(t)\,dt
$$

**보존장**: $\vec{F} = \nabla f$이면 $\int_C \vec{F} \cdot d\vec{r} = f(\vec{r}(b)) - f(\vec{r}(a))$ (경로 독립)

### 그린 정리 (Green's Theorem)

평면 영역 $D$와 그 경계 $C$ (반시계 방향):

$$
\oint_C P\,dx + Q\,dy = \iint_D\left(\frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y}\right)dA
$$

**넓이 계산**: $A = \dfrac{1}{2}\oint_C (x\,dy - y\,dx)$

### 발산 정리와 스토크스 정리

**발산 정리** (Gauss 정리): 폐곡면 $S$와 내부 $V$:

$$
\oiint_S \vec{F} \cdot d\vec{S} = \iiint_V (\nabla \cdot \vec{F})\,dV
$$

**스토크스 정리**: 곡면 $S$와 경계 $C$ (방향 일관):

$$
\oint_C \vec{F} \cdot d\vec{r} = \iint_S (\nabla \times \vec{F}) \cdot d\vec{S}
$$

그린 정리는 스토크스 정리의 2차원 특수 경우다. 이 정리들은 [전자기학](/science/physics/university/electromagnetism)에서 맥스웰 방정식의 적분 형태를 미분 형태로 변환하는 데 쓰인다.

---

## 연습문제

**문제 1.** $f(x,y) = x^2 y + y^3$의 $f_x$, $f_y$를 구하여라.

> **풀이**
>
> $f_x = 2xy$, $f_y = x^2 + 3y^2$

---

**문제 2.** $\displaystyle\iint_R x^2 y\,dA$를 구하여라. ($R = [0,1] \times [0,2]$)

> **풀이**
>
> $\displaystyle\int_0^1 \int_0^2 x^2 y\,dy\,dx = \int_0^1 x^2 \cdot 2\,dx = \int_0^1 2x^2\,dx = \dfrac{2}{3}$

---

**문제 3.** $f(x,y) = x^3 + y^3 - 3xy$의 극값을 구하여라.

> **풀이**
>
> $f_x = 3x^2 - 3y = 0 \implies y = x^2$
>
> $f_y = 3y^2 - 3x = 0 \implies y^2 = x$
>
> 연립: $x^4 = x \implies x(x^3 - 1) = 0 \implies x = 0, 1$
>
> 임계점: $(0,0)$, $(1,1)$
>
> $D = f_{xx}f_{yy} - f_{xy}^2 = (6x)(6y) - (-3)^2 = 36xy - 9$
>
> $(0,0)$: $D = -9 < 0$ → 안장점
>
> $(1,1)$: $D = 36 - 9 = 27 > 0$, $f_{xx} = 6 > 0$ → **극솟값** $f(1,1) = 1 + 1 - 3 = -1$

---

**문제 4.** 비율 판정법으로 $\displaystyle\sum_{n=1}^{\infty} \dfrac{n}{2^n}$의 수렴 여부를 확인하고 합을 구하여라.

> **풀이**
>
> $L = \dfrac{1}{2} < 1$ → 수렴 (문제 3과 동일)
>
> 합: $S = \displaystyle\sum_{n=1}^{\infty} \dfrac{n}{2^n}$. $\dfrac{x}{(1-x)^2} = \displaystyle\sum_{n=1}^{\infty} nx^n$ ($|x| < 1$)에서 $x = \dfrac{1}{2}$를 대입하면
>
> $S = \dfrac{1/2}{(1-1/2)^2} = \dfrac{1/2}{1/4} = 2$
