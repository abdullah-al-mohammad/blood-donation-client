import React from 'react'
import { useLocation } from 'react-router-dom'
import { useRef } from "react";

const SearchResult = () => {
  const location = useLocation();
  const { results = [] } = location.state || {}; // get the passed results
  const pdfRef = useRef()

  // pdf download function
  const downloadPDF = () => {
    const element = pdfRef.current;
    html2pdf().from(element).save("search-results.pdf")
  }
  return (
    <div>{/* filter result display */}
      <div className="mt-4">
        <h3 className="text-lg font-semibold">Search Results:</h3>
        <div ref={pdfRef} className="p-4 rounded shadow">
          {results.length > 0 ? (
            <ul className="list-disc pl-4">
              {results.map((result, index) => (
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
        {results.length > 0 && (
          <button
            onClick={downloadPDF}
            className="mt-4 px-4 py-2 bg-red-600 text-white rounded shadow hover:bg-red-700"
          >
            Download PDF
          </button>
        )}
      </div></div>
  )
}

export default SearchResult