import { useNavigate } from "react-router-dom"


const ContentManagementPage = () => {
    const navigate = useNavigate()
  return (
    <div>
     <div className="flex justify-end p-6">
      <button
        className="bg-blue-500 text-white px-6 py-3 rounded-md shadow-md hover:bg-blue-600 transition duration-300"
        onClick={() => navigate("/dashboard/CreateContent")}
      >
        Add Blog
      </button>
    </div>
    </div>
  )
}

export default ContentManagementPage
