import firstWave from '../assets/images/first-wave.svg'

const  MyHero = () => (

  <div className="h-auto flex flex-col items-center justify-end bg-dark-blue">

    <div className="pt-36 pb-20 object-contain">
      <h1 className="text-white text-6xl font-normal pb-3">
        Create some task
      </h1>
      <h1 className="text-light-blue text-6xl font-semibold pb-3">
        More faster them all
      </h1>
      <p className="text-paragh-gray pb-5 w-full px-12 sm:w-[600px]">
        Talk to your team and make everything great again. Is only agree with work and will know how is good fly.
      </p>

      <div className="inline max:w-[460px] bg-white rounded-3xl py-3"> 
        <input type="text" className="p-2 mx-3 rounded-3xl w-80" placeholder="Sendo your email" />
        <button className="bg-light-blue text-white p-3 rounded-3xl">
          SEND EMAIL
        </button>
      </div>
    </div>
    
    <div className="w-full mb-0">
      <img src={firstWave} className="w-full h-auto" />
    </div>
  </div>
)
    
export default MyHero;