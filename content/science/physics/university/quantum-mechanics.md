---
title: "양자역학"
description: "파동함수, 슈뢰딩거 방정식, 불확정성 원리, 수소 원자, 스핀, 다전자 원자를 다룹니다."
date: "2026-04-06"
subject: "science"
category: "물리"
level: "university"
tags: ["양자역학", "슈뢰딩거방정식", "불확정성원리", "파동함수", "수소원자", "대학물리"]
---

양자역학은 원자·분자·소립자 수준의 세계를 기술한다. [고등 물리](/science/physics/high)의 고전역학이 실패하는 영역 — 원자 스펙트럼, 광전 효과, 전자 회절 — 에서 완벽한 예측을 제공한다. [전자기학](/science/physics/university/electromagnetism)의 빛-전자 상호작용, [대학 복소해석학](/math/university/complex-analysis)의 복소 함수론, [선형대수학](/math/university/linear-algebra)의 고유값 문제가 모두 핵심 역할을 한다. 반도체, 레이저, MRI, 양자 컴퓨터가 모두 양자역학 위에 서 있다.

---

## 양자역학의 역사적 기초

### 고전 물리의 실패

**자외선 파국(Ultraviolet Catastrophe)**: 고전 이론으로 흑체 복사를 계산하면 고주파수에서 에너지가 발산 → 플랑크가 에너지 양자화로 해결.

**광전 효과**: 빛의 진동수가 임계값 이상이어야 전자 방출. 강도 아닌 진동수가 결정 → 아인슈타인이 광자로 설명.

$$
E = hf, \quad h = 6.626 \times 10^{-34}\,\text{J·s}
$$

**컴프턴 산란**: X선과 전자의 충돌에서 광자가 운동량을 가짐 확인: $p = h/\lambda$.

### 파동-입자 이중성

**드 브로이 가설**: 모든 물질도 파동 성질을 가진다.

$$
\lambda = \frac{h}{p} = \frac{h}{mv}
$$

전자의 이중 슬릿 실험: 전자가 한 번에 하나씩 지나가도 간섭 무늬 생성 → 전자가 스스로 간섭.

---

## 파동함수와 확률 해석

### 파동함수 $\Psi(x,t)$

입자의 상태를 완전히 기술하는 복소 함수.

**보른의 확률 해석**:

$$
|\Psi(x,t)|^2 = \text{위치 } x\text{에서 } t\text{에 입자를 발견할 확률 밀도}
$$

**정규화 조건**:

$$
\int_{-\infty}^{\infty}|\Psi(x,t)|^2\,dx = 1
$$

**기댓값**:

$$
\langle x \rangle = \int x|\Psi|^2\,dx, \quad \langle p \rangle = \int \Psi^* \left(-i\hbar\frac{\partial}{\partial x}\right)\Psi\,dx
$$

### 연산자와 관측량

양자역학에서 물리량 → 에르미트 연산자(hermitian operator).

| 물리량 | 연산자 |
|-------|-------|
| 위치 $x$ | $\hat{x} = x$ (곱하기) |
| 운동량 $p_x$ | $\hat{p}_x = -i\hbar\dfrac{\partial}{\partial x}$ |
| 운동 에너지 | $\hat{T} = -\dfrac{\hbar^2}{2m}\nabla^2$ |
| 에너지 (해밀토니안) | $\hat{H} = \hat{T} + \hat{V}$ |

---

## 불확정성 원리

### 하이젠베르크 불확정성 원리

$$
\Delta x \cdot \Delta p \geq \frac{\hbar}{2}, \quad \hbar = \frac{h}{2\pi} \approx 1.055 \times 10^{-34}\,\text{J·s}
$$

$$
\Delta E \cdot \Delta t \geq \frac{\hbar}{2}
$$

**물리적 의미**: 측정 오차가 아니라 자연의 근본적 한계. 파동 패킷의 수학적 결과.

**응용**:
- 원자 바닥 상태 에너지: 전자를 핵 가까이 가두면 $\Delta x$ 감소 → $\Delta p$ 증가 → 운동 에너지 증가 → 평형 존재.
- 별의 수명: $\Delta E \cdot \Delta t \geq \hbar/2$ → 핵반응 터널링 가능.

---

## 슈뢰딩거 방정식

### 시간 의존 방정식

$$
i\hbar\frac{\partial \Psi}{\partial t} = \hat{H}\Psi = \left[-\frac{\hbar^2}{2m}\nabla^2 + V(\vec{r},t)\right]\Psi
$$

이것이 양자역학의 근본 방정식. 고전역학의 $F = ma$에 해당.

### 시간 독립 방정식

$V$가 시간에 무관하면 $\Psi(x,t) = \psi(x)e^{-iEt/\hbar}$로 분리:

$$
\hat{H}\psi = E\psi, \quad \left[-\frac{\hbar^2}{2m}\frac{d^2}{dx^2} + V(x)\right]\psi = E\psi
$$

에너지 고유값 방정식 — 고유값 $E$, 고유함수 $\psi$.

---

## 1차원 모델 문제들

### 무한 퍼텐셜 우물 (Particle in a Box)

$0 < x < L$ 내부 $V = 0$, 외부 $V = \infty$:

에너지 고유값:

$$
E_n = \frac{n^2\pi^2\hbar^2}{2mL^2} = \frac{n^2 h^2}{8mL^2}, \quad n = 1, 2, 3, \ldots
$$

파동함수:

$$
\psi_n(x) = \sqrt{\frac{2}{L}}\sin\frac{n\pi x}{L}
$$

**핵심 결과**: 에너지 양자화. 바닥 상태($n=1$)에서도 $E_1 > 0$ → 영점 에너지(zero-point energy). 위치 불확정성의 결과.

### 유한 퍼텐셜 우물과 터널링

유한 높이 $V_0 > E$인 장벽 영역에서도 파동함수가 지수적으로 감쇠하며 침투한다.

$$
\psi \propto e^{-\kappa x}, \quad \kappa = \sqrt{\frac{2m(V_0 - E)}{\hbar^2}}
$$

**터널링(quantum tunneling)**: 고전적으로 넘을 수 없는 장벽을 입자가 투과. 방사성 붕괴, 터널 다이오드, STM(주사 터널링 현미경) 원리.

### 조화 진동자 (Quantum Harmonic Oscillator)

$V = \dfrac{1}{2}m\omega^2 x^2$:

$$
E_n = \hbar\omega\left(n + \frac{1}{2}\right), \quad n = 0, 1, 2, \ldots
$$

바닥 상태 에너지: $E_0 = \dfrac{\hbar\omega}{2}$ (영점 에너지)

화학에서 분자 진동, 광자 수 표현, 장 양자화의 기반.

---

## 수소 원자

### 3차원 슈뢰딩거 방정식

$$
\hat{H}\psi = \left[-\frac{\hbar^2}{2m}\nabla^2 - \frac{e^2}{4\pi\varepsilon_0 r}\right]\psi = E\psi
$$

구면 좌표로 분리: $\psi_{nlm}(r,\theta,\phi) = R_{nl}(r)Y_l^m(\theta,\phi)$

$Y_l^m$: 구면 조화 함수.

### 에너지 준위

$$
E_n = -\frac{m_e e^4}{2(4\pi\varepsilon_0)^2\hbar^2 n^2} = -\frac{13.6\,\text{eV}}{n^2}
$$

| 양자수 | 이름 | 범위 | 의미 |
|-------|------|------|------|
| $n$ | 주 양자수 | $1, 2, 3, \ldots$ | 에너지, 궤도 크기 |
| $l$ | 각운동량 양자수 | $0, 1, \ldots, n-1$ | 궤도 모양 (s, p, d, f) |
| $m_l$ | 자기 양자수 | $-l, \ldots, l$ | 궤도 방향 |
| $m_s$ | 스핀 양자수 | $\pm 1/2$ | 전자 스핀 |

### 스펙트럼 계열

$$
\frac{1}{\lambda} = R_H\left(\frac{1}{n_f^2} - \frac{1}{n_i^2}\right), \quad R_H = 1.097 \times 10^7\,\text{m}^{-1}
$$

| 계열 | $n_f$ | 스펙트럼 영역 |
|------|--------|------------|
| 라이먼 | 1 | 자외선 |
| 발머 | 2 | 가시광선 |
| 파셴 | 3 | 적외선 |

---

## 스핀과 파울리 배타 원리

### 전자 스핀

반정수 스핀: $s = 1/2$. $m_s = +1/2$ (스핀 업 ↑) 또는 $m_s = -1/2$ (스핀 다운 ↓).

스핀은 고유한 양자수로, 비유로 자전하는 전하로 생각할 수 있으나 실제로는 순수 양자 현상.

**스핀-궤도 결합**: 전자의 궤도 운동으로 인한 자기장이 스핀과 상호작용 → 에너지 준위 미세 구조.

### 파울리 배타 원리

동일 페르미온(전자)은 같은 양자 상태를 점유할 수 없다.

→ $(n, l, m_l, m_s)$가 같은 전자 2개 불가.

→ 각 오비탈에 최대 2개 전자 (스핀 업/다운).

→ 원소의 주기성, 화학 결합의 기초.

---

## 연습문제

**문제 1.** 전자의 위치 불확정성이 $\Delta x = 1\,\text{nm}$일 때, 운동량 불확정성의 최솟값을 구하여라.

> **풀이**
>
> $$\Delta p \geq \frac{\hbar}{2\Delta x} = \frac{1.055 \times 10^{-34}}{2 \times 10^{-9}} \approx 5.3 \times 10^{-26}\,\text{kg·m/s}$$
>
> 대응하는 속도 불확정성: $\Delta v = \Delta p / m_e = 5.3 \times 10^{-26} / 9.1 \times 10^{-31} \approx 5.8 \times 10^4\,\text{m/s}$

---

**문제 2.** 수소 원자에서 $n=3$에서 $n=1$로 전이할 때 방출되는 광자의 에너지와 파장을 구하여라.

> **풀이**
>
> $$\Delta E = E_1 - E_3 = -13.6 + \frac{13.6}{9} = -13.6 + 1.51 = -12.09\,\text{eV}$$
>
> 방출 에너지 = 12.09 eV (라이먼 계열, 자외선)
>
> $\lambda = \dfrac{hc}{\Delta E} = \dfrac{6.626 \times 10^{-34} \times 3 \times 10^8}{12.09 \times 1.6 \times 10^{-19}} \approx 1.03 \times 10^{-7}\,\text{m} = 103\,\text{nm}$

---

**문제 3.** 길이 $L$인 무한 퍼텐셜 우물에서 바닥 상태($n=1$) 에너지와 첫 번째 들뜬 상태($n=2$) 에너지의 비를 구하여라.

> **풀이**
>
> $E_n \propto n^2$이므로 $E_2/E_1 = 4$.
>
> 전이 에너지: $E_2 - E_1 = 3E_1 = \dfrac{3\pi^2\hbar^2}{2mL^2}$.

---

**문제 4.** 양자 터널링을 이용하는 실제 응용 예를 3가지 써라.

> **풀이**
>
> 1. **핵융합(태양 에너지)**: 양성자들의 쿨롱 장벽을 터널링으로 투과 → 핵융합 가능. 고전적으로는 온도가 훨씬 높아야 하지만 터널링으로 태양 온도에서도 반응 가능.
>
> 2. **STM (주사 터널링 현미경)**: 탐침과 시료 사이의 작은 간격에서 전자가 터널링 → 매우 정밀한 표면 형상 측정, 원자 수준 분해능.
>
> 3. **터널 다이오드 (tunnel diode)**: 고농도 도핑 반도체에서 전자의 터널링 → 매우 빠른 스위칭 속도, 마이크로파 발진기에 사용.
