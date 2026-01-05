import AOS from 'aos';
import 'aos/dist/aos.css';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../hooks/useAxiosSecure';
AOS.init();

const DonationsRequestDetails = () => {
  const axiosSecure = useAxiosSecure();
  const {
    _id,
    name,
    email,
    recipientName,
    district,
    subDistrict,
    bloodGroup,
    hospitalName,
    hospitalAddress,
    message,
    donationDateTime,
    status,
  } = useLoaderData();

  const handleDonate = async () => {
    const { value: formValues } = await Swal.fire({
      title: 'Donate',
      html: `
        <input id="swal-input1" placeholder='donor name' value="${name}" class="swal2-input">
        <input id="swal-input2" placeholder='donor email' value="${email}" class="swal2-input">
      `,
      focusConfirm: false,
      preConfirm: () => {
        return [
          document.getElementById('swal-input1').value,
          document.getElementById('swal-input2').value,
        ];
      },
    });
    if (formValues) {
      const [donorName, donorEmail] = formValues;

      const donorInfo = {
        status: 'inprogress',
      };

      await axiosSecure.patch(`/donations/${_id}`, 'inprogress', {
        headers: { 'Content-Type': 'text/plain' },
      });
      Swal.fire(JSON.stringify(donorInfo));
    }
  };
  return (
    <div className="py-20">
      <button
        onClick={handleDonate}
        type="button"
        className="btn btn-primary mt-3 flex justify-center"
      >
        Donate
      </button>
      <table className="table">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Email</th>
            <th>Donor</th>
            <th>Location</th>
            <th>Blood-Group</th>
            <th>Hospital Name</th>
            <th>Hospital Address</th>
            <th>Message</th>
            <th>Time & Date</th>
            <th>Status</th>
            <th>Favorite Color</th>
          </tr>
        </thead>
        <tbody>
          <tr data-aos="fade-left">
            <th></th>
            <td>{name}</td>
            <td>{email}</td>
            <td>{recipientName}</td>
            <td>
              {district.value},{subDistrict.value}
            </td>
            <td>{bloodGroup}</td>
            <td>{hospitalName}</td>
            <td>{hospitalAddress}</td>
            <td>{message}</td>
            <td>{donationDateTime}</td>
            <td>{status}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DonationsRequestDetails;
