export default async function bkash() {
  console.log("top of router");
  this.router.route("/bkash").get((req, res) => {
    console.log("working");
    return res.send("it is working");
  });
}
