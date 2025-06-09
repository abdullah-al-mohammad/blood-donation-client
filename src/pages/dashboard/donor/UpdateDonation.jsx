import { Controller, useForm } from "react-hook-form";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import Select from "react-select";
import { useLoaderData } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";


const UpdateDonation = () => {

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const { user } = useAuth()
  const axiosPublic = useAxiosPublic()
  const { donationDateTime, _id, recipientName, district, subDistrict, bloodGroup, hospitalAddress, hospitalName, message } = useLoaderData()


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
    return <div className='flex justify-center items-center h-screen'>
      <progress className="loading loading-ring loading-xl"></progress>
    </div>
  }

  const { districts = [], subDistricts = [] } = data || {};



  const onSubmit = async (data) => {

    const donationInfo = {
      name: user?.displayName,
      email: user?.email,
      recipientName: data.recipientName,
      district: data.district,
      subDistrict: data.subDistrict,
      bloodGroup: data.bloodGroup,
      hospitalName: data.hospitalName,
      hospitalAddress: data.hospitalAddress,
      message: data.message,
      donationDateTime: data.donationDateTime

    }
    const res = await axiosPublic.patch(`/donations/${_id}`, donationInfo)
    if (res.data.modifiedCount > 0) {
      refetch()
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your update has been successful",
        showConfirmButton: false,
        timer: 1500
      });
    }


  };

  return (
    <div>
      <h1 className="text-center bg-slate-400 p-5 uppercase text-2xl md:text-4xl" data-aos="fade-left">Update For Donation</h1>
      <div className="hero-content">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            {/* date field */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Date and Time</span>
              </label>
              <input
                defaultValue={donationDateTime}
                aria-label="Date and time"
                type="datetime-local"
                placeholder="donation date & time"
                {...register("donationDateTime")}
                className="input input-bordered p-10"
              />
            </div>
            {/* name field */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                defaultValue={recipientName}
                type="text"
                placeholder="recipient name"
                {...register("recipientName")}
                className="input input-bordered"
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
                defaultValue={district ? { value: district.value, label: district.label } : null}
                render={({ field }) => {
                  return (
                    <Select
                      {...field}
                      options={districts.map((district) => ({
                        value: district.name,
                        label: district.name,
                      }))}
                      styles={{ backgroundColor: "black", color: "black" }}
                    ></Select>
                  );
                }}
              ></Controller>
            </div>
            {/* sub- district dropdown */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Sub District</span>
              </label>
              <Controller
                control={control}
                name="subDistrict"
                defaultValue={district ? { value: subDistrict.value, label: subDistrict.label } : null}
                render={({ field }) => {
                  return (
                    <Select
                      {...field}
                      options={subDistricts.map((subDistrict) => ({
                        value: subDistrict.name,
                        label: subDistrict.name,
                      }))}
                    ></Select>
                  );
                }}
              ></Controller>
            </div>
            {/* blood group */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Blood-Group</span>
              </label>
              <select
                defaultValue={bloodGroup}
                className="select select-ghost w-full max-w-xs"
                {...register("bloodGroup")}
              >
                <option value={"default"} disabled>
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
            {/* hospital name */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Hospital Name</span>
              </label>
              <input
                defaultValue={hospitalName}
                placeholder="hospital name"
                type="text"
                {...register("hospitalName")}
                className="file-input w-full max-w-xs"
              />
            </div>
            {/* Address field */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Full Address</span>
              </label>
              <div className="relative">
                <input
                  defaultValue={hospitalAddress}
                  type="text"
                  placeholder="full address"
                  {...register("hospitalAddress")}
                  className="input input-bordered"
                />
              </div>
            </div>
            {/* request message field */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Request Message</span>
              </label>
              <textarea className="textarea" defaultValue={message} placeholder="request message" {...register('message')}></textarea>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Update Donation</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default UpdateDonation