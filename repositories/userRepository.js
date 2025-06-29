const User = require('../models/user');

class UserRepository {
  static async getAll() {
    return await User.findAll({ attributes: ['id', 'username'] });
  }

  static async getById(id) {
    return await User.findByPk(id, { attributes: ['id', 'username', 'password'] });
  }

  static async getByUsername(username) {
    return await User.findOne({ where: { username } });
  }

  static async add(user) {
    const now = new Date();
    return await User.create({ ...user, createdAt: now, updatedAt: now });
  }

  static async update(id, updateData) {
    const user = await User.findByPk(id);
    if (!user) return null;
    await user.update(updateData);
    return user;
  }

  static async delete(id) {
    const user = await User.findByPk(id);
    if (!user) return false;
    await user.destroy();
    return true;
  }
}

module.exports = UserRepository;
