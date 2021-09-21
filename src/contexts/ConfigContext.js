import React, { useState, useEffect, useMemo } from 'react'

import useWindowDimensions from '../Hooks/UseWindowsDimensions'
import useOnClick from '../Hooks/UseOnClick'

const ConfigContext = React.createContext()

export const ConfigProvider = (props) => {
  const [isSmallMobile, setIsSmallMobile] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [isTablet, setIsTablet] = useState(false)
  const [isMonitor, setIsMonitor] = useState(false)
  const [isXlMonitor, setIsXlMonitor] = useState(false)
  const [is2XlMonitor, setIs2XlMonitor] = useState(false)
  const [isTouchable, setIsTouchable] = useState(false)
  const [loading, setLoading] = useState(false)

  const { width } = useWindowDimensions()

  useEffect(() => {
    setIsSmallMobile(width <= 640)
    setIsMobile(width <= 768)
    setIsTablet(width > 768 && width <= 1024)
    setIsMonitor(width > 1024 && width <= 1280)
    setIsXlMonitor(width > 1280 && width <= 1586)
    setIs2XlMonitor(width > 1586)
  }, [width])

  useEffect(() => {
    const interval = setInterval(() => {
      /* setIsTouchable((('ontouchstart' in window) ||
        (navigator.maxTouchPoints > 0) ||
        (navigator.msMaxTouchPoints > 0))); */
      setIsTouchable(window.matchMedia('(hover:none)').matches)
    }, 250)

    return () => {
      clearInterval(interval)
    }
  }, [])

  const startLoading = () => {
    setLoading(true)
  }
  const stopLoading = () => {
    setLoading(false)
  }

  const result = useMemo(
    () => ({
      isSmallMobile: isSmallMobile,
      isMobile: isMobile,
      isTouchable: isTouchable,
      isTablet: isTablet,
      isMonitor: isMonitor,
      isXlMonitor: isXlMonitor,
      is2XlMonitor: is2XlMonitor,
      loading: loading,
      startLoading,
      stopLoading
    }),
    [
      isMobile,
      isTablet,
      isMonitor,
      loading,
      isTouchable,
      isSmallMobile,
      isXlMonitor,
      is2XlMonitor
    ]
  )

  return <ConfigContext.Provider value={result} {...props} />
}

export const useConfigContext = () => {
  const context = React.useContext(ConfigContext)

  if (!context) {
    throw new Error(
      'useConfigContext must be call inside of a ContextProvider component'
    )
  }

  return context
}
