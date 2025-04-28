import { useLoaderData } from "react-router-dom";
import './blog.css'

const BlogDetails = () => {
  const { title, plainTextContent, image, status } = useLoaderData();
  return (
    <div className="cardBorder">
      <div className="card bg-base-100 shadow-sm pt-20">
        <figure>
          <img src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Title: {title}</h2>
          <p>Content: {plainTextContent}</p>
          <span className="text-red-600">Status: {status}</span>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
