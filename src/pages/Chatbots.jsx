import {Link} from 'react-router-dom'
const Chatbots = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-y-9 h-screen" >
        <h1 className="text-[#1CC616]">Select an AI for Your Study Journey</h1>
        <div className="flex flex-row gap-x-11">
            <div>
            <Link to="/AI1">
                <div className="bg-[#6FD46B] p-6">AI 1</div>
                <h5 className="text-[#F11E79]">MentorAI</h5>
            </Link>
            </div>
            <div>
            <Link to="/AI2">
                <div className="bg-[#6FD46B] p-6">AI 2</div>
                <h5 className="text-[#F11E79]">EduNova</h5>
            </Link>
            </div>
            <div>
            <Link to="/AI3">
                <div className="bg-[#6FD46B] p-6">AI 3</div>
                <h5 className="text-[#F11E79]">Learnia</h5>
            </Link>
            </div>
            <div>
            <Link to="/AI4">
                <div className="bg-[#6FD46B] p-6">AI 4</div>
                <h5 className="text-[#F11E79]">AlphaTeach</h5>
            </Link>
            </div>
        </div>
    </div>
  )
}

export default Chatbots