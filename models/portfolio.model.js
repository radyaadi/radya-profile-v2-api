import mongoose from 'mongoose';

const portfolioSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  images: [{ type: String }],
  product_url: { type: String },
  repo_url: { type: String },
  category: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Category' }],
  tags: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Tag' }],
  create_at: { type: Date, default: Date.now },
  update_at: { type: Date, default: Date.now },
});

const Portfolio =
  mongoose.models.Portfolio || mongoose.model('Portfolio', portfolioSchema);

export default Portfolio;
