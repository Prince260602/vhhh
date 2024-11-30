// import Courses from "./Courses/Courses.jsx";
// import Features from "./Features.jsx";
// import FirstPart from "./FirstPart.jsx";
// import Sliding_companies from "./Sliding_companies";
// import Carousel from "./Carousel.jsx";
// import HallOfFame from './HallOfFame.jsx';
// import Testimonial from './Testimonial/Testimonial.jsx'
import Activements from "./Activements";
import Carousel from "./Carousel";
import CommitteeMembers from "./Commiteemembers";
import IncubatorFirstPart from "./IncubatorFirstPart";
import IncubatorFive from "./IncubatorFive";
import IncubatorFour from "./IncubatorFour";
import IncubatorSecond from "./IncubatorSecond";
import IncubatorThird from "./IncubatorThird";
import Testimonial from './Testimonial/Testimonial';



function App() {
  return (
    <div className="App">
      <IncubatorFirstPart/>
      <Activements/>
      <IncubatorSecond/>
      <IncubatorThird/>
      <IncubatorFour/>
      <IncubatorFive/>
      <CommitteeMembers/>
      <Carousel/>
      <Testimonial/>

      {/* /* <Testimonial /> */}
    </div>
  );
}

export default App;
