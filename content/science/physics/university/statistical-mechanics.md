---
title: "통계역학"
description: "열역학 법칙, 볼츠만 통계, 앙상블 이론, 상전이를 다룹니다."
date: "2026-04-06"
subject: "science"
category: "물리"
level: "university"
tags: ["통계역학", "열역학", "볼츠만", "앙상블", "대학물리"]
---

## 열역학 법칙

### 제0법칙

열적 평형의 이행성 (온도의 정의).

### 제1법칙 (에너지 보존)

$$
\Delta U = Q - W
$$

$\Delta U$: 내부 에너지 변화, $Q$: 흡수 열량, $W$: 계가 한 일

### 제2법칙 (엔트로피 증가)

$$
dS = \frac{dQ_{\text{rev}}}{T} \geq 0 \quad \text{(고립계)}
$$

클라우지우스 부등식: $\oint \dfrac{dQ}{T} \leq 0$

### 제3법칙

절대 영도($T = 0$)에서 완벽한 결정의 엔트로피 $S = 0$.

---

## 볼츠만 통계

### 분배함수

$$
Z = \sum_i e^{-\beta E_i}, \quad \beta = \frac{1}{k_B T}
$$

### 열역학량과의 관계

$$
F = -k_B T \ln Z, \quad \langle E \rangle = -\frac{\partial \ln Z}{\partial \beta}, \quad S = -\frac{\partial F}{\partial T}
$$

### 볼츠만 엔트로피

$$
S = k_B \ln \Omega
$$

$\Omega$: 미시 상태 수, $k_B = 1.38 \times 10^{-23}\,\text{J/K}$

---

## 앙상블 이론

| 앙상블 | 고정 변수 | 특성 함수 |
|--------|---------|---------|
| 미소정준 | $E, V, N$ | $\ln\Omega$ |
| 정준 | $T, V, N$ | 헬름홀츠 자유에너지 $F$ |
| 대정준 | $T, V, \mu$ | 그랜드 포텐셜 $\Omega_G$ |

---

## 연습문제

**문제 1.** 2상태 계 (에너지 0, $\varepsilon$)의 분배함수와 평균 에너지를 구하여라.

> **풀이**
>
> $$Z = 1 + e^{-\beta\varepsilon}$$
>
> $$\langle E \rangle = -\frac{\partial \ln Z}{\partial \beta} = \frac{\varepsilon e^{-\beta\varepsilon}}{1 + e^{-\beta\varepsilon}} = \frac{\varepsilon}{e^{\beta\varepsilon} + 1}$$
>
> $T \to \infty$ ($\beta \to 0$): $\langle E \rangle \to \varepsilon/2$ (등분배)
>
> $T \to 0$ ($\beta \to \infty$): $\langle E \rangle \to 0$ (바닥 상태)

---

**문제 2.** 이상 기체의 엔트로피가 부피가 2배로 증가할 때 어떻게 변하는지 계산하여라.

> **풀이**
>
> 등온 팽창에서 이상 기체의 미시 상태 수는 부피에 비례: $\Omega \propto V^N$
>
> $$\Delta S = k_B \ln\frac{\Omega_f}{\Omega_i} = k_B\ln\frac{V_f^N}{V_i^N} = Nk_B\ln\frac{V_f}{V_i} = Nk_B\ln 2 = nR\ln 2$$
