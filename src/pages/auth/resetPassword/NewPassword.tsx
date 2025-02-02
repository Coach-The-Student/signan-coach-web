import { Button, Input } from "@/components/base";

function NewPassword() {
  return (
    <>
      <h2 className="text-xl font-semibold">Reset password</h2>
      <form className="flex flex-col gap-4">
        <Input placeholder="New password" />
        <Input placeholder="Confirm password" />
        <Button size="lg">Continue</Button>
      </form>
    </>
  );
}

export default NewPassword;
