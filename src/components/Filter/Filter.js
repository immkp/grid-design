import React from "react"
import "./index.css"
import { filterCategories } from "../../data"
const Filter = () => {
  return (
    <>
      <h1 class='heading'>Trending Posts</h1>
      <div class='filter'>
        <img
          class='image'
          src='https://icones.pro/wp-content/uploads/2021/05/icone-de-filtre-bleu.png'
        />
        <span class='filter-text'>Filter By Category</span>
      </div>

      <div class='main'>
        <div class='items all'>All</div>
        {filterCategories.map((item) => {
          return (
            <div className='items' key={item.id}>{item.title}</div>
          )
        })}
      </div>
    </>
  )
}

export default Filter
