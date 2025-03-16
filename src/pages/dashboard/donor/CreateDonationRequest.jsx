import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";

const CreateDonationRequest = () => {
  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm();
  const {user} = useAuth()

  const onSubmit = async (data) => {
    console.log(data);
    
  };
  return (
    <div>
      <div className="">
        <div className="hero-content">
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              {/* name field */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="name"
                  placeholder="Your Name"
                  {...register("name")}
                  className="input input-bordered"
                  required
                />
              </div>
              {/* email field */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
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
                <input
                    type="text"
                    placeholder="password"
                    {...register("password")}
                    className="input input-bordered"
                    required
                  />
              </div>
              {/* sub- district dropdown */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Sub District</span>
                </label>
                <input
                  type="text"
                  placeholder="password"
                  {...register("password")}
                  className="input input-bordered"
                  required
                />
              </div>
              {/* blood group */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Blood-Group</span>
                </label>
                <select
                  defaultValue={"default"}
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
              {/* password field */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="password"
                    {...register("password")}
                    className="input input-bordered"
                    required
                  />
                </div>
              </div>
              {/* confirm password field */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  type="password"
                  placeholder="confirm password"
                  {...register("confirmPassword")}
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateDonationRequest;
