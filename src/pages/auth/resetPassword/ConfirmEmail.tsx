import { Button, Input } from "@/components/base";
import { useState } from "react";

function ConfirmEmail() {
  const [resentLinkSent, setResetLinkSent] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setResetLinkSent(true);
  };

  if (resentLinkSent) {
    return (
      <div className="flex flex-col items-center gap-4">
        <h2 className="text-xl font-semibold text-center">Reset password</h2>
        <p className="text-sm font-medium text-center">
          Password reset link has been sent to your
          <br />
          email address
        </p>
      </div>
    );
  }
  return (
    <>
      <h2 className="text-xl font-semibold">Reset password</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <Input label="Email address" />
        <Button type="submit" size="lg" className="mt-4">
          Continue
        </Button>
      </form>
    </>
  );
}

export default ConfirmEmail;
