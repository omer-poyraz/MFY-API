const pageRepository = require('../repositories/pageRepository');

class PageService {
  async createPage(data) {
    return await pageRepository.create(data);
  }
  async updatePage(id, data) {
    return await pageRepository.update(id, data);
  }
  async getPage(id) {
    return await pageRepository.findById(id);
  }
  async getPages(page, limit) {
    return await pageRepository.findAll({ page, limit });
  }
  async getPageBySlug(slug, lang) {
    return await pageRepository.findBySlug(slug, lang);
  }
}

module.exports = new PageService();
