import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faBed, faCalendarCheck, faCog, faSearch, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const location = useLocation();
  
  // Mock data for demonstration
  const stats = {
    bookings: 142,
    rooms: 45,
    services: 8,
    revenue: '$52,340'
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 bg-white shadow-lg w-64 transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-200 ease-in-out z-50`}>
        <div className="p-6">
          <h2 className="text-2xl font-bold text-blue-600">LuxStay Admin</h2>
        </div>
        
        <nav className="mt-6">
          <NavItem icon={faChartLine} to="/admin" label="Dashboard" active={location.pathname === '/admin'} />
          <NavItem icon={faCalendarCheck} to="/admin/bookings" label="Bookings" />
          <NavItem icon={faBed} to="/admin/rooms" label="Rooms" />
          <NavItem icon={faCog} to="/admin/services" label="Services" />
        </nav>
      </aside>

      {/* Main Content */}
      <main className={`${sidebarOpen ? 'ml-64' : 'ml-0'} transition-margin duration-200 ease-in-out p-8`}>
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <button 
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="text-gray-600 hover:text-blue-600 lg:hidden"
          >
            ☰
          </button>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search bookings..."
                className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <FontAwesomeIcon icon={faSearch} className="absolute left-3 top-3 text-gray-400" />
            </div>
            <button className="text-gray-600 hover:text-blue-600">
              <FontAwesomeIcon icon={faSignOutAlt} className="text-lg" />
            </button>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard title="Total Bookings" value={stats.bookings} color="bg-blue-100" />
          <StatCard title="Available Rooms" value={stats.rooms} color="bg-green-100" />
          <StatCard title="Active Services" value={stats.services} color="bg-purple-100" />
          <StatCard title="Total Revenue" value={stats.revenue} color="bg-yellow-100" />
        </div>

        {/* Recent Activity Table */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-xl font-semibold mb-4">Recent Bookings</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left text-gray-600 border-b">
                  <th className="pb-3">Guest</th>
                  <th className="pb-3">Room Type</th>
                  <th className="pb-3">Check-In</th>
                  <th className="pb-3">Status</th>
                  <th className="pb-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                <TableRow />
                <TableRow />
                <TableRow />
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};

// Reusable Components
const NavItem = ({ icon, to, label, active }) => (
  <Link
    to={to}
    className={`flex items-center px-6 py-3 text-sm ${
      active ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-100'
    }`}
  >
    <FontAwesomeIcon icon={icon} className="w-5 mr-3" />
    {label}
  </Link>
);

const StatCard = ({ title, value, color }) => (
  <div className={`${color} p-6 rounded-lg shadow-sm`}>
    <h4 className="text-gray-600 text-sm mb-2">{title}</h4>
    <p className="text-2xl font-bold">{value}</p>
  </div>
);

const TableRow = () => (
  <tr className="border-b hover:bg-gray-50">
    <td className="py-4">John Doe</td>
    <td>Deluxe Suite</td>
    <td>2023-08-20</td>
    <td><span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-sm">Confirmed</span></td>
    <td>
      <button className="text-blue-600 hover:text-blue-800 mr-3">Edit</button>
      <button className="text-red-600 hover:text-red-800">Cancel</button>
    </td>
  </tr>
);

export default Dashboard;