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
$$ \Psi = \Psi_{x} * \Psi_{t} $$

%English
You will notice the wave function needs to be proportional to its negated second derivative. This differential equation
is solved by a sine wave:
%German
Hier tritt hervor, dass die Wellenfunktion proportional zu ihrer negativen zweiten Ableitung sein muss. Diese
Differenialgleichung l"asst sich durch eine Sinuswelle l"osen:

%common
$$\Psi_{x} = A * \sin(k*x + \alpha_{0}) \forall x \in [0;l] $$

%English
We want the wave function to be continuous, which enforces
%German
Die Wellenfunktion soll differenzierbar sein, was die Bedingung
%common
$ \Psi(0) = \Psi(l) = 0 $
%English
Because of this, we can set $\alpha_{0} = 0$, so that this relation holds true. In theory, $\alpha_{0}$ could be any
whole number multiple of $\pi$, but the absolute squared of the wave function would stay identical. This is why we can
rewrite this as:
%German
stellt. $\alpha_{0} = 0$ erf"ullt diese Beziehung. Theorethisch k"onnte $\alpha_{0}$ ein beliebiges Vielfaches von $\pi$
sein, jedoch bleibt das Betragsquadrat der Wellenfunktion dabei gleich. Deshalb soll nun gelten:

%common
$$ \Psi_{x} = A * \sin(k*x) \forall x \in [0; l]$$
$$ \Psi(l) = 0 \Leftrightarrow \sin(k*x) = 0 \Leftrightarrow k = \frac{n*\pi}{l} \forall n \in \mathbb{N} $$

%English
This constraints $k$ to any multiple of $\frac{\pi}{l}$. We can use the time-dependent Schrodinger Equation to find
$\Psi_{t}$.
%German
Das beschr"ankt $k$ auf eine Vielzahl von $\frac{\pi}{l}$. Wir k"onnen die zeitabh"angige Schr"odinger Gleichung nutzen,
um $\Psi_{t}$ zu finden.

%common
$$ i * \hbar * \frac{\partial \Psi}{\partial t} = -\frac{\hbar^2}{2*m} * \frac{\partial^2 \Psi}{\partial^2 x}$$
$$ i * \Psi_{x}* \frac{\partial \Psi_{t}}{\partial t} = -\frac{\hbar}{2*m} * \Psi_{t}* \frac{\partial^2
\Psi_{x}}{\partial^2 x}$$
$$ i * \Psi_{x} * \frac{\partial \Psi_{t}}{\partial t} = -\frac{\hbar}{2*m} * \Psi_{t} * k^2 * \Psi_{x}$$
$$ \frac{\partial \Psi_{t}}{\partial t} = \frac{-i * \hbar * k^2}{2*m} * \Psi_{t} $$
$$ \Psi_{t} = e^{\frac{-i * \hbar * k^2}{2*m} * t} $$
$$ \Psi = e^{\frac{-i * \hbar * k^2}{2*m} * t} * \sin(k * x) $$

%English
One can also obtain the specific energy levels for this wave function:
%German
Man kann auch die speziellen Energieniveaus dieser Wellenfunktion erhalten:

%common
$$ E * \Psi = -\frac{\hbar^2}{2*m} * \frac{\partial^2 \Psi}{\partial^2 x}$$
$$ E * \Psi = -\frac{\hbar^2}{2*m} * \Psi_{t} * (-k^2) * \Psi_{x}$$
$$ E = \frac{\hbar^2 * k^2}{2*m} $$

%English
One can write the discrete energy levels for each $n$ as:
%German
F"ur jedes $n$ k"onnen die diskreten Energieniveas geschrieben werden als:

%common
$$ E_{n} = \frac{\hbar^2*n^2*\pi^2}{2*m*l^2} = \frac{h^2}{8*m*l^2} * n^2 $$
$$ \Psi = A *e^{\frac{-i * \hbar * n^2*\pi^2}{2*m*l^2} * t} * \sin(\frac{n*\pi}{l} * x) $$
$$ \Psi = A * e^{\frac{-i * h * n^2*\pi}{4*m*l^2} * t} * \sin(\frac{n*\pi*x}{l}) $$

%English
### Photon emmission
%German
### Photonenemmision

%English
While an electron is transitioning from one energy level to another, we can model it as being on both states at the same
time, a superposition of states:
%German
W"ahrend ein Elektron sich im "Ubergang von einem Energieniveau zu einem anderem befindet, kann man es als eine
"Uberlagerung dieser beiden Zust"ande betrachten, die eine Superposition genannt wird:

%common
$$ \Psi = \Psi_{n_1} + \Psi_{n_2} $$

%English
The probability density of finding the electron at a certain position can be modeled as a charge density of the electron
being distributed in space. This density is equal to the absolute squared of the wave function:
%German
Die Wahrscheinlichkeitsdichte, das Elektron in einem bestimmten St"uck Raum zu finden kann auch als die Ladungsdicht des
Elektrons, die im Raum verteilt ist, aufgefasst werden. Diese Dicht ist gleich dem Betragsquadrat der Wellenfunktion:

%common
$$ \rho = |\Psi|^2 = |\Psi_{n_1} + \Psi_{n_2}|^2 $$

%English
The absolute squared of a complex value can be written as the product of the number and its complex conjugate, keeping
in
mid that $e^{x}*e^{-x} = 1$:
%German
Das Betragsquadrat einer kompllexen Zahl kann geschrieben werden als das Produkt der Zahl und ihres komplexen Konjugats,
wobei beachtet werden sollte, dass $e^{x}*e^{-x} = 1$:

%common
$$ |a+ib|^2 = (a+ib)\overline{(a+ib)} (a+ib)(a-ib) = a^2 + b^2 $$
$$ |\Psi|^2 = (\Psi_{1} + \Psi_{2})*(\overline{\Psi_{1}} + \overline{\Psi_{2}}) $$
$$ |\Psi|^2 = \Psi_{x1}^2 + \Psi_{x2}^2 +
(\sin(k_1*x) * sin(k_2*x) * e^{\frac{i*\hbar*k_1^2}{2*m}*t}*e^{\frac{-i*\hbar*k_2^2}{2*m}*t}) +
(\sin(k_1*x) * sin(k_2*x) * e^{\frac{i*\hbar*k_2^2}{2*m}*t}*e^{\frac{-i*\hbar*k_1^2}{2*m}*t}) $$
$$ |\Psi|^2 = A^2*(\sin^2(k_1*x) + \sin^2(k_2*x) +
(\sin(k_1*x) * sin(k_2*x) * (e^{\frac{i*\hbar}{2*m}*(k_1^2-k_2^2)*t} + e^{\frac{i*\hbar}{2*m}*(k_2^2-k_1^2)*t})$$
$$ |\Psi|^2 = A^2*(\sin^2(k_1*x) + \sin^2(k_2*x) + (2*\sin(k_1*x) * sin(k_2*x) * \cos((k_1^2-k_2^2)*t)$$

%English
This probability density now depends on time with the factor $(2*\sin(k_1*x) * sin(k_2*x) * \cos((k_1^2-k_2^2)*t)$. This
tells us, that the particle or its charge can be found at different points in time. When visualizing this relation for
$n_1 = 1$ and $n_2 = 2$, the particle oscillates between the two ends of the box. For the frequency of this oscillation,
we can deduce that
%German
Diese Wahrscheinlichkeitsverteilung h"angt jetzt vom zeitlichen Faktor $(2*\sin(k_1*x) * sin(k_2*x) *
\cos((k_1^2-k_2^2)*t)$ ab. Dies beschreibt eine Oszillation der Ladungsverteilung zwischen verschiedenen Positionen.
Wenn diese Verteilung f"ur $n_1 = 1$ und $n_2 = 2$ visualisiert wird, zeigt sich, dass das Teilchen zwischen den beiden
Enden des Potentialtopfes oszilliert. F"ur die Frequenz dieser Oszillation gilt:

%common
$$ \omega = \frac{\hbar}{2*m}*(k_1^2-k_2^2) \Leftrightarrow f = \frac{\omega}{2*\pi} =
\frac{\hbar}{2*m*2*\pi}*((k_1^2-k_2^2)) $$

%English
An oscillation of a charged particle can generally generate electromagnetic radiation. For a photon with frequency $f$,
we know:
%German
Eine oszillierende Ladung generiert generell elektromagnetische Strahlung. F"ur ein Photon mit Frequenz $f$ ist bekannt,
dass

%common
$$ E_{ph} = h * f = \frac{\hbar * h}{2*m*2*\pi}*((k_1^2-k_2^2)) = \frac{\hbar^2}{2*m}*(k_1^2-k_2^2) = E_1 - E_2 $$

%English
You will notice, that the energy of the emitted photon is equal to the difference of the combined energies. This models
light emission or absorbtion through transitions of quantum states of electrons.
%German
Man bemkerkt, dass die Energie des emmittierten Photons gleich der Differenz der Energien der kombinierten
Quantenzust"anden. Dies stellt eine konkrete Modellierung des Zustands"ubergangs eines Elektrons durch Lichteinstrahlung
oder Lichemission dar.

%English
## The Schrodinger Equation in momentum space
%German
## Die Schr"odinger Gleichung im Impulsraum

%English
As mentioned above, a simple plain wave with a certain impulse can solve the Schrodinger Equation. Because a
superposition of valid waves is also a solution to the wave equation, we can write the combined wave function as:
%German
Wie im Vorigen erw"ahnt, kann eine einfache Welle mit speziellen Impuls die Schr"odinger Gleichung l"osen. Weil auch
eine "Uberlagerung von validen Wellen eine L"osing darstellt, l"asst sich die kombinierte Wellenfunktion schreiben als:

%common
$$ \Psi_x = \sum^n_{i=0} e^{k_n*x}*\psi(p_n) $$

%English
When using an indefinite amount of waves, one can express any wave equation using another wave equation $\psi$ (giving
weight to each impulse) as:
%German
Mit der Anwendung mit einem unendlicher Zahl an Wellen, kann jede Wellenfunktion mit einer anderen Wellenfunktion $\psi$
(die jedem Impuls ein Gewicht zuteilt) ausgedr"uckt werden:

%common
$$ \Psi_x = \int_{-\infty}^{\infty} \psi(p) * e^{k(p)*x} dp $$
$$ \Psi_x = \int_{-\infty}^{\infty} \psi * e^{\frac{p*x}{\hbar}} dp $$

%English
We can deduce that there exists a wave function $\Psi$ for every $\psi$. If we create a Transformation $F(\Psi) = \psi$
which converts between the two formats and apply it to the Schrodinger equation (V = 0 here to simplify everything), we
get:
%German
Es l"asst sich folgern, dass f"ur jede Wellenfunktion $\Psi$ eine korrespondierende L"osing f"ur $\psi$ existiert. Wenn
wir eine Transformation $F(\Psi) = \psi$ erstellen, die zwischen den beiden Repr"asentationen konvertiert und sie auf
die Schr"odinger Gleichung anwenden (mit $V=0$ stets) erhalten wir:

%common
$$ F(i * \hbar * \frac{\partial \Psi}{\partial t}) = F(\frac{p^2}{2*m} * \Psi)$$
$$ i*\hbar*\frac{\partial \psi}{\partial t} = \frac{p^2}{2*m}*\psi$$
$$ \frac{\partial \psi}{\partial t} = \frac{p^2}{2*m*i*\hbar}*\psi$$

%English
This differential equation has an easy solution for every $\psi_0$:
%German
Diese Differentialgleichung hat eine einfache L"osung f"ur jedes $\psi_0$:

%common
$$ \psi = e^{i*\omega*t} * \psi_0$$
$$ i * \omega * \psi = \frac{p^2}{2*m*i*\hbar} * \psi$$
$$ \omega = -\frac{p^2}{2*m*\hbar}$$
$$ \psi = e^{-\frac{i*p^2}{2*m*\hbar}*t} * \psi_0$$

%English
Because $|e^{i*x}| = 1$ for every x, we can say that the absolute squared of $\psi$ stays constant as in $|\psi|^2 =
|\psi_0|^2$. Because the probability of measuring the impulse of a particle corresponds to $\psi$, we can conclude that
the impulse of a particle stays constant as long as no force is acting upon it.
%German
Da $|e^{i*x}| = 1$ f"ur jedes $x$ gilt, l"asst sich sagen, dass das Betragsquadrat von $\psi$ zeitlich konstant ist
$|\psi|^2 = |\psi_0|^2$. Da die Wahrscheinlichkeitsverteilung des Impulses mit dem Betragsquadrat von $\psi$
zusammenh"angt, l"asst sich folgern, dass der Impuls eines Teilchens konstant bleibt, solange keine Kraft auf das
Teilchen wirkt.

%English
### Free, localized particle
%German
### Freies, lokalisiertes Teilchen

%English
Let us now try and write a wave function for a particle that has been located at $x=0$ with certainty $\sigma$. For
this, I will first write $\Psi_0$ at the time of localization:
%German
Als n"achstes soll ein Versuch gewagt werden, eine Wellenfunktion f"ur ein freies Teilchen, das bei $x=0$ mit Sicherheit
$\sigma$ lokalisiert wurde. Daf"ur werde ich zuerst $\Psi_0$, zum Zeitpunkt der Messung:

%common
$$ \Psi_0 = A * e^{-\frac{x^2}{\sigma^2}} $$

%English
The fourier Transform $F$ can be used to convert this initial wave function to momentum space:
%German
Die Fourier Transformation $F$ kann verwendet werden, um diese anf"angliche Wellenfunktion in den Impulsraum zu
transformieren:

%common
$$ \psi_0 = \int_{-\infty}^{\infty} \Psi_0 * e^{-i*x*k} dx = \frac{A*\sigma}{\sqrt{2}} * e^{-\frac{k^2*\sigma^2}{4}} $$
$$ \psi = e^{-\frac{i*p^2}{2*m*\hbar}*t} * \frac{A*\sigma}{\sqrt{2}} * e^{-\frac{k^2*\sigma^2}{4}} =
\frac{A*\sigma}{\sqrt{2}} * e^{-\frac{k^2*\sigma^2}{4}-\frac{i*k^2*\hbar}{2*m}*t} =
\frac{A*\sigma}{\sqrt{2}} * e^{-\frac{k^2}{2}*(\frac{\sigma^2}{2}+\frac{i*\hbar}{m}*t)} $$

%English
$\Psi$ can be obtained through the inverse Fourier Transform
%German
$\Psi$ kann durch die inverse Fourier-Transformation erlangt werden

%common
$$ \Psi = \int_{-\infty}^{\infty} \psi * e^{i*x*k} dk = \frac{A*\sigma}{\sqrt{2}*\sqrt{2}} *
\frac{1}{\sqrt{\frac{\sigma^2}{4}+\frac{i*\hbar}{2*m}*t}} * e^{-\frac{x^2}{2*(\frac{\sigma^2}{2}+\frac{i*\hbar}{m}*t}}$$

$$ \Psi = \frac{A*\sigma}{\sqrt{\sigma^2 + \frac{i*2*\hbar}{m}*t}} * e^{-\frac{x^2}{\sigma^2+\frac{i*\hbar*2}{m}*t}}
$$

%English
You will find that the width of the wave packet steadily increases, meaning the position of the particle becomes less
well known over time, while its speed (proportional to its momentum) stays equally well known.
%German
Es zeigt sich, dass die Breite des Wellenpakets mit der Zeit stets steight. Das bedeutet, dass die Position des
Teilchens eine gr"o"sere Unsicherheit aufweist, w"ahrend die Unsicherheit im Impuls gleich bleibt.

%English
### The double slit experiment
%German
### Das Doppelspaltexperiment

%English
We can use the localized wave packet from before to model a particle being localized inside of one of two slits of size
$w$ as a superposition of two wave packets. The wave packets have a distance of $2*d$.
%German
Das Doppelspaltexpperiment kann als eine "Uberlagerung von zwei lokaliseriten Wellenpakten in zwei Spalten mit Breite
$w$ modelliert werden. Die Wellenpakete weisen einen Abstannd von $2*d$ auf.

%common
$$ \sigma = \frac{d}{2} $$
$$ \Psi = \frac{A*\sigma}{\sqrt{\sigma^2 + \frac{i*2*\hbar}{m}*t}} *
(e^{-\frac{(x+\frac{d}{2})^2}{\sigma^2+\frac{i*\hbar*2}{m}*t}} +
e^{-\frac{(x-\frac{d}{2})^2}{\sigma^2+\frac{i*\hbar*2}{m}*t}}) $$

%English
For simplicity, all factors in the front will be disregarded. Two complex wave interfere constructively, whenever their
phases align. This means the imaginary parts in the exponent need to vary by a whole number multiple of $2*\pi$.
%German
Zur Vereinfachung werden alle Faktoren im linken Teil vernachl"assigt. Zwei komplexe Wellen zeigen konstruktive
Interferenz, wenn ihre Phasen zusammen fallen. Das bedeutet, dass sich die Imagin"arteile der Exponenten durch ein
ganzzahliges Vielfaches von $2*\pi$ unterscheiden.

%common
$$ n \in \mathbb{Z} $$
$$ \Im(-\frac{(x+\frac{d}{2})^2}{\sigma^2+\frac{i*\hbar*2}{m}*t}) =
\Im(-\frac{(x-\frac{d}{2})^2}{\sigma^2+\frac{i*\hbar*2}{m}*t}) +
2*\pi*n $$

$$ \Im(-\frac{(x+\frac{d}{2})^2 * (\sigma^2-\frac{i*\hbar*2}{m}*t)}{(\sigma^2+\frac{i*\hbar*2}{m}*t) *
(\sigma^2-\frac{i*\hbar*2}{m}*t)}) =
\Im(-\frac{(x+\frac{d}{2})^2 * (\sigma^2-\frac{i*\hbar*2}{m}*t)}{(\sigma^2+\frac{i*\hbar*2}{m}*t) *
(\sigma^2-\frac{i*\hbar*2}{m}*t)}) +
2*\pi*n $$

$$ \frac{(x+\frac{d}{2})^2 * \frac{2*\hbar*t}{m}}{\sigma^4+\frac{4*\hbar^2*t^2}{m^2}}) =
\frac{(x-\frac{d}{2})^2 * \frac{2*\hbar*t}{m}}{\sigma^4+\frac{4*\hbar^2*t^2}{m^2}}) +
2*\pi*n $$

$$ \frac{\frac{d*x*2*\hbar*t}{m}}{\sigma^4+\frac{4*\hbar^2*t^2}{m^2}}) =
\frac{-\frac{d*x*2*\hbar*t}{m}}{\sigma^4+\frac{4*\hbar^2*t^2}{m^2}}) =
2*\pi*n $$

$$ \frac{\frac{4*d*x*\hbar*t}{m}}{\sigma^4+\frac{4*\hbar^2*t^2}{m^2}}) =
2*\pi*n $$

$$ x_{max} = \frac{2*\pi*n*m * (\sigma^4+\frac{4*\hbar^2*t^2}{m^2})}{4*d*\hbar*t}$$

%English
For big $t$, we get evenly spaced maxima in the wave function, corresponding to bright spots on a real-world experiment.
There will also be minima at every
%German
F"ur gro"se $t$ ergeben sich gleichm"a"sig verteilte Maxima in der Wellenfunktion, die in realen Experimenten hellen
Punkten auf einem Schirm entsprechen. Auch gibt es Minima, jeweils bei

%common
$$ x_{min} = \frac{2*\pi*(n-0.5)*m * (\sigma^4+\frac{4*\hbar^2*t^2}{m^2})}{4*d*\hbar*t}$$

%English
Assuming $\sigma^4 \ll \frac{4*\hbar^2*t^2}{m^2}$, the first part of the numerator vanishes.
%German
Angenommen $\sigma^4 \ll \frac{4*\hbar^2*t^2}{m^2}$ verschwindet der erste Teil des Z"ahlers.

%common
$$ x_{max} = \frac{2*\pi*n*m * \frac{4*\hbar^2*t^2}{m^2}}{4*d*\hbar*t} = \frac{2*\pi*n*m *
4*\hbar^2*t^2}{4*d*\hbar*t*m^2} = \frac{n*h*t}{d*m} = \frac{n*h*s}{d*m*v} = \frac{n*\lambda*s}{d}$$

%English
This relation is equivalent to the traditional formulation for the double slit experiment.
%German
Diese Formulierung ist "aquivalent zur traditionellen Formulierung des Doppelspaltexperiments.
