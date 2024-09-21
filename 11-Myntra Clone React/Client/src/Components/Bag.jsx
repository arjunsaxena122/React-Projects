import { useSelector } from "react-redux";
import BagItems from "./BagItems";
import BagSummary from "./BagSummary";

function Bag() {
  
  const bagItems = useSelector(state=>state.bag)
  const items = useSelector(state=>state.items)

  const finalItems = items.filter(item=>{
    const itemIndex = bagItems.indexOf(item.id);
    return itemIndex>=0;
  })

  console.log(finalItems)

  if(finalItems.length === 0 ) return <div className="cartEmpty">{"Your Cart is empty"}</div>

  return (
    <main>
      <div className="bag-page">
        <div className="bag-items-container">
          {
            finalItems.map((item)=><BagItems key={item.id} item={item}/>)
          }
        </div>
        <BagSummary />
      </div>
    </main>
  );
}

export default Bag;
