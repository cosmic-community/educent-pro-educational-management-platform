'use client'

import { useState } from 'react'
import Link from 'next/link'
import { GraduationCap, Users, BookOpen, Building2, Shield } from 'lucide-react'
import { PanelCard } from '@/types'

export default function LandingPage() {
  const [showAdminAccess, setShowAdminAccess] = useState(false)

  const panelCards: PanelCard[] = [
    {
      title: 'Student Panel',
      description: 'Access your dashboard, AI study buddy, attendance tracking, and reward system',
      icon: 'student',
      route: '/login/student',
      color: 'bg-gradient-to-br from-blue-500 to-blue-600',
      role: 'Student',
    },
    {
      title: 'Lecturer Panel',
      description: 'Manage attendance, grades, assignments, and access AI-powered analytics',
      icon: 'lecturer',
      route: '/login/lecturer',
      color: 'bg-gradient-to-br from-green-500 to-green-600',
      role: 'Lecturer',
    },
    {
      title: 'Parent Panel',
      description: 'Monitor your children\'s progress, attendance, and academic performance',
      icon: 'parent',
      route: '/login/parent',
      color: 'bg-gradient-to-br from-amber-500 to-amber-600',
      role: 'Parent',
    },
    {
      title: 'Principal Panel',
      description: 'Oversee institutional operations, staff management, and analytics',
      icon: 'principal',
      route: '/login/principal',
      color: 'bg-gradient-to-br from-purple-500 to-purple-600',
      role: 'Principal',
    },
  ]

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'student':
        return <GraduationCap className="w-12 h-12" />
      case 'lecturer':
        return <Users className="w-12 h-12" />
      case 'parent':
        return <BookOpen className="w-12 h-12" />
      case 'principal':
        return <Building2 className="w-12 h-12" />
      default:
        return <GraduationCap className="w-12 h-12" />
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
                <GraduationCap className="w-7 h-7 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Educent Pro</h1>
                <p className="text-sm text-gray-600">Educational Management Platform</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Welcome to <span className="text-gradient">Educent Pro</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive educational management system with real-time synchronization,
            AI-powered features, and role-based access for students, teachers, parents, and administrators.
          </p>
        </div>

        {/* Panel Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {panelCards.map((card, index) => (
            <Link href={card.route} key={card.title}>
              <div
                className={`${card.color} text-white panel-card animate-slide-up`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="bg-white/20 rounded-lg p-3">
                    {getIcon(card.icon)}
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-2">{card.title}</h3>
                <p className="text-white/90">{card.description}</p>
                <div className="mt-6 flex items-center text-sm font-medium">
                  <span>Access Panel</span>
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Features Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12 animate-fade-in">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Platform Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Real-Time Sync</h4>
              <p className="text-gray-600 text-sm">All actions reflect instantly across all panels</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">AI-Powered</h4>
              <p className="text-gray-600 text-sm">Smart study buddy and automated analytics</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Secure Access</h4>
              <p className="text-gray-600 text-sm">Role-based authentication and permissions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Hidden Admin Access */}
      <div className="fixed bottom-4 right-4">
        <button
          onClick={() => setShowAdminAccess(!showAdminAccess)}
          className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          title="Admin Access"
        >
          @
        </button>
        
        {showAdminAccess && (
          <Link href="/login/admin">
            <div className="absolute bottom-16 right-0 bg-white rounded-lg shadow-xl p-4 animate-fade-in">
              <div className="flex items-center space-x-3">
                <Shield className="w-6 h-6 text-red-600" />
                <div>
                  <p className="font-semibold text-gray-900">Admin Panel</p>
                  <p className="text-xs text-gray-600">HVRS Access</p>
                </div>
              </div>
            </div>
          </Link>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-gray-600">
            <p className="text-sm">
              © 2025 Educent Pro. All rights reserved.
            </p>
            <p className="text-xs mt-2">
              Powered by Cosmic CMS
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}