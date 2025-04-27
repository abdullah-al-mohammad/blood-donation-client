import React from 'react'
import { useLocation } from 'react-router-dom'
import { useRef } from "react";
import html2pdf from "html2pdf.js";

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
    <div className='container mx-auto'>{/* filter result display */}
      <div className="pt-16">
        <div className='text-center mb-10'>
        <h3 className="text-4xl md:text-6xl font-semibold mb-10">Available Blood Donors</h3>
        <p className='md:text-2xl'>We found <span className='text-bold_red-0'>{results.length}</span> items matching your search</p>
        </div>
        <div ref={pdfRef} className="p-4 rounded shadow">
          {results.length > 0 ? (
            <ul className='max-w-screen-xl'>
              {results.map((result, index) => (
                <li key={index} className="border p-2 rounded-md shadow-sm">
                  <strong>Blood Group : </strong><span className='text-bold_red-0'>{result.bloodGroup}</span>
                  <strong className='ml-3'>District : </strong><span className='text-bold_red-0'>{result?.district?.value}</span>
                  <strong className='ml-3'>Sub-District : </strong><span className='text-bold_red-0'>{result?.subDistrict?.value}</span>
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
      </div>
      </div>
  )
}

export default SearchResult