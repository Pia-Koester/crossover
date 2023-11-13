import './Brands.css'
import ibanez from '../assets/brandlogos/ibanez.png'
import martin from '../assets/brandlogos/martin.png'
import fender from '../assets/brandlogos/fender.png'
import gibson from '../assets/brandlogos/gibson.png'
import taylor from '../assets/brandlogos/taylor.png'
import gretsch from '../assets/brandlogos/gretsch.png'
import takamine from '../assets/brandlogos/takamine.png'
import seagull from '../assets/brandlogos/seagull.png'

export default function Brands() {

  return (
    <>
      <h2 className="brandh2">Featuring the <span className="brandhighlight">Best Brands</span></h2>
      <div className="brandcontainer">
          <ul className="brandlist">
              <li className="brand">
                  <img src={ibanez} alt="Ibanez"/>
              </li>
              <li className="brand">
                  <img src={martin} alt="Martin"/>
              </li>
              <li className="brand">
                  <img src={fender} alt="Fender"/>
              </li>
              <li className="brand">
                  <img src={gibson} alt="Gibson"/>
              </li>
              <li className="brand">
                  <img src={taylor} alt="Taylor"/>
              </li>
              <li className="brand">
                  <img src={gretsch} alt="Gretsch"/>
              </li>
              <li className="brand">
                  <img src={takamine} alt="Takamine"/>
              </li>
              <li className="brand">
                  <img src={seagull} alt="Seagull"/>
              </li>
          </ul>

      </div>
    </>
  )
}