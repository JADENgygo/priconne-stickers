export const Footer = (props: { className?: string }) => {
  return (
    <div
      className={`bg-dark text-center pt-3 pb-3 ${props.className}`}
    >
      <div>
        <a
          href="https://twitter.com/@JADENgygo"
          className="me-3 link link-dark"
        >
          <i className="bi bi-twitter text-light"></i>
        </a>
        <a
          href="https://priconne-portfolio.vercel.app"
          className="link-light link"
        >
          闇プリン開発室
        </a>
      </div>
      <div>画像 &copy; Cygames, Inc.</div>
    </div>
  );
};
