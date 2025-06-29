const Page = require('../models/page');
const Showcase = require('../models/showcase');

class PageRepository {
  async create(data) {
    let baseSlug = data.slug;
    let langKeys = Object.keys(baseSlug);
    let newSlug = { ...baseSlug };
    for (const lang of langKeys) {
      let slugValue = baseSlug[lang];
      let counter = 1;
      let exists = true;
      let candidate = slugValue;
      while (exists) {
        const found = await Page.findOne({ where: { [`slug.${lang}`]: candidate } });
        if (!found) {
          exists = false;
        } else {
          counter++;
          candidate = `${slugValue}-${counter}`;
        }
      }
      newSlug[lang] = candidate;
    }
    data.slug = newSlug;
    return await Page.create(data);
  }
  async update(id, data) {
    return await Page.update(data, { where: { id } });
  }
  async findById(id) {
    return await Page.findByPk(id, { include: [{ model: Showcase, as: 'showcases' }] });
  }
  async findAll({ page = 1, limit = 10 }) {
    const offset = (page - 1) * limit;
    const { rows, count } = await Page.findAndCountAll({
      offset,
      limit,
      order: [['createdAt', 'DESC']],
      include: [{ model: Showcase, as: 'showcases' }]
    });
    return { rows, count };
  }
  async findBySlug(slug, lang = 'tr') {
    return await Page.findOne({
      where: {
        [`slug.${lang}`]: slug
      },
      include: [{ model: Showcase, as: 'showcases' }]
    });
  }
}

module.exports = new PageRepository();
