import { verifyCoach } from "@/api";
import { Button } from "@/components/base";
import { setToken } from "@/helpers";
import { useState } from "react";
import OTPInput from "react-otp-input";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function VerifyEmail() {
  const navigate = useNavigate();
  const location = useLocation();
  const { role, email } = location.state || {};

  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    try {
      const data = { email, otp, role };
      const response = await verifyCoach(data);
      await setToken(response.token);
      toast.success("Email verified successfully!");
      navigate("/dashboard");
    } catch (error) {
      toast.error("Verification failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="flex flex-col gap-1">
        <h2 className="text-2xl font-semibold">Verify Your Email</h2>
        <p className="text-sm text-grey-text">
          Enter the OTP sent to your email: {email}
        </p>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <OTPInput
          value={otp}
          onChange={setOtp}
          numInputs={4}
          renderSeparator={<div className="w-4" />}
          renderInput={(props) => (
            <input
              {...props}
              className="border border-primary/30 px-5 py-2 rounded-lg"
            />
          )}
        />
        <p className="text-sm font-medium pl-2">
          Didn't receive OTP? Resend in 2:00
        </p>
        <Button type="submit" size="lg" className="mt-4" loading={loading}>
          Continue
        </Button>
      </form>
      <Link
        to="/dashboard/register"
        className="text-primary text-center text-sm"
      >
        Back to registration page
      </Link>
      <ToastContainer />
    </>
  );
}

export default VerifyEmail;
