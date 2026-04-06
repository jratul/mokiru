---
title: "푸리에 해석"
description: "푸리에 급수, 푸리에 변환, 이산 푸리에 변환(DFT)과 공학 응용을 다룹니다."
date: "2026-04-06"
subject: "math"
category: "공학수학"
level: "university"
tags: ["푸리에급수", "푸리에변환", "DFT", "공학수학", "신호처리"]
---

## 푸리에 급수

### 삼각 푸리에 급수

주기 $2L$인 함수 $f(x)$:

$$
f(x) = \frac{a_0}{2} + \sum_{n=1}^{\infty}\left(a_n\cos\frac{n\pi x}{L} + b_n\sin\frac{n\pi x}{L}\right)
$$

$$
a_n = \frac{1}{L}\int_{-L}^{L} f(x)\cos\frac{n\pi x}{L}\,dx, \quad b_n = \frac{1}{L}\int_{-L}^{L} f(x)\sin\frac{n\pi x}{L}\,dx
$$

### 복소 푸리에 급수

$$
f(x) = \sum_{n=-\infty}^{\infty} c_n e^{in\pi x/L}, \quad c_n = \frac{1}{2L}\int_{-L}^{L} f(x)e^{-in\pi x/L}\,dx
$$

---

## 푸리에 변환

### 정의

$$
\hat{f}(\omega) = \mathcal{F}\{f\} = \int_{-\infty}^{\infty} f(t) e^{-i\omega t}\,dt
$$

$$
f(t) = \mathcal{F}^{-1}\{\hat{f}\} = \frac{1}{2\pi}\int_{-\infty}^{\infty} \hat{f}(\omega) e^{i\omega t}\,d\omega
$$

### 주요 성질

| 성질 | 공식 |
|------|------|
| 선형성 | $\mathcal{F}\{af+bg\} = a\hat{f} + b\hat{g}$ |
| 시간 이동 | $\mathcal{F}\{f(t-t_0)\} = e^{-i\omega t_0}\hat{f}(\omega)$ |
| 미분 | $\mathcal{F}\{f'(t)\} = i\omega\hat{f}(\omega)$ |
| 합성곱 | $\mathcal{F}\{f * g\} = \hat{f} \cdot \hat{g}$ |

### 파세발 정리

$$
\int_{-\infty}^{\infty} |f(t)|^2\,dt = \frac{1}{2\pi}\int_{-\infty}^{\infty}|\hat{f}(\omega)|^2\,d\omega
$$

---

## 이산 푸리에 변환 (DFT)

$$
X[k] = \sum_{n=0}^{N-1} x[n] e^{-i2\pi kn/N}
$$

**FFT(빠른 푸리에 변환)**: DFT를 $O(N^2)$에서 $O(N\log N)$으로 줄이는 알고리즘.

---

## 연습문제

**문제 1.** $f(x) = 1$ ($0 < x < \pi$), $f(x) = -1$ ($-\pi < x < 0$)의 푸리에 급수를 구하여라.

> **풀이**
>
> 홀함수이므로 $a_n = 0$. $L = \pi$:
>
> $$b_n = \frac{2}{\pi}\int_0^{\pi}\sin nx\,dx = \frac{2}{\pi}\left[-\frac{\cos nx}{n}\right]_0^{\pi} = \frac{2}{n\pi}(1 - \cos n\pi) = \begin{cases}\frac{4}{n\pi} & n \text{ 홀수} \\ 0 & n \text{ 짝수}\end{cases}$$
>
> $$f(x) = \frac{4}{\pi}\sum_{n=1,3,5,\ldots}\frac{\sin nx}{n} = \frac{4}{\pi}\left(\sin x + \frac{\sin 3x}{3} + \frac{\sin 5x}{5} + \cdots\right)$$
