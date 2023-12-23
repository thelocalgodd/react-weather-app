
const Weather = () => {
  return (
    <div className='flex flex-col justify-center p-2 bg-green-300 mt-2 w-[400px] mx-auto rounded-lg h-[350px]'>
        <div className="flex flex-grow">
            <p className='bg-green-100 h-fit p-1 rounded-lg flex-grow text-center mr-2'>Weather Information</p>
            <p className='bg-green-300 h-fit p-1 rounded-lg flex-grow text-center'>Location</p>
        </div>
        <div className="bg-sky-50 justify-start h-full mt-2 p-2 rounded-lg">
            <div className="flex">
            <p className="bg-green-300 p-2 w-fit rounded-lg flex-grow text-center">Weather Condition</p>
            <p className="bg-green-200 p-2 ml-2 rounded-lg flex-grow text-center">Sunny</p>
            </div>
            <div className="flex mt-2">
            <p className="bg-green-300 p-2 w-fit rounded-lg flex-grow text-center">% Chance Precipitation</p>
            <p className="bg-green-200 p-2 ml-2 rounded-lg flex-grow text-center">20%</p>
            </div>
            <div className="flex mt-2">
            <p className="bg-green-300 p-2 w-fit rounded-lg flex-grow text-center">Wind Speed</p>
            <p className="bg-green-200 p-2 ml-2 rounded-lg flex-grow text-center">20km/h</p>
            </div>
            <div className="flex mt-2">
            <p className="bg-green-300 p-2 w-fit rounded-lg flex-grow text-center">Humidity</p>
            <p className="bg-green-200 p-2 ml-2 rounded-lg flex-grow text-center">50%</p>
            </div>
            <div className="flex mt-14">
            <p className="bg-sky-300 p-2 w-fit rounded-lg flex-grow text-center font-bold">23-12-2023</p>
            <p className="bg-sky-200 p-2 ml-2 rounded-lg flex-grow text-center">12:11pm</p>
            </div>
        </div>                
    </div>
  )
}

export default Weather