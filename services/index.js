import bkash from "./bkash/bkash.js";

export const services = (app) => {
  console.log("service");
  app.configure(bkash);
};
