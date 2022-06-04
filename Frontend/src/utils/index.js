export const SERVER_URL =
  process.env.NODE_ENV === "production"
    ? "https://capital-shopping-api.herokuapp.com"
    : "http://localhost:5000";
