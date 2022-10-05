import { useTheme } from "../lib/useTheme";

export const Footer = (props: { className?: string }) => {
  const theme = useTheme();
  return (
    <div
      className={`text-center pt-3 pb-3 ${props.className}`}
    >
      <div>
        <a
          href="https://twitter.com/@JADENgygo"
          className="me-3"
        >
          <i className="bi bi-twitter"></i>
        </a>
        <a
          href={"https://priconne-portfolio.vercel.app?theme=" + theme}
          className={`link ${theme === "light" ? "link-dark" : "link-light"}`}
        >
          闇プリン開発室
        </a>
      </div>
      <div>画像 &copy; Cygames, Inc.</div>
    </div>
  );
};
