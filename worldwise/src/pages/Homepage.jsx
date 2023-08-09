import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";

function Homepage() {
  return (
    <div>
      <PageNav />
      <h1> WorldWise </h1>
      <Link to="/pricing">Pricing</Link>
      {/* important to specify the slash "/"  so that the url always starts from the root  */}
    </div>
  );
}

export default Homepage;
