// import { useLoaderData, useParams } from "react-router-dom"
// import { useState } from "react";
// import { useQuery } from "@tanstack/react-query";
// import useAxiosPublic from "../../../../hooks/useAxiosPublic";
// import { Controller, useForm } from "react-hook-form";
// // import { Select } from "react-select";
// import Swal from "sweetalert2";


// export const UpdateProfile = () => {
//   const { id } = useParams()
//   console.log(id);
//   const { _id, name, email, image, district, subDistrict, blood } = useLoaderData()

//   const [isEditing, setIsEditing] = useState(false)
//   const axiosPublic = useAxiosPublic()

//   const {
//     register,
//     handleSubmit,
//     control,
//     watch,
//     formState: { errors },
//   } = useForm();

//   // district subdistrict fetch json data file
//   const { data = {}, isLoading: loading } = useQuery({
//     queryKey: ["district"],
//     queryFn: async () => {
//       const [district, subDistrict] = await Promise.all([
//         fetch("district.json").then((res) => res.json()),
//         fetch("sub-district.json").then((res) => res.json()),
//       ]);
//       return { districts: district, subDistricts: subDistrict };
//     },
//   });
//   if (loading) {
//     return <span>loading....</span>;
//   }

//   const { districts = [], subDistricts = [] } = data || {};


//   const onSubmit = async (data) => {
//     console.log(data);
//     const email = data.email;
//     const name = data.name;
//     const formData = new FormData();
//     formData.append("image", data.image[0]);
//     const res = await axiosPublic.post(image_hosting_api, formData, {
//       headers: { "content-type": "multipart/form-data" },
//     });

//     if (res.data.success) {
//       const imageUrl = res.data.data.display_url;
//       Swal.fire({
//         position: "top-end",
//         icon: "success",
//         title: "Your update has been successfully",
//         showConfirmButton: false,
//         timer: 1500
//       });
//       const userInfo = {
//         name: name,
//         email: email,
//         image: imageUrl,
//         district: data.district,
//         subDistrict: data.subDistrict,
//         blood: data.bloodGroup,
//       };
//       await axiosPublic.patch(`/users/${_id}`, userInfo);
//       setIsEditing(false)
//     }
//   };
//   return (
//     <div className="hero bg-base-200 min-h-screen">
//       <div className="hero-content flex-col lg:flex-row-reverse">
//         <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
//           <div>
//             {
//               <button onClick={() => setIsEditing(!isEditing)} className={`btn ${isEditing ? 'btn-active' : 'btn-disabled'}`}>{isEditing ? 'save' : 'Edit'}</button>
//             }
//           </div>
//           <form onSubmit={handleSubmit(onSubmit)} className="card-body">
//             {/* name field */}
//             <div className="form-control">
//               <label className="label">
//                 <span className="label-text">Name</span>
//               </label>
//               <input
//                 disabled={!isEditing}
//                 defaultValue={name}
//                 type="name"
//                 placeholder="Your Name"
//                 {...register("name")}
//                 className="input input-bordered"
//                 required
//               />
//             </div>
//             {/* email field */}
//             <div className="form-control">
//               <label className="label">
//                 <span className="label-text">Email</span>
//               </label>
//               <input
//                 disabled
//                 defaultValue={email}
//                 type="email"
//                 placeholder="email"
//                 {...register("email")}
//                 className="input input-bordered"
//                 required
//               />
//             </div>
//             {/* district dropdown */}
//             <div className="form-control">
//               <label className="label">
//                 <span className="label-text">District</span>
//               </label>
//               <Controller
//                 control={control}
//                 defaultValue={{ value: district, label: district }}
//                 disabled={!isEditing}
//                 name="district"
//                 render={({ field }) => {
//                   return (
//                     <Select
//                       {...field}
//                       options={districts.map((district) => ({
//                         value: district.name,
//                         label: district.name,
//                       }))}
//                       isDisabled={!isEditing}
//                     ></Select>
//                   );
//                 }}
//               ></Controller>
//             </div>
//             {/* sub- district dropdown */}
//             <div className="form-control">
//               <label className="label">
//                 <span className="label-text">Sub District</span>
//               </label>
//               <Controller
//                 control={control}
//                 defaultValue={subDistrict}
//                 disabled={!isEditing}
//                 name="subDistrict"
//                 render={({ field }) => {
//                   return (
//                     <Select
//                       {...field}
//                       options={subDistricts.map((subDistrict) => ({
//                         value: subDistrict.name,
//                         label: subDistrict.name,
//                       }))}
//                       isDisabled={!isEditing}
//                     ></Select>
//                   );
//                 }}
//               ></Controller>
//             </div>
//             {/* blood group */}
//             <div className="form-control">
//               <label className="label">
//                 <span className="label-text">Blood-Group</span>
//               </label>
//               <select
//                 defaultValue={blood}
//                 className="select select-ghost w-full max-w-xs"
//                 {...register("bloodGroup")}
//                 disabled={!isEditing}
//               >
//                 <option value={"default"} disabled>
//                   Select Group
//                 </option>
//                 <option value={"A+"}>A+</option>
//                 <option value={"A-"}>A-</option>
//                 <option value={"B+"}>B+</option>
//                 <option value={"B-"}>B-</option>
//                 <option value={"AB+"}>AB+</option>
//                 <option value={"AB-"}>AB-</option>
//                 <option value={"O+"}>O+</option>
//                 <option value={"O-"}>O-</option>
//               </select>
//             </div>
//             {/* upload photo */}
//             {isEditing && <div className="form-control">
//               <label className="label">
//                 <span className="label-text">Upload Profile</span>
//               </label>
//               <input
//                 defaultValue={image}
//                 type="file"
//                 {...register("image")}
//                 className="file-input w-full max-w-xs"
//               />
//             </div>}
//             {/* <div className="form-control mt-6">
//               <button className="btn btn-primary">Register</button>
//             </div> */}
//           </form>
//         </div>
//       </div>
//     </div>
//   )
// }
