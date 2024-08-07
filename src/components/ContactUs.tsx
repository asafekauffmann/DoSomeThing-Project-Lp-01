import fourWave from '../assets/images/four-wave.svg'
import bobbleMaskBgLast from '../assets/images/bobble-mask-bg-last.svg'
import imageContact from '../assets/images/retangle-contact.svg'
import threeWave from '../assets/images/three-wave.svg'

const ContactUs = ( ) => (
  <>
    <div className="w-full mt-0 bg-lighter-blue pt-28">
      <img src={threeWave} className="w-full" />
    </div>
    <div className="relative h-auto w-full flex justify-center bg-dark-blue">
      <div className="flex flex-col-reverse md:flex-row justify-center card xl:w-[1300px] lg:h-[840px] ">
        <div className="w-full flex flex-col items-center justify-center object-contain py-16">
          <img src={bobbleMaskBgLast} className="absolute md:-w-[360px] xl:w-auto z-0" alt="Booble background"/>
          <div className="relative">
            <img src={imageContact} className="z-10" alt="image contact"/>
          </div>
        </div>

        <div className="w-full flex flex-col items-start justify-center object-contain py-7 lg:pl-16 z-10"> 
          <h1 className="font-semibold text-5xl sm:text-6xl text-light-yellow text-left pb-3" id="height-line-title-mobile sm:height-line-title">
            See what you can do in one week with us.
          </h1>
          <p className="text-medium-blue text-lg text-left pb-5 ">
            That is the tecnic to improve some text, and make eveerything more cool. 
            We can talk about everything, and nobody will read. Fore sure, It’s a joke.
          </p>
          <button className="w-52 bg-white text-light-blue rounded-3xl p-3">
            SEND EMAIL
          </button>
        </div>
      </div>
    </div>
    <div className="w-full mb-0 bg-light-blue">
      <img src={fourWave} className="w-full" />
    </div> 
  </>
)

export default ContactUs;