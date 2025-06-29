const CompanyService = require('../services/companyService');

const getCompany = async (req, res) => {
  const company = await CompanyService.getCompany();
  res.json({ success: true, company });
};

const updateCompany = async (req, res) => {
  try {
    let { title, description, content } = req.body;
    for (let key of ['title', 'description', 'content']) {
      if (typeof req.body[key] === 'string') {
        try { req.body[key] = JSON.parse(req.body[key]); } catch (e) { /* ignore */ }
      }
    }
    const data = {
      title: req.body.title,
      description: req.body.description,
      content: req.body.content
    };
    if (req.file) data.file = `/company/${req.file.filename}`;
    const company = await CompanyService.updateCompany(data);
    res.json({ success: true, company });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
};

module.exports = {
  getCompany,
  updateCompany
};
