 import { Card, CardBody } from "grommet"
  const PrimaryWeatherCard = (props)=>{
    return(
        <Card width="small" background="light-1">
        {/* <Card height="small" width="medium" background="light-1"> */}
             <CardBody pad="medium"> 
                {props.children}
            </CardBody>
        </Card> 
    )
}
export default PrimaryWeatherCard