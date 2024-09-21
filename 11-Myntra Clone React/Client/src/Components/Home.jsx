import { useSelector } from "react-redux";
import DisplayItems from "./DisplayItems";

function Home() {
  const items = useSelector((state) => state.items);

  return (
  <div className="display-items">
  {
    items.map((item)=>(<DisplayItems key={item.id} item={item}/>))
  }
  </div>
  );
}

export default Home;
