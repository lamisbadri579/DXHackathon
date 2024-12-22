import homeImage from '../assets/home/home-image.png'
import {Link} from 'react-router-dom'
const Home = () => {
  return (
    <div className="text-white flex flex-col justify-center items-center h-screen">
        <img src={homeImage} alt="home-image" />
        <h2 className='text-center'>Start live stream</h2>
        <div className='flex flex-row gap-x-28 items-center justify-center'>
        <Link to="/group-stream"><button>With a group</button></Link>
        <Link to="/alone-stream"><button>Alone</button></Link>
        </div>

    </div>
  )
}

export default Home