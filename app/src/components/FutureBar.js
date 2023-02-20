import PrimaryWeather from "./PrimaryWeather"
import PrimaryWeatherCard from "./PrimaryWeatherCard"

const FutureBar = () =>{
    return(
        <div>
            <PrimaryWeatherCard>
                <PrimaryWeather></PrimaryWeather>
            </PrimaryWeatherCard>
            <PrimaryWeatherCard>
                <PrimaryWeather></PrimaryWeather>
            </PrimaryWeatherCard>
            <PrimaryWeatherCard>
                <PrimaryWeather></PrimaryWeather>
            </PrimaryWeatherCard>
            <PrimaryWeatherCard>
                <PrimaryWeather></PrimaryWeather>
            </PrimaryWeatherCard>
            <PrimaryWeatherCard>
                <PrimaryWeather></PrimaryWeather>
            </PrimaryWeatherCard>
        </div>
    )
}
export default FutureBar