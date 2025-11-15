import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom"; // Add Link here
import Footer from "../components/layout/Footer"; // Add this import

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is authenticated
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
      return;
    }

    // In a real app, you'd fetch user data from your backend
    // For now, we'll simulate getting user data
    const fetchUserData = async () => {
      try {
        // Simulate API call
        setTimeout(() => {
          setUser({
            name: "Lewis",
            email: "lewis@example.com",
            memberSince: "2024",
            favoriteCars: 3,
            testDrives: 2
          });
          setLoading(false);
        }, 1000);
      } catch (error) {
        console.error('Error fetching user data:', error);
        localStorage.removeItem('token');
        navigate('/login');
      }
    };

    fetchUserData();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="text-center">
          <div className="w-16 h-16 mx-auto border-4 rounded-full border-primary border-t-transparent animate-spin"></div>
          <p className="mt-4 text-gray-600">Loading your dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">LewisAutoWorld</h1>
              <span className="ml-4 text-sm text-gray-500">Dashboard</span>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-gray-700">Welcome, {user?.name}</span>
              <button
                onClick={handleLogout}
                className="px-4 py-2 text-sm text-red-600 transition-colors border border-red-300 rounded-md hover:bg-red-50"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content - This will grow to fill available space */}
      <main className="flex-grow py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          {/* Welcome Section */}
          <div className="mb-6 overflow-hidden bg-white rounded-lg shadow">
            <div className="px-4 py-5 sm:p-6">
              <h2 className="mb-2 text-lg font-semibold text-gray-900">
                Welcome back, {user?.name}! 🎉
              </h2>
              <p className="text-gray-600">
                Ready to explore the world of luxury automobiles? Here's your personalized dashboard.
              </p>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 gap-6 mb-6 sm:grid-cols-2 lg:grid-cols-4">
            {/* Favorite Cars */}
            <div className="overflow-hidden bg-white rounded-lg shadow">
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-8 h-8 bg-blue-100 rounded-md">
                      ❤️
                    </div>
                  </div>
                  <div className="flex-1 w-0 ml-5">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">
                        Favorite Cars
                      </dt>
                      <dd className="text-lg font-semibold text-gray-900">
                        {user?.favoriteCars || 0}
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>

            {/* Test Drives */}
            <div className="overflow-hidden bg-white rounded-lg shadow">
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-8 h-8 bg-green-100 rounded-md">
                      🚗
                    </div>
                  </div>
                  <div className="flex-1 w-0 ml-5">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">
                        Test Drives
                      </dt>
                      <dd className="text-lg font-semibold text-gray-900">
                        {user?.testDrives || 0}
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>

            {/* Member Since */}
            <div className="overflow-hidden bg-white rounded-lg shadow">
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-8 h-8 bg-purple-100 rounded-md">
                      ⭐
                    </div>
                  </div>
                  <div className="flex-1 w-0 ml-5">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">
                        Member Since
                      </dt>
                      <dd className="text-lg font-semibold text-gray-900">
                        {user?.memberSince}
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="overflow-hidden bg-white rounded-lg shadow">
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-8 h-8 bg-yellow-100 rounded-md">
                      ⚡
                    </div>
                  </div>
                  <div className="flex-1 w-0 ml-5">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">
                        Quick Actions
                      </dt>
                      <dd className="text-lg font-semibold text-gray-900">
                        5+
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {/* Recent Activity */}
            <div className="bg-white rounded-lg shadow">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="mb-4 text-lg font-medium text-gray-900">Recent Activity</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full">
                        👁️
                      </div>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">Viewed Mercedes-Benz S-Class</p>
                      <p className="text-sm text-gray-500">2 hours ago</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-8 h-8 bg-green-100 rounded-full">
                        ❤️
                      </div>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">Added BMW 7 Series to favorites</p>
                      <p className="text-sm text-gray-500">1 day ago</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-8 h-8 bg-purple-100 rounded-full">
                        📅
                      </div>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">Scheduled test drive for Audi A8</p>
                      <p className="text-sm text-gray-500">3 days ago</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-lg shadow">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="mb-4 text-lg font-medium text-gray-900">Quick Actions</h3>
                <div className="grid grid-cols-2 gap-4">
                  <Link to="/cars" className="p-4 text-left transition-colors border border-gray-200 rounded-lg hover:border-primary hover:bg-blue-50">
                    <div className="mb-2 text-lg">🚗</div>
                    <div className="font-medium text-gray-900">Browse Cars</div>
                   <div className="text-sm text-gray-500">Explore our collection</div>
                 </Link>
                 <Link to="/test-drive" className="p-4 text-left transition-colors border border-gray-200 rounded-lg hover:border-primary hover:bg-blue-50">
                   <div className="mb-2 text-lg">📅</div>
                   <div className="font-medium text-gray-900">Book Test Drive</div>
                   <div className="text-sm text-gray-500">Schedule appointment</div>
                 </Link>
                 <Link to="/favorites" className="p-4 text-left transition-colors border border-gray-200 rounded-lg hover:border-primary hover:bg-blue-50">
                    <div className="mb-2 text-lg">❤️</div>
                    <div className="font-medium text-gray-900">Favorites</div>
                    <div className="text-sm text-gray-500">View saved cars</div>
                  </Link>
                 <Link to="/contact" className="p-4 text-left transition-colors border border-gray-200 rounded-lg hover:border-primary hover:bg-blue-50">
                    <div className="mb-2 text-lg">📞</div>
                    <div className="font-medium text-gray-900">Contact Sales</div>
                    <div className="text-sm text-gray-500">Get assistance</div>
                  </Link>
               </div>
             </div>
            </div>
          </div>

          {/* Featured Cars Preview */}
          <div className="mt-6 bg-white rounded-lg shadow">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="mb-4 text-lg font-medium text-gray-900">Recommended for You</h3>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <div className="p-4 transition-shadow border border-gray-200 rounded-lg hover:shadow-md">
                  <div className="mb-3 bg-gray-200 rounded-md aspect-w-16 aspect-h-9"></div>
                  <h4 className="font-semibold text-gray-900">Porsche 911 Turbo</h4>
                  <p className="text-sm text-gray-600">Starting at $170,000</p>
                  <button className="mt-2 text-sm text-primary hover:text-primary-dark">
                    View Details →
                  </button>
                </div>
                <div className="p-4 transition-shadow border border-gray-200 rounded-lg hover:shadow-md">
                  <div className="mb-3 bg-gray-200 rounded-md aspect-w-16 aspect-h-9"></div>
                  <h4 className="font-semibold text-gray-900">Range Rover Sport</h4>
                  <p className="text-sm text-gray-600">Starting at $85,000</p>
                  <button className="mt-2 text-sm text-primary hover:text-primary-dark">
                    View Details →
                  </button>
                </div>
                <div className="p-4 transition-shadow border border-gray-200 rounded-lg hover:shadow-md">
                  <div className="mb-3 bg-gray-200 rounded-md aspect-w-16 aspect-h-9"></div>
                  <h4 className="font-semibold text-gray-900">Tesla Model S</h4>
                  <p className="text-sm text-gray-600">Starting at $94,000</p>
                  <button className="mt-2 text-sm text-primary hover:text-primary-dark">
                    View Details →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer - This will stick to the bottom */}
      <Footer />
    </div>
  );
}