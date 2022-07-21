import React from 'react';
import { BsCurrencyDollar } from 'react-icons/bs';
import { GoPrimitiveDot } from 'react-icons/go'
import { Stacked, Pie, Button, SparkLine } from '../components'
import { earningData, SparklineAreaData, ecomPieChartData } from '../data/dummy';
import { useStateContext } from '../contexts/contextProvider'
// import { itemsToOrder } from '@syncfusion/ej2/treemap';
// import { Sparkline } from '@syncfusion/ej2-react-charts';


const Ecommerce = () => {

const { currentColor, currentMode } = useStateContext();

  return (
    <div className="mt-12">
      <div className="flex flex-wrap lg:flex-nowrap justify-center">
        {/* banner div, since it is cover, any content would be displayed on top of it */}
        <div className="bg-white text-gray-600 dark:text-gray-50 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-hero-pattern
        bg-no-repeat bg-cover bg-center">
          {/* this div contains banner data in flex format */}
<div className="flex justify-between items-center">
  {/* div for the content inside the banner */}
<div>
  <p className="font-bold text-gray-600 dark:text-gray-50">
    Earnings 
  </p>
  <p className="text 2-xl text-gray-900 dark:text-gray-50"> $100,000</p>
</div>
</div>

<div className="mt-6">
  {/* This button is an import and all the data passed is in the form of props being recieved from the function */}
<Button color="white" bgColor={currentColor} text="Download" borderRadius="10px" size="md"/>
</div>
        </div>


{/* The map functiond derives data from the dummy data which has objects with properties */}
<div className="flex m-3 flex-wrap justify-center gap-1 items-center">
{earningData.map((item)=>(
  <div key={item.title} className="bg-white text-gray-600 dark:text-gray-50 dark:bg-secondary-dark-bg md:w-56 p-4 pt-9 rounded-2xl">
<button type="button" className="text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl" style={{color : item.iconColor, backgroundColor : item.iconBg}}>
  {item.icon}
</button>
<p className="mt-3">
<span className="text-lg font-semibold">
  {item.amount}
  </span>
  <span className={`text-sm text-${item.pcColor} ml-2`}>
{item.percentage}
  </span>
</p>
<p className="text-sm text-gray-400 mt-1"> {item.title} </p>
  </div>
))}
</div>
</div>

{/* div for graph on homepage, flex containing 2 objects */}
<div className="flex gap-0 flex-wrap justify-center">

  {/* Object 1 */}
  <div className="bg-white dark:text-gray-600 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-780">
    <div className="flex justify-between">
<p className="font-semibold text-xl text-gray-600 dark:text-gray-50"> Revenue Updates </p>
<div className="flex items-center gap-4">

<p  className="flex items-center gap-2 hover:drop-shadow-xl text-gray-600 dark:text-gray-50"> 
  <span>
    <GoPrimitiveDot/>
  </span>
  <span> Expense </span>
</p>

<p  className="flex items-center gap-2 text-green-400 hover:drop-shadow-xl"> 
  <span>
    <GoPrimitiveDot/>
  </span>
  <span> Budget </span>
</p>
</div>
    </div>

{/* chart section */}
<div className="mt-10 flex gap-10 flex-wrap justify-center">
<div className="border-color m-4 pr-10 border-r-1">
<div>
  <p>
    <span className="text-3xl font-semibold text-gray-600 dark:text-gray-50">
$45,000
    </span>
    <span className="p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full text-white bg-green-400 ml-3 text-xs">
    59%
    </span>
  </p>
<p className="mt-1 text-gray-600 dark:text-gray-50"> 
  Budget 
  </p>
</div>


<div className="mt-8">
  <p>
    <span className="text-3xl font-semibold text-gray-600 dark:text-gray-50">
$10,000
    </span>
  </p>
<p className="text-gray-500 mt-1 dark:text-gray-50"> 
  Expense
  </p>
</div>

{/* Spark Line chart  */}
<div className="mt-5">
<SparkLine
currentColor={currentColor}
id="line-sparkline"
type="Area"
height="80px"
width="250px"
data={SparklineAreaData}
color={currentColor}
/>
</div>
{/* Download Button */}
<div className="mt-10">
  <Button color="white" bgColor={currentColor} text="Download Report" borderRadius="10px"/>
</div>

</div>


<div>
  <Stacked 
  width="320px"
  height="360px"/>
</div>


</div>
  </div>
</div>

    </div>
  )
}

export default Ecommerce