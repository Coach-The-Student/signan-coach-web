import { Button, Input } from "@/components/base"

function NewPassword() {
  return (
    <section className="w-full h-screen flex flex-col gap-6 justify-center items-center">
      <h2 className="text-xl font-semibold text-center">
        Create new password
      </h2>
      <form className="w-1/4 flex flex-col gap-2">
        <Input placeholder="New password" />
        <Input placeholder="Confirm password" />
        <Button size="lg">Continue</Button>
      </form>
    </section>
  )
}

export default NewPassword