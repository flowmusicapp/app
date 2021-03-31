import { useState, useEffect } from 'react'
import { getCode } from 'country-list'
import axios from 'axios'

export default () => {
  const [countryName, setCountryName] = useState()
  const getGeoInfo = async () => {
    try {
      const { data } = await axios.get('https://ipapi.co/json/')
      setCountryName(data.country_name)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getGeoInfo()
  }, [])

  const code = countryName ? getCode(countryName) : null
  return code
}
