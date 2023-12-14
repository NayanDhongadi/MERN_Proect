import React from 'react'

import { Icon } from '@iconify/react';


function Footer() {
  return (
    <div  >  
      <footer className=" text-center footer ">
        <div className="container p-4 pb-0">

          <section className="mb-4">

            <a
              data-mdb-ripple-init
              className="btn text-white btn-floating m-1"
              
              href="#!"
              role="button"
            ><Icon icon="logos:facebook" width="50" height="50" /></a>

            <a
              data-mdb-ripple-init
              className="btn text-white btn-floating m-1"
              
              href="#!"
              role="button"
            ><Icon icon="icon-park:twitter" width="50" height="50" /></a>

            <a
              data-mdb-ripple-init
              className="btn text-white btn-floating m-1"
              
              href="#!"
              role="button"
            ><Icon icon="flat-color-icons:google" width="50" height="50" /></a>

        
            <a
              data-mdb-ripple-init
              className="btn text-white btn-floating m-1"
              
              href="#!"
              role="button"
            ><Icon icon="skill-icons:instagram" width="50" height="50" /></a>


            <a
              data-mdb-ripple-init
              className="btn text-white btn-floating m-1"
              
              href="#!"
              role="button"
            ><Icon icon="skill-icons:linkedin" width="50" height="50" /></a>

            <a
              data-mdb-ripple-init
              className="btn text-white btn-floating m-1"
              
              href="#!"
              role="button"
            ><Icon icon="fa6-brands:github" width="50" height="50" /></a>
          </section>

        </div>



        <div className="text-center p-3 mt-5 ">
          © 2023 Copyright:
          <a  href="/" style={{"color":"white"}}>FF_Cafe</a>
          <p className="mt-3">Made with ♥ by Nayan ♥♥♥</p>
        </div>
        
      </footer>
    </div>
  )
}

export default Footer