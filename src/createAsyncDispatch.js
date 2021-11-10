/**
 * async dispatch factory
 * @param {Function} dispatch 
 * @returns {Function<Promise>}
 */
const createAsyncDispatch = (dispatch) => async (promise, actionName) => {
  let payload = null;
  try {
    dispatch({ type: `${actionName}_LOADING` });
    payload = await promise;
    dispatch({ type: `${actionName}_LOADED`, payload });
    return promise;
  } catch (e) {
    payload = { err: e };
    dispatch({ type: `${actionName}_ERROR`, payload });
  }
};

export default createAsyncDispatch;
