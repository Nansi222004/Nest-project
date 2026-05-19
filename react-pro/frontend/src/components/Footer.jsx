function Footer(){
    return(
        <>
        <footer className="footer">
            <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5  footer-top ">
                <div className="footer-category-1 px-[12px] overflow-hidden">
                    <img className="footer-logo " src="/assets/Logo/logo.svg" alt="logo"/>
                    <h4 className="footer-info">Awesome grocery store website template</h4>
                    
                    <ul >
                    <li>
                        <i class="ri-map-pin-line"></i>
                        <strong>Address:</strong>
                        <span>5171 W Campbell Ave <br/> undefined Kent, Utah 53127 United States</span>
                    </li>
                    <li>
                        <i class="ri-telegram-2-line"></i>
                        <strong>Call us:</strong>
                        <span>(+91) - 540-025-124553</span>
                    </li>
                    <li>
                        <i class="ri-customer-service-fill"></i>
                        <strong>Email:</strong>
                        <span>sale@Nest.com</span>
                    </li>
                    <li>
                        <i class="ri-timer-line"></i>
                        <strong>Hours:</strong>
                        <span>10:00 - 18:00, Mon - Sat</span>
                    </li>
                    </ul>
                    
                </div>

                <div className="footer-category px-[12px]">
                    <h4>Company</h4>
                    <a>About Us</a>
                    <a>Delivery Information</a>
                    <a>Privacy Policy</a>
                    <a>Terms & Conditions</a>
                    <a>Contact Us</a>
                    <a>Support Center</a>
                    <a>Careers</a>
                </div>

                <div className="footer-category px-[12px]">
                    <h4>Account</h4>
                    <a>Sign In</a>
                    <a>View Cart</a>
                    <a>My Wishlist</a>
                    <a>Track My Order</a>
                    <a>Help Ticket</a>
                    <a>Shipping Details</a>
                    <a>Compare Products</a>
                </div>

                <div className="footer-category px-[12px]">
                    <h4>Corporate</h4>
                    <a>Become a Vendor</a>
                    <a>Affiliate Program</a>
                    <a>Farm Business</a>
                    <a>Farm Careers</a>
                    <a>Our Suppliers</a>
                    <a>Accessibility</a>
                    <a>Promotions</a>
                </div>

                <div className="footer-category px-[12px]">
                    <h4>Popular</h4>
                    <a>Milk & Flavoured Milk</a>
                    <a>Butter and Margarine</a>
                    <a>Substitutes</a>
                    <a>Marmalades</a>
                    <a>Sour Cream and Dips</a>
                    <a>Tea & Kombucha</a>
                    <a>Cheese</a>
                </div>

                <div className="footer-category-end px-[12px]">
                    <h4 className="mb-[20px]">Install App</h4>
                    <p>From App Store or Google Play</p>
                    <div className="play-store gap-3 ">
                        <img src="/assets/Icons/app-store.jpg"/>
                        <img src="/assets/Icons/google-play.jpg"/>
                    </div>
                    
                    <a>Secured Payment Gateways</a>
                    <img className="mt-3" src="/assets/Icons/payment-method.png"/>
                </div>
                
            </section>

            <hr/>

            <div className="footer-bottom mt-8 flex flex-col md:flex-row justify-between items-center">
                <div>
                    <p className="text-sm mb-0">&copy; 2024,Nest - HTML Ecommerce Template</p>
                    <p className="text-sm whitespace-nowrap">All rights reserved</p>
                </div>
                <div>
                    <div className="support flex gap-3 items-center">

                       <img className="img" src="/assets/Icons/phone-call.svg"/>

                       <div>
                        <h4 className="num leading-none whitespace-nowrap">1900-6666</h4>
                        <p className="text whitespace-nowrap">Working 8:00 - 22:00</p>
                       </div>

                    </div>

                   <div className="support flex gap-3 items-center">

                       <img className="img" src="/assets/Icons/phone-call.svg"/>

                       <div>
                        <h4 className="num leading-none whitespace-nowrap">1900-8888</h4>
                        <p className="text whitespace-nowrap">24/7 Support Center</p>
                       </div>

                    </div>
                </div>
                
                <div>
                    <div className="social-media-last">
                    <p className="mb-0 mr-4 font-bold text-md">Follow Us</p>
                    <img src="../assets/Icons/icon-facebook-white.svg" alt="img"/>
                    <img src="../assets/Icons/icon-twitter-white.svg" alt="img"/>
                    <img src="../assets/Icons/icon-instagram-white.svg" alt="img"/>
                    <img src="../assets/Icons/icon-pinterest-white.svg" alt="img"/>
                    <img src="../assets/Icons/icon-youtube-white.svg" alt="img"/>
                    </div>
                    <p className="text-sm">Up to 15% discount on your first subscribe</p>
                </div>
            </div>

        </footer>
        </>
    )
}

export default Footer;