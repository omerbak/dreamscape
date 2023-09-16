import { getServerSession } from "next-auth";
import DestinationsClient from "@/components/DestinationsClient";
import { redirect } from "next/navigation";
import { nextOptions } from "../api/auth/[...nextauth]/route";
const page = async () => {
  const session = await getServerSession(nextOptions);
  if (!session) {
    redirect("/sign");
  }
  return (
    <>
      <DestinationsClient />
    </>
  );
};

export default page;
