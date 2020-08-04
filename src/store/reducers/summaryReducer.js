const initState = {
  surcharge: {
    service: { rate: 10 },
    tax: { rate: 6 },
  },
};

const summaryReducer = (state = initState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default summaryReducer;
