import ItemDescription from "../components/ItemDescription";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import SingleItem from "../components/SingleItem";
import Loader from "../components/Loader";
function SinglePlant() {
  const { id } = useParams();
  const { data, isPending, error } = useFetch(
    `http://localhost:3000/plants/${id}`
  );
  return (
    <div className="site-container">
      <div  className="py-10">
        {isPending && <Loader />}
        {data && <SingleItem plant={data} key={data.id} />}
        {error && <h1>Something went wrong !!!</h1>}
      </div>
      <ItemDescription />
    </div>
  );
}

export default SinglePlant;
