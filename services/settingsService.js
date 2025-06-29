const SettingsRepository = require('../repositories/settingsRepository');

class SettingsService {
  static async getSettings() {
    return await SettingsRepository.get();
  }

  static async updateSettings(data) {
    const updated = await SettingsRepository.update(data);
    if (!updated) throw new Error('Settings not found');
    return updated;
  }

  static async createDefault() {
    await SettingsRepository.createDefaultIfNotExists();
  }
}

module.exports = SettingsService;
