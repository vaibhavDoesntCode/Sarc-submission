# Events Page

This project is built with Vite + React and Django REST Framework. This is a simple page on which the events are fetched and displayed. I used a special React library for the carousel, and to enhance the user experience, I have built a modal.

## Installation & Usage (for Windows)

- First, install the requirements for the Frontend using the package manager [npm](https://www.npmjs.com/).

```bash
cd FrontEnd
npm install
```
- Now to run the backend server
 ```bash
cd tutorial
python .\manage.py runserver
```

## About the website

### Frontend
The UI design is quite basic. A React library for the carousel is added. Users can click on any event card to open a modal that will display the event description, including the date, time, and place, along with an image and a description.

### Backend
- There are two APIs and a serializer to add data to the Django SQL database.
- The first API is for GET and POST requests. It is a class-based view. The serializer is also class-based.
- I created one model named Event. These all are in an app named events.
- A default image is used when an event image is not provided during posting.
