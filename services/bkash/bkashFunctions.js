import fetch from "../../utils/fetch.js";

class Bkash {
  sandbox = "https://tokenized.sandbox.bka.sh/v1.2.0-beta/tokenized/checkout";

  constructor(username, password, appKey, appSecret) {
    this.username = username;
    this.password = password;
    this.appKey = appKey;
    this.appSecret = appSecret;
    this.baseUrl = this.sandbox;
  }

  static async init(username, password, appKey, appSecret) {
    const o = new Bkash(username, password, appKey, appSecret);
    await o.grantToken();
    return o;
  }

  async grantToken() {
    try {
      let url = this.baseUrl + "/token/grant";
      let headers = {
        username: this.username,
        password: this.password,
      };
      const data = {
        app_key: this.appKey,
        app_secret: this.appSecret,
      };

      let res = await fetch({
        method: "POST",
        url,
        headers,
        data,
      });

      if (res?.statusCode === "0000") {
        this.token = res?.id_token;
        this.tokenType = res?.token_type;
        this.refreshToken = res?.refresh_token;
      }
      return res;
    } catch (e) {
      throw new Error(e.message);
    }
  }

  async createAgreement({ mode = "", payerReference = "" }) {
    try {
      let url = this.baseUrl + "/create";
      let data = {
        mode,
        payerReference,
        callbackURL: "http://localhost:3000/api/bkash/",
      };
      let headers = { Authorization: this.token, "X-APP-Key": this.appKey };
      const res = await fetch({ method: "POST", url, headers, data });
      console.log(res);
      return res;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

export default Bkash;
