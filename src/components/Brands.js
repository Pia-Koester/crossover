import './Brand.css'
import {ibanez} from '../assets/brandlogos/ibanez.png'

export default function Brands() {

  return (
    <>
      <h2>Featuring the Best Brands</h2>
      <div className="brandcontainer">
          <ul className="brandlist">
              <li className="brand">
                  <img src={ibanez} alt="Ibanez"/>
              </li>
          </ul>

      </div>
    </>
  )
}