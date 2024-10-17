export default function ProfileDetails() {
  return (
    <div className=" grid lg:grid-cols-2 gap-5">
      <div  className=" p-5 rounded-md bg-gray-200">
        <h2 className=" text-2xl text-center font-semibold mb-5 uppercase">Information</h2>
        <p>
          <span className=" font-bold capitalize">phone number : </span>017********
        </p>
        <p>
          <span className=" font-bold capitalize">Email Address : </span>Abc@gamil.com
        </p>
      </div>

      <div className=" p-5 rounded-md bg-gray-200">
        <h2 className=" text-2xl text-center font-semibold mb-5 uppercase">Full Address</h2>
        <p>
        <span className=" font-bold capitalize">Address : - </span>Sangbadik residentiial Area, Kalsi Road, Mirpur 11, Dhaka-1216
        </p>
        
      </div>

      
    </div>
  );
}
