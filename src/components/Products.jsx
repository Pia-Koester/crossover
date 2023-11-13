import './products.css'
import guitar1 from '../assets/guitar1.svg'
import guitar2 from '../assets/guitar2.svg'
import guitar3 from '../assets/guitar3.svg'
import guitar4 from '../assets/guitar4.svg'
import guitar5 from '../assets/guitar5.svg'
import guitar6 from '../assets/guitar6.svg'

export default function Products() {
  return (
    <section className="products">
      <h2>Check out the <span>Store</span></h2>
      <div className="new">
      <div className="header">
      <p className='guitarHeader'>NEW ON THE BOARD</p>
      <p>view all</p>

      </div>
      <div className="guitars">

        <div className="guitar">
          <img src={guitar1} alt="guitar1" />
          <p className='guitarName'>The Essential Les Paul</p>
          <p className='guitarPrice'>$1,299.00</p>
        </div>
        <div className="guitar">
          <img src={guitar2} alt="guitar1" />
          <p className='guitarName'>The Essential Les Paul</p>
          <p className='guitarPrice'>$1,299.00</p>
        </div>
        <div className="guitar">
          <img src={guitar3} alt="guitar1" />
          <p className='guitarName'>The Essential Les Paul</p>
          <p className='guitarPrice'>$1,299.00</p>
        </div>
      </div>
      </div>
      <div className="new">
      <div className="header">
      <p className='guitarHeader'>Top Selling</p>
      <p>view all</p>

      </div>
      <div className="guitars">

        <div className="guitar">
          <img src={guitar4} alt="guitar1" />
          <p className='guitarName'>Active Precision Bass® PH V</p>
          <p className='guitarPrice'>$4,199.00</p>
        </div>
        <div className="guitar">
          <img src={guitar5} alt="guitar1" />
          <p className='guitarName'>Redondo Special</p>
          <p className='guitarPrice'>$2,800.00</p>
        </div>
        <div className="guitar">
          <img src={guitar6} alt="guitar1" />
          <p className='guitarName'>Professional II Stratocaster®</p>
          <p className='guitarPrice'>$3,199.00</p>
        </div>
      </div>
      </div>
    </section >
  )
}
