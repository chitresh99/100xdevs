1. **Synchronous Execution**: JavaScript executes code line-by-line in a synchronous manner by default. 

2. **Event Loop and Callback Queue**: When JavaScript encounters an asynchronous function like `setTimeout`, it doesn't block the execution. Instead, it sets up the timer and moves on to the next line of code. Once the timer completes, the callback function is added to the callback queue.

3. **Execution Stack and Callback Queue**: JavaScript has an execution stack where synchronous code is executed, and a callback queue where callbacks from asynchronous functions (like `setTimeout`) are placed after their timer expires.

4. **Event Loop**: The event loop continuously checks the execution stack and the callback queue. If the execution stack is empty (i.e., all synchronous code has been executed), it picks up the first callback from the callback queue and pushes it onto the execution stack for execution.

Here's a more detailed explanation with a simple example:

```javascript
console.log("Start");

setTimeout(() => {
    console.log("Timeout");
}, 1000);

console.log("End");
```

Execution flow:

1. **Synchronous code starts**:
    - `console.log("Start")` is executed immediately, logging "Start".
2. **Encounter `setTimeout`**:
    - `setTimeout` sets a timer for 1000ms and schedules the callback (`() => console.log("Timeout")`) to be added to the callback queue after the timer expires.
    - The code inside `setTimeout` does not execute immediately. The JavaScript engine moves on to the next line of code.
3. **Synchronous code continues**:
    - `console.log("End")` is executed immediately, logging "End".
4. **Event loop checks for completion**:
    - After all synchronous code is executed, the execution stack is empty.
5. **Timer completes**:
    - After 1000ms, the callback function from `setTimeout` (`() => console.log("Timeout")`) is moved to the callback queue.
6. **Event loop processes the callback queue**:
    - The event loop picks up the callback function from the callback queue and pushes it onto the execution stack.
    - `console.log("Timeout")` is executed, logging "Timeout".

So, the output will be:
```
Start
End
Timeout
```

**Key Points**:

- Asynchronous functions like `setTimeout` set up tasks to be executed in the future and do not block the execution of subsequent code.
- The event loop is responsible for managing the execution of synchronous and asynchronous code.
- Callbacks from asynchronous operations are executed only when the execution stack is empty.

This mechanism ensures that JavaScript remains non-blocking and efficient in handling I/O operations, timers, and other asynchronous tasks.