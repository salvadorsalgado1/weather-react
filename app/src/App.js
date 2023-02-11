import './App.css';
import { Route, Routes } from 'react-router-dom'
import Home from './views/Home'
import About from './views/About'
import Landing from './views/Landing';
import { Grommet, Header, Text } from 'grommet';

const theme = {
  global: {
    font: {
      family: "Roboto",
      size: "18px",
      height: "20px",
    },
  },
};
const AppBar = (props) => (
   <Header
     background="brand"
     pad={{ left: "medium", right: "small", vertical: "small" }}
     elevation="medium"
     {...props}
   />
  );
function App() {
  return (
    <Grommet full theme={theme}>
       <AppBar>
        <Text size="large">My App</Text>
       </AppBar>
       <Routes>
          <Route path="/" element={<Landing/>}/>
          <Route path="home" element={<Home/>}/>
          <Route path="about" element={<About/>}/>
       </Routes>
    </Grommet>
  );
}

export default App;
