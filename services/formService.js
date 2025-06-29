const formRepository = require('../repositories/formRepository');

class FormService {
  async createForm(data) {
    return await formRepository.create(data);
  }

  async getForms(page, limit) {
    return await formRepository.findAll({ page, limit });
  }

  async deleteForm(id) {
    return await formRepository.delete(id);
  }
}

module.exports = new FormService();
