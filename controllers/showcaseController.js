const ShowcaseService = require('../services/showcaseService');

const createShowcase = async (req, res) => {
  try {
    let { title, description, content, order, companyId } = req.body;
    for (let key of ['title', 'description', 'content']) {
      if (typeof req.body[key] === 'string') {
        try { req.body[key] = JSON.parse(req.body[key]); } catch (e) { /* ignore */ }
      }
    }
    const data = {
      title: req.body.title,
      description: req.body.description,
      content: req.body.content,
      order,
      companyId,
      file: req.file ? `/showcase/${req.file.filename}` : null
    };
    const showcase = await ShowcaseService.createShowcase(data);
    res.status(201).json({ success: true, showcase });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
};

const getShowcase = async (req, res) => {
  try {
    const showcase = await ShowcaseService.getShowcase(req.params.id);
    res.json({ success: true, showcase });
  } catch (err) {
    res.status(404).json({ success: false, error: err.message });
  }
};

const getAllShowcases = async (req, res) => {
  const showcases = await ShowcaseService.getAllShowcases(req.query.companyId);
  res.json({ success: true, showcases });
};

const updateShowcase = async (req, res) => {
  try {
    for (let key of ['title', 'description', 'content']) {
      if (typeof req.body[key] === 'string') {
        try { req.body[key] = JSON.parse(req.body[key]); } catch (e) { /* ignore */ }
      }
    }
    const data = {
      title: req.body.title,
      description: req.body.description,
      content: req.body.content,
      order: req.body.order,
      companyId: req.body.companyId
    };
    if (req.file) data.file = `/showcase/${req.file.filename}`;
    const showcase = await ShowcaseService.updateShowcase(req.params.id, data);
    res.json({ success: true, showcase });
  } catch (err) {
    res.status(404).json({ success: false, error: err.message });
  }
};

const deleteShowcase = async (req, res) => {
  try {
    await ShowcaseService.deleteShowcase(req.params.id);
    res.json({ success: true });
  } catch (err) {
    res.status(404).json({ success: false, error: err.message });
  }
};

const updateShowcaseOrder = async (req, res) => {
  try {
    await ShowcaseService.updateShowcaseOrder(req.body.orderList);
    res.json({ success: true });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
};

module.exports = {
  createShowcase,
  getShowcase,
  getAllShowcases,
  updateShowcase,
  deleteShowcase,
  updateShowcaseOrder
};
