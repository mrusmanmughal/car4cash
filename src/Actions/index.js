export const Add_RegNo = (Val) => {
  return {
    type: "Add_RegNo",
    payload: {
      value: Val,
    },
  };
};

export const Add_VahicleDetails = (val) => {
  return {
    type: "Add_VahicleDetails",
    payload: {
      value: val,
    },
  };
};

export const Add_contactDetails = (val) => {
  return {
    type: "Add_contactDetails",
    payload: {
      data: val,
    },
  };
};
