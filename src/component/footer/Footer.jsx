import './Footer.css'
export default function Footer() {
  return (
      <div id='Footer'>  
            <div className="container">          
                <div class="row">
                    <div class="col-md-3">
                        <div class="name_col">
                            <h3>
                                WiSchool
                            </h3>
                            <p>We are not here to sell you <br /> products, we sell value through <br /> our expertise.</p>
                            <div class="logo">
                                <img src="Vector (1).png" alt="" />
                                <img src="Vector (2).png" alt="" />
                                <img src="Vector (3).png" alt="" />
                                <img src="Vector (4).png" alt="" />
                            </div>
                        </div>
                    </div>
                    <div class="col-md-9">
                        <div class="row">
                            <div class="col-md-2">
                                <ul>
                                    <li>Home</li>
                                    <li>Services</li>
                                    <li>Training</li>
                                    <li>Resources</li>
                                    <li>About Us</li>
                                </ul>
                            </div>
                            <div class="col-md-2">
                                <ul>
                                    <li>SME</li>
                                    <li>Solution</li>
                                    <li>Reviews</li>
                                    <li>Blog</li>
                                </ul>
                            </div>
                            <div class="col-md-3">
                                <ul>
                                    <li>Contact Us</li>
                                    <li>Place A Call</li>
                                    <li>Email</li>
                                    <li>Wischool@Gmail.Com</li>
                                </ul>
                            </div>
                            <div class="col-md-2">
                                <ul>
                                    <li>Job Opening</li>
                                    <li>News</li>
                                    <li>Research</li>
                                </ul>
                            </div>
                            <div class="col-md-3">
                                <ul>
                                    <li>Uk Privacy Policy</li>
                                    <li>Term Of Use</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            
                <div class="footer2 d-flex flex-column align-items-center">
                    <h4 class="mb-3">
                        Subscribe to get latest updates
                    </h4>
                    <div class="input-group">
                        <input type="search" class="form-control" placeholder="Your Email address" aria-label="Your Email address" aria-describedby="search-addon" />
                        <button type="button" class="btn btn-outline-primary">Subscribe</button>
                    </div>
                </div>
            </div>       
      </div>
  )
}
