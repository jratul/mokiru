---
title: "고전역학"
description: "라그랑주·해밀턴 역학, 중심력 문제, 강체 역학, 진동, 위상 공간을 다룹니다."
date: "2026-04-06"
subject: "science"
category: "물리"
level: "university"
tags: ["고전역학", "라그랑주역학", "해밀턴역학", "진동", "강체", "대학물리"]
---

고전역학은 뉴턴의 운동 법칙을 가장 아름다운 형태로 표현한다. [고등 물리](/science/physics/high)의 뉴턴 역학을 라그랑주·해밀턴 형식으로 재공식화하면, 구속 조건 처리가 쉬워지고 [양자역학](/science/physics/university/quantum-mechanics)과 [통계역학](/science/physics/university/statistical-mechanics)으로의 다리가 놓인다. [대학 미적분학](/math/university/calculus)의 변분법, [선형대수학](/math/university/linear-algebra)의 고유값 문제가 핵심 도구이다.

---

## 뉴턴 역학 복습과 확장

### 구속 조건과 자유도

**자유도(degrees of freedom)**: 계의 운동을 완전히 기술하는 데 필요한 독립 변수의 수.

- 3D 자유 입자: 3 DOF (x, y, z)
- 진자: 1 DOF (각도 θ) — 줄 길이 고정이 구속 조건
- 이원자 분자: 5 DOF (병진 3 + 회전 2)

**일반화 좌표 $q_i$**: 구속 조건을 자동으로 만족하는 좌표 선택 (직교 좌표 아닌 각도, 호 길이 등).

### 관성계와 비관성계

관성계(inertial frame): 뉴턴 법칙이 그대로 성립.

비관성계(가속 좌표계): 뉴턴 법칙 수정 필요 — **의사힘(pseudo force)** 등장.

**회전 좌표계에서 추가되는 힘**:

$$
\vec{F}_{\text{원심}} = -m\vec{\omega} \times (\vec{\omega} \times \vec{r}) = m\omega^2 r \hat{r} \quad \text{(바깥 방향)}
$$

$$
\vec{F}_{\text{코리올리}} = -2m\vec{\omega} \times \vec{v}'
$$

코리올리 힘: 북반구에서 움직이는 물체가 오른쪽으로 휘는 원인. 태풍의 반시계 방향 회전의 근원.

---

## 라그랑주 역학

### 최소 작용 원리 (Principle of Least Action)

실제 운동 경로는 **작용(action)** $S$를 극값(보통 최솟값)으로 만드는 경로이다:

$$
S = \int_{t_1}^{t_2} L(q_i, \dot{q}_i, t)\,dt
$$

변분법($\delta S = 0$)으로부터 운동 방정식이 유도된다.

### 라그랑지안 (Lagrangian)

$$
L = T - V
$$

$T$: 운동 에너지, $V$: 퍼텐셜 에너지

**오일러-라그랑주 방정식**:

$$
\frac{d}{dt}\frac{\partial L}{\partial \dot{q}_i} - \frac{\partial L}{\partial q_i} = Q_i
$$

$Q_i = 0$: 보존력계 (비보존 일반화 힘이 없을 때).

### 예제: 단진자

$$
L = \frac{1}{2}ml^2\dot{\theta}^2 - mgl(1-\cos\theta)
$$

오일러-라그랑주:

$$
\frac{d}{dt}(ml^2\dot{\theta}) - mgl\sin\theta = 0 \implies \ddot{\theta} + \frac{g}{l}\sin\theta = 0
$$

소각 근사 $\sin\theta \approx \theta$:

$$
\ddot{\theta} + \omega_0^2\theta = 0, \quad \omega_0 = \sqrt{\frac{g}{l}}, \quad T = 2\pi\sqrt{\frac{l}{g}}
$$

### 에너지 보존과 노이터 정리

**노이터(Noether) 정리**: 대칭성 → 보존량.

| 대칭성 | 보존량 |
|-------|-------|
| 시간 이동 불변 | 에너지 보존 |
| 공간 이동 불변 | 운동량 보존 |
| 회전 불변 | 각운동량 보존 |

**일반화 운동량**: $p_i = \dfrac{\partial L}{\partial \dot{q}_i}$

**순환 좌표**: $\dfrac{\partial L}{\partial q_i} = 0$이면 $p_i = \text{const}$ (대칭성 직결).

---

## 해밀턴 역학

### 해밀토니안

라그랑지안을 르장드르 변환:

$$
H(q_i, p_i, t) = \sum_i p_i \dot{q}_i - L = T + V
$$

**해밀턴 정준 방정식**:

$$
\dot{q}_i = \frac{\partial H}{\partial p_i}, \quad \dot{p}_i = -\frac{\partial H}{\partial q_i}
$$

2차 ODE(라그랑주) → 1차 ODE 2배수(해밀턴) — 수치 적분에 유리.

### 위상 공간 (Phase Space)

$(q_i, p_i)$로 구성된 $2n$차원 공간. 계의 모든 정보를 점 하나로 표현.

**리우빌 정리**: 해밀턴 계에서 위상 공간의 체적 요소는 보존된다.

$$
\frac{d}{dt}\rho(q, p, t) + \{H, \rho\} = 0 \quad \text{(포아송 괄호)}
$$

통계역학에서 앙상블 밀도 보존의 기초.

### 포아송 괄호 (Poisson Bracket)

$$
\{A, B\} = \sum_i \left(\frac{\partial A}{\partial q_i}\frac{\partial B}{\partial p_i} - \frac{\partial A}{\partial p_i}\frac{\partial B}{\partial q_i}\right)
$$

운동 방정식: $\dot{A} = \{A, H\} + \dfrac{\partial A}{\partial t}$

양자역학에서 교환자(commutator) $[A, B] = AB - BA$로 대응.

---

## 중심력 문제

### 각운동량 보존

중심력(힘이 항상 원점 방향): $\vec{F} = f(r)\hat{r}$

$$
\vec{L} = \vec{r} \times \vec{p} = \text{const}
$$

→ 운동이 평면 위에 한정.

### 유효 퍼텐셜

환산 질량 $\mu = m_1 m_2/(m_1+m_2)$, 환산 에너지:

$$
E = \frac{1}{2}\mu\dot{r}^2 + V_{\text{eff}}(r), \quad V_{\text{eff}} = V(r) + \frac{L^2}{2\mu r^2}
$$

원심력 장벽: $L^2/(2\mu r^2)$가 작은 $r$에서 반발 퍼텐셜 역할.

### 케플러 문제

$$
V(r) = -\frac{GMm}{r}
$$

**궤도 방정식**: $u = 1/r$로 치환 (비네 방정식):

$$
r = \frac{p}{1 + e\cos\phi}, \quad p = \frac{L^2}{\mu GMm}
$$

| 이심률 $e$ | 궤도 형태 |
|-----------|---------|
| $e = 0$ | 원 |
| $0 < e < 1$ | 타원 |
| $e = 1$ | 포물선 (탈출 속도) |
| $e > 1$ | 쌍곡선 |

**비리얼 정리**: 시간 평균에서 $\langle T \rangle = -\dfrac{1}{2}\langle V \rangle$ (역제곱 힘 포함 일반 경우)

---

## 강체 역학

### 관성 모멘트 텐서

강체의 각운동량: $\vec{L} = I\vec{\omega}$ (1D), 일반적으로 $\vec{L} = \mathbf{I}\cdot\vec{\omega}$ (텐서).

**관성 모멘트 텐서**:

$$
I_{ij} = \int \rho(\vec{r})\left(r^2\delta_{ij} - r_i r_j\right)dV
$$

주관성 모멘트(principal moments): 고유값. 주축(principal axes): 고유벡터.

**자이로스코프**: 회전체에 외부 토크 적용 → 세차 운동(precession). $\vec{\Omega}_p = \tau/L_{\text{spin}}$.

---

## 진동

### 단순 조화 진동자 (SHO)

$$
m\ddot{x} + kx = 0 \implies \ddot{x} + \omega_0^2 x = 0, \quad \omega_0 = \sqrt{\frac{k}{m}}
$$

일반해: $x(t) = A\cos(\omega_0 t + \phi)$

### 감쇠 진동

$$
m\ddot{x} + c\dot{x} + kx = 0
$$

감쇠비 $\zeta = c/(2\sqrt{mk})$:
- $\zeta < 1$: 부족 감쇠 (진동하며 감쇠) → $x = e^{-\beta t}A\cos(\omega_d t + \phi)$
- $\zeta = 1$: 임계 감쇠 (가장 빨리 평형 도달, 진동 없음)
- $\zeta > 1$: 과감쇠 (지수적으로 느리게 접근)

### 강제 진동과 공명

$$
m\ddot{x} + c\dot{x} + kx = F_0\cos\omega t
$$

**공명(resonance)**: 구동 진동수 $\omega \approx \omega_0$일 때 진폭 최대. 타코마 다리 붕괴, MRI 원리.

---

## 연습문제

**문제 1.** 길이 $l = 1\,\text{m}$인 단진자의 주기를 구하여라. ($g = 9.8\,\text{m/s}^2$)

> **풀이**
>
> $$T = 2\pi\sqrt{\frac{l}{g}} = 2\pi\sqrt{\frac{1}{9.8}} \approx 2\pi \times 0.319 \approx 2.01\,\text{s}$$

---

**문제 2.** 라그랑주 역학으로 수평면에서 스프링($k$)에 연결된 질량 $m$의 운동 방정식을 구하여라.

> **풀이**
>
> $L = \dfrac{1}{2}m\dot{x}^2 - \dfrac{1}{2}kx^2$
>
> 오일러-라그랑주 방정식:
>
> $$\frac{d}{dt}(m\dot{x}) - (-kx) = 0 \implies m\ddot{x} + kx = 0$$
>
> 단조화 진동: $\omega_0 = \sqrt{k/m}$, 주기 $T = 2\pi\sqrt{m/k}$.

---

**문제 3.** 해밀토니안이 시간에 명시적으로 의존하지 않을 때, 에너지가 보존됨을 보여라.

> **풀이**
>
> $\dfrac{dH}{dt} = \sum_i \left(\dfrac{\partial H}{\partial q_i}\dot{q}_i + \dfrac{\partial H}{\partial p_i}\dot{p}_i\right) + \dfrac{\partial H}{\partial t}$
>
> 해밀턴 방정식 $\dot{q}_i = \partial H/\partial p_i$, $\dot{p}_i = -\partial H/\partial q_i$를 대입:
>
> $= \sum_i \left(-\dot{p}_i\dot{q}_i + \dot{q}_i\dot{p}_i\right) + \dfrac{\partial H}{\partial t} = \dfrac{\partial H}{\partial t}$
>
> $\partial H/\partial t = 0$이면 $dH/dt = 0$ → $H = E = \text{const}$.

---

**문제 4.** 지구-태양 계에서 케플러 제3법칙 $T^2 = \dfrac{4\pi^2}{GM}a^3$을 라그랑주 역학에서 유도하여라. (원 궤도 특수 경우)

> **풀이**
>
> 원 궤도: $r = a = \text{const}$, $\dot{r} = 0$, 원심 가속도 = 중력:
>
> $\dfrac{\mu v^2}{a} = \dfrac{GMm\mu}{a^2} \implies v^2 = \dfrac{GM}{a}$
>
> $T = \dfrac{2\pi a}{v} = 2\pi a \sqrt{\dfrac{a}{GM}} = 2\pi\sqrt{\dfrac{a^3}{GM}}$
>
> 양변 제곱: $T^2 = \dfrac{4\pi^2 a^3}{GM}$ ∎
