import Advantages from '@/sections/Advantages'
import Facts from '@/sections/Facts'
import Hero from '@/sections/Hero'
import MasterСlass from '@/sections/MasterСlass'
import Questions from '@/sections/Questions'
import Terms from '@/sections/Terms'

export const metadata = {
  title: 'Home',
}

export default () => {
  return (
    <>
      <Hero />
      <Advantages />
      <Terms />
      <MasterСlass />
      <Facts />
      <Questions />
    </>
  )
}
