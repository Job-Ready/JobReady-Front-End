import { BrowserRouter, Route, Routes } from "react-router-dom";

import PageNotFound from "./components/PageNotFound";
import Home from "@pages/home";
import Settings from "@pages/settings";
import AboutUs from "@pages/about-us";
import Create from "@pages/create";
import LandingPage from "@pages/landing-page";
import Design from "@components/design";

const AppRouter = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/design" element={<Design />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/settings" element={<Settings />} />
        {/* <Route path="/account" element={<Account />} /> */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter;
