import { useQuery } from "@tanstack/react-query";
import { Controller, set, useForm } from "react-hook-form";
import Select from "react-select";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

// image hosting api key
const image_hosting_key = import.meta.env.VITE_IMAGE_API_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const Register = () => {

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const { registerUser, updateUserProfile } = useAuth();
  const axiosPublic = useAxiosPublic();
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState()

  const { data = {}, isLoading: loading } = useQuery({
    queryKey: ["district"],
    queryFn: async () => {
      const [district, subDistrict] = await Promise.all([
        fetch("district.json").then((res) => res.json()),
        fetch("sub-district.json").then((res) => res.json()),
      ]);
      return { districts: district, subDistricts: subDistrict };
    },
  });
  if (loading) {
    return <span>loading....</span>;
  }

  const { districts = [], subDistricts = [] } = data || {};
  // console.log(data);

  const onSubmit = async (data) => {
    const email = data.email;
    const password = data.password;
    const confirmPass = data.confirmPassword;
    const name = data.name;
    const formData = new FormData();
    formData.append("image", data.image[0]);

    if (password !== confirmPass) {
      return setError("password don't match");
    } else {
      setError("")
    }
    registerUser(email, password)
      .then(async (Result) => {
        const res = await axiosPublic.post(image_hosting_api, formData, {
          headers: { "content-type": "multipart/form-data" },
        });

        if (res.data.success) {
          const imageUrl = res.data.data.display_url;
          updateUserProfile(name, imageUrl);
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your account has been created successfully",
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
          await axiosPublic.post("/users", userInfo);

        }
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className="pt-20">
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register as a donor!</h1>
            <p className="py-6">
              Blood donation is a life-saving act that helps patients in need of transfusions due to accidents, surgeries, childbirth complications, cancer treatments, and chronic illnesses like anemia or blood disorders. A single blood donation can save up to three lives
            </p>
          </div>
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
                  {...register("name", { required: true })}
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
                  {...register("email", { required: true })}
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
                        required
                        {...field}
                        options={districts.map((district) => ({
                          value: district.name,
                          label: district.name,
                        }))}
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
                  render={({ field }) => {
                    return (
                      <Select
                        required
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
                  defaultValue={"default"}
                  className="select select-ghost w-full max-w-xs"
                  {...register("bloodGroup", { required: true })}
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
                  {...register("image", { required: true })}
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
                    type={showPassword ? "text" : "password"}
                    placeholder="password"
                    {...register("password", { required: true, minLength: 6, maxLength: 20, pattern: { value: /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[\W])/, message: "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character, and be 6-20 characters long." } })}
                    className="input input-bordered"
                    required
                  />
                  <p className="absolute right-7 bottom-3" onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                  </p>
                </div>
                {errors.password?.type === 'required' && <span className="text-red-500">password is required</span>}
                {errors.password?.type === 'minLength' && <span className="text-red-500">password must be 6 characters</span>}
                {errors.password?.type === 'maxLength' && <span className="text-red-500">password must be less than 20 characters</span>}
                {errors.password?.type === 'pattern' && <span className="text-red-500">Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character.</span>}
              </div>
              {/* confirm password field */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  type="password"
                  placeholder="confirm password"
                  {...register("confirmPassword", { required: true })}
                  className="input input-bordered"
                  required
                />
                {errors.confirmPassword && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.confirmPassword.message}
                  </p>
                )}
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              {<p className="text-red-500">{error ? error : ''}</p>}
              <div className="form-control mt-6">
                <button className="btn  bg-bold_red-0 border-bold_red-0 transition duration-500 ease-in-out hover:bg-white hover:text-bold_red-0 px-8">Register</button>
              </div>
            </form>
            <p className="p-5">Already have an account please ? <Link className="text-success" to={'/login'}>Login</Link> </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
