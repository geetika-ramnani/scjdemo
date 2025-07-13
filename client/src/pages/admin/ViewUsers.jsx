import React from "react";
import UserBar from "../../components/admin/UserBar"; // adjust path if needed
import FetchingDots from "../../components/FetchingDots"; // adjust path if needed
import { useViewUsersQuery } from "../../../services/admin/adminService";
const ViewUsers = () => {
  // redux adminApi
  const { data, isFetching, refetch } = useViewUsersQuery("viewUsers", {});
  console.log(data);

  return (
    <div className="min-h-screen bg-black text-white px-4 py-8 pt-16">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">User List</h2>
        <button
          onClick={refetch}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-lg transition duration-300"
        >
          Refresh
        </button>
      </div>

      {isFetching ? (
        <div className="flex justify-center items-center h-48">
          <FetchingDots />
        </div>
      ) : data?.users?.length ? (
        <div className="space-y-2">
          {data.users.map((user) => (
            <UserBar
              key={user.id}
              id={user.id}
              name={user.name}
              email={user.email}
              role={user.role}
              type={user.type}
              onEdit={() => alert(`Edit user ${user.name}`)}
              onDelete={() => alert(`Delete user ${user.name}`)}
            />
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-400">No users found</div>
      )}
    </div>
  );
};

export default ViewUsers;
