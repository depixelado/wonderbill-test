# README #

## Installation ##

In order to run this exercise. It will be needed to run both the app and the server. First, install the necessary dependencies

```bash
cd api
npm install
```

```bash
cd wep-app
npm install
```

## Running the app ##

Once all dependencies are installed. Run both the server and the web app.

```bash
// ./api
npm start
```

```bash
// ./web-app
npm start
```

Running the app will automatically open a tab on your default browser

### Exercise Considerations ###

- PropTypes has been used as type-checking tool. [PropTypes documentation](https://reactjs.org/docs/typechecking-with-proptypes.html)
- Dates: I assumed it was desired to manipulate dates without libraries. [Momentjs](https://momentjs.com/) only used to display dates on the right format.
- File structure: I structured the project as it was for a more scalable project in order to show that consideration. For this particular exsercise it could have been simplified.
- PaymentForm reusability: This component could have been simplified by showing a similar form between adding a payment and editing a payment. I added 'mode' prop in order to show a more accurate representation of the designs

## Exercise description ##

At WonderBill we allow users to manually keep track of any regular payments.
These payments could be anything, but common examples are rent and mortgage payments.

## Task Definition ##

We would like you to build a React application that allows the management of regular payments.
A basic React application has been provided that you may use as the base of your work, it is built using `Create React App` and includes `Redux Toolkit` and `React Router`.
A simple Node API has been provided that can be used to store, modify, retrieve and delete payments.

_Please note, the API stores objects in-memory, there is no database, therefore all objects are lost when the server is stopped!_

## Requirements ##

- Built using React
- State management handled by Redux
- Payments are stored in the API
- Appearance matches the provided design (as a rough guide)
- Ability to add a regular payment with a name, amount, start date and frequency (weekly, monthly, annually)
- Ability to modify a regular payment (name, amount, start date and frequency)
- Ability to delete a regular payment
- Web app should work on the latest version of Chrome
- Unit test where appropriate

## Submission ##

Please provide a URL to a public repository containing your task submission.
Instructions on how to run the script are useful to include.

### Thank you for your time and effort! ###
