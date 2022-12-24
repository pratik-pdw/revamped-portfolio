import { useTheme } from "next-themes";

export const withTheme = (Component) => {
  const WithTheme = () => {
    const { theme } = useTheme();
    return <Component theme={theme} />;
  };

  return WithTheme;
};
