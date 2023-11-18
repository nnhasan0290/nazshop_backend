import mongoose from "mongoose";
import App from "./app.js";
import settings from "./settings.json" assert { type: "json" };

(() => {
  mongoose
    .connect(settings.mongoURL)
    .then(() => {
      const app = new App();
      app.start();
      console.log("app started successfully");
    })
    .catch(() => {
      console.log("database is not connected");
    });
})();
