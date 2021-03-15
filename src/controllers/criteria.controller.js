const Criterion = require("../models/criterion.model");
const {
  updateScoresRecord,
  deleteMetricFromAllRecords,
} = require("../services/migration.service");

exports.addCriterion = async (req, res) => {
  try {
    const { name, description, defaultValue } = req.body;
    const criteria = new Criterion({ name, description, defaultValue });
    await criteria.save();
    const { success, message } = await updateScoresRecord({
      name,
      defaultValue,
    });
    if (success)
      return { code: 201, data: { message: "Created!", data: criteria } };
    else {
      return { code: 422, data: { message, data: {} } };
    }
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
    const criterion = await Criterion.findById(id);
    const { name } = criterion;
    const { success, message } = await deleteMetricFromAllRecords({ name });
    if (success) {
      await criterion.deleteOne();
      return { code: 204, data: { message: "Deleted!" } };
    } else {
      return { code: 422, data: { message, data: {} } };
    }
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
