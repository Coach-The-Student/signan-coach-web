import { Button } from "@/components/base";
import { useState } from "react";
import OTPInput from "react-otp-input";
import { Link, useNavigate } from "react-router-dom";

function VerifyEmail() {
  const navigate = useNavigate();

  const [otp, setOtp] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <>
      <div className="flex flex-col gap-1">
        <h2 className="text-2xl font-semibold">Verify Your Email</h2>
        <p className="text-sm text-grey-text">
          Enter the OTP sent to your phone number
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
          Didn't recieve OTP? Resend in 2:00
        </p>
        <Button type="submit" size="lg" className="mt-4">
          Continue
        </Button>
      </form>
      <Link to="/register" className="text-primary text-center text-sm">
        Back to registration page
      </Link>
    </>
  );
}

export default VerifyEmail;
