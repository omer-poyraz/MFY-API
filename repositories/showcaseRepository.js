const Showcase = require('../models/showcase');
const Company = require('../models/company');

const createShowcase = (data) => Showcase.create(data);
const getShowcase = (id) => Showcase.findByPk(id, { include: [{ model: Company, as: 'company' }] });
const getAllShowcases = (companyId) => Showcase.findAll({ where: { companyId }, order: [['order', 'ASC']], include: [{ model: Company, as: 'company' }] });
const updateShowcase = (id, data) => Showcase.update(data, { where: { id } });
const deleteShowcase = (id) => Showcase.destroy({ where: { id } });
const updateShowcaseOrder = async (orderList) => {
  for (const { id, order } of orderList) {
    await Showcase.update({ order }, { where: { id } });
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
