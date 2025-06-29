const CompanyRepository = require('../repositories/companyRepository');

const getCompany = () => CompanyRepository.getCompany();
const updateCompany = (data) => CompanyRepository.updateCompany(data);

module.exports = {
  getCompany,
  updateCompany
};
