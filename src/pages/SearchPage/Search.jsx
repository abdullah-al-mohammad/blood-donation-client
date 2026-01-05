import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAxiosPublic from '../../hooks/useAxiosPublic';

const Search = () => {
  const [blood, setBlood] = useState('');
  const [district, setDistrict] = useState('');
  const [subDistrict, setSubDistrict] = useState('');
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();

  const { data: search = [] } = useQuery({
    queryKey: ['search'],
    queryFn: async () => {
      const result = await axiosPublic('/donations');
      return result.data;
    },
  });

  const handleSearch = () => {
    const filteredData = search.filter(item => {
      return (
        (blood ? item?.bloodGroup?.toLowerCase().includes(blood.toLowerCase()) : true) &&
        (district ? item?.district?.value?.toLowerCase().includes(district.toLowerCase()) : true) &&
        (subDistrict
          ? item?.subDistrict?.value?.toLowerCase().includes(subDistrict.toLowerCase())
          : true)
      );
    });

    // setFilteredResult(filteredData);
    // Navigate to /search-results page with filtered data
    navigate('/search-results', { state: { results: filteredData } });
  };

  return (
    <div className="hero bg-bold_red-0 mb-16 rounded">
      <div className="hero-content flex-col lg:flex-row-reverse p-12">
        <div className="text-center">
          {/* <img className="max-w-screen-sm" src={searchimg} alt="" /> */}
          <h2 className="text-4xl md:text-6xl  text-center pb-6">Find a Lifesaver Near You</h2>
          <p className="md:text-2xl lg:px-14">
            Search by blood group, district, or sub-district and connect with donors instantly
          </p>
        </div>
        <div>
          <div className="card bg-[#c0c3c7] w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <fieldset>
                <label className="fieldset-label text-black">Blood-Group</label>
                <input
                  type="text"
                  value={blood}
                  onChange={e => setBlood(e.target.value)}
                  className="input"
                  placeholder="Enter blood group (e.g., A+, O-)"
                />
                <label className="fieldset-label text-black">District</label>
                <input
                  type="text"
                  value={district}
                  onChange={e => setDistrict(e.target.value)}
                  className="input"
                  placeholder="Enter your district"
                />
                <label className="fieldset-label text-black">sub-District</label>
                <input
                  type="text"
                  value={subDistrict}
                  onChange={e => setSubDistrict(e.target.value)}
                  className="input"
                  placeholder="Enter your sub-district"
                />
                <button
                  onClick={handleSearch}
                  className="btn bg-bold_red-0 transition ease-in-out duration-300 hover:bg-slate-200 hover:text-bold_red-0 mt-4 border-bold_red-0"
                >
                  Find Donors
                </button>
              </fieldset>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
