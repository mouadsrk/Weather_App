
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
                  <div className="text-6xl font-bold">18°c</div>
                  <div className="text-lg text-center">Cloudy</div>
              </div>
            <div className="text-lg">☁️</div>
          </CardContent>
    
        </Card>
      )
} 