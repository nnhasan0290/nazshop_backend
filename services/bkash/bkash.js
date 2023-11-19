import { createPayment } from "./bkashEntity.js";
import Bkash from "./bkashFunctions.js";

export default async function bkash() {
  const { username, password, appKey, appSecret, isSandbox } =
    this.config.bkash;
  const bkash = await Bkash.init(username, password, appKey, appSecret);

  this.router.route("/bkash/create").post(createPayment({ ...this, bkash }));
}
