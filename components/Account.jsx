"use client";
import { useState } from "react";
import AuthProvider from "./AuthProvider";
import Profile from "./Profile";
import AddDestination from "./AddDestination";

const Account = ({ session }) => {
  const [selectedTab, setSelectedTab] = useState(1);

  console.log("Account client", session);
  return (
    <AuthProvider>
      <div className=" bg-darkBg min-h-[100vh] pt-[150px] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-20">
          <div className="flex flex-col md:flex-row bg-darkBg2 p-4 gap-6  mx-auto rounded-md max-w-[900px] min-h-[300px] w-full">
            <ul className="md:w-[200px]  flex md:flex-col gap-4 p-2">
              <li
                className={`p-2 rounded-md cursor-pointer   ${
                  selectedTab === 1 && "bg-mainColor"
                }`}
                onClick={() => setSelectedTab(1)}
              >
                Profile
              </li>
              <li
                className={`p-2 rounded-md cursor-pointer  ${
                  selectedTab === 2 && "bg-mainColor"
                }`}
                onClick={() => setSelectedTab(2)}
              >
                Reservations
              </li>
              {session?.user?.role === "admin" && (
                <li
                  className={`p-2 rounded-md cursor-pointer  ${
                    selectedTab === 3 && "bg-mainColor"
                  }`}
                  onClick={() => setSelectedTab(3)}
                >
                  New destination
                </li>
              )}
            </ul>
            <div className="md:text-lg ">
              {selectedTab === 1 ? (
                <Profile session={session} />
              ) : selectedTab === 3 ? (
                <AddDestination session={session} />
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </AuthProvider>
  );
};

export default Account;
