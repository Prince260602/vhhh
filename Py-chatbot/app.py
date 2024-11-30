


from flask import Flask, jsonify, request, session
from flask_cors import CORS  # Import CORS to handle cross-origin requests
import secrets  # For generating a secure secret key

# Initialize Flask app
app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Generate a secure secret key
app.secret_key = secrets.token_hex(24)

# Questions and answers dictionaries
questions = {
    0: "👋 Hello! I'm here to assist you with questions about The Entrepreneurship Network.",
    1: "What is the name of the company?",
    2: "What products or services does the company 💬 offer?",
    3: "Where is the company headquartered?",
    4: "How do I apply for an internship 👈 ?",
    5: "What is Pay After Placement?",
    6: "How does Pay After Placement work?",
    7: "Can I see a list of 📚 courses available for beginners?",
    8: "Can I choose how long I take to repay?",
    9: "Who is your target audience or ideal customer?",
    10: "What are the company’s key values or principles?",
    11: "What are the main goals for the company in the next few years?",
    12: "How has the company adapted to market trends?",
    13: "What internships do you offer ⚡ ?",
    14: "Free site for education?",
    15: "Free site for mentorship?",
    16: "Free site for resume building?",
    17: "Free site for influencer marketing?",
    18: "Free site for training?",
    19: "Free site for AI tools?",
    20: "Free site for idea to expansion?"
}

answers = {
    "What is the name of the company?": "The Entrepreneurship 😊 Network",
    "What products or services does the company offer?": "We provide education 🎓 , mentorship, training, and knowledge 👩‍💻 about AI tools, along with influencer marketing and career-building programs.",
    "Where is the company headquartered?": "Delhi, India",
    "How do I apply for an internship?": "You can apply for internships through our career page 👉 : https://career.entrepreneurshipnetwork.net/",
    "What is Pay After Placement?": "Pay After Placement 💸 (PAP) is a model where students pay tuition fees only after securing a job.",
    "How does Pay After Placement work?": "No upfront fees. Repayment starts after securing a job with a minimum salary threshold.",
    "Can I see a list of courses available for beginners?": "We offer 21 courses. Check them out here 👉 : https://ten-official.vercel.app/Courses",
    "Can I choose how long I take to repay?": "The repayment period is usually pre-determined but can vary based on the agreement.",
    "Who is your target audience or ideal customer?": "Our target audience includes aspiring entrepreneurs, developers, and students looking to enhance their skills.",
    "What are the company’s key values or principles?": "Our key values include innovation, ⚡ mentorship, and empowering entrepreneurs.",
    "What are the main goals for the company in the next few years?": "Our goals are to expand services, enhance technology, and strengthen partnerships in the coming years.",
    "How has the company adapted to market trends?": "We adapt by staying updated with industry trends and evolving our services to meet current needs.",
    "What internships do you offer?": "We offer internships in areas such as 💻 Frontend, Android, MERN Stack, Python, and Backend.",
    "Free site for education?": "Free site for education 👉 : https://www.entrepreneurshipnetwork.net/",
    "Free site for mentorship?": "Free site for mentorship 👉 : https://mentor.entrepreneurshipnetwork.net/",
    "Free site for resume building?": "Free site for resume building 👉 : https://resume.entrepreneurshipnetwork.net/",
    "Free site for influencer marketing?": "Free site for influencer marketing 👉 : https://www.entrepreneurshipnetwork.net/Influencer_Marketing",
    "Free site for training?": "Free site for training 👉 : https://hrportal.entrepreneurshipnetwork.net/",
    "Free site for AI tools?": "Free site for AI tools 👉 : https://ailabs.entrepreneurshipnetwork.net/",
    "Free site for idea to expansion?": "Free site for idea to expansion 👉 : https://ideaengine.entrepreneurshipnetwork.net/",
    "Hello! I'm here to assist you with questions about The Entrepreneurship Network":"You can ask me about the company 😊 , its services, Pay After Placement, internships, and more.",
}

@app.route('/')
def index():
    # Clear session at the start of each conversation
    session.clear()
    return jsonify(message="Welcome to The Entrepreneurship Network chatbot API!")

@app.route('/ask', methods=['POST'])
def ask():
    data = request.json  # Get JSON data from the request
    user_message = data.get('message', '').strip()  # Retrieve user message and strip whitespace
    
    if user_message.lower() == "hello":
        response = ("Hello! I'm here to assist you with questions about The Entrepreneurship Network. "
                    "You can ask me about the company, its services, Pay After Placement, internships, and more.")
        should_close = False
    elif user_message.lower() == "quit":
        response = "Thank you for using the chatbot. Goodbye!"
        should_close = True
    else:
        # Check if there's a pre-defined answer, or give a default response
        response = answers.get(user_message, "I'm sorry 😑 , I didn't understand that. Please ask about The Entrepreneurship Network.")
        should_close = False

    return jsonify(response=response, should_close=should_close)

@app.route('/questions', methods=['GET'])
def get_questions():
    # Return all questions as a JSON list
    return jsonify(questions=list(questions.values()))

if __name__ == '__main__':
    app.run(debug=True)
