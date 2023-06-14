import numpy as np
import matplotlib.pyplot as plt
import matplotlib.animation as animation

outputFolder = "src/static/video/"

framerate = 20
time = 20
dt = 1/framerate

sigma = 0.1
m = 1
h = 1

x = np.linspace(-20, 20, 1000)

waveFunction = lambda x, t: sigma / (np.sqrt(sigma**2+(2j*h*t/m))) * np.exp(-x**2/(sigma**2+2j*h*t/m))
fig, ax = plt.subplots()

ax.set_ylim(0,0.05)
combined = lambda x,t: np.abs(waveFunction(x-1,t) + waveFunction(x+1,t))**2
line, = ax.plot(x, combined(x, 0))

def animate(i):
    line.set_ydata(combined(x, i * dt / 10))
    return line,

ani = animation.FuncAnimation(
    fig, animate, interval=1000/framerate, blit=True, save_count = framerate * time)
ani.save(f"{outputFolder}doubleSlit.mp4")
# plt.show()
