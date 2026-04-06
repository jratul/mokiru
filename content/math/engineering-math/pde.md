---
title: "편미분방정식"
description: "열방정식, 파동방정식, 라플라스 방정식과 분리변수법을 다룹니다."
date: "2026-04-06"
subject: "math"
category: "공학수학"
level: "university"
tags: ["편미분방정식", "PDE", "열방정식", "파동방정식", "공학수학"]
---

## PDE의 분류

2계 선형 PDE $Au_{xx} + Bu_{xy} + Cu_{yy} + \cdots = 0$의 판별식 $\Delta = B^2 - 4AC$:

| $\Delta$ | 분류 | 대표 방정식 |
|---------|------|-----------|
| $< 0$ | 타원형 | 라플라스 방정식 |
| $= 0$ | 포물형 | 열방정식 |
| $> 0$ | 쌍곡형 | 파동방정식 |

---

## 열방정식

### 1차원 열방정식

$$
\frac{\partial u}{\partial t} = k\frac{\partial^2 u}{\partial x^2}, \quad 0 < x < L, \; t > 0
$$

경계 조건: $u(0,t) = u(L,t) = 0$, 초기 조건: $u(x,0) = f(x)$

**분리변수법**: $u(x,t) = X(x)T(t)$로 놓으면

$$
X'' + \lambda X = 0, \quad T' + k\lambda T = 0
$$

$$
u(x,t) = \sum_{n=1}^{\infty} B_n \sin\frac{n\pi x}{L} e^{-k(n\pi/L)^2 t}
$$

---

## 파동방정식

$$
\frac{\partial^2 u}{\partial t^2} = c^2 \frac{\partial^2 u}{\partial x^2}
$$

**일반해 (달랑베르 공식)**:

$$
u(x,t) = \frac{1}{2}[f(x+ct) + f(x-ct)] + \frac{1}{2c}\int_{x-ct}^{x+ct}g(s)\,ds
$$

---

## 라플라스 방정식

$$
\nabla^2 u = \frac{\partial^2 u}{\partial x^2} + \frac{\partial^2 u}{\partial y^2} = 0
$$

**최대값 원리**: 라플라스 방정식의 해는 내부에서 최댓값과 최솟값을 가지지 않는다.

극좌표에서:

$$
\frac{1}{r}\frac{\partial}{\partial r}\left(r\frac{\partial u}{\partial r}\right) + \frac{1}{r^2}\frac{\partial^2 u}{\partial \theta^2} = 0
$$

---

## 연습문제

**문제 1.** 열방정식 $u_t = u_{xx}$ ($0 < x < \pi$, $t > 0$), $u(0,t)=u(\pi,t)=0$, $u(x,0)=\sin 2x$를 풀어라.

> **풀이**
>
> $\sin 2x$는 이미 $n=2$인 고유함수이므로
>
> $$u(x,t) = \sin 2x \cdot e^{-4t}$$

---

**문제 2.** 달랑베르 공식에서 초기 조건 $u(x,0) = f(x)$, $u_t(x,0) = 0$일 때 해를 구하여라.

> **풀이**
>
> $g(x) = 0$이므로 적분항이 0이 된다.
>
> $$u(x,t) = \frac{1}{2}[f(x+ct) + f(x-ct)]$$
>
> 초기 파형이 양방향으로 반반씩 나뉘어 전파된다.
