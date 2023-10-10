import React from 'react'
import "./subtotal.css"
import CurrencyFormat from 'react-currency-format'
import { useStatevalue } from './stateProvider'
import { getbaskettotal } from './reducer';
function Subtotal() {
  const [{basket}, dispatch] = useStatevalue();
  return (
    <div className='subtotal'>
      <CurrencyFormat
       renderText={(value)=>(<>
       <p>
        subtotal {basket?.length}: <strong>{value}</strong>
      </p>
      <small className='subtotal_gift'>
       <input type="checkbox"/> this order contain a gift
        </small>
       </>
       )}
       decimalScale={2}
       value={getbaskettotal(basket)}
       displayType={'text'}
       thousandSeparator={true}
       prefix={'$'}
       />
      <CurrencyFormat/>
      <button>
        proceed to checkout
      </button>
      
    </div>
  )
}

export {Subtotal}
