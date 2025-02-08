import AuthImage from "@/assets/images/auth-create.svg";
import { Outlet } from "react-router-dom";

function LayoutAuth() {
  return (
    <section className="w-full h-screen flex items-center justify-center md:justify-between overflow-hidden px-4 lg:px-0">
      <aside className="w-full h-screen hidden lg:flex justify-center items-center relative">
        <img className="object-cover w-full h-full" src={AuthImage} />
        <div
          className="absolute w-full bottom-0 h-1/2 p-16 flex flex-col justify-end gap-2"
          style={{
            background: "linear-gradient(180deg, transparent, #0052CC)",
          }}
        >
          <h1 className="text-white text-3xl font-bold">
            Personalized Coaching Tailored
            <br />
            for You
          </h1>
          <p className="text-white text-sm">
            Create your account to access personalized sessions, tools, and
            resources designed to
            <br />
            help you grow
          </p>
        </div>
      </aside>
      <main className="w-full md:w-3/4 lg:w-full flex flex-col items-center">
        <div className="w-full md:w-3/4 lg:w-1/2 flex flex-col gap-6">
          <Outlet />
        </div>
      </main>
    </section>
  );
}

export default LayoutAuth;
