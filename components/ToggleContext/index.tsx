import React from "react";
import { FeatureToggleContext } from "../../context/FeatureToggleContext";

type Props = {
  children: any;
  enabledFeatures: string[];
};

export const ToggleContext = ({ children, enabledFeatures }: Props) => {
  return (
    <FeatureToggleContext.Provider value={{ enabledFeatures }}>
      {children}
    </FeatureToggleContext.Provider>
  );
};
