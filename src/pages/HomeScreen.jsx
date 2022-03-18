import Navbar from "../components/Navbar";
import Phone from "../images/texting.webp";

function HomeScreen() {
    return (
          <div className="homescreen">
              <Navbar />
              <div className="wrapper-home" style={{display: "flex"}}>
                  <div className="container-home-left" style={{background: "white"}}>
                      <h3 style={{ fontSize: "5rem", fontFamily: "poppins", fontWeight: 500}}>Think it?</h3>
                      <h3 style={{ fontSize: "5rem", fontFamily: "poppins", fontWeight: 500}}>Chat<span className="homescreen-span" style={{color: "#0061ff"}}>It</span></h3>
                  </div>
                  <div className="container-home-right" style={{background: "white"}}>
                      <img src={Phone} alt="phone" className="image-home"/>
                  </div>
              </div>
          </div>
    )
}

export default HomeScreen;