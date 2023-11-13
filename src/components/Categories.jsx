import './categories.css'
import category1 from '../assets/category1.svg'

export default function Categories() {
  return (
    <section className="categories">
      <h2>Choose based on <span>Categories</span></h2>
      <div className="guitarCategories">
        <div className="categoriesChildren">
          <img src={category1} alt="category1" />
          <p className='categoryName'>Acoustic</p>
        </div>
      </div>
      
    </section>
  )
}
