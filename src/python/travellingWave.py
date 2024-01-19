import numpy as np
import matplotlib.pyplot as plt
import matplotlib.animation as animation

outputFolder = "src/static/video/"

omega = 2*np.pi * .25
k = 2*np.pi * .25
A = 1

totalTime = 12
framerate = 20

psi = lambda x,t: np.cos(k*x-omega*t)

fig, ax = plt.subplots()

x = np.linspace(0, 12, 100)
line, = ax.plot(x, psi(x, 0))

def animate(i):
    t = i/framerate
    line.set_ydata(psi(x, t))
    return line,


ani = animation.FuncAnimation(
    fig, animate, interval=1000/framerate, blit=True, save_count = int(framerate * totalTime))
ani.save(f"{outputFolder}travelling.mp4")
# plt.show()
