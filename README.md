## Project Structure

- api Folder

  This folder encapsulates logic for **json server**.
  db.json file is where CRUD operations happens.

- census Folder

  React code sits here.

## Libraries/NPM packages used

- Redux Saga - to handle actions which needs async api calls.
- json-server - for backend, handle api calls coming from frontend.
- axios - to make api calls to backend.
- react-toastify - for notification popups.
- semantic-ui - To make ui more appealing.

## Concepts used.

- Context api.

        Header component contains the nav elements which is under App hierarchy.
        Admin's and volunteer's dashboard are components which are also under App hierarchy.
        So information about which nav element is clicked must be passed down to admin and volunteer components.
        So that they can decide which component to show.
        Here is where context api helped.
        It encapsulates state of which tab is clicked and also controls changing of state when different tab is clicked.

- Redux

  Redux manages state of logged in user and state of list of volunteers.

- Redux Saga

  It handles async api calls to backend. As app is using json-server so all the validations, duplicate checking etc. happens inside sagas.

## Important points!!

Right now the way application is setup:-

- It stores logged in user credentials inside local storage without encryption to persist authorization.
- When user is logging in or registering, if email is present or not, this logic resides inside redux saga.
- Most of the stuff that's supposed to handled in backend is handled by saga.
