'use client'

import { useEffect, useState } from 'react'
import { User } from '@/types'
import { Building2, Users, TrendingUp, Award, AlertCircle, BarChart } from 'lucide-react'

export default function PrincipalDashboard() {
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
    window.location.href = '/login/principal'
    return null
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-purple-100">
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
                <p className="text-gray-600">Principal - Sunshine High School</p>
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
        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="stat-card">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium text-gray-600">Total Students</h3>
              <Users className="w-5 h-5 text-purple-500" />
            </div>
            <p className="text-3xl font-bold text-gray-900">842</p>
            <p className="text-sm text-green-600 mt-2">↑ 12 new this month</p>
          </div>

          <div className="stat-card">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium text-gray-600">Faculty Members</h3>
              <Building2 className="w-5 h-5 text-blue-500" />
            </div>
            <p className="text-3xl font-bold text-gray-900">45</p>
            <p className="text-sm text-gray-600 mt-2">35 full-time, 10 part-time</p>
          </div>

          <div className="stat-card">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium text-gray-600">Overall Attendance</h3>
              <TrendingUp className="w-5 h-5 text-green-500" />
            </div>
            <p className="text-3xl font-bold text-gray-900">94%</p>
            <p className="text-sm text-green-600 mt-2">↑ 2% from last month</p>
          </div>

          <div className="stat-card">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium text-gray-600">Pending Approvals</h3>
              <AlertCircle className="w-5 h-5 text-amber-500" />
            </div>
            <p className="text-3xl font-bold text-gray-900">15</p>
            <p className="text-sm text-amber-600 mt-2">Requires attention</p>
          </div>
        </div>

        {/* Institutional Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Performance Analytics</h3>
            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600">Academic Excellence</span>
                  <span className="text-sm font-medium text-gray-900">88%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: '88%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600">Faculty Effectiveness</span>
                  <span className="text-sm font-medium text-gray-900">92%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{ width: '92%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600">Resource Utilization</span>
                  <span className="text-sm font-medium text-gray-900">76%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-purple-500 h-2 rounded-full" style={{ width: '76%' }}></div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Reward Approvals</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between py-3 border-b border-gray-100">
                <div>
                  <p className="font-medium text-gray-900">Priya Patel - 62 days</p>
                  <p className="text-sm text-gray-600">Grade 10-A, ₹500</p>
                </div>
                <button className="bg-purple-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-purple-600">
                  Review
                </button>
              </div>
              <div className="flex items-center justify-between py-3 border-b border-gray-100">
                <div>
                  <p className="font-medium text-gray-900">Amit Kumar - 60 days</p>
                  <p className="text-sm text-gray-600">Grade 9-B, ₹500</p>
                </div>
                <button className="bg-purple-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-purple-600">
                  Review
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer">
            <Users className="w-10 h-10 text-purple-500 mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Staff Management</h3>
            <p className="text-sm text-gray-600 mb-4">Onboard, manage, evaluate faculty</p>
            <button className="w-full bg-purple-500 text-white py-2 rounded-lg hover:bg-purple-600">
              Manage Staff
            </button>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer">
            <BarChart className="w-10 h-10 text-blue-500 mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Analytics Dashboard</h3>
            <p className="text-sm text-gray-600 mb-4">Institutional insights & reports</p>
            <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
              View Analytics
            </button>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer">
            <Award className="w-10 h-10 text-green-500 mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Announcements</h3>
            <p className="text-sm text-gray-600 mb-4">Communicate with all stakeholders</p>
            <button className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600">
              Create Announcement
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}