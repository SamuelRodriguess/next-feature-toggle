import "../styles/globals.css";
import { ToggleContext } from "../components/ToggleContext";
import { useCallback, useEffect, useState } from "react";
import { fetchToggleData } from "../service/getToggleData";

function MyApp({ Component, pageProps }) {
  const [toggleValue, setToggle] = useState<string[]>([]);

  const processFeatures = useCallback(async () => {
    const response = await fetchToggleData();

    setToggle(response);
  }, []);

  useEffect(() => {
    processFeatures();
  }, []);

  return (
    <ToggleContext enabledFeatures={toggleValue}>
      <Component {...pageProps} />
    </ToggleContext>
  );
}

export default MyApp;
