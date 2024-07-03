import useFetch from "../hooks/useFetch";
import { NavLink } from "react-router-dom";
import Loader from "./Loader";
import PlantsList from "./PlantsList";

function Plants() {
  const { data, isPending, error } = useFetch("http://localhost:3000/plants");
  return (
    <div className="site-container pb-10">
      <div className="flex items-center justify-between py-10">
        <h1 className="capitalize text-5xl">New plants</h1>
        <NavLink
          to="/"
          className="capitalize text-base text-white bg-light-green px-5 py-2"
        >
          Shop now
        </NavLink>
      </div>
      {isPending && <Loader />}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 place-items-center">
        {data &&
          data.slice(0, 6).map((item) => {
            return <PlantsList plant={item} key={item.id} />;
          })}
        {error && <h1>Something went wrong !!!</h1>}
      </div>
    </div>
  );
}

export default Plants;
