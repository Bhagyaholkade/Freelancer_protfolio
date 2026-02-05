export const projectsData = [
    {
        id: 1,
        title: 'E-Commerce Platform',
        slug: 'e-commerce-platform',
        shortDescription: 'A full-featured online shopping platform with cart, payments, and admin dashboard.',
        description: 'This comprehensive e-commerce solution features a robust product management system, integrated Stripe payments, and a responsive shopping cart. It includes a user dashboard for order tracking and an admin panel for inventory management.',
        category: 'fullstack',
        technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
        imageUrl: null,
        liveUrl: '#',
        githubUrl: '#',
        featured: true,
        status: 'completed',
        order: 1
    },
    {
        id: 2,
        title: 'AI Image Classifier',
        slug: 'ai-image-classifier',
        shortDescription: 'Deep learning model for image classification with 95% accuracy on custom dataset.',
        description: 'An advanced computer vision project utilizing Convolutional Neural Networks (CNN) to classify images into multiple categories. The model allows users to upload custom images and receive real-time classification predictions with high accuracy confidence scores.',
        category: 'aiml',
        technologies: ['Python', 'TensorFlow', 'Flask', 'React'],
        imageUrl: null,
        liveUrl: '#',
        githubUrl: '#',
        featured: true,
        status: 'completed',
        order: 2
    },
    {
        id: 3,
        title: 'Student Management System',
        slug: 'student-management-system',
        shortDescription: 'Complete academic project for managing student records, grades, and attendance.',
        description: 'Designed for educational institutions, this system streamlines administrative tasks such as student enrollment, grade recording, and attendance tracking. It provides separate portals for students, teachers, and administrators to ensure secure access to relevant data.',
        category: 'academic',
        technologies: ['React', 'Express', 'MongoDB', 'JWT'],
        imageUrl: null,
        liveUrl: '#',
        githubUrl: '#',
        featured: true,
        status: 'completed',
        order: 3
    },
    {
        id: 4,
        title: 'Real-time Chat Application',
        slug: 'realtime-chat-app',
        shortDescription: 'WebSocket-based chat application with private messaging and group chats.',
        description: 'A seamless communication tool enabling users to create accounts, join chat rooms, and send real-time messages. Features include typing indicators, read receipts, and message history storage, all powered by efficient WebSocket technology.',
        category: 'fullstack',
        technologies: ['React', 'Socket.io', 'Node.js', 'Redis'],
        imageUrl: null,
        liveUrl: '#',
        githubUrl: '#',
        featured: false,
        status: 'completed',
        order: 4
    },
    {
        id: 5,
        title: 'Sentiment Analysis Tool',
        slug: 'sentiment-analysis-tool',
        shortDescription: 'NLP-powered tool for analyzing sentiment in social media posts and reviews.',
        description: 'This tool leverages Natural Language Processing algorithms to analyze textual data from various sources. It determines the emotional tone behind words, classifying feedback as positive, negative, or neutral, providing valuable insights for brand monitoring.',
        category: 'aiml',
        technologies: ['Python', 'NLTK', 'Scikit-learn', 'FastAPI'],
        imageUrl: null,
        liveUrl: '#',
        githubUrl: '#',
        featured: false,
        status: 'completed',
        order: 5
    },
    {
        id: 6,
        title: 'Portfolio Dashboard',
        slug: 'portfolio-dashboard',
        shortDescription: 'Interactive dashboard for tracking investments with real-time data visualization.',
        description: 'A financial tracking application that visualizes investment portfolios using interactive charts and graphs. Users can monitor asset performance, track historical data, and get real-time market updates through third-party financial APIs.',
        category: 'frontend',
        technologies: ['React', 'Chart.js', 'Tailwind CSS', 'API Integration'],
        imageUrl: null,
        liveUrl: '#',
        githubUrl: '#',
        featured: false,
        status: 'completed',
        order: 6
    }
];

export const projectCategories = [
    { id: 'all', label: 'All Projects' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'aiml', label: 'AI/ML' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'mobile', label: 'Mobile' },
    { id: 'academic', label: 'Academic' }
];

export const getProjectBySlug = (slug) => {
    return projectsData.find(project => project.slug === slug);
};

export const getProjectsByCategory = (category) => {
    if (category === 'all') return projectsData;
    return projectsData.filter(project => project.category === category);
};

export const getFeaturedProjects = () => {
    return projectsData.filter(project => project.featured);
};
