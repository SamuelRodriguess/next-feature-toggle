import "../styles/globals.css";
import { FeatureToggle } from "../components/Toggle";

function MyApp({ Component, pageProps }) {
  const enabledFeatures = ["treasury_chart"];

  return(
    <FeatureToggle enabledFeatures={enabledFeatures}>
      <Component {...pageProps} />
    </FeatureToggle>
  )
}

export default MyApp;
