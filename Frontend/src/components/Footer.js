import React from 'react'

import { Icon } from '@iconify/react';


function Footer() {
  return (
    <div  >  
      <footer class=" text-center footer ">
        <div class="container p-4 pb-0">

          <section class="mb-4">

            <a
              data-mdb-ripple-init
              class="btn text-white btn-floating m-1"
              
              href="#!"
              role="button"
            ><Icon icon="logos:facebook" width="50" height="50" /></a>

            <a
              data-mdb-ripple-init
              class="btn text-white btn-floating m-1"
              
              href="#!"
              role="button"
            ><Icon icon="icon-park:twitter" width="50" height="50" /></a>

            <a
              data-mdb-ripple-init
              class="btn text-white btn-floating m-1"
              
              href="#!"
              role="button"
            ><Icon icon="flat-color-icons:google" width="50" height="50" /></a>

        
            <a
              data-mdb-ripple-init
              class="btn text-white btn-floating m-1"
              
              href="#!"
              role="button"
            ><Icon icon="skill-icons:instagram" width="50" height="50" /></a>


            <a
              data-mdb-ripple-init
              class="btn text-white btn-floating m-1"
              
              href="#!"
              role="button"
            ><Icon icon="skill-icons:linkedin" width="50" height="50" /></a>

            <a
              data-mdb-ripple-init
              class="btn text-white btn-floating m-1"
              
              href="#!"
              role="button"
            ><Icon icon="fa6-brands:github" width="50" height="50" /></a>
          </section>

        </div>



        <div class="text-center p-3">
          © 2023 Copyright:
          <a  href="/" style={{"color":"white"}}>FF_Cafe</a>
          <p>Made with ♥ by Nayan ♥♥♥</p>
        </div>
        
      </footer>
    </div>
  )
}

export default Footer