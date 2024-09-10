import { BrowserRouter, Route, Routes } from "react-router-dom";

import PageNotFound from "../components/PageNotFound";
import Home from "../pages/home/index";
import Settings from "../pages/settings/index";
import AboutUs from "../pages/about-us/index";
import Create from "../pages/create/index";
import LandingPage from "../pages/landing-page/index";
import Account from "../pages/acount/index";
import Contact from "../pages/contact/index";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/account" element={<Account />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
