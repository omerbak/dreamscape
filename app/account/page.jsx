import Account from "@/components/Account";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { nextOptions } from "../api/auth/[...nextauth]/route";

const page = async () => {
  const session = await getServerSession(nextOptions);
  if (!session) {
    redirect("/sign");
  }
  return (
    <>
      <Account session={session} />
    </>
  );
};

export default page;
