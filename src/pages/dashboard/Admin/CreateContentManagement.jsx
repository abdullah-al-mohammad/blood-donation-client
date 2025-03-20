import React from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useState, useRef, useMemo } from "react";
import JoditEditor from "jodit-react";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const image_hosting_key = import.meta.env.VITE_IMAGE_API_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const CreateContentManagement = ({ placeholder }) => {
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const axiosPublic = useAxiosPublic();
  const {
    register,
    handleSubmit,
    control,
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
    console.log(data);

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

      // Send data to your database
      const userInfo = {
        title: data.title,
        image: imageUrl,
        content, // Include Jodit content
      };
      await axiosPublic.post("/blogs", userInfo);

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
    <div>
      <h1 className="text-center bg-slate-400 p-5 uppercase text-3xl">
      Content Management Page
      </h1>
      <div className="">
        <div className="hero-content">
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              {/* title field */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Title</span>
                </label>
                <input
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
                    ref={editor}
                    value={content}
                    config={config}
                    tabIndex={1} // tabIndex of textarea
                    onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                    onChange={(newContent) => {}}
                  />
                </div>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Create Blog</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateContentManagement;
