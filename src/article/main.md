%English
# The schrodinger equation
%German
# Die Schr"odinger Gleichung

%English
## Preface

This article will cover the schrodinger equation, which represents a non-relativistic differential equation governing
quantum particles. Relativistic effects are not taken into account here.

## Derivation

It should be mentioned that the schrodinger equation cannot be derived traditionally but rather represents a
semi-logical conclusion from a number of assumptions/axioms.

### Known properties of traditional waves

In quantum mechanics, particles are assumed to be governed by a wave function.
[Louis-de-Broglie](https://de.wikipedia.org/wiki/Louis_de_Broglie) postulated that matter waves should have the same
wavelength as photons, whose wavelength depends on their respective impulse:

%common
$$\lambda = \frac{h}{p} = \frac{h}{m*v} $$

%English
A basic wave function for a travelling monochromatic wave can be written as:

%common
$$ \Psi = \cos(k*x - \omega * t) = e^{i*(k*x - \omega * t)} $$

%English
Schrodinger assumed that a matter wave should have the same wave form. From this, we can derive $k =
\frac{2*\pi}{\lambda} = \frac{2 * \pi * p}{h} $, using the de-Broglie-wavelength as mentioned above. With $ v = f *
\lambda $ for each wave, one can also conclude that $\omega = 2 * \pi * f = 2 * \pi * \frac{v}{\lambda} = \frac{2 * \pi
* v * p}{h} $. We can rewrite the wave function as follows:

$$ \Psi = e^{i*(\frac{2 * \pi * p}{h}*x - \frac{2 * \pi * v * p}{h} * t)} = e^{\frac{i*p}{\hbar}*(x - v*t)} $$

### Obtaining the Schrodinger equation through energy conversion

The total sum of energy should be a constant for physical particles. For this,
the sum of the kinetic Energy $E_{kin} = \frac{p^{2}}{2*m}$ and potential energy $E_{pot} = V$, where V describes some
arbitrary potential, which in practice will need to be multiplied by its respective "charge" of a particle (this could
be its mass for a gravitational potential or the charge for electric fields) needs to stay constant. Thusly, one can
write:

$$ E = E_{kin} + E_{pot} = \frac{p^{2}}{2*m} + V $$
$$ \hat{E} * \Psi = \frac{\hat{p}^{2}}{2*m} * \Psi + V * \Psi $$

$\hat{E}$ and $\hat{p}$ are some (yet unknown) operators on $\Psi$ which respectively should return the impulse and
total energy for the wave function. For wave function to be valid, this equation must be true. On the other hand, we can
obtain these operators using the basic wave function mentioned above.

Noting the factor $p$ in the exponent of $\Psi$, you might write $\frac{\partial{\Psi}}{\partial{x}} = \frac{i *
p}{\hbar}$ and obtain $p = -i*\hbar*\frac{\partial{\Psi}}{\partial{x}}$. Plugging this back into the energy conservation
equation, we obtain the time-independent schrodinger equation:

$$ \hat{E} * \Psi = -\frac{\hbar^2}{2*m} * \frac{\partial^2 \Psi}{\partial^2 x} + V*\Psi$$

You might also note that the total [energy of a photon](https://en.wikipedia.org/wiki/Photon_energy) can be expressed as
$E_{ph} = h * f = \frac{h*p*v}{h} = p * v$. Using the x-derivative is not convenient, but you might note that
$\frac{\partial \Psi}{\partial t} = \frac{-i*p*v}{\hbar}$. We can rewrite this as $E = p*v = i * \hbar * \frac{\partial
\Psi}{\partial t}$

Substituting this relation into the time-independent Schrodinger equation, the time-dependent can be obtained:

$$ i * \hbar * \frac{\partial \Psi}{\partial t} = -\frac{\hbar^2}{2*m} * \frac{\partial^2 \Psi}{\partial^2 x} + V*\Psi$$
