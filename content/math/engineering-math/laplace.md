---
title: "라플라스 변환"
description: "라플라스 변환의 정의, 역변환, 미분방정식에 적용, 전달함수와 제어이론을 다룹니다."
date: "2026-04-06"
subject: "math"
category: "공학수학"
level: "university"
tags: ["라플라스변환", "전달함수", "공학수학", "ODE", "제어이론"]
---

라플라스 변환은 [대학 미분방정식](/math/university/ode)의 풀이를 대수 문제로 변환하는 강력한 도구다. 복잡한 ODE를 $s$-영역의 대수 방정식으로 변환한 후 풀고, 역변환으로 돌아온다. [공학수학 푸리에 해석](/math/engineering-math/fourier)과 함께 신호처리, 제어시스템, 전기회로 해석의 핵심 방법이다.

---

## 라플라스 변환의 정의

$$
\mathcal{L}\{f(t)\} = F(s) = \int_0^{\infty} e^{-st} f(t)\,dt
$$

$t \geq 0$인 함수 $f(t)$에 대해 정의. $s$는 복소수 변수.

**수렴 조건**: $|f(t)| \leq Me^{at}$를 만족하는 $M, a$가 존재하면 $\text{Re}(s) > a$에서 수렴.

**선형성**:

$$
\mathcal{L}\{af(t) + bg(t)\} = aF(s) + bG(s)
$$

---

## 기본 변환 표

| $f(t)$ | $F(s) = \mathcal{L}\{f(t)\}$ | 조건 |
|--------|------------------------------|------|
| $1$ (단위함수) | $\dfrac{1}{s}$ | $s > 0$ |
| $t^n$ | $\dfrac{n!}{s^{n+1}}$ | $s > 0$ |
| $e^{at}$ | $\dfrac{1}{s-a}$ | $s > a$ |
| $t e^{at}$ | $\dfrac{1}{(s-a)^2}$ | |
| $\sin \omega t$ | $\dfrac{\omega}{s^2 + \omega^2}$ | |
| $\cos \omega t$ | $\dfrac{s}{s^2 + \omega^2}$ | |
| $e^{at}\sin\omega t$ | $\dfrac{\omega}{(s-a)^2+\omega^2}$ | |
| $e^{at}\cos\omega t$ | $\dfrac{s-a}{(s-a)^2+\omega^2}$ | |
| $\delta(t)$ (임펄스) | $1$ | |
| $u(t-a)$ (단위계단) | $\dfrac{e^{-as}}{s}$ | |
| $t^n e^{at}$ | $\dfrac{n!}{(s-a)^{n+1}}$ | |

---

## 주요 성질

### 도함수의 변환

$$
\mathcal{L}\{f'(t)\} = sF(s) - f(0)
$$

$$
\mathcal{L}\{f''(t)\} = s^2F(s) - sf(0) - f'(0)
$$

$$
\mathcal{L}\{f^{(n)}(t)\} = s^nF(s) - s^{n-1}f(0) - s^{n-2}f'(0) - \cdots - f^{(n-1)}(0)
$$

**핵심**: 초기값이 대수적으로 포함된다 → ODE에서 초기값 문제를 자동 처리.

### 주파수 이동 (s-shifting)

$$
\mathcal{L}\{e^{at}f(t)\} = F(s-a)
$$

**예**: $\mathcal{L}\{te^{2t}\} = \dfrac{1}{(s-2)^2}$ ($\mathcal{L}\{t\} = 1/s^2$에서 $s \to s-2$)

### 시간 이동 (t-shifting)

$$
\mathcal{L}\{f(t-a)u(t-a)\} = e^{-as}F(s) \quad (a > 0)
$$

### 합성곱 정리 (Convolution)

$$
\mathcal{L}\{(f * g)(t)\} = F(s) \cdot G(s)
$$

여기서 $(f * g)(t) = \displaystyle\int_0^t f(\tau)g(t-\tau)\,d\tau$

---

## 역 라플라스 변환

**부분분수 분해**를 이용해 표준 형태로 변환 후 변환 표로 역변환.

**예제.** $F(s) = \dfrac{3s+7}{(s+1)(s+2)}$

$$
F(s) = \frac{A}{s+1} + \frac{B}{s+2}
$$

$s = -1$: $A = \dfrac{3(-1)+7}{(-1+2)} = 4$

$s = -2$: $B = \dfrac{3(-2)+7}{(-2+1)} = \dfrac{1}{-1} = -1$

$$
f(t) = \mathcal{L}^{-1}\!\left\{\frac{4}{s+1} - \frac{1}{s+2}\right\} = 4e^{-t} - e^{-2t}
$$

**복소근의 경우**: 분모에 $s^2 + as + b$ 형태가 있으면 완전제곱으로 변형 후 $\sin/\cos$ 형태로.

$$
\frac{1}{s^2 + 2s + 5} = \frac{1}{(s+1)^2 + 4} \implies \mathcal{L}^{-1} = \frac{1}{2}e^{-t}\sin 2t
$$

---

## ODE에 적용

**절차**: $\mathcal{L}$ 변환 → $s$-영역에서 $Y(s)$ 풀기 → $\mathcal{L}^{-1}$로 $y(t)$ 얻기

**예제.** $y'' + 3y' + 2y = 0$, $y(0) = 1$, $y'(0) = 0$

라플라스 변환:

$$
(s^2 Y - s - 0) + 3(sY - 1) + 2Y = 0
$$

$$
Y(s^2 + 3s + 2) = s + 3 \implies Y = \frac{s+3}{(s+1)(s+2)} = \frac{2}{s+1} - \frac{1}{s+2}
$$

$$
y(t) = 2e^{-t} - e^{-2t}
$$

---

## 전달함수와 제어이론

### 전달함수 (Transfer Function)

선형 시불변(LTI) 시스템에서, 초기 조건이 0일 때:

$$
H(s) = \frac{Y(s)}{X(s)} = \frac{\text{출력의 라플라스 변환}}{\text{입력의 라플라스 변환}}
$$

**예**: $y'' + 3y' + 2y = x(t)$의 전달함수: $H(s) = \dfrac{1}{s^2 + 3s + 2}$

### 극점과 안정성

전달함수의 **극점(pole)**: 분모 $= 0$인 $s$ 값.

| 극점 위치 | 시스템 응답 |
|---------|-----------|
| 좌반평면 ($\text{Re}(s) < 0$) | 안정 (감쇠) |
| 허수축 ($\text{Re}(s) = 0$) | 한계 안정 |
| 우반평면 ($\text{Re}(s) > 0$) | 불안정 (발산) |

**임펄스 응답**: $h(t) = \mathcal{L}^{-1}\{H(s)\}$ — 시스템의 "특성"을 완전히 기술.

**블록 다이어그램**: 직렬 연결 $H_1 H_2$, 병렬 연결 $H_1 + H_2$, 피드백 $\dfrac{H}{1 + HG}$.

---

## 연습문제

**문제 1.** $\mathcal{L}\{te^{2t}\}$를 구하여라.

> **풀이**
>
> $\mathcal{L}\{t\} = \dfrac{1}{s^2}$, 주파수 이동: $\mathcal{L}\{te^{2t}\} = \dfrac{1}{(s-2)^2}$

---

**문제 2.** $y' + 2y = 4$, $y(0) = 1$을 라플라스 변환으로 풀어라.

> **풀이**
>
> $(sY - 1) + 2Y = \dfrac{4}{s} \implies Y = \dfrac{s+4}{s(s+2)} = \dfrac{2}{s} - \dfrac{1}{s+2}$
>
> $y(t) = 2 - e^{-2t}$

---

**문제 3.** $\mathcal{L}^{-1}\!\left\{\dfrac{s+1}{s^2+2s+5}\right\}$를 구하여라.

> **풀이**
>
> 분모를 완전제곱으로: $s^2 + 2s + 5 = (s+1)^2 + 4$
>
> $\dfrac{s+1}{(s+1)^2+4}$는 $\dfrac{s-a}{(s-a)^2+\omega^2}$ 형태 ($a=-1$, $\omega=2$)
>
> $\mathcal{L}^{-1} = e^{-t}\cos 2t$

---

**문제 4.** 스프링-질량-감쇠기 시스템: $m\ddot{x} + c\dot{x} + kx = F(t)$에서 $m=1$, $c=2$, $k=5$, $F(t)=\delta(t)$(임펄스), 초기 정지 조건으로 응답을 구하여라.

> **풀이**
>
> $(s^2 + 2s + 5)X = 1 \implies X = \dfrac{1}{s^2+2s+5} = \dfrac{1}{(s+1)^2+4}$
>
> $x(t) = \dfrac{1}{2}e^{-t}\sin 2t$ (감쇠 진동)
