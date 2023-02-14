 import { Card, CardBody, CardHeader } from "grommet"
  const PrimaryWeatherCard = (props)=>{
    return(
        <Card height="small" width="small" background="light-1">
            <CardHeader pad="medium">Header</CardHeader>
            <CardBody pad="medium"> 
                {props.children}
            </CardBody>
        </Card> 
    )
}
export default PrimaryWeatherCard