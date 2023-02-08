import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <>
      <h3>Sorry</h3>
      <p>Page not found</p>
      <Link to="/">
        <button className="mt-3 rounded-4">Back To HomePage</button>
      </Link>
    </>
  );
};

export default PageNotFound;
