import { LayoutFooter } from "@/layouts";
import CoachOrClient from "@/pages/auth/CoachOrClient";
import { lazy } from "react";
import { Route, Routes } from "react-router";

const Home = lazy(() => import("@/pages/landing-page/home/Home"));
const Dashboard = lazy(() => import("@/pages/dashboard/Dashboard"));
const ConfirmEmail = lazy(
  () => import("@/pages/auth/resetPassword/ConfirmEmail")
);
const Login = lazy(() => import("@/pages/auth/Login"));
const NewPassword = lazy(
  () => import("@/pages/auth/resetPassword/NewPassword")
);
const Register = lazy(() => import("@/pages/auth/Register"));
const VerifyEmail = lazy(() => import("@/pages/auth/VerifyEmail"));
const LayoutAuth = lazy(() => import("@/pages/auth/layouts/LayoutAuth"));
const LayoutDashboardHeader = lazy(
  () => import("@/layouts/LayoutDashboardHeader")
);
const LayoutHeader = lazy(() => import("@/layouts/LayoutHeader"));
const LayoutDashboardSidebar = lazy(
  () => import("@/layouts/LayoutDashboardSidebar")
);
const BecomeCoach = lazy(
  () => import("@/pages/landing-page/become-coach/BecomeCoach")
);
const FindCoach = lazy(
  () => import("@/pages/landing-page/find-coach/FindCoach")
);

function Router() {
  return (
    <Routes>
      {/* landing page */}
      <Route element={<LayoutHeader />}>
        <Route element={<LayoutFooter />}>
          <Route path="" element={<Home />} />
          <Route path="/become-coach" element={<BecomeCoach />} />
          <Route path="/find-coach" element={<FindCoach />} />
        </Route>
      </Route>

      {/* auth */}
      <Route path="/dashboard">
        <Route element={<LayoutAuth />}>
          <Route path="coach-or-client" element={<CoachOrClient />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="verify-email" element={<VerifyEmail />} />
          <Route path="reset-password">
            <Route path="confirm-email" element={<ConfirmEmail />} />
            <Route path="new-password" element={<NewPassword />} />
          </Route>
        </Route>

        {/* dashboard */}
        <Route element={<LayoutDashboardHeader />}>
          <Route element={<LayoutDashboardSidebar />}>
            <Route path="" element={<Dashboard />} />
          </Route>
        </Route>
      </Route>
    </Routes>
  );
}

export default Router;
