// Base Cosmic object interface
export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, any>;
  type: string;
  created_at: string;
  modified_at: string;
}

// User roles
export type UserRole = 'Student' | 'Lecturer' | 'Parent' | 'Principal' | 'Admin';

// User interface
export interface User extends CosmicObject {
  type: 'users';
  metadata: {
    full_name: string;
    role: {
      key: string;
      value: UserRole;
    };
    username: string;
    date_of_birth: string;
    password?: string;
    user_id: string;
    profile_picture?: {
      url: string;
      imgix_url: string;
    };
    institution?: Institution | string;
    class?: Class | string;
    children?: User[];
    subjects_teaching?: Subject[];
    contact_email?: string;
    contact_phone?: string;
    upi_id?: string;
    current_streak?: number;
    active: boolean;
  };
}

// Institution interface
export interface Institution extends CosmicObject {
  type: 'institutions';
  metadata: {
    institution_name: string;
    institution_logo?: {
      url: string;
      imgix_url: string;
    };
    address?: string;
    principal?: User | string;
    contact_email?: string;
    contact_phone?: string;
    established_year?: number;
    active: boolean;
  };
}

// Class interface
export interface Class extends CosmicObject {
  type: 'classes';
  metadata: {
    class_name: string;
    institution: Institution | string;
    class_teacher?: User | string;
    academic_year?: string;
    section?: string;
    active: boolean;
  };
}

// Subject interface
export interface Subject extends CosmicObject {
  type: 'subjects';
  metadata: {
    subject_name: string;
    subject_code?: string;
    class: Class | string;
    lecturer?: User | string;
    subject_color?: string;
    subject_icon?: string;
    total_chapters?: number;
    active: boolean;
  };
}

// Attendance status types
export type AttendanceStatus = 'Present' | 'Absent' | 'Late' | 'Excused';

// Attendance record interface
export interface AttendanceRecord extends CosmicObject {
  type: 'attendance-records';
  metadata: {
    student: User | string;
    class: Class | string;
    date: string;
    status: {
      key: string;
      value: AttendanceStatus;
    };
    marked_by?: User | string;
    notes?: string;
  };
}

// Reward approval status types
export type RewardApprovalStatus = 
  | 'Pending Lecturer Verification'
  | 'Pending Principal Review'
  | 'Pending Admin Approval'
  | 'Approved'
  | 'Rejected';

// Reward interface
export interface Reward extends CosmicObject {
  type: 'rewards';
  metadata: {
    student: User | string;
    streak_days: number;
    reward_amount: number;
    upi_id: string;
    request_date: string;
    approval_status: {
      key: string;
      value: RewardApprovalStatus;
    };
    verified_by_lecturer?: User | string;
    reviewed_by_principal?: User | string;
    approved_by_admin?: User | string;
    transaction_date?: string;
    notes?: string;
  };
}

// Assignment type
export type AssignmentType = 'Homework' | 'Test' | 'Exam' | 'Project';

// Assignment interface
export interface Assignment extends CosmicObject {
  type: 'assignments';
  metadata: {
    assignment_title: string;
    subject: Subject | string;
    class: Class | string;
    created_by: User | string;
    assignment_type: {
      key: string;
      value: AssignmentType;
    };
    question_paper?: {
      url: string;
      imgix_url: string;
    };
    answer_key?: {
      url: string;
      imgix_url: string;
    };
    due_date?: string;
    total_marks?: number;
    instructions?: string;
  };
}

// Syllabus item interface
export interface SyllabusItem extends CosmicObject {
  type: 'syllabus-items';
  metadata: {
    chapter_title: string;
    chapter_number: number;
    subject: Subject | string;
    description?: string;
    learning_objectives?: string;
    estimated_hours?: number;
    active: boolean;
  };
}

// Doubt interface
export interface Doubt extends CosmicObject {
  type: 'doubts';
  metadata: {
    student: User | string;
    subject: Subject | string;
    question: string;
    ai_response?: string;
    asked_date: string;
    clarity_score?: number;
    resolved: boolean;
    tags?: string;
  };
}

// Announcement priority types
export type AnnouncementPriority = 'Low' | 'Medium' | 'High' | 'Urgent';

// Announcement interface
export interface Announcement extends CosmicObject {
  type: 'announcements';
  metadata: {
    announcement_title: string;
    message: string;
    target_panels: string[];
    priority: {
      key: string;
      value: AnnouncementPriority;
    };
    posted_by: User | string;
    institution?: Institution | string;
    posted_date: string;
    expiry_date?: string;
    active: boolean;
  };
}

// API response types
export interface CosmicResponse<T> {
  objects: T[];
  total: number;
  limit?: number;
  skip?: number;
}

// Authentication types
export interface LoginCredentials {
  username: string;
  dateOfBirth: string;
  password?: string;
}

export interface AuthSession {
  user: User;
  role: UserRole;
  expiresAt: number;
}

// Panel card interface
export interface PanelCard {
  title: string;
  description: string;
  icon: string;
  route: string;
  color: string;
  role: UserRole;
}

// System event interface
export interface SystemEvent {
  id: string;
  panel: 'student' | 'lecturer' | 'parent' | 'principal' | 'admin';
  action: string;
  data: any;
  timestamp: Date;
  userId: string;
  ipAddress?: string;
}

// Analytics interfaces
export interface DoubtAnalytics {
  trendingTopics: string[];
  strugglingStudents: string[];
  clarityGaps: string[];
  interventionSuggestions: string[];
}

export interface InstitutionalData {
  overallPerformance: number;
  attendanceRate: number;
  facultyEffectiveness: number;
  resourceUtilization: number;
  complianceStatus: number;
}

export interface ChildProfile {
  id: string;
  name: string;
  class: string;
  performance: number;
  attendance: number;
  recentActivity: any[];
}