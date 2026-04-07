---
title: "일반화학"
description: "화학 열역학, 화학 평형, 전기화학, 반응 속도론과 열역학적 원리를 다룹니다."
date: "2026-04-06"
subject: "science"
category: "화학"
level: "university"
tags: ["일반화학", "화학열역학", "깁스자유에너지", "전기화학", "반응속도론", "대학화학"]
---

일반화학에서는 [고등 화학](/science/chemistry/high)에서 배운 화학 반응의 자발성과 평형을 열역학적으로 엄밀하게 다룬다. [통계역학](/science/physics/university/statistical-mechanics)의 엔트로피 개념이 깁스 자유 에너지와 연결되고, [대학 물리화학](/science/chemistry/university/physical-chemistry)에서 이 내용을 더 심화한다. 전지와 전해질([전자기학](/science/physics/university/electromagnetism)의 전기 개념)도 화학 열역학으로 설명된다.

---

## 화학 열역학

### 열역학 함수

**엔탈피 $H$**: $\Delta H = Q_p$ (등압 과정). 결합 에너지 변화.

- $\Delta H < 0$: 발열 반응 (열 방출)
- $\Delta H > 0$: 흡열 반응 (열 흡수)

**엔트로피 $S$**: 무질서도, 미시 상태 수.

$$
\Delta S > 0: \text{기체 생성, 용해, 온도 증가 등 무질서 증가}
$$

**깁스 자유 에너지**:

$$
\Delta G = \Delta H - T\Delta S
$$

| $\Delta H$ | $\Delta S$ | $\Delta G$ | 자발성 |
|----------|----------|----------|------|
| − | + | 항상 − | 항상 자발 |
| + | − | 항상 + | 항상 비자발 |
| − | − | 저온 −, 고온 + | 저온에서 자발 |
| + | + | 저온 +, 고온 − | 고온에서 자발 |

### 표준 깁스 에너지와 평형 상수

$$
\Delta G^\circ = -RT\ln K
$$

$$
\Delta G = \Delta G^\circ + RT\ln Q
$$

$Q$: 반응 지수 (현재 농도로 계산한 평형 상수 형태)

- $Q < K$: 정반응 방향으로 진행 ($\Delta G < 0$)
- $Q > K$: 역반응 방향으로 진행 ($\Delta G > 0$)
- $Q = K$: 평형 ($\Delta G = 0$)

### 헤스의 법칙

$$
\Delta H_{\text{반응}} = \sum \Delta H_f^\circ(\text{생성물}) - \sum \Delta H_f^\circ(\text{반응물})
$$

반응 경로에 무관하게 엔탈피 변화는 일정. 상태 함수의 성질.

---

## 화학 평형

### 평형 상수 표현

$$
aA + bB \rightleftharpoons cC + dD
$$

$$
K_c = \frac{[C]^c[D]^d}{[A]^a[B]^b}, \quad K_p = K_c(RT)^{\Delta n_{\text{기체}}}
$$

순수 고체·순수 액체는 $K$ 표현에 포함하지 않는다.

### 약산의 이온화 평형

아세트산(약산): $\text{CH}_3\text{COOH} \rightleftharpoons \text{H}^+ + \text{CH}_3\text{COO}^-$

$$
K_a = \frac{[\text{H}^+][\text{CH}_3\text{COO}^-]}{[\text{CH}_3\text{COOH}]}
$$

**Henderson-Hasselbalch 방정식** (완충액):

$$
\text{pH} = pK_a + \log\frac{[\text{A}^-]}{[\text{HA}]}
$$

$[\text{A}^-] = [\text{HA}]$일 때 $\text{pH} = pK_a$.

### 용해도 곱 상수 ($K_{sp}$)

$\text{AgCl} \rightleftharpoons \text{Ag}^+ + \text{Cl}^-$:

$$
K_{sp} = [\text{Ag}^+][\text{Cl}^-]
$$

$K_{sp} = 1.8 \times 10^{-10}$ — 매우 작음 → AgCl은 거의 불용.

**공통이온 효과**: Cl⁻ 농도를 높이면 AgCl의 용해도가 더 감소.

---

## 반응 속도론

### 속도 법칙

$$
\text{속도} = k[A]^m[B]^n
$$

$m, n$: 반응 차수 (실험으로만 결정, 화학 반응식의 계수와 무관!)

**적분된 속도 법칙**:

| 차수 | 적분 형태 | 반감기 |
|------|---------|-------|
| 0차 | $[A] = [A]_0 - kt$ | $t_{1/2} = [A]_0/2k$ |
| 1차 | $\ln[A] = \ln[A]_0 - kt$ | $t_{1/2} = \ln 2/k$ (농도 무관!) |
| 2차 | $1/[A] = 1/[A]_0 + kt$ | $t_{1/2} = 1/(k[A]_0)$ |

### 아레니우스 방정식

$$
k = Ae^{-E_a/RT}, \quad \ln k = \ln A - \frac{E_a}{RT}
$$

$E_a$: 활성화 에너지 — 반응이 일어나기 위한 최소 에너지 장벽.

**두 온도에서의 속도 상수 비교**:

$$
\ln\frac{k_2}{k_1} = \frac{E_a}{R}\left(\frac{1}{T_1} - \frac{1}{T_2}\right)
$$

### 반응 메커니즘과 속도 결정 단계

다단계 반응에서 **느린 단계(rate-determining step)**가 전체 반응 속도를 결정.

중간체(intermediate): 생성되었다가 소비되는 물질. 속도 법칙에 포함하지 않음.

촉매: 활성화 에너지를 낮춰 속도 증가. 반응 전후 재생. 평형 상수는 변하지 않음.

---

## 전기화학

### 산화·환원과 전자 이동

**산화(oxidation)**: 전자 잃음. **환원(reduction)**: 전자 얻음.

**표준 수소 전극(SHE)**: $\text{H}^+/\text{H}_2$ 전위 = 0.00 V (기준)

**표준 환원 전위 $E°$** (일부):

| 반쪽 반응 | $E°(\text{V})$ |
|---------|-------------|
| $\text{F}_2 + 2e^- \to 2\text{F}^-$ | +2.87 |
| $\text{Cu}^{2+} + 2e^- \to \text{Cu}$ | +0.34 |
| $\text{H}^+ + e^- \to \frac{1}{2}\text{H}_2$ | 0.00 |
| $\text{Zn}^{2+} + 2e^- \to \text{Zn}$ | −0.76 |
| $\text{Li}^+ + e^- \to \text{Li}$ | −3.04 |

### 갈바니 전지 (Galvanic Cell)

자발적인 산화-환원 반응으로 전기 생산.

$$
E^\circ_{\text{cell}} = E^\circ_{\text{환원전극(cathode)}} - E^\circ_{\text{산화전극(anode)}}
$$

$E^\circ_{\text{cell}} > 0$이면 자발적 반응, 전지로 사용 가능.

**깁스 에너지와 연결**:

$$
\Delta G^\circ = -nFE^\circ_{\text{cell}}
$$

$n$: 이동 전자 수, $F = 96485\,\text{C/mol}$ (패러데이 상수)

### 네른스트 방정식

비표준 조건에서:

$$
E = E^\circ - \frac{RT}{nF}\ln Q = E^\circ - \frac{0.0592}{n}\log Q \quad (25°C)
$$

pH 측정 유리 전극이 네른스트 방정식을 이용한다.

### 전기 분해 (Electrolysis)

비자발적인 반응을 외부 전기로 강제 진행.

**패러데이 법칙**:

$$
m = \frac{MIt}{nF}
$$

$m$: 석출된 물질의 질량, $M$: 몰질량, $I$: 전류, $t$: 시간

---

## 연습문제

**문제 1.** $\Delta H = -100\,\text{kJ}$, $\Delta S = -200\,\text{J/K}$인 반응이 25°C에서 자발적인지 판단하여라.

> **풀이**
>
> $T = 298\,\text{K}$
>
> $$\Delta G = \Delta H - T\Delta S = -100000 - 298 \times (-200) = -100000 + 59600 = -40400\,\text{J} = -40.4\,\text{kJ}$$
>
> $\Delta G < 0$이므로 **자발적**이다.

---

**문제 2.** 초기 농도 $[\text{A}]_0 = 0.8\,\text{mol/L}$인 1차 반응에서 $k = 0.1\,\text{min}^{-1}$일 때, 반감기와 10분 후 농도를 구하여라.

> **풀이**
>
> $$t_{1/2} = \frac{\ln 2}{k} = \frac{0.693}{0.1} = 6.93\,\text{min}$$
>
> $$[\text{A}] = [\text{A}]_0 e^{-kt} = 0.8 \times e^{-0.1 \times 10} = 0.8 \times e^{-1} \approx 0.8 \times 0.368 = 0.294\,\text{mol/L}$$

---

**문제 3.** 아연-구리 갈바니 전지 ($\text{Zn}/\text{Zn}^{2+}\|\text{Cu}^{2+}/\text{Cu}$)의 표준 전지 전위와 $\Delta G°$를 구하여라.

> **풀이**
>
> $E°(\text{Cu}^{2+}/\text{Cu}) = +0.34\,\text{V}$, $E°(\text{Zn}^{2+}/\text{Zn}) = -0.76\,\text{V}$
>
> $$E°_{\text{cell}} = E°_{\text{cathode}} - E°_{\text{anode}} = 0.34 - (-0.76) = 1.10\,\text{V}$$
>
> $n = 2$ (전자 2개 이동):
>
> $$\Delta G° = -nFE° = -2 \times 96485 \times 1.10 = -212\,\text{kJ/mol}$$
>
> $E° > 0$이므로 자발적. 다니엘 전지가 이 반응을 이용한 역사적인 전지.

---

**문제 4.** 아세트산($K_a = 1.8 \times 10^{-5}$) 0.1 mol/L 수용액의 pH를 구하여라.

> **풀이**
>
> $\text{CH}_3\text{COOH} \rightleftharpoons \text{H}^+ + \text{CH}_3\text{COO}^-$
>
> $x = [\text{H}^+]$로 놓으면:
>
> $K_a = \dfrac{x^2}{0.1 - x} \approx \dfrac{x^2}{0.1} = 1.8 \times 10^{-5}$
>
> $x^2 = 1.8 \times 10^{-6} \implies x = 1.34 \times 10^{-3}\,\text{mol/L}$
>
> $$\text{pH} = -\log(1.34 \times 10^{-3}) \approx 2.87$$
>
> (이온화 비율: $1.34 \times 10^{-3}/0.1 = 1.34\%$, 약산 근사 타당)
