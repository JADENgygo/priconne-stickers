import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export const useTheme = () => {
  const router = useRouter();
  const [theme, setTheme] = useState<"light" | "dark">("light");
  useEffect(() => {
    const theme = router.query.theme as string;
    if (theme !== "light" && theme !== "dark") {
      return;
    }
    setTheme(theme);
  }, [router]);
  return theme;
};
