import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useState } from "react";

const Search = () => {
  const [blood, setBlood] = useState("");
  const [district, setDistrict] = useState("");
  const [subDistrict, setSubDistrict] = useState("");
  const [filteredResult, setFilteredResult] = useState([])
  const axiosPublic = useAxiosPublic()

  const { data: search = [] } = useQuery({
    queryKey: ['search'],
    queryFn: async () => {
      const result = await axiosPublic('/donations')
      return result.data
    }
  })

  const handleSearch = () => {
    const filteredData = search.filter((item) => {
      return (
        (blood ? item?.bloodGroup?.toLowerCase().includes(blood.toLowerCase()) : true) &&
        (district ? item?.district?.value?.toLowerCase().includes(district.toLowerCase()) : true) &&
        (subDistrict ? item?.subDistrict?.value?.toLowerCase().includes(subDistrict.toLowerCase()) : true)
      );
    });

    setFilteredResult(filteredData);
  }
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div>
          <h1 className="text-5xl font-bold text-center">Search your donor</h1>
          <div>
            <div className="card-body">
              <fieldset>
                <label className="fieldset-label">Blood-Group</label>
                <input type="text" value={blood} onChange={(e) => setBlood(e.target.value)} className="input" placeholder="blood-group" />
                <label className="fieldset-label">District</label>
                <input type="text" value={district} onChange={(e) => setDistrict(e.target.value)} className="input" placeholder="district" />
                <label className="fieldset-label">sub-District</label>
                <input type="text" value={subDistrict} onChange={(e) => setSubDistrict(e.target.value)} className="input" placeholder="subDistrict" />
                <button onClick={handleSearch} className="btn btn-neutral mt-4">search</button>
              </fieldset>
            </div>
          </div>
        </div>
      </div>
      {/* filter result display */}
      <div className="mt-4">
        <h3 className="text-lg font-semibold">Search Results:</h3>
        {filteredResult.length > 0 ? (
          <ul className="list-disc pl-4">
            {filteredResult.map((result, index) => (
              <li key={index} className="border p-2 rounded-md shadow-sm">
                <strong>Blood Group:</strong> {result.bloodGroup} <br />
                <strong>District:</strong> {result?.district?.value} <br />
                <strong>Sub-District:</strong> {result?.subDistrict?.value}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No results found.</p>
        )}
      </div>
    </div>
  );
};

export default Search;
