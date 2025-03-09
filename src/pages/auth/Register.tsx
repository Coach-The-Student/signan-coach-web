import { registerCoach } from "@/api";
import { Button, Input } from "@/components/base";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Register() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validateForm = (data: any) => {
    const newErrors: { [key: string]: string } = {};
    if (!data.first_name) newErrors.first_name = "First name is required";
    if (!data.last_name) newErrors.last_name = "Last name is required";
    if (!data.email) newErrors.email = "Email is required";
    if (!data.password) newErrors.password = "Password is required";
    if (data.password !== data.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";
    return newErrors;
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
      first_name: formData.get("firstName") as string,
      last_name: formData.get("lastName") as string,
      email: formData.get("email") as string,
      password: formData.get("password") as string,
      confirmPassword: formData.get("confirmPassword") as string,
    };

    const formErrors = validateForm(data);
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setLoading(true);
    try {
      await registerCoach(data);
      toast.success(
        "Registration successful! Please check your email to verify your account."
      );
      navigate("/dashboard/verify-email", {
        state: { role: "coach", email: data.email },
      });
    } catch (error) {
      toast.error("Registration failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <h2 className="text-2xl font-semibold">Create Account</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="w-full flex gap-4">
          <Input name="firstName" label="First Name" error={errors.first_name} />
          <Input name="lastName" label="Last Name" error={errors.last_name} />
        </div>
        <Input name="email" label="Email" error={errors.email} />
        <Input name="password" type="password" label="Password" error={errors.password} />
        <Input name="confirmPassword" type="password" label="Confirm Password" error={errors.confirmPassword} />
        <Button size="lg" className="mt-4" loading={loading}>
          Continue
        </Button>
      </form>
      <div className="flex flex-col items-center gap-2 text-sm">
        <p className="text-center">
          <span className="text-grey-text">Already have an account?</span>
          <Link
            to="/dashboard/login"
            className="text-primary text-center text-sm ml-1"
          >
            Login
          </Link>
        </p>
      </div>
      <ToastContainer />
    </>
  );
}

export default Register;
