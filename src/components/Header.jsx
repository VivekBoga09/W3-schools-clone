import React from 'react'

function Header() {
  return (
        <header>
      <div className="firstbox">
        <div className="child c1">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqdAPD9tC8Hp4Luhxw_0XO4lQTtHvvMWju-g&s"
            alt=""
          />
        </div>

        <div className="child c2">
          <div className="dropdown tuto">
            <button className="btn dropdown-toggle" data-bs-toggle="dropdown">
              Tutorials
            </button>
            <div className="dropdown-menu">
              <a href="#" className="dropdown-item">hiii</a>
            </div>
          </div>

          <div className="dropdown exer">
            <button className="btn dropdown-toggle">Exercises</button>
          </div>

          <div className="dropdown certificate">
            <button className="btn dropdown-toggle">Certificates</button>
          </div>

          <div className="dropdown service">
            <button className="btn dropdown-toggle">Services</button>
          </div>
        </div>

        <div className="child c3">
          <input className="ser" type="search" placeholder="Search... 🔍" />
        </div>

        <div className="child c4">
          <img
            className="darkmode"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS16lrsqDIglSIMF8H2RoYP4YH5U7rEsSlFaw&s"
            alt=""
          />
        </div>
      </div>

      <div className="secondbox">
        <ul>
          <li className='l1'><div className="btn">Upgrade</div></li>
          <li className='l2'><div className="btn">Spaces</div></li>
          <li className='l3'><div className="btn">For Teachers</div></li>
          <li className='l4'><div className="btn rounded-pill">Get Verified</div></li>
          <li><div className="btn btn-success">Sign in</div></li>
        </ul>
      </div>
    </header>
  )
}

export default Header   