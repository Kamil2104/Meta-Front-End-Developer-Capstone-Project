import { initializeTimes, updateTimes } from '../pages/Booking'

test('initializeTimes returns the correct initial state', () => {
    const expectedState = {
        times: ["12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00"]
    };

    const result = initializeTimes();
    expect(result).toEqual(expectedState);
})

test("updateTimes returns the same state for UPDATE_TIMES action", () => {
    const initialState = {
        times: ["12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00"]
    };

    const action = { type: "UPDATE_TIMES"}
    const result = updateTimes(initialState, action);

    expect(result).toEqual(initialState);
})

test("updateTimes returns the same state for unknown action", () => {
    const initialState = {
        times: ["12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00"]
    };

    const action = { type: "UNKNOWN"}
    const result = updateTimes(initialState, action);

    expect(result).toEqual(initialState);
})