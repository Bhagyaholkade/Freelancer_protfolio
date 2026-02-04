import {
    FiCode, FiCpu, FiBook, FiLayers, FiCheckCircle
} from 'react-icons/fi';

export const services = [
    {
        icon: <FiCode />,
        title: 'Full Stack Development',
        description: 'Complete web applications with React, Node.js, and modern databases. From frontend to backend, we build it all.'
    },
    {
        icon: <FiCpu />,
        title: 'AI & Machine Learning',
        description: 'Intelligent applications powered by TensorFlow, PyTorch, and cutting-edge ML algorithms.'
    },
    {
        icon: <FiBook />,
        title: 'Academic Projects',
        description: 'Final year and major projects with complete documentation, presentations, and viva support.'
    },
    {
        icon: <FiLayers />,
        title: 'System Architecture',
        description: 'Scalable system design with microservices, cloud infrastructure, and best practices.'
    }
];

export const stats = [
    { number: '150+', label: 'Projects Delivered' },
    { number: '100%', label: 'Success Rate' },
    { number: '50+', label: 'Happy Clients' },
    { number: '24/7', label: 'Support' }
];

export const results = [
    { metric: '200%', label: 'Faster Development', progress: 95 },
    { metric: '100%', label: 'Working Guarantee', progress: 100 },
    { metric: '50K+', label: 'Lines of Code', progress: 85 },
    { metric: '4.9/5', label: 'Client Rating', progress: 98 }
];

export const pricingPlans = [
    {
        name: 'Starter',
        price: '0',
        description: 'Perfect for small projects and consultations',
        features: [
            'Free project consultation',
            'Requirements analysis',
            'Tech stack recommendation',
            'Basic project scope',
            'Email support'
        ]
    },
    {
        name: 'Professional',
        price: '199',
        description: 'Most popular for academic and startup projects',
        features: [
            'Full project development',
            'Source code ownership',
            'Documentation included',
            'Deployment assistance',
            'Priority support',
            '30-day bug fixes'
        ],
        featured: true
    },
    {
        name: 'Enterprise',
        price: '499',
        description: 'For complex, large-scale applications',
        features: [
            'Everything in Professional',
            'Advanced architecture',
            'Performance optimization',
            'Security audit',
            'Dedicated support',
            '90-day maintenance'
        ]
    }
];

export const faqs = [
    {
        question: 'How long does a typical project take?',
        answer: 'Project timelines vary based on complexity. Simple projects take 1-2 weeks, while complex applications may take 4-8 weeks.'
    },
    {
        question: 'Do you provide source code?',
        answer: 'Yes, you get complete ownership of all source code. We provide clean, well-documented code that you can modify and extend.'
    },
    {
        question: 'What if I need changes after delivery?',
        answer: 'We offer free bug fixes for 30 days post-delivery. Additional features can be discussed as a new scope.'
    },
    {
        question: 'Can you help with deployment?',
        answer: 'Absolutely! We assist with deployment to your preferred platform including AWS, Vercel, Netlify, or any other service.'
    }
];
