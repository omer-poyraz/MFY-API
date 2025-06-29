const { User } = require('../models');

exports.create = async (req, res) => {
  try {
    const { username, password, firstName, lastName } = req.body;
    let file = null;
    if (req.file) file = req.file.filename;
    const user = await User.create({ username, password, firstName, lastName, file });

    return res.status(201).json({
      success: true,
      data: user,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Server Error',
    });
  }
};