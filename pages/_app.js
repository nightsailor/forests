import "../styles/globals.css";
import { UserAuthContextProvider } from "../firebase/UserAuthContext";

function MyApp({ Component, pageProps }) {
  return (
    <UserAuthContextProvider>
      <Component {...pageProps} />
    </UserAuthContextProvider>
  );
}

export default MyApp;
