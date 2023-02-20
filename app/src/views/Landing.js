import { Button, Paragraph } from 'grommet'
import { Link } from 'react-router-dom'

const styles = {
    justifyContent:'end',
    height:'100%'
}
 
const Landing = () =>{
    return(
        <div className="landing" style={styles}> 
            <h1>Welcome!</h1> 
            <Paragraph>
                Welcome to the Weather App. This is a practice React application 
                to gain and develop new skills. 
            </Paragraph>
            <Paragraph>
                Let's get started!
            </Paragraph>
            <div className="right-align"> 
            <Link to="/home"><Button tag="span" primary label="Start"/></Link>
            </div>
        </div>
    )
}
export default Landing