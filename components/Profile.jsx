import { useSession } from "next-auth/react";

const Profile = ({ session }) => {
  /*  const { data: session, status } = useSession();
  console.log("profile", session, status); 
  if (status === "loading") {
    return <div className="text-center">Loading</div>;
  }
*/
  return (
    <div className="">
      <div className="mb-3">
        <span className="block  font-semibold ">Email</span>
        <span className="text-gray-300">{session?.user?.email}</span>
      </div>
      <div className="mb-3">
        <span className="block  font-semibold ">Password</span>
        <span className="text-gray-300">
          {session.user.password ? session.user.password : "No password"}
        </span>
      </div>
      <div className="mb-3">
        <span className="block  font-semibold ">Role</span>
        <span className="text-gray-300">
          {session.user.role ? session.user.role : "no role"}
        </span>
      </div>
    </div>
  );
};

export default Profile;
