import { Link } from "react-router-dom";
import { Grid } from "grommet";
import Description from "../components/Description";
import PrimaryWeather from "../components/PrimaryWeather";
import PrimaryWeatherCard from "../components/PrimaryWeatherCard";
import Greeting from '../utility/Greeting'
const Home = ()=>{
    return(
        <div>
            <Grid
                rows={['small', 'xsmall']} 
                columns={['small', 'medium']}
                gap="medium"
                areas={[
                    { name: 'weather', start: [0, 0], end: [0, 0] },
                    { name: 'description', start: [0, 1], end: [0, 1] },
                 ]}
                >
                <PrimaryWeatherCard gridArea="weather"> 
                    <Greeting /> 
                    <PrimaryWeather/>
                 </PrimaryWeatherCard>
                <Description gridArea="description"/>
            </Grid>
            
        </div>
    )
}
export default Home