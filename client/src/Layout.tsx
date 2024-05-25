import { Outlet, useLocation } from "react-router-dom";
import PageWrapper from "@/components/general/page-wrapper";
import Header from "@/components/general/header";
import Footer from "@/components/general/footer";
import ModalProvider from "./components/providers/modal-provider";
import FlexWrapper from "./components/general/flex-wrapper";

const Layout = () => {
  const location = useLocation();
  const isAnnouncementPage = location.pathname === "/announcement";

  return (
    <>
        {/* no wrapper */}
        {isAnnouncementPage ? (
            <FlexWrapper>
                <Header />
                {/* <main className="w-full h-full flex flex-row overflow-hidden"> */}
                    <Outlet />
                {/* </main> */}
                <ModalProvider />
            </FlexWrapper>
        ) : (
            // with wrapper
            <PageWrapper>
                <Header />
                <main className="w-full min-h-[100vh] h-auto relative">
                    <Outlet />
                </main>
                <Footer />
                <ModalProvider />
            </PageWrapper>
        )}
    </>
  );
};

export default Layout;
