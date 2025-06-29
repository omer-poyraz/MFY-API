const MenuRepository = require('../repositories/menuRepository');

class MenuService {
  static async createMenu(data) {
    return await MenuRepository.add(data);
  }

  static async getMenu(id) {
    const menu = await MenuRepository.getById(id);
    if (!menu) throw new Error('Menu not found');
    return menu;
  }

  static async getAllMenus() {
    return await MenuRepository.getAll();
  }

  static async updateMenu(id, data) {
    const updated = await MenuRepository.update(id, data);
    if (!updated) throw new Error('Menu not found');
    return updated;
  }

  static async deleteMenu(id) {
    const deleted = await MenuRepository.delete(id);
    if (!deleted) throw new Error('Menu not found');
    return true;
  }

  static async updateMenuOrder(orderList) {
    return await MenuRepository.updateOrder(orderList);
  }
}

module.exports = MenuService;
