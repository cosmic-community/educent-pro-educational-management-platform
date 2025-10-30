'use client'

import { useEffect, useState } from 'react'
import { User } from '@/types'
import { Shield, Activity, Users, Award, Database, Settings } from 'lucide-react'

export default function AdminDashboard() {
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
    window.location.href = '/login/admin'
    return null
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-red-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b-2 border-red-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center">
                <Shield className="w-9 h-9 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">
                  System Administrator
                </h1>
                <p className="text-gray-600">@HVRS Control Panel</p>
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
        {/* System Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="stat-card bg-gradient-to-br from-red-500 to-red-600 text-white">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium">System Status</h3>
              <Activity className="w-5 h-5" />
            </div>
            <p className="text-3xl font-bold mb-2">Online</p>
            <p className="text-sm opacity-90">All systems operational</p>
          </div>

          <div className="stat-card">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium text-gray-600">Total Users</h3>
              <Users className="w-5 h-5 text-blue-500" />
            </div>
            <p className="text-3xl font-bold text-gray-900">1,247</p>
            <p className="text-sm text-gray-600">Across all roles</p>
          </div>

          <div className="stat-card">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium text-gray-600">Pending Approvals</h3>
              <Award className="w-5 h-5 text-amber-500" />
            </div>
            <p className="text-3xl font-bold text-gray-900">8</p>
            <p className="text-sm text-amber-600">Reward requests</p>
          </div>

          <div className="stat-card">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium text-gray-600">Data Storage</h3>
              <Database className="w-5 h-5 text-green-500" />
            </div>
            <p className="text-3xl font-bold text-gray-900">2.4 GB</p>
            <p className="text-sm text-gray-600">78% capacity</p>
          </div>
        </div>

        {/* Live Activity Feed */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
            <Activity className="w-5 h-5 mr-2 text-red-500" />
            Live System Activity
          </h3>
          <div className="space-y-3 max-h-96 overflow-y-auto">
            <div className="flex items-start space-x-4 py-3 border-b border-gray-100">
              <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">
                  <span className="text-blue-600">Lecturer</span> marked attendance for Grade 10-A
                </p>
                <p className="text-xs text-gray-600">Just now • Prof. Michael Chen</p>
              </div>
            </div>
            <div className="flex items-start space-x-4 py-3 border-b border-gray-100">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">
                  <span className="text-purple-600">Principal</span> approved reward request
                </p>
                <p className="text-xs text-gray-600">2 minutes ago • Dr. Sarah Johnson</p>
              </div>
            </div>
            <div className="flex items-start space-x-4 py-3 border-b border-gray-100">
              <div className="w-2 h-2 bg-amber-500 rounded-full mt-2"></div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">
                  <span className="text-green-600">Student</span> requested reward withdrawal
                </p>
                <p className="text-xs text-gray-600">5 minutes ago • Priya Patel</p>
              </div>
            </div>
          </div>
        </div>

        {/* Admin Controls */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer">
            <Award className="w-10 h-10 text-red-500 mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Reward Approvals</h3>
            <p className="text-sm text-gray-600 mb-4">Final approval authority</p>
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold text-red-600">8</span>
              <button className="bg-red-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-red-600">
                Review All
              </button>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer">
            <Users className="w-10 h-10 text-blue-500 mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">User Management</h3>
            <p className="text-sm text-gray-600 mb-4">Create, modify, delete accounts</p>
            <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
              Manage Users
            </button>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer">
            <Settings className="w-10 h-10 text-purple-500 mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">System Settings</h3>
            <p className="text-sm text-gray-600 mb-4">Configure platform parameters</p>
            <button className="w-full bg-purple-500 text-white py-2 rounded-lg hover:bg-purple-600">
              Configure
            </button>
          </div>
        </div>

        {/* System Health Monitoring */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">System Health</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <p className="text-sm text-gray-600 mb-2">API Response Time</p>
              <p className="text-2xl font-bold text-green-600">45ms</p>
              <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                <div className="bg-green-500 h-2 rounded-full" style={{ width: '92%' }}></div>
              </div>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-2">Database Performance</p>
              <p className="text-2xl font-bold text-blue-600">98%</p>
              <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                <div className="bg-blue-500 h-2 rounded-full" style={{ width: '98%' }}></div>
              </div>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-2">Server Uptime</p>
              <p className="text-2xl font-bold text-purple-600">99.9%</p>
              <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                <div className="bg-purple-500 h-2 rounded-full" style={{ width: '99.9%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}