import "@/styles/globals.css";
import theme from "@/theme";
import { ChakraProvider, localStorageManager } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import dynamic from "next/dynamic";

const NonSSRWrapper = ({ children }: any) => <>{children}</>;

const ComponentWithNoSSR = dynamic(() => Promise.resolve(NonSSRWrapper), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <ComponentWithNoSSR>
        <ChakraProvider theme={theme} colorModeManager={localStorageManager}>
          <Component {...pageProps} />
        </ChakraProvider>
      </ComponentWithNoSSR>
    </>
  );
};

export default App;
