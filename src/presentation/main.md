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
