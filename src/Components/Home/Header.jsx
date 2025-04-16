import { Link } from "react-router-dom"
import Speech from "./Speech"
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const Header = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className='w-[75%] mx-auto flex sm:flex-row flex-col items-center justify-between text-primary rounded-lg pb-56'>
      {/* <!--- text left-side -->  */}
      <div className='md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]'>
        <p className='w-[700px text-2xl font-bold lg:text-4xl md:leading-tight text-secondary'>        <Speech />
        </p>
        <div className='paragraph flex flex-col md:flex-row items-center gap-3 text-slate-500 text-sm font-light'>
          <p>It is used by more than 500+ people around the world<br className='hidden md:block' />
            and enjoy our website.</p>
        </div>
        {!currentUser ? <Link to="/signup" className='btn-large bg-primary'>
          Create Account <img src="./arrow_icon.svg" alt="" className='w-3' />
        </Link> :
          <Link to="/SomChat" className='btn-large bg-primary'>
            Chat With Friends <img src="./arrow_icon.svg" alt="" className='w-3' />
          </Link>
        }
      </div>

      {/* <!--- text right-side -->  */}
      <div className='md:w-2/4 relative'>
        <iframe className='w-[35rem] h-[35rem] pt-20' src="https://lottie.host/embed/f2e2257f-6949-4e1a-a41b-1cdc1617a9cc/JrIV0lufxe.lottie"></iframe>
      </div>
    </div>
  )
}

export default Header