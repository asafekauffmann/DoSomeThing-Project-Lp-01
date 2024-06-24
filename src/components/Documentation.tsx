import bobbleMaskBg from '../assets/images/booble-mask-bg.svg'


const Documentation = () => ( 
  <div className="flex flex-col md:flex-row justify-center card xl:w-[1300px] lg:h-[840px] ">

    <div className="w-full flex flex-col items-start justify-center object-contain py-7"> 
      <h1 className="font-semibold text-6xl text-white text-left pb-3 pr-14">
        LEARN HOW TO MAKE GREATEST INFOS ONE
      </h1>
      <p className="text-white text-lg text-left pb-5 pr-36">
        That is the tecnic to improve some text, and make eveerything more cool. 
        We can talk about everything, and nobody will read. Fore sure, It’s a joke.
      </p>
      <button className="w-52 bg-white text-light-blue rounded-3xl p-3 ">SEND EMAIL</button>
    </div>

   
    <div className="w-full">
      <img src={bobbleMaskBg} className="relative md:absolute md:-w-[420px] xl:w-auto" alt="Booble background"/>
      <div className="relative">
        <p className="text-dark-gray">asuahsyha</p>
      </div>
      


      
    </div>
  </div>
)

export default Documentation;