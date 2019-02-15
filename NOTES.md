## React Native Notes

- The first thing React does when you call `setState()` is merge the object passed to `setState()` into the current state of the component.
- This than kicks off a process called [reconciliation](https://reactjs.org/docs/reconciliation.html).
- The end goal of reconciliation is to update the UI based on this new state in the most efficient way possible.
