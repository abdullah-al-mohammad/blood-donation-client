import Swal from "sweetalert2";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "./../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";



const ContentManagementTable = ({ contentBlog, refetch, loading }) => {
  const axiosSecure = useAxiosSecure()
  const { title, image, plainTextContent, status, _id } = contentBlog

  const handleUpdateStatus = async (newStatus) => {
    const res = await axiosSecure.patch(`/blogs/${_id}`, newStatus, {
      headers: { "Content-Type": "text/plain" }
    });
    if (res.data.modifiedCount > 0) {
      refetch()
    }
  };

  const handleDeleteBlog = async (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosSecure.delete(`/blogs/${_id}`)
        if (res.data.deletedCount > 0) {
          refetch()
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
        }
      }
    })
  }

  return (
    <tr>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12">
              <img
                src={image}
                alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
        </div>
      </td>
      <td>
        <div className="text-sm opacity-50">
          {title}
        </div>
      </td>
      <td>
        <div className="text-sm opacity-50">
          {plainTextContent}
        </div>
      </td>
      <td>{status}</td>
      <th>
        <details className="dropdown">
          <summary
            className={`btn m-1 ${status === "draft"
              ? "text-success"
              : status === "published"
                ? "text-red-500"
                : "text-primary"
              }`}
          >
            {status === "published" ? "unpublished" : status === "unpublished" ? "draft" : "draft"}
          </summary>
          <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-32 p-2 shadow-sm">
            <>
              <li>
                <button
                  onClick={() => handleUpdateStatus("published")}
                  type="button"
                >
                  Publish
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleUpdateStatus("unpublished")}
                  type="button"
                >
                  Unpublish
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleDeleteBlog(_id)}
                  type="button"
                >
                  Delete
                </button>
              </li>
              <li>
                <Link to={`/dashboard/updateContent/${_id}`}>Update</Link>
              </li>
            </>
          </ul>
        </details>
      </th>
    </tr>
  )
}

export default ContentManagementTable