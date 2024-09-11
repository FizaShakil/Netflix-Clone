import React from 'react'
import FirstPage from './components/FirstPage'
import TrendingSection from './components/TrendingSection'
import ReasonToJoin from './components/ReasonToJoin'
import Faq from './components/Faq'


const HomePage = () => {
  return (
    <>
      <FirstPage/>
      <TrendingSection/>
      <ReasonToJoin/>
       <Faq/>
    </>
  )
}

export default HomePage