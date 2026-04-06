---
title: "전자기학"
description: "맥스웰 방정식, 정전기학, 자기학, 전자기파를 다룹니다."
date: "2026-04-06"
subject: "science"
category: "물리"
level: "university"
tags: ["전자기학", "맥스웰방정식", "전기장", "자기장", "대학물리"]
---

## 맥스웰 방정식

$$
\nabla \cdot \vec{E} = \frac{\rho}{\varepsilon_0} \quad \text{(가우스 법칙)}
$$

$$
\nabla \cdot \vec{B} = 0 \quad \text{(자기 단극 없음)}
$$

$$
\nabla \times \vec{E} = -\frac{\partial \vec{B}}{\partial t} \quad \text{(패러데이 법칙)}
$$

$$
\nabla \times \vec{B} = \mu_0\vec{J} + \mu_0\varepsilon_0\frac{\partial \vec{E}}{\partial t} \quad \text{(앙페르-맥스웰 법칙)}
$$

---

## 정전기학

### 쿨롱 법칙과 전기장

$$
\vec{E} = \frac{1}{4\pi\varepsilon_0}\frac{q}{r^2}\hat{r}
$$

### 가우스 법칙 응용

균일하게 대전된 구 외부 ($r > R$):

$$
E = \frac{Q}{4\pi\varepsilon_0 r^2} \quad \text{(점전하와 동일)}
$$

내부 ($r < R$): $E = 0$

### 전위와 전기 퍼텐셜 에너지

$$
V = -\int \vec{E} \cdot d\vec{l}, \quad U = qV
$$

---

## 자기학

### 비오-사바르 법칙

$$
d\vec{B} = \frac{\mu_0}{4\pi}\frac{Id\vec{l} \times \hat{r}}{r^2}
$$

### 앙페르 법칙

$$
\oint \vec{B} \cdot d\vec{l} = \mu_0 I_{\text{enc}}
$$

### 패러데이 유도 법칙

$$
\mathcal{E} = -\frac{d\Phi_B}{dt}, \quad \Phi_B = \int \vec{B} \cdot d\vec{A}
$$

렌츠 법칙: 유도 전류는 자속 변화를 방해하는 방향으로 흐른다.

---

## 전자기파

맥스웰 방정식으로부터 전자기파 방정식이 유도된다.

$$
\nabla^2\vec{E} = \mu_0\varepsilon_0\frac{\partial^2\vec{E}}{\partial t^2}
$$

$$
c = \frac{1}{\sqrt{\mu_0\varepsilon_0}} \approx 3 \times 10^8\,\text{m/s}
$$

---

## 연습문제

**문제 1.** 반지름 $R$인 균일하게 대전된 구 표면의 전기장을 가우스 법칙으로 구하여라.

> **풀이**
>
> 반지름 $r = R$인 가우스 면을 잡으면
>
> $$E \cdot 4\pi R^2 = \frac{Q}{\varepsilon_0} \implies E = \frac{Q}{4\pi\varepsilon_0 R^2}$$

---

**문제 2.** 코일의 자속이 $\Phi_B = 0.5\cos(100t)\,\text{Wb}$일 때 유도 기전력을 구하여라.

> **풀이**
>
> $$\mathcal{E} = -\frac{d\Phi_B}{dt} = -\frac{d}{dt}[0.5\cos(100t)] = 0.5 \times 100\sin(100t) = 50\sin(100t)\,\text{V}$$
