import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useState, useRef, useMemo } from "react";
import JoditEditor from "jodit-react";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import striptags from "striptags";




const image_hosting_key = import.meta.env.VITE_IMAGE_API_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateContent = ({ placeholder }) => {
  const { title, image, plainTextContent, _id, status } = useLoaderData()
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const config = useMemo(
    () => ({
      readonly: false, // all options from https://xdsoft.net/jodit/docs/,
      placeholder: placeholder || "Start typings...",
    }),
    [placeholder]
  );

  const onSubmit = async (data) => {

    // Check if an image is selected
    if (!data.image[0]) {
      Swal.fire("Error", "Please upload an image", "error");
      return;
    }

    const formData = new FormData();
    formData.append("image", data.image[0])

    const res = await axiosPublic.post(image_hosting_api, formData, {
      headers: { "content-type": "multipart/form-data" },
    });

    if (res.data.success) {
      const imageUrl = res.data.data.display_url;
      // Convert Jodit content to plain text
      const plainTextContent = striptags(content)
      // Send data to your database
      const contentInfo = {
        title: data.title,
        image: imageUrl,
        plainTextContent// Include Jodit content
      };
      await axiosSecure.patch(`/blogs/${_id}`, contentInfo);

      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your blog has been created successfully",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };
  return (
    <section>
      <div className="adminBG">
        <h1 className="text-center font-bold text-3xl uppercase p-5" data-aos="flip-right">
          Update Your Content
        </h1>
      </div>
      <div className="adminBannerBG">
        <h1 className="capitalize text-4xl text-center mb-5">all users</h1>
        <div className="text-center">
          <Link to={'/'}><button>Home</button></Link>
          <span className="mx-2">/</span>
          <button className="btn-active btn-info text-[#ef3d32]">update</button>
        </div>
      </div>
      <div className="hero-content">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            {/* title field */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Title</span>
              </label>
              <input
                defaultValue={title}
                type="text"
                placeholder="Title"
                {...register("title")}
                className="input input-bordered"
                required
              />
            </div>
            {/* upload photo */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Upload Profile</span>
              </label>
              <input
                // defaultValue={image}
                type="file"
                {...register("image")}
                className="file-input w-full max-w-xs"
              />
            </div>
            {/* blog content */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Full Address</span>
              </label>
              <div className="relative">
                <JoditEditor
                  defaultValue={plainTextContent}
                  ref={editor}
                  value={content}
                  config={config}
                  tabIndex={1} // tabIndex of textarea
                  onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                  onChange={(newContent) => { }}
                />
              </div>
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-bold_red-0 hover:bg-white hover:border-bold_red-0 hover:text-bold_red-0">Update Blog</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default UpdateContent