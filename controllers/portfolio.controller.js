import Category from '../models/category.model.js';
import Portfolio from '../models/portfolio.model.js';
import Tag from '../models/tag.model.js';

export const getAllPortfolios = async (req, res) => {
  try {
    const portfolios = await Portfolio.find()
      .populate({
        path: 'category',
        model: Category,
      })
      .populate({
        path: 'tags',
        model: Tag,
      });
    return res.json({ success: true, data: portfolios });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export const getPortfolioById = async (req, res) => {
  const { portfolioId } = req.params;

  try {
    const portfolio = await Portfolio.findById(portfolioId)
      .populate({
        path: 'category',
        model: Category,
      })
      .populate({
        path: 'tags',
        model: Tag,
      });
    return res.json({ success: true, data: portfolio });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export const createPortfolio = async (req, res) => {
  const { title, description, images, repo_url, category, tags } = req.body;

  try {
    const newPortfolio = new Portfolio({
      title,
      description,
      images,
      repo_url,
      category,
      tags,
    });
    await newPortfolio.save();

    return res.json({
      success: true,
      message: 'New Portfolio successfully added!',
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export const updatePortfolio = async (req, res) => {
  const { portfolioId } = req.params;
  const { title, description, images, repo_url, category, tags } = req.body;

  try {
    await Portfolio.findByIdAndUpdate(portfolioId, {
      title,
      description,
      images,
      repo_url,
      category,
      tags,
      update_at: new Date(),
    });
    return res.json({
      success: true,
      message: 'Portfolio successfully updated!',
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export const deletePortfolio = async (req, res) => {
  const { portfolioId } = req.params;

  try {
    await Portfolio.findByIdAndDelete(portfolioId);
    return res.json({
      success: true,
      message: 'Portfolio successfully deleted!',
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};