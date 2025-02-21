import React, { PropsWithChildren, useEffect } from "react";
import { UnistylesRuntime, UnistylesThemes } from "react-native-unistyles";

const TestUIProvider: React.FC<
  PropsWithChildren<{ colorMode?: keyof UnistylesThemes }>
> = ({ children, colorMode = "light" }) => {
  useEffect(() => {
    if (UnistylesRuntime.themeName !== colorMode) {
      UnistylesRuntime.setTheme(colorMode === "dark" ? "dark" : "light");
    }
  }, [colorMode]);
  return children;
};

export default TestUIProvider;
