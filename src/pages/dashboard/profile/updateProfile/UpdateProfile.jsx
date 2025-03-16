import { useLoaderData } from "react-router-dom"
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Controller, useForm } from "react-hook-form";
import Select from "react-select";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";

// image hosting api key
const image_hosting_key = import.meta.env.VITE_IMAGE_API_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

export const UpdateProfile = () => {
  const { _id, name, email, district, subDistrict, blood } = useLoaderData()

  const [isEditing, setIsEditing] = useState(false)
  const axiosPublic = useAxiosPublic()

  const {
    register,
    handleSubmit,
    control,
  } = useForm();

  // district subdistrict fetch json data file
  const { data = {}, isLoading: loading, refetch } = useQuery({
    queryKey: ["district"],
    queryFn: async () => {
      const [district, subDistrict] = await Promise.all([
        fetch("/district.json").then((res) => res.json()),
        fetch("/sub-district.json").then((res) => res.json()),
      ]);
      return { districts: district, subDistricts: subDistrict };
    },
  });
  if (loading) {
    return <span>loading....</span>;
  }

  const { districts = [], subDistricts = [] } = data || {};

  console.log(data);

  const onSubmit = async (data) => {
    console.log(data);
    const email = data.email;
    const name = data.name;
    const formData = new FormData();
    formData.append("image", data.image[0]);
    const res = await axiosPublic.post(image_hosting_api, formData, {
      headers: { "content-type": "multipart/form-data" },
    });
    console.log(res);

    if (res.data.success) {
      const imageUrl = res.data.data.display_url;
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your update has been successfully",
        showConfirmButton: false,
        timer: 1500
      });
      const userInfo = {
        name: name,
        email: email,
        image: imageUrl,
        district: data.district,
        subDistrict: data.subDistrict,
        blood: data.bloodGroup,
      };
      await axiosPublic.patch(`/users/${_id}`, userInfo);
      setIsEditing(false)
      refetch()
    }
  };
  return (
    <div className="bg-base-200 w-full">
      <div className="">
        <div className="card bg-base-100 w-full shrink-0">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="text-end p-5">
              {
                <button onClick={() => setIsEditing(!isEditing)} className={`btn ${isEditing ? 'btn-primary' : 'btn-success'}`}>{isEditing ? 'save' : 'Edit'}</button>
              }
            </div>
            {/* name field */}
            <div className="form-control">
              <label className="label mr-3">
                <span className="label-text">Name</span>
              </label>
              <input
                disabled={!isEditing}
                defaultValue={name}
                type="name"
                placeholder="Your Name"
                {...register("name")}
                className="input input-bordered"
                required
              />
            </div>
            {/* email field */}
            <div className="form-control py-5">
              <label className="label mr-3">
                <span className="label-text">Email</span>
              </label>
              <input
                disabled
                defaultValue={email}
                type="email"
                placeholder="email"
                {...register("email")}
                className="input input-bordered"
                required
              />
            </div>
            {/* district dropdown */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">District</span>
              </label>
              <Controller
                control={control}
                name="district"
                render={({ field }) => {
                  return (
                    <Select
                      {...field}
                      options={districts.map((district) => ({
                        value: district.name,
                        label: district.name,
                      }))}
                      isDisabled={!isEditing}
                    ></Select>
                  );
                }}
              ></Controller>
            </div>
            {/* sub- district dropdown */}
            <div className="form-control py-5">
              <label className="label">
                <span className="label-text">Sub District</span>
              </label>
              <Controller
                control={control}
                name="subDistrict"
                render={({ field }) => {
                  return (
                    <Select
                      {...field}
                      options={subDistricts.map((subDistrict) => ({
                        value: subDistrict.name,
                        label: subDistrict.name,
                      }))}
                      isDisabled={!isEditing}
                    ></Select>
                  );
                }}
              ></Controller>
            </div>
            {/* blood group */}
            <div className="form-control">
              <label className="label">
                <span className="label-text mr-3">Blood-Group</span>
              </label>
              <select
                defaultValue={blood}
                className="select select-ghost w-full max-w-xs"
                {...register("bloodGroup")}
                disabled={!isEditing}
              >
                <option value={blood} disabled>
                  Select Group
                </option>
                <option value={"A+"}>A+</option>
                <option value={"A-"}>A-</option>
                <option value={"B+"}>B+</option>
                <option value={"B-"}>B-</option>
                <option value={"AB+"}>AB+</option>
                <option value={"AB-"}>AB-</option>
                <option value={"O+"}>O+</option>
                <option value={"O-"}>O-</option>
              </select>
            </div>
            {/* upload photo */}
            {isEditing && <div className="form-control">
              <label className="label">
                <span className="label-text">Upload Profile</span>
              </label>
              <input
                type="file"
                {...register("image")}
                className="file-input w-full max-w-xs"
              />
            </div>}
          </form>
        </div>
      </div>
    </div>
  )
}
