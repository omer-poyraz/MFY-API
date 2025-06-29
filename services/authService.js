const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const UserRepository = require('../repositories/userRepository');

const JWT_SECRET = 'UZUNkarakterilibirşeylerolsaçokiyiolurişdeamabukadaryazabiliyorumvaktimkısıtlıdahasonratekrardeneyeceğim';
const TOKEN_EXPIRES_IN = '1d';

class AuthService {
  static hashPassword(password) {
    return crypto.createHash('sha256').update(password).digest('hex');
  }

  static async register({ username, password, firstName, lastName, file }) {
    const existing = await UserRepository.getByUsername(username);
    if (existing) {
      throw new Error('Username already exists');
    }
    const hashedPassword = this.hashPassword(password);
    const user = { username, password: hashedPassword };
    if (firstName) user.firstName = firstName;
    if (lastName) user.lastName = lastName;
    if (file) user.file = file;
    const createdUser = await UserRepository.add(user);
    return { id: createdUser.id, username: createdUser.username };
  }

  static async login({ username, password }) {
    const user = await UserRepository.getByUsername(username);
    if (!user) throw new Error('Invalid credentials');
    const hashedPassword = this.hashPassword(password);
    if (user.password !== hashedPassword) throw new Error('Invalid credentials');
    const token = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, { expiresIn: TOKEN_EXPIRES_IN });
    const name = [user.firstName, user.lastName].filter(Boolean).join(' ');
    let file = user.file || null;
    if (file) file = `/user/${file}`;
    return {
      token,
      username: user.username,
      userId: user.id,
      name,
      file
    };
  }

  static async getUser(id) {
    const user = await UserRepository.getById(id);
    if (!user) throw new Error('User not found');
    return { id: user.id, username: user.username };
  }

  static async getAllUsers() {
    const users = await UserRepository.getAll();
    return users.map(u => ({ id: u.id, username: u.username }));
  }

  static async updateUser(id, updateData) {
    if (updateData.password) {
      updateData.password = this.hashPassword(updateData.password);
    }
    const updated = await UserRepository.update(id, updateData);
    if (!updated) throw new Error('User not found');
    return { id: updated.id, username: updated.username };
  }

  static async deleteUser(id) {
    const deleted = await UserRepository.delete(id);
    if (!deleted) throw new Error('User not found');
    return true;
  }

  static async changePassword(id, oldPassword, newPassword) {
    const user = await UserRepository.getById(id);
    if (!user) throw new Error('User not found');
    const hashedOld = this.hashPassword(oldPassword);
    if (user.password !== hashedOld) throw new Error('Invalid old password');
    const hashedNew = this.hashPassword(newPassword);
    await UserRepository.update(id, { password: hashedNew });
    return true;
  }
}

module.exports = AuthService;
