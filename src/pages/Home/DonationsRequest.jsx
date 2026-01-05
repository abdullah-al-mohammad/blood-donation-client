import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import useAxiosSecure from '../../hooks/useAxiosSecure';

const DonationsRequest = () => {
  const axiosSecure = useAxiosSecure();
  const { data: donors = [], refetch } = useQuery({
    queryKey: ['donors'],
    queryFn: async () => {
      const res = await axiosSecure.get('/donations');
      console.log(res);

      return res.data;
    },
  });
  // console.log(donors);

  return (
    <div className="overflow-x-auto pt-20">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Location</th>
            <th>Date & Time</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {donors
            .filter(donor => donor.status === 'pending')
            .map((donor, index) => (
              <tr key={donor._id}>
                <th>{index + 1}</th>
                <td>{donor.recipientName}</td>
                <td>
                  {donor.district?.value},{donor.subDistrict?.value}
                </td>
                <td>{donor.donationDateTime.split('T')}</td>
                <td>
                  <Link to={`/donationDetails/${donor._id}`}>View</Link>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default DonationsRequest;
