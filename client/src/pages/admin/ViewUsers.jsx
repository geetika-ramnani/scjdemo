import React, { useState, useEffect } from "react";
import UserBar from "../../components/admin/UserBar";
import EditUserModal from "../../components/admin/EditUserModal";
import FetchingDots from "../../components/FetchingDots";
import { useSelector, useDispatch } from "react-redux";
import { deleteUser } from "../../../features/admin/adminActions";
import { useViewUsersQuery } from "../../../services/admin/adminService";
const ViewUsers = () => {
  const dispatch = useDispatch();
  const { loading, error, success } = useSelector((state) => state.admin);
  const [editingUser, setEditingUser] = useState(null);
  // redux adminApi
  const { data, isFetching, refetch } = useViewUsersQuery("viewUsers", {});

  // successful deletion message
  useEffect(() => {
    if (success) {
      alert("User Deleted");

      window.location.reload();
    }
  }, [success]);

  // failed deletion message
  useEffect(() => {
    if (error) {
      alert(`${error}`);
    }
  }, [error]);

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
              onEdit={() => setEditingUser(user)}
              onDelete={() => {
                const confirm = window.confirm(
                  "Are you sure you want to delete this user?",
                );
                if (confirm) {
                  dispatch(deleteUser({ email: user.email }));
                } else {
                  alert("deletion failed");
                }
              }}
            />
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-400">No users found</div>
      )}
      <div>
        {editingUser && (
          <EditUserModal
            user={editingUser}
            onClose={() => setEditingUser(null)}
          />
        )}
      </div>
    </div>
  );
};

export default ViewUsers;
