# Educent Pro - Educational Management Platform

![App Preview](https://imgix.cosmicjs.com/e9f68160-a044-11ed-81f2-f50e185dd248-ueBmz9K8zTg.jpg?w=1200&h=300&fit=crop&auto=format,compress)

A comprehensive multi-panel educational management system with real-time synchronization, AI-powered features, and hierarchical role-based access control.

## Features

- **Multi-Role Panel System**: Dedicated interfaces for Students, Lecturers, Parents, Principals, and Admin
- **Real-Time Synchronization**: All actions reflect instantly across related panels
- **AI Study Buddy**: Intelligent doubt resolution with clarity scoring
- **Reward Management**: Three-tier approval workflow for student attendance rewards
- **Smart Attendance**: QR code-based attendance with streak tracking
- **Comprehensive Analytics**: Role-specific dashboards with live metrics
- **Assignment Management**: AI-powered grading and question paper generation
- **Announcement System**: Targeted multi-panel communication
- **Syllabus Tracking**: Visual progress monitoring with chapter completion
- **Parent Portal**: Multi-child management with real-time updates

## Clone this Project

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=6902c1de271316ad9f4ccd61&clone_repository=6903652f271316ad9f4cd65c)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Educent Pro - Complete Implementation Plan
🎯 Core Architecture
User Hierarchy & Control Flow
text
MAIN ADMIN → PRINCIPAL → LECTURER → STUDENT/PARENT
Data Flow System
All actions in any panel reflect in real-time across related panels
Main admin sees ALL activities across entire platform
Reward approvals ONLY by main admin
No payment processing - only approval workflows
🌐 Landing Page Design
Main Features
Clean, modern educational theme
Four main panel cards: Student, Lecturer, Parent, Principal
Hidden admin access via @HVRS logo at bottom
Responsive design with smooth animations
🔐 Authentication System
Student Panel Login: Username + Date of Birth (no password)
Lecturer Panel Login: Lecturer ID + Date of Birth
Parent Panel Login: Parent ID + Date of Birth
Principal Panel Login: Principal ID + Secure verification
Admin Panel Login (Hidden): Username: HARSHA9949, Password: HARSHA9949
📊 Real-Time Data Synchronization
All actions in any panel reflect in real-time across related panels
🎓 STUDENT PANEL - Dashboard Intelligence, AI Study Buddy, Reward System, Syllabus Tracker
👨‍🏫 LECTURER PANEL - Attendance Management, AI Analytics Dashboard, Evaluation System, Question Paper Generator
👨‍👩‍👧‍👦 PARENT PANEL - Multi-Child Management, Real-Time Monitoring, Academic Oversight
🏫 PRINCIPAL PANEL - Faculty & Student Control, Institutional Analytics, Reward Workflow Management
🔧 MAIN ADMIN PANEL - Universal Activity Monitor, Reward Approval Authority, System-Wide Controls
🔄 Real-Time Integration System with Event Propagation
🛡️ Security & Compliance with Access Control Matrix
make hide the badge of BUILT WITH COSMIC"

### Code Generation Prompt

> "Based on the content model I created for Educent Pro, now build a complete web application that showcases this content. Include a modern, responsive design with proper navigation, content display, and user-friendly interface."

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies Used

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **CMS**: Cosmic
- **AI Integration**: Google Gemini API (for study buddy and analytics)
- **Real-Time**: WebSocket support for live updates
- **Authentication**: Role-based access control
- **UI Components**: Custom React components with animations

## Getting Started

### Prerequisites

- Node.js 18+ installed
- Bun package manager
- Cosmic account with API keys
- Google Gemini API key (optional, for AI features)

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd educent-pro
```

2. Install dependencies:
```bash
bun install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

4. Add your Cosmic credentials to `.env.local`:
```
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
COSMIC_WRITE_KEY=your-write-key
GEMINI_API_KEY=your-gemini-api-key
```

5. Run the development server:
```bash
bun run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser

## Cosmic SDK Examples

### Fetching Students by Class
```typescript
import { cosmic } from '@/lib/cosmic'

const students = await cosmic.objects
  .find({
    type: 'users',
    'metadata.role.value': 'Student',
    'metadata.class': classId
  })
  .props(['id', 'title', 'metadata'])
  .depth(1)
```

### Creating Attendance Record
```typescript
await cosmic.objects.insertOne({
  type: 'attendance-records',
  title: `${studentName} - ${date}`,
  metadata: {
    student: studentId,
    class: classId,
    date: date,
    status: { key: 'present', value: 'Present' },
    marked_by: lecturerId
  }
})
```

### Updating Reward Status
```typescript
await cosmic.objects.updateOne(rewardId, {
  metadata: {
    approval_status: { 
      key: 'approved', 
      value: 'Approved' 
    },
    approved_by_admin: adminId,
    transaction_date: new Date().toISOString()
  }
})
```

## Cosmic CMS Integration

The application uses Cosmic as a headless CMS with the following content model:

- **Users**: Students, Lecturers, Parents, Principals, Admin (with role-based metadata)
- **Institutions**: School/organization information
- **Classes**: Academic class organization
- **Subjects**: Subject details with teacher assignments
- **Attendance Records**: Daily attendance tracking
- **Rewards**: Student reward requests and approvals
- **Assignments**: Tests, homework, and projects
- **Syllabus Items**: Chapter-wise curriculum tracking
- **Doubts**: Student questions with AI responses
- **Announcements**: Multi-panel communications

All content is managed through Cosmic's dashboard and accessed via the SDK with depth queries for related objects.

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the project in Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

### Environment Variables for Production

Set these in your hosting platform:
- `COSMIC_BUCKET_SLUG`
- `COSMIC_READ_KEY`
- `COSMIC_WRITE_KEY`
- `GEMINI_API_KEY` (optional)

## Project Structure

```
educent-pro/
├── app/
│   ├── (panels)/
│   │   ├── student/         # Student panel routes
│   │   ├── lecturer/        # Lecturer panel routes
│   │   ├── parent/          # Parent panel routes
│   │   ├── principal/       # Principal panel routes
│   │   └── admin/           # Admin panel routes
│   ├── api/                 # API routes
│   ├── login/               # Authentication pages
│   └── layout.tsx           # Root layout
├── components/
│   ├── panels/              # Panel-specific components
│   ├── auth/                # Authentication components
│   └── shared/              # Shared UI components
├── lib/
│   ├── cosmic.ts            # Cosmic SDK configuration
│   ├── auth.ts              # Authentication utilities
│   └── gemini.ts            # AI integration
└── types.ts                 # TypeScript type definitions
```

## Key Features Implementation

### Authentication Flow
- Role-based login using username + date of birth
- Session management with secure tokens
- Hidden admin access via @HVRS logo

### Real-Time Updates
- WebSocket connections for live data sync
- Cross-panel event propagation
- Instant notifications

### AI Integration
- Study buddy for student doubts
- Automated grading system
- Analytics and insights generation

### Reward System
- Three-tier approval workflow
- UPI ID validation
- Streak tracking and calculations

## License

MIT

<!-- README_END -->