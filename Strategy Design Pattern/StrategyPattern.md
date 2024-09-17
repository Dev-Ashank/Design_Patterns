# Strategy Pattern

The **Strategy Pattern** defines a family of algorithms (strategies), encapsulates each one, and allows them to be interchangeable at runtime.

---

## Key Components

1. **Context (`Vehicle`)**: Uses a `DriveStrategy` to determine behavior.
2. **Strategy Interface (`DriveStrategy`)**: Defines the algorithm (driving behavior).
3. **Concrete Strategies**: Implements different behaviors (`NormalDrive`, `OffRoadDrive`, `SportsDrive`).

---
## Vehicle Logic and Dynamic Behavior Change

The **`Vehicle` class** is designed to be flexible, allowing the driving behavior to be swapped at runtime. It holds a reference to a `DriveStrategy` object, which it uses to perform its `drive()` action.

- **Constructor**: When you create a `Vehicle` (or a specific type of vehicle, like a `Car` or `SportsCar`), you initialize it with a particular `DriveStrategy`.
  
- **Dynamic Behavior**: The key to the Strategy Pattern is that you can **change the behavior of the `Vehicle` dynamically** by swapping its `DriveStrategy`. This is done by calling the `setDriveStrategy()` method and passing in a new strategy.

This approach allows you to add new driving behaviors without modifying the `Vehicle` class, adhering to the **Open/Closed Principle** of SOLID (Open for extension, Closed for modification).

---
