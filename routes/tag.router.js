import express from 'express';
import * as controller from '../controllers/tag.controller.js';

const route = express.Router();

route.get('/', controller.getAllTags);
route.get('/:tagId', controller.getTagById);

route.post('/', controller.createTag);

route.put('/:tagId', controller.updateTag);
route.delete('/:tagId', controller.deleteTag);

export { route as tagRoute };
