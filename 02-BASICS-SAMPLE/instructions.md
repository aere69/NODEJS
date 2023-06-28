# Create a Server App

## 1. Create a server app on port 3000

## 2. Handle 2 Routes.

+ `./` : return a greeting
+ `./users` : return a list of users

## 3. Create a form in `./`

+ In `./` add a formm to input user name and a button to submit POST request to `./create-user` on click

## 4. Add new route to handle user input

+ Add a new route `./create-user` to handle user input.
+ Log the new user name only
+ Redirect to `./users` when request is complete.