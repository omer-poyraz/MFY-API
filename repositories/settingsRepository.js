const Settings = require('../models/settings');
const Menu = require('../models/menu');
const Company = require('../models/company');
const Showcase = require('../models/showcase');

function buildMenuTree(menus) {
  const menuMap = {};
  menus.forEach(menu => {
    menuMap[menu.id] = { ...menu, children: [] };
  });
  const tree = [];
  menus.forEach(menu => {
    if (menu.parentId && menuMap[menu.parentId]) {
      menuMap[menu.parentId].children.push(menuMap[menu.id]);
    } else if (!menu.parentId) {
      tree.push(menuMap[menu.id]);
    }
  });
  return tree;
}

class SettingsRepository {
  static async get() {
    const settings = await Settings.findByPk(1);
    const menusRaw = await Menu.findAll({ raw: true });
    const menus = buildMenuTree(menusRaw);
    const company = await Company.findOne({ include: [{ model: Showcase, as: 'showcases' }] });
    return { ...settings?.toJSON(), menu: menus, company };
  }

  static async update(data) {
    const settings = await Settings.findByPk(1);
    if (!settings) return null;
    await settings.update(data);
    return settings;
  }

  static async createDefaultIfNotExists() {
    const exists = await Settings.findByPk(1);
    if (!exists) {
      await Settings.create({
        id: 1,
        title: { tr: 'Başlık', en: 'Title' },
        description: { tr: 'Açıklama', en: 'Description' },
        copyright: { tr: 'Telif', en: 'Copyright' },
        address: '',
        phone: '',
        mail: '',
        working: '',
        map: ''
      });
    }
  }
}

module.exports = SettingsRepository;
