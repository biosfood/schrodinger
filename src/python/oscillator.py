import numpy as np
import matplotlib.pyplot as plt
import matplotlib.animation as animation

outputFolder = "src/static/video/"

omega = 2*np.pi * 0.25
A = 1

position = lambda t: A*np.cos(omega * t)
speed = lambda t: A*np.sin(omega*t)

totalTime = 12
framerate = 20

fig, ((diagrammAx, positionAx), (velocityAx, phaseSpaceAx)) = plt.subplots(2,2)

diagrammAx.axis("equal")
diagrammAx.set_ylim(-1.5*A, 1.5*A)
diagrammAx.set_xlim(-1.5*A, 1.5*A)
diagrammAx.set_xlabel("x")
diagrammGraph,  = diagrammAx.plot([0, 1], [0, 0], "o-")

phaseSpaceAx.axis("equal")
phaseSpaceAx.set_ylim(-1.5*A, 1.5*A)
phaseSpaceAx.set_xlim(-1.5*A, 1.5*A)
phaseSpaceAx.set_xlabel("x")
phaseSpaceAx.set_ylabel("v")
phaseGraph, = phaseSpaceAx.plot([0, 0], [0, 0], "o-")

positionAx.set_xlim(-1.5*A, 1.5*A)
positionAx.set_ylim(0, totalTime)
positionAx.set_xlabel("x")
positionAx.set_ylabel("t")
positionData = [(0,0) for _ in range(framerate * totalTime)]
positionPlotData = list(zip(*positionData))
positionGraph, = positionAx.plot(positionPlotData[0], positionPlotData[1])

velocityAx.set_ylim(-1.5*A, 1.5*A)
velocityAx.set_xlim(0, totalTime)
velocityAx.set_xlabel("t")
velocityAx.set_ylabel("v")
velocityData = [(0,A) for _ in range(framerate * totalTime)]
velocityPlotData = list(zip(*velocityData))
velocityGraph, = velocityAx.plot(velocityPlotData[0], velocityPlotData[1])

plt.tight_layout()

def animate(i):
    t = i/framerate
    x = position(t)
    v = speed(t)
    diagrammGraph.set_data([0, x], [0, 0])
    phaseGraph.set_data([0, x], [0, v])
    positionData[i:] = [(x, t) for _ in range(framerate*totalTime - i)]
    positionPlotData = list(zip(*positionData))
    positionGraph.set_data(positionPlotData[0], positionPlotData[1])
    velocityData[i:] = [(t, v) for _ in range(framerate*totalTime - i)]
    velocityPlotData = list(zip(*velocityData))
    velocityGraph.set_data(velocityPlotData[0], velocityPlotData[1])
    return diagrammGraph, phaseGraph, positionGraph, velocityGraph

ani = animation.FuncAnimation(
    fig, animate, interval=1000/framerate, blit=True, save_count = framerate * totalTime)
ani.save(f"{outputFolder}oscillator.mp4")

fig, diagrammAx = plt.subplots()

diagrammAx.axis("equal")
diagrammAx.set_ylim(-1.5*A, 1.5*A)
diagrammAx.set_xlim(-1.5*A, 1.5*A)
diagrammAx.set_xlabel("x")
diagrammGraph,  = diagrammAx.plot([0, 1], [0, 0], "o-")

def animate(i):
    t = i/framerate
    x = position(t)
    diagrammGraph.set_data([0, x], [0, 0])
    return diagrammGraph,
ani = animation.FuncAnimation(
    fig, animate, interval=1000/framerate, blit=True, save_count = framerate * totalTime)
ani.save(f"{outputFolder}oscillator_simple.mp4")
# plt.show()
