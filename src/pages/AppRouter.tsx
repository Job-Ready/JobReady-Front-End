import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import PageNotFound from "./page-not-found/PageNotFound";
import Home from "../pages/home/index";
import Settings from "../pages/settings/index";
import AboutUs from "../pages/about-us/index";
import Create from "../pages/create/index";
import LandingPage from "../pages/landing-page/index";
import Account from "../pages/account/index";
import Contact from "../pages/contact/index";
import { UserProvider } from "../utils/user_context";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <UserProvider>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route
            path="/home"
            element={
              <RequireAuth>
                <Home />
              </RequireAuth>
            }
          />
          <Route
            path="/create/:id"
            element={
              <RequireAuth>
                <Create />
              </RequireAuth>
            }
          />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route
            path="/settings"
            element={
              <RequireAuth>
                <Settings />
              </RequireAuth>
            }
          />
          <Route
            path="/account"
            element={
              <RequireAuth>
                <Account />
              </RequireAuth>
            }
          />
          {/* <Route
            path="/contact"
            element={
              <RequireAuth>
                <Contact />
              </RequireAuth>
            }
          /> */}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </UserProvider>
    </BrowserRouter>
  );
};

function RequireAuth({ children }) {
  const token = localStorage.getItem("token");
  if (!token) return <Navigate to="/" />;
  return children;
}

export default AppRouter;
