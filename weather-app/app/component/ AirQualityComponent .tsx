import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
    CardFooter,
  } from "@/components/ui/card"
import Image from "next/image"


export const AirQualityComponent = () => {

    return (
        <Card className="w-full ">
          <CardHeader>
            <CardTitle>
              <div className="flex gap-[5px]">
                  <Image src="map-pin-black.svg" width={20} height={20} alt="map-ping Picture"/>
                  <div>San Francisco</div> 
              </div>
            </CardTitle>
            <CardDescription>Monday, 2:30 PM</CardDescription>
          </CardHeader>
    
          <CardContent className="flex items-center justify-between">
              <div>
              <div className="xl:text-6xl text-3xl  font-bold">18°c</div>
              <div className="xl:text-lg  text-ms text-center">Cloudy</div>
              </div>
            <div className="text-lg">☁️</div>
          </CardContent>
    
          <CardFooter className="flex gap-[20px] text-sm text-muted-foreground">
            <span>H: 72%</span>
            <span>L: 65%</span>
          </CardFooter>
        </Card>
      )
} 