const SocialMedia = require('../models/socialMedia');

class SocialMediaRepository {
  static async getAll() {
    return await SocialMedia.findAll();
  }

  static async getById(id) {
    return await SocialMedia.findByPk(id);
  }

  static async add(data) {
    return await SocialMedia.create(data);
  }

  static async update(id, data) {
    const sm = await SocialMedia.findByPk(id);
    if (!sm) return null;
    await sm.update(data);
    return sm;
  }

  static async delete(id) {
    const sm = await SocialMedia.findByPk(id);
    if (!sm) return false;
    await sm.destroy();
    return true;
  }
}

module.exports = SocialMediaRepository;
