'use client'

import { useEffect, useState } from 'react'
import { User } from '@/types'
import { Users, TrendingUp, Calendar, Bell } from 'lucide-react'

export default function ParentDashboard() {
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
    window.location.href = '/login/parent'
    return null
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-amber-100">
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
                <p className="text-gray-600">Parent Portal</p>
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
        {/* Children Overview */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Children</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Child Card - Sample Data */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  RS
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Rahul Sharma</h3>
                  <p className="text-sm text-gray-600">Grade 10-A</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-sm text-gray-600">Attendance</p>
                  <p className="text-2xl font-bold text-green-600">95%</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Performance</p>
                  <p className="text-2xl font-bold text-blue-600">85%</p>
                </div>
              </div>

              <button className="w-full bg-amber-500 text-white py-2 rounded-lg hover:bg-amber-600">
                View Details
              </button>
            </div>

            {/* Add more children cards here */}
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="stat-card">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium text-gray-600">Overall Attendance</h3>
              <Calendar className="w-5 h-5 text-green-500" />
            </div>
            <p className="text-3xl font-bold text-gray-900">95%</p>
            <p className="text-sm text-green-600 mt-2">↑ 2% from last month</p>
          </div>

          <div className="stat-card">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium text-gray-600">Average Performance</h3>
              <TrendingUp className="w-5 h-5 text-blue-500" />
            </div>
            <p className="text-3xl font-bold text-gray-900">85%</p>
            <p className="text-sm text-blue-600 mt-2">↑ 5% improvement</p>
          </div>

          <div className="stat-card">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium text-gray-600">Notifications</h3>
              <Bell className="w-5 h-5 text-amber-500" />
            </div>
            <p className="text-3xl font-bold text-gray-900">5</p>
            <p className="text-sm text-gray-600 mt-2">New updates</p>
          </div>
        </div>

        {/* Recent Updates */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Updates</h3>
          <div className="space-y-4">
            <div className="flex items-start space-x-4 py-3 border-b border-gray-100">
              <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
              <div className="flex-1">
                <p className="font-medium text-gray-900">Rahul attended all classes today</p>
                <p className="text-sm text-gray-600">Today, 2:30 PM</p>
              </div>
            </div>
            <div className="flex items-start space-x-4 py-3 border-b border-gray-100">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
              <div className="flex-1">
                <p className="font-medium text-gray-900">Mathematics test score: 92/100</p>
                <p className="text-sm text-gray-600">Yesterday</p>
              </div>
            </div>
            <div className="flex items-start space-x-4 py-3">
              <div className="w-2 h-2 bg-amber-500 rounded-full mt-2"></div>
              <div className="flex-1">
                <p className="font-medium text-gray-900">Parent-teacher meeting scheduled</p>
                <p className="text-sm text-gray-600">January 25, 2024</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}