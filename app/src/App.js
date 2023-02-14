import './App.css';
import { Route, Routes } from 'react-router-dom'
import Home from './views/Home'
import About from './views/About'
import Landing from './views/Landing';
import { Box, Grommet, Header, Page, PageContent, Text } from 'grommet';
import Container from './components/Container';

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
       <AppBar className="app-bar">
        <Text size="large">My App</Text>
       </AppBar>
        <Container>
        <Routes>
          <Route path="/" element={<Landing/>}/>
          <Route path="home" element={<Home/>}/>
          <Route path="about" element={<About/>}/>
       </Routes>
         </Container>
    </Grommet>
  );
}

export default App;
