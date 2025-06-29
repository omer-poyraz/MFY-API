const Company = require('../models/company');
const Showcase = require('../models/showcase');

const getCompany = async () => {
  let company = await Company.findByPk(1, { include: [{ model: Showcase, as: 'showcases' }] });
  if (!company) {
    company = await Company.create({
      id: 1,
      title: { tr: '', en: '' },
      description: { tr: '', en: '' },
      content: { tr: '', en: '' },
      file: null
    });
    company = await Company.findByPk(1, { include: [{ model: Showcase, as: 'showcases' }] });
  }
  return company;
};

const updateCompany = async (data) => {
  const company = await Company.findByPk(1);
  if (!company) throw new Error('Company not found');
  await company.update(data);
  return Company.findByPk(1, { include: [{ model: Showcase, as: 'showcases' }] });
};

module.exports = {
  getCompany,
  updateCompany
};
