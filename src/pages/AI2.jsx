import { useState } from 'react';
import blackArrow from '../assets/icons/black-arrow.png'
const AI2 = () => {
  const [userInput, setUserInput] = useState('');
  const [response, setResponse] = useState('');

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Example response generation logic
    if (userInput.toLowerCase().includes('help')) {
      setResponse('Sure! How can I assist you with React today?');
    } 
    else if (userInput.trim()===""){
      setResponse("please ask me anything !")
    }
    else {
      setResponse('Thank you for your question. I will assist you shortly!');
    }

    setUserInput(''); // Clear the input field after submission
  };

  return (
    <div className="text-white flex flex-col items-center p-6 ">
      
      <div className='bg-[#1CC616] p-16 flex flex-col items-center'>
      <h1 className="text-3xl font-bold mb-4">EduNova</h1>
      <p className="text-lg mb-6 text-black">
      Hi  ! How can i help you ?
      </p>

      {/* Input Form */}
      <form onSubmit={handleFormSubmit} className="w-full max-w-md">
        <input
          type="text"
          value={userInput}
          onChange={handleInputChange}
          placeholder="Ask anything..."
          className="w-full px-4 py-2 mb-4  text-black h-52"
        />
        <button
          type="submit"
        >
          <img src={blackArrow} alt="" />
        </button>
      </form>

      {/* Display Response */}
      {response && (
        <div className="mt-4 bg-gray-800 p-4 rounded-lg">
          <p>{response}</p>
        </div>
      )}
      </div>
    </div>
  );
};

export default AI2;
