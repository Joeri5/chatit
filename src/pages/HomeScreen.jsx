import Navbar from "../components/Navbar";
import Phone from "../images/phone.png";

function HomeScreen() {
    return (
          <div className="homescreen">
              <Navbar />
              <div style={{display: "flex"}}>
                  <div className="container-home-left" style={{background: "white"}}>
                  </div>
                  <div className="container-home-right" style={{background: "white"}}>
                      {/*<img src={Phone} alt="phone" className="image-home"/>*/}
                  </div>
              </div>
          </div>
    )
}

export default HomeScreen;