const Blog = require('../models/blog');
const User = require('../models/user');

const createBlog = (data) => Blog.create(data);
const getBlog = (id) => Blog.findByPk(id, { include: [{ model: User, as: 'user' }] });
const getAllBlogs = (offset, limit, order = [['order', 'ASC']]) => Blog.findAndCountAll({
  include: [{ model: User, as: 'user' }],
  offset,
  limit,
  order
});
const updateBlog = (id, data) => Blog.update(data, { where: { id } });
const deleteBlog = (id) => Blog.destroy({ where: { id } });
const updateBlogOrder = async (orderList) => {
  for (const { id, order } of orderList) {
    await Blog.update({ order }, { where: { id } });
  }
};

module.exports = {
  createBlog,
  getBlog,
  getAllBlogs,
  updateBlog,
  deleteBlog,
  updateBlogOrder
};
