import { useNavigate } from "react-router-dom";
function Dashboard() {
  const navigate = useNavigate();

  const menuItems = [
    { name: 'Teachers', path: '/teachers', icon: '👨‍🏫', gradient: 'from-blue-500 to-blue-600' },
    { name: 'Students', path: '/students', icon: '👨‍🎓', gradient: 'from-green-500 to-green-600' },
    { name: 'Courses', path: '/courses', icon: '📚', gradient: 'from-purple-500 to-purple-600' },
    { name: 'Enrollments', path: '/enrollments', icon: '📝', gradient: 'from-orange-500 to-orange-600' },
    { name: 'Lessons', path: '/lessons', icon: '📖', gradient: 'from-indigo-500 to-indigo-600' },
    { name: 'Assignments', path: '/assignments', icon: '✏️', gradient: 'from-pink-500 to-pink-600' },
    { name: 'Submissions', path: '/submissions', icon: '📤', gradient: 'from-teal-500 to-teal-600' },
    { name: 'Grades', path: '/grades', icon: '⭐', gradient: 'from-red-500 to-red-600' },
    { name: 'My Profile', path: '/profile', icon: '👤', gradient: 'from-gray-600 to-gray-700' },
  ];

  return (
    <>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white pt-16 pb-12 px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
            Welcome to <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">LMS Dashboard</span>
          </h1>
          <p className="text-xl text-gray-300 mb-2">Manage your learning experience seamlessly</p>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-400 to-purple-400 rounded mt-6"></div>
        </div>
      </div>

      {/* Quick Stats Section */}
      <div className="bg-gray-50 px-8 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <p className="text-gray-600 text-sm font-semibold uppercase">Total Courses</p>
              <p className="text-3xl font-bold text-blue-600 mt-2">0</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <p className="text-gray-600 text-sm font-semibold uppercase">Active Assignments</p>
              <p className="text-3xl font-bold text-orange-600 mt-2">0</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <p className="text-gray-600 text-sm font-semibold uppercase">Your GPA</p>
              <p className="text-3xl font-bold text-green-600 mt-2">N/A</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Menu Grid */}
      <div className="bg-white px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-3">Management Modules</h2>
          <p className="text-gray-600 mb-12">Click on any module to manage your learning resources</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {menuItems.map((item) => (
              <button
                key={item.path}
                onClick={() => navigate(item.path)}
                className={`group relative bg-gradient-to-br ${item.gradient} text-white rounded-xl p-8 shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-out overflow-hidden`}
              >
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-white opacity-5 rounded-full -mr-12 -mt-12 group-hover:scale-150 transition duration-300"></div>
                
                {/* Content */}
                <div className="relative z-10 text-left">
                  <div className="text-5xl mb-4">{item.icon}</div>
                  <h3 className="text-2xl font-bold mb-2">{item.name}</h3>
                  <p className="text-sm text-gray-100 opacity-90">Access and manage {item.name.toLowerCase()}</p>
                  
                  {/* Arrow indicator */}
                  <div className="flex items-center mt-4 text-sm font-semibold">
                    <span>Explore</span>
                    <span className="ml-2 group-hover:translate-x-2 transition transform">→</span>
                  </div>
                </div>
                
                {/* Hover effect line */}
                <div className="absolute bottom-0 left-0 h-1 bg-white w-0 group-hover:w-full transition duration-300"></div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Info */}
      <div className="bg-gray-800 text-gray-300 px-8 py-8 text-center">
        <p className="text-sm">Learning Management System • Version 1.0</p>
        <p className="text-xs text-gray-500 mt-2">© 2026 - All rights reserved</p>
      </div>
    </>
  );
}
export default Dashboard;