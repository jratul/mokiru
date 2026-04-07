---
title: "편미분방정식"
description: "PDE 분류, 열방정식, 파동방정식, 라플라스 방정식과 분리변수법, 푸리에 급수 해법을 다룹니다."
date: "2026-04-06"
subject: "math"
category: "공학수학"
level: "university"
tags: ["편미분방정식", "PDE", "열방정식", "파동방정식", "라플라스방정식", "분리변수법", "공학수학"]
---

편미분방정식(PDE)은 두 개 이상의 독립 변수에 대한 편미분을 포함하는 방정식이다. [대학 미적분학](/math/university/calculus)의 편미분과 다중적분, [상미분방정식](/math/university/ode)의 ODE 풀이, [푸리에 해석](/math/engineering-math/fourier)의 급수 전개가 모두 합쳐지는 최종 관문이다. 물리학의 열전도, 파동, 정전기장, 유체역학, 양자역학의 슈뢰딩거 방정식이 모두 PDE로 기술된다.

---

## PDE의 분류

### 기본 분류

2계 선형 PDE $Au_{xx} + Bu_{xy} + Cu_{yy} + Du_x + Eu_y + Fu = G$의 판별식 $\Delta = B^2 - 4AC$:

| $\Delta$ | 분류 | 대표 방정식 | 물리적 의미 |
|---------|------|-----------|-----------|
| $< 0$ | 타원형 (elliptic) | 라플라스·포아송 방정식 | 정상 상태 (steady state) |
| $= 0$ | 포물형 (parabolic) | 열방정식·확산방정식 | 시간에 따른 확산 |
| $> 0$ | 쌍곡형 (hyperbolic) | 파동방정식 | 파동 전파 |

**타원형** — $u_{xx} + u_{yy} = 0$: 시간 없음, 공간적 균형 상태.

**포물형** — $u_t = ku_{xx}$: 시간과 한 공간 변수. 파라볼릭 특성곡선(모두 평행).

**쌍곡형** — $u_{tt} = c^2 u_{xx}$: 두 방향의 특성곡선이 교차. 정보가 유한 속도 $c$로 전파.

### 경계 조건과 초기 조건

**디리클레(Dirichlet) 조건**: 경계에서 함수값 지정 $u = g$ on $\partial\Omega$

**노이만(Neumann) 조건**: 경계에서 법선 방향 도함수 지정 $\partial u/\partial n = g$ on $\partial\Omega$

**초기 조건**: 시간에 관한 PDE에서 $t = 0$에서의 상태.

---

## 분리변수법

PDE 풀이의 핵심 기법. $u(x,t) = X(x)T(t)$로 변수를 분리한다.

### 원리

$u = X(x)T(t)$를 PDE에 대입하면 좌변은 $x$만의 함수, 우변은 $t$만의 함수가 되므로 둘 다 상수(분리 상수 $-\lambda$)이어야 한다:

$$
\frac{X''}{X} = \frac{T'}{kT} = -\lambda
$$

이렇게 PDE가 두 개의 ODE로 분리된다.

### 고유값 문제 (Sturm-Liouville)

경계 조건 $X(0) = X(L) = 0$을 가진 $X'' + \lambda X = 0$:

- $\lambda \leq 0$이면 자명해(trivial solution) $X = 0$만 존재
- $\lambda > 0$: $X = A\cos\sqrt{\lambda}x + B\sin\sqrt{\lambda}x$

$X(0) = 0 \Rightarrow A = 0$, $X(L) = 0 \Rightarrow B\sin\sqrt{\lambda}L = 0$

$B \ne 0$이려면 $\sqrt{\lambda}L = n\pi$, 즉 **고유값** $\lambda_n = \left(\dfrac{n\pi}{L}\right)^2$, **고유함수** $X_n = \sin\dfrac{n\pi x}{L}$.

이 고유함수들은 [푸리에 해석](/math/engineering-math/fourier)에서 다룬 직교 함수계를 이룬다.

---

## 열방정식

### 1차원 열방정식

$$
\frac{\partial u}{\partial t} = k\frac{\partial^2 u}{\partial x^2}, \quad 0 < x < L, \; t > 0
$$

$u(x,t)$: 위치 $x$, 시각 $t$에서의 온도. $k > 0$: 열확산율.

**경계 조건**: $u(0,t) = u(L,t) = 0$ (양 끝을 $0°C$로 유지)

**초기 조건**: $u(x,0) = f(x)$

**풀이 과정**:

1. $u = X(x)T(t)$ 대입:

$$
XT' = kX''T \implies \frac{T'}{kT} = \frac{X''}{X} = -\lambda
$$

2. $X'' + \lambda X = 0$, $X(0) = X(L) = 0$ → 고유값 $\lambda_n = (n\pi/L)^2$, 고유함수 $\sin(n\pi x/L)$

3. $T' + k\lambda_n T = 0$ → $T_n(t) = e^{-k(n\pi/L)^2 t}$

4. **일반해** (중첩):

$$
u(x,t) = \sum_{n=1}^{\infty} B_n \sin\frac{n\pi x}{L} \cdot e^{-k(n\pi/L)^2 t}
$$

5. 초기 조건 $u(x,0) = f(x)$에서 $B_n$은 푸리에 사인 계수:

$$
B_n = \frac{2}{L}\int_0^L f(x)\sin\frac{n\pi x}{L}\,dx
$$

**물리적 해석**: 각 모드 $B_n \sin(n\pi x/L)$는 시간이 지남에 따라 지수적으로 감쇠한다. 높은 주파수(큰 $n$) 모드가 더 빨리 감쇠 → 초기 불균일 온도 분포가 시간이 지나면서 균일화된다.

### 비균일 경계 조건

$u(0,t) = T_1$, $u(L,t) = T_2$인 경우: 정상 상태 $u_s(x) = T_1 + (T_2 - T_1)x/L$을 빼서 동차 경계 조건으로 변환.

$v(x,t) = u(x,t) - u_s(x)$로 놓으면 $v$는 위의 동차 문제를 만족한다.

---

## 파동방정식

### 1차원 파동방정식

$$
\frac{\partial^2 u}{\partial t^2} = c^2 \frac{\partial^2 u}{\partial x^2}
$$

$u(x,t)$: 현의 변위. $c = \sqrt{T/\rho}$ (장력/선밀도)

경계 조건: $u(0,t) = u(L,t) = 0$

초기 조건: $u(x,0) = f(x)$ (초기 변위), $u_t(x,0) = g(x)$ (초기 속도)

**분리변수법 해**:

$$
u(x,t) = \sum_{n=1}^{\infty} \sin\frac{n\pi x}{L}\left(A_n\cos\frac{n\pi ct}{L} + B_n\sin\frac{n\pi ct}{L}\right)
$$

$$
A_n = \frac{2}{L}\int_0^L f(x)\sin\frac{n\pi x}{L}\,dx
$$

$$
B_n = \frac{2}{n\pi c}\int_0^L g(x)\sin\frac{n\pi x}{L}\,dx
$$

**현의 진동수**: $\omega_n = n\pi c/L$. 기본 진동수 $\omega_1$의 정수배 배음(harmonics).

### 달랑베르 공식 (무한 영역)

경계 조건 없이 $-\infty < x < \infty$에서:

$$
u(x,t) = \frac{1}{2}[f(x+ct) + f(x-ct)] + \frac{1}{2c}\int_{x-ct}^{x+ct}g(s)\,ds
$$

- $f(x+ct)$: 왼쪽으로 속도 $c$로 이동하는 파
- $f(x-ct)$: 오른쪽으로 속도 $c$로 이동하는 파

초기 변위만 있는 경우($g=0$): 파형이 반으로 갈라져 양방향으로 이동.

**특성곡선(characteristics)**: $x \pm ct = \text{const}$. 파동이 이 선을 따라 전파된다. 상대성 이론에서 빛의 원뿔(light cone)과 동일한 구조.

---

## 라플라스 방정식

### 정의와 의미

$$
\nabla^2 u = \frac{\partial^2 u}{\partial x^2} + \frac{\partial^2 u}{\partial y^2} = 0 \quad \text{(2D)}
$$

$$
\nabla^2 u = \frac{\partial^2 u}{\partial x^2} + \frac{\partial^2 u}{\partial y^2} + \frac{\partial^2 u}{\partial z^2} = 0 \quad \text{(3D)}
$$

라플라스 방정식의 해를 **조화함수(harmonic function)**라 한다.

**물리 응용**:
- 정전기: 전하 없는 영역의 전위 $\nabla^2\phi = 0$
- 유체역학: 비압축·비회전 유동의 속도 퍼텐셜
- 열전도: 정상 상태 온도 분포

### 최대값 원리

**정리**: 유계 영역에서 라플라스 방정식의 해는 최댓값과 최솟값을 경계에서만 가진다.

**결과**: 경계값이 주어지면 내부 해가 유일하게 결정된다 (Dirichlet 문제의 유일성).

### 직사각형 영역 풀이

$u_{xx} + u_{yy} = 0$, $0 < x < a$, $0 < y < b$

경계 조건 $u(0,y) = u(a,y) = u(x,0) = 0$, $u(x,b) = f(x)$:

분리변수로 $u = X(x)Y(y)$:

$$
X'' + \lambda X = 0, \quad Y'' - \lambda Y = 0
$$

$X$ 방향 조건에서 $X_n = \sin(n\pi x/a)$, $\lambda_n = (n\pi/a)^2$

$Y$ 방향: $Y_n = \sinh(n\pi y/a)$ ($Y(0) = 0$ 조건)

$$
u(x,y) = \sum_{n=1}^{\infty} C_n \sin\frac{n\pi x}{a}\sinh\frac{n\pi y}{a}
$$

$u(x,b) = f(x)$에서 $C_n = \dfrac{2}{a\sinh(n\pi b/a)}\int_0^a f(x)\sin\dfrac{n\pi x}{a}\,dx$

### 극좌표 라플라스 방정식

원판 $r < R$ 위의 경계값 문제:

$$
\frac{1}{r}\frac{\partial}{\partial r}\left(r\frac{\partial u}{\partial r}\right) + \frac{1}{r^2}\frac{\partial^2 u}{\partial \theta^2} = 0
$$

경계 조건 $u(R, \theta) = f(\theta)$의 해 (**푸아송 적분 공식**):

$$
u(r,\theta) = \frac{R^2 - r^2}{2\pi}\int_0^{2\pi}\frac{f(\phi)}{R^2 - 2Rr\cos(\theta-\phi) + r^2}\,d\phi
$$

---

## 포아송 방정식

라플라스 방정식의 비동차 버전:

$$
\nabla^2 u = f(x,y)
$$

$f \ne 0$: 영역 내에 소스(열원, 전하 등)가 있는 경우.

**예**: 열원이 있는 정상 상태 열전도, 포아송 방정식 $u_{xx} + u_{yy} = -\rho/\epsilon_0$ (전하 분포에 의한 전위)

---

## 2차원 열방정식과 파동방정식

### 2D 열방정식

$$
u_t = k(u_{xx} + u_{yy}) = k\nabla^2 u
$$

직사각형 영역 분리변수: $u = X(x)Y(y)T(t)$

$$
X'' + \lambda X = 0, \quad Y'' + \mu Y = 0, \quad T' + k(\lambda + \mu)T = 0
$$

해: $u(x,y,t) = \sum_{m,n} B_{mn}\sin\dfrac{m\pi x}{a}\sin\dfrac{n\pi y}{b}\cdot e^{-k\pi^2(m^2/a^2 + n^2/b^2)t}$

### 원형 막 파동방정식 (베셀 함수)

원판 위의 파동방정식을 극좌표로 분리하면 반지름 방향에서 **베셀 방정식**:

$$
r^2 R'' + rR' + (\lambda r^2 - n^2)R = 0
$$

해: $R = J_n(\sqrt{\lambda}r)$ (베셀 함수). 북의 배음이 정수 배가 아닌 이유가 바로 베셀 함수의 영점이 등간격이 아니기 때문이다.

---

## 연습문제

**문제 1.** 열방정식 $u_t = u_{xx}$ ($0 < x < \pi$, $t > 0$), $u(0,t)=u(\pi,t)=0$, $u(x,0)=\sin 2x$를 풀어라.

> **풀이**
>
> $\sin 2x$는 $n = 2$인 고유함수이므로 $B_2 = 1$, 나머지 $B_n = 0$.
>
> $$u(x,t) = \sin 2x \cdot e^{-4t}$$
>
> 시간이 지남에 따라 지수 감쇠한다.

---

**문제 2.** $u_{tt} = 4u_{xx}$ ($c = 2$), 초기 조건 $u(x,0) = \sin\pi x$, $u_t(x,0) = 0$, 경계 $u(0,t) = u(1,t) = 0$을 풀어라.

> **풀이**
>
> $A_n = 2\int_0^1 \sin\pi x \cdot \sin n\pi x\,dx = \delta_{n1}$ (직교성으로 $n=1$만 생존)
>
> $B_n = 0$ ($g = 0$이므로)
>
> $$u(x,t) = \sin\pi x \cos 2\pi t$$
>
> 정상파(standing wave). 진동수 $2\pi$, 즉 $\omega = c \cdot \pi/L = 2\pi$.

---

**문제 3.** 달랑베르 공식으로 $u_{tt} = u_{xx}$, $u(x,0) = e^{-x^2}$, $u_t(x,0) = 0$의 해를 구하여라.

> **풀이**
>
> $c = 1$, $g = 0$:
>
> $$u(x,t) = \frac{1}{2}\left[e^{-(x+t)^2} + e^{-(x-t)^2}\right]$$
>
> 가우시안 파형이 둘로 나뉘어 좌우로 이동한다.

---

**문제 4.** 2D 라플라스 방정식 $u_{xx} + u_{yy} = 0$ ($0 < x < \pi$, $0 < y < 1$), $u = 0$ (세 면), $u(x,1) = \sin x$를 풀어라.

> **풀이**
>
> 분리변수: $X_n = \sin nx$, $Y_n = \sinh ny$
>
> $u(x,y) = \sum C_n \sin nx \sinh ny$
>
> 경계 $u(x,1) = \sin x$에서 $C_1 \sinh 1 = 1$, 나머지 $C_n = 0$:
>
> $$u(x,y) = \frac{\sinh y}{\sinh 1}\sin x$$

---

**문제 5.** 초기 온도 $f(x) = x(\pi - x)$ ($0 \leq x \leq \pi$)인 열방정식 $u_t = u_{xx}$, $u(0,t)=u(\pi,t)=0$에서 $B_n$을 구하여라.

> **풀이**
>
> $B_n = \dfrac{2}{\pi}\displaystyle\int_0^{\pi} x(\pi-x)\sin nx\,dx$
>
> 두 번 부분적분 적용:
>
> $= \dfrac{2}{\pi} \cdot \dfrac{2\pi}{n^3}(1 - \cos n\pi) = \dfrac{4}{n^3\pi}(1 - (-1)^n) = \begin{cases} \dfrac{8}{n^3\pi} & n \text{ 홀수} \\ 0 & n \text{ 짝수}\end{cases}$
>
> $$u(x,t) = \frac{8}{\pi}\sum_{n=1,3,5,\ldots} \frac{1}{n^3}\sin nx\cdot e^{-n^2 t}$$
