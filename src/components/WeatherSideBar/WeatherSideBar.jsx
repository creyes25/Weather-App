import { useState, useEffect } from "react"

import { SideBarCont, SideBarInfo } from "./WeatherSideBar.styles"

export const WeatherSideBar = ({type, info}) => {
  const [title, setTitle] = useState('')
  const [metricOrSymbol , setMetricOrSymbol] = useState('')
  
  const getTitle = (type) => {
    switch (type) {
      case 'visibility':
        setTitle('Visiblity')
        setMetricOrSymbol('ft')
        break;
      case 'wind':
        setTitle('Wind')
        setMetricOrSymbol('km/h')
        break
      case 'clouds':
        setTitle('Clouds')
        setMetricOrSymbol('%')
        break;
      case 'humidity':
        setTitle('Humidity')
        setMetricOrSymbol('%')
        break;
    
      default:
        setTitle('')
        break;
    }
  }

  useEffect(() => {
    getTitle(type)
  },[type])

  return (
    <SideBarCont>
      <SideBarInfo>
        <h2>{title}</h2>
        <h2>{info}{metricOrSymbol}</h2>
      </SideBarInfo>
      <p>
      The air Quality is generally acceptable for most individuals. However, sensitive groups may experience minor to moderate symptoms from long-term exposure
      </p>
    </SideBarCont>
  )
}