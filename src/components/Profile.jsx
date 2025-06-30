import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";

const Profile = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
      setError("");
      setLoginEmail("");
      setLoginPassword("");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, signupEmail, signupPassword);
      setError("");
      setSignupEmail("");
      setSignupPassword("");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleLogout = async () => {
    await auth.signOut();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md relative overflow-y-auto max-h-[90vh]">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-red-600 text-xl"
          onClick={() => navigate(-1)}
        >
          &times;
        </button>

        {/* If Logged In */}
        {user ? (
          <>
            <h2 className="text-2xl font-bold mb-4">My Profile</h2>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>UID:</strong> {user.uid}</p>
            <p><strong>Account Created:</strong> {user.metadata.creationTime}</p>

            <button
              className="mt-6 px-4 py-2 bg-red-500 text-white rounded w-full hover:bg-red-600"
              onClick={handleLogout}
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <h2 className="text-2xl font-bold mb-4 text-center">Login or Sign Up</h2>

            {error && <p className="text-red-500 text-center mb-3">{error}</p>}

            <div className="grid grid-cols-1 gap-6">
              {/* Login Form */}
              <div>
                <h3 className="text-xl font-semibold mb-2">Login</h3>
                <form onSubmit={handleLogin}>
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full mb-3 px-3 py-2 border rounded"
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                    required
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    className="w-full mb-3 px-3 py-2 border rounded"
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                    required
                  />
                  <button
                    type="submit"
                    className="w-full bg-yellow-500 text-black py-2 rounded hover:bg-black hover:text-yellow-400 transition"
                  >
                    Login
                  </button>
                </form>
              </div>

              {/* Signup Form */}
              <div>
                <h3 className="text-xl font-semibold mb-2">Sign Up</h3>
                <form onSubmit={handleSignup}>
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full mb-3 px-3 py-2 border rounded"
                    value={signupEmail}
                    onChange={(e) => setSignupEmail(e.target.value)}
                    required
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    className="w-full mb-3 px-3 py-2 border rounded"
                    value={signupPassword}
                    onChange={(e) => setSignupPassword(e.target.value)}
                    required
                  />
                  <button
                    type="submit"
                    className="w-full bg-orange-600 text-white py-2 rounded hover:bg-orange-700"
                  >
                    Sign Up
                  </button>
                </form>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Profile;
