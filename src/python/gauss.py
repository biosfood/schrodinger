import numpy as np
import matplotlib.pyplot as plt

x = np.linspace(-5, 5, 1000)

sigma = 1
plt.vlines([-sigma, sigma], 0, 1/np.sqrt(2*np.pi))
plt.plot(x, 1/np.sqrt(2*np.pi)*np.exp(-x**2/(2*sigma**2)))
plt.savefig("src/static/img/gauss.png")
# plt.show()
