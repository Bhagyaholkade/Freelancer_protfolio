const { Project, Testimonial } = require('../models');
const { sequelize } = require('../config/database');

const projectsData = [
  {
    title: 'E-Commerce Platform',
    slug: 'e-commerce-platform',
    shortDescription: 'A full-featured online shopping platform with cart, payments, and admin dashboard.',
    description: 'Complete e-commerce solution built with React and Node.js. Features include product catalog, shopping cart, user authentication, Stripe payment integration, order management, and admin dashboard for inventory control.',
    category: 'fullstack',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'Redux', 'JWT'],
    imageUrl: null,
    liveUrl: 'https://example.com/ecommerce',
    githubUrl: 'https://github.com/example/ecommerce',
    featured: true,
    status: 'completed',
    order: 1
  },
  {
    title: 'AI Image Classifier',
    slug: 'ai-image-classifier',
    shortDescription: 'Deep learning model for image classification with 95% accuracy on custom dataset.',
    description: 'Convolutional Neural Network built with TensorFlow for classifying images into multiple categories. Includes data preprocessing pipeline, model training scripts, and a Flask API for real-time predictions.',
    category: 'aiml',
    technologies: ['Python', 'TensorFlow', 'Flask', 'React', 'OpenCV', 'NumPy'],
    imageUrl: null,
    liveUrl: 'https://example.com/image-classifier',
    githubUrl: 'https://github.com/example/image-classifier',
    featured: true,
    status: 'completed',
    order: 2
  },
  {
    title: 'Student Management System',
    slug: 'student-management-system',
    shortDescription: 'Complete academic project for managing student records, grades, and attendance.',
    description: 'Comprehensive student management system with modules for enrollment, attendance tracking, grade management, and report generation. Built as a final year project with full documentation.',
    category: 'academic',
    technologies: ['React', 'Express', 'MongoDB', 'JWT', 'Chart.js', 'PDF Generation'],
    imageUrl: null,
    liveUrl: 'https://example.com/sms',
    githubUrl: 'https://github.com/example/sms',
    featured: true,
    status: 'completed',
    order: 3
  },
  {
    title: 'Real-time Chat Application',
    slug: 'realtime-chat-app',
    shortDescription: 'WebSocket-based chat application with private messaging and group chats.',
    description: 'Real-time messaging application using Socket.io. Features include private messaging, group chats, file sharing, message history, typing indicators, and online status.',
    category: 'fullstack',
    technologies: ['React', 'Socket.io', 'Node.js', 'Redis', 'MongoDB'],
    imageUrl: null,
    liveUrl: 'https://example.com/chat',
    githubUrl: 'https://github.com/example/chat',
    featured: false,
    status: 'completed',
    order: 4
  },
  {
    title: 'Sentiment Analysis Tool',
    slug: 'sentiment-analysis-tool',
    shortDescription: 'NLP-powered tool for analyzing sentiment in social media posts and reviews.',
    description: 'Natural Language Processing tool that analyzes text sentiment using machine learning. Includes data collection scripts, model training notebooks, and a FastAPI backend for predictions.',
    category: 'aiml',
    technologies: ['Python', 'NLTK', 'Scikit-learn', 'FastAPI', 'React'],
    imageUrl: null,
    liveUrl: 'https://example.com/sentiment',
    githubUrl: 'https://github.com/example/sentiment',
    featured: false,
    status: 'completed',
    order: 5
  },
  {
    title: 'Portfolio Dashboard',
    slug: 'portfolio-dashboard',
    shortDescription: 'Interactive dashboard for tracking investments with real-time data visualization.',
    description: 'Investment portfolio tracker with real-time stock data, interactive charts, portfolio analytics, and performance metrics. Built with React and integrated with financial APIs.',
    category: 'frontend',
    technologies: ['React', 'Chart.js', 'Tailwind CSS', 'Alpha Vantage API'],
    imageUrl: null,
    liveUrl: 'https://example.com/portfolio',
    githubUrl: 'https://github.com/example/portfolio',
    featured: false,
    status: 'completed',
    order: 6
  },
  {
    title: 'RESTful API Backend',
    slug: 'restful-api-backend',
    shortDescription: 'Scalable REST API with authentication, rate limiting, and comprehensive documentation.',
    description: 'Production-ready REST API built with Express.js. Features include JWT authentication, role-based access control, rate limiting, request validation, and Swagger documentation.',
    category: 'backend',
    technologies: ['Node.js', 'Express', 'PostgreSQL', 'Swagger', 'Jest'],
    imageUrl: null,
    liveUrl: null,
    githubUrl: 'https://github.com/example/rest-api',
    featured: false,
    status: 'completed',
    order: 7
  },
  {
    title: 'Food Delivery App',
    slug: 'food-delivery-app',
    shortDescription: 'Cross-platform mobile app for food ordering with real-time tracking.',
    description: 'React Native food delivery application with restaurant listings, menu browsing, cart management, payment integration, and real-time order tracking using maps.',
    category: 'mobile',
    technologies: ['React Native', 'Node.js', 'MongoDB', 'Stripe', 'Google Maps'],
    imageUrl: null,
    liveUrl: null,
    githubUrl: 'https://github.com/example/food-app',
    featured: false,
    status: 'completed',
    order: 8
  },
  {
    title: 'Hospital Management System',
    slug: 'hospital-management-system',
    shortDescription: 'Academic project for managing hospital operations, patients, and appointments.',
    description: 'Complete hospital management solution covering patient registration, appointment scheduling, doctor management, billing, and medical records. Built as a major academic project.',
    category: 'academic',
    technologies: ['React', 'Node.js', 'MySQL', 'Redux', 'Bootstrap'],
    imageUrl: null,
    liveUrl: null,
    githubUrl: 'https://github.com/example/hospital-mgmt',
    featured: false,
    status: 'completed',
    order: 9
  }
];

const testimonialsData = [
  {
    name: 'Rahul Sharma',
    role: 'Computer Science Student',
    company: 'IIT Delhi',
    content: 'DevBuild helped me complete my final year project on time. The code quality was excellent, and they explained everything so I could present it confidently. Highly recommend for any student struggling with their projects!',
    rating: 5,
    avatarUrl: null,
    projectType: 'academic',
    featured: true,
    approved: true,
    order: 1
  },
  {
    name: 'Priya Patel',
    role: 'Startup Founder',
    company: 'TechStart',
    content: 'We needed an MVP built quickly for our startup pitch. DevBuild delivered a fully functional full-stack application that impressed our investors. Professional, responsive, and great communication throughout.',
    rating: 5,
    avatarUrl: null,
    projectType: 'fullstack',
    featured: true,
    approved: true,
    order: 2
  },
  {
    name: 'Arjun Mehta',
    role: 'Data Science Student',
    company: 'BITS Pilani',
    content: 'The AI/ML project they built for me was beyond expectations. Not only did it work perfectly, but they also helped me understand the algorithms and prepare for my viva. Got the highest grade in my batch!',
    rating: 5,
    avatarUrl: null,
    projectType: 'aiml',
    featured: true,
    approved: true,
    order: 3
  },
  {
    name: 'Sneha Reddy',
    role: 'Freelance Developer',
    company: 'Self-employed',
    content: 'I outsourced a complex backend project to DevBuild when I was overloaded with work. They delivered clean, well-documented code that integrated seamlessly with the existing system. Will definitely work with them again!',
    rating: 5,
    avatarUrl: null,
    projectType: 'backend',
    featured: true,
    approved: true,
    order: 4
  },
  {
    name: 'Vikram Singh',
    role: 'MBA Student',
    company: 'ISB Hyderabad',
    content: 'Needed a data visualization dashboard for my thesis. DevBuild created an interactive dashboard that made my research findings come alive. The presentation was a huge success thanks to their work.',
    rating: 5,
    avatarUrl: null,
    projectType: 'frontend',
    featured: true,
    approved: true,
    order: 5
  },
  {
    name: 'Ananya Krishnan',
    role: 'Software Engineering Student',
    company: 'VIT Vellore',
    content: 'Fantastic experience working with DevBuild! They built a complete e-commerce platform for my project. The code was clean, well-commented, and they even helped me understand the architecture.',
    rating: 5,
    avatarUrl: null,
    projectType: 'fullstack',
    featured: false,
    approved: true,
    order: 6
  },
  {
    name: 'Mohammed Khan',
    role: 'Machine Learning Engineer',
    company: 'AI Startup',
    content: 'Collaborated with DevBuild on an NLP project. Their expertise in both frontend and ML integration was impressive. The final product exceeded our expectations in terms of accuracy and usability.',
    rating: 5,
    avatarUrl: null,
    projectType: 'aiml',
    featured: false,
    approved: true,
    order: 7
  }
];

const seedDatabase = async () => {
  try {
    // Connect to database
    await sequelize.authenticate();
    console.log('Database connected');

    // Sync models
    await sequelize.sync({ force: true });
    console.log('Database synced (tables recreated)');

    // Seed projects
    console.log('Seeding projects...');
    for (const project of projectsData) {
      await Project.create(project);
    }
    console.log(`Created ${projectsData.length} projects`);

    // Seed testimonials
    console.log('Seeding testimonials...');
    for (const testimonial of testimonialsData) {
      await Testimonial.create(testimonial);
    }
    console.log(`Created ${testimonialsData.length} testimonials`);

    console.log('Database seeded successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Seeding error:', error);
    process.exit(1);
  }
};

// Run seeder
seedDatabase();
