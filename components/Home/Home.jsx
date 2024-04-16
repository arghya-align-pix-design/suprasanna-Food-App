import React from "react";

export default function Home(){
 return(
 <>
  <ul class="menu">
   <li><a href="file:///C:/Users/Apex%20informatics/OneDrive/Documents/Desktop/ReactApp/.vscode/React-course/components/login-page.html">Login</a></li>
   <li><a href="file:///C:/Users/Apex%20informatics/OneDrive/Documents/Desktop/ReactApp/.vscode/React-course/components/Index6.html" id="active">Home</a></li>
   <li> <a href="#">About</a></li>
   <li><a href="#">Categories</a>
     <ul class="submenu">
       <li><a href="#">Refreshments</a></li>
       <li><a href="#">Veg</a></li>
       <li><a href="#">Non-Veg</a></li>
       <li><a hef="#">Desserts</a></li>
     </ul></li>
     <li><a href="#">Menu-Items</a></li>
     <li><a href="#">Order-placement</a></li>
     <li><a href="file:///C:/Users/Apex%20informatics/OneDrive/Documents/Desktop/ReactApp/.vscode/React-course/components/Register.html">Register</a></li>
  </ul>
  <a href="file:///C:/Users/Apex%20informatics/OneDrive/Documents/Desktop/ReactApp/.vscode/React-course/components/Navbar.html">Navbar</a>
  <section class="showcase-area" id="showcase">
    <div class="showcase-container">
      <h1 class="main-title" id="home">Let food be thy medicine and medicine be the food.</h1>
      <p>Pull up a chair. Take a taste. Come join us. Life is so endlessly delicious</p>
    </div>
  </section>
  <section id="about">
   <div class="about-wrapper container">
     <div class="about-text">
       <p class="small">About Us</p>
         <h2>There is no love greater than the love of food.</h2>
       <p>
         We provide you the most delicious and healthy food  with alittle bit of twists and turns which will make you experience the best food :) 
       </p>
      </div>
    </div>
  </section>
  <div class="about-img">
   <img src="https://wallpapercave.com/wp/wp3724325.jpg" alt="food" />
  </div>
  <section id="food">
   <h2>Food according to mood</h2>
     <div class="food-container container">
       <div class="food-type Breakfast">
         <div class="img-container">
           <img src="https://wallpapercave.com/wp/wp1913073.jpg" alt="error" />
           <div class="img-content">
              <a
                href="https://en.wikipedia.org/wiki/Fruit"
                class="btn btn-secondary">Diet</a> 
           </div>
          </div>
        </div>
        <div class="food-type Lunch">
          <div class="img-container">
            <img src="https://wallpaperaccess.com/full/1843937.jpg" alt="error" />
            <div class="img-content">
              <a
                href="https://en.wikipedia.org/wiki/Vegetable"
                class="btn btn-secondary">Feast</a>
            </div>
          </div>
        </div>
        <div class="food-type grin">
          <div class="img-container">
            <img src="https://communities.dmcihomes.com/wp-content/uploads/2014/02/dinner-date.jpg" alt="error" />
            <div class="img-content">
              <a
                href="https://en.wikipedia.org/wiki/Grain"
                class="btn btn-secondary"
                target="blank">Party</a>
            </div>
          </div>
        </div>
      </div>
  </section>
  <section id="food-menu">
   <h2 class="food-menu-heading">Food Menu</h2>
     <div class="food-menu-container container">
       <div class="food-menu-item">
          <div class="food-img">
            <img src="https://i.postimg.cc/wTLMsvSQ/food-menu1.jpg" alt="" />
          </div>
          <div class="food-description">
            <h2 class="food-title"><a href="www.google.com">Italian</a></h2>

            <p>
              Italian cuisine includes deeply rooted traditions common to the whole country,
              as well as all the regional gastronomies, different from each other, especially between the north, the centre and the 
              south of Italy, which are in continuous exchange.
            </p>
          </div>
        </div>
      </div>
     <div class="food-menu-container container">
        <div class="food-menu-item">
          <div class="food-img">
            <img src="https://i.postimg.cc/sgzXPzzd/food-menu2.jpg" alt=""/>
          </div>
          <div class="food-description">
           <h2 class="food-title"><a href="www.goggle.com">Chinese</a></h2>
           <p>
             Chinese cuisine comprises cuisines originating from China, as well as from Chinese people from other parts of the world
           </p>
         </div>
        </div>
      </div>
        <div class="food-menu-item">
          <div class="food-img">
            <img src="https://i.postimg.cc/8zbCtYkF/food-menu3.jpg" alt="" />
          </div>
          <div class="food-description">
            <h2 class="food-titile"><a href="www.goggle.com">Indian</a></h2>
            <p>
                Indian food is also heavily influenced by religion, in particular Hinduism and Islam, cultural choices and traditions.   
            </p>
          </div>
        </div>
        <div class="food-menu-item">
          <div class="food-img">
            <img src="https://i.postimg.cc/Yq98p5Z7/food-menu4.jpg" alt="" />
          </div>
          <div class="food-description">
            <h2 class="food-titile"><a href="www.goggle.com">Thai</a></h2>
            <p>
              Thai cooking places emphasis on lightly prepared dishes with strong aromatic components and a spicy edge.
            </p>
          </div>
        </div>
        <div class="food-menu-item">
          <div class="food-img">
            <img src="https://i.postimg.cc/KYnDqxkP/food-menu5.jpg" alt="" />
          </div>
          <div class="food-description">
            <h2 class="food-titile"><a href="www.google.com">Japnese</a></h2>
            <p>
                Japanese cuisine encompasses the regional and traditional foods of Japan, which have developed through centuries of political, economic, and social changes.
            </p>
          </div>
        </div>
        <div class="food-menu-item">
          <div class="food-img">
            <img src="https://i.postimg.cc/Jnxc8xQt/food-menu6.jpg" alt="" />
          </div>
          <div class="food-description">
            <h2 class="food-title"><a href="www.goggle.com">French</a></h2>
            <p>
                French cuisine is the cooking traditions and practices from France. In the 14th century, Guillaume Tirel, a court chef known as "Taillevent", wrote Le Viandier, one of the earliest recipe collections of medieval France
            </p>
          </div>
        </div>
    </section>
    <section id="contact">
      <div class="contact-container container">
        <div class="contact-img">
          <img src="https://i.postimg.cc/1XvYM67V/restraunt2.jpg" alt="" />
        </div>
      </div>
    </section>
        </>
    );
}