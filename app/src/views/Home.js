import { Link } from "react-router-dom";
import PrimaryWeather from "../components/PrimaryWeather";
import PrimaryWeatherCard from "../components/PrimaryWeatherCard";
import Greeting from '../utility/Greeting'
const Home = ()=>{
    return(
        <div>
            <PrimaryWeatherCard>
                <h1>Home</h1>
                <Greeting/> 
                <p><Link to="/about">About</Link></p>
                <PrimaryWeather/>
            </PrimaryWeatherCard>
        </div>
    )
}
export default Home