import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <section className="bg-slate-800 text-white w-screen flex justify-center items-center">
      <div className="w-full h-24 flex flex-row items-center justify-center">
        <ul className="w-3/4 h-full flex flex-row items-center justify-evenly">
          <li>
            <Link to="/">Problema 1</Link>
          </li>
          <li>
            <Link to="/two">Problema 2</Link>
          </li>
          <li>
            <Link to="/six">Problema 6</Link>
          </li>
          <li>
            <Link to="/seven">Problema 7</Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Navbar;
