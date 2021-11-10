import { combineDispatch } from "../index.js";
test("combineDispatch", () => {
    const fn = jest.fn();
    const fn1 = jest.fn();
    const combined = combineDispatch(fn1, fn);
    combined({ type: 'combined'});
    expect(fn1).toHaveBeenCalledWith({ type: 'combined'});
    expect(fn).toHaveBeenCalledWith({ type: 'combined'});
});