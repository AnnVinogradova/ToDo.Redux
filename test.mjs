import { decrement, increment } from "./redux/actions.js";
import { store } from "./redux/store.js";

store.subscribe(() => console.log(store.getState()));
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(decrement());