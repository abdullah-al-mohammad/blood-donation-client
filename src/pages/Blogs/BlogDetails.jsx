import { useLoaderData } from "react-router-dom";


const BlogDetails = () => {
  const { title, plainTextContent, image, status } = useLoaderData();
  return (
    <div className="py-40">
      <h1 className="text-4xl md:text-6xl font-bold text-center capitalize">Welcome to Our Blog</h1>
      <p className="md:text-2xl text-center">Fresh articles, how-to guides, and the latest updates.</p>
      <div className="card bg-base-100 shadow-sm pt-20">
        <figure>
          <img src={image} alt="Shoes" />
        </figure>
        <div className="card-body text-center">
          <h2>Title: {title}</h2>
          <p>Content: {plainTextContent}</p>
          <span className="text-red-600">Status: {status}</span>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
