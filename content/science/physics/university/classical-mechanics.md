---
title: "고전역학"
description: "라그랑주·해밀턴 역학, 중심력 문제, 강체 역학, 진동을 다룹니다."
date: "2026-04-06"
subject: "science"
category: "물리"
level: "university"
tags: ["고전역학", "라그랑주역학", "해밀턴역학", "진동", "대학물리"]
---

## 뉴턴 역학 복습

### 관성계와 비관성계

비관성계에서는 **의사힘(pseudo force)**이 나타난다.

- 회전계의 원심력: $\vec{F}_c = -m\vec{\omega} \times (\vec{\omega} \times \vec{r})$
- 코리올리 힘: $\vec{F}_{Cor} = -2m\vec{\omega} \times \vec{v}$

---

## 라그랑주 역학

### 라그랑지안

$$
L = T - V \quad \text{(운동에너지 - 퍼텐셜에너지)}
$$

### 오일러-라그랑주 방정식

$$
\frac{d}{dt}\frac{\partial L}{\partial \dot{q}_i} - \frac{\partial L}{\partial q_i} = 0
$$

**장점**: 구속 조건이 있는 계를 일반화 좌표로 쉽게 다룰 수 있다.

**예제**: 단진자

$$
L = \frac{1}{2}ml^2\dot{\theta}^2 - mgl(1-\cos\theta)
$$

$$
ml^2\ddot{\theta} + mgl\sin\theta = 0 \implies \ddot{\theta} + \frac{g}{l}\sin\theta = 0
$$

소각 근사($\sin\theta \approx \theta$):

$$
\omega_0 = \sqrt{\frac{g}{l}}, \quad T = 2\pi\sqrt{\frac{l}{g}}
$$

---

## 해밀턴 역학

### 해밀토니안

$$
H = \sum_i p_i \dot{q}_i - L = T + V
$$

### 해밀턴 방정식

$$
\dot{q}_i = \frac{\partial H}{\partial p_i}, \quad \dot{p}_i = -\frac{\partial H}{\partial q_i}
$$

---

## 중심력 문제

### 케플러 문제

만유인력 $F = -GMm/r^2$ 아래에서의 운동.

**케플러 제1법칙**: 행성은 태양을 한 초점으로 하는 타원 궤도를 돈다.

**케플러 제3법칙**:

$$
T^2 \propto a^3, \quad T^2 = \frac{4\pi^2}{GM}a^3
$$

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
> 단조화 진동: $\omega = \sqrt{k/m}$
