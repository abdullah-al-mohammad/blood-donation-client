import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const Search = () => {
    const axiosPublic = useAxiosPublic()
    const {data: search=[]} = useQuery({
        queryKey: ['search'],
        queryFn: async()=>{
            const result = await axiosPublic('/donations')
            return result.data
        }
    })
    const blood = search.filter(blood => blood.bloodGroup)
    const district = search.filter(districtData => districtData.district)
    const subDistrict = search.filter(upozela => upozela.subDistrict)
    const handleSearch = ()=>{

    }
  return (
    <div className="hero bg-base-200 min-h-screen">
    <div className="hero-content flex-col lg:flex-row-reverse">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <fieldset className="fieldset">
            <label className="fieldset-label">Blood</label>
            <input type="text" value={blood} className="input" placeholder="Email" />
            <label className="fieldset-label">District</label>
            <input type="text" value={district} className="input" placeholder="district" />
            <label className="fieldset-label">sub-District</label>
            <input type="text" value={subDistrict} className="input" placeholder="subDistrict" />
            <button onClick={handleSearch} className="btn btn-neutral mt-4">search</button>
          </fieldset>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Search;
