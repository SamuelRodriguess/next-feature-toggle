import { useContext } from "react";
import { FeatureToggleContext } from "../context/FeatureToggleContext";

export const useFeatureToggle = () => {
  const { enabledFeatures } = useContext(FeatureToggleContext);

  const isEnabled = (name: string) => enabledFeatures?.includes(name);

  return [isEnabled];
};
