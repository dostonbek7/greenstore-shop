import AboutGallary from '../components/AboutGallary'
import AboutInfo from '../components/AboutInfo'
import OurStory from '../components/OurStory'

function About() {
  return (
    <div className='site-container'>
      <AboutInfo/>
      <OurStory/>
      <AboutGallary/>
    </div>
  )
}

export default About