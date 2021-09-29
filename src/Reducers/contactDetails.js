const initialValue = {
  contactDetails: [],
};
const contactDetails = (state = initialValue, action) => {
  switch (action.type) {
    case "Add_contactDetails":
      const { data } = action.payload;
      return {
        contactDetails: data,
      };

    default:
      return state;
  }
};
export default contactDetails;
