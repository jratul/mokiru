---
title: "일반화학"
description: "화학 열역학, 화학 평형, 전기화학, 반응 속도론을 다룹니다."
date: "2026-04-06"
subject: "science"
category: "화학"
level: "university"
tags: ["일반화학", "화학열역학", "평형", "전기화학", "대학화학"]
---

## 화학 열역학

### 깁스 자유 에너지

$$
\Delta G = \Delta H - T\Delta S
$$

| $\Delta G$ | 반응 |
|-----------|------|
| $< 0$ | 자발적 |
| $= 0$ | 평형 |
| $> 0$ | 비자발적 |

### 표준 상태

$$
\Delta G^\circ = \Delta H^\circ - T\Delta S^\circ = -RT\ln K
$$

---

## 화학 평형

### 평형 상수

$$
aA + bB \rightleftharpoons cC + dD
$$

$$
K = \frac{[C]^c[D]^d}{[A]^a[B]^b}
$$

### 르샤틀리에 원리

평형 상태의 계에 외부 변화를 가하면, 그 변화를 줄이는 방향으로 평형이 이동한다.

| 변화 | 이동 방향 |
|------|---------|
| 반응물 추가 | 정반응 |
| 온도 상승 | 흡열 반응 방향 |
| 압력 증가 | 기체 몰수 감소 방향 |

---

## 반응 속도론

$$
\text{속도} = k[A]^m[B]^n
$$

**아레니우스 방정식**:

$$
k = Ae^{-E_a/RT}
$$

$E_a$: 활성화 에너지. 온도 상승 → 반응 속도 증가.

**반감기** (1차 반응):

$$
t_{1/2} = \frac{\ln 2}{k}
$$

---

## 전기화학

### 표준 전극 전위

산화-환원 반응의 자발성:

$$
E^\circ_{\text{cell}} = E^\circ_{\text{cathode}} - E^\circ_{\text{anode}}
$$

$E^\circ_{\text{cell}} > 0$이면 자발적.

$$
\Delta G^\circ = -nFE^\circ_{\text{cell}}
$$

$F = 96485\,\text{C/mol}$ (패러데이 상수)

---

## 연습문제

**문제 1.** $\Delta H = -100\,\text{kJ}$, $\Delta S = -200\,\text{J/K}$인 반응이 $25°C$에서 자발적인지 판단하여라.

> **풀이**
>
> $$\Delta G = \Delta H - T\Delta S = -100000 - 298 \times (-200) = -100000 + 59600 = -40400\,\text{J} < 0$$
>
> $\Delta G < 0$이므로 **자발적**이다.

---

**문제 2.** 초기 농도 $[\text{A}]_0 = 0.8\,\text{mol/L}$인 1차 반응에서 $k = 0.1\,\text{min}^{-1}$일 때, 반감기와 10분 후 농도를 구하여라.

> **풀이**
>
> $$t_{1/2} = \frac{\ln 2}{0.1} \approx 6.93\,\text{min}$$
>
> $$[\text{A}] = 0.8 \times e^{-0.1 \times 10} = 0.8 \times e^{-1} \approx 0.8 \times 0.368 = 0.294\,\text{mol/L}$$
