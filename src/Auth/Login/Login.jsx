import { useContext } from "react";
import { Link } from "react-router";
import { AuthContext } from "../../Provider/AuthProvider";

const Login = () => {
  const { handleLoginWithEmailAndPassword, loading } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    const target = e.target;
    const email = target.email.value;
    const password = target.password.value;
    console.log(email, password);
    handleLoginWithEmailAndPassword(email,password)
  };

  return (
    <div className="flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

        <form onSubmit={(e)=>{handleLogin(e)}} className="space-y-4">
          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            className="w-full p-3 border rounded"
          />

          {/* Password */}
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full p-3 border rounded"
          />

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition"
          >
             {loading ? (
              <>
                <span className="loading loading-bars loading-sm text-center"></span>
              </>
            ) : (
              "Login"
            )}
          </button>
        </form>
        <div className="my-2">
          Are you new hare?{" "}
          <Link className="underline text-blue-700" to="/register">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
