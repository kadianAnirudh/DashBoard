import React from 'react'
import { ChartComponent, SeriesCollectionDirective, LineSeries, SeriesDirective, Inject, DateTime, Legend, Tooltip } from '@syncfusion/ej2-react-charts'
import { lineCustomSeries, LinePrimaryYAxis, LinePrimaryXAxis} from '../../data/dummy'
import { useStateContext } from '../../contexts/contextProvider'

const LineChart = () => {

  const { currentMode } = useStateContext()
  return (
    <div>
<ChartComponent 
id='line-chart'
height='420px' 
primaryXAxis={LinePrimaryXAxis}
primaryYAxis={LinePrimaryYAxis}
chartArea={{border:{width:0}}}
tooltip={{enable:true}}
background={currentMode === 'Dark' ? '#33373E' : '#fff'}
>
  <Inject services={[LineSeries, DateTime, Legend, Tooltip]}/>
  <SeriesCollectionDirective>
    {lineCustomSeries.map((item,index)=> 
    // ...item means, spread of data wrt the fromat that has been coded
    <SeriesDirective key={index} {...item}/>)}
  </SeriesCollectionDirective>
</ChartComponent>
    </div>
  )
}

export default LineChart