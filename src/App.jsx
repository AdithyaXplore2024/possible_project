import React from 'react'
import './index.css'
import './header_mall.css'
import './navbar_mall.css'
import './experience.css'
import './footer_mall.css'
import './mall_floors.css'

export default function App() {
  return (
    <>
    <header>
        <img src="https://www.brookefields.com/wp-content/uploads/2026/02/logo-footer.png" alt="" />

        <div class="right-icons">
            <a href="https://www.instagram.com/brookefieldscoimbatore/"><i class="fa-brands fa-instagram"></i></a>
            <a href=""> <i class="fa-brands fa-facebook-f"></i></a>
            <a href=""><i class="fa-brands fa-threads"></i></a>
            <a href=""><i class="fa-brands fa-x-twitter"></i></a>
            <a href=""><i class="fa-brands fa-linkedin-in"></i></a>
            <a href="https://www.youtube.com/@BrookefieldsMallCoimbatore"><i class="fa-brands fa-youtube"></i></a>
        </div>
    </header>


    {/* <!-- navbar brookes --> */}
     <div class="navbar_court">
        <a href="">About</a>
        <a href="">Shops</a>
        <a href="">Services</a>
        <a href="">Stories</a>
        <a href="">Gallery</a>
        <a href="">Contact</a>
        <div>
{/* background-color:forestgreen;border-radius: 5px;padding: 4px;margin-top: -5px; */}
            <button style={{backgroundColor:"forestgreen",borderRadius:"5px",padding:"4px",marginTop:"-5px"}}><a href="">Pre Order @ Food Court</a></button>
        </div>
    </div>

    {/* <!-- image over test experience --> */}
{/* "text-align: center;color: white;padding-top: 300px;font-size: 64px; */}
     <div id="exp">
        <h1 style={{textAlign: "center",color: "white",paddingTop:"300px",fontSize: "64px"}}>EXPERIENCE BROOKEFIELDS</h1>
    </div>
{/* text-align: center;color: black;font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;letter-spacing: 2px;font-size: 32px; */}
    <p style={{textAlign: 'center',color: 'black',fontFamily:"'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",letterSpacing: "2px",fontSize: "32px"}}>Fun, Food, Fashion & Complete Entertainment for your Family & <br/>Friends</p>

    {/* <!-- grid mall floors --> */}
      <div class="floors">

    {/* <!-- Section 1 --> */}
    <div class="image">
        <img src="https://www.brookefields.com/wp-content/themes/brookefields/assets/images/fun-entertainment.jpg" alt="" />
    </div>

    <div class="floor">
        <h2>FUN & ENTERTAINMENT</h2>
        <p>
            Experience unlimited entertainment at Brookefields with games, immersive play, interactive zones, and blockbuster cinema moments, where every visit brings laughter, adventure, and fun for all ages.
        </p>

        <div class="brands">
            <img src="https://www.brookefields.com/wp-content/uploads/2026/03/Fun-Entertainment-PVR-INOX.jpg" class="fl_img" />
            <img src="https://www.brookefields.com/wp-content/uploads/2026/03/Fun-Entertainment-DUGOUT.jpg" class="fl_img" />
            <img src="https://www.brookefields.com/wp-content/uploads/2026/03/Fun-Entertainment-SNOW.jpg" class="fl_img" />
        </div>

        <button class="learn">Learn More ➡️</button>
    </div>

    {/* <!-- Section 2 --> */}
    <div class="floor">
        <h2>FOOD</h2>
        <p>
            From quick bites to indulgent meals, Brookefields offers a vibrant dining experience with diverse flavours, cosy cafés, and family-friendly spaces perfect for every craving and occasion.
        </p>

        <div class="brands">
            <img src="https://www.brookefields.com/wp-content/uploads/2026/03/Food-Food-Court.jpg" class="fl_img" />
            <img src="https://www.brookefields.com/wp-content/uploads/2026/03/Food-Kailash-Parbat.jpg" class="fl_img" />
            <img src="https://www.brookefields.com/wp-content/uploads/2026/03/Food-3.jpg" class="fl_img" />
        </div>

        <button class="learn">Learn More ➡️</button>
    </div>

    <div class="image">
        <img src="https://www.brookefields.com/wp-content/themes/brookefields/assets/images/food-court.jpg" alt="" />
    </div>

    {/* <!-- Section 3 --> */}
    <div class="image">
        <img src="https://www.brookefields.com/wp-content/themes/brookefields/assets/images/fashion.jpg" alt="" />
    </div>

    <div class="floor">
        <h2>FASHION</h2>
        <p>
            From leading international and national labels to everyday essentials and statement styles, Brookefields brings together fashion that reflects global trends and diverse style preferences.
        </p>
        <div class="brands">
            <img src="https://www.brookefields.com/wp-content/uploads/2026/03/Fashion-Pantaloons.jpg" alt="" />
            <img src="https://www.brookefields.com/wp-content/uploads/2026/03/Fashion-Lifestyle.jpg" alt="" />
            <img src="https://www.brookefields.com/wp-content/uploads/2026/03/Fashion-RMKV.jpg" alt="" />
        </div>
        <button class="learn">Learn More ➡️</button>
    </div>

</div>

{/* <!-- carousel brooks --> */}
     <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://d3fphkxyf5o5bm.cloudfront.net/image-resize/format=webp,w=720/QwRY54Li1HMwD7oNfqXaOnoJHrO19dqg8LflCSQMEV" class="d-block w-100" alt="..." />
      
    </div>
    <div class="carousel-item">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjKNM44360zXA2aeMFcNjLLMkMkIzoPOmepYdmefyFPtkUE6k0alGsMw4D&s=10" class="d-block w-100" />
    </div>
    <div class="carousel-item">
      <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/c3/28/63/spacious-and-well-maintained.jpg?w=900&h=500&s=1" class="d-block w-100" alt="..." />
    </div>
  </div>
</div>


{/* <!-- footer mall --> */}
<div class="container-fluid p-5" style={{background: 'linear-gradient(273deg, #00a651 50%, #2a2c83)'}}>
  <div class="row">
    {/* <!-- Quick Links --> */}
    <div class="col">
      <h5>Quick Links</h5>
      <ul class="list-group">
  <li class=" "><a href="" style={{color: 'white'}}>▶️ Home</a></li>
  <li class=" ">▶️ Find a Shop</li>
  <li class=" ">▶️ Services</li>
  <li class=" ">▶️ Gallery</li>
  <li class=" ">▶️ Privacy Policy</li>
  <li class=" ">▶️ Testimonials</li>
  <li class=" ">▶️ Contact</li>
    </ul>

    </div>

    <div class="col">
      <h5>MALL HOURS</h5>
      <p>Monday – Friday (Weekday) : <br/>
10:00 AM – 10:00 PM
Saturday - Sunday (Weekend) : <br/>
10.00 AM - 10.30 PM</p>
    </div>

    <div class="col">
      <h5>Getting Here</h5>
      <p>Located in the heart of Coimbatore city, easily accessible by bus, auto, and cab services.</p>
        <button class="map">View Map</button>
    </div>

    <div class="col">
      <img src="https://www.brookefields.com/wp-content/uploads/2026/02/logo-footer.png" alt="" />
      <br/> <br/>
      <p>No 67-71, Krishnaswamy road,<br/>Coimbatore-641001. <br/> Ph: 0422-2255000</p>
    
    <div class="footer-icons">
            <a href="https://www.instagram.com/brookefieldscoimbatore/"><i class="fa-brands fa-instagram"></i></a>
            <a href=""> <i class="fa-brands fa-facebook-f"></i></a>
            <a href=""><i class="fa-brands fa-threads"></i></a>
            <a href=""><i class="fa-brands fa-x-twitter"></i></a>
            <a href=""><i class="fa-brands fa-linkedin-in"></i></a>
            <a href="https://www.youtube.com/@BrookefieldsMallCoimbatore"><i class="fa-brands fa-youtube"></i></a>
        </div>
    </div>
  </div>

  <div class="d-flex justify-content-between text-light pl-4 pt-5">
    <div><h6>© 2026 Brookefields. All Rights Reserved.</h6></div>
    <div><h6>Developed by <a href="#" style={{textDecoration: 'underline',color: 'white'}}>AGT</a></h6></div>
  </div>
</div>

    
    </>
  )
}
