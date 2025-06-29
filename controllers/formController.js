const formService = require('../services/formService');

exports.createForm = async (req, res, next) => {
  try {
    const form = await formService.createForm(req.body);
    res.status(201).json({ success: true, form });
  } catch (err) {
    next(err);
  }
};

exports.getForms = async (req, res, next) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const { rows, count } = await formService.getForms(page, limit);
    res.set('X-Total-Count', count);
    res.json({ success: true, forms: rows });
  } catch (err) {
    next(err);
  }
};

exports.deleteForm = async (req, res, next) => {
  try {
    const id = req.params.id;
    const deleted = await formService.deleteForm(id);
    if (deleted) {
      res.json({ success: true });
    } else {
      res.status(404).json({ success: false, message: 'Form not found' });
    }
  } catch (err) {
    next(err);
  }
};
