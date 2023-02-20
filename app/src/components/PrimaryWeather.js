 import React, {Component} from 'react'
 import sunny from '../weather-images/01d.png'
 import {Text, Page} from 'grommet'
const currentWeather = {
    maxWidth:'60%',
}
class PrimaryWeather extends Component{
    constructor(props){
        super(props);
        this.state={fahrenheit:'', celcius:''};
    }
    componentDidMount(){
        this.setState({fahrenheit:3, celcius:23})
    }
    render(){
        return(
            <div className="primary-weather">
                <Page align="center">
                    <img className="current-weather-img" style={currentWeather} src={sunny} alt=""/>
                    <Text gridArea="headers align-center" textAlign='center'>
                        <p>{this.state.fahrenheit} F | {this.state.celcius} C</p>
                    </Text>
                </Page>
            </div>
        )
    }
}
export default PrimaryWeather