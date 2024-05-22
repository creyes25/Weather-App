import { useState, useEffect } from "react"

import { SideBarCont, SideBarInfo, IconCont } from "./WeatherSideBar.styles"

export const WeatherSideBar = ({type, info}) => {
  const [title, setTitle] = useState('')
  const [metricOrSymbol , setMetricOrSymbol] = useState('')
  const [icon, setIcon] = useState('')
  
  const getTitle = (type) => {
    switch (type) {
      case 'visibility':
        setTitle('Visiblity')
        setMetricOrSymbol('ft')
        setIcon('https://cdn-icons-png.flaticon.com/128/2210/2210317.png')
        break;
      case 'wind':
        setTitle('Wind')
        setMetricOrSymbol('km/h')
        setIcon('https://cdn-icons-png.flaticon.com/128/2057/2057945.png')
        break
      case 'clouds':
        setTitle('Clouds')
        setMetricOrSymbol('%')
        setIcon('https://cdn-icons-png.flaticon.com/128/414/414876.png')
        break;
      case 'humidity':
        setTitle('Humidity')
        setMetricOrSymbol('%')
        setIcon('https://cdn-icons-png.flaticon.com/128/5664/5664979.png')
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
        <IconCont>
          <img
            src={icon}
            alt=""
          />
        </IconCont>
        <h2>{title}</h2>
        <h2>{info}{metricOrSymbol}</h2>
      </SideBarInfo>
      <p>
      The air Quality is generally acceptable for most individuals. However, sensitive groups may experience minor to moderate symptoms from long-term exposure
      </p>
    </SideBarCont>
  )
}