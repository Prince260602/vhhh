
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './chatbot.css';

const Chatbot = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isGreeting, setIsGreeting] = useState(true);
  const [selectedQuestion, setSelectedQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [messages, setMessages] = useState([]); // Added messages state

  const QUESTIONS_PER_PAGE = 4;

  // Fetch questions and answers from the API when the component loads
  useEffect(() => {
    axios.get('http://127.0.0.1:5000/questions')
      .then(response => {
        setQuestions(response.data.questions);
        setAnswers(response.data.answers);
      })
      .catch(error => {
        console.error("Error fetching questions and answers:", error);
        alert("An error occurred while fetching data from the server.");
      });
  }, []);

  const handleYesClick = () => {
    setIsGreeting(false);
  };

  const handleNoClick = () => {
    setIsChatOpen(false);
    setIsGreeting(true);
  };

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
    setIsGreeting(true);
    setSelectedQuestion('');
    setAnswer('');
  };

  const nextQuestions = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex + QUESTIONS_PER_PAGE);
  };

  const previousQuestions = () => {
    setCurrentQuestionIndex((prevIndex) => Math.max(prevIndex - QUESTIONS_PER_PAGE, 0));
  };

  const visibleQuestions = questions.slice(
    currentQuestionIndex,
    currentQuestionIndex + QUESTIONS_PER_PAGE
  );

  const handleSend = (question) => {
    setSelectedQuestion(question);
    setMessages([...messages, { text: question, sender: 'user' }]);  // Add user question to the chat

    axios.post('http://127.0.0.1:5000/ask', { message: question })
      .then(response => {
        setAnswer(response.data.response); // Set the answer
        setMessages(prevMessages => [...prevMessages, { text: response.data.response, sender: 'bot' }]);  // Add bot response
      })
      .catch(error => {
        console.error("Error sending message:", error);
        alert("An error occurred while sending your message.");
      });
  };

  return (
    <div className="app">
      <button className="chat-toggle-button" onClick={toggleChat}>
        {isChatOpen ? 'Close Chat' : 'Chat with us'}
      </button>

      {isChatOpen && (
        <div className="chatbot">
          {isGreeting ? (
            <div className="greeting">
              <p>Hello! I'm here to assist you with questions about The Entrepreneurship Network.</p>
              <div className="greeting-buttons">
                <button onClick={handleYesClick}>Yes</button>
                <button onClick={handleNoClick}>No</button>
              </div>
            </div>
          ) : (
            <>
              <ul>
                {visibleQuestions.map((question, index) => (
                  <li key={index} className='questionChat' onClick={() => handleSend(question)}>
                    {question}
                    {selectedQuestion === question && (
                      <p className="answer">{answer}</p>
                    )}
                  </li>
                ))}
              </ul>
              <div className="navigation-buttons">
                {currentQuestionIndex > 0 && (
                  <button onClick={previousQuestions}>Previous</button>
                )}
                {currentQuestionIndex + QUESTIONS_PER_PAGE < questions.length && (
                  <button onClick={nextQuestions}>Next</button>
                )}
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Chatbot;
