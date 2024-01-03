import { Link } from "react-router-dom";

function Navbar(props) {
  const { setSearch } = props;

  return (
    <>
      <nav className="flex items-center justify-between bg-gray-600 text-white py-2 px-20">
        <Link to={"/"}>
          <div className="flex items-center justify-center">
            <img src="sample_icon.png" alt="" className="w-10" />
            <h1 className="text-2xl font-bold">Kalvium Play</h1>
          </div>
        </Link>

        <form className="bg-blue-500 flex items-center space-x-1 rounded-md p-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
          </svg>
          <input
            type="text"
            placeholder="Search Box"
            className="bg-blue-500 outline-none px-1 w-96"
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>

        <div className="flex space-x-4 items-center">
          <Link to={"/register"}>
            <button className="bg-green-500 rounded-md p-1">Register</button>
          </Link>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
            <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286m1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94" />
          </svg>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
