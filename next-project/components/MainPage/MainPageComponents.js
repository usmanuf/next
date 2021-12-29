import CarsPurchase from "./CarsPurchase";
import { Home } from "./Home"
import { LookingCar } from "./LookingCar"
import SellAnyCar from "./SellAnyCar";
import StepSellYourCar from "./StepSellYourCar";
import WhyChooseUs from "./WhyChooseUs";
import 'bootstrap/dist/css/bootstrap.min.css';
import MakerSection from "../MakerSection";
export const MainPageComponents = () => {
    return (
        <>  
        <div className="home">
            <Home />
            <LookingCar />
            <WhyChooseUs />
            <CarsPurchase />
            <StepSellYourCar />
            <SellAnyCar />
            <MakerSection />
        </div>
           
        </>
    )
}
