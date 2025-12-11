# Stylora - Complete Salon Management SaaS Platform

A comprehensive salon management system built with React, Express, tRPC, and MySQL.

## Features

- 📅 **Appointment Booking System** - Online booking 24/7
- 💰 **Payment Processing** - Stripe, Vipps, MobilePay integration
- 👥 **Customer Management** - CRM and customer portal
- 📊 **Analytics & Reports** - Advanced financial reporting
- 💼 **Employee Management** - Time tracking, commissions
- 📦 **Inventory Management** - Stock tracking and alerts
- 🔔 **Notifications** - SMS and email notifications
- 🧾 **Accounting Integration** - Tripletex, Fiken, Visma, DNB, Sparebank1
- 🎨 **Customizable Branding** - White-label solution

## Tech Stack

- **Frontend**: React 18, TypeScript, TailwindCSS
- **Backend**: Express, tRPC
- **Database**: MySQL with Drizzle ORM
- **Payments**: Stripe, Vipps, MobilePay
- **Deployment**: Vercel + Railway

## Getting Started

### Prerequisites

- Node.js 18+
- MySQL database

### Installation

```bash
# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Edit .env with your database credentials

# Run development server
npm run dev
```

### Build for Production

```bash
npm run build
```

### Environment Variables

```
DATABASE_URL=mysql://user:password@host:port/database
STRIPE_SECRET_KEY=sk_...
VIPPS_CLIENT_ID=...
VIPPS_CLIENT_SECRET=...
```

## Project Structure

```
stylora-new/
├── client/          # React frontend
│   ├── src/         # Source files
│   └── index.html   # Entry HTML
├── server/          # Express backend
│   ├── index.ts     # Server entry point
│   ├── routers.ts   # tRPC routers
│   └── schema.ts    # Database schema
├── dist/            # Build output
└── package.json
```

## Deployment

This project is configured for deployment on Vercel with Railway MySQL database.

## License

Proprietary - All rights reserved
