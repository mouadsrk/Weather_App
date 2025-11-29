import Image from "next/image";
import { Search } from "./component/search";
import { CurrentWeatherCard } from "./component/CurrentWeatherCard ";
import { HourlyForecast } from "./component/HourlyForecast ";
import { AirQualityComponent } from "./component/ AirQualityComponent ";
import { WeatherDetailsCard } from "./component/WeatherDetailsCard";
import { DaysForecast } from "./component/DaysForecast";

export default function Home() {
  return (
    <div className="h-full w-full  ">
  

  <div className=" max-w-[80%]  xl:max-w-[1200px] flex flex-col  gap-[0.8rem]  xl:gap-[1.5rem]  xl:h-full m-auto pt-[1.5rem] xl:pt-[3rem] pb-[1.5rem] xl:pb-[3rem] ">
      <Search />
      <div className="  flex  flex-col  xl:overflow-none  sm:grid sm:grid-cols-[65fr_35fr] xl:grow  gap-[0.8rem] xl:gap-[1.5rem]  ">



        <div className="w-full  flex flex-col gap-[0.8rem] xl:gap-[1.5rem]  ">
          <CurrentWeatherCard />
          <HourlyForecast/>
          <AirQualityComponent/>
        </div>


      <div className="flex  flex-col gap-[0.8rem] xl:gap-[1.5rem] ">
        <WeatherDetailsCard/>
        <DaysForecast/>

        </div>


        
      </div>
    </div>
    
  </div>
  );
}





