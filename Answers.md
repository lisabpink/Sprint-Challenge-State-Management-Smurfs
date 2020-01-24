1. What problem does the context API help solve?

    It solves the problem of having to pass props through every level of the app to get to certain components, which can cause the readability of the app to be lower.

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

    Any data that changes or impact the outlook of the App should be stored there. Actions are dispatched to update the state. Reducers are used to process the actions of the current state and replace the state with a new one. Copy and update.

3. What is the difference between Application state and Component state? When would be a good time to use one over the other?

    Component state only affects a component while app state affects the entire app and any data needed for the app should be stored on the app level.


4. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

    It allows us to handle asynchronous operations inside our Action Creators. It changes our action creators to perform async API calls.


5. What is your favorite state management system you've learned and this sprint? Please explain why!

    useContext but that is best used for smaller projects while redux is better applied on larger apps.
