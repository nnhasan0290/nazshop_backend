import http from "http";
import express, { Router } from "express";
import settings from "./settings.json" assert { type: "json" };
import { services } from "./services/index.js";

export default class App {
  constructor() {
    this.config = settings;
    this.express = express();
    this.router = new Router();
    this.init();
  }

  init() {
    this.server = http.createServer(this.express);
    services(this);
  }

  start() {
    this.listen();
  }

  listen() {
    this.server.listen(this.config.PORT, () => {
      console.log("server is listening");
    });
  }

  configure(callback) {
    console.log("configuring");
    callback.call({
      ...this.express,
      router: this.router,
      config: this.config,
    });
  }
}
