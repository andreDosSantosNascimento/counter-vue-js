import { useCounterStore } from "../../stores/counter.js";
import "./style.css";
export default {
    data() {
        const counterStore = useCounterStore();

        return {
            counter: counterStore.counter,
            increment: () => {
                counterStore.increment();
                this.counter = counterStore.counter;
            },
            decrement: () => {
                counterStore.decrement();
                this.counter = counterStore.counter;
            },
        };
    },
};
