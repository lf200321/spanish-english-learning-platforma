# Spanish/English Learning Platform

A professional video editing and learning platform built with React, Node.js, and Supabase. Create, edit, and monetize educational videos for Spanish and English learners of all ages.

## Features

- 📹 Professional video editing suite (trim, subtitles, overlays)
- 🌍 Multi-platform distribution (YouTube, TikTok, Instagram)
- 💰 Built-in monetization (ads, premium content, sponsorships)
- 👥 Community learning with duetting and comments
- 📊 Analytics dashboard for views and engagement
- 🎓 Content organization by level and topic
- ☁️ Cloud storage integration (Google Cloud Storage)
- 🔐 User authentication via Supabase

## Tech Stack

- **Frontend**: React + TypeScript
- **Backend**: Node.js + Express
- **Database**: Supabase (PostgreSQL)
- **Cloud Storage**: Google Cloud Storage
- **Video Processing**: FFmpeg (backend)
- **Authentication**: Supabase Auth

## Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn
- Supabase account
- Google Cloud Storage credentials

### Installation

1. Clone the repository
2. Install dependencies: `npm install`
3. Set up environment variables (see `.env.example`)
4. Start backend: `npm run dev:backend`
5. Start frontend: `npm run dev:frontend`

## Documentation

- [Setup Guide](./docs/SETUP.md)
- [Architecture](./docs/ARCHITECTURE.md)
- [API Documentation](./docs/API.md)
- [Video Editing Features](./docs/VIDEO_EDITING.md)
- [Monetization Guide](./docs/MONETIZATION.md)

## Project Structure

```
├── frontend/                 # React app
├── backend/                  # Node.js API
├── docs/                     # Documentation
├── .env.example              # Environment variables template
└── package.json              # Root dependencies
```

## License

MIT
