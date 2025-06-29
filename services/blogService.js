const BlogRepository = require('../repositories/blogRepository');
const User = require('../models/user');

function slugify(str) {
  return str
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9\-ğüşöçıİĞÜŞÖÇ]/g, '')
    .replace(/-+/g, '-')
    .replace(/^-+|-+$/g, '');
}

const createBlog = async (data) => {
  if (!data.slug) {
    data.slug = {};
    for (const lang of Object.keys(data.title)) {
      data.slug[lang] = slugify(data.title[lang]);
    }
  }
  const blog = await BlogRepository.createBlog(data);
  return BlogRepository.getBlog(blog.id);
};

const getBlog = (id) => BlogRepository.getBlog(id);

const getAllBlogs = async (pageNumber = 1, pageSize = 9) => {
  const offset = (pageNumber - 1) * pageSize;
  const { count, rows } = await BlogRepository.getAllBlogs(offset, pageSize);
  return {
    total: count,
    pageNumber,
    pageSize,
    blogs: rows
  };
};

const updateBlog = async (id, data) => {
  if (!data.slug && data.title) {
    data.slug = {};
    for (const lang of Object.keys(data.title)) {
      data.slug[lang] = slugify(data.title[lang]);
    }
  }
  await BlogRepository.updateBlog(id, data);
  return BlogRepository.getBlog(id);
};

const deleteBlog = (id) => BlogRepository.deleteBlog(id);

const updateBlogOrder = (orderList) => BlogRepository.updateBlogOrder(orderList);

module.exports = {
  createBlog,
  getBlog,
  getAllBlogs,
  updateBlog,
  deleteBlog,
  updateBlogOrder
};
