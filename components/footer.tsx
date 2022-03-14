export const Footer = (props: { className?: string }) => {
  return (
    <div
      className={`bg-secondary bg-opacity-25 text-center pt-3 pb-3 ${props.className}`}
    >
      <div className="pb-3">
        <a
          href="https://twitter.com/@JADENgygo"
          className="me-3 link link-dark"
        >
          <i className="bi bi-twitter"></i>
        </a>
        <a
          href="https://priconne-portfolio.vercel.app"
          className="link link-dark"
        >
          プリコネツール
        </a>
      </div>
      <div>画像: (C) Cygames, Inc.</div>
    </div>
  );
};
