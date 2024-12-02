import json
import os
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

    def greet_user(self):
        greeting = "Hello, I am MEFA, your personal assistant. I require some details to give you a better experience."
        print(greeting)

    def collect_user_data(self):
        # Create a dictionary to store user responses
        user_data = {}
        
        # Collect user data
        user_data['name'] = input("What's your name? ")
        user_data['hobby'] = input("What's your hobby? ")
        user_data['location'] = input("Where are you from? ")
        user_data['destination'] = input("Where do you want to go? ")

        # Print the collected data
        print("\nCollected User Data:")
        for question, answer in user_data.items():
            print(f"{question.capitalize()}: {answer}")

        # Create a User object and save the data
        user = User(user_data['name'], user_data['hobby'], user_data['location'], user_data['destination'])
        self.users.append(user)
        self.save_users()

    def find_matching_users(self, hobby, destination):
        return [user for user in self.users if user.hobby == hobby and user.destination == destination]

    def start_chat(self):
        self.greet_user()  # Call the greet_user function at the start
        while True:
            self.collect_user_data()
            hobby_input = input("Enter your hobby to find matching users: ")
            destination_input = input("Enter your destination to find matching users: ")
            
            matches = self.find_matching_users(hobby_input, destination_input)

            if matches:
                print("Matching users:")
                for match in matches:
                    print(f"Name: {match.name}, Location: {match.location}")
            else:
                print("No matching users found.")

            continue_chat = input("Do you want to continue? (yes or no): ")
            if continue_chat.lower() != 'yes':
                break

        print("Goodbye!")
        self.save_users()

    def run(self):
        self.start_chat()

if __name__ == "__main__":
    chatbot = Chatbot()
    chatbot.run()