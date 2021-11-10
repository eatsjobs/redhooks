/**
 * combineDispatch
 * Returns a functions that dispatch
 * in different reducer the same action
 * @param  {...any} dispatches 
 * @returns {Function}
 */
const combineDispatch = (...dispatches) => (action) =>
  dispatches.forEach((dispatch) => dispatch(action));
export default combineDispatch;
