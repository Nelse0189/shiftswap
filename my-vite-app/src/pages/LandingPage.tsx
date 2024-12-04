
import shiftswapIcon from './images/shiftswap_icon_500.png';
import anotherImage from './images/worker1.jpg'; // Replace with actual image path
import {Card} from "@/components/ui/card"

function LandingPage() {
  return (
    <div>
      <h1>Welcome to ShiftSwap</h1>
      <img src={shiftswapIcon} alt="ShiftSwap Icon" />
      <img src={anotherImage} alt="Another Image" />
      <Card title="About ShiftSwap">
        <p>ShiftSwap is an application that allows businesses to:</p>
        <ul>
          <li>Reduce no-shows</li>
          <li>Reduce time managing the schedule</li>
          <li>Create a centralized communication zone for employees</li>
        </ul>
      </Card>
    </div>
  );
}

export default LandingPage;