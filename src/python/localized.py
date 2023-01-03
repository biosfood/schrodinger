import numpy as np
import matplotlib.pyplot as plt
import matplotlib.animation as animation

outputFolder = "src/static/video/"

framerate = 20
speed = 0.1
time = 20
dt = speed/framerate

sigma = 0.5
m = 1
h = 1

waveFunction = lambda x, t: sigma / (np.sqrt(sigma**2+(2j*h*t/m))) * np.exp(-x**2/(sigma**2+2j*h*t/m))
wave = lambda x, t: np.abs(waveFunction(x,t))**2
x = np.linspace(-20, 20, 1000)

fig, ax = plt.subplots()

line, = ax.plot(x, wave(x, 0))

def animate(i):
    line.set_ydata(wave(x, i * dt))
    return line,

ani = animation.FuncAnimation(
    fig, animate, interval=1000/framerate, blit=True, save_count = framerate * time)
ani.save(f"{outputFolder}localized.mp4")
plt.show()
