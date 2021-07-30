const notFound = (req, res) => {
  res.status(404).send("content does not exist");
};
module.exports = notFound;
