import Image from "next/image";


export  const Search = () => {

return (
     <div className=" bg-gray-50 p-[1.5rem]  rounded-xl flex flex-row  items-center   gap-3">
    
            <div className="relative flex-grow">
              <input type="text" placeholder="ciy" className="bg-white border border-[#9CA3AF] rounded-md p-2 focus:outline-none w-full px-[40px]" >
            </input>
            <Image
                src="search.svg"
                alt="search Picture"
                width={25}
                height={25}
                className="absolute left-3 top-2 z-50"
        />
    
            </div>
            <div className="flex justify-center rounded-md bg-blue-500 w-[35px] h-[40px] ml[20px] ">
            <Image
                src="map-pin.svg"
                alt="Picture of the author"
                width={20}
                height={20}
        />
            </div>
          </div>
);


}