import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Simulated user data (replace with backend integration in production)
  const mockUser = {
    email: "user@example.com",
    password: "securepassword", // This is stored insecurely, only for demo purposes
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    // Check credentials
    if (email === mockUser.email && password === mockUser.password) {
      alert("Login successful!");
      localStorage.setItem("isAuthenticated", true); // Save auth status
      window.location.href = "/mydashboard"; // Redirect to another page
    } else {
      setError("Invalid email or password!");
    }
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <form
        className="bg-[#F11E79] p-10 flex flex-col gap-y-4"
        onSubmit={handleSubmit}
      >
        <h1 className="text-[#1CC616] font-bold">Sign In</h1>
        {error && <p>{error}</p>}
        <label className="text-white" htmlFor="email">
          Email
        </label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="p-2 rounded"
        />
        <label className="text-white" htmlFor="password">
          Password
        </label>
        <input
          type="password"
          id="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="p-2 rounded"
        />
        <button
          type="submit"
          className="bg-[#1CC616] p-2 rounded text-white font-bold"
        >
          Sign In
        </button>
      </form>
    </div>
  );
};

export default Login;
