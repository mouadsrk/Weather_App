
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
    CardFooter,
  } from "@/components/ui/card"
import Image from "next/image"


export const DaysForecast = () => {

    return (
        <Card className="w-full ">
          <CardHeader>
            <CardTitle>  
                  <div>Hourly Forcast</div> 
            </CardTitle>
          </CardHeader>
    
          <CardContent className="flex items-center justify-between">
              <div>
              <div className="xl:text-6xl text-3xl  font-bold">18°c</div>
              <div className="xl:text-lg  text-ms text-center">Cloudy</div>
              </div>
            <div className="text-lg">☁️</div>
          </CardContent>
    
        </Card>
      )
} 