import FirstComponent from './FirstComponent';
import SecondComponent from './SecondComponent';
import ThirdComponent from './ThirdComponent';
import FourthComponent from './FourthComponent';
import { FifthComponent } from './FourthComponent';
import LearningJavaScript from './LearningJavaScript';


export default function LearningComponent() {
    return (
      <div className="App">
        <FirstComponent />
        <SecondComponent />
        <ThirdComponent></ThirdComponent>
        <FourthComponent></FourthComponent>
        <FifthComponent></FifthComponent>
        <LearningJavaScript></LearningJavaScript>
      </div>
    );
  }