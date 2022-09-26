import "../styles/globals.css";
import type { AppType } from "next/dist/shared/lib/utils";
import { SessionProvider } from "next-auth/react";
import Header from "components/templates/header";
import HeaderDrawer from "components/templates/headerDrawer";
import Footer from "components/templates/footer";
import Apollo from "components/contexts/apollo";

const MyApp: AppType = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <Apollo>
        <HeaderDrawer>
          <Header />
          <Component {...pageProps} />
          <Footer />
        </HeaderDrawer>
      </Apollo>
    </SessionProvider>
  );
};

export default MyApp;
