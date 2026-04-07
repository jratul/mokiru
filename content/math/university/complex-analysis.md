---
title: "복소해석학"
description: "복소수, 해석함수, 코시-리만 방정식, 복소 적분, 유수 정리를 다룹니다."
date: "2026-04-06"
subject: "math"
category: "복소해석학"
level: "university"
tags: ["복소해석학", "코시-리만", "유수정리", "로랑급수", "복소적분", "대학수학"]
---

복소해석학(Complex Analysis)은 실수 함수론보다 훨씬 강력한 결과를 제공한다. 해석함수는 무한히 미분 가능하고, 경로 적분이 특이점의 유수(residue)만으로 계산된다. [대학 미적분학](/math/university/calculus)의 테일러급수가 복소수 영역으로 확장되며, [공학수학 라플라스 변환](/math/engineering-math/laplace)·[푸리에 해석](/math/engineering-math/fourier)·[양자역학](/science/physics/university/quantum-mechanics)에 직접 활용된다.

---

## 복소수

### 기본 연산

$$
z = x + iy, \quad i^2 = -1
$$

| 개념 | 표기 | 공식 |
|------|------|------|
| 실수부 | $\text{Re}(z)$ | $x$ |
| 허수부 | $\text{Im}(z)$ | $y$ |
| 켤레 | $\bar{z}$ | $x - iy$ |
| 절댓값(모듈러스) | $|z|$ | $\sqrt{x^2 + y^2}$ |
| 편각(argument) | $\arg z$ | $\theta = \arctan(y/x)$ |

**덧셈**: $(x_1+iy_1) + (x_2+iy_2) = (x_1+x_2) + i(y_1+y_2)$

**곱셈**: $(x_1+iy_1)(x_2+iy_2) = (x_1x_2 - y_1y_2) + i(x_1y_2 + x_2y_1)$

**나눗셈**: $\dfrac{z_1}{z_2} = \dfrac{z_1\bar{z}_2}{|z_2|^2}$

**성질**: $|z_1 z_2| = |z_1||z_2|$, $|z_1 + z_2| \leq |z_1| + |z_2|$ (삼각부등식)

### 극형식과 오일러 공식

**오일러 공식**: $e^{i\theta} = \cos\theta + i\sin\theta$

$$
z = r e^{i\theta} = r(\cos\theta + i\sin\theta), \quad r = |z|
$$

**곱**: $z_1 z_2 = r_1 r_2 e^{i(\theta_1 + \theta_2)}$ (모듈러스 곱, 편각 합)

**드 무아브르 정리**:

$$
(\cos\theta + i\sin\theta)^n = \cos n\theta + i\sin n\theta
$$

**응용**: $\cos\theta = \dfrac{e^{i\theta} + e^{-i\theta}}{2}$, $\sin\theta = \dfrac{e^{i\theta} - e^{-i\theta}}{2i}$

### $n$제곱근

$z = re^{i\theta}$의 $n$제곱근:

$$
z^{1/n} = r^{1/n} e^{i(\theta + 2k\pi)/n}, \quad k = 0, 1, \ldots, n-1
$$

$n$개의 근이 단위원 위에 균등하게 분포한다.

---

## 해석함수

### 복소 미분

$$
f'(z_0) = \lim_{\Delta z \to 0} \frac{f(z_0 + \Delta z) - f(z_0)}{\Delta z}
$$

**중요**: 실수에서는 $\Delta x \to 0$이 한 방향뿐이지만, 복소수에서는 어느 방향으로 $\Delta z \to 0$으로 가든 극한값이 같아야 한다. 이 강한 조건이 복소 미분을 특별하게 만든다.

**해석함수(정칙함수, holomorphic function)**: 어떤 영역에서 복소 미분 가능한 함수.

### 코시-리만 방정식 (Cauchy-Riemann equations)

$f(z) = u(x,y) + iv(x,y)$가 $z_0$에서 미분 가능 $\iff$

$$
\frac{\partial u}{\partial x} = \frac{\partial v}{\partial y}, \qquad \frac{\partial u}{\partial y} = -\frac{\partial v}{\partial x}
$$

**해석함수의 실수부와 허수부는 모두 조화함수(라플라스 방정식을 만족)**:

$$
\nabla^2 u = u_{xx} + u_{yy} = 0, \qquad \nabla^2 v = v_{xx} + v_{yy} = 0
$$

$u$가 주어지면 코시-리만 방정식으로 $v$를 구할 수 있다 (켤레 조화함수).

**예**: $f(z) = z^2 = (x^2-y^2) + 2xyi$에서 $u = x^2-y^2$, $v = 2xy$

$u_x = 2x = v_y$ ✓, $u_y = -2y = -v_x = -2y$ ✓ → 전 복소평면에서 해석적

**주요 해석함수**: $e^z$, $\sin z$, $\cos z$, $\ln z$ ($z \ne 0$이고 적절한 분지선 선택), 다항함수, 유리함수 (극점 제외)

---

## 복소 적분

### 경로 적분

곡선 $C$: $z = z(t)$, $t \in [a,b]$:

$$
\int_C f(z)\,dz = \int_a^b f(z(t)) z'(t)\,dt
$$

**예**: $C$가 단위원 ($z = e^{i\theta}$, $0 \leq \theta \leq 2\pi$)이면 $dz = ie^{i\theta}d\theta$

### 코시 적분 정리 (Cauchy's Integral Theorem)

$f$가 단순 연결 영역 $D$에서 해석적이면, $D$ 안의 임의의 단순 폐곡선 $C$에 대해:

$$
\oint_C f(z)\,dz = 0
$$

**결과**: 해석함수의 경로 적분은 경로에 무관하다 (시작점과 끝점만 중요).

### 코시 적분 공식 (Cauchy's Integral Formula)

$f$가 단순 연결 영역에서 해석적이고 $z_0$가 $C$ 내부에 있으면:

$$
f(z_0) = \frac{1}{2\pi i} \oint_C \frac{f(z)}{z - z_0}\,dz
$$

**고계 도함수 공식**:

$$
f^{(n)}(z_0) = \frac{n!}{2\pi i} \oint_C \frac{f(z)}{(z-z_0)^{n+1}}\,dz
$$

**놀라운 결과**: 해석함수는 무한히 미분 가능하다! 실수 함수는 한 번 미분가능해도 두 번 미분불가능할 수 있지만, 복소 함수는 한 번 미분가능하면 무한번 가능하다.

---

## 특이점과 유수 정리

### 로랑 급수 (Laurent Series)

$z_0$ 근방에서 해석적이지 않은 경우, $z_0$를 제외한 환형 영역에서:

$$
f(z) = \sum_{n=-\infty}^{\infty} a_n (z-z_0)^n = \cdots + \frac{a_{-2}}{(z-z_0)^2} + \frac{a_{-1}}{z-z_0} + a_0 + a_1(z-z_0) + \cdots
$$

**유수(Residue)**: $\text{Res}(f, z_0) = a_{-1}$ ($(z-z_0)^{-1}$의 계수)

### 특이점의 종류

| 종류 | 설명 | 예 |
|------|------|-----|
| 제거가능 특이점 | $a_n = 0$ ($n < 0$), 연속적으로 확장 가능 | $\dfrac{\sin z}{z}$ at $z=0$ |
| 극점(pole) | 유한개의 음수 계수 | $\dfrac{1}{z^2}$ at $z=0$ (2차 극점) |
| 진성 특이점 | 무한개의 음수 계수 | $e^{1/z}$ at $z=0$ |

**단순극에서 유수 계산**:

$$
\text{Res}(f, z_0) = \lim_{z \to z_0}(z - z_0)f(z)
$$

**$m$차 극에서 유수 계산**:

$$
\text{Res}(f, z_0) = \frac{1}{(m-1)!}\lim_{z \to z_0}\frac{d^{m-1}}{dz^{m-1}}\left[(z-z_0)^m f(z)\right]
$$

### 유수 정리 (Residue Theorem)

$C$ 내부의 특이점 $z_1, z_2, \ldots, z_k$에 대해:

$$
\oint_C f(z)\,dz = 2\pi i \sum_{j=1}^{k} \text{Res}(f, z_j)
$$

**응용 — 실수 적분 계산**: 복소 적분으로 어려운 실수 정적분을 계산.

$$
\int_{-\infty}^{\infty} \frac{1}{1+x^2}\,dx = 2\pi i \cdot \text{Res}\!\left(\frac{1}{1+z^2}, i\right) = 2\pi i \cdot \frac{1}{2i} = \pi
$$

---

## 연습문제

**문제 1.** $f(z) = z^2$이 해석함수임을 코시-리만 방정식으로 확인하여라.

> **풀이**
>
> $f(z) = (x+iy)^2 = (x^2-y^2) + 2xyi$, $u = x^2-y^2$, $v = 2xy$
>
> $u_x = 2x = v_y$ ✓, $u_y = -2y = -v_x = -2y$ ✓ → **해석함수**

---

**문제 2.** $\displaystyle\oint_{|z|=2} \dfrac{e^z}{z-1}\,dz$를 계산하여라.

> **풀이**
>
> $z_0 = 1$은 $|z|=2$ 내부. 코시 적분 공식:
>
> $\displaystyle\oint \dfrac{e^z}{z-1}\,dz = 2\pi i \cdot e^1 = 2\pi i e$

---

**문제 3.** $f(z) = \dfrac{z}{(z-1)(z+2)}$의 $z=1$에서의 유수를 구하여라.

> **풀이**
>
> $z=1$은 단순극:
>
> $\text{Res}(f, 1) = \lim_{z \to 1}(z-1) \cdot \dfrac{z}{(z-1)(z+2)} = \lim_{z\to 1}\dfrac{z}{z+2} = \dfrac{1}{3}$

---

**문제 4.** $\displaystyle\int_{-\infty}^{\infty} \dfrac{x^2}{(x^2+1)(x^2+4)}\,dx$를 유수 정리로 계산하여라.

> **풀이**
>
> 상반평면의 극: $z = i$ (단순극), $z = 2i$ (단순극)
>
> $\text{Res}\!\left(\dfrac{z^2}{(z^2+1)(z^2+4)}, i\right) = \dfrac{-1}{(2i)(i^2+4)} = \dfrac{-1}{2i \cdot 3} = \dfrac{-1}{6i} = \dfrac{i}{6}$
>
> $\text{Res}\!\left(\dfrac{z^2}{(z^2+1)(z^2+4)}, 2i\right) = \dfrac{-4}{((2i)^2+1)(2\cdot 2i)} = \dfrac{-4}{(-4+1)(4i)} = \dfrac{-4}{-12i} = \dfrac{1}{3i} = \dfrac{-i}{3}$
>
> $\displaystyle\int_{-\infty}^{\infty} = 2\pi i\left(\dfrac{i}{6} + \dfrac{-i}{3}\right) = 2\pi i \cdot \dfrac{-i}{6} = \dfrac{2\pi}{6} = \dfrac{\pi}{3}$
