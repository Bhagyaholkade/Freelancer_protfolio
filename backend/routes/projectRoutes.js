const express = require('express');
const router = express.Router();
const {
  getProjects,
  getProjectBySlug,
  createProject,
  updateProject,
  deleteProject,
  getCategories
} = require('../controllers/projectController');

// Public routes
router.get('/', getProjects);
router.get('/categories', getCategories);
router.get('/:slug', getProjectBySlug);

// Admin routes (would need auth middleware in production)
router.post('/', createProject);
router.put('/:id', updateProject);
router.delete('/:id', deleteProject);

module.exports = router;
