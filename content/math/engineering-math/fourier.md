---
title: "푸리에 해석"
description: "푸리에 급수, 푸리에 변환, DFT와 FFT, 신호처리 응용을 다룹니다."
date: "2026-04-06"
subject: "math"
category: "공학수학"
level: "university"
tags: ["푸리에급수", "푸리에변환", "DFT", "FFT", "신호처리", "공학수학"]
---

푸리에 해석은 복잡한 신호를 단순한 사인·코사인의 합으로 분해한다. [수학Ⅰ](/math/high/math1)의 삼각함수, [대학 미적분학](/math/university/calculus)의 적분, [선형대수학](/math/university/linear-algebra)의 직교분해가 합쳐진 아름다운 이론이다. [편미분방정식](/math/engineering-math/pde)의 열방정식·파동방정식 풀이, 전자공학의 필터 설계, [AI 수학](/math/ai-math/calculus)의 합성곱 신경망(CNN)에 직접 쓰인다.

---

## 푸리에 급수

### 직교 함수계

삼각함수 $\{1, \cos\dfrac{n\pi x}{L}, \sin\dfrac{n\pi x}{L}\}_{n=1}^{\infty}$는 $[-L, L]$ 위에서 **직교**한다:

$$
\int_{-L}^{L}\cos\frac{m\pi x}{L}\cos\frac{n\pi x}{L}\,dx = \begin{cases}0 & m \ne n \\ L & m = n\end{cases}
$$

선형대수학에서 기저벡터의 직교 분해처럼, 함수를 직교 함수계로 전개한다.

### 삼각 푸리에 급수

주기 $2L$인 함수 $f(x)$의 푸리에 급수:

$$
f(x) = \frac{a_0}{2} + \sum_{n=1}^{\infty}\left(a_n\cos\frac{n\pi x}{L} + b_n\sin\frac{n\pi x}{L}\right)
$$

**푸리에 계수**:

$$
a_0 = \frac{1}{L}\int_{-L}^{L} f(x)\,dx
$$

$$
a_n = \frac{1}{L}\int_{-L}^{L} f(x)\cos\frac{n\pi x}{L}\,dx, \quad n \geq 1
$$

$$
b_n = \frac{1}{L}\int_{-L}^{L} f(x)\sin\frac{n\pi x}{L}\,dx, \quad n \geq 1
$$

### 우함수·홀함수

**우함수** $f(-x) = f(x)$이면 $b_n = 0$ (코사인 급수만):
$$
f(x) = \frac{a_0}{2} + \sum_{n=1}^{\infty} a_n\cos\frac{n\pi x}{L}
$$

**홀함수** $f(-x) = -f(x)$이면 $a_n = 0$ (사인 급수만):
$$
f(x) = \sum_{n=1}^{\infty} b_n\sin\frac{n\pi x}{L}
$$

### 수렴 정리 (디리클레 조건)

$f$가 구간적으로 연속이고 구간적으로 매끄럽다면:

- 연속점 $x$: 급수가 $f(x)$로 수렴
- 불연속점 $x_0$: 급수가 $\dfrac{f(x_0^+) + f(x_0^-)}{2}$로 수렴

### 파세발 정리 (에너지 보존)

$$
\frac{1}{L}\int_{-L}^{L}|f(x)|^2\,dx = \frac{a_0^2}{2} + \sum_{n=1}^{\infty}(a_n^2 + b_n^2)
$$

신호의 에너지가 주파수 성분들의 에너지 합과 같다.

### 복소 푸리에 급수

$e^{in\pi x/L} = \cos\dfrac{n\pi x}{L} + i\sin\dfrac{n\pi x}{L}$을 이용해 단일 복소 급수로:

$$
f(x) = \sum_{n=-\infty}^{\infty} c_n e^{in\pi x/L}, \quad c_n = \frac{1}{2L}\int_{-L}^{L} f(x)e^{-in\pi x/L}\,dx
$$

---

## 푸리에 변환

### 연속 푸리에 변환

주기적이지 않은 함수를 주파수 영역으로 변환. ($L \to \infty$의 극한)

$$
\hat{f}(\omega) = \mathcal{F}\{f\}(\omega) = \int_{-\infty}^{\infty} f(t) e^{-i\omega t}\,dt
$$

$$
f(t) = \mathcal{F}^{-1}\{\hat{f}\}(t) = \frac{1}{2\pi}\int_{-\infty}^{\infty} \hat{f}(\omega) e^{i\omega t}\,d\omega
$$

$\hat{f}(\omega)$: 주파수 $\omega$에서의 진폭과 위상을 나타내는 **주파수 스펙트럼**.

### 주요 성질

| 성질 | 시간 영역 | 주파수 영역 |
|------|---------|-----------|
| 선형성 | $af(t) + bg(t)$ | $a\hat{f}(\omega) + b\hat{g}(\omega)$ |
| 시간 이동 | $f(t-t_0)$ | $e^{-i\omega t_0}\hat{f}(\omega)$ |
| 주파수 이동 | $e^{i\omega_0 t}f(t)$ | $\hat{f}(\omega - \omega_0)$ |
| 미분 | $f'(t)$ | $i\omega\hat{f}(\omega)$ |
| 스케일링 | $f(at)$ | $\dfrac{1}{|a|}\hat{f}(\omega/a)$ |
| 합성곱 | $(f*g)(t)$ | $\hat{f}(\omega)\cdot\hat{g}(\omega)$ |

**미분의 변환**: $\mathcal{F}\{f^{(n)}(t)\} = (i\omega)^n \hat{f}(\omega)$. PDE에서 편미분을 곱셈으로 변환!

### 파세발 정리

$$
\int_{-\infty}^{\infty} |f(t)|^2\,dt = \frac{1}{2\pi}\int_{-\infty}^{\infty}|\hat{f}(\omega)|^2\,d\omega
$$

**물리적 의미**: 시간 영역에서의 총 에너지 = 주파수 영역에서의 총 에너지.

### 주요 변환 쌍

$$
\mathcal{F}\{\delta(t)\} = 1, \quad \mathcal{F}\{1\} = 2\pi\delta(\omega)
$$

$$
\mathcal{F}\{e^{-a|t|}\} = \frac{2a}{a^2 + \omega^2} \quad (a > 0)
$$

$$
\mathcal{F}\{e^{-at^2}\} = \sqrt{\frac{\pi}{a}}e^{-\omega^2/(4a)} \quad \text{(가우시안의 변환도 가우시안)}
$$

---

## 이산 푸리에 변환 (DFT)

### 정의

$N$점 시퀀스 $x[n]$, $n = 0, 1, \ldots, N-1$:

$$
X[k] = \sum_{n=0}^{N-1} x[n] e^{-i2\pi kn/N}, \quad k = 0, 1, \ldots, N-1
$$

역변환:

$$
x[n] = \frac{1}{N}\sum_{k=0}^{N-1} X[k] e^{i2\pi kn/N}
$$

$X[k]$: 주파수 $k/N \cdot f_s$ 성분의 복소 진폭 ($f_s$: 샘플링 주파수).

### FFT (빠른 푸리에 변환)

DFT의 직접 계산은 $O(N^2)$이지만, FFT는 $O(N\log N)$.

**쿨리-튜키(Cooley-Tukey) 알고리즘**: 짝수 인덱스와 홀수 인덱스로 분할 정복.

**응용**:
- 신호 주파수 분석
- 디지털 필터링 (주파수 영역 곱셈)
- 이미지 압축 (JPEG는 DCT 사용, FFT의 변형)
- 다항식 곱셈을 $O(N\log N)$으로

---

## 연습문제

**문제 1.** 사각파 $f(x) = \begin{cases}1 & 0 < x < \pi \\ -1 & -\pi < x < 0\end{cases}$의 푸리에 급수를 구하여라.

> **풀이**
>
> 홀함수이므로 $a_n = 0$, $L = \pi$:
>
> $b_n = \dfrac{2}{\pi}\displaystyle\int_0^{\pi}\sin nx\,dx = \dfrac{2}{\pi}\left[-\dfrac{\cos nx}{n}\right]_0^{\pi} = \dfrac{2}{n\pi}(1-\cos n\pi) = \begin{cases}\dfrac{4}{n\pi} & n \text{ 홀수} \\ 0 & n \text{ 짝수}\end{cases}$
>
> $f(x) = \dfrac{4}{\pi}\left(\sin x + \dfrac{\sin 3x}{3} + \dfrac{\sin 5x}{5} + \cdots\right)$
>
> $x = \pi/2$ 대입: $1 = \dfrac{4}{\pi}\left(1 - \dfrac{1}{3} + \dfrac{1}{5} - \cdots\right) \implies \dfrac{\pi}{4} = 1 - \dfrac{1}{3} + \dfrac{1}{5} - \cdots$ (라이프니츠 공식)

---

**문제 2.** $f(t) = e^{-at}u(t)$ ($a>0$)의 푸리에 변환을 구하여라.

> **풀이**
>
> $\hat{f}(\omega) = \displaystyle\int_0^{\infty} e^{-at} e^{-i\omega t}\,dt = \int_0^{\infty} e^{-(a+i\omega)t}\,dt = \dfrac{1}{a+i\omega}$
>
> $|\hat{f}(\omega)|^2 = \dfrac{1}{a^2+\omega^2}$ (로렌츠 스펙트럼)

---

**문제 3.** 합성곱 정리를 이용해 $\mathcal{F}\{f*f\}$가 $|\hat{f}|^2$의 역변환임을 설명하여라.

> **풀이**
>
> 합성곱 정리: $\mathcal{F}\{f*g\} = \hat{f}\cdot\hat{g}$
>
> $g = f$로 놓으면: $\mathcal{F}\{f*f\} = \hat{f}\cdot\hat{f} = |\hat{f}|^2$
>
> 따라서 $f*f = \mathcal{F}^{-1}\{|\hat{f}|^2\}$. 이는 자기상관함수(autocorrelation)의 스펙트럼이 에너지 스펙트럼임을 의미한다.
