const pageService = require('../services/pageService');

exports.createPage = async (req, res, next) => {
  try {
    const page = await pageService.createPage(req.body);
    res.status(201).json({ success: true, page });
  } catch (err) {
    next(err);
  }
};

exports.updatePage = async (req, res, next) => {
  try {
    const id = req.params.id;
    await pageService.updatePage(id, req.body);
    res.json({ success: true });
  } catch (err) {
    next(err);
  }
};

exports.getPage = async (req, res, next) => {
  try {
    const id = req.params.id;
    const page = await pageService.getPage(id);
    res.json({ success: true, page });
  } catch (err) {
    next(err);
  }
};

exports.getPages = async (req, res, next) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const { rows, count } = await pageService.getPages(page, limit);
    res.set('X-Total-Count', count);
    res.json({ success: true, pages: rows });
  } catch (err) {
    next(err);
  }
};

exports.getPageBySlug = async (req, res, next) => {
  try {
    const slug = req.params.slug;
    const lang = req.query.lang || 'tr';
    const page = await pageService.getPageBySlug(slug, lang);
    if (page) {
      res.json({ success: true, page });
    } else {
      res.status(404).json({ success: false, message: 'Page not found' });
    }
  } catch (err) {
    next(err);
  }
};
