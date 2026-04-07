---
title: "기하"
description: "이차곡선(포물선·타원·쌍곡선), 벡터, 공간벡터, 직선과 평면의 방정식을 다룹니다."
date: "2026-04-06"
subject: "math"
category: "고등수학"
level: "high"
tags: ["기하", "이차곡선", "벡터", "타원", "쌍곡선", "공간벡터", "고등수학"]
---

고등 기하는 좌표와 벡터를 이용해 도형을 대수적으로 다루는 과목이다. 이차곡선은 [공학수학](/math/engineering-math/laplace)·[물리학](/science/physics/university/classical-mechanics)의 케플러 궤도에, 벡터는 [대학 선형대수학](/math/university/linear-algebra)·[AI 수학 선형대수](/math/ai-math/linear-algebra)의 핵심 언어로 이어진다. 중학교 기하 내용은 [중학 기하](/math/middle/geometry) 참고.

---

## 이차곡선

이차곡선(conic section)은 원뿔을 평면으로 자른 단면에서 나타나는 도형이다. 천문학(케플러 법칙), 공학(안테나 설계), 광학(반사경)에 광범위하게 쓰인다.

### 포물선

초점 $F(p, 0)$, 준선 $x = -p$인 포물선: 준선까지와 초점까지의 거리가 같은 점의 자취.

$$
y^2 = 4px
$$

초점 $F(0, p)$, 준선 $y = -p$인 포물선:

$$
x^2 = 4py
$$

**성질**:
- 꼭짓점: 원점 $(0, 0)$
- $p > 0$이면 오른쪽(또는 위쪽)으로 열린다
- 반사성: 초점에서 출발한 빛은 포물면에 반사되어 축에 평행하게 나간다 (위성 안테나, 반사망원경 원리)

**예**: $y^2 = 8x$에서 $4p = 8 \implies p = 2$, 초점 $(2, 0)$, 준선 $x = -2$

### 타원

두 초점 $F(c, 0)$, $F'(-c, 0)$까지 거리의 합이 $2a$ (상수)인 점의 자취 ($a > b > 0$, $c^2 = a^2 - b^2$):

$$
\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1
$$

| 요소 | 설명 |
|------|------|
| 장축 길이 | $2a$ ($x$축 방향) |
| 단축 길이 | $2b$ ($y$축 방향) |
| 초점 | $(\pm c, 0)$, $c = \sqrt{a^2 - b^2}$ |
| 이심률 $e$ | $e = \dfrac{c}{a}$, $0 < e < 1$ |

$e$가 0에 가까울수록 원에 가깝고, 1에 가까울수록 길쭉해진다.

**활용**: 지구 공전 궤도는 태양을 한 초점으로 하는 타원이다(케플러 제1법칙).

### 쌍곡선

두 초점 $F(c, 0)$, $F'(-c, 0)$까지 거리의 차의 절댓값이 $2a$ (상수)인 점의 자취 ($c^2 = a^2 + b^2$):

$$
\frac{x^2}{a^2} - \frac{y^2}{b^2} = 1 \quad \text{(점근선: } y = \pm\frac{b}{a}x\text{)}
$$

**성질**:
- 두 가지 분리된 곡선으로 이루어짐
- 이심률 $e = \dfrac{c}{a} > 1$
- 점근선: 쌍곡선이 한없이 가까워지지만 만나지 않는 직선

$y$축 방향 쌍곡선:

$$
\frac{y^2}{a^2} - \frac{x^2}{b^2} = 1
$$

---

## 평면벡터

### 벡터의 기본

**벡터(vector)**: 크기(magnitude)와 방향(direction)을 동시에 갖는 양.
- 크기만 있는 양: **스칼라** (온도, 질량, 속력)
- 벡터의 예: 속도, 힘, 변위

점 $A$에서 $B$로의 벡터: $\overrightarrow{AB}$

같은 크기, 같은 방향이면 위치에 상관없이 **같은 벡터**다.

**영벡터** $\vec{0}$: 크기가 0이고 방향이 없는 벡터.

### 벡터의 연산

성분으로 나타낼 때 $\vec{a} = (a_1, a_2)$, $\vec{b} = (b_1, b_2)$:

$$
\vec{a} + \vec{b} = (a_1 + b_1,\, a_2 + b_2) \quad \text{(평행사변형 법칙)}
$$

$$
\vec{a} - \vec{b} = (a_1 - b_1,\, a_2 - b_2) \quad \text{(차벡터)}
$$

$$
k\vec{a} = (ka_1,\, ka_2) \quad \text{(스칼라 곱)}
$$

$$
|\vec{a}| = \sqrt{a_1^2 + a_2^2} \quad \text{(벡터의 크기, 원점까지 거리)}
$$

**단위벡터**: 크기가 1인 벡터. $\hat{a} = \dfrac{\vec{a}}{|\vec{a}|}$

기저 단위벡터: $\vec{e_1} = (1, 0)$, $\vec{e_2} = (0, 1)$이라 하면 $\vec{a} = a_1\vec{e_1} + a_2\vec{e_2}$

### 내적 (Dot Product)

$$
\vec{a} \cdot \vec{b} = |\vec{a}||\vec{b}|\cos\theta = a_1 b_1 + a_2 b_2
$$

단, $\theta$는 두 벡터 사이의 각도 ($0 \leq \theta \leq \pi$).

**성질**:
- $\vec{a} \cdot \vec{b} = \vec{b} \cdot \vec{a}$ (교환법칙)
- $\vec{a} \cdot (\vec{b} + \vec{c}) = \vec{a} \cdot \vec{b} + \vec{a} \cdot \vec{c}$ (분배법칙)
- $\vec{a} \cdot \vec{a} = |\vec{a}|^2$
- **수직**: $\vec{a} \perp \vec{b} \iff \vec{a} \cdot \vec{b} = 0$

$\cos\theta = \dfrac{\vec{a} \cdot \vec{b}}{|\vec{a}||\vec{b}|}$로 두 벡터 사이의 각도를 계산한다.

### 위치벡터와 분점

원점 $O$에서 점 $P$까지의 벡터를 점 $P$의 **위치벡터** $\vec{p} = \overrightarrow{OP}$라 한다.

점 $A$, $B$의 위치벡터를 $\vec{a}$, $\vec{b}$라 할 때, 선분 $AB$를 $m:n$으로 **내분**하는 점 $P$의 위치벡터:

$$
\vec{p} = \frac{n\vec{a} + m\vec{b}}{m + n}
$$

**중점** ($m = n = 1$): $\vec{p} = \dfrac{\vec{a} + \vec{b}}{2}$

**외분** ($m:n$ 외분): $\vec{p} = \dfrac{-n\vec{a} + m\vec{b}}{m - n}$ ($m \ne n$)

---

## 공간벡터와 공간도형

### 공간좌표

3차원 공간의 점은 세 좌표 $(x, y, z)$로 나타낸다.

두 점 $A(x_1, y_1, z_1)$, $B(x_2, y_2, z_2)$의 거리:

$$
|AB| = \sqrt{(x_2-x_1)^2 + (y_2-y_1)^2 + (z_2-z_1)^2}
$$

중점: $M = \left(\dfrac{x_1+x_2}{2}, \dfrac{y_1+y_2}{2}, \dfrac{z_1+z_2}{2}\right)$

### 공간벡터의 내적

$\vec{a} = (a_1, a_2, a_3)$, $\vec{b} = (b_1, b_2, b_3)$일 때:

$$
\vec{a} \cdot \vec{b} = a_1 b_1 + a_2 b_2 + a_3 b_3 = |\vec{a}||\vec{b}|\cos\theta
$$

$$
|\vec{a}| = \sqrt{a_1^2 + a_2^2 + a_3^2}
$$

### 구의 방정식

중심 $C(a, b, c)$, 반지름 $r$인 구:

$$
(x-a)^2 + (y-b)^2 + (z-c)^2 = r^2
$$

### 직선의 방정식 (공간)

점 $A(x_0, y_0, z_0)$를 지나고 방향벡터 $\vec{d} = (l, m, n)$인 직선의 매개변수 방정식:

$$
x = x_0 + lt, \quad y = y_0 + mt, \quad z = z_0 + nt
$$

대칭형: $\dfrac{x - x_0}{l} = \dfrac{y - y_0}{m} = \dfrac{z - z_0}{n}$

### 평면의 방정식

법선벡터 $\vec{n} = (a, b, c)$와 점 $(x_0, y_0, z_0)$를 지나는 평면:

$$
a(x - x_0) + b(y - y_0) + c(z - z_0) = 0
$$

즉, $ax + by + cz = d$ ($d = ax_0 + by_0 + cz_0$)

점 $(x_1, y_1, z_1)$에서 평면 $ax + by + cz + d = 0$까지의 거리:

$$
\text{거리} = \frac{|ax_1 + by_1 + cz_1 + d|}{\sqrt{a^2 + b^2 + c^2}}
$$

---

## 연습문제

**문제 1.** 포물선 $y^2 = 8x$의 초점과 준선을 구하여라. 또한 이 포물선 위의 점 $P$에서 초점까지의 거리가 5일 때, $P$의 좌표를 구하여라.

> **풀이**
>
> $4p = 8 \implies p = 2$, 초점: $(2, 0)$, 준선: $x = -2$
>
> 포물선의 정의에 의해 초점까지 거리 = 준선까지 거리 $= x + 2 = 5 \implies x = 3$
>
> $y^2 = 8 \times 3 = 24 \implies y = \pm 2\sqrt{6}$
>
> $P = (3, 2\sqrt{6})$ 또는 $(3, -2\sqrt{6})$

---

**문제 2.** $\vec{a} = (3, 4)$, $\vec{b} = (1, -2)$일 때, $\vec{a} \cdot \vec{b}$와 두 벡터가 이루는 각도 $\theta$를 구하여라.

> **풀이**
>
> $\vec{a} \cdot \vec{b} = 3 \times 1 + 4 \times (-2) = 3 - 8 = -5$
>
> $|\vec{a}| = \sqrt{9 + 16} = 5$, $|\vec{b}| = \sqrt{1 + 4} = \sqrt{5}$
>
> $\cos\theta = \dfrac{-5}{5\sqrt{5}} = \dfrac{-1}{\sqrt{5}}$, $\theta = \arccos\!\left(-\dfrac{\sqrt{5}}{5}\right)$

---

**문제 3.** 타원 $\dfrac{x^2}{25} + \dfrac{y^2}{9} = 1$의 두 초점 사이의 거리와 이심률을 구하여라.

> **풀이**
>
> $a^2 = 25$, $b^2 = 9$이므로 $c^2 = 25 - 9 = 16 \implies c = 4$
>
> 두 초점: $(\pm 4, 0)$, 두 초점 사이의 거리 $= 2c = 8$
>
> 이심률 $e = \dfrac{c}{a} = \dfrac{4}{5} = 0.8$

---

**문제 4.** 세 꼭짓점이 $A(1, 2, 3)$, $B(4, 0, -1)$, $C(2, -1, 1)$인 삼각형 $ABC$에서 $\overrightarrow{AB} \cdot \overrightarrow{AC}$를 구하여라. 또한 $\angle A$를 구하여라.

> **풀이**
>
> $\overrightarrow{AB} = (3, -2, -4)$, $\overrightarrow{AC} = (1, -3, -2)$
>
> $\overrightarrow{AB} \cdot \overrightarrow{AC} = 3(1) + (-2)(-3) + (-4)(-2) = 3 + 6 + 8 = 17$
>
> $|\overrightarrow{AB}| = \sqrt{9 + 4 + 16} = \sqrt{29}$, $|\overrightarrow{AC}| = \sqrt{1 + 9 + 4} = \sqrt{14}$
>
> $\cos A = \dfrac{17}{\sqrt{29}\cdot\sqrt{14}} = \dfrac{17}{\sqrt{406}}$
