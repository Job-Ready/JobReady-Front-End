import { Header } from "../../components/layout/index";
import { Footer } from "../../components/layout/index";
import {useState} from "react";
import {getAccessToken} from "../../utils/auth";
import {Navigate} from "react-router-dom";

const Account: React.FC = () => {
    const [token, setToken] = useState<string | null>(getAccessToken());
    if (!token) {
        return <Navigate replace to="/" />;
    }
    return (
    <div>
      <Header />
      <Footer />
    </div>
  );
};

export default Account;
