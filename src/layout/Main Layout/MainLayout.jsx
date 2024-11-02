import { Outlet, useNavigation } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Loading from "../../components/Loading/Loading";
import ScrollTop from "../../components/ScrollTop";

const MainLayout = () => {
  const navigation = useNavigation();
  return (
    <div>
      <Header />
      <main>
        {navigation.state === "loading" && <Loading />}
        <ScrollTop />
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
