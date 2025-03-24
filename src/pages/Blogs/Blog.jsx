import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const Blog = () => {
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure()

  const { data: contents = [], refetch } = useQuery({
    queryKey: ["contents"],
    queryFn: async () => {
        const res = await axiosSecure.get("/blogs")
        return res.data
    }
  });
  return (
    <div className="pt-20 grid grid-cols-1 md:grid-cols-3">
      {contents.length === 0 ? (
        <p>No blogs available</p>  // Handle empty data
      ) : (
        contents.map((blog) => (
          <div key={blog._id} className="card card-border bg-base-100 w-96">
            <div className="card-body">
              <h2 className="card-title">{blog.title}</h2>  {/* Show blog title */}
              <p>{blog.plainTextContent}</p>  {/* Show blog content */}
              <div className="card-actions justify-end">
                <Link to={`/details/${blog._id}`}><button className="btn btn-primary">Read More</button></Link>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Blog;
