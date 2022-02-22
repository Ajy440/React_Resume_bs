const initialitem = 0;

const changeMenu = (state = initialitem, action) => {
  switch (action.type) {
    case "CHANGEID":
      return action.payload;
    default:
      return state;
  }
};

export default changeMenu;
