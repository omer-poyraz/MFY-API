const ShowcaseRepository = require('../repositories/showcaseRepository');

const createShowcase = (data) => ShowcaseRepository.createShowcase(data);
const getShowcase = (id) => ShowcaseRepository.getShowcase(id);
const getAllShowcases = (companyId) => ShowcaseRepository.getAllShowcases(companyId);
const updateShowcase = (id, data) => ShowcaseRepository.updateShowcase(id, data);
const deleteShowcase = (id) => ShowcaseRepository.deleteShowcase(id);
const updateShowcaseOrder = (orderList) => ShowcaseRepository.updateShowcaseOrder(orderList);

module.exports = {
  createShowcase,
  getShowcase,
  getAllShowcases,
  updateShowcase,
  deleteShowcase,
  updateShowcaseOrder
};
