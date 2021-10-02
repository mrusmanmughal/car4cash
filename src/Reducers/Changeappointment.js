const initialValue = {
  changeappointment: [],
};
const Changeappointment = (state = initialValue, action) => {
  switch (action.type) {
    case "Change_appointment":
      const { data } = action.payload;
      return {
        changeappointment: data,
      };
    default:
      return state;
  }
};
export default Changeappointment;
