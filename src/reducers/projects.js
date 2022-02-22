const projects_data = [
  {
    id: "1",
    name: "project1",
    date: "18th Feb 2022",
    summary: "summary of project 1",
    tech_used: "firebase,reactjs",
    link: "www.google.com",
  },
  {
    id: "2",
    name: "project2",
    date: "18th Feb 2022",
    summary: "summary of project 1",
    tech_used: "firebase,reactjs",
    link: "www.google.com",
  },
];

const ADDPROJECT = (state = projects_data, action) => {
  switch (action.type) {
    case "ADDPROJECT":
      return [...state, projects_data];
    default:
      return state;
  }
};

export default ADDPROJECT;
