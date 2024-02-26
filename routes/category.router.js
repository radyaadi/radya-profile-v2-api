import express from 'express';
import * as controller from '../controllers/category.controller.js';

const route = express.Router();

route.get('/', controller.getAllCatergories);
route.get('/:catergoryId', controller.getCatergoryById);
route.post('/', controller.createCatergory);
route.put('/:catergoryId', controller.updateCatergory);
route.delete('/:catergoryId', controller.deleteCatergory);

export { route as categoryRoute };
