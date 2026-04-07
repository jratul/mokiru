---
title: "AI를 위한 미적분"
description: "역전파, 자동 미분, 편미분, 야코비안·헤시안, 신경망의 학습 원리를 다룹니다."
date: "2026-04-06"
subject: "math"
category: "AI 수학"
level: "ai-math"
tags: ["역전파", "자동미분", "야코비안", "헤시안", "AI수학", "연쇄법칙"]
---

[대학 미적분학](/math/university/calculus)의 편미분과 연쇄 법칙이 딥러닝의 역전파(backpropagation) 알고리즘 전체를 설명한다. [고등학교 미적분](/math/high/calculus)에서 $f'(x)$를 구하는 법을 배웠다면, 이제 수백만 개의 매개변수를 가진 함수의 모든 편미분을 효율적으로 계산하는 방법을 배운다. [최적화 이론](/math/ai-math/optimization)의 경사하강법, [푸리에 해석](/math/engineering-math/fourier)의 합성곱이 모두 미적분에 기반한다.

---

## 편미분과 그래디언트

### 편미분

함수 $f(x_1, x_2, \ldots, x_n)$에서 다른 변수를 고정하고 $x_i$만으로 미분:

$$
\frac{\partial f}{\partial x_i} = \lim_{h \to 0} \frac{f(x_1, \ldots, x_i + h, \ldots, x_n) - f(x_1, \ldots, x_i, \ldots, x_n)}{h}
$$

**신경망 예**: 손실 $\mathcal{L}(w_1, w_2, \ldots, w_N)$에서 $\partial\mathcal{L}/\partial w_i$는 $w_i$가 1 증가했을 때 손실이 얼마나 늘어나는지.

### 그래디언트

모든 편미분을 모은 벡터:

$$
\nabla_{\vec{x}} f = \left(\frac{\partial f}{\partial x_1}, \frac{\partial f}{\partial x_2}, \ldots, \frac{\partial f}{\partial x_n}\right)^T
$$

**그래디언트의 방향**: $f$가 가장 빠르게 증가하는 방향.

**경사하강법**: $-\nabla f$ 방향(가장 빠른 감소 방향)으로 이동해 최솟값을 찾는다:
$$
\vec{\theta} \leftarrow \vec{\theta} - \eta \nabla_{\vec{\theta}} \mathcal{L}
$$

### 방향 미분

단위 벡터 $\hat{u}$ 방향으로의 변화율:

$$
D_{\hat{u}} f = \nabla f \cdot \hat{u} = \|\nabla f\| \cos\theta
$$

$\theta = 0$ (그래디언트 방향)에서 최대, $\theta = \pi$ (반대 방향)에서 최소.

---

## 야코비안과 헤시안

### 야코비안 (1차 도함수)

벡터 함수 $\vec{f}: \mathbb{R}^n \to \mathbb{R}^m$의 야코비안 행렬:

$$
J = \frac{\partial \vec{f}}{\partial \vec{x}} = \begin{pmatrix}
\dfrac{\partial f_1}{\partial x_1} & \cdots & \dfrac{\partial f_1}{\partial x_n} \\
\vdots & & \vdots \\
\dfrac{\partial f_m}{\partial x_1} & \cdots & \dfrac{\partial f_m}{\partial x_n}
\end{pmatrix} \in \mathbb{R}^{m \times n}
$$

**역전파에서의 야코비안**: $\vec{y} = f(\vec{x})$의 야코비안 $J$를 이용해 손실의 그래디언트를 역방향으로 전파:
$$
\frac{\partial \mathcal{L}}{\partial \vec{x}} = J^T \frac{\partial \mathcal{L}}{\partial \vec{y}}
$$

야코비안을 명시적으로 저장하지 않고도 **야코비안-벡터 곱(JVP)** 또는 **벡터-야코비안 곱(VJP)**으로 계산 가능 → 자동 미분의 핵심.

### 헤시안 (2차 도함수)

스칼라 함수 $f: \mathbb{R}^n \to \mathbb{R}$의 2차 편미분 행렬:

$$
H_{ij} = \frac{\partial^2 f}{\partial x_i \partial x_j}
$$

**슈워츠 정리**: 연속 2계 편미분이면 $\partial^2 f/\partial x_i \partial x_j = \partial^2 f/\partial x_j \partial x_i$ → $H$는 대칭행렬.

**임계점 판별**:
- $H$가 양정치 (모든 고유값 $> 0$): 극솟값
- $H$가 음정치 (모든 고유값 $< 0$): 극댓값
- 양과 음의 고유값이 섞임: 안장점(saddle point)

**딥러닝에서의 헤시안**: 손실 경관(loss landscape)에 안장점이 많다. 그러나 실제로는 안장점에서 탈출이 어렵지 않아서 학습이 가능하다.

**뉴턴 방법**: $\theta \leftarrow \theta - H^{-1}\nabla\mathcal{L}$ — 2차 정보를 활용해 수렴 빠르지만 $H$ 계산 비용($O(n^3)$)이 너무 큼 → 대신 Adam 같은 적응형 방법 사용.

---

## 연쇄 법칙과 역전파

### 합성함수 연쇄 법칙

$z = f(y)$, $y = g(x)$일 때:

$$
\frac{dz}{dx} = \frac{dz}{dy} \cdot \frac{dy}{dx}
$$

다변수: $z = f(\vec{y})$, $\vec{y} = g(\vec{x})$일 때:

$$
\frac{\partial z}{\partial x_j} = \sum_i \frac{\partial z}{\partial y_i} \cdot \frac{\partial y_i}{\partial x_j}
$$

행렬 표기: $\dfrac{\partial z}{\partial \vec{x}} = J_g^T \dfrac{\partial z}{\partial \vec{y}}$

### 계산 그래프 (Computational Graph)

신경망 연산을 DAG(방향 비순환 그래프)로 표현:

```
x → [layer 1] → h1 → [layer 2] → h2 → [loss] → L
```

각 노드: 연산 (행렬 곱, 활성화, 손실 함수)

각 엣지: 데이터 흐름

### 역전파 알고리즘

**순전파(forward pass)**: 입력 $\vec{x}$에서 손실 $\mathcal{L}$까지 계산하며 중간값 저장.

**역전파(backward pass)**: 출력에서 입력 방향으로 연쇄 법칙 적용.

$L$개 레이어의 신경망에서 레이어 $l$의 **에러 신호**:

$$
\delta^{(l)} = \frac{\partial \mathcal{L}}{\partial \vec{z}^{(l)}} = \left(\frac{\partial \mathcal{L}}{\partial \vec{a}^{(l)}}\right) \odot \sigma'(\vec{z}^{(l)})
$$

($\odot$: 원소별 곱, $\vec{z}^{(l)} = W^{(l)}\vec{a}^{(l-1)} + \vec{b}^{(l)}$, $\vec{a}^{(l)} = \sigma(\vec{z}^{(l)})$)

역방향 전파:

$$
\delta^{(l)} = \left((W^{(l+1)})^T \delta^{(l+1)}\right) \odot \sigma'(\vec{z}^{(l)})
$$

가중치 그래디언트:

$$
\frac{\partial \mathcal{L}}{\partial W^{(l)}} = \delta^{(l)} (\vec{a}^{(l-1)})^T, \quad \frac{\partial \mathcal{L}}{\partial \vec{b}^{(l)}} = \delta^{(l)}
$$

**핵심 통찰**: 역전파는 연쇄 법칙의 체계적 적용이다. 순전파에서 저장한 중간값을 재사용하기 때문에 각 파라미터의 그래디언트를 $O(N)$ (파라미터 수)에 계산할 수 있다.

### 주요 활성화 함수와 도함수

| 함수 | $\sigma(x)$ | $\sigma'(x)$ |
|------|------------|-------------|
| 시그모이드 | $\dfrac{1}{1+e^{-x}}$ | $\sigma(x)(1-\sigma(x))$ |
| tanh | $\dfrac{e^x - e^{-x}}{e^x + e^{-x}}$ | $1 - \tanh^2(x)$ |
| ReLU | $\max(0, x)$ | $\mathbb{1}[x > 0]$ |
| Leaky ReLU | $\max(\alpha x, x)$ | $1$ 또는 $\alpha$ |
| Softmax | $\dfrac{e^{x_i}}{\sum_j e^{x_j}}$ | $\sigma_i(\delta_{ij} - \sigma_j)$ |

ReLU의 도함수가 0 또는 1 → **기울기 소실(vanishing gradient) 문제** 완화.

---

## 자동 미분 (Autograd)

### 수치 미분과 기호 미분의 한계

**수치 미분**: $(f(x+h) - f(x))/h$ — 부정확, 매개변수마다 평가 필요

**기호 미분**: 대수적으로 미분식 전개 — 표현식 폭발(expression swell), 비효율

### 자동 미분의 원리

계산을 기본 연산의 합성으로 보고, 각 기본 연산의 도함수 규칙을 연쇄 법칙으로 조합.

**순방향 모드(Forward Mode)**: 입력 방향으로 야코비안-벡터 곱(JVP) 계산.
- 입력 차원 수만큼 통과 필요
- $n \ll m$일 때 효율적

**역방향 모드(Reverse Mode)**: 출력 방향으로 벡터-야코비안 곱(VJP) 계산.
- 출력 차원 수만큼 통과 필요
- **딥러닝에서 표준**: 출력이 스칼라 손실이므로 1번만 역전파

PyTorch의 `tensor.backward()`, TensorFlow의 `GradientTape`이 모두 역방향 자동 미분.

### 계산 복잡도

역전파 비용 ≈ 순전파 비용 × (상수 배). 파라미터 수에 무관하게 그래디언트 전체를 단 1번의 역전파로 계산 가능 → 딥러닝이 가능한 핵심 이유.

---

## 합성곱과 미분

### 합성곱 연산

$$
(f * g)(t) = \int_{-\infty}^{\infty} f(\tau)g(t-\tau)\,d\tau
$$

[푸리에 해석](/math/engineering-math/fourier)에서 합성곱 정리: $\mathcal{F}\{f * g\} = \hat{f} \cdot \hat{g}$

**CNN의 합성곱**: 이미지 패치와 필터의 내적. 공간적으로 가중치를 공유하므로 파라미터 수 대폭 절감.

합성곱층의 역전파: 입력에 대한 그래디언트 = 플립된 필터와의 합성곱.

---

## 연습문제

**문제 1.** $z = \sigma(w_1 x + w_2)$에서 $\dfrac{\partial z}{\partial w_1}$을 구하여라. ($\sigma$는 시그모이드)

> **풀이**
>
> $a = w_1 x + w_2$로 놓으면, 연쇄 법칙:
>
> $$\frac{\partial z}{\partial w_1} = \frac{\partial z}{\partial a} \cdot \frac{\partial a}{\partial w_1} = \sigma(a)(1-\sigma(a)) \cdot x = z(1-z) \cdot x$$

---

**문제 2.** 시그모이드 $\sigma(x) = \dfrac{1}{1+e^{-x}}$의 도함수를 구하여라.

> **풀이**
>
> 몫의 미분법:
>
> $$\sigma'(x) = \frac{e^{-x}}{(1+e^{-x})^2} = \frac{1}{1+e^{-x}} \cdot \frac{e^{-x}}{1+e^{-x}} = \sigma(x) \cdot (1 - \sigma(x))$$
>
> 활성화 출력 $z = \sigma(x)$만 저장해두면 미분값을 $z(1-z)$로 $O(1)$ 계산. 역전파에서 효율적.

---

**문제 3.** 2층 신경망 $\hat{y} = \sigma(W_2 \sigma(W_1 x))$에서 $W_1$에 대한 손실 $\mathcal{L} = (\hat{y} - y)^2$의 그래디언트를 역전파로 구하여라.

> **풀이**
>
> 표기: $z_1 = W_1 x$, $a_1 = \sigma(z_1)$, $z_2 = W_2 a_1$, $\hat{y} = \sigma(z_2)$
>
> 순서대로 역전파:
>
> $\dfrac{\partial \mathcal{L}}{\partial \hat{y}} = 2(\hat{y} - y)$
>
> $\dfrac{\partial \mathcal{L}}{\partial z_2} = \dfrac{\partial \mathcal{L}}{\partial \hat{y}} \cdot \sigma'(z_2) = 2(\hat{y}-y)\hat{y}(1-\hat{y})$
>
> $\dfrac{\partial \mathcal{L}}{\partial a_1} = \dfrac{\partial \mathcal{L}}{\partial z_2} \cdot W_2$
>
> $\dfrac{\partial \mathcal{L}}{\partial z_1} = \dfrac{\partial \mathcal{L}}{\partial a_1} \cdot \sigma'(z_1)$
>
> $\dfrac{\partial \mathcal{L}}{\partial W_1} = \dfrac{\partial \mathcal{L}}{\partial z_1} \cdot x^T$

---

**문제 4.** ReLU 함수 $f(x) = \max(0, x)$의 도함수를 구하고, 기울기 소실 문제 관점에서 시그모이드와 비교하여라.

> **풀이**
>
> $f'(x) = \begin{cases} 1 & x > 0 \\ 0 & x \leq 0 \end{cases}$
>
> **시그모이드**: 입력이 크거나 작으면 $\sigma'(x) \approx 0$ → 깊은 네트워크에서 연쇄 법칙으로 여러 번 곱하면 그래디언트 $\approx 0$ (기울기 소실).
>
> **ReLU**: 양수 입력에서 도함수가 항상 1 → 연쇄 법칙으로 곱해도 그래디언트가 소실되지 않음.
>
> 단, ReLU는 입력이 음수이면 도함수 = 0 → 뉴런이 죽는(dying ReLU) 문제. Leaky ReLU($\alpha = 0.01$)로 완화.
