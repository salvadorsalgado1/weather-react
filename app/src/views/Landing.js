import { Box, Grid } from 'grommet'
import { Link } from 'react-router-dom'

const Landing = () =>{
    return(
        <div>
            <h1>Landing</h1>
            <Grid
            
            rows={['xsmall', 'xsmall', 'xsmall']}
            columns={['xsmall', 'xsmall', 'xsmall']}
            gap="xsmall"
            areas={[
                { name: 'header', start: [1, 1], end: [1, 1] },
                { name: 'nav', start: [2, 0], end: [2, 1] },
                { name: 'main', start: [1, 1], end: [1, 1] },
            ]}>
  <Box gridArea="header" background="brand" />
  <Box gridArea="nav" background="light-5" />
  <Box gridArea="main" background="light-2" />
</Grid>
            <Link to="/home">Go to homepage</Link>
        </div>
    )
}
export default Landing