"use client"
import React, { useState } from "react"
import "./header.css"

const Header = () => {
  return (
    <div className='header'>
      <div className='logo-explore'>
        <div className='stories'>
          <div className='logo'>EDYODA</div>
          <p className='logo-stories-text'>Stories</p>
        </div>
        <div className=' dropflex'>
          <div className='dropdowntext'>Explore Categories</div>
          <details className='dropdown'>
            <summary role='button'>
              <a class='button'>
                <img
                  className='image'
                  src='https://static.thenounproject.com/png/1123247-200.png'
                />
              </a>
            </summary>
            <ul>
              <li>
                <a href='#'>Artificial Inteligence</a>
              </li>
              <li>
                <a href='#'>Cloud Computing</a>
              </li>
              <li>
                <a href='#'>DevOps</a>
              </li>
              <li>
                <a href='#'>Programming Languages</a>
              </li>
              <li>
                <a href='#'>Mobile Application Development</a>
              </li>
              <li>
                <a href='#'>Technology and Tools</a>
              </li>
              <li>
                <a href='#'>Get a Job in a Tech Company</a>
              </li>
              <li>
                <a href='#'>Others</a>
              </li>
            </ul>
          </details>
        </div>
      </div>
      <div className='quote-btn'>
        <div>
          <p className='quote'>
            EdYoda is a learning and knowledge <br />
            sharing platform for techies
          </p>
        </div>
        <div>
          <button className='btn'>Go to main website</button>
        </div>
      </div>
    </div>
  )
}

export default Header
