import json
import os
import time
import platform
from gtts import gTTS
from user import User

class Chatbot:
    def __init__(self):
        self.users = self.load_users()

    def load_users(self):
        try:
            with open('data/users.json', 'r') as file:
                users_data = json.load(file)
                return [User (**data) for data in users_data]
        except FileNotFoundError:
            return []

    def save_users(self):
        with open('data/users.json', 'w') as file:
            json.dump([user.__dict__ for user in self.users], file)

    def speak(self, text):
        try:
            tts = gTTS(text=text, lang='en')
            tts.save("temp.mp3")
            
            # Determine the OS and play the audio file accordingly
            if platform.system() == "Windows":
                os.system("start temp.mp3")
            elif platform.system() == "Darwin":  # macOS
                os.system("afplay temp.mp3")
            elif platform.system() == "Linux":
                os.system("xdg-open temp.mp3")
            else:
                print("Unsupported OS. Cannot play audio.")
            
            # Allow enough time for the audio to finish playing
            time.sleep(2 + len(text) / 10)  # Adjust sleep time based on text length
        except Exception as e:
            print(f"Error in TTS: {e}")

    def greet_user(self):
        greeting = "Hello, I am MEFA, your personal assistant. I require some details to give you a better experience."
        self.speak(greeting)

    def collect_user_data(self):
        self.speak("What's your name?")
        name = input("What's your name? ")
        
        self.speak("What's your hobby?")
        hobby = input("What's your hobby? ")
        
        self.speak("Where are you from?")
        location = input("Where are you from? ")
        
        self.speak("Where do you want to go?")
        destination = input("Where do you want to go? ")
        
        user = User(name, hobby, location, destination)
        self.users.append(user)
        self.save_users()

    def find_matching_users(self, hobby, destination):
        return [user for user in self.users if user.hobby == hobby and user.destination == destination]

    def start_chat(self):
        self.greet_user()  # Call the greet_user function at the start
        while True:
            self.collect_user_data()
            self.speak("Enter your hobby to find matching users:")
            hobby_input = input("Enter your hobby to find matching users: ")
            
            self.speak("Enter your destination to find matching users:")
            destination_input = input("Enter your destination to find matching users: ")
            
            matches = self.find_matching_users(hobby_input, destination_input)

            if matches:
                self.speak("Matching users:")
                print("Matching users:")
                for match in matches:
                    print(f"Name: {match.name}, Location: {match.location}")
            else:
                self.speak("No matching users found.")
                print("No matching users found.")

            self.speak("Do you want to continue? (yes or no)")
            continue_chat = input("Do you want to continue? (yes/no): ")
            if continue_chat.lower() != 'yes':
                break

        self.speak("Goodbye!")
        print("Goodbye!")

        self.save_users()

    def run(self):
        self.start_chat()

if __name__ == "__main__":
    chatbot = Chatbot()
    chatbot.run()