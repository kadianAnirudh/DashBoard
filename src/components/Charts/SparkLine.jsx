import React from 'react'
import { SparklineComponent, Inject, SparklineTooltip } from '@syncfusion/ej2-react-charts'

const SparkLine = ({id, height, width, color, data, type, currentColor}) => {
  return ( 
//     <div>
// <SparklineComponent
//     id={id}
//     height={height}
//     width={width}
//     lineWidth={1}
//     valueType="Numeric"
//     fill={color}
//     border={{color : currentColor, width : 2}}
//     dataSource={data}
//     xName="x"
//     yName="y"
//     type={type}
//     tooltipSettings={{visible: true,   format:'${x} : data ${y}', trackLineSettings:{visible: true}}}
//   >

// {height}
// </SparklineComponent>
// </div>

<SparklineComponent id={id} height={height} width={width} 
     dataSource={data}
         border={{color : currentColor, width : 2}}
             lineWidth={1}
    valueType="Numeric"
    fill={color}
    type={type}

        xName="x"
    yName="yval"
    // xName='xval' yName='yval'
    tooltipSettings={{visible: true,   format:'${x} : ${yval}', trackLineSettings:{visible: true}}}

// Assign the dataSource values to series of sparkline 'xName and yName'
>
  <Inject services={[SparklineTooltip]}/>
</SparklineComponent>
  )
}

export default SparkLine