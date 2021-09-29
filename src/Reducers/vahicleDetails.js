const initialValue = {
  vahicleDetails: [],
};
const Multistepform = (state = initialValue, action) => {
  switch (action.type) {
    case "Add_VahicleDetails":
      const { value } = action.payload;
      return {
        vahicleDetails: [
          {
            vahicleDetails: value,
          },
        ],
      };

    default:
      return state;
  }
};
export default Multistepform;
