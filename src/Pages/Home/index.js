import { Card} from "antd";
import "./Home.scss";
import { NavLink } from "react-router-dom";
import imageWelcome from "./images/welcome.gif"


function Home() {
 
  return (
    <>
      <Card className="home mr-3 ml-3">
        <div className="home__welcome">
          <div className="home__welcome-header">
            <h1>Welcome To The <br/> <p>Adorable World</p></h1>
              <img src={imageWelcome} alt="welcome"></img>
          </div>
        </div>
      </Card>
    </>
  );
}
export default Home;
