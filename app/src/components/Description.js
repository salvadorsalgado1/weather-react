import { Card, CardBody, Button, Text } from "grommet"
import { Link } from "react-router-dom"
const Description = () =>{
    return(
        <div className="description">
            <Card  height="small" width="medium" background="light-1">
             <CardBody pad="medium">
                <Text>
                Body

                </Text>
                <Text>
                    <Link to="/forecast">Go to Forecast</Link>
                
                </Text>
            </CardBody>
             
               
             
            </Card>
        </div>
    )
}
export default Description