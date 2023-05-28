"use client"
import React from "react"
import { cards } from "../../data"

const Card = () => {
  return (
    <div className='main-cards'>
      {cards.map((card) => {
        return (
          <div className='cards' key={card.id}>
            <img className='card-image' src={card.image}q1/>
            <div className='text-section'>
              <div className='title'>{card.title}</div>
              <div className='author-container'>
                <span className='author'>{card.authorname}</span>
                <span className='date'>{card.posted_on}</span>
              </div>
              <div className='description'>{card.description}</div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Card
