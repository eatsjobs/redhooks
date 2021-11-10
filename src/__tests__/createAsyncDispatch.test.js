import { createAsyncDispatch } from "../index.js";
test("createAsyncDispatch", async () => {
    const dispatch = jest.fn();
    const asyncDispatch = createAsyncDispatch(dispatch);
    const delay = (ms = 300) => new Promise((resolve) => setTimeout(() => resolve(true), ms));
    await asyncDispatch(delay(), 'ACTION');

    expect(dispatch).toHaveBeenCalledTimes(2);
    expect(dispatch).toHaveBeenNthCalledWith(1,{ type: 'ACTION_LOADING' });
    expect(dispatch).toHaveBeenNthCalledWith(2,{ type: 'ACTION_LOADED', payload: true });
});