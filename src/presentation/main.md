%English
## The Schrodinger Equation
%German
## Die Schr"odinger Gleichung

----

### Die harmonische Schwingung

$$ a = \frac{d v}{dt} = \frac{F}{m} = -\frac{D*x}{m} = \frac{d^2 x}{d^2 t}$$
;$$ x = A*\cos(\omega * t) \Leftrightarrow \frac{d^2 x}{d^2 t} = -\frac{D*x}{m} = -\omega^2 * x $$
;$$\omega = \sqrt{\frac{D}{m}}$$

---

### Die harmonische Schwingung

$$ x = A*\cos(\sqrt{\frac{D}{m}} * t) $$
;$$ v = \frac{d x}{d t} = \omega * A * \sin(\sqrt{\frac{D}{m}} * t)$$
;$$ E_{kin} = \frac{1}{2} * m * v^2 = \frac{1}{2} * D * A^2 * \sin^2(\omega * t)$$
;$$ E_{Feder} = \frac{1}{2} * D * x^2 = \frac{1}{2} * D * A^2 * \cos^2(\omega * t)$$

---

### Die harmonische Schwingung

$$ E_{kin} = \frac{1}{2} * m * v^2 = \frac{1}{2} * D * A^2 * \sin^2(\omega * t)$$

$$ E_{Feder} = \frac{1}{2} * D * x^2 = \frac{1}{2} * D * A^2 * \cos^2(\omega * t)$$

;$$ E_{ges} = E_{kin} + E_{Feder} = \frac{1}{2} * D * A^2 * $$
$$(\sin^2(\omega * t) + \cos^2(\omega * t)) = \frac{1}{2} * D * A^2 $$

---

### Die harmonische Schwingung

$$ E_{ges} = \frac{1}{2} * D * A^2 $$

;$$ \Psi = \sqrt{\frac{D}{2}}*\begin{pmatrix} x \\ \frac{v}{\omega} \end{pmatrix} = \sqrt{\frac{D}{2}}*\begin{pmatrix}
A*\cos(\omega * t) \\ \frac{\omega * A * \sin(\omega * t)}{\omega}\end{pmatrix}$$
;$$ \Psi = \sqrt{\frac{D}{2}}*\begin{pmatrix} A \\ A \end{pmatrix} \odot \circlearrowleft(\omega * t)
= \sqrt{\frac{D}{2}}*A *\circlearrowleft(\omega * t) $$

---

### Die harmonische Schwingung

$$ \Psi = \sqrt{\frac{D}{2}}*\begin{pmatrix} A \\ A \end{pmatrix} \odot \circlearrowleft(\omega * t)
= \sqrt{\frac{D}{2}}*A *\circlearrowleft(\omega * t) $$
$$ \textcolor{red}{\Psi=\sqrt{\frac{D}{2}} * A * e^{i*\omega*t}}$$
;$$|\Psi|^2 = E_{ges} = \frac{D*A^2}2 $$

---

### Die harmonische Schwingung
<video autoplay loop>
  <source src="video/oscillator.mp4" type="video/mp4">
</video>

----

### Wanderwelle

<video autoplay loop>
  <source src="video/travelling.mp4" type="video/mp4">
</video>

---

### Wanderwelle

<video autoplay loop width="50%" height="50%">
  <source src="video/travelling.mp4" type="video/mp4">
</video>

$$ \Psi = A*\circlearrowleft(k*x - \omega * t) \textcolor{red}{= A*e^{i(k*x-\omega*t)}}$$

---

### Wanderwelle

$$ \Psi = A*\circlearrowleft(k*x - \omega * t) \textcolor{red}{= A*e^{i(k*x-\omega*t)}}$$
;$$ k = \frac{2*\pi}{\lambda}, \omega = 2*\pi*f $$
;$$ \lambda = \frac{h}{p} \Rightarrow k = \frac{2*\pi*p}{h} $$
;$$ \omega = 2 * \pi * \frac{v}{\lambda} = \frac{2 * \pi * v * p}{h} $$

---

### Wanderwelle

$$ \Psi = A*\circlearrowleft(k*x - \omega * t) \textcolor{red}{= A*e^{i(k*x-\omega*t)}}$$

$$ k = \frac{2*\pi*p}{h}, \omega = \frac{2 * \pi * v * p}{h} $$
;$$ \Psi = A*\circlearrowleft(\frac{2 * \pi * p}{h}*x - \frac{2 * \pi * v * p}{h} * t) $$
;$$ \Psi = A*\circlearrowleft(\frac{2*\pi*p}{h}*(x - v*t)) \textcolor{red}{= A*e^{\frac{i*p}{\hbar}*(x-v*t)}} $$

----

### Energieerhaltungssatz

$$ \Psi = A*\circlearrowleft(\frac{2*\pi*p}{h}*(x - v*t)) \textcolor{red}{= A*e^{\frac{i*p}{\hbar}*(x-v*t)}} $$
;$$ E_{ges} = E_{kin} + E_{pot} = \frac{p^2}{2*m} + V $$
;$$ E_{ges} *\Psi = \frac{p^2}{2*m} * \Psi + V * \Psi $$

---

### Energieerhaltungssatz

$$ \Psi = A*\circlearrowleft(\frac{2*\pi*p}{h}*(x - v*t)) \textcolor{red}{= A*e^{\frac{i*p}{\hbar}*(x-v*t)}} $$

$$ E_{ges} *\Psi = \frac{p^2}{2*m} * \Psi + V * \Psi $$
;$$ \frac{\partial \Psi}{\partial x} = \circlearrowleft(90\degree) * \frac{2*\pi*p}{h} * \Psi \textcolor{red}{=
\frac{i*p}{\hbar} * \Psi} $$
;$$ p = \circlearrowleft(-90\degree) * \frac{h}{2*\pi} * \frac{\partial \Psi}{\partial x} \textcolor{red}{=
-i * \hbar * \frac{\partial \Psi}{\partial x}} $$

---

### Energieerhaltungssatz

$$ \Psi = A*\circlearrowleft(\frac{2*\pi*p}{h}*(x - v*t)) \textcolor{red}{= A*e^{\frac{i*p}{\hbar}*(x-v*t)}} $$

$$ E_{ges} *\Psi = \circlearrowleft(180\degree) * \frac{h^2}{8*m*\pi^2} * \frac{\partial^2 \Psi}{\partial^2 x} + V *
\Psi $$
;
<div class=" small">
  $$ E_{ges} *\Psi =- \frac{h^2}{8*m*\pi^2} * \frac{\partial^2 \Psi}{\partial^2 x} + V *\Psi
  \textcolor{red}{=-\frac{\hbar^2}{2*m} * \frac{\partial^2 \Psi}{\partial^2 x} + V * \Psi } $$
</div>

---

### Energieerhaltungssatz

<div class=" small">
  $$ E_{ges} *\Psi =- \frac{h^2}{8*m*\pi^2} * \frac{\partial^2 \Psi}{\partial^2 x} + V *\Psi
  \textcolor{red}{=-\frac{\hbar^2}{2*m} * \frac{\partial^2 \Psi}{\partial^2 x} + V * \Psi } $$
</div>

$$ \Psi = A*\circlearrowleft(\frac{2*\pi*p}{h}*(x - v*t)) \textcolor{red}{= A*e^{\frac{i*p}{\hbar}*(x-v*t)}} $$

;$$ E_{ph} = h*f = \frac{h*v}{\lambda} = \frac{h*v*p}{h} = v*p $$
;$$ \frac{\partial \Psi}{\partial t} = -\circlearrowleft(90\degree) * \frac{2*\pi*p * v}{h} * \Psi$$

---

### Energieerhaltungssatz

<div class=" small">
  $$ E_{ges} *\Psi =- \frac{h^2}{8*m*\pi^2} * \frac{\partial^2 \Psi}{\partial^2 x} + V *\Psi
  \textcolor{red}{=-\frac{\hbar^2}{2*m} * \frac{\partial^2 \Psi}{\partial^2 x} + V * \Psi } $$
</div>

$$ \Psi = A*\circlearrowleft(\frac{2*\pi*p}{h}*(x - v*t)) \textcolor{red}{= A*e^{\frac{i*p}{\hbar}*(x-v*t)}} $$

$$ \frac{\partial \Psi}{\partial t} = -\circlearrowleft(90\degree) * \frac{2*\pi*p * v}{h} * \Psi$$

;$$ p*v*\Psi = -\frac{\partial \Psi}{\partial t} * \frac{h}{2*\pi*\circlearrowleft(90\degree)}$$

---

### Energieerhaltungssatz

<div class=" small">
  $$ E_{ges} *\Psi =- \frac{h^2}{8*m*\pi^2} * \frac{\partial^2 \Psi}{\partial^2 x} + V *\Psi
  \textcolor{red}{=-\frac{\hbar^2}{2*m} * \frac{\partial^2 \Psi}{\partial^2 x} + V * \Psi } $$
</div>

$$ \Psi = A*\circlearrowleft(\frac{2*\pi*p}{h}*(x - v*t)) \textcolor{red}{= A*e^{\frac{i*p}{\hbar}*(x-v*t)}} $$

$$ p*v*\Psi = -\frac{\partial \Psi}{\partial t} * \frac{h}{2*\pi*\circlearrowleft(90\degree)}$$
;$$ E_{ges} *\Psi = \circlearrowleft(90\degree)* \frac{h}{2*\pi} * \frac{\partial \Psi}{\partial t} \textcolor{red}{ =
i*\hbar*\frac{\partial \Psi}{\partial t}}$$

----

### Die Schr"odinger Gleichung

<div class=" small">
  $$ \circlearrowleft(90\degree)* \frac{h}{2*\pi} * \frac{\partial \Psi}{\partial t} =- \frac{h^2}{8*m*\pi^2} *
  \frac{\partial^2 \Psi}{\partial^2 x} + V *\Psi $$
</div>
<div class=" small">
  $$\textcolor{red}{i*\hbar*\frac{\partial \Psi}{\partial t}=-\frac{\hbar^2}{2*m} * \frac{\partial^2 \Psi}{\partial^2
  x} + V * \Psi } $$
</div>

----

### Teilchen im Potentialtopf


$$ V = 0 \forall x \in [0; l], V = \infty \forall x \notin [0; l] $$

;$$ \Psi = 0 \forall x \notin [0, l], \Psi \in \mathbb{C} \forall x \in [0, l] $$
;$$ \Psi = \Psi_x * \Psi_t $$

---

### Teilchen im Potentialtopf

$$ \Psi = \Psi_x * \Psi_t $$

;$$E*\Psi = -\frac{h^2}{8*m*\pi^2} * \frac{\partial^2 \Psi}{\partial^2 x}$$
;$$E*\Psi_t * \Psi_x = -\frac{h^2}{8*m*\pi^2} *\Psi_t* \frac{\partial^2 \Psi_x}{\partial^2 x}$$
;$$E* \Psi_x = -\frac{h^2}{8*m*\pi^2} * \frac{\partial^2 \Psi_x}{\partial^2 x}$$

---

### Teilchen im Potentialtopf

$$ \Psi = A*\sin(k*x + \alpha_0) * \Psi_t $$

$$E * \Psi_x = -\frac{h^2}{8*m*\pi^2} * \frac{\partial^2 \Psi_x}{\partial^2 x}$$
;$$E * \Psi_x = \frac{h^2}{8*m*\pi^2} * k^2 \Psi_x$$
;$$E = \frac{h^2*k^2}{8*m*\pi^2}$$

---

### Teilchen im Potentialtopf

$$ \Psi = A*\sin(k*x + \alpha_0) * \Psi_t $$

;$$ \circlearrowleft(90\degree)* \frac{h}{2*\pi} * \frac{\partial \Psi}{\partial t} = E*\Psi =
\frac{h^2*k^2*\Psi_t}{8*m*\pi^2}
\textcolor{red}{ = i*\hbar*\frac{\partial \Psi}{\partial t}} $$
;$$ \circlearrowleft(90\degree)* \frac{h}{2*\pi} * \frac{\partial \Psi_t}{\partial t} = E*\Psi_t =
\frac{h^2*k^2*\Psi_t}{8*m*\pi^2}\textcolor{red}{ = i*\hbar*\frac{\partial \Psi_t}{\partial t}} $$

;$$ \Psi_t = \circlearrowleft(\omega * t) \textcolor{red}{=e^{i*\omega*t}} \Rightarrow \omega = -\frac{h*k^2}{4*\pi*m}
$$

---

### Teilchen im Potentialtopf

$$ \Psi = A*\sin(k*x + \alpha_0) * \circlearrowleft(-\frac{h*k^2}{4*\pi*m} * t)$$
;$$ \Psi(0) = 0 \Rightarrow \alpha_0 = 0 $$
;$$ \Psi(l) = 0 = A*\sin(k*x*l) \Rightarrow k = \frac{n*\pi}{l} \forall n\in \mathbb{N} $$
;$$ E_n = \frac{h^2*n^2}{8*m*l^2}, \Psi = A*\sin(\frac{n*\pi*x}{l}) * \circlearrowleft(-\frac{h*k^2}{4*\pi*m} * t)$$
$$\textcolor{red}{\Psi=A*\sin(\frac{n*\pi*x}{l}) * e^{-\frac{i*\hbar*k^2*t}{2*m}}} $$

----

### "Uberlagerung von Zust"anden

$$ \Psi = \Psi_1 + \Psi_2, \rho = |\Psi|^2 = |\Psi_1 + \Psi_2|^2 $$
;$ |\Psi|^2 = (\Psi_{1x}+\Psi_{2x})^2 + (\Psi_{1y} + \Psi_{2y})^2 $
;$ |\Psi|^2 = A^2((\sin(k_1*x)*\cos(\omega_1*t) +
\sin(k_2*x)*\cos(\omega_2*t))^2 +
((\sin(k_1*x)*\sin(\omega_1*t) +
\sin(k_2*x)*\sin(\omega_2*t))^2$

---

### "Uberlagerung von Zust"anden

$$ |\Psi|^2 = A^2*(\sin^2(k_1*x) + \sin^2(k_2*x) + (2*\sin(k_1*x) * sin(k_2*x) * \cos((\omega_1-\omega_2)*t)$$
;
<video autoplay loop width="50%" height="50%">
  <source src="video/photon.mp4" type="video/mp4">
</video>

---

### "Uberlagerung von Zust"anden

$$ |\Psi|^2 = A^2*(\sin^2(k_1*x) + \sin^2(k_2*x) + (2*\sin(k_1*x) * sin(k_2*x) * \cos((\omega_1-\omega_2)*t)$$

;$$\omega = \omega_1-\omega_2, f = \frac{\omega}{2*\pi} = \frac{\omega_1 - \omega_2}{2*\pi}$$
;$$ f = \frac{h}{2*\pi*4*\pi*m} *(k_1^2 - k_2^2) $$
;$$ E_{ph} = h*f = \frac{h^2}{8*\pi^2*m} *(k_1^2 - k_2^2) $$
;$$ E_{ph} = E_1 - E_2 $$

----

### Impulsraum

$$ \Psi_k = A*\circlearrowleft(k*x) \textcolor{red}{= A*e^{i(k*x)}}$$
;$$ \Psi = \sum_{i=-\infty}^{\infty} a_n *\circlearrowleft(k_n*x) \textcolor{red}{=\sum_{n=-\infty}^{\infty} a_n*
e^{i*k_n*x}}$$

;$$ \Psi = \int_{-\infty}^{\infty} \psi* \circlearrowleft(k*x)* dk \textcolor{red}{=\int_{-\infty}^{\infty} \psi*
e^{i*k*x}*dk}$$
;$$ \Psi = \int \int \circlearrowleft(-k*x)*dx * \circlearrowleft(k*x)*dk * \Psi$$
;$$ \psi = \int \circlearrowleft(-k*x)*\Psi*dx \textcolor{red}{=\int_{-\infty}^{\infty} \Psi*
e^{-i*k*x}*dk}$$

---

### Impulsraum

$$ \Psi = \int_{-\infty}^{\infty} \psi* \circlearrowleft(k*x)* dk \textcolor{red}{=\int_{-\infty}^{\infty} \psi*
e^{i*k*x}*dk}$$

;$$ \frac{\partial \Psi}{\partial k} = \psi* \circlearrowleft(k*x) \textcolor{red}{= \psi* e^{i*k*x}}$$
;$$ \psi = \frac{\partial}{\partial k}* \circlearrowleft(-k*x)* \Psi \textcolor{red}{= \frac{\partial
}{\partial k}* e^{-i*k*x} * \Psi}$$
;$$ \psi = \circlearrowleft(-90\degree) * \circlearrowleft(-k*x)* \Psi \textcolor{red}{= -i*x* e^{-i*k*x} * \Psi}$$
;$$ \int \psi *dx = \int \circlearrowleft(-90\degree) * \circlearrowleft(-k*x)* \Psi * dx \textcolor{red}{= \int -i*x*
e^{-i*k*x} * \Psi *dx}$$
;$$ F(x*\Psi) = \circlearrowleft(90\degree) * F(\Psi)\textcolor{red}{= i*F(\Psi)} $$

---

### Impulsraum

$$ \Psi = \int_{-\infty}^{\infty} \psi* \circlearrowleft(k*x)* dk \textcolor{red}{=\int_{-\infty}^{\infty} \psi*
e^{i*k*x}*dk}$$

$$ \psi = F(\Psi) = \int_{-\infty}^{\infty} \circlearrowleft(-k*x)*\Psi*dx \textcolor{red}{=\int_{-\infty}^{\infty}
\Psi*e^{-i*k*x}*dk}$$

$$ \frac{\partial \psi}{\partial k} = \int \frac{\partial}{\partial k}\circlearrowleft(-k*x)*\Psi*dx
\textcolor{red}{=\int_{-\infty}^{\infty} \Psi*\frac{\partial}{\partial k}e^{-i*k*x}*dk} $$
;$$ \frac{\partial \psi}{\partial k} = \int x*\circlearrowleft(-90\degree) * \circlearrowleft(-k*x)*\Psi*dx
\textcolor{red}{=\int_{-\infty}^{\infty} -i*x*\Psi*e^{-i*k*x}*dk} $$
;$$ \frac{\partial \psi}{\partial k} = \circlearrowleft(-90\degree)*F^{-1}(\Psi*k)\textcolor{red}{=-i*F^{-1}(\Psi*k)} $$

---

### Impulsraum

$$ \psi = F(\Psi) = \int_{-\infty}^{\infty} \circlearrowleft(-k*x)*\Psi*dx \textcolor{red}{=\int_{-\infty}^{\infty}
\Psi*e^{-i*k*x}*dk}$$

$$\textcolor{red}{i*\hbar*\frac{\partial \Psi}{\partial t}} = \circlearrowleft(90\degree)* \frac{h}{2*\pi} *
\frac{\partial \Psi}{\partial t} = \frac{p^2}{2*m} *\Psi $$

;$$\textcolor{red}{F(i*\hbar*\frac{\partial \Psi}{\partial t})} = F(\circlearrowleft(90\degree)* \frac{h}{2*\pi} *
\frac{\partial \Psi}{\partial t}) = F(\frac{p^2}{2*m} *\Psi) $$

;$$\textcolor{red}{i*\hbar*\frac{\partial \psi}{\partial t}} = \circlearrowleft(90\degree)* \frac{h}{2*\pi} *
\frac{\partial \psi}{\partial t} = \frac{p^2}{2*m} *\psi $$

;$$\textcolor{red}{i*\hbar*\frac{\partial \psi}{\partial t}} = \circlearrowleft(90\degree)* \frac{h}{2*\pi} *
\frac{\partial \psi}{\partial t} = \frac{(\frac{h*k}{2*\pi})^2}{2*m} *\psi $$

;$$\textcolor{red}{i*\hbar*\frac{\partial \psi}{\partial t}} = \circlearrowleft(90\degree)* \frac{h}{2*\pi} *
\frac{\partial \psi}{\partial t} = \frac{h^2*k^2}{8*\pi^2*m} *\psi $$

---

### Impulsraum

$$ \psi = F(\Psi) = \int_{-\infty}^{\infty} \circlearrowleft(-k*x)*\Psi*dx \textcolor{red}{=\int_{-\infty}^{\infty}
\Psi*e^{-i*k*x}*dk}$$

$$\textcolor{red}{i*\frac{\partial \psi}{\partial t}} = \circlearrowleft(90\degree)*
\frac{\partial \psi}{\partial t} = \frac{h*k^2}{4*\pi*m} *\psi $$

;$$\psi = \circlearrowleft(\omega * t) * \psi_0 = \textcolor{red}{e^{i*\omega*t}*\psi_0}$$
;$$\omega = -\frac{h*k^2}{4*\pi*m}$$

----

### Ein lokalisiertes Teilchen

$$ |\Psi|^2 = \frac{1}{\sqrt{2*\pi}*\sigma_x} * e^{-\frac{x^2}{2*\sigma_x^2}}$$

<img src="img/gauss.png" />

---

### Ein lokalisiertes Teilchen

$$ |\Psi_0|^2 = \frac{1}{\sqrt{2*\pi}*\sigma_x} * e^{-\frac{x^2}{2*\sigma_x^2}}$$
;$$ \Psi_0 = \frac{1}{\sqrt[4]{2*\pi}*\sqrt{\sigma_x}} * e^{-\frac{x^2}{4*\sigma_x^2}}$$

;$$ \Psi_0 = A_{x0} * e^{-b_{x0}*x^2}, \frac{\partial \Psi_0}{\partial x} = -2*b_{x0}*x*\Psi_0$$
;$$ \textcolor{red}{i*k*F(\Psi_0)} = \circlearrowleft(90\degree) * k * F(\Psi_0) =
-\circlearrowleft(90\degree) * 2*b_{x0} * \frac{\partial}{\partial k}F(\Psi_0)
\textcolor{red}{=-2i*b_{x0}*\frac{\partial}{\partial k}F(\Psi_0)}$$

;$$ k * \psi_0 = -2*b_{x0} * \frac{\partial \psi_0}{\partial k}$$
;$$ \frac{\partial \psi_0}{\partial k} = -\frac{k}{2*b_{x0}}$$
;$$ \psi_0 = A_{k} *e^{-b_{k}*k^2} \Rightarrow b_k = \frac{1}{4*b_{x0}}$$

---

### Ein lokalisiertes Teilchen

$$ \psi_0 = A_{k} *e^{-\frac{k^2}{4*b_{x0}}}$$
;$$ |\psi_0|^2 = A_{p}^2 * e^{\frac{p^2}{2*\sigma_p^2}} $$
;$$ \psi_0 = A_{p} * e^{-\frac{p^2}{4*\sigma_p^2}} $$
;$$ \psi_0 = A_{k} * e^{-\frac{h^2*k^2}{4*4*\pi^2*\sigma_p^2}} = A_{k} *e^{-\frac{k^2}{4*b_{x0}}}$$
;$$ \frac{h^2}{4*4*\pi^2*\sigma_p^2} = \frac{1}{4*b_{x0}}$$
;$$ \frac{4*\pi^2*\sigma_p^2}{h^2} = b_{x0}$$

---

### Ein lokalisiertes Teilchen

$$ \frac{4*\pi^2*\sigma_p^2}{h^2} = b_{x0}$$
;$$ \frac{4*\pi^2*\sigma_p^2}{h^2} = \frac{1}{4*\sigma_x^2}$$
;$$ \frac{2*\pi*\sigma_p}{h} = \frac{1}{2*\sigma_x}$$
;$$ \sigma_p*\sigma_x = \frac{h}{4*\pi}$$

---

### Ein lokalisiertes Teilchen

$$\psi = \circlearrowleft(\omega * t) * \psi_0 = \textcolor{red}{e^{i*\omega*t}*\psi_0}$$

;$$ \psi = A_{k} *e^{-\frac{k^2}{4*b_{x0}}} * \circlearrowleft(-\frac{h*k^2}{4*\pi*m} * t) =
\textcolor{red}{A_{k} *e^{-\frac{k^2}{4*b_{x0}}}*e^{-\frac{i*h*k^2}{4*\pi*m} *t}}$$

;$$ \psi = A_{k} * e^{-\frac{k^2}{4*b_{x0}} + \ln(\circlearrowleft(-\frac{h*k^2*t}{4*\pi*m}))}$$
;$$ \psi = A_{k} * e^{-\frac{k^2}{4*b_{x0}} -\frac{h*k^2*t}{4*\pi*m} \circlearrowleft(90\degree)}$$
;$$ \psi = A_{k} * e^{-k^2(\frac{1}{4*b_{x0}} + \frac{h*t}{4*\pi*m} \circlearrowleft(90\degree))}\textcolor{red}{ =
A_{k}*e^{-k^2*(\frac{1}{4*b_{x0}}+\frac{i*\hbar*t}{2*m})}}$$

;$$\psi = A_{k} * e^{-c*k^2}, c =
\sigma_x^2+\frac{h*t}{4*\pi*m}*\circlearrowleft(90\degree)\textcolor{red}{=\sigma_x^2+\frac{i\hbar*t}{2*m}} $$

---

### Ein lokalisiertes Teilchen

$$\psi = A_{k} * e^{-c*k^2} $$
$$ \Psi = A * e^{-\frac{x^2}{4*c}} =
A*e^{-\frac{x^2}{4*\sigma_x^2+\frac{h*t}{\pi*m}*\circlearrowleft(90\degree)}}\textcolor{red}{=A*e^{-\frac{x^2}{4*\sigma_x^2+\frac{2i*\hbar*t}{m}}}}$$

;$$ \Psi =
A*e^{-\frac{x^2*(4*\sigma_x^2-\frac{h*t}{\pi*m}*\circlearrowleft(90\degree))}{(4*\sigma_x^2+\frac{h*t}{\pi*m}*\circlearrowleft(90\degree))*(4*\sigma_x^2-\frac{h*t}{\pi*m}*\circlearrowleft(90\degree))}}
$$

;$$ \Psi =
A*e^{-\frac{x^2*(4*\sigma_x^2-\frac{h*t}{\pi*m}*\circlearrowleft(90\degree))}{16*\sigma_x^4+\frac{h^2*t^2}{\pi^2*m^2}}}
$$

;$$ \Psi =
A*e^{-\frac{4*x^2*\sigma_x^2}{16*\sigma_x^4+\frac{h^2*t^2}{\pi^2*m^2}}+\frac{\frac{x^2*h*t}{\pi*m}*\circlearrowleft(90\degree))}{16*\sigma_x^4+\frac{h^2*t^2}{\pi^2*m^2}}}
$$

;$$ \Psi =
A*e^{-\frac{x^2}{4*\sigma_x^2+\frac{h^2*t^2}{16*\pi^2*m^2*\sigma_x^2}}}*\circlearrowleft(\frac{\frac{x^2*h*t}{\pi*m}}{16*\sigma_x^4+\frac{h^2*t^2}{\pi^2*m^2}})
$$

---

### Ein lokalisiertes Teilchen

$$ \Psi =
A*e^{-\frac{x^2}{4*\sigma_x^2+\frac{h^2*t^2}{16*\pi^2*m^2*\sigma_x^2}}}*\circlearrowleft(\frac{x^2}{\frac{16*\sigma_x^4*\pi*m}{h*t}+\frac{h*t}{\pi*m}})
$$

<video autoplay loop width="50%" height="50%">
  <source src="video/localized.mp4" type="video/mp4">
</video>
