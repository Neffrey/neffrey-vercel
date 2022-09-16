import "../styles/globals.css";
import type { AppType } from "next/dist/shared/lib/utils";
import { SessionProvider } from "next-auth/react";
import Header from "components/templates/header";
import HeaderDrawer from "components/templates/headerDrawer";
import Footer from "components/templates/footer";

const MyApp: AppType = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <HeaderDrawer>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </HeaderDrawer>
    </SessionProvider>
  );
};

export default MyApp;
