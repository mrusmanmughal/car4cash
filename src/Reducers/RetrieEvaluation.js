const initialValue = {
  retriveEvaluation: [],
};
const retriveEvaluation = (state = initialValue, action) => {
  switch (action.type) {
    case "retrive_evaluation":
      const { data } = action.payload;
      return {
        retriveEvaluation: data,
      };
    default:
      return state;
  }
};
export default retriveEvaluation;
