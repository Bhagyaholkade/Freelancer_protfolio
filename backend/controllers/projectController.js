const { Project } = require('../models');
const { Op } = require('sequelize');

// @desc    Get all projects
// @route   GET /api/projects
// @access  Public
const getProjects = async (req, res) => {
  try {
    const { category, featured, status, limit } = req.query;

    const where = {};
    if (category) where.category = category;
    if (featured === 'true') where.featured = true;
    if (status) where.status = status;

    const projects = await Project.findAll({
      where,
      order: [
        ['featured', 'DESC'],
        ['order', 'ASC'],
        ['completedAt', 'DESC']
      ],
      limit: limit ? parseInt(limit) : undefined
    });

    res.status(200).json({
      success: true,
      count: projects.length,
      data: projects
    });
  } catch (error) {
    console.error('Get projects error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

// @desc    Get single project by slug
// @route   GET /api/projects/:slug
// @access  Public
const getProjectBySlug = async (req, res) => {
  try {
    const { slug } = req.params;

    const project = await Project.findOne({
      where: { slug }
    });

    if (!project) {
      return res.status(404).json({
        success: false,
        message: 'Project not found'
      });
    }

    res.status(200).json({
      success: true,
      data: project
    });
  } catch (error) {
    console.error('Get project error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

// @desc    Create a project
// @route   POST /api/projects
// @access  Private (admin)
const createProject = async (req, res) => {
  try {
    const {
      title,
      description,
      shortDescription,
      category,
      technologies,
      imageUrl,
      liveUrl,
      githubUrl,
      featured,
      status,
      completedAt
    } = req.body;

    // Generate slug from title
    const slug = title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');

    const project = await Project.create({
      title,
      slug,
      description,
      shortDescription,
      category,
      technologies,
      imageUrl,
      liveUrl,
      githubUrl,
      featured,
      status,
      completedAt
    });

    res.status(201).json({
      success: true,
      data: project
    });
  } catch (error) {
    console.error('Create project error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

// @desc    Update a project
// @route   PUT /api/projects/:id
// @access  Private (admin)
const updateProject = async (req, res) => {
  try {
    const { id } = req.params;

    const project = await Project.findByPk(id);

    if (!project) {
      return res.status(404).json({
        success: false,
        message: 'Project not found'
      });
    }

    await project.update(req.body);

    res.status(200).json({
      success: true,
      data: project
    });
  } catch (error) {
    console.error('Update project error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

// @desc    Delete a project
// @route   DELETE /api/projects/:id
// @access  Private (admin)
const deleteProject = async (req, res) => {
  try {
    const { id } = req.params;

    const project = await Project.findByPk(id);

    if (!project) {
      return res.status(404).json({
        success: false,
        message: 'Project not found'
      });
    }

    await project.destroy();

    res.status(200).json({
      success: true,
      message: 'Project deleted successfully'
    });
  } catch (error) {
    console.error('Delete project error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

// @desc    Get project categories with counts
// @route   GET /api/projects/categories
// @access  Public
const getCategories = async (req, res) => {
  try {
    const categories = await Project.findAll({
      attributes: [
        'category',
        [require('sequelize').fn('COUNT', require('sequelize').col('id')), 'count']
      ],
      group: ['category'],
      where: { status: 'completed' }
    });

    res.status(200).json({
      success: true,
      data: categories
    });
  } catch (error) {
    console.error('Get categories error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

module.exports = {
  getProjects,
  getProjectBySlug,
  createProject,
  updateProject,
  deleteProject,
  getCategories
};
