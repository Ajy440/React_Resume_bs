export const mainUser = (id) => {
  return { type: "MAINUSER", payload: id };
};

export const changeMenu = (id) => {
  return { type: "CHANGEID", payload: id };
};

export const addProject = (data) => {
  return { type: "ADDPROJECT", payload: data };
};
