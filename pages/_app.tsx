import "../styles/globals.css";
import { FeatureToggle } from "../components/Toggle";
import { useCallback, useEffect, useState } from "react";
import { fetchFeatures } from "../service/getToggleData";

function MyApp({ Component, pageProps }) {
  const [enabledFeatures, setFeatures] = useState<string[]>([]);

  const processFeatures = useCallback(async () => {
    const featuresResponse = await fetchFeatures();

    setFeatures(featuresResponse);
  }, []);

  useEffect(() => {
    processFeatures();
  }, []);

  return(
    <FeatureToggle enabledFeatures={enabledFeatures}>
      <Component {...pageProps} />
    </FeatureToggle>
  )
}

export default MyApp;
