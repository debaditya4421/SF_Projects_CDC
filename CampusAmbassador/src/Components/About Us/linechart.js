import React from 'react'
import './linechart.css'

function LineChart(props) {
   
  return (
    <div>
        <svg className={props.chart} xmlns="http://www.w3.org/2000/svg">
        <polyline fill="none" stroke={props.color} 
      points="0,208 40,160 60,190 80,140 100,160 120,100 140,120  160,90 180,100 200,60 220,80 250,0"
      style={{strokeWidth:'7'}}
     /></svg> 
    
    

  

    </div>
  )
}

export default LineChart