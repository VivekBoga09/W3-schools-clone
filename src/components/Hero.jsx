import React from 'react'

function Hero() {
  return (
                <div>
      {/* TOP NAV */}
      <div className="headerdown">
        {[
          "HTML","CSS","JAVASCRIPT","SQL","PYTHON","JAVA","PHP","C","C++","C#",
          "BOOTSTRAP","REACT","MYSQL","JUERY","EXEL","XML","DJANGO",
          "HOWTO","NUMPY","W3.CSS"
        ].map(item => (
          <a key={item} className="h" href="#">{item}</a>
        ))}
      </div>

      {/* HERO */}
      <main>
        <div className="inside">
          <p>Learn To Code</p>
          <h4 className="z">
            With the world's largest web developer site.
          </h4>

          <div className="search-container">
            <input
              className="search-input"
              type="text"
              placeholder="Search our Tutorials,e.g.HTML"
            />
            <button className="search-button">
              <i className="fa fa-search"></i>
            </button>
          </div>

          <h4>
            <a className="hi" href="#">Not Sure Where to Begin?</a>
          </h4>
        </div>
      </main>

      {/* WAVE */}
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#29353e"
          fillOpacity="1"
          d="M0,96L80,106.7C160,117,320,139,480,128C640,117,800,75,960,64C1120,53,1280,75,1360,85.3L1440,96L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
        />
      </svg>

      {/* HTML SECTION */}
      <div className="downbox1">
        <div className="b1">
          <p className="j">HTML</p>
          <h4>The Language for building web pages</h4>
          <button className="butt1 butt bg-success">Learn HTML</button>
          <button className="butt2 butt bg-warning">Video Tutorial</button>
          <button className="butt3 butt bg-danger text-white">HTML Reference</button>
          <button className="butt4 butt bg-dark text-white">Get Certified</button>
        </div>
        <div className="b2">
          <h3 className="ex">HTML Example:</h3>
          <img
            className="htim"
            src="https://miro.medium.com/v2/resize:fit:498/1*5gJzummAqpBDGATo0fjU6Q.jpeg"
            alt=""
          />
          <button className="butt5 bg-success text-white">Try it Yourself</button>
        </div>
      </div>

      {/* CSS SECTION */}
      <div className="downbox2">
        <div className="b11">
          <p className="j">CSS</p>
          <h4>The Language for styling web pages</h4>
          <button className="butt1 butt bg-success">Learn CSS</button>
          <button className="butt2 butt bg-warning">CSS Reference</button>
          <button className="butt4 butt bg-dark text-white">Get Certified</button>
        </div>
        <div className="b22">
          <h3 className="ex">CSS Example:</h3>
          <img
            className="htim"
            src="https://external-preview.redd.it/3M0cvD1j7N4ihme-3Cdndddi7yVoPxFAeT62V_HKkSs.jpg"
            alt=""
          />
          <button className="butt5 bg-success text-white">Try it Yourself</button>
        </div>
      </div>

      {/* JS SECTION */}
      <div className="downbox3 bg-dark">
        <div className="b11">
          <p className="j text-white">JavaScript</p>
          <h4 className="text-white">
            The Language for programming web pages
          </h4>
          <button className="butt1 butt bg-success">Learn JavaScript</button>
          <button className="butt2 butt bg-warning">JavaScript Reference</button>
          <button className="butt4 butt bg-danger text-white">Get Certified</button>
        </div>
        <div className="b22">
          <h3 className="ex">JavaScript Example:</h3>
          <img
            className="htim"
            src="https://i.ytimg.com/vi/QWHiYVV7f2E/sddefault.jpg"
            alt=""
          />
          <button className="butt5 bg-success text-white">Try it Yourself</button>
        </div>
      </div>

      {/* PYTHON */}
      <div className="downbox4">
        <div className="b11">
          <p className="j">Python</p>
          <h4>A popular programming Language</h4>
          <button className="butt1 butt bg-success">Learn Python</button>
          <button className="butt2 butt bg-warning">Python Reference</button>
          <button className="butt4 butt bg-dark text-white">Get Certified</button>
        </div>
        <div className="b22">
          <h3 className="ex">Python Example:</h3>
          <img
            className="htim"
            src="https://media.licdn.com/dms/image/v2/D4D12AQEjPMXM0tFTYA/article-cover_image"
            alt=""
          />
          <button className="butt5 bg-success text-white">Try it Yourself</button>
        </div>
      </div>

      {/* SQL */}
      <div className="downbox5">
        <div className="b11">
          <p className="j">SQL</p>
          <h4>A Language for accessing database</h4>
          <button className="butt1 butt bg-success">Learn SQL</button>
          <button className="butt2 butt bg-warning">SQL Reference</button>
          <button className="butt4 butt bg-dark text-white">Get Certified</button>
        </div>
        <div className="b22">
          <h3 className="ex">SQL Example:</h3>
          <img
            className="htim"
            src="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs3/135201659/original/66a3a85d4e4c8a8636ab4060b8d19a60f311cd6d/write-complex-sql-queries-for-you.jpg"
            alt=""
          />
          <button className="butt5 bg-success text-white">Try it Yourself</button>
        </div>
      </div>

      {/* GRID */}
      <div className="downbox6">
       <div className="con1 con">
        <h1 className="hh1">PHP</h1>
        <h3 className="hh3">A web server programming Language</h3>
        <button className="butt1 butt bg-dark text-white">Learn PHP</button>

       </div>
     <div className="con2 con">
        
        <h1 className="hh1">jQUERY</h1>
        <h3 className="hh3">A JS library for developing web pages</h3>
        <button className
        ="butt1 butt bg-dark text-white">Learn jQUERY</button>

       </div>

       <div className="con3 con">
        
        <h1 className="hh1">Java</h1>
        <h3 className="hh3">A Programminng language</h3>
        <button className="butt1 butt bg-dark text-white">Learn Java</button>

       </div>

       <div className="con4 con">
        
        <h1 className="hh1">C++</h1>
        <h3 className="hh3">A Programminng language</h3>
        <button className="butt1 butt bg-dark text-white">Learn C++</button>

       </div>

       <div className="con5 con">
        
        <h1 className="hh1">W3.CSS</h1>
        <h4 className="hh3">A CSS framework for faster,and responsive web pages</h4>
        <button className="butt1 butt bg-dark text-white">Learn W3.CSS</button>

       </div>
       <div className="con6 con">
        
        <h1 className="hh1">Bootstrap</h1>
        <h3 className="hh3">A CSS framework for designing web pages</h3>
        <button className="butt1 butt bg-dark text-white">Learn Bootstrap</button>

       </div>
    
    


    </div>
    </div>
  )
}

export default Hero 