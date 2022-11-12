import spectacles from "./asset/glasses.jpg"
import ReactDOM from 'react-dom';
import "./App.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAppleWhole, faCoffee } from '@fortawesome/free-solid-svg-icons'


const App = () => {

  return (
  <div className="head">
      <div className="main">
        <div className="img">
          <img src={spectacles} height="250px" alt="" />
        </div>

     

      <div className="para">
        <h3>

          Have the courage to follow your
          heart and intution

        </h3>
        <p className="para1">

          steve job was one of the most respected enterpreneus
          and inventors of his time . In 1976 he founded Apple
          together with his friend.  They  created their first
          computer . the Apple I. in  the garage of job's parents

        </p>
        <p className="title">
          <span className="icon"><FontAwesomeIcon icon={faAppleWhole} size="50px" /></span>
          <span className="name">
            Steve Jobs <br />
            11 nov 2022</span>




        </p>

      </div>

      </div>

      </div>
    
  )
}



export default App;
