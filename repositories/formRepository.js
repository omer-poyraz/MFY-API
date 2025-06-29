const Form = require('../models/form');

class FormRepository {
  async create(formData) {
    return await Form.create(formData);
  }

  async findAll({ page = 1, limit = 10 }) {
    const offset = (page - 1) * limit;
    const { rows, count } = await Form.findAndCountAll({
      offset,
      limit,
      order: [['createdAt', 'DESC']]
    });
    return { rows, count };
  }

  async delete(id) {
    return await Form.destroy({ where: { id } });
  }
}

module.exports = new FormRepository();
