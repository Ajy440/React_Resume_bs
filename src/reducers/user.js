const initialUser = "user100";

const allotuser = (state = initialUser, action) => {
  switch (action.type) {
    case "MAINUSER":
      return action.payload;
    default:
      return state;
  }
};

export default allotuser;
