import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useState, useRef } from "react";
import html2pdf from "html2pdf.js";

const Search = () => {
  const [blood, setBlood] = useState("");
  const [district, setDistrict] = useState("");
  const [subDistrict, setSubDistrict] = useState("");
  const [filteredResult, setFilteredResult] = useState([])
  const axiosPublic = useAxiosPublic()
  const pdfRef = useRef()

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
  // pdf download function
  const downloadPDF = () => {
    const element = pdfRef.current;
    html2pdf().from(element).save("search-results.pdf")
  }

  return (
    <div>
      <div className="hero bg-base-200 pt-20">
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
        <div ref={pdfRef} className="p-4 rounded shadow">
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
        {/* Download PDF Button */}
        {filteredResult.length > 0 && (
          <button
            onClick={downloadPDF}
            className="mt-4 px-4 py-2 bg-red-600 text-white rounded shadow hover:bg-red-700"
          >
            Download PDF
          </button>
        )}
      </div>
    </div>
  );
};

export default Search;
