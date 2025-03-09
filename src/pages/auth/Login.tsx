import { login } from "@/api";
import { Button, Input } from "@/components/base";
import { setToken } from "@/helpers";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const validateForm = (data: any) => {
    const newErrors: { [key: string]: string } = {};
    if (!data.email) newErrors.email = "Email is required";
    if (!data.password) newErrors.password = "Password is required";
    return newErrors;
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const data = { email, password };
    
    const formErrors = validateForm(data);
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }
    
    setLoading(true);
    try {
      const response = await login(data);
      setToken(response.token);
      toast.success("Login successful!");
      navigate("/dashboard");
    } catch (error) {
      toast.error("Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <h2 className="text-2xl font-semibold">Sign In</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <Input
          label="Email address"
          type="email"
          value={email}
          error={errors.email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          label="Password"
          type="password"
          value={password}
          error={errors.password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button size="lg" className="mt-4" loading={loading}>
          Continue
        </Button>
      </form>
      <div className="flex flex-col items-center gap-2 text-sm">
        <Link
          to="/dashboard/reset-password/confirm-email"
          className="text-primary text-center text-sm"
        >
          Forgot password?
        </Link>
        <p className="text-center">
          <span className="text-grey-text">Don't have an account?</span>
          <Link
            to="/dashboard/register"
            className="text-primary text-center text-sm ml-1"
          >
            Create Account
          </Link>
        </p>
      </div>
      <ToastContainer />
    </>
  );
}

export default Login;
