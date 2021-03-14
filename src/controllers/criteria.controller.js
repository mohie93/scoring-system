const Criterion = require("../models/criterion.model");

exports.addCriterion = async (req, res) => {
  try {
    const { name, description, defaultValue } = req.body;
    const criteria = new Criterion({ name, description, defaultValue });
    await criteria.save();
    return { code: 201, data: { message: "Created!", data: criteria } };
  } catch (error) {
    return { code: 442, data: { error: error.message } };
  }
};

exports.updateCriterion = async (req, res) => {
  try {
    const { id, name, description, defaultValue } = req.body;
    const criteria = await Criterion.findById(id);
    if (criteria) {
      await criteria.updateOne({ name, description, defaultValue });
      return { code: 200, data: { message: "Updated!", data: criteria } };
    } else {
      return { code: 442, data: { message: "No Criterion Found!" } };
    }
  } catch (error) {
    return { code: 442, data: { error: error.message } };
  }
};

exports.deleteCriterion = async (req, res) => {
  try {
    const { id } = req.body;
    await Criterion.findOneAndDelete(id);
    return { code: 204, data: { message: "Deleted!" } };
  } catch (error) {
    return { code: 442, data: { error: error.message } };
  }
};

exports.getCriteria = async (req, res) => {
  try {
    const criteria = await Criterion.find({});
    return { code: 200, data: { message: "Fetched!", data: criteria } };
  } catch (error) {
    return { code: 404, data: { error: error.message } };
  }
};
