exports.handle = (api) => async (req, res) => {
  try {
    const { code, data } = await api(req, res);
    res.status(code).json(data);
  } catch (error) {
    const { code, data } = error;
    return !code || !data
      ? res.status(500).json({ message: "Internal server error..." })
      : res.json(code).json(data);
  }
};
