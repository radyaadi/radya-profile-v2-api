import express from 'express';
import * as controller from '../controllers/portfolio.controller.js';

const route = express.Router();

route.get('/', controller.getAllPortfolios);
route.get('/:portfolioId', controller.getPortfolioById);
route.post('/', controller.createPortfolio);
route.put('/:portfolioId', controller.updatePortfolio);

route.delete('/:portfolioId', controller.deletePortfolio);

export { route as portfolioRoute };
