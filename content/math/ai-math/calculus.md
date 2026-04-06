---
title: "AI를 위한 미적분"
description: "역전파, 자동 미분, 편미분, 야코비안·헤시안의 신경망 응용을 다룹니다."
date: "2026-04-06"
subject: "math"
category: "AI 수학"
level: "ai-math"
tags: ["역전파", "자동미분", "야코비안", "헤시안", "AI수학"]
---

## 편미분과 그래디언트

### 방향 미분

방향 $\hat{u}$으로의 방향 미분:

$$
D_{\hat{u}} f = \nabla f \cdot \hat{u}
$$

그래디언트 방향이 **가장 빠른 증가** 방향. 경사하강법은 $-\nabla f$ 방향으로 이동.

### 야코비안

벡터 함수 $\vec{f}: \mathbb{R}^n \to \mathbb{R}^m$의 야코비안:

$$
J = \begin{pmatrix} \dfrac{\partial f_1}{\partial x_1} & \cdots & \dfrac{\partial f_1}{\partial x_n} \\ \vdots & & \vdots \\ \dfrac{\partial f_m}{\partial x_1} & \cdots & \dfrac{\partial f_m}{\partial x_n} \end{pmatrix}
$$

### 헤시안

스칼라 함수 $f: \mathbb{R}^n \to \mathbb{R}$의 2차 편미분:

$$
H_{ij} = \frac{\partial^2 f}{\partial x_i \partial x_j}
$$

헤시안이 양정치이면 극솟값, 음정치이면 극댓값.

---

## 연쇄 법칙과 역전파

### 합성함수 연쇄 법칙

$$
\frac{\partial \mathcal{L}}{\partial x} = \frac{\partial \mathcal{L}}{\partial y} \cdot \frac{\partial y}{\partial x}
$$

### 역전파 알고리즘

신경망 $L$ 레이어의 손실 $\mathcal{L}$에 대해:

$$
\delta^{(l)} = \frac{\partial \mathcal{L}}{\partial z^{(l)}} = \frac{\partial \mathcal{L}}{\partial a^{(l)}} \odot \sigma'(z^{(l)})
$$

$$
\frac{\partial \mathcal{L}}{\partial W^{(l)}} = \delta^{(l)} (a^{(l-1)})^T
$$

역전파 = 출력층에서 입력층으로 연쇄 법칙을 반복 적용.

---

## 자동 미분 (Autograd)

### 계산 그래프

연산을 DAG(방향 비순환 그래프)로 표현.

**순방향 모드**: 입력에서 출력으로 계산. 입력 변수가 적을 때 효율적.

**역방향 모드**: 출력에서 입력으로 계산. $m \ll n$일 때 효율적 (딥러닝 표준).

---

## 연습문제

**문제 1.** $z = \sigma(w_1 x + w_2)$에서 $\dfrac{\partial z}{\partial w_1}$을 구하여라. ($\sigma$는 시그모이드)

> **풀이**
>
> $a = w_1 x + w_2$로 놓으면
>
> $$\frac{\partial z}{\partial w_1} = \frac{\partial z}{\partial a} \cdot \frac{\partial a}{\partial w_1} = \sigma(a)(1-\sigma(a)) \cdot x = z(1-z) \cdot x$$

---

**문제 2.** 시그모이드 $\sigma(x) = \dfrac{1}{1+e^{-x}}$의 도함수를 구하여라.

> **풀이**
>
> $$\sigma'(x) = \frac{e^{-x}}{(1+e^{-x})^2} = \sigma(x)(1 - \sigma(x))$$
>
> 역전파에서 활성화 출력 $\sigma(x)$만 저장해두면 미분값을 $O(1)$로 계산할 수 있어 효율적이다.
