import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { sendEmailVerification, updateProfile } from "firebase/auth";
import { Link } from "react-router";

const Register = () => {
  const { handleRegisterWithEmailAndPassword, loading } =
    useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    const target = e.target;
    const name = target.name.value;
    const image = target.image.value;
    const email = target.email.value;
    const password = target.password.value;
    console.log(name, image, email, password);

    handleRegisterWithEmailAndPassword(email, password).then((res) => {
      console.log(res, "Response");

      updateProfile(res.user, { displayName: name, photoURL: image }).then(
        (res) => {
          console.log(res);
        }
      );

      sendEmailVerification(res.user).then((res) => {
        console.log(res, "email res");
      });
    });
  };

  return (
    <div className="flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Create Account</h2>

        <form
          onSubmit={(e) => {
            handleRegister(e);
          }}
          className="space-y-4"
        >
          {/* Name */}
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="w-full p-3 border rounded"
            required
          />

          {/* Image */}
          <input
            type="text"
            name="image"
            className="w-full p-2 border rounded"
            placeholder="Enter Image Link"
            required
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            className="w-full p-3 border rounded"
            required
          />

          {/* Password */}
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full p-3 border rounded"
            required
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
              "Register"
            )}
          </button>
        </form>
        <div className="my-2">
          Do you have account?{" "}
          <Link className="underline text-blue-700" to="/login">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
