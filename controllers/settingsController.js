const SettingsService = require('../services/settingsService');

const getSettings = async (req, res) => {
  const settings = await SettingsService.getSettings();
  res.json({ success: true, settings });
};

const updateSettings = async (req, res) => {
  try {
    const updated = await SettingsService.updateSettings(req.body);
    res.json({ success: true, settings: updated });
  } catch (err) {
    res.status(404).json({ success: false, error: err.message });
  }
};

module.exports = {
  getSettings,
  updateSettings
};
