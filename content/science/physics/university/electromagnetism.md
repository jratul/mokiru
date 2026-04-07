---
title: "전자기학"
description: "맥스웰 방정식, 정전기학, 자기학, 전자기 유도, 전자기파를 다룹니다."
date: "2026-04-06"
subject: "science"
category: "물리"
level: "university"
tags: ["전자기학", "맥스웰방정식", "전기장", "자기장", "전자기파", "대학물리"]
---

전자기학은 전기와 자기를 통합하여 4개의 방정식(맥스웰 방정식)으로 기술한다. [고등 물리](/science/physics/high)의 쿨롱 법칙·패러데이 법칙을 미분 형식으로 표현하면 전자기파의 존재가 예측되고, 이것이 빛임을 알게 된다. [대학 미적분학](/math/university/calculus)의 벡터 미적분(발산, 회전, 가우스 정리, 스토크스 정리), [편미분방정식](/math/engineering-math/pde)이 핵심 수학 도구이며, [양자역학](/science/physics/university/quantum-mechanics)의 파동-입자 이중성도 이 맥락에서 등장한다.

---

## 맥스웰 방정식

### 4개의 법칙 (미분 형식)

$$
\nabla \cdot \vec{E} = \frac{\rho}{\varepsilon_0} \quad \text{(가우스 법칙: 전하가 전기장의 근원)}
$$

$$
\nabla \cdot \vec{B} = 0 \quad \text{(자기 단극자 없음: 자기력선은 닫힌 루프)}
$$

$$
\nabla \times \vec{E} = -\frac{\partial \vec{B}}{\partial t} \quad \text{(패러데이 법칙: 변화하는 B가 E 유도)}
$$

$$
\nabla \times \vec{B} = \mu_0\vec{J} + \mu_0\varepsilon_0\frac{\partial \vec{E}}{\partial t} \quad \text{(앙페르-맥스웰 법칙)}
$$

마지막 항 $\mu_0\varepsilon_0\dfrac{\partial \vec{E}}{\partial t}$가 맥스웰의 기여 — **변위 전류(displacement current)**: 변화하는 전기장도 자기장을 만든다.

### 적분 형식

| 미분 | 적분 (스토크스/가우스 정리 적용) |
|------|------|
| $\nabla\cdot\vec{E} = \rho/\varepsilon_0$ | $\oint_S \vec{E}\cdot d\vec{A} = Q_{\text{enc}}/\varepsilon_0$ |
| $\nabla\cdot\vec{B} = 0$ | $\oint_S \vec{B}\cdot d\vec{A} = 0$ |
| $\nabla\times\vec{E} = -\partial\vec{B}/\partial t$ | $\oint_C \vec{E}\cdot d\vec{l} = -d\Phi_B/dt$ |
| $\nabla\times\vec{B} = \mu_0\vec{J}+\mu_0\varepsilon_0\partial\vec{E}/\partial t$ | $\oint_C \vec{B}\cdot d\vec{l} = \mu_0(I + I_d)$ |

**물리 상수**:
- $\varepsilon_0 = 8.85 \times 10^{-12}\,\text{C}^2/(\text{N·m}^2)$ (진공 유전율)
- $\mu_0 = 4\pi \times 10^{-7}\,\text{T·m/A}$ (진공 투자율)

---

## 정전기학

### 쿨롱 법칙과 전기장

점전하 $Q$로부터 거리 $r$에서:

$$
\vec{E} = \frac{1}{4\pi\varepsilon_0}\frac{Q}{r^2}\hat{r}
$$

중첩 원리: 여러 전하의 전기장 = 각 전기장의 벡터 합.

### 가우스 법칙 응용

대칭성이 있을 때 전기장 계산을 단순화.

**균일 대전된 구 (반지름 $R$, 전하 $Q$)**:
- 외부 ($r > R$): $E = \dfrac{Q}{4\pi\varepsilon_0 r^2}$ (점전하와 동일)
- 내부 ($r < R$): $E = \dfrac{Qr}{4\pi\varepsilon_0 R^3}$ (중심에서 0)

**무한 직선 전하 (선전하 밀도 $\lambda$)**:

$$
E = \frac{\lambda}{2\pi\varepsilon_0 r}
$$

**무한 평면 (면전하 밀도 $\sigma$)**:

$$
E = \frac{\sigma}{2\varepsilon_0}
$$

### 전위와 퍼텐셜 에너지

$$
V = -\int_{\infty}^{r}\vec{E}\cdot d\vec{l}, \quad \vec{E} = -\nabla V
$$

점전하: $V = \dfrac{Q}{4\pi\varepsilon_0 r}$

전위차 $\Delta V$: 단위 전하를 이동시키는 데 필요한 일.

**도체의 성질**:
- 내부 전기장 = 0 (정전 평형 상태)
- 전하는 표면에만 분포
- 표면이 등전위면

### 커패시터 (축전기)

$$
C = \frac{Q}{V}, \quad U = \frac{1}{2}CV^2 = \frac{Q^2}{2C}
$$

평행판 커패시터: $C = \varepsilon_0 A/d$

유전체 삽입: $C = \kappa \varepsilon_0 A/d$ ($\kappa$: 유전율)

---

## 자기학

### 비오-사바르 법칙

전류 요소 $Id\vec{l}$이 만드는 자기장:

$$
d\vec{B} = \frac{\mu_0}{4\pi}\frac{Id\vec{l} \times \hat{r}}{r^2}
$$

**직선 전류가 만드는 자기장**:

$$
B = \frac{\mu_0 I}{2\pi r}
$$

방향: 오른손 법칙 — 전류 방향으로 오른손 엄지 → 손가락이 B 방향.

### 앙페르 법칙 응용

**솔레노이드** (단위 길이당 $n$번 감김):

$$
B = \mu_0 n I \quad \text{(내부, 균일)}
$$

**토로이드** (반지름 $r$):

$$
B = \frac{\mu_0 N I}{2\pi r}
$$

### 자기력

운동하는 전하에 작용하는 힘 (로렌츠 힘):

$$
\vec{F} = q(\vec{E} + \vec{v} \times \vec{B})
$$

전류가 흐르는 도선에 작용하는 힘:

$$
d\vec{F} = I d\vec{l} \times \vec{B}
$$

**두 평행 전류 사이의 힘**:
- 같은 방향: 인력
- 반대 방향: 척력

앙페르가 전류의 정의(SI 기본 단위)에 이 힘을 이용.

---

## 전자기 유도

### 패러데이 법칙

$$
\mathcal{E} = -\frac{d\Phi_B}{dt}, \quad \Phi_B = \int \vec{B} \cdot d\vec{A}
$$

**렌츠의 법칙**: 유도 전류가 만드는 자기장은 자속 변화를 방해하는 방향. 에너지 보존의 결과.

**자기 선속 변화 방법**: 면적 변화, $B$ 세기 변화, 면과 $B$ 사이 각도 변화.

### 자기 인덕턴스 (Inductance)

$$
\mathcal{E} = -L\frac{dI}{dt}, \quad U_L = \frac{1}{2}LI^2
$$

솔레노이드: $L = \mu_0 n^2 V$ ($V$: 부피)

**RL 회로**: $I(t) = I_0\left(1 - e^{-t/\tau}\right)$, $\tau = L/R$ (시간 상수)

### LC·RLC 회로

LC 진동: $\omega = 1/\sqrt{LC}$, 전기 에너지 ↔ 자기 에너지 교환. 전기 SHO.

RLC 회로: 감쇠 진동. 공진 주파수 $\omega_0 = 1/\sqrt{LC}$에서 임피던스 최소.

$$
Z = \sqrt{R^2 + \left(\omega L - \frac{1}{\omega C}\right)^2}
$$

---

## 전자기파

### 맥스웰 방정식에서 파동 방정식 유도

$\vec{J} = 0$, $\rho = 0$ (진공)인 경우:

$\nabla\times(\nabla\times\vec{E}) = -\nabla^2\vec{E} = -\mu_0\varepsilon_0\dfrac{\partial^2\vec{E}}{\partial t^2}$

$$
\nabla^2\vec{E} = \mu_0\varepsilon_0\frac{\partial^2\vec{E}}{\partial t^2}, \quad c = \frac{1}{\sqrt{\mu_0\varepsilon_0}} \approx 3 \times 10^8\,\text{m/s}
$$

빛의 속도가 전기·자기 상수로부터 나온다 — 빛이 전자기파임을 예측.

### 전자기파의 성질

- 횡파: $\vec{E}$, $\vec{B}$, 진행 방향이 서로 수직
- 진공에서 속도 $c$
- $E = cB$ (전기장과 자기장의 크기 관계)
- **포인팅 벡터**: 에너지 흐름의 방향과 세기: $\vec{S} = \dfrac{1}{\mu_0}\vec{E}\times\vec{B}$

**빛의 압력(복사압)**: $P = I/c$ (흡수), $P = 2I/c$ (반사). 태양풍, 레이저 트랩의 원리.

---

## 연습문제

**문제 1.** 반지름 $R$인 균일하게 대전된 구 표면 ($r = R$)의 전기장을 가우스 법칙으로 구하여라.

> **풀이**
>
> 구 표면에 반지름 $R$인 가우스 면을 잡으면 전기장은 면에 수직·균일:
>
> $$E \cdot 4\pi R^2 = \frac{Q}{\varepsilon_0} \implies E = \frac{Q}{4\pi\varepsilon_0 R^2}$$

---

**문제 2.** 코일의 자속이 $\Phi_B = 0.5\cos(100t)\,\text{Wb}$일 때 유도 기전력을 구하여라.

> **풀이**
>
> $$\mathcal{E} = -\frac{d\Phi_B}{dt} = 0.5 \times 100\sin(100t) = 50\sin(100t)\,\text{V}$$

---

**문제 3.** 맥스웰의 변위 전류 개념이 왜 중요한지 설명하고, 이를 도입한 물리적 이유를 써라.

> **풀이**
>
> 전하 보존 법칙에 의하면 전류가 끊기는 지점(커패시터 판 사이)에서도 $\nabla\cdot\vec{J} = -\partial\rho/\partial t \ne 0$이 될 수 있다.
>
> 앙페르 법칙 $\nabla\times\vec{B} = \mu_0\vec{J}$만으로는 발산을 취하면 $0 = \mu_0\nabla\cdot\vec{J}$가 되어 모순.
>
> 맥스웰은 $\mu_0\varepsilon_0\partial\vec{E}/\partial t$ 항을 추가해 일관성을 복원했고, 이로부터 전자기파가 예측되었다.

---

**문제 4.** 평행판 커패시터 ($C = 10\,\mu\text{F}$)를 $V = 12\,\text{V}$로 충전할 때 저장되는 에너지를 구하여라.

> **풀이**
>
> $$U = \frac{1}{2}CV^2 = \frac{1}{2} \times 10 \times 10^{-6} \times 144 = 7.2 \times 10^{-4}\,\text{J} = 0.72\,\text{mJ}$$
