import bobbleMaskBg from '../assets/images/bobble-mask-bg.svg'
import bobbleMaskBgCircle from '../assets/images/bobble-mask-bg-circle.svg'

const Documentation = () => ( 
  <>
    <div className="flex flex-col md:flex-row justify-center card xl:w-[1300px] lg:h-[840px] ">
      <div className="w-full flex flex-col items-start justify-center object-contain p-7 lg:pr-16"> 
        <h1 className="font-semibold text-4xl sm:text-6xl text-white text-left pb-3" id="sm:height-line-title">
          LEARN HOW TO MAKE GREATEST INFOS ONE
        </h1>
        <p className="text-medium-blue text-lg text-left pb-5 ">
          That is the tecnic to improve some text, and make eveerything more cool. 
          We can talk about everything, and nobody will read. Fore sure, It’s a joke.
        </p>
        <button className="w-52 bg-white text-light-blue rounded-3xl p-3 ">SEND EMAIL</button>
      </div>
      <div className="w-full flex flex-col items-center justify-center object-contain">
        <img src={bobbleMaskBg} className="relative lg:absolute lg:w-[500px]" alt="Booble background"/>
        <div className="relative">
          <p className="text-dark-gray">
            Test Image
          </p>
        </div>
      </div>
    </div>

    <div className="flex flex-col-reverse md:flex-row justify-center card xl:w-[1300px] lg:h-[840px] ">
      <div className="w-full flex flex-col items-center justify-center object-contain">
        <img src={bobbleMaskBgCircle} className="relative lg:absolute lg:w-[500px]" alt="Booble background"/>
          <div className="relative">
            <p className="text-dark-gray">
              Test Image
            </p>
        </div>
      </div>
      <div className="w-full flex flex-col items-start justify-center object-contain p-7 lg:pl-16"> 
        <h1 className="font-semibold text-4xl sm:text-6xl text-white text-left pb-3" id="sm:height-line-title">
          CHECK YOUR CORPORATION EMAIL UPDATED
        </h1>
        <p className="text-medium-blue text-lg text-left pb-5 ">
          That is the tecnic to improve some text, and make eveerything more cool. 
          We can talk about everything, and nobody will read. Fore sure, It’s a joke.
        </p>
        <button className="w-52 bg-white text-light-blue rounded-3xl p-3 ">
          SEND EMAIL
        </button>
      </div>
    </div>
  </>
)

export default Documentation;