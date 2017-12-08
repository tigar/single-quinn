
import random

f1 = random.uniform(1.0, 100.0)
f2 = random.uniform(1.0, 100-f1)
f3 = random.uniform(1.0, 100-f1-f2)
f4 = random.uniform(1.0, 100-f1-f2-f3)
f5 = random.uniform(1.0, 100-f1-f2-f3-f4)

print(f1, f2, f3, f4, f5)
