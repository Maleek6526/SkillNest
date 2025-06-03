import React, { useState, useEffect } from 'react';
import { 
  Users, 
  Calendar, 
  Video, 
  Briefcase, 
  TrendingUp, 
  Bell, 
  Search,
  Menu,
  X,
  Play,
  Phone,
  MessageSquare,
  Clock,
  MapPin,
  Star,
  ChevronRight,
  Settings,
  LogOut,
  User,
  Award,
  DollarSign,
  Activity
} from 'lucide-react';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isVideoCallActive, setIsVideoCallActive] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const stats = [
    { title: 'Active Jobs', value: '1,247', change: '+12%', icon: Briefcase, color: 'bg-purple-500' },
    { title: 'Candidates', value: '3,892', change: '+8%', icon: Users, color: 'bg-indigo-500' },
    { title: 'Interviews Today', value: '24', change: '+3%', icon: Video, color: 'bg-pink-500' },
    { title: 'Placements', value: '456', change: '+15%', icon: Award, color: 'bg-violet-500' }
  ];

  const upcomingInterviews = [
    {
      id: 1,
      candidate: 'John Mitchell',
      position: 'Senior Electrician',
      time: '10:30 AM',
      avatar: '👨‍🔧',
      status: 'confirmed'
    },
    {
      id: 2,
      candidate: 'Sarah Johnson',
      position: 'Plumbing Supervisor',
      time: '2:15 PM',
      avatar: '👩‍🔧',
      status: 'pending'
    },
    {
      id: 3,
      candidate: 'Mike Rodriguez',
      position: 'Construction Foreman',
      time: '4:00 PM',
      avatar: '👨‍🏭',
      status: 'confirmed'
    }
  ];

  const recentActivities = [
    { action: 'New candidate applied for Welder position', time: '5 min ago', type: 'application' },
    { action: 'Interview completed with Alex Thompson', time: '1 hour ago', type: 'interview' },
    { action: 'Job posting for Carpenter published', time: '2 hours ago', type: 'job' },
    { action: 'Contract signed with BuildCorp Inc.', time: '4 hours ago', type: 'contract' }
  ];

  const sidebarItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Activity },
    { id: 'jobs', label: 'Job Listings', icon: Briefcase },
    { id: 'candidates', label: 'Candidates', icon: Users },
    { id: 'interviews', label: 'Interviews', icon: Video },
    { id: 'calendar', label: 'Calendar', icon: Calendar },
    { id: 'analytics', label: 'Analytics', icon: TrendingUp }
  ];

  const VideoCallInterface = () => (
    <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
      <div className="bg-gray-900 rounded-2xl p-6 w-full max-w-4xl mx-4 relative">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-white text-xl font-semibold">Interview with John Mitchell</h3>
          <button 
            onClick={() => setIsVideoCallActive(false)}
            className="text-white hover:text-red-400 transition-colors"
          >
            <X size={24} />
          </button>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
          <div className="bg-gray-800 rounded-xl aspect-video flex items-center justify-center">
            <div className="text-center text-white">
              <div className="text-6xl mb-4">👨‍🔧</div>
              <p className="text-lg">John Mitchell</p>
              <p className="text-sm text-gray-400">Senior Electrician Candidate</p>
            </div>
          </div>
          <div className="bg-gray-800 rounded-xl aspect-video flex items-center justify-center">
            <div className="text-center text-white">
              <div className="text-6xl mb-4">👨‍💼</div>
              <p className="text-lg">You</p>
              <p className="text-sm text-gray-400">Interviewer</p>
            </div>
          </div>
        </div>

        <div className="flex justify-center space-x-4">
          <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-full transition-all transform hover:scale-105">
            <Phone size={20} />
          </button>
          <button className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-full transition-all transform hover:scale-105">
            <Video size={20} />
          </button>
          <button className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-full transition-all transform hover:scale-105">
            <MessageSquare size={20} />
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-purple-50 to-indigo-100">
      {isVideoCallActive && <VideoCallInterface />}
      
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      <div className={`fixed left-0 top-0 h-full w-64 bg-white shadow-xl border-r border-purple-200 z-50 transform transition-transform duration-300 ease-in-out ${
        isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
      } lg:translate-x-0`}>
        <div className="p-6">
          <div className="flex items-center space-x-3 mb-8">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-lg flex items-center justify-center">
              <Briefcase className="text-white" size={20} />
            </div>
            <h1 className="text-xl font-bold text-gray-800">SkillNest</h1>
          </div>

          <nav className="space-y-2">
            {sidebarItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                  activeTab === item.id 
                    ? 'bg-purple-600 text-white shadow-lg' 
                    : 'text-gray-600 hover:bg-purple-50 hover:text-purple-700'
                }`}
              >
                <item.icon size={20} />
                <span className="font-medium">{item.label}</span>
              </button>
            ))}
          </nav>

          <div className="absolute bottom-6 left-6 right-6">
            <div className="bg-purple-50 rounded-lg p-4 mb-4 border border-purple-200">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center">
                  <User className="text-white" size={16} />
                </div>
                <div>
                  <p className="text-gray-800 font-medium">Alex Chen</p>
                  <p className="text-gray-600 text-sm">HR Manager</p>
                </div>
              </div>
            </div>
            <div className="flex space-x-2">
              <button className="flex-1 flex items-center justify-center py-2 text-gray-500 hover:text-purple-600 transition-colors">
                <Settings size={18} />
              </button>
              <button className="flex-1 flex items-center justify-center py-2 text-gray-500 hover:text-purple-600 transition-colors">
                <LogOut size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:ml-64">
        <header className="bg-white shadow-sm border-b border-purple-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="lg:hidden text-gray-700"
              >
                <Menu size={24} />
              </button>
              <div>
                <h2 className="text-xl font-semibold text-gray-800">Good morning, Alex!</h2>
                <p className="text-gray-600 text-sm">
                  {currentTime.toLocaleDateString('en-US', { 
                    weekday: 'long', 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="hidden md:flex relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input 
                  type="text" 
                  placeholder="Search candidates, jobs..."
                  className="bg-purple-50 text-gray-700 pl-10 pr-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 border border-purple-200 w-64"
                />
              </div>
              <button className="relative p-2 text-gray-600 hover:text-purple-700 transition-colors">
                <Bell size={20} />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
              </button>
            </div>
          </div>
        </header>

        <main className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg border border-purple-100 hover:border-purple-300 transition-all duration-300 transform hover:scale-105"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-lg ${stat.color}`}>
                    <stat.icon className="text-white" size={24} />
                  </div>
                  <span className="text-green-500 text-sm font-medium">{stat.change}</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-1">{stat.value}</h3>
                <p className="text-gray-600 text-sm">{stat.title}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
            <div className="xl:col-span-2 bg-white rounded-xl p-6 shadow-lg border border-purple-100">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-gray-800">Today's Interviews</h3>
                <button className="text-purple-600 hover:text-purple-700 text-sm font-medium flex items-center">
                  View All <ChevronRight size={16} className="ml-1" />
                </button>
              </div>

              <div className="space-y-4">
                {upcomingInterviews.map((interview) => (
                  <div 
                    key={interview.id}
                    className="bg-purple-50 rounded-lg p-4 hover:bg-purple-100 transition-all duration-200 cursor-pointer border border-purple-200"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="text-3xl">{interview.avatar}</div>
                        <div>
                          <h4 className="text-gray-800 font-medium">{interview.candidate}</h4>
                          <p className="text-gray-600 text-sm">{interview.position}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-gray-800 font-medium">{interview.time}</p>
                        <div className="flex items-center space-x-2 mt-2">
                          <span className={`px-2 py-1 rounded-full text-xs ${
                            interview.status === 'confirmed' 
                              ? 'bg-green-500 text-white' 
                              : 'bg-yellow-500 text-black'
                          }`}>
                            {interview.status}
                          </span>
                          <button 
                            onClick={() => setIsVideoCallActive(true)}
                            className="bg-purple-600 hover:bg-purple-700 text-white p-2 rounded-lg transition-all transform hover:scale-110"
                          >
                            <Video size={16} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-purple-100">
              <h3 className="text-xl font-semibold text-gray-800 mb-6">Recent Activity</h3>
              <div className="space-y-4">
                {recentActivities.map((activity, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className={`w-2 h-2 rounded-full mt-2 ${
                      activity.type === 'application' ? 'bg-purple-500' :
                      activity.type === 'interview' ? 'bg-green-500' :
                      activity.type === 'job' ? 'bg-indigo-500' : 'bg-pink-500'
                    }`}></div>
                    <div className="flex-1">
                      <p className="text-gray-700 text-sm">{activity.action}</p>
                      <p className="text-gray-500 text-xs mt-1">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Quick Actions</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <button className="bg-gradient-to-r from-purple-500 to-purple-600 text-white p-6 rounded-xl hover:from-purple-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 shadow-lg">
                <Video className="mb-2" size={24} />
                <p className="font-medium">Start Interview</p>
              </button>
              <button className="bg-gradient-to-r from-indigo-500 to-indigo-600 text-white p-6 rounded-xl hover:from-indigo-600 hover:to-indigo-700 transition-all duration-200 transform hover:scale-105 shadow-lg">
                <Users className="mb-2" size={24} />
                <p className="font-medium">Browse Candidates</p>
              </button>
              <button className="bg-gradient-to-r from-pink-500 to-pink-600 text-white p-6 rounded-xl hover:from-pink-600 hover:to-pink-700 transition-all duration-200 transform hover:scale-105 shadow-lg">
                <Briefcase className="mb-2" size={24} />
                <p className="font-medium">Post New Job</p>
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;