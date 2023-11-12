import { Link } from "react-router-dom";

function HomePage({companies}) {
  return (
    <div>
      <h1>StackTracker: Discover Tech Stacks Used by Top Companies
</h1>
<nav className="HomePage">

<ul>
<Link to={`/app.jsx${companies.slug}`}>{/* <== ADD */}
<img src={companies.logo} alt={companies.name} />
</Link>

</ul>
</nav>
    </div>
  );
}

export default HomePage;
