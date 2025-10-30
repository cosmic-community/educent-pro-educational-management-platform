'use client'

import { useEffect, useState } from 'react'
import { User } from '@/types'
import { Users, ClipboardCheck, BarChart3, FileText, Award } from 'lucide-react'

export default function LecturerDashboard() {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const sessionData = localStorage.getItem('session')
    if (sessionData) {
      const session = JSON.parse(sessionData)
      setUser(session.user)
    }
    setLoading(false)
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="spinner"></div>
      </div>
    )
  }

  if (!user) {
    window.location.href = '/login/lecturer'
    return null
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              {user.metadata.profile_picture && (
                <img
                  src={`${user.metadata.profile_picture.imgix_url}?w=128&h=128&fit=crop&auto=format,compress`}
                  alt={user.metadata.full_name}
                  className="w-16 h-16 rounded-full"
                />
              )}
              <div>
                <h1 className="text-2xl font-bold text-gray-900">
                  {user.metadata.full_name}
                </h1>
                <p className="text-gray-600">Lecturer ID: {user.metadata.user_id}</p>
              </div>
            </div>
            <button
              onClick={() => {
                localStorage.removeItem('session')
                window.location.href = '/'
              }}
              className="text-sm text-gray-600 hover:text-gray-900"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="stat-card">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium text-gray-600">Total Students</h3>
              <Users className="w-5 h-5 text-green-500" />
            </div>
            <p className="text-3xl font-bold text-gray-900">42</p>
          </div>

          <div className="stat-card">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium text-gray-600">Today's Attendance</h3>
              <ClipboardCheck className="w-5 h-5 text-blue-500" />
            </div>
            <p className="text-3xl font-bold text-gray-900">95%</p>
          </div>

          <div className="stat-card">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium text-gray-600">Pending Reviews</h3>
              <FileText className="w-5 h-5 text-amber-500" />
            </div>
            <p className="text-3xl font-bold text-gray-900">8</p>
          </div>

          <div className="stat-card">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium text-gray-600">Reward Requests</h3>
              <Award className="w-5 h-5 text-purple-500" />
            </div>
            <p className="text-3xl font-bold text-gray-900">3</p>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer">
            <ClipboardCheck className="w-10 h-10 text-green-500 mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Mark Attendance</h3>
            <p className="text-sm text-gray-600 mb-4">QR code or manual entry</p>
            <button className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600">
              Start Marking
            </button>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer">
            <BarChart3 className="w-10 h-10 text-blue-500 mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">AI Analytics</h3>
            <p className="text-sm text-gray-600 mb-4">Student insights & trends</p>
            <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
              View Dashboard
            </button>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer">
            <FileText className="w-10 h-10 text-purple-500 mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Create Assignment</h3>
            <p className="text-sm text-gray-600 mb-4">Tests, homework, projects</p>
            <button className="w-full bg-purple-500 text-white py-2 rounded-lg hover:bg-purple-600">
              Create New
            </button>
          </div>
        </div>

        {/* Recent Activities */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activities</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between py-3 border-b border-gray-100">
              <div>
                <p className="font-medium text-gray-900">Grade 10-A attendance marked</p>
                <p className="text-sm text-gray-600">Today, 9:30 AM</p>
              </div>
              <span className="badge badge-success">Completed</span>
            </div>
            <div className="flex items-center justify-between py-3 border-b border-gray-100">
              <div>
                <p className="font-medium text-gray-900">Mathematics test graded</p>
                <p className="text-sm text-gray-600">Yesterday, 4:15 PM</p>
              </div>
              <span className="badge badge-info">Graded</span>
            </div>
            <div className="flex items-center justify-between py-3">
              <div>
                <p className="font-medium text-gray-900">Reward request verified</p>
                <p className="text-sm text-gray-600">2 days ago</p>
              </div>
              <span className="badge badge-success">Verified</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}