exports.createRecord = async (req, res) => {
  try {
    return { code: 201, data: { message: "Created!" } };
  } catch (error) {
    return { code: 442, data: { error: error } };
  }
};
