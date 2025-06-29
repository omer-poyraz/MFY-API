const SocialMediaRepository = require('../repositories/socialMediaRepository');

class SocialMediaService {
  static async getAll() {
    return await SocialMediaRepository.getAll();
  }

  static async getById(id) {
    const sm = await SocialMediaRepository.getById(id);
    if (!sm) throw new Error('Social media not found');
    return sm;
  }

  static async add(data) {
    return await SocialMediaRepository.add(data);
  }

  static async update(id, data) {
    const updated = await SocialMediaRepository.update(id, data);
    if (!updated) throw new Error('Social media not found');
    return updated;
  }

  static async delete(id) {
    const deleted = await SocialMediaRepository.delete(id);
    if (!deleted) throw new Error('Social media not found');
    return true;
  }
}

module.exports = SocialMediaService;
