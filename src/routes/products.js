import { Router } from 'express';
import {
  listProducts,
  getProduct,
  createProduct,
  updateProduct,
  bulkCreateProducts,
  bulkUpdateStatus,
  deleteProduct,
  restoreProduct,
} from '../controllers/productController.js';
import { validateId, validateFilters, validateBulk } from '../validators/productValidator.js';

const router = Router();

router.get('/', validateFilters, listProducts);
router.get('/:id', validateId, getProduct);
router.post('/', createProduct);
router.post('/bulk', validateBulk, bulkCreateProducts);
router.patch('/bulk-status', bulkUpdateStatus);
router.patch('/:id', validateId, updateProduct);
router.delete('/:id/restore', validateId, restoreProduct);
router.delete('/:id', validateId, deleteProduct);

export default router;
