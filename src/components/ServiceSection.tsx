const ServiceSection = () => (
  <div className="card bg-lighter-blue h-[80vh]">
    <h1 className="text-medium-blue font-medium text-4xl sm:text-6xl pb-3 lg:px-52" id="height-line-title-mobile sm:height-line-title">
      Welcome to Design Map
    </h1>
    <p className="text-paragh-gray">
      Click on the Vite and React logos to learn more
    </p>


    <div className="h-auto w-full flex flex-col sm:flex-row justify-center items-center my-8">

      <div className="flex flex-col">
        <div className="h-36 max-w-96 p-8 rounded-2xl bg-dark-blue my-4">
          <h4 className="font-semibold text-base text-light-yellow text-left pb-3">
            THE BASIC STEPS
          </h4>
          <p className="text-medium-blue text-sm text-left pb-5">
            That is the tecnic to improve some text, and make eveerything
          </p>
        </div>
      </div>

      <div className="flex flex-col">
        <div className="h-36 max-w-96 p-8">
          <p className="text-medium-blue text-base text-left m-0 pb-5">
            That is the tecnic to improve some text, and make eveerything more cool. We can talk about everything.
          </p>
        </div>
      </div>

    </div>

  </div>
)

export default ServiceSection;