const BlogService = require('../services/blogService');
const User = require('../models/user');

const createBlog = async (req, res) => {
    try {
        let { title, slug, description, content, order, userId, process_at } = req.body;
        for (let key of ['title', 'slug', 'description', 'content']) {
            if (typeof req.body[key] === 'string') {
                try { req.body[key] = JSON.parse(req.body[key]); } catch (e) { }
            }
        }
        const blogData = {
            title: req.body.title,
            slug: req.body.slug,
            description: req.body.description,
            content: req.body.content,
            order,
            userId,
            process_at: process_at || new Date(),
            file: req.file ? `/blog/${req.file.filename}` : null
        };
        const blog = await BlogService.createBlog(blogData);
        res.status(201).json({ success: true, blog });
    } catch (err) {
        res.status(400).json({ success: false, error: err.message });
    }
};

const getBlog = async (req, res) => {
    try {
        const blog = await BlogService.getBlog(req.params.id);
        res.json({ success: true, blog });
    } catch (err) {
        res.status(404).json({ success: false, error: err.message });
    }
};

const getAllBlogs = async (req, res) => {
    const pageNumber = parseInt(req.query.pageNumber) || 1;
    const pageSize = parseInt(req.query.pageSize) || 9;
    const blogs = await BlogService.getAllBlogs(pageNumber, pageSize);
    const totalPages = Math.ceil(blogs.total / blogs.pageSize);
    res.set({
        'X-Total-Count': blogs.total,
        'X-Total-Pages': totalPages,
        'X-Has-Next': pageNumber < totalPages,
        'X-Has-Prev': pageNumber > 1
    });
    res.json({ success: true, ...blogs });
};

const updateBlog = async (req, res) => {
    try {
        for (let key of ['title', 'slug', 'description', 'content']) {
            if (typeof req.body[key] === 'string') {
                try { req.body[key] = JSON.parse(req.body[key]); } catch (e) { /* ignore */ }
            }
        }
        const blogData = {
            title: req.body.title,
            slug: req.body.slug,
            description: req.body.description,
            content: req.body.content,
            order: req.body.order,
            userId: req.body.userId,
            process_at: req.body.process_at
        };
        if (req.file) blogData.file = `/blog/${req.file.filename}`;
        const blog = await BlogService.updateBlog(req.params.id, blogData);
        res.json({ success: true, blog });
    } catch (err) {
        res.status(404).json({ success: false, error: err.message });
    }
};

const deleteBlog = async (req, res) => {
    try {
        await BlogService.deleteBlog(req.params.id);
        res.json({ success: true });
    } catch (err) {
        res.status(404).json({ success: false, error: err.message });
    }
};

const updateBlogOrder = async (req, res) => {
    try {
        await BlogService.updateBlogOrder(req.body.orderList);
        res.json({ success: true });
    } catch (err) {
        res.status(400).json({ success: false, error: err.message });
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
