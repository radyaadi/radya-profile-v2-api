import mongoose from 'mongoose';

const portfolioSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image_url: { type: String },
  product_url: { type: String },
  repo_url: { type: String },
  category: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Category' }],
  tags: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Tag' }],
  created_at: { type: Date, required: true },
});

const Portfolio =
  mongoose.models.Portfolio || mongoose.model('Portfolio', portfolioSchema);

export default Portfolio;
