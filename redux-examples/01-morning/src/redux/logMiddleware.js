export const logger = store => next => action => {
  console.log("redux state is now => ", store.getState());

  return next(action);
};
