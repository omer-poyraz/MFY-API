const AuthService = require('../services/authService');

const register = async (req, res) => {
  try {
    const { username, password, firstName, lastName } = req.body;
    let file = null;
    if (req.file) file = req.file.filename;
    const user = await AuthService.register({ username, password, firstName, lastName, file });
    res.status(201).json({ success: true, user });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
};

const login = async (req, res) => {
  try {
    const result = await AuthService.login(req.body);
    res.json({
      success: true,
      token: result.token,
      username: result.username,
      userId: result.userId,
      name: result.name,
      file: result.file
    });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
};

const getUser = async (req, res) => {
  try {
    const user = await AuthService.getUser(req.params.id);
    res.json({ success: true, user });
  } catch (err) {
    res.status(404).json({ success: false, error: err.message });
  }
};

const getAllUsers = async (req, res) => {
  const users = await AuthService.getAllUsers();
  res.json({ success: true, users });
};

const updateUser = async (req, res) => {
  try {
    const user = await AuthService.updateUser(req.params.id, req.body);
    res.json({ success: true, user });
  } catch (err) {
    res.status(404).json({ success: false, error: err.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    await AuthService.deleteUser(req.params.id);
    res.json({ success: true });
  } catch (err) {
    res.status(404).json({ success: false, error: err.message });
  }
};

const changePassword = async (req, res) => {
  try {
    await AuthService.changePassword(req.params.id, req.body.oldPassword, req.body.newPassword);
    res.json({ success: true });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
};

module.exports = {
  register,
  login,
  getUser,
  getAllUsers,
  updateUser,
  deleteUser,
  changePassword
};
