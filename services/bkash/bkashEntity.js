export const createPayment = (bkash) => async (req, res) => {
  try {
    console.log("coming");
    const createAgreement = await bkash.createAgreement({
      payerReference: "1038383",
      mode: "0000",
    });
    res.send(createAgreement);
  } catch (error) {
    res.send(error);
  }
};
