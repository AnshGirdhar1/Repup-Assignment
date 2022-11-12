const { Router } = require("express");
const ContactModel = require("../models/contacts.model");
const contactRouter = Router();

contactRouter.post("/", async (req, res) => {
  const { email, mobile_number } = req.body;
  try {
    await ContactModel.insertMany([req.body]);
    res.send({ msg: "Contact Posted Successfully" });
  } catch (e) {
    res.send({ msg: "Contact Already Exist With Same Phone Number or Email" });
  }
});

contactRouter.get("/", async (req, res) => {
  try {
    let data = await ContactModel.find();
    res.send(data);
  } catch (e) {
    console.log(e);
    res.send(e);
  }
});

contactRouter.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await ContactModel.findByIdAndDelete(id);
    res.send({ msg: "Deleted Contact Successfully" });
  } catch (e) {
    console.log(e);
    res.send({ msg: "Deleting Contact Failed" });
  }
});

contactRouter.patch("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await ContactModel.findByIdAndUpdate({ _id: id }, { ...req.body });
    res.send({ msg: "Edited Contact Successfully" });
  } catch (e) {
    console.log(e);
    res.send({ msg: "Editing Contact Failed" });
  }
});

contactRouter.delete("/", async (req, res) => {
  try {
    await ContactModel.deleteMany({});
    res.send({ msg: "Deleted All Contacts Successfully" });
  } catch (e) {
    console.log(e);
    res.send({ msg: "Deleting All Contacts Failed" });
  }
});

module.exports = contactRouter;
