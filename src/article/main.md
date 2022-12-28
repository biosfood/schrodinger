%English
# The Schrodinger Equation
%German
# Die Schr"odinger Gleichung

%English
## Preface
%German
## Vorwort

%English
This article will cover the Schrodinger Equation, which represents a non-relativistic differential equation governing
quantum particles. Relativistic effects are not taken into account here.
%German
Dieser Artikel wird sich mit der sogenannten Schr"odinger Gleichung besch"aftigen, eine nicht-relativistische
Differenzialgleichung zur Beschreibung der Wellenfunktion von Quantenobjekten.

%English
## Derivation
%German
## Herleitung

%English
It should be mentioned that the Schrodinger Equation cannot be derived traditionally but rather represents a
semi-logical conclusion from a number of assumptions/axioms.
%German
Es soll erw"ahnt sein, dass die Schr"odinger Gleichung nicht traditionell hergeleitet werden kann und statdessen eine
halb-logische Folge einer Reihe an Annahmen und Axiomen darstellt.

%English
### Known properties of traditional waves
%German
### Bekannte Eigenschaften traditioneller Wellen

%English
In quantum mechanics, particles are assumed to be governed by a wave function.
[Louis-de-Broglie](https://de.wikipedia.org/wiki/Louis_de_Broglie) postulated that matter waves should have the same
wavelength as photons, whose wavelength depends on their respective impulse:
%German
In der Quantenmechanik werden Teilchen durch ihre jeweilige Wellenfunktion modelliert.
[Louis-de-Broglie](https://de.wikipedia.org/wiki/Louis_de_Broglie) postullierte, dass Materiewellen die selbe
wellenl"ange wie Photonen mit demselben Impuls aufweisen:

%common
$$\lambda = \frac{h}{p} = \frac{h}{m*v} $$

%English
A basic wave function for a travelling monochromatic wave can be written as:
%German
Eine einfache Wellenfunktion f"ur eine monochromatische bewegte Welle kann folgenderma"sen geschrieben werden:

%common
$$ \Psi = \cos(k*x - \omega * t) = e^{i*(k*x - \omega * t)} $$

%English
Schrodinger assumed that a matter wave should have the same wave form. From this, we can derive,
%German
Schrodinger nahm an, dass eine Materiewelle eine "ahnliche Wellenfunkoion aufweisen wu"rde. Aus dieser Wellenfunktion
l"asst sich mithilfe der oben erw"ahnten de-Broglie-Wellenl"ange herleiten, dass
%common
$k = \frac{2*\pi}{\lambda} = \frac{2 * \pi * p}{h} $
%English
using the de-Broglie-wavelength as mentioned above. With
%German
Mit dem Wissen, dass
%common
$ v = f * \lambda $
%English
for each wave, one can also conclude that
%German
f"ur Welle gilt, l"asst sich auch folgern, dass folgende Beziehung stimmt:
%common
$\omega = 2 * \pi * f = 2 * \pi * \frac{v}{\lambda} = \frac{2 * \pi * v * p}{h} $.
%English
We can rewrite the wave function as follows:
%German
Deshalb l"asst sich die Wellenfunktion folgenderma"sen schreiben:

%common
$$ \Psi = e^{i*(\frac{2 * \pi * p}{h}*x - \frac{2 * \pi * v * p}{h} * t)} = e^{\frac{i*p}{\hbar}*(x - v*t)} $$

%English
### Obtaining the Schrodinger equation through energy conversion
%German
### Herleitung der Schr"odinger Gleichung durch den Energieerhaltungssatz

%English
The total sum of energies should be a constant for physical particles. For this, the sum of the
kinetic Energy
%German
Die Summe der verschiedenen Energien eines Teilchens sollte nach dem Energieerhaltungssatz konstant seit. Dazu muss die
Summe aus der kinetischen Energie
%common
$E_{kin} = \frac{p^{2}}{2*m}$
%English
and potential energy
%German
und der potentiellen Energie
%common
$E_{pot} = V$,
%English
need to be constant. Here, $V$ describes some arbitrary potential, which in practice will need to be multiplied by its
respective "charge" of a particle (this could be its mass for a gravitational potential or the charge for electric
fields). Thusly, one can write:
%German
konstant sein. Hierbei beschreibt $V$ ein beliebiges potential, das in der Praxis mit der entsprechenden "Ladung" des
Teilchens multipliziert werden muss (Diese Ladung kann die Masse des Teilchens im Bezug auf das Gravitationsfeld oder
die elektrische Ladung im elektrischen Feld darstellen). Deshalb l"asst sich schreiben:

%common
$$ E = E_{kin} + E_{pot} = \frac{p^{2}}{2*m} + V $$
$$ E * \Psi = \frac{p^{2}}{2*m} * \Psi + V * \Psi $$

$E$
%English
and
%German
und
%common
$p$
%English
are some (yet unknown) operators on $\Psi$ which respectively should return the impulse and total energy for the wave
function. For wave function to be valid, this equation must be true. On the other hand, we can obtain these operators
using the basic wave function mentioned above.
%German
stellen zwei (noch unbekannte) operatoren auf $\Psi$ dar, die jeweils den den Impuls und Gesamtenergie der
Wellenfunktion darstellen. Damit eine Wellenfunktion den Energieerhaltungssatz erf"ullt, muss diese Gleichung stimmen.
Wiederum lassen sich diese Operatoren mithilfe der einfachen (oben erw"ahnten) Wellenfunktion herleiten.

%English
Noting the factor $p$ in the exponent of $\Psi$, you might write
%German
Bemerkt man den Faktor $p$ im Exponenten von $\Psi$ wie oben erw"ahnt la"sst sich schreiben:
%common
$\frac{\partial{\Psi}}{\partial{x}} = \frac{i *p}{\hbar} * \Psi$,
%English
and obtain
%common
$p * \Psi = -i*\hbar*\frac{\partial{\Psi}}{\partial{x}}$.
%English
Plugging this back into the energy conservation equation, we obtain the time-independent schrodinger equation:
%German
Mit dem Einsetzen in den Energieerhaltungssatz erh"alt man die zeit-unabh"angige Schr"odinger Gleichung:

%common
$$ E * \Psi = -\frac{\hbar^2}{2*m} * \frac{\partial^2 \Psi}{\partial^2 x} + V*\Psi$$

%English
You might also note that the total [energy of a photon](https://en.wikipedia.org/wiki/Photon_energy) can be expressed as
%German
Auch ist zu beachten, dass die [Energie eines Photons](https://de.wikipedia.org/wiki/Photonenenergie) geschrieben werden
kann als
%common
$E_{ph} = h * f = \frac{h*p*v}{h} = p * v$.
%English
Using the x-derivative is not convenient, but you might note that
%German
Die "ortliche Ableitung ist hier nicht sehr praktisch, aber man kann
%common
$\frac{\partial \Psi}{\partial t} = \frac{-i*p*v}{\hbar} * \Psi$
%English
.We can rewrite this as
%German
schreiben. Das kann auch ausgedr"uckt werden als
%common
$E*\Psi = p*v*\Psi = i * \hbar * \frac{\partial \Psi}{\partial t}$

%English
Substituting this relation into the time-independent Schrodinger equation, the time-dependent can be obtained:
%German
Mit dem Einsetzen dieses Zusammenhangs in die zeitunabh"angige Schr"odinger Gleichung kann die zeitabh"angige Form
erhalten werden:

%common
$$ i * \hbar * \frac{\partial \Psi}{\partial t} = -\frac{\hbar^2}{2*m} * \frac{\partial^2 \Psi}{\partial^2 x} + V*\Psi$$

%English
## Solving the Schrodinger Equation
%German
## L"osen der Schr"odinger Gleichung

%English
### Particle in a box
%German
### Teilchen im eindimensionalen Potentialtopf

%English
A simple way to describe a confined electron (as in inside of an atom) is to create a potential which is equal to $0$
inside of the $l$ long box and $\infty$ elsewhere.
%German
Eine simple Methode, ein lokal eingegrenztes Elektron (z.B in einem Atom eingegrenzt) ist die Modellierung anhand eines
Potentialtopfes, der innerhalb des $l$ langen Bereichs ein Potential von $0$ aufweist und das Potential ansonsten
$\infty$ ist.

%common
$$ V = 0 \forall x \in [0; l] $$
$$ V = \infty \forall x \notin [0; l] $$

%English
The particle can only be found inside of the box which only permits the wave function to not equal $0$ inside of the
box. Also keep in mind that continuity needs to be preserved in the wave function.
%German
Das Teilchen kann nur innerhalb des Potentialtopfes gefunden werden. Deshalb darf die Wellenfunktion nur innerhalb des
Topfes existieren und gleich $0$ Au"serhalb.

%common
$$ \Psi = 0 \forall x \notin [0, l] $$
$$ \Psi \in \mathbb{C} \forall x \in [0, l] $$

%English
Inside of the box, we can assume the particle to be stationary. This is why you can try solving this situation using the
time-independent Schrodinger Equation:
%German
Innerhalb des Potentialtopfes kann das Teilchen als station"ar angeshen werden. Deshalb kann diese Situation mithilfe
der zeitunabh"anigen Schr"odinger Gleichung modelliert werden:

%common
$$ E * \Psi = -\frac{\hbar^2}{2*m} * \frac{\partial^2 \Psi}{\partial^2 x}$$

%English
You will notice the wave function needs to be proportional to its negated second derivative. This differential equation
is solved by a sine wave:
%German
Hier tritt hervor, dass die Wellenfunktion proportional zu ihrer negativen zweiten Ableitung sein muss. Diese
Differenialgleichung l"asst sich durch eine Sinuswelle l"osen:

%common
$$\Psi_{x} = A * \sin(k*x + \alpha_{0}) $$
