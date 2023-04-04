import {Link} from 'react-router-dom'
import ThankCSS from './Thanks.module.css'

const ThankYou = () => {
    const divStyle = {
       color: "white"
    }
  return (
    <header className="div">
        <h1 className={ThankCSS.main-text}>Thank you for being the most amazing person in the world!</h1>
        <Link to={"/present"}><button className="main-btn">view your present</button></Link>
    </header>
  );
}

export default ThankYou;
