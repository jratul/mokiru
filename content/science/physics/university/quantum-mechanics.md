---
title: "양자역학"
description: "파동함수, 슈뢰딩거 방정식, 불확정성 원리, 수소 원자를 다룹니다."
date: "2026-04-06"
subject: "science"
category: "물리"
level: "university"
tags: ["양자역학", "슈뢰딩거방정식", "불확정성원리", "파동함수", "대학물리"]
---

## 양자역학의 기초

### 이중성

드 브로이 파장: 입자도 파동 성질을 가진다.

$$
\lambda = \frac{h}{p} = \frac{h}{mv}
$$

플랑크 관계식:

$$
E = hf = \hbar\omega, \quad h = 6.626 \times 10^{-34}\,\text{J·s}
$$

### 불확정성 원리 (하이젠베르크)

$$
\Delta x \cdot \Delta p \geq \frac{\hbar}{2}
$$

$$
\Delta E \cdot \Delta t \geq \frac{\hbar}{2}
$$

위치와 운동량을 동시에 정확히 알 수 없다.

---

## 슈뢰딩거 방정식

### 시간 의존 방정식

$$
i\hbar\frac{\partial \Psi}{\partial t} = \hat{H}\Psi = \left[-\frac{\hbar^2}{2m}\nabla^2 + V\right]\Psi
$$

### 시간 독립 방정식

$$
\hat{H}\psi = E\psi
$$

### 파동함수의 해석

$$
|\Psi(x,t)|^2 = \text{위치 } x\text{에서 입자를 발견할 확률 밀도}
$$

$$
\int_{-\infty}^{\infty}|\Psi|^2\,dx = 1 \quad \text{(정규화)}
$$

---

## 무한 퍼텐셜 우물

$0 < x < L$ 내부에서 입자의 에너지 고유값:

$$
E_n = \frac{n^2\pi^2\hbar^2}{2mL^2}, \quad n = 1, 2, 3, \ldots
$$

에너지가 양자화됨. 파동함수:

$$
\psi_n(x) = \sqrt{\frac{2}{L}}\sin\frac{n\pi x}{L}
$$

---

## 수소 원자

에너지 준위:

$$
E_n = -\frac{13.6\,\text{eV}}{n^2}
$$

광자 방출/흡수:

$$
\Delta E = E_{n_f} - E_{n_i} = hf
$$

---

## 연습문제

**문제 1.** 전자의 위치 불확정성이 $\Delta x = 1\,\text{nm}$일 때, 운동량 불확정성의 최솟값을 구하여라.

> **풀이**
>
> $$\Delta p \geq \frac{\hbar}{2\Delta x} = \frac{1.055 \times 10^{-34}}{2 \times 10^{-9}} \approx 5.3 \times 10^{-26}\,\text{kg·m/s}$$

---

**문제 2.** 수소 원자에서 $n=3$에서 $n=1$로 전이할 때 방출되는 광자의 에너지를 구하여라.

> **풀이**
>
> $$\Delta E = E_1 - E_3 = -13.6 + \frac{13.6}{9} = -13.6 + 1.51 = -12.09\,\text{eV}$$
>
> 방출 에너지 $= 12.09\,\text{eV}$ (라이먼 계열)
