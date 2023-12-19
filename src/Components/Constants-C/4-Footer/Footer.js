import "./footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import logo from "../../Images/llogo.png";
function Footer() {
  return (
    <div className="main footer">
      <div className="footer-content containers ">
        <div className="footer-logo">
        <img src={logo} className="f-logo" alt="Footer Logo" />
        <div>MOVIE NIGHT</div>
        </div>
        
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore,
          sequi magnam debitis labore voluptatibus perferendis obcaecati,
          incidunt sed expedita neque sapiente exercitationem animi atque sint
          vitae pariatur reiciendis commodi provident.
        </p>

        <div className="icons">
          <a href=""><FacebookIcon className="i" /></a>
          <a href=""><LinkedInIcon className="i" /></a>
          <a href=""><InstagramIcon className="i" /></a>
          <a href=""><YouTubeIcon className="i" /></a>
        </div>
      </div>

      <div className="footer-content containers">
        <h4>Projects</h4>
        <li>
          <a href="">Houses</a>
          <a href="">Rooms</a>
          <a href="">Flats</a>
          <a href="">Appartments</a>
        </li>
      </div>



      <div className="footer-content containers">
        <h4>Company</h4>
        <li>
          <a href="">How We Work</a>
          <a href="">Capital</a>
          <a href="">Security</a>
          <a href="">Selling</a>
        </li>
      </div>


      

      




    </div>
  );
}

export default Footer;
