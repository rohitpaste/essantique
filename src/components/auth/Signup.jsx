import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      // ✅ No redirect, profile page will auto-update after signup
    } catch (error) {
      setMessage(error.message);
    }
  };

  return (
    <form onSubmit={handleSignup}>
      <h2 className="text-2xl font-semibold mb-4 text-center">Sign Up</h2>
      <input
        type="email"
        placeholder="Email"
        className="w-full mb-3 p-2 border rounded"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        className="w-full mb-3 p-2 border rounded"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button
        type="submit"
        className="w-full bg-orange-600 text-white py-2 rounded hover:bg-orange-700"
      >
        Sign Up
      </button>
      {message && <p className="mt-3 text-sm text-red-500 text-center">{message}</p>}
    </form>
  );
};

export default Signup;
