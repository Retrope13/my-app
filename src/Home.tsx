import './Home.css';
import MyPhoto from './assets/imgs/SamMcKayPic.jpg';
import React, {useState, useEffect} from 'react';
import styled from 'styled-components';


const Head = styled.h1`
  color: #FFFFFF;
  margin-top: 0vh;
  min-width: 100px;
  font-family: Bavista;
  font-size: 100px;
  background-color: #00000000;
  border-radius: 5px;
  height: auto;
  `

function Home() {
  const progress = document.getElementById("progressbar1")
  let totalHeight = document.body.scrollHeight - window.innerHeight;
  window.onscroll = function(){
    let progressHeight = (window.pageYOffset / totalHeight) * 100;
    if (progress) {
      progress.style.height = progressHeight + "%" 
    }
  }

  return (
    <div className="App">
      <title>Home</title>
      <body>
        <div id="progressbar1">
        </div>
        <div id="scrollpath"></div>
        <section>
          <h2>CreativeScroll Progress Bar</h2>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima cupiditate accusamus ratione exercitationem
         blanditiis dolorum, aspernatur eos eligendi consequatur nihil. Ipsam architecto consectetur asperiores 
         natus labore, porro consequatur. Culpa, magni.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero blanditiis reiciendis voluptas
         a deleniti harum possimus iste autem modi temporibus recusandae eius eligendi placeat culpa, 
         accusantium debitis enim voluptate at?
         Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima cupiditate accusamus ratione exercitationem
         blanditiis dolorum, aspernatur eos eligendi consequatur nihil. Ipsam architecto consectetur asperiores 
         natus labore, porro consequatur. Culpa, magni.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero blanditiis reiciendis voluptas
         a deleniti harum possimus iste autem modi temporibus recusandae eius eligendi placeat culpa, 
         accusantium debitis enim voluptate at?
         Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima cupiditate accusamus ratione exercitationem
         blanditiis dolorum, aspernatur eos eligendi consequatur nihil. Ipsam architecto consectetur asperiores 
         natus labore, porro consequatur. Culpa, magni.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero blanditiis reiciendis voluptas
         a deleniti harum possimus iste autem modi temporibus recusandae eius eligendi placeat culpa, 
         accusantium debitis enim voluptate at?
         Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima cupiditate accusamus ratione exercitationem
         blanditiis dolorum, aspernatur eos eligendi consequatur nihil. Ipsam architecto consectetur asperiores 
         natus labore, porro consequatur. Culpa, magni.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero blanditiis reiciendis voluptas
         a deleniti harum possimus iste autem modi temporibus recusandae eius eligendi placeat culpa, 
         accusantium debitis enim voluptate at?
         Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima cupiditate accusamus ratione exercitationem
         blanditiis dolorum, aspernatur eos eligendi consequatur nihil. Ipsam architecto consectetur asperiores 
         natus labore, porro consequatur. Culpa, magni.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero blanditiis reiciendis voluptas
         a deleniti harum possimus iste autem modi temporibus recusandae eius eligendi placeat culpa, 
         accusantium debitis enim voluptate at?

         Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima cupiditate accusamus ratione exercitationem
         blanditiis dolorum, aspernatur eos eligendi consequatur nihil. Ipsam architecto consectetur asperiores 
         natus labore, porro consequatur. Culpa, magni.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero blanditiis reiciendis voluptas
         a deleniti harum possimus iste autem modi temporibus recusandae eius eligendi placeat culpa, 
         accusantium debitis enim voluptate at?
         Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima cupiditate accusamus ratione exercitationem
         blanditiis dolorum, aspernatur eos eligendi consequatur nihil. Ipsam architecto consectetur asperiores 
         natus labore, porro consequatur. Culpa, magni.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero blanditiis reiciendis voluptas
         a deleniti harum possimus iste autem modi temporibus recusandae eius eligendi placeat culpa, 
         accusantium debitis enim voluptate at?

         Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima cupiditate accusamus ratione exercitationem
         blanditiis dolorum, aspernatur eos eligendi consequatur nihil. Ipsam architecto consectetur asperiores 
         natus labore, porro consequatur. Culpa, magni.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero blanditiis reiciendis voluptas
         a deleniti harum possimus iste autem modi temporibus recusandae eius eligendi placeat culpa, 
         accusantium debitis enim voluptate at?
         Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima cupiditate accusamus ratione exercitationem
         blanditiis dolorum, aspernatur eos eligendi consequatur nihil. Ipsam architecto consectetur asperiores 
         natus labore, porro consequatur. Culpa, magni.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero blanditiis reiciendis voluptas
         a deleniti harum possimus iste autem modi temporibus recusandae eius eligendi placeat culpa, 
         accusantium debitis enim voluptate at?
         Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima cupiditate accusamus ratione exercitationem
         blanditiis dolorum, aspernatur eos eligendi consequatur nihil. Ipsam architecto consectetur asperiores 
         natus labore, porro consequatur. Culpa, magni.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero blanditiis reiciendis voluptas
         a deleniti harum possimus iste autem modi temporibus recusandae eius eligendi placeat culpa, 
         accusantium debitis enim voluptate at?
         Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima cupiditate accusamus ratione exercitationem
         blanditiis dolorum, aspernatur eos eligendi consequatur nihil. Ipsam architecto consectetur asperiores 
         natus labore, porro consequatur. Culpa, magni.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero blanditiis reiciendis voluptas
         a deleniti harum possimus iste autem modi temporibus recusandae eius eligendi placeat culpa, 
         accusantium debitis enim voluptate at?
         Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima cupiditate accusamus ratione exercitationem
         blanditiis dolorum, aspernatur eos eligendi consequatur nihil. Ipsam architecto consectetur asperiores 
         natus labore, porro consequatur. Culpa, magni.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero blanditiis reiciendis voluptas
         a deleniti harum possimus iste autem modi temporibus recusandae eius eligendi placeat culpa, 
         accusantium debitis enim voluptate at?
         Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima cupiditate accusamus ratione exercitationem
         blanditiis dolorum, aspernatur eos eligendi consequatur nihil. Ipsam architecto consectetur asperiores 
         natus labore, porro consequatur. Culpa, magni.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero blanditiis reiciendis voluptas
         a deleniti harum possimus iste autem modi temporibus recusandae eius eligendi placeat culpa, 
         accusantium debitis enim voluptate at?

         Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima cupiditate accusamus ratione exercitationem
         blanditiis dolorum, aspernatur eos eligendi consequatur nihil. Ipsam architecto consectetur asperiores 
         natus labore, porro consequatur. Culpa, magni.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero blanditiis reiciendis voluptas
         a deleniti harum possimus iste autem modi temporibus recusandae eius eligendi placeat culpa, 
         accusantium debitis enim voluptate at?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima cupiditate accusamus ratione exercitationem
         blanditiis dolorum, aspernatur eos eligendi consequatur nihil. Ipsam architecto consectetur asperiores 
         natus labore, porro consequatur. Culpa, magni.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero blanditiis reiciendis voluptas
         a deleniti harum possimus iste autem modi temporibus recusandae eius eligendi placeat culpa, 
         accusantium debitis enim voluptate at?
         Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima cupiditate accusamus ratione exercitationem
         blanditiis dolorum, aspernatur eos eligendi consequatur nihil. Ipsam architecto consectetur asperiores 
         natus labore, porro consequatur. Culpa, magni.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero blanditiis reiciendis voluptas
         a deleniti harum possimus iste autem modi temporibus recusandae eius eligendi placeat culpa, 
         accusantium debitis enim voluptate at?
         Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima cupiditate accusamus ratione exercitationem
         blanditiis dolorum, aspernatur eos eligendi consequatur nihil. Ipsam architecto consectetur asperiores 
         natus labore, porro consequatur. Culpa, magni.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero blanditiis reiciendis voluptas
         a deleniti harum possimus iste autem modi temporibus recusandae eius eligendi placeat culpa, 
         accusantium debitis enim voluptate at?
         Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima cupiditate accusamus ratione exercitationem
         blanditiis dolorum, aspernatur eos eligendi consequatur nihil. Ipsam architecto consectetur asperiores 
         natus labore, porro consequatur. Culpa, magni.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero blanditiis reiciendis voluptas
         a deleniti harum possimus iste autem modi temporibus recusandae eius eligendi placeat culpa, 
         accusantium debitis enim voluptate at?
          </p>
        </section>
      </body>
    </div>
  );
}

export default Home;
