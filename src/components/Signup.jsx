import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Signup = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState();

  const { session, signUpNewUser } = UserAuth();
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const result = await signUpNewUser(email, password);
      if (result.success) {
        navigate("/dashboard");
      }
    } catch (err) {
      setError("an error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSignUp} className="max-w-md m-auto pt-24">
        <h2 className="font-bold pb-2">Sign up today!</h2>
        <p>
          Already have an account? <Link to="/signin">Sign in!</Link>{" "}
        </p>
        <div className="flex flex-col py-4">
          <input
            onChange={(e) => setEmail(e.target.value)}
            className="p-3 mt-6"
            placeholder="Email"
            type="email"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            className="p-3 mt-6"
            placeholder="Password"
            type="password"
          />
          <button className="mt-6" type="submit">
            Sign Up
          </button>
          {error && <p className="text-red-500">{error}</p>}
        </div>
      </form>
    </div>
  );
};

export default Signup;
