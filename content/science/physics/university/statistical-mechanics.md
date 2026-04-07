---
title: "통계역학"
description: "열역학 법칙, 볼츠만 통계, 앙상블 이론, 페르미-디랙·보스-아인슈타인 분포, 상전이를 다룹니다."
date: "2026-04-06"
subject: "science"
category: "물리"
level: "university"
tags: ["통계역학", "열역학", "볼츠만", "앙상블", "페르미디랙", "대학물리"]
---

통계역학은 미시적 입자들의 운동(양자역학)으로부터 거시적 열역학 성질을 유도한다. [대학 확률론](/math/university/probability)의 통계적 앙상블, [양자역학](/science/physics/university/quantum-mechanics)의 에너지 준위, [고전역학](/science/physics/university/classical-mechanics)의 위상 공간이 모두 연결된다. 반도체 물리(페르미 준위), 레이저(보손 통계), 천문학(별의 내부 압력), AI의 [정보이론](/math/ai-math/information-theory)(볼츠만 엔트로피)과 깊이 연결된다.

---

## 열역학 법칙

### 제0법칙: 온도의 정의

열평형은 이행성(transitivity)이 성립한다: $A$와 $B$가 평형, $B$와 $C$가 평형이면 $A$와 $C$도 평형.

→ **온도**를 잘 정의할 수 있음.

### 제1법칙: 에너지 보존

$$
dU = \delta Q - \delta W
$$

$dU$: 내부 에너지 변화 (상태 함수), $\delta Q$: 계가 흡수한 열, $\delta W$: 계가 한 일.

기체의 일: $\delta W = P\,dV$

**열역학 과정**:

| 과정 | 조건 | $\delta Q = $ |
|------|------|-------------|
| 등온 (isothermal) | $T = \text{const}$ | $W$ (이상 기체) |
| 등압 (isobaric) | $P = \text{const}$ | $\Delta H = \Delta U + P\Delta V$ |
| 등적 (isochoric) | $V = \text{const}$ | $\Delta U$ |
| 단열 (adiabatic) | $Q = 0$ | 0 |

### 제2법칙: 엔트로피

**클라우지우스**: 열은 스스로 저온 → 고온으로 흐르지 않는다.

**켈빈-플랑크**: 하나의 열원에서 열을 흡수해 모두 일로 전환하는 기관은 없다.

**엔트로피 정의**:

$$
dS = \frac{\delta Q_{\text{rev}}}{T} \geq 0 \quad \text{(고립계)}
$$

**카르노 효율 (최대 효율)**:

$$
e_{\text{Carnot}} = 1 - \frac{T_{\text{저온}}}{T_{\text{고온}}}
$$

어떤 열기관도 카르노 효율을 초과할 수 없다.

### 제3법칙

$$
S \to 0 \quad \text{as} \quad T \to 0\,\text{K} \quad \text{(완전한 결정)}
$$

절대 영도에 도달하는 데 무한 번의 단계가 필요하다 (도달 불가능).

---

## 볼츠만 통계

### 미시 상태와 거시 상태

**미시 상태(microstate)**: 모든 입자의 정확한 상태 지정.

**거시 상태(macrostate)**: 에너지, 부피, 입자 수 같은 거시적 변수.

하나의 거시 상태에 해당하는 미시 상태의 수: $\Omega$

### 볼츠만 엔트로피

$$
S = k_B \ln \Omega, \quad k_B = 1.38 \times 10^{-23}\,\text{J/K}
$$

엔트로피는 시스템의 **무질서도** 또는 **정보 부족량**의 척도.

**정보이론과의 연결**: $S/k_B = -\sum_i P_i \ln P_i$ = [섀넌 엔트로피](/math/ai-math/information-theory) (자연 단위)

### 볼츠만 분포 (Canonical Ensemble)

온도 $T$의 열 저장소(heat bath)와 접촉한 계에서 에너지 $E_i$인 상태의 확률:

$$
P_i = \frac{e^{-\beta E_i}}{Z}, \quad \beta = \frac{1}{k_B T}
$$

$Z = \sum_i e^{-\beta E_i}$: **분배함수(partition function)**

**물리적 의미**: 온도가 높을수록 높은 에너지 상태의 확률이 높아진다.

### 열역학량과 분배함수

$$
F = -k_B T \ln Z \quad \text{(헬름홀츠 자유에너지)}
$$

$$
\langle E \rangle = -\frac{\partial \ln Z}{\partial \beta}
$$

$$
S = -\frac{\partial F}{\partial T}\bigg|_{V,N}, \quad P = -\frac{\partial F}{\partial V}\bigg|_{T,N}
$$

분배함수를 구하면 모든 열역학량을 유도할 수 있다!

---

## 앙상블 이론

| 앙상블 | 고정 변수 | 상호작용 | 특성 함수 |
|--------|---------|--------|---------|
| 미소정준 (microcanonical) | $E, V, N$ | 없음 (고립계) | $S = k_B\ln\Omega$ |
| 정준 (canonical) | $T, V, N$ | 에너지 교환 | $F = -k_BT\ln Z$ |
| 대정준 (grand canonical) | $T, V, \mu$ | 에너지 + 입자 교환 | $\Omega_G = -k_BT\ln\mathcal{Z}$ |

**화학 퍼텐셜 $\mu$**: 입자 하나를 추가할 때 변하는 자유 에너지.

---

## 양자 통계

### 동일 입자

양자 입자는 구별 불가능 → 고전 통계와 다름.

**페르미온(Fermion)**: 반정수 스핀 ($s = 1/2, 3/2, \ldots$). 파울리 배타 원리 적용 (전자, 양성자, 중성자).

**보손(Boson)**: 정수 스핀 ($s = 0, 1, 2, \ldots$). 같은 상태 점유 허용 (광자, 4He 원자, 힉스 보손).

### 페르미-디랙 분포 (Fermi-Dirac)

에너지 $\varepsilon$인 단일 상태를 페르미온이 점유할 확률:

$$
f(\varepsilon) = \frac{1}{e^{(\varepsilon - \mu)/k_BT} + 1}
$$

$T = 0$에서 계단 함수: $\varepsilon < \mu$이면 점유 확률 1, $\varepsilon > \mu$이면 0.

**페르미 에너지 $E_F$**: $T = 0$에서 화학 퍼텐셜. 반도체의 페르미 준위, 금속의 전자 띠 구조와 직결.

### 보스-아인슈타인 분포

에너지 $\varepsilon$인 상태의 평균 점유 수:

$$
\bar{n}(\varepsilon) = \frac{1}{e^{(\varepsilon - \mu)/k_BT} - 1}
$$

**보스-아인슈타인 응축(BEC)**: 온도가 임계값 이하로 내려가면 대부분의 보손이 바닥 상태로 응축. 초유동 헬륨, 레이저 냉각 원자.

**플랑크 분포(광자)**: 화학 퍼텐셜 $\mu = 0$인 보스-아인슈타인 분포. 흑체 복사 스펙트럼 정확히 설명.

---

## 연습문제

**문제 1.** 2상태 계 (에너지 0, $\varepsilon$)의 분배함수와 평균 에너지를 구하여라.

> **풀이**
>
> $$Z = 1 + e^{-\beta\varepsilon}$$
>
> $$\langle E \rangle = -\frac{\partial \ln Z}{\partial \beta} = \frac{\varepsilon e^{-\beta\varepsilon}}{1 + e^{-\beta\varepsilon}} = \frac{\varepsilon}{e^{\beta\varepsilon} + 1}$$
>
> 이것은 스핀 1/2 계의 페르미-디랙 분포와 같은 형태다.
>
> - $T \to \infty$ ($\beta \to 0$): $\langle E \rangle \to \varepsilon/2$ (등분배 정리)
> - $T \to 0$ ($\beta \to \infty$): $\langle E \rangle \to 0$ (바닥 상태에만 존재)

---

**문제 2.** 이상 기체의 등온 팽창에서 부피가 $V_i \to V_f$로 변할 때 엔트로피 변화를 구하여라.

> **풀이**
>
> 등온 과정에서 $\Delta U = 0$ (이상 기체), 따라서 $Q = W = nRT\ln(V_f/V_i)$.
>
> $$\Delta S = \frac{Q}{T} = nR\ln\frac{V_f}{V_i}$$
>
> 볼츠만 엔트로피 관점: 이상 기체의 미시 상태 수 $\Omega \propto V^N$이므로:
> $\Delta S = k_B\ln(\Omega_f/\Omega_i) = Nk_B\ln(V_f/V_i) = nR\ln(V_f/V_i)$ (일치)

---

**문제 3.** 카르노 기관이 고온 300°C, 저온 27°C 사이에서 작동할 때 최대 효율을 구하여라.

> **풀이**
>
> 켈빈 온도로 변환: $T_H = 573\,\text{K}$, $T_L = 300\,\text{K}$
>
> $$e_{\text{Carnot}} = 1 - \frac{T_L}{T_H} = 1 - \frac{300}{573} \approx 1 - 0.524 = 47.6\%$$

---

**문제 4.** 페르미-디랙 분포에서 $T = 0$일 때 $\varepsilon < E_F$인 상태의 점유 확률을 구하여라.

> **풀이**
>
> $T \to 0$이면 $\beta \to \infty$:
>
> $\varepsilon < E_F$이면 $(\varepsilon - E_F) < 0$이므로 $e^{(\varepsilon-E_F)/k_BT} \to 0$
>
> $$f(\varepsilon) = \frac{1}{0 + 1} = 1$$
>
> $\varepsilon > E_F$이면 $e^{(\varepsilon-E_F)/k_BT} \to \infty$이므로 $f(\varepsilon) \to 0$.
>
> 따라서 $T = 0$에서 $E_F$ 아래의 모든 상태 점유 확률 = 1, 위는 0. 완전한 계단 함수.
