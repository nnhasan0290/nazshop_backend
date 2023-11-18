export default async function bkash() {
  this.router.route("/bkash").get((req, res) => {
    console.log("working");
    res.send("it is working");
  });
}
