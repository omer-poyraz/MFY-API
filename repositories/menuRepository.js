const Menu = require('../models/menu');

class MenuRepository {
  static async getAll() {
    return await Menu.findAll({ include: [{ model: Menu, as: 'children' }] });
  }

  static async getById(id) {
    return await Menu.findByPk(id, { include: [{ model: Menu, as: 'children' }] });
  }

  static async add(menu) {
    return await Menu.create(menu);
  }

  static async update(id, updateData) {
    const menu = await Menu.findByPk(id);
    if (!menu) return null;
    await menu.update(updateData);
    return menu;
  }

  static async delete(id) {
    const menu = await Menu.findByPk(id);
    if (!menu) return false;
    await menu.destroy();
    return true;
  }

  static async updateOrder(orderList) {
    // orderList: [{ id, order }, ...]
    for (const item of orderList) {
      await Menu.update({ order: item.order }, { where: { id: item.id } });
    }
    return true;
  }
}

module.exports = MenuRepository;
