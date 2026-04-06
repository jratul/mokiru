---
title: "복소해석학"
description: "복소수, 해석함수, 코시-리만 방정식, 유수 정리를 다룹니다."
date: "2026-04-06"
subject: "math"
category: "복소해석학"
level: "university"
tags: ["복소해석학", "코시-리만", "유수정리", "복소적분", "대학수학"]
---

## 복소수

### 기본 개념

$$
z = x + iy, \quad i^2 = -1
$$

- 실수부: $\text{Re}(z) = x$
- 허수부: $\text{Im}(z) = y$
- 켤레복소수: $\bar{z} = x - iy$
- 절댓값: $|z| = \sqrt{x^2 + y^2}$

**극형식**:

$$
z = r e^{i\theta} = r(\cos\theta + i\sin\theta), \quad r = |z|, \quad \theta = \arg z
$$

**드 무아브르 정리**:

$$
(\cos\theta + i\sin\theta)^n = \cos n\theta + i\sin n\theta
$$

---

## 해석함수

### 코시-리만 방정식

$f(z) = u(x,y) + iv(x,y)$가 $z = x+iy$에서 해석적 $\iff$

$$
\frac{\partial u}{\partial x} = \frac{\partial v}{\partial y}, \quad \frac{\partial u}{\partial y} = -\frac{\partial v}{\partial x}
$$

해석함수의 실수부와 허수부는 각각 **조화함수**이다:

$$
\nabla^2 u = 0, \quad \nabla^2 v = 0
$$

---

## 복소 적분

### 코시 적분 정리

$f$가 단순 연결 영역 $D$에서 해석적이면

$$
\oint_C f(z)\,dz = 0
$$

### 코시 적분 공식

$$
f(z_0) = \frac{1}{2\pi i} \oint_C \frac{f(z)}{z - z_0}\,dz
$$

$$
f^{(n)}(z_0) = \frac{n!}{2\pi i} \oint_C \frac{f(z)}{(z-z_0)^{n+1}}\,dz
$$

---

## 유수 정리

### 로랑 급수

$$
f(z) = \sum_{n=-\infty}^{\infty} a_n (z-z_0)^n
$$

**유수(Residue)**: $\text{Res}(f, z_0) = a_{-1}$

### 유수 정리

$$
\oint_C f(z)\,dz = 2\pi i \sum_k \text{Res}(f, z_k)
$$

단, $z_k$는 $C$ 내부의 특이점.

**단순극에서 유수 계산**:

$$
\text{Res}(f, z_0) = \lim_{z \to z_0}(z - z_0)f(z)
$$

---

## 연습문제

**문제 1.** $f(z) = z^2$가 해석함수임을 코시-리만 방정식으로 확인하여라.

> **풀이**
>
> $f(z) = (x+iy)^2 = x^2 - y^2 + 2xyi$
>
> $u = x^2 - y^2$, $v = 2xy$
>
> $u_x = 2x = v_y$, $u_y = -2y = -v_x = -2x$… 잠깐, $u_y = -2y$, $-v_x = -2y$ ✓
>
> 코시-리만 방정식 성립 → **해석함수**

---

**문제 2.** $\displaystyle\oint_{|z|=2} \frac{e^z}{z-1}\,dz$를 계산하여라.

> **풀이**
>
> 코시 적분 공식 적용. $z_0 = 1$이 $|z| = 2$ 내부에 있으므로
>
> $$\oint_{|z|=2} \frac{e^z}{z-1}\,dz = 2\pi i \cdot e^1 = 2\pi i e$$
