import numpy as np
import matplotlib.pyplot as plt
import matplotlib.animation as animation

outputFolder = "src/static/video/"

totalTime = 12
framerate = 20

psi = lambda x,t,n: np.sin(n*np.pi*x) * np.exp(-0.25j*n**2*np.pi*t)

wave = lambda x, t: np.abs(psi(x, t, 1) + psi(x, t, 2))**2

fig, ax = plt.subplots()

x = np.linspace(0, 1, 100)
line, = ax.plot(x, wave(x, 0))

def animate(i):
    t = i/framerate
    line.set_ydata(wave(x, t))
    return line,


ani = animation.FuncAnimation(
    fig, animate, interval=1000/framerate, blit=True, save_count = framerate * totalTime)
ani.save(f"{outputFolder}photon.mp4")
plt.show()
