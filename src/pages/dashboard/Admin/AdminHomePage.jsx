import { useQuery } from '@tanstack/react-query';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { isAfter, parseISO, subDays, subMonths, subWeeks } from 'date-fns';
import { BiSolidDonateBlood } from 'react-icons/bi';
import { FaFunnelDollar, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Cell, Pie, PieChart, Tooltip } from 'recharts';
import useAuth from '../../../hooks/useAuth';
import useUsersProfile from '../../../hooks/useUsersProfile';
import './admin.css';
// ..
AOS.init();

const AdminHomePage = () => {
  const { user } = useAuth();
  const [users] = useUsersProfile();

  const {
    data: donation = [],
    isLoading: loading,
    refetch,
  } = useQuery({
    queryKey: ['myDonation'],
    queryFn: async () => {
      const res = await axiosPublic.get(`/donations`);
      return res.data;
    },
  });
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <progress className="loading loading-ring loading-xl"></progress>
      </div>
    );
  }

  // pie chart
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const oneWeekAgo = subWeeks(today, 1);
  const oneMonthAgo = subMonths(today, 1);

  const dailyDonations = donation.filter(item =>
    isAfter(parseISO(item.donationDateTime), subDays(today, 1))
  ).length;
  const weeklyDonations = donation.filter(item =>
    isAfter(parseISO(item.donationDateTime), oneWeekAgo)
  ).length;
  const monthlyDonations = donation.filter(item =>
    isAfter(parseISO(item.donationDateTime), oneMonthAgo)
  ).length;

  const data = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
  ];

  const pieChartData = [
    { name: 'daily', value: dailyDonations },
    { name: 'weekly', value: weeklyDonations },
    { name: 'monthly', value: monthlyDonations },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? 'start' : 'end'}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div className="overflow-x-hidden">
      <section>
        <div className="adminBG">
          <h1 className="text-center font-bold text-3xl uppercase p-5" data-aos="flip-right">
            Welcome {user?.displayName}
          </h1>
        </div>
        <div className="adminBannerBG">
          <h1 className="capitalize text-2xl md:text-4xl text-center mb-5">admin home page</h1>
          <div className="text-center">
            <Link to={'/'}>
              <button>Home</button>
            </Link>
            <span className="mx-2">/</span>
            <button className="btn-active btn-info text-bold_red-0">admin</button>
          </div>
        </div>
        <div
          className="grid grid-cols-1 md:grid-cols-3 justify-evenly gap-6 mt-5 grid-flow-dense p-10"
          data-aos="zoom-in-down"
        >
          <div className="card rounded-none shadow-xl cardBorder">
            <div className="card-body">
              <div className="flex align-middle justify-between items-center gap-5">
                <div>
                  <FaUser className="text-3xl icon"></FaUser>
                </div>
                <div>
                  <h2 className="card-title">Total User : {users.length}</h2>
                  <p>
                    A card component has a figure, a body part, and inside body there are title and
                    actions parts
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="card rounded-none shadow-xl md:my-0 my-5 cardBorder">
            <div className="card-body">
              <div className="flex align-middle justify-between items-center gap-5">
                <div>
                  <BiSolidDonateBlood className="text-3xl icon"></BiSolidDonateBlood>
                </div>
                <div>
                  <h2 className="card-title">Total Donation : {donation?.length}</h2>
                  <p>
                    A card component has a figure, a body part, and inside body there are title and
                    actions parts
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="card rounded-none shadow-xl cardBorder">
            <div className="card-body">
              <div className="flex align-middle justify-between items-center gap-5">
                <div>
                  <FaFunnelDollar className="text-3xl icon"></FaFunnelDollar>
                </div>
                <div>
                  <h2 className="card-title">Total Funding : {donation?.length}</h2>
                  <p>
                    A card component has a figure, a body part, and inside body there are title and
                    actions parts
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <PieChart width={400} height={400}>
          <Pie
            data={pieChartData}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {pieChartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip></Tooltip>
        </PieChart>
      </section>
    </div>
  );
};

export default AdminHomePage;
