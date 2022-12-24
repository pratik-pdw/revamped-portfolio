import { useTheme } from "next-themes";

export const withTheme = (Component) => {
  const WithTheme = () => {
    const { resolvedTheme } = useTheme();

    return <Component theme={resolvedTheme} />;
  };

  return WithTheme;
};
