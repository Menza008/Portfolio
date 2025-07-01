from chatterbot import ChatBot
from chatterbot.trainers import ChatterBotCorpusTrainer

# Create chatbot
chatbot = ChatBot('StudentBot')

# Train the chatbot
trainer = ChatterBotCorpusTrainer(chatbot)
trainer.train('chatterbot.corpus.english')

# Start conversation
print("Hello! I’m StudentBot. Ask me anything (type 'bye' to exit).")

while True:
    user_input = input("You: ")
    if user_input.lower() == 'bye':
        print("StudentBot: Goodbye! Study well 😊")
        break
    response = chatbot.get_response(user_input)
    print("StudentBot:", response)
