"use client";
import useSWR from "swr";
import ReservationCard from "./MyReservationCard";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const MyReservations = ({ session }) => {
  const userEmail = session?.user?.email;
  const { data, error, isLoading, mutate } = useSWR(
    `http://localhost:3001/destinations/getMyDestinations?userEmail=${userEmail}`,
    fetcher
  );

  if (error)
    return (
      <div>
        <p>Server error, can't get your reservations at the moment</p>
      </div>
    );
  if (isLoading)
    return (
      <div>
        <p>Loading...</p>
      </div>
    );

  return (
    <div className="flex flex-wrap w-full ">
      {data.length > 0 ? (
        data.map((result) => (
          <ReservationCard
            result={result}
            userEmail={userEmail}
            mutate={mutate}
          />
        ))
      ) : (
        <p className="text-center ">You don't any have reservation currently</p>
      )}
    </div>
  );
};

export default MyReservations;
