exports.addCriterion = async (req, res) => {
  try {
    return { code: 201, data: { message: "Created!" } };
  } catch (error) {
    return { code: 442, data: { error: error } };
  }
};

exports.updateCriterion = async (req, res) => {
  try {
    return { code: 200, data: { message: "Updated!" } };
  } catch (error) {
    return { code: 442, data: { error: error } };
  }
};

exports.deleteCriterion = async (req, res) => {
  try {
    return { code: 204, data: { message: "Deleted!" } };
  } catch (error) {
    return { code: 442, data: { error: error } };
  }
};

exports.addCriteria = async (req, res) => {
  try {
    return { code: 201, data: { message: "Created!" } };
  } catch (error) {
    return { code: 442, data: { error: error } };
  }
};

exports.updateCriteria = async (req, res) => {
  try {
    return { code: 200, data: { message: "Updated!" } };
  } catch (error) {
    return { code: 442, data: { error: error } };
  }
};

exports.deleteCriteria = async (req, res) => {
  try {
    return { code: 204, data: { message: "Deleted!" } };
  } catch (error) {
    return { code: 442, data: { error: error } };
  }
};
