
interface AppState {
    counter: number;
    age: number;
}

export const selectCounter = (state: AppState) => state.counter;
export const selectAge = (state: AppState) => state.age;