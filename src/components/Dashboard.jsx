import React from "react";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const { session, signOut } = UserAuth();
  const navigate = useNavigate();

  const handleSignOut = async (e) => {
    e.preventDefault();
    try {
      await signOut();
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <h2>Welcome, {session?.user?.email}</h2>
      <p
        onClick={handleSignOut}
        className="hover:cursor-pointer px-4 py-3 border inline-block"
      >
        Sign Out
      </p>
    </div>
  );
};

export default Dashboard;
