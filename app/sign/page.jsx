import SignForm from "@/components/sections/SignForm";
import { getServerSession } from "next-auth/next";
import { nextOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

const page = async () => {
  const session = await getServerSession(nextOptions);
  if (session) {
    redirect("/");
  }

  return (
    <>
      {session ? (
        <div className="pt-[120px] bg-darkBg min-h-[100vh]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-20">
            <p className="">You Are Signedin</p>
          </div>
        </div>
      ) : (
        <div className="pt-[120px] bg-darkBg min-h-[100vh]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-20">
            <SignForm />
          </div>
        </div>
      )}
    </>
  );
};

export default page;
