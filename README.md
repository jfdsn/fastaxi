# FastTaxi 🚕

A modern taxi/ride-hailing application built with TypeScript, React, and Node.js.

## 🚀 Features

- Google Maps integration
- Modern and responsive user interface
- Type-safe development environment
- Containerized deployment

## 🛠️ Tech Stack

### Frontend
- React
- TypeScript
- Vite
- ESLint

### Backend
- Node.js
- TypeScript
- Sequelize
- Google Maps API

### Deployment
- Docker
- Docker Compose

## 📋 Prerequisites

- Node.js (v14 or higher)
- Docker and Docker Compose
- Google Maps API Key

## 🔧 Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/fastaxi.git
cd fastaxi
```

2. Create a `.env` file in the root directory and add your Google Maps API key:
```env
GOOGLE_API_KEY=your_google_maps_api_key
```

3. Start the application using Docker Compose:
```bash
docker-compose up
```

The application will be available at:
- Frontend: http://localhost:80
- Backend API: http://localhost:8080

## 🏗️ Project Structure

```
fastaxi/
├── frontend/           # React frontend application
│   ├── src/           # Source code
│   ├── public/        # Static assets
│   └── package.json   # Frontend dependencies
├── backend/           # Node.js backend application
│   ├── src/          # Source code
│   └── package.json  # Backend dependencies
├── docker-compose.yml # Docker Compose configuration
└── .env              # Environment variables
```

## 🚀 Development

### Running Locally

1. Install dependencies:
```bash
# Frontend
cd frontend
npm install

# Backend
cd backend
npm install
```

2. Start development servers:
```bash
# Frontend (in frontend directory)
npm run dev

# Backend (in backend directory)
npm run dev
```

### Building for Production

```bash
# Build and start all services
docker-compose up --build
```

## 📝 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| GOOGLE_API_KEY | Your Google Maps API key | Yes |


## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👥 Authors

- Jônathan Faria

## 🙏 Acknowledgments

- Google Maps Platform
- React Team
- Node.js Community 