const combineDispatch = (...dispatches) => (action) =>
  dispatches.forEach((dispatch) => dispatch(action));
export default combineDispatch;
