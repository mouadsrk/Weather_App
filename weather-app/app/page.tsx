import Image from "next/image";
import { Search } from "./component/search";
import { CurrentWeatherCard } from "./component/CurrentWeatherCard ";
import { HourlyForecast } from "./component/HourlyForecast ";
import { AirQualityComponent } from "./component/ AirQualityComponent ";
import { WeatherDetailsCard } from "./component/WeatherDetailsCard";
import { DaysForecast } from "./component/DaysForecast";

export default function Home() {
  return (
    <div className="h-full w-full ">
  

  <div className="w-[1200px] flex flex-col gap-[1.5rem]  h-full m-auto pt-[3rem] pb-[3rem] ">
      <Search />
      <div className="grid grid-cols-[65fr_35fr] grow   gap-[1.5rem] bg-">
        <div className="w-full  flex flex-col gap-[1.5rem]  ">
          <CurrentWeatherCard />
          <HourlyForecast/>
          <AirQualityComponent/>
        </div>



        <div className="flex flex-col gap-[1.5rem]">
        <WeatherDetailsCard/>
        <DaysForecast/>

        </div>
      </div>
    </div>
    
  </div>
  );
}





