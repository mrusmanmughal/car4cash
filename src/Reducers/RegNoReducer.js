const initialValue = {
  RegNo: "",
};
const TodoReducer = (state = initialValue, action) => {
  switch (action.type) {
    case "Add_RegNo":
      const { value } = action.payload;
      return {
        RegNo: value,
      };

    default:
      return state;
  }
};
export default TodoReducer;
