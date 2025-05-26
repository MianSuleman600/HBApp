import React, { useEffect, useState } from 'react';
import { fetchBookings } from '../../api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faSort, faSortUp, faSortDown, faPrint, faFileCsv } from '@fortawesome/free-solid-svg-icons';
import moment from 'moment';
import Pagination from '../../components/Pagination';

const BookingList = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [sortConfig, setSortConfig] = useState({ key: 'checkIn', direction: 'asc' });
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    const loadBookings = async () => {
      try {
        const response = await fetchBookings();
        setBookings(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to load bookings. Please try again later.');
        setLoading(false);
      }
    };
    loadBookings();
  }, []);

  const handleSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const getStatusBadge = (status) => {
    const statusColors = {
      confirmed: 'bg-green-100 text-green-800',
      pending: 'bg-yellow-100 text-yellow-800',
      cancelled: 'bg-red-100 text-red-800',
    };
    return (
      <span className={`px-3 py-1 rounded-full text-sm ${statusColors[status]}`}>
        {status}
      </span>
    );
  };

  const filteredData = bookings
    .filter(booking => 
      Object.values(booking).some(value =>
        String(value).toLowerCase().includes(searchQuery.toLowerCase())
      )
    )
    .sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === 'asc' ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === 'asc' ? 1 : -1;
      }
      return 0;
    });

  const currentItems = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  if (loading) return <div className="text-center py-8">Loading bookings...</div>;
  if (error) return <div className="text-red-500 text-center py-8">{error}</div>;

  return (
    <div className="p-6 bg-white rounded-lg shadow">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <h2 className="text-2xl font-semibold">Booking Management</h2>
        <div className="w-full sm:w-64 relative">
          <input
            type="text"
            placeholder="Search bookings..."
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <FontAwesomeIcon icon={faSearch} className="absolute left-3 top-3 text-gray-400" />
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50 text-left text-sm text-gray-600">
              <TableHeader title="Booking ID" sortKey="_id" handleSort={handleSort} sortConfig={sortConfig} />
              <TableHeader title="Guest" sortKey="guestName" handleSort={handleSort} sortConfig={sortConfig} />
              <TableHeader title="Room" sortKey="roomName" handleSort={handleSort} sortConfig={sortConfig} />
              <TableHeader title="Check-In" sortKey="checkIn" handleSort={handleSort} sortConfig={sortConfig} />
              <TableHeader title="Check-Out" sortKey="checkOut" handleSort={handleSort} sortConfig={sortConfig} />
              <TableHeader title="Total" sortKey="total" handleSort={handleSort} sortConfig={sortConfig} />
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {currentItems.map(booking => (
              <tr key={booking._id} className="hover:bg-gray-50">
                <td className="px-4 py-3 font-medium text-gray-900">#{booking._id.slice(-6)}</td>
                <td className="px-4 py-3">{booking.guestName}</td>
                <td className="px-4 py-3">{booking.roomName}</td>
                <td className="px-4 py-3">{moment(booking.checkIn).format('MMM D, YYYY')}</td>
                <td className="px-4 py-3">{moment(booking.checkOut).format('MMM D, YYYY')}</td>
                <td className="px-4 py-3 font-medium">${booking.total}</td>
                <td className="px-4 py-3">{getStatusBadge(booking.status)}</td>
                <td className="px-4 py-3 space-x-2">
                  <button className="text-blue-600 hover:text-blue-800">View</button>
                  <button className="text-gray-600 hover:text-gray-800">Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        <Pagination
          currentPage={currentPage}
          totalItems={filteredData.length}
          itemsPerPage={itemsPerPage}
          onPageChange={setCurrentPage}
        />
        <div className="flex gap-3">
          <button className="px-4 py-2 border rounded-lg hover:bg-gray-50">
            <FontAwesomeIcon icon={faPrint} className="mr-2" />
            Print
          </button>
          <button className="px-4 py-2 border rounded-lg hover:bg-gray-50">
            <FontAwesomeIcon icon={faFileCsv} className="mr-2" />
            Export CSV
          </button>
        </div>
      </div>
    </div>
  );
};

const TableHeader = ({ title, sortKey, handleSort, sortConfig }) => {
  const getSortIcon = () => {
    if (sortConfig.key !== sortKey) return faSort;
    return sortConfig.direction === 'asc' ? faSortUp : faSortDown;
  };

  return (
    <th 
      className="px-4 py-3 cursor-pointer hover:bg-gray-100"
      onClick={() => handleSort(sortKey)}
    >
      <div className="flex items-center gap-1">
        {title}
        <FontAwesomeIcon 
          icon={getSortIcon()} 
          className={`text-sm ${sortConfig.key === sortKey ? 'text-blue-600' : 'text-gray-400'}`}
        />
      </div>
    </th>
  );
};

export default BookingList;