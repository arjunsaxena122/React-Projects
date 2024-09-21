import React from 'react'
import { useSelector } from 'react-redux'


function BagSummary() {

  const bagItems = useSelector(state=>state.bag)
  const items = useSelector(state=>state.items)

  console.log(bagItems)

  let totalDiscount = 0
  let totalMRP = 0 

  const finalItems = items.filter(item=>{
    const itemIndex = bagItems.indexOf(item.id);
    return itemIndex>=0;
  })

  console.log(finalItems)

  finalItems.map((item)=>{
    console.log(item)
    console.log(item.original_price)
    totalMRP += item.original_price;
    totalDiscount += item.original_price - item.current_price
  })

 
  let finalPayment = totalMRP - totalDiscount + 99
  

  return (
    <div className='bag-summary'>
      <div className="bag-details-container">
        <div className="price-header">PRICE DETAILS ({bagItems.length} Items) </div>
        <div className="price-item">
          <span className="price-item-tag">Total MRP</span>
          <span className="price-item-value">₹{totalMRP}</span>
        </div>
        <div className="price-item">
          <span className="price-item-tag">Discount on MRP</span>
          <span className="price-item-value priceDetail-base-discount">
            -₹{totalDiscount}
          </span>
        </div>
        <div className="price-item">
          <span className="price-item-tag">Convenience Fee</span>
          <span className="price-item-value">₹99</span>
        </div>
        <hr />
        <div className="price-footer">
          <span className="price-item-tag">Total Amount</span>
          <span className="price-item-value">₹{finalPayment}</span>
        </div>
      </div>
      <button className="btn-place-order">
        <div className="css-xjhrni">PLACE ORDER</div>
      </button>
    </div>
  )
}

export default BagSummary
