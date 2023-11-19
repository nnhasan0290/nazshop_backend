export default async function bkash() {
  this.router.route("/bkash").get((req, res) => {
    return res.send("it is working");
  });
}
