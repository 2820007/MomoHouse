import { useAuth0 } from "@auth0/auth0-react";


function Profile() {
  const { user } = useAuth0();
  console.log(user);
  return (
    <div   className="flex shadow-2xl shadow-gray-600 rounded-2xl  w-[60vw]   m-auto my-20 p-5 gap-x-5" >
      <div>
        <img className="w-72" src={user?.picture} alt="user_image" />
      </div>
      <div  className="p-5 text-xl  space-y-3 font-sans">
        <h1>Name:  <span  className="italic underline">{user?.name}</span>  </h1>
        <h1>Email: <span     className="italic underline">  {user?.email}  </span>  </h1>
        <h1>Email Verified: <span     className="italic underline"> {user?.email_verified && "true"}</span>    </h1>
        <hr />
        <button   className="p-3 w-44 font-bold font-sans text-white  border bg-orange-500 " >Logout</button>
      </div>
    </div>
  );
}

export default Profile;