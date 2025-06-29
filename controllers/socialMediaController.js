const SocialMediaService = require('../services/socialMediaService');

const getAll = async (req, res) => {
  const items = await SocialMediaService.getAll();
  res.json({ success: true, items });
};

const getById = async (req, res) => {
  try {
    const item = await SocialMediaService.getById(req.params.id);
    res.json({ success: true, item });
  } catch (err) {
    res.status(404).json({ success: false, error: err.message });
  }
};

const add = async (req, res) => {
  try {
    const data = {
      title: req.body.title,
      url: req.body.url,
      file: req.file ? `/socialmedia/${req.file.filename}` : null
    };
    const item = await SocialMediaService.add(data);
    res.status(201).json({ success: true, item });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
};

const update = async (req, res) => {
  try {
    const data = {
      title: req.body.title,
      url: req.body.url
    };
    if (req.file) data.file = `/socialmedia/${req.file.filename}`;
    const item = await SocialMediaService.update(req.params.id, data);
    res.json({ success: true, item });
  } catch (err) {
    res.status(404).json({ success: false, error: err.message });
  }
};

const remove = async (req, res) => {
  try {
    await SocialMediaService.delete(req.params.id);
    res.json({ success: true });
  } catch (err) {
    res.status(404).json({ success: false, error: err.message });
  }
};

module.exports = {
  getAll,
  getById,
  add,
  update,
  remove
};
