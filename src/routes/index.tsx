import { lazy } from "react";
import { Routes, Route } from "react-router";
<<<<<<< HEAD
import { Dashboard } from "@/pages/dashboard";
import {
  ConfirmEmail,
  Login,
  NewPassword,
  Register,
  VerifyEmail,
} from "@/pages/auth";
import { LayoutAuth } from "@/pages/auth/layouts";
import { LayoutHeader, LayoutSidebar } from "@/layouts";
=======

const Dashboard = lazy(() => import('@/pages/dashboard/Dashboard'));
const ConfirmEmail = lazy(() => import('@/pages/auth/resetPassword/ConfirmEmail'));
const Login = lazy(() => import('@/pages/auth/Login'));
const NewPassword = lazy(() => import('@/pages/auth/resetPassword/NewPassword'));
const Register = lazy(() => import('@/pages/auth/Register'));
const VerifyEmail = lazy(() => import('@/pages/auth/VerifyEmail'));
const LayoutAuth = lazy(() => import('@/pages/auth/layouts/LayoutAuth'));
const LayoutHeader = lazy(() => import('@/layouts/LayoutHeader'));
const LayoutSidebar = lazy(() => import('@/layouts/LayoutSidebar'));
>>>>>>> origin/dev

function Router() {
  return (
    <Routes>
      {/* auth */}
      <Route element={<LayoutAuth />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="verify-email" element={<VerifyEmail />} />
        <Route path="reset-password">
          <Route path="confirm-email" element={<ConfirmEmail />} />
          <Route path="new-password" element={<NewPassword />} />
        </Route>
      </Route>

      {/* dashboard */}
      <Route element={<LayoutHeader />}>
        <Route element={<LayoutSidebar />}>
          <Route path="" element={<Dashboard />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default Router;
