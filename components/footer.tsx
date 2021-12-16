export const Footer = (props: { className?: string }) => {
  return (
    <div className={ `bg-secondary bg-opacity-25 text-center pt-3 pb-3 ${ props.className }` }>
      <a href="https://twitter.com/@JADENgygo" className="me-3 link link-dark"><i className="bi bi-twitter"></i></a>
      <a href="https://princess-connect-portfolio.netlify.app" className="link link-dark">プリコネツール</a>
    </div>
  );
};
