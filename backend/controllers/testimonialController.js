const { Testimonial } = require('../models');

// @desc    Get all testimonials
// @route   GET /api/testimonials
// @access  Public
const getTestimonials = async (req, res) => {
  try {
    const { featured, projectType, limit } = req.query;

    const where = { approved: true };
    if (featured === 'true') where.featured = true;
    if (projectType) where.projectType = projectType;

    const testimonials = await Testimonial.findAll({
      where,
      order: [
        ['featured', 'DESC'],
        ['order', 'ASC'],
        ['createdAt', 'DESC']
      ],
      limit: limit ? parseInt(limit) : undefined
    });

    res.status(200).json({
      success: true,
      count: testimonials.length,
      data: testimonials
    });
  } catch (error) {
    console.error('Get testimonials error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

// @desc    Get single testimonial
// @route   GET /api/testimonials/:id
// @access  Public
const getTestimonial = async (req, res) => {
  try {
    const { id } = req.params;

    const testimonial = await Testimonial.findByPk(id);

    if (!testimonial) {
      return res.status(404).json({
        success: false,
        message: 'Testimonial not found'
      });
    }

    res.status(200).json({
      success: true,
      data: testimonial
    });
  } catch (error) {
    console.error('Get testimonial error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

// @desc    Create a testimonial
// @route   POST /api/testimonials
// @access  Private (admin)
const createTestimonial = async (req, res) => {
  try {
    const {
      name,
      role,
      company,
      content,
      rating,
      avatarUrl,
      projectType,
      featured
    } = req.body;

    const testimonial = await Testimonial.create({
      name,
      role,
      company,
      content,
      rating,
      avatarUrl,
      projectType,
      featured,
      approved: true
    });

    res.status(201).json({
      success: true,
      data: testimonial
    });
  } catch (error) {
    console.error('Create testimonial error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

// @desc    Update a testimonial
// @route   PUT /api/testimonials/:id
// @access  Private (admin)
const updateTestimonial = async (req, res) => {
  try {
    const { id } = req.params;

    const testimonial = await Testimonial.findByPk(id);

    if (!testimonial) {
      return res.status(404).json({
        success: false,
        message: 'Testimonial not found'
      });
    }

    await testimonial.update(req.body);

    res.status(200).json({
      success: true,
      data: testimonial
    });
  } catch (error) {
    console.error('Update testimonial error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

// @desc    Delete a testimonial
// @route   DELETE /api/testimonials/:id
// @access  Private (admin)
const deleteTestimonial = async (req, res) => {
  try {
    const { id } = req.params;

    const testimonial = await Testimonial.findByPk(id);

    if (!testimonial) {
      return res.status(404).json({
        success: false,
        message: 'Testimonial not found'
      });
    }

    await testimonial.destroy();

    res.status(200).json({
      success: true,
      message: 'Testimonial deleted successfully'
    });
  } catch (error) {
    console.error('Delete testimonial error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

module.exports = {
  getTestimonials,
  getTestimonial,
  createTestimonial,
  updateTestimonial,
  deleteTestimonial
};
