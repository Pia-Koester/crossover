import './categories.css'
import category1 from '../assets/category1.svg'
import category2 from '../assets/category2.svg'
import category3 from '../assets/category3.svg'
import category4 from '../assets/category4.svg'

export default function Categories() {
  return (
    <section className="categories">
      <h2>Choose based on <span>Categories</span></h2>
      <div className="guitarCategories">
        <div className="categoriesChildren">
          <img src={category1} alt="category1" />
          <p className='categoryName'>Acoustic</p>
        </div>
        <div className="categoriesChildren">
          <img src={category2} alt="category2" />
          <p className='categoryName'>Electric</p>
        </div>
        <div className="categoriesChildren">
          <img src={category3} alt="category3" />
          <p className='categoryName'>Basses</p>
        </div>
        <div className="categoriesChildren">
          <img src={category4} alt="category4" />
          <p className='categoryName'>Collections</p>
        </div>
      </div>
      
    </section>
  )
}
