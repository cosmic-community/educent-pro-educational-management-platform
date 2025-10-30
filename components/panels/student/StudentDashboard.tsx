'use client'

import { useEffect, useState } from 'react'
import { User } from '@/types'
import { GraduationCap, Flame, Award, BookOpen, MessageCircle, Target } from 'lucide-react'

export default function StudentDashboard() {
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
    window.location.href = '/login/student'
    return null
  }

  const currentStreak = user.metadata.current_streak || 0
  const isStreakActive = currentStreak >= 60

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
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
                  Welcome, {user.metadata.full_name}!
                </h1>
                <p className="text-gray-600">Student ID: {user.metadata.user_id}</p>
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Streak Card */}
          <div className="stat-card bg-gradient-to-br from-orange-400 to-orange-500 text-white">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Attendance Streak</h3>
              <Flame className={`w-8 h-8 ${isStreakActive ? 'fire-animation' : ''}`} />
            </div>
            <p className="text-4xl font-bold mb-2">{currentStreak} days</p>
            <div className="flex items-center text-sm">
              {isStreakActive ? (
                <>
                  <Award className="w-4 h-4 mr-2" />
                  Eligible for reward!
                </>
              ) : (
                `${60 - currentStreak} days to reward`
              )}
            </div>
          </div>

          {/* Performance Card */}
          <div className="stat-card">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Performance</h3>
              <Target className="w-8 h-8 text-green-500" />
            </div>
            <p className="text-4xl font-bold text-gray-900 mb-2">85%</p>
            <p className="text-sm text-gray-600">Average score</p>
          </div>

          {/* Syllabus Progress */}
          <div className="stat-card">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Syllabus</h3>
              <BookOpen className="w-8 h-8 text-blue-500" />
            </div>
            <p className="text-4xl font-bold text-gray-900 mb-2">68%</p>
            <p className="text-sm text-gray-600">Completed</p>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* AI Study Buddy */}
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer">
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <MessageCircle className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">AI Study Buddy</h3>
                <p className="text-sm text-gray-600">Ask questions, get instant help</p>
              </div>
            </div>
            <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors">
              Start Chatting
            </button>
          </div>

          {/* Reward Request */}
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer">
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <Award className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Request Reward</h3>
                <p className="text-sm text-gray-600">
                  {isStreakActive ? '60 day streak achieved!' : 'Complete 60 day streak'}
                </p>
              </div>
            </div>
            <button
              disabled={!isStreakActive}
              className={`w-full py-2 rounded-lg transition-colors ${
                isStreakActive
                  ? 'bg-green-500 text-white hover:bg-green-600'
                  : 'bg-gray-200 text-gray-500 cursor-not-allowed'
              }`}
            >
              {isStreakActive ? 'Submit Request' : 'Not Eligible Yet'}
            </button>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="mt-8 bg-white rounded-xl shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between py-3 border-b border-gray-100">
              <div>
                <p className="font-medium text-gray-900">Mathematics - Chapter 5 completed</p>
                <p className="text-sm text-gray-600">2 hours ago</p>
              </div>
              <span className="badge badge-success">Completed</span>
            </div>
            <div className="flex items-center justify-between py-3 border-b border-gray-100">
              <div>
                <p className="font-medium text-gray-900">Physics Assignment submitted</p>
                <p className="text-sm text-gray-600">Yesterday</p>
              </div>
              <span className="badge badge-info">Submitted</span>
            </div>
            <div className="flex items-center justify-between py-3">
              <div>
                <p className="font-medium text-gray-900">Attended all classes</p>
                <p className="text-sm text-gray-600">3 days ago</p>
              </div>
              <span className="badge badge-success">Present</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}