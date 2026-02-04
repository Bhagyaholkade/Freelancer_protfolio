# DevBuild - Professional Freelancer Portfolio Website

A modern, full-stack freelancing portfolio website built with React, Node.js, Express, and PostgreSQL. Features a unique design with glassmorphism effects, smooth animations, and professional UI/UX.

## Features

- Modern, professional UI with glassmorphism and gradient effects
- Animated hero section with typing effect
- Projects gallery with filtering and search
- Testimonials carousel and grid
- Responsive design for all devices
- Contact form with database integration
- Clean, maintainable codebase

## Tech Stack

### Frontend
- React 18 with Hooks
- React Router DOM v6
- Axios for API calls
- React Icons
- CSS3 with Custom Properties (Variables)
- Glassmorphism & Modern Animations
- Fully Responsive Design

### Backend
- Node.js
- Express.js
- PostgreSQL
- Sequelize ORM
- Express Validator
- CORS enabled

## Project Structure

```
devbuild-portfolio/
├── backend/
│   ├── config/
│   │   └── database.js          # Database connection
│   ├── controllers/
│   │   ├── contactController.js
│   │   ├── projectController.js
│   │   └── testimonialController.js
│   ├── models/
│   │   ├── Contact.js
│   │   ├── Project.js
│   │   ├── Testimonial.js
│   │   └── index.js
│   ├── routes/
│   │   ├── contactRoutes.js
│   │   ├── projectRoutes.js
│   │   └── testimonialRoutes.js
│   ├── seeders/
│   │   └── seedData.js          # Sample data seeder
│   ├── server.js
│   ├── package.json
│   └── .env.example
│
├── frontend/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.js
│   │   │   ├── Footer.js
│   │   │   └── Testimonials.js
│   │   ├── pages/
│   │   │   ├── Home.js          # Hero, services, testimonials
│   │   │   ├── About.js         # Mission, values, journey
│   │   │   ├── Services.js      # Service listings, tech stack
│   │   │   ├── Projects.js      # Portfolio gallery
│   │   │   └── Contact.js       # Contact form, FAQ
│   │   ├── services/
│   │   │   └── api.js           # API service layer
│   │   ├── styles/
│   │   │   └── index.css        # All styles
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
│
└── README.md
```

## Pages

| Page | Features |
|------|----------|
| **Home** | Animated hero with typing effect, floating tech cards, code preview, services grid, testimonials, stats, CTA |
| **About** | Mission section with expertise bars, values cards, journey timeline, feature checklist |
| **Services** | 6 service cards with features, tech stack tags, guarantees section |
| **Projects** | Filterable gallery, search, category tabs, project cards with hover effects |
| **Contact** | Multi-field form, contact info cards, FAQ accordion |

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- PostgreSQL (v13 or higher)
- npm or yarn

### Database Setup

1. Install PostgreSQL and create a database:
```sql
CREATE DATABASE freelancer_portfolio;
```

### Backend Setup

```bash
# Navigate to backend
cd backend

# Install dependencies
npm install

# Copy environment file
cp .env.example .env

# Update .env with your credentials
# PORT=5000
# DB_HOST=localhost
# DB_PORT=5432
# DB_NAME=freelancer_portfolio
# DB_USER=postgres
# DB_PASSWORD=your_password

# Start development server
npm run dev

# (Optional) Seed the database with sample data
node seeders/seedData.js
```

Backend runs on `http://localhost:5000`

### Frontend Setup

```bash
# Navigate to frontend
cd frontend

# Install dependencies
npm install

# Start development server
npm start
```

Frontend runs on `http://localhost:3000`

## API Endpoints

### Contacts
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/contact` | Submit contact form |
| GET | `/api/contact` | Get all contacts |
| PUT | `/api/contact/:id` | Update contact status |

### Projects
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/projects` | Get all projects |
| GET | `/api/projects/:slug` | Get project by slug |
| POST | `/api/projects` | Create project |
| PUT | `/api/projects/:id` | Update project |
| DELETE | `/api/projects/:id` | Delete project |

### Testimonials
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/testimonials` | Get all testimonials |
| GET | `/api/testimonials/:id` | Get testimonial by ID |
| POST | `/api/testimonials` | Create testimonial |
| PUT | `/api/testimonials/:id` | Update testimonial |
| DELETE | `/api/testimonials/:id` | Delete testimonial |

## Deployment

### Frontend (Vercel/Netlify)

```bash
cd frontend
npm run build
```

Deploy the `build` folder. Set environment variable:
```
REACT_APP_API_URL=https://your-backend-url.com/api
```

### Backend (Railway/Render/Heroku)

1. Push to GitHub
2. Connect to your hosting platform
3. Set environment variables
4. Deploy

## Customization

### Colors
Edit CSS variables in `frontend/src/styles/index.css`:
```css
:root {
  --primary: #6366f1;
  --primary-dark: #4f46e5;
  --primary-light: #818cf8;
  --accent: #06b6d4;
  --gradient-primary: linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #06b6d4 100%);
}
```

### Content
- Edit pages in `frontend/src/pages/`
- Update contact info in `Footer.js` and `Contact.js`
- Modify testimonials in `Testimonials.js`

### Adding New Projects
Use the API or seed script to add projects:
```javascript
{
  title: 'Project Name',
  slug: 'project-name',
  shortDescription: 'Brief description',
  description: 'Full description',
  category: 'fullstack', // fullstack, aiml, frontend, backend, mobile, academic
  technologies: ['React', 'Node.js'],
  imageUrl: 'https://...',
  liveUrl: 'https://...',
  githubUrl: 'https://...',
  featured: true
}
```

## Design Features

- **Glassmorphism**: Frosted glass effect on cards and modals
- **Gradient Orbs**: Animated background elements
- **Smooth Transitions**: 250ms cubic-bezier easing
- **Hover Effects**: Cards lift and glow on hover
- **Typing Animation**: Dynamic text in hero section
- **Responsive Grid**: Auto-fit with minmax for all screen sizes

## License

MIT License - feel free to use this for your own projects!

---

Built with React & Node.js | Designed for Students & Developers
