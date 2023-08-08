// npm install --save react-responsive
import "./App.css";
import First from "./components/First";
 
import Second from "./components/Second";
import Third from "./components/Third";
import Forth from "./components/Forth";
import { useMediaQuery } from 'react-responsive'
import ReportsAndFilling from "./components/ReportsAndFilling";
import PdfComponents from "./components/PdfComponents";



function App() {
    // const isDesktopOrLaptop = useMediaQuery({query: '(min-width: 1224px)'})

    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 480px)' })
    

    
  

  return (
    <div>
{/* <Navbar/> */}
<First isTabletOrMobile = {isTabletOrMobile}/>
<Second isTabletOrMobile={isTabletOrMobile}/>
<Third isTabletOrMobile={isTabletOrMobile}/>
<Forth isTabletOrMobile={isTabletOrMobile}/>
<ReportsAndFilling/>
<PdfComponents/>
    </div>
    )
}

export default App;
