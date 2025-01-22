# Campus Connect

<img src="public/logo.jpeg" width="150" height="150"/>

Campus Connect is a centralized platform designed to revolutionize event and club management in college campuses. The platform bridges the gap between event organizers and students by providing a seamless interface for event discovery, club management, and community engagement.

## 🌟 Features

### 1. Event Discovery & Management
- Centralized hub for all campus events and hackathons
- Detailed event listings with comprehensive information
- Easy-to-use interface for event discovery
- Real-time updates on upcoming events

### 2. Club Community
- Comprehensive club directory
- Detailed club profiles and information
- Club membership management
- Direct connection with club administrators

### 3. Achievement Showcase
- Dedicated section for event and hackathon winners
- Recognition of student achievements
- Showcase of club activities and accomplishments

### 4. Interactive Features
- Event feedback system
- Suggestion portal for new events
- User profiles for students
- Administrative dashboard for club managers

## 🚀 Getting Started

### Prerequisites
- Node.js
- npm or yarn
- Modern web browser

### Installation

1. Clone the repository
```bash
git clone https://github.com/amoghar29/CampusConnect-FE.git
cd CampusConnect-FE
```
2.Install dependencies
```
npm install
```
3.Set up environment variables
```
VITE_BACKEND_URL=your_backend_url
```
4.Start the development server
```
npm run dev
```
## 🛠️ Technical Stack

### Frontend
- **Framework:** React.js
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **HTTP Client:** Axios
- **Icons:** Lucide React
- **Routing:** React Router DOM

### Backend
- **Runtime:** Node.js
- **Database:** MongoDB
- **Storage Services:** Cloudinary/AWS

## 📱 Key Components

### User Features
- **Home Page:** Gateway to all features with quick access to events and clubs
- **Event Explorer:** Browse and search for campus events
- **Club Directory:** Discover and join campus clubs
- **Feedback System:** Share experiences and suggestions
- **Profile Section:** Manage personal information and preferences

### Administrative Features
- **Dashboard:** Comprehensive admin interface
- **Event Management:** Post and edit events
- **Club Management:** Register and manage clubs
- **Feedback Management:** View and address user feedback
- **Analytics:** Track engagement and participation

## 🔒 Security Features
- Hashed the passwords using bcrypt library before storing in the database
- Used JWT for authentication
- Protected routes for administrative functions
- Public routes for general access
- User authentication system



