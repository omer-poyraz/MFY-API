const MenuService = require('../services/menuService');

const createMenu = async (req, res) => {
  try {
    let title = req.body.title;
    if (typeof title === 'string') {
      try { title = JSON.parse(title); } catch (e) { /* ignore */ }
    }
    const menuData = {
      title,
      parentId: req.body.parentId || null,
      file: req.file ? `/menus/${req.file.filename}` : null
    };
    const menu = await MenuService.createMenu(menuData);
    res.status(201).json({ success: true, menu });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
};

const getMenu = async (req, res) => {
  try {
    const menu = await MenuService.getMenu(req.params.id);
    res.json({ success: true, menu });
  } catch (err) {
    res.status(404).json({ success: false, error: err.message });
  }
};

const getAllMenus = async (req, res) => {
  const menus = await MenuService.getAllMenus();
  res.json({ success: true, menus });
};

const updateMenu = async (req, res) => {
  try {
    let title = req.body.title;
    if (typeof title === 'string') {
      try { title = JSON.parse(title); } catch (e) { /* ignore */ }
    }
    const menuData = {
      title,
      parentId: req.body.parentId || null
    };
    if (req.file) menuData.file = `/menus/${req.file.filename}`;
    const menu = await MenuService.updateMenu(req.params.id, menuData);
    res.json({ success: true, menu });
  } catch (err) {
    res.status(404).json({ success: false, error: err.message });
  }
};

const deleteMenu = async (req, res) => {
  try {
    await MenuService.deleteMenu(req.params.id);
    res.json({ success: true });
  } catch (err) {
    res.status(404).json({ success: false, error: err.message });
  }
};

const updateMenuOrder = async (req, res) => {
  try {
    await MenuService.updateMenuOrder(req.body.orderList);
    res.json({ success: true });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
};

module.exports = {
  createMenu,
  getMenu,
  getAllMenus,
  updateMenu,
  deleteMenu,
  updateMenuOrder
};
