import logoDoSomeThing from '../assets/images/logo.svg'

const navLinks = [
  {
    id: 1,
    title: "Documentation",
  },
  {
    id: 2,
    title: "Login",
  },
];


const NavBar = () => (
  <>
    <div className="relative h-auto w-full min-w-fit">

      <div className="bg-dark-blue flex flex-row justify-between content-center items-center p-3" >
          <div className="p-6">
            <a href="https://www.figma.com/design/dDzuNWi0mSH6oIqU11mMDc/Background-TestModel?node-id=0-1&t=1hiQ5kDFhrNPc9xa-0" target="_blank">
              <img src={logoDoSomeThing} className="" alt="Do Some Thing logo" />
            </a>
          </div>

          <div className="flex gap-6 p-6">
            {navLinks.map((nav, index) => ( 
              <p key={index} className="text-lg text-paragh-gray">
                {nav.title}
              </p>
            ))}
          </div>
      </div>

    </div>
  </>
)

export default NavBar