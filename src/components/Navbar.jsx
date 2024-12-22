

import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='text-white flex flex-row gap-x-32'>
      <Link to='/'>StudyUniverse</Link>
      <ul className='flex flex-row gap-x-10'>

        <li><Link to='/'>Home</Link></li>
        <li><Link to='/chatbots'>Chatbots</Link></li>
        <li><Link to='/mydashboard'>My dashboard</Link></li>
        <li><Link to='/about'>About</Link></li>
        <button className='login'><Link to='/login'>Log in</Link></button>
      </ul>

    </div>
  )
}

export default Navbar