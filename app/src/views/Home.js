import { Link } from "react-router-dom";
const Home = ()=>{
    return(
        <div>
            <h1>Home</h1>
            <p><Link to="/about">About</Link></p>
        </div>
    )
}
export default Home