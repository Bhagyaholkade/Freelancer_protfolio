const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const Project = sequelize.define('Project', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  title: {
    type: DataTypes.STRING(200),
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  slug: {
    type: DataTypes.STRING(200),
    allowNull: false,
    unique: true
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  shortDescription: {
    type: DataTypes.STRING(300),
    allowNull: false
  },
  category: {
    type: DataTypes.ENUM('fullstack', 'aiml', 'frontend', 'backend', 'mobile', 'academic'),
    allowNull: false
  },
  technologies: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    defaultValue: []
  },
  imageUrl: {
    type: DataTypes.STRING(500),
    allowNull: true
  },
  liveUrl: {
    type: DataTypes.STRING(500),
    allowNull: true
  },
  githubUrl: {
    type: DataTypes.STRING(500),
    allowNull: true
  },
  featured: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  status: {
    type: DataTypes.ENUM('completed', 'in_progress', 'archived'),
    defaultValue: 'completed'
  },
  completedAt: {
    type: DataTypes.DATE,
    allowNull: true
  },
  order: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  }
}, {
  tableName: 'projects',
  timestamps: true
});

module.exports = Project;
