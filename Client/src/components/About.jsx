import React from "react"
import s from "./About.css"
export default function About(){

    return(<div>
        <section class="sectionAbout">
            <div class = "card2RM">
            
            <a href="https://www.ukutek.com" alt="Mythrill" target="_blank">
  <div class="cardRM">
    <div class="wrapper">
      <img src="https://i.pinimg.com/originals/97/86/ec/9786ec883756c755df35a331ff902f3b.png" class="cover-image" />
    </div>
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/2560px-Rick_and_Morty.svg.png" class="titleRM" />
    <img src="https://www.pngplay.com/wp-content/uploads/10/Rick-And-Morty-PNG-Images-HD.png" class="character" />
  </div>
</a>
    </div>

            <div class = "content">
                <h2>About Us</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis aspernatur voluptas inventore ab voluptates nostrum minus illo laborum harum laudantium earum ut, temporibus fugiat sequi explicabo facilis unde quos corporis!</p>
                <ul class = "links">
                    <li><a href = "#">work</a></li>
                    <div class = "vertical-line"></div>
                    <li><a href = "#">service</a></li>
                    <div class = "vertical-line"></div>
                    <li><a href = "#">contact</a></li>
                </ul>
            </div>
        </section>
    </div>)
}