import { initializeTimes, updateTimes } from '../pages/Booking';

test('initializeTimes returns the correct initial state (at 18.08.2024)', () => { // Change title for the day when tests are run
    const expectedState = {
        times: ["17:00", "17:30", "19:30", "20:00", "21:30", "22:30", "23:00", "23:30"] // Change times for the day when tests are run
    };

    const result = initializeTimes();
    expect(result).toEqual(expectedState);
});

test("updateTimes returns updated state for FETCH_TIMES_SUCCESS action", () => {
    const initialState = {
        times: ["12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00"]
    };

    const newTimes = ["10:00", "11:00"];
    const action = { type: "FETCH_TIMES_SUCCESS", payload: newTimes };
    const result = updateTimes(initialState, action);

    const expectedState = {
        times: newTimes
    };

    expect(result).toEqual(expectedState);
});

test("updateTimes returns the same state for unknown action", () => {
    const initialState = {
        times: ["12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00"]
    };

    const action = { type: "UNKNOWN" };
    const result = updateTimes(initialState, action);

    expect(result).toEqual(initialState);
});
