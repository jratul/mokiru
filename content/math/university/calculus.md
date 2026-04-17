---
title: "미적분학"
description: "수열·급수의 수렴 판정, 테일러급수, 편미분, 중적분, 벡터미적분을 다룹니다."
date: "2026-04-06"
subject: "math"
category: "미적분학"
level: "university"
tags: ["미적분학", "편미분", "중적분", "테일러급수", "그린정리", "대학수학"]
---

대학 미적분학은 [고등 수학Ⅱ](/math/high/math2)·[고등 미적분](/math/high/calculus)을 엄밀하게 확장한다. 1변수 미적분 → 다변수 → 벡터장으로 이어지는 흐름을 파악하는 것이 핵심이다. 편미분은 [AI 수학 미적분](/math/ai-math/calculus)의 역전파, 벡터미적분은 [전자기학](/science/physics/university/electromagnetism)의 맥스웰 방정식의 언어다.

---

## 수열과 급수

### 왜 급수의 수렴을 판정해야 하는가?

무한히 더한다는 것이 항상 무한한 값을 의미하지는 않는다. 예를 들어

$$\frac{1}{2} + \frac{1}{4} + \frac{1}{8} + \frac{1}{16} + \cdots$$

를 계산하면 직관적으로 1이 될 것 같다. 실제로 $S_n = 1 - \dfrac{1}{2^n} \to 1$이다.

반면 겉보기에는 비슷해 보이는 **조화급수**

$$1 + \frac{1}{2} + \frac{1}{3} + \frac{1}{4} + \cdots$$

는 **발산**한다. 항이 0에 수렴하지만 합은 무한대다. 이를 처음 증명한 중세 수학자 오렘(Nicole Oresme)은 이 결과가 워낙 반직관적이어서 당시 사람들을 놀라게 했다. 오렘의 증명은 천재적이다:

$$\frac{1}{3}+\frac{1}{4} > \frac{1}{4}+\frac{1}{4} = \frac{1}{2}$$

$$\frac{1}{5}+\frac{1}{6}+\frac{1}{7}+\frac{1}{8} > \frac{4}{8} = \frac{1}{2}$$

이런 식으로 묶으면 $\dfrac{1}{2}$씩 무한히 더해지므로 발산한다.

이처럼 "항이 0으로 가는 것"은 수렴의 **필요조건**이지 **충분조건**이 아니다. 그래서 여러 판정법이 필요하다.

### 급수 수렴 판정법

각 판정법은 서로 다른 "특징"을 잡아낸다. 어떤 판정법을 선택할지가 중요하다.

**비율 판정법 (Ratio Test)**

$$L = \lim_{n\to\infty}\left|\frac{a_{n+1}}{a_n}\right|$$

- $L < 1$: 절대 수렴
- $L > 1$: 발산
- $L = 1$: 판정 불능

**언제 쓰는가**: 항에 $n!$, $r^n$, $n^n$ 같은 성장 인자가 있을 때. 비율을 취하면 이런 인자들이 깔끔하게 소거된다.

**왜 작동하는가**: $L < 1$이면 충분히 큰 $n$부터 $|a_{n+1}| < r|a_n|$ (단, $L < r < 1$). 즉 $|a_n|$이 등비급수보다 빠르게 줄어든다.

**예제 1.** $\displaystyle\sum_{n=1}^{\infty} \dfrac{n}{2^n}$ 수렴 판정:

$$L = \lim_{n\to\infty}\frac{(n+1)/2^{n+1}}{n/2^n} = \lim_{n\to\infty}\frac{n+1}{2n} = \frac{1}{2} < 1 \implies \textbf{수렴}$$

**예제 2.** $\displaystyle\sum_{n=0}^{\infty} \dfrac{x^n}{n!}$의 수렴 반경:

$$L = \lim_{n\to\infty}\frac{|x|^{n+1}/(n+1)!}{|x|^n/n!} = \lim_{n\to\infty}\frac{|x|}{n+1} = 0 < 1$$

어떤 $x$에 대해서도 $L = 0 < 1$이므로 **모든 실수에서 수렴**. 이것이 $e^x$가 전 실수에서 테일러 급수로 표현되는 이유다.

**비교 판정법 (Comparison Test)**

$0 \leq a_n \leq b_n$이고 $\sum b_n$ 수렴 $\implies$ $\sum a_n$ 수렴

$0 \leq b_n \leq a_n$이고 $\sum b_n$ 발산 $\implies$ $\sum a_n$ 발산

**언제 쓰는가**: 항이 분수 형태이고, 비슷하게 생긴 $p$-급수나 등비급수와 비교할 수 있을 때.

**예제 3.** $\displaystyle\sum \dfrac{1}{n^2+1}$:

$\dfrac{1}{n^2+1} < \dfrac{1}{n^2}$이고 $\sum \dfrac{1}{n^2}$은 $p$-급수($p=2>1$)로 수렴. 따라서 **수렴**.

**예제 4.** $\displaystyle\sum \dfrac{1}{\sqrt{n}-1}$ ($n \geq 2$):

$\dfrac{1}{\sqrt{n}-1} > \dfrac{1}{\sqrt{n}}$이고 $\sum \dfrac{1}{\sqrt{n}} = \sum n^{-1/2}$는 $p$-급수($p = 1/2 \leq 1$)로 발산. 따라서 **발산**.

**적분 판정법 (Integral Test)**

$f(x) > 0$이고 감소함수일 때, $\displaystyle\sum_{n=1}^{\infty} f(n)$과 $\displaystyle\int_1^{\infty} f(x)\,dx$의 수렴·발산이 일치.

**직관**: $\sum f(n)$은 $y = f(x)$ 아래의 단위 폭 직사각형들의 넓이 합이다. 단조 감소 함수의 경우 이것은 $\int_1^\infty f(x)\,dx$와 비교 가능하다.

**$p$-급수 판정 (적분 판정 응용)**: $\displaystyle\sum \dfrac{1}{n^p}$: $p > 1$이면 수렴, $p \leq 1$이면 발산.

$$\int_1^\infty x^{-p}\,dx = \begin{cases} \dfrac{1}{p-1} & p > 1 \\ \infty & p \leq 1 \end{cases}$$

**교대급수 판정법 (Alternating Series Test)**

$\displaystyle\sum_{n=1}^\infty (-1)^n b_n$에서 $b_n > 0$, $b_n \searrow 0$ (단조 감소하며 0으로)이면 수렴.

**예제 5.** $\displaystyle\sum_{n=1}^{\infty} \dfrac{(-1)^n}{n}$: $b_n = \dfrac{1}{n} \searrow 0$이므로 수렴. (이것이 $\ln 2$이다!)

반면 $\displaystyle\sum \dfrac{1}{n}$ (절댓값)은 발산. 이처럼 절댓값을 붙이면 발산하는 수렴급수를 **조건 수렴**이라 한다.

**어떤 판정법을 선택하나?**

| 항의 형태 | 추천 방법 |
|----------|---------|
| $r^n$, $n!$, $n^n$ 포함 | 비율 판정 |
| 분수 형태, 비교 대상 뚜렷 | 비교 판정 |
| 적분 가능한 형태 | 적분 판정 |
| $(-1)^n$ 곱해진 형태 | 교대급수 판정 |
| 비율이 1로 수렴 | 비율 불능 → 비교/적분 사용 |

### 테일러 급수 — "모든 함수를 다항식으로"

**왜 테일러 급수가 중요한가?**

컴퓨터는 $\sin(0.1)$을 어떻게 계산할까? $\sin$ 함수는 삼각형 비율로 정의되었으므로 컴퓨터가 직접 계산하기 어렵다. 해답은 **테일러 급수**다: 임의의 함수를 "무한 다항식"으로 표현하면, 덧셈과 곱셈만으로 근사값을 계산할 수 있다.

**테일러 급수 유도 아이디어**

$f(x)$를 $x = 0$ 근방에서 다음과 같이 표현한다고 가정:

$$f(x) = c_0 + c_1 x + c_2 x^2 + c_3 x^3 + \cdots$$

$x = 0$ 대입: $f(0) = c_0$

미분 후 $x = 0$: $f'(0) = c_1$

2번 미분 후 $x = 0$: $f''(0) = 2c_2 \implies c_2 = \dfrac{f''(0)}{2!}$

$k$번 미분 후 $x = 0$: $c_k = \dfrac{f^{(k)}(0)}{k!}$

따라서 **매클로린 급수(Maclaurin series)**:

$$f(x) = \sum_{n=0}^{\infty} \frac{f^{(n)}(0)}{n!}x^n$$

일반적으로 $x = a$ 근방에서는:

$$f(x) = \sum_{n=0}^{\infty} \frac{f^{(n)}(a)}{n!}(x-a)^n \quad \text{(테일러 급수)}$$

**주요 함수들의 테일러 급수**

$$e^x = 1 + x + \frac{x^2}{2!} + \frac{x^3}{3!} + \cdots = \sum_{n=0}^{\infty}\frac{x^n}{n!} \quad (\text{모든 } x)$$

$$\sin x = x - \frac{x^3}{3!} + \frac{x^5}{5!} - \cdots = \sum_{n=0}^{\infty}\frac{(-1)^n x^{2n+1}}{(2n+1)!} \quad (\text{모든 } x)$$

$$\cos x = 1 - \frac{x^2}{2!} + \frac{x^4}{4!} - \cdots = \sum_{n=0}^{\infty}\frac{(-1)^n x^{2n}}{(2n)!} \quad (\text{모든 } x)$$

$$\ln(1+x) = x - \frac{x^2}{2} + \frac{x^3}{3} - \cdots \quad (-1 < x \leq 1)$$

$$\frac{1}{1-x} = 1 + x + x^2 + x^3 + \cdots \quad (|x| < 1)$$

**응용 1 — 극한 계산**

$\displaystyle\lim_{x \to 0} \dfrac{\sin x - x}{x^3}$에서 직접 대입하면 $\dfrac{0}{0}$ 형. 테일러 급수를 사용하면:

$$\sin x = x - \frac{x^3}{6} + \frac{x^5}{120} - \cdots$$

$$\frac{\sin x - x}{x^3} = \frac{-\frac{x^3}{6} + \frac{x^5}{120} - \cdots}{x^3} = -\frac{1}{6} + \frac{x^2}{120} - \cdots \xrightarrow{x \to 0} -\frac{1}{6}$$

로피탈 정리보다 훨씬 빠르다.

**응용 2 — 근사 계산**

$e^{0.1}$을 3차항까지 근사:

$$e^{0.1} \approx 1 + 0.1 + \frac{0.01}{2} + \frac{0.001}{6} \approx 1.10517$$

실제 값: $e^{0.1} = 1.105171...$. 오차 $< 10^{-7}$.

**오일러 공식** — 수학에서 가장 아름다운 공식

$e^x$, $\cos x$, $\sin x$의 테일러 급수를 복소수로 확장하면:

$$e^{i\theta} = \cos\theta + i\sin\theta$$

$\theta = \pi$ 대입: $e^{i\pi} + 1 = 0$ (오일러 항등식)

이 식은 자연상수 $e$, 원주율 $\pi$, 허수 단위 $i$, 1, 0이 하나의 등식에 담겨 있다.

---

## 다변수 함수

### 편미분 — 한 방향으로만 변화율 측정

1변수에서 미분은 "기울기"였다. 2변수 함수 $f(x, y)$에는 방향이 무수히 많다. 편미분은 그 중 **좌표축 방향**만을 본다.

$x$에 대한 편미분 $\dfrac{\partial f}{\partial x}$: $y$를 상수로 고정하고 $x$만 변화시킬 때의 변화율.

$$f_x = \frac{\partial f}{\partial x} = \lim_{h \to 0} \frac{f(x+h, y) - f(x, y)}{h}$$

**기하학적 의미**: $f(x,y)$의 그래프는 3D 곡면이다. $y = y_0$으로 자른 단면 곡선의 기울기가 $f_x(x, y_0)$이다.

**예제 6.** $f(x, y) = x^2 y + y^3 + 3xy^2$:

$f_x$: $y$를 상수로 취급 → $f_x = 2xy + 3y^2$

$f_y$: $x$를 상수로 취급 → $f_y = x^2 + 3y^2 + 6xy$

**예제 7.** $f(x, y) = e^{xy} \sin(x + y)$:

$$f_x = ye^{xy}\sin(x+y) + e^{xy}\cos(x+y)$$

$$f_y = xe^{xy}\sin(x+y) + e^{xy}\cos(x+y)$$

**2계 편미분과 클레로의 정리**

$$f_{xx} = \frac{\partial^2 f}{\partial x^2}, \quad f_{xy} = \frac{\partial}{\partial y}\left(\frac{\partial f}{\partial x}\right), \quad f_{yy} = \frac{\partial^2 f}{\partial y^2}$$

**클레로의 정리**: $f_{xy}$와 $f_{yx}$가 연속이면 $f_{xy} = f_{yx}$.

즉 "먼저 $x$로 미분 후 $y$로" = "먼저 $y$로 미분 후 $x$로". 미분 순서가 바뀌어도 결과가 같다.

**예제 8.** $f(x,y) = x^3y^2 - 2x^2y$:

$f_x = 3x^2y^2 - 4xy$, $f_y = 2x^3y - 2x^2$

$f_{xy} = \dfrac{\partial}{\partial y}(3x^2y^2 - 4xy) = 6x^2y - 4x$

$f_{yx} = \dfrac{\partial}{\partial x}(2x^3y - 2x^2) = 6x^2y - 4x$ ✓ (클레로의 정리 확인)

### 그래디언트 — 가장 가파른 오르막 방향

$$\nabla f = \left(\frac{\partial f}{\partial x},\, \frac{\partial f}{\partial y},\, \frac{\partial f}{\partial z}\right)$$

**왜 그래디언트가 가장 빠른 증가 방향인가?**

단위벡터 $\hat{u}$방향의 방향도함수: $D_{\hat{u}}f = \nabla f \cdot \hat{u} = |\nabla f|\cos\theta$

$\theta$는 $\nabla f$와 $\hat{u}$ 사이의 각도. $\cos\theta$는 $\theta = 0$, 즉 $\hat{u}$가 $\nabla f$ 방향일 때 최대. 따라서 **그래디언트 방향으로 움직일 때 $f$가 가장 빠르게 증가**한다.

**등위선(level curve)**과의 관계: 등위선 위에서 $f$의 값이 변하지 않으므로 등위선 방향의 방향도함수 = 0. 그래디언트는 이와 수직이다.

**예제 9.** $f(x,y) = x^2 + 4y^2$ (타원형 그릇 모양)의 점 $(1, 1)$에서:

$\nabla f = (2x, 8y) = (2, 8)$

방향: 각도 $\arctan(8/2) = \arctan 4 \approx 76°$ (북북동 방향)

크기: $|\nabla f| = \sqrt{4 + 64} = \sqrt{68} \approx 8.25$ → 이 방향으로 움직이면 단위 거리당 $f$가 약 8.25 증가.

그래디언트는 [AI 수학 최적화](/math/ai-math/optimization)의 경사하강법에서 **내려갈 방향** ($-\nabla f$)을 결정한다.

### 연쇄 법칙 (Chain Rule for Multivariable Functions)

$z = f(x, y)$, $x = x(t)$, $y = y(t)$이면:

$$\frac{dz}{dt} = \frac{\partial f}{\partial x}\frac{dx}{dt} + \frac{\partial f}{\partial y}\frac{dy}{dt}$$

**직관**: $z$는 $x$를 통해서도, $y$를 통해서도 $t$의 영향을 받는다. 두 경로의 기여를 더한다.

**예제 10.** $f(x,y) = x^2 + y^2$, $x = \cos t$, $y = \sin t$ (단위원 위의 운동):

$$\frac{dz}{dt} = 2x(-\sin t) + 2y(\cos t) = 2\cos t(-\sin t) + 2\sin t(\cos t) = 0$$

이 결과는 당연하다. 단위원 위에서는 $x^2 + y^2 = 1$로 상수이므로 시간에 따른 변화가 없다.

### 극값 판정 (2변수)

**임계점**: $f_x = 0$이고 $f_y = 0$인 점

임계점에서 극대·극소·안장점 중 어느 것인지 판정하는 도구가 **헤시안 행렬식(Hessian determinant)**:

$$D = f_{xx}f_{yy} - (f_{xy})^2$$

| $D$ | $f_{xx}$ | 결론 |
|-----|---------|------|
| $D > 0$ | $> 0$ | 극솟값 (아래로 볼록) |
| $D > 0$ | $< 0$ | 극댓값 (위로 볼록) |
| $D < 0$ | — | 안장점(saddle point) |
| $D = 0$ | — | 판정 불능 |

**왜 이 공식인가?** $D = \det\begin{pmatrix}f_{xx}&f_{xy}\\f_{yx}&f_{yy}\end{pmatrix}$, 즉 2차 편미분 행렬(헤시안)의 행렬식이다. 행렬식이 양수이면 헤시안이 정치(positive definite) 또는 부치(negative definite), 즉 모든 방향으로 위로 또는 아래로 볼록하다.

**예제 11.** $f(x,y) = x^3 + y^3 - 3xy$의 극값 찾기:

$f_x = 3x^2 - 3y = 0 \implies y = x^2$

$f_y = 3y^2 - 3x = 0 \implies y^2 = x$

$y = x^2$을 $y^2 = x$에 대입: $(x^2)^2 = x \implies x^4 - x = 0 \implies x(x^3-1) = 0$

임계점: $(0, 0)$과 $(1, 1)$

$f_{xx} = 6x$, $f_{yy} = 6y$, $f_{xy} = -3$

$(0,0)$: $D = (0)(0) - 9 = -9 < 0$ → **안장점** (산 모양도 골짜기도 아님)

$(1,1)$: $D = 36 - 9 = 27 > 0$, $f_{xx} = 6 > 0$ → **극솟값** $f(1,1) = 1+1-3 = -1$

**라그랑주 승수법 (조건부 극값)**

"면적이 일정한 직사각형 중 둘레가 최소인 것은?" 같은 조건부 최적화 문제에 사용.

조건 $g(x,y) = 0$ 하에서 $f(x,y)$의 극값:

$$\nabla f = \lambda \nabla g$$

즉, 극값에서 $f$의 등위선과 $g$의 등위선이 **접한다** (같은 법선 방향).

**예제 12.** 둘레가 $2c$인 직사각형 중 넓이가 최대인 것:

$f(x,y) = xy$ (넓이), $g(x,y) = 2x + 2y - 2c = 0$ (둘레 조건)

$\nabla f = (y, x)$, $\nabla g = (2, 2)$

$\nabla f = \lambda \nabla g$: $y = 2\lambda$, $x = 2\lambda \implies x = y$

조건 대입: $2x + 2x = 2c \implies x = y = c/2$ → **정사각형**

---

## 중적분

### 이중적분 — 넓이 적분의 2차원 확장

1변수 적분 $\int_a^b f(x)\,dx$가 곡선 아래의 **넓이**를 구하듯, 이중적분 $\iint_R f(x,y)\,dA$는 곡면 아래의 **부피**를 구한다.

$$\iint_R f(x,y)\,dA = \lim_{\Delta A \to 0} \sum f(x_i, y_j)\Delta A$$

직사각형 영역 $R = [a,b] \times [c,d]$에서 **푸비니 정리**:

$$\iint_R f(x,y)\,dA = \int_a^b\int_c^d f(x,y)\,dy\,dx = \int_c^d\int_a^b f(x,y)\,dx\,dy$$

적분 순서를 바꿀 수 있다. 단, 일반 영역에서는 상한·하한이 함께 바뀐다.

**예제 13.** $\displaystyle\iint_R (x + 2y)\,dA$, $R = [0,2] \times [0,1]$:

$$\int_0^2\int_0^1 (x+2y)\,dy\,dx = \int_0^2\left[xy + y^2\right]_0^1 dx = \int_0^2 (x+1)\,dx = \left[\frac{x^2}{2}+x\right]_0^2 = 4$$

**예제 14.** 적분 순서가 중요한 경우 — $\displaystyle\int_0^1\int_y^1 e^{x^2}\,dx\,dy$:

$e^{x^2}$는 원시함수를 구할 수 없다. 적분 순서를 바꾼다.

영역: $0 \leq y \leq x$, $0 \leq x \leq 1$ (삼각형 영역)

$$= \int_0^1\int_0^x e^{x^2}\,dy\,dx = \int_0^1 xe^{x^2}\,dx = \left[\frac{e^{x^2}}{2}\right]_0^1 = \frac{e-1}{2}$$

### 극좌표 치환 — 원형 영역에 강력한 도구

$x = r\cos\theta$, $y = r\sin\theta$로 치환하면 넓이 원소가 변환된다:

$$dA = dx\,dy = r\,dr\,d\theta$$

$r$이 곱해지는 이유: 극좌표에서 작은 넓이 원소는 $\Delta r \times r\Delta\theta$이기 때문이다 (부채꼴 근사).

**예제 15.** 가우스 적분 $\displaystyle\int_{-\infty}^{\infty} e^{-x^2}\,dx = \sqrt{\pi}$ 증명:

$I = \displaystyle\int_{-\infty}^{\infty} e^{-x^2}\,dx$로 놓으면

$$I^2 = \int_{-\infty}^{\infty}\int_{-\infty}^{\infty} e^{-(x^2+y^2)}\,dx\,dy$$

극좌표 치환 ($x^2 + y^2 = r^2$, $0 \leq r < \infty$, $0 \leq \theta < 2\pi$):

$$I^2 = \int_0^{2\pi}\int_0^{\infty} e^{-r^2} r\,dr\,d\theta = 2\pi \cdot \left[-\frac{e^{-r^2}}{2}\right]_0^{\infty} = 2\pi \cdot \frac{1}{2} = \pi$$

따라서 $I = \sqrt{\pi}$. 이것이 정규분포의 정규화 상수 $\dfrac{1}{\sqrt{2\pi}}$의 유래다.

**예제 16.** $\displaystyle\iint_D e^{-(x^2+y^2)}\,dA$, $D = \{(x,y) \mid x^2+y^2 \leq 4\}$ (반지름 2 원):

$$= \int_0^{2\pi}\int_0^2 e^{-r^2} r\,dr\,d\theta = 2\pi\left[-\frac{e^{-r^2}}{2}\right]_0^2 = \pi(1 - e^{-4})$$

---

## 벡터미적분

### 발산, 회전, 라플라시안 — 물리의 언어

벡터장 $\vec{F} = (P, Q, R)$:

**발산 (Divergence)**: 한 점에서 벡터장이 얼마나 "퍼져나가는가"

$$\text{div}\,\vec{F} = \nabla \cdot \vec{F} = \frac{\partial P}{\partial x} + \frac{\partial Q}{\partial y} + \frac{\partial R}{\partial z}$$

$\text{div}\,\vec{F} > 0$: 그 점이 "원천(source)" — 유체가 솟아나옴

$\text{div}\,\vec{F} < 0$: "흡수(sink)" — 유체가 빨려들어감

전기장에서 $\nabla \cdot \vec{E} = \rho/\varepsilon_0$ (가우스 법칙): 전하가 전기장의 원천이다.

**회전 (Curl)**: 벡터장이 얼마나 "회전"하는가

$$\text{curl}\,\vec{F} = \nabla \times \vec{F} = \begin{vmatrix}\vec{i}&\vec{j}&\vec{k}\\\partial_x&\partial_y&\partial_z\\P&Q&R\end{vmatrix}$$

소용돌이치는 유체에서는 회전이 크고, 균일한 흐름에서는 회전이 0이다. 자기장에서 $\nabla \times \vec{B} = \mu_0 \vec{J}$ (앙페르 법칙).

**라플라시안**: $\nabla^2 f = \dfrac{\partial^2 f}{\partial x^2} + \dfrac{\partial^2 f}{\partial y^2} + \dfrac{\partial^2 f}{\partial z^2}$

$\nabla^2 f = 0$이면 **조화함수(harmonic function)**. 중력 퍼텐셜, 전기 퍼텐셜이 여기 해당.

### 선적분 — 경로를 따른 일(work)

힘 $\vec{F}$가 경로 $C$를 따라 한 일:

$$W = \int_C \vec{F} \cdot d\vec{r} = \int_a^b \vec{F}(\vec{r}(t)) \cdot \vec{r}'(t)\,dt$$

**보존장**: $\vec{F} = \nabla f$ (퍼텐셜 $f$가 존재)이면

$$\int_C \vec{F} \cdot d\vec{r} = f(\vec{r}(b)) - f(\vec{r}(a))$$

경로와 무관! 시작점과 끝점만 알면 된다. 중력이나 전기력이 보존력인 이유가 여기 있다.

**예제 17.** $\vec{F} = (y, x)$, $C$: $(0,0)$에서 $(1,2)$로 직선 경로.

$\vec{r}(t) = (t, 2t)$, $\vec{r}'(t) = (1, 2)$, $t \in [0,1]$

$\vec{F}(\vec{r}(t)) = (2t, t)$

$$W = \int_0^1 (2t, t) \cdot (1, 2)\,dt = \int_0^1 (2t + 2t)\,dt = \int_0^1 4t\,dt = 2$$

$\vec{F} = (y,x) = \nabla(xy)$이므로 보존장. $f(1,2) - f(0,0) = 2 - 0 = 2$ ✓

### 그린·스토크스·발산 정리

이 세 정리는 모두 같은 아이디어다: **경계에서의 적분 = 내부에서의 적분**.

**그린 정리** (2차원):

$$\oint_C P\,dx + Q\,dy = \iint_D\left(\frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y}\right)dA$$

$C$: $D$의 경계 (반시계 방향). 선적분을 면적분으로 바꾸거나, 반대로 쓸 수 있다.

**응용: 넓이 계산**

$$A = \frac{1}{2}\oint_C (x\,dy - y\,dx)$$

$P = -y/2$, $Q = x/2$로 놓으면 $\dfrac{\partial Q}{\partial x} - \dfrac{\partial P}{\partial y} = 1$이므로 이중적분이 넓이가 된다.

**스토크스 정리** (3차원):

$$\oint_C \vec{F} \cdot d\vec{r} = \iint_S (\nabla \times \vec{F}) \cdot d\vec{S}$$

$C$: 곡면 $S$의 경계. 그린 정리의 3차원 버전.

**발산 정리 (가우스 정리)**:

$$\oiint_S \vec{F} \cdot d\vec{S} = \iiint_V (\nabla \cdot \vec{F})\,dV$$

$S$: 부피 $V$의 경계 곡면. 물리적 의미: 물체 표면을 통해 나오는 유량 = 내부에서 생성되는 양.

---

## 연습문제

**문제 1.** $\displaystyle\sum_{n=1}^{\infty} \dfrac{n^2}{3^n}$이 수렴하는지 판정하고, 수렴하면 합을 구하여라.

> **풀이**
>
> 비율 판정: $L = \lim_{n\to\infty}\dfrac{(n+1)^2/3^{n+1}}{n^2/3^n} = \lim_{n\to\infty}\dfrac{(n+1)^2}{3n^2} = \dfrac{1}{3} < 1$ → **수렴**
>
> 합 계산: $\dfrac{d}{dx}\left(\sum x^n\right) = \sum nx^{n-1} = \dfrac{1}{(1-x)^2}$이므로 $\sum nx^n = \dfrac{x}{(1-x)^2}$
>
> $\dfrac{d}{dx}\left(\sum nx^n\right) = \sum n^2x^{n-1} = \dfrac{d}{dx}\dfrac{x}{(1-x)^2} = \dfrac{1+x}{(1-x)^3}$
>
> 따라서 $\sum n^2x^n = \dfrac{x(1+x)}{(1-x)^3}$. $x = 1/3$ 대입: $\dfrac{\frac{1}{3}\cdot\frac{4}{3}}{(\frac{2}{3})^3} = \dfrac{4/9}{8/27} = \dfrac{3}{2}$

---

**문제 2.** $f(x,y) = x^2e^y + y\sin x$의 모든 2계 편미분을 구하여라.

> **풀이**
>
> $f_x = 2xe^y + y\cos x$, $f_y = x^2e^y + \sin x$
>
> $f_{xx} = 2e^y - y\sin x$
>
> $f_{yy} = x^2e^y$
>
> $f_{xy} = 2xe^y + \cos x$ (클레로의 정리로 $f_{yx}$와 같음)

---

**문제 3.** 라그랑주 승수법으로, $x + y + z = 12$, $x,y,z > 0$일 때 $f(x,y,z) = xyz$의 최댓값을 구하여라.

> **풀이**
>
> $g = x+y+z-12 = 0$, $\nabla f = (yz, xz, xy) = \lambda(1,1,1)$
>
> $yz = xz = xy = \lambda \implies x = y = z$
>
> 조건 대입: $3x = 12 \implies x = y = z = 4$
>
> $f(4,4,4) = 64$ (최댓값)
>
> 이것이 **산술-기하 평균 부등식**의 등호 조건이기도 하다: $xyz \leq \left(\dfrac{x+y+z}{3}\right)^3$

---

**문제 4.** $\displaystyle\int_0^1\int_0^{\sqrt{1-x^2}} xy\,dy\,dx$를 극좌표로 계산하여라.

> **풀이**
>
> 적분 영역: $x^2 + y^2 \leq 1$, $x \geq 0$, $y \geq 0$ (1사분면 반원)
>
> 극좌표: $0 \leq r \leq 1$, $0 \leq \theta \leq \pi/2$
>
> $$\int_0^{\pi/2}\int_0^1 (r\cos\theta)(r\sin\theta)\cdot r\,dr\,d\theta = \int_0^{\pi/2}\sin\theta\cos\theta\,d\theta \int_0^1 r^3\,dr$$
>
> $$= \left[\frac{\sin^2\theta}{2}\right]_0^{\pi/2} \cdot \left[\frac{r^4}{4}\right]_0^1 = \frac{1}{2} \cdot \frac{1}{4} = \frac{1}{8}$$
