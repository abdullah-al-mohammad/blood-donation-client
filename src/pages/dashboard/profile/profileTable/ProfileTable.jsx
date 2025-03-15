
import { Link } from 'react-router-dom'
export const ProfileTable = ({ user }) => {
  const { name, email, image, district, subDistrict, blood, _id } = user

  return (
    <tr>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12">
              <img
                src={image}
                alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
        </div>
      </td>
      <td>
        <div>
          <div className="font-bold">{name}</div>
          <div className="text-sm opacity-50">{district?.value}</div>
          <div className="text-sm opacity-50">{subDistrict?.value}</div>
        </div>
      </td>
      <td>{email}</td>
      <td>{blood}</td>
      <th>
        <Link to={`/updateProfile/${_id}`}><button className="btn btn-ghost btn-xs">Update</button></Link>
      </th>
    </tr>
  )
}
