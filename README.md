# Sausage Link - Step-by-Step Meat Cooking Guide

A full-stack Next.js application for learning to cook meat perfectly with AI chef assistance, recipes, community features, and gamification.

## 🚀 Features

- **Multi-page Web App**: Home, Learn, Recipes, Ask the Chef AI, My Cookbook, Community, About
- **Recipe Management**: 2+ recipes per meat type with step-by-step instructions
- **AI Chef Assistant**: Chat with Mason (funny, encouraging) or Connely (playfully evil)
- **Temperature Tracking**: Interactive widgets showing safe cooking temperatures
- **User Accounts**: Save recipes, upload photos, earn badges
- **Community**: Comments, photo uploads, monthly challenges
- **Admin Dashboard**: Content moderation and user management
- **Gamification**: Badges for achievements

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, React, TypeScript, Tailwind CSS
- **Backend**: Next.js API Routes
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: JWT-based auth
- **AI**: OpenAI GPT-4
- **Image Storage**: Cloudinary
- **Hosting**: Vercel-ready

## 📋 Prerequisites

- Node.js 18+ and npm
- PostgreSQL database (local or hosted)
- OpenAI API key
- Cloudinary account (for image uploads)

## 🔧 Installation

### 1. Clone and Install Dependencies

```bash
cd sausage-link
npm install
```

### 2. Set Up Database

Create a PostgreSQL database and get the connection URL.

For local development:
```bash
# Install PostgreSQL locally, then create database
createdb sausage_link
```

For hosted (recommended):
- Sign up for [Supabase](https://supabase.com) (free tier)
- Or [Neon](https://neon.tech) (free tier)
- Or [Railway](https://railway.app)
- Get your DATABASE_URL

### 3. Configure Environment Variables

Create a `.env` file in the root directory:

```bash
cp .env.example .env
```

Edit `.env` with your credentials:

```env
# Database - Replace with your PostgreSQL URL
DATABASE_URL="postgresql://user:password@localhost:5432/sausage_link?schema=public"

# Authentication - Generate a secure random string
JWT_SECRET="your-super-secret-jwt-key-min-32-characters"
NEXT_PUBLIC_SITE_URL="http://localhost:3000"

# OpenAI - Get from https://platform.openai.com/api-keys
OPENAI_API_KEY="sk-..."

# Cloudinary - Get from https://cloudinary.com/console
CLOUDINARY_CLOUD_NAME="your-cloud-name"
CLOUDINARY_API_KEY="your-api-key"
CLOUDINARY_API_SECRET="your-api-secret"
NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET="your-upload-preset"
```

### 4. Initialize Database

```bash
# Generate Prisma client
npx prisma generate

# Run migrations
npx prisma migrate dev --name init

# Seed database with demo data
npm run prisma:seed
```

This creates:
- 5 meat types (Chicken, Beef, Pork, Lamb, Turkey)
- 10 demo recipes (2 per meat)
- 2 AI personalities (Mason & Connely)
- 5 achievement badges
- Demo user and admin user

### 5. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## 👤 Demo Accounts

After seeding, you can login with:

**Demo User:**
- Email: `demo@sausagelink.com`
- Password: `demo123`

**Admin User:**
- Email: `admin@sausagelink.com`
- Password: `admin123`

## 📁 Project Structure

```
sausage-link/
├── prisma/
│   ├── schema.prisma       # Database schema
│   └── seed.ts            # Seed data
├── src/
│   ├── app/               # Next.js app directory
│   │   ├── api/          # API routes
│   │   ├── page.tsx      # Home page
│   │   ├── layout.tsx    # Root layout
│   │   └── globals.css   # Global styles
│   ├── components/        # React components
│   │   └── Navigation.tsx
│   └── lib/              # Utilities
│       ├── auth.ts       # Authentication
│       ├── prisma.ts     # Database client
│       ├── openai.ts     # AI integration
│       └── utils.ts      # Helper functions
├── .env.example          # Environment template
├── package.json
└── README.md
```

## 🎯 Key Pages to Implement

The foundation is ready. Here are the main pages to add:

1. **Auth Pages** (`/login`, `/signup`)
2. **Learn Hub** (`/learn`, `/learn/[meat]`)
3. **Recipes** (`/recipes`, `/recipes/[id]`)
4. **AI Chef** (`/chef`)
5. **My Cookbook** (`/cookbook`)
6. **Community** (`/community`)
7. **Admin Dashboard** (`/admin`)

## 🔌 API Endpoints

### Authentication
- `POST /api/auth/signup` - Create account
- `POST /api/auth/login` - Login
- `POST /api/auth/logout` - Logout

### Recipes (to implement)
- `GET /api/recipes` - List recipes with filters
- `GET /api/recipes/[id]` - Get recipe details
- `POST /api/recipes` - Create recipe (authenticated)
- `POST /api/recipes/[id]/save` - Save to cookbook

### AI Chef (to implement)
- `POST /api/ai/chat` - Chat with AI chef
- `POST /api/ai/parse-recipe` - Upload recipe

### Community (to implement)
- `POST /api/comments` - Add comment
- `POST /api/uploads` - Upload image
- `GET /api/challenges` - Get monthly challenges

## 🎨 Design System

The app uses Tailwind CSS with a custom design system:

- **Primary Color**: Red (#ef4444)
- **Components**: Buttons, cards, inputs (see `globals.css`)
- **Typography**: Inter font
- **Layout**: Responsive, mobile-first

## 🤖 AI Personalities

Two default personalities are included:

**Mason**: Gelatinous, funny, encouraging
- Practical cooking tips
- Light sarcasm
- Safety-first approach

**Connely**: Hot & evil, playfully roasty
- Technically accurate
- Spicy attitude
- Fun personality with serious safety

## 🎮 Gamification

Users earn badges for:
- Cooking recipes (Chicken Master, etc.)
- Temperature accuracy (Temperature Pro)
- Community engagement (Community Helper)
- Uploads (Upload Champ)
- Safety quizzes (Safety Star)

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Add environment variables
5. Deploy!

### Environment Variables for Production

Make sure to set all the environment variables in Vercel dashboard:
- `DATABASE_URL` (use your hosted database)
- `JWT_SECRET` (generate secure key)
- `OPENAI_API_KEY`
- `CLOUDINARY_*` credentials
- `NEXT_PUBLIC_SITE_URL` (your domain)

## 📊 Database Management

```bash
# View database in Prisma Studio
npx prisma studio

# Create new migration
npx prisma migrate dev --name your_migration_name

# Reset database (⚠️ deletes all data)
npx prisma migrate reset

# Deploy migrations to production
npx prisma migrate deploy
```

## 🔒 Security Notes

1. **Change JWT_SECRET** in production
2. **Use HTTPS** in production
3. **Rate limit** API endpoints
4. **Validate** all user inputs
5. **Sanitize** user-generated content
6. **Implement** CSRF protection

## 🧪 Testing

```bash
# Run tests (when implemented)
npm test

# Type checking
npx tsc --noEmit

# Linting
npm run lint
```

## 📝 Next Steps

1. Complete remaining pages (Learn, Recipes detail, Chef, Community)
2. Add recipe search and filtering
3. Implement temperature widgets
4. Add voice guidance feature
5. Build admin dashboard
6. Add email notifications
7. Implement social features
8. Add recipe ratings
9. Mobile app (React Native)

## 🐛 Troubleshooting

**Database Connection Issues:**
```bash
# Check if PostgreSQL is running
psql --version

# Test connection
npx prisma db pull
```

**Build Errors:**
```bash
# Clear Next.js cache
rm -rf .next

# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

**Prisma Issues:**
```bash
# Regenerate Prisma client
npx prisma generate
```

## 📄 License

MIT License - feel free to use for your projects!

## 🤝 Contributing

1. Fork the repository
2. Create feature branch
3. Commit changes
4. Push to branch
5. Open pull request

## 📧 Support

For issues or questions:
- Open a GitHub issue
- Check documentation
- Review error logs

## 🎉 Credits

Built with:
- Next.js
- Prisma
- OpenAI
- Tailwind CSS
- Cloudinary

---

Happy Cooking! 🍖👨‍🍳
