# Lissenote

Lissenote is a web app that converts audio and video files into notes, providing a range of useful features for users. These features include live audio recording, multi-language support for notes, the ability to include images from videos (currently only for videos centered around ppts), and optional Wikipedia links in notes.

Lissenote is built with a react frontend and a flask backend, and it uses wave2vec for speech recognition. The app also makes use of a few APIs, including the Wikipedia API and the Google Translate API, to enhance its functionality and usability.

This code sample was a winner in the Smart India Hackathon 2022. The submitted repository contains the frontend code of Lissenote, which was developed by the team member responsible for this code. The backend and model training were handled by other team members.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

To run Lissenote, you will need to have the following software installed on your system:

- Node.js
- NPM (comes with Node.js)

### Installation

1. Clone the repository:

```npm
git clone https://github.com/Welf06/lissenote.git
```

2. Install the dependencies:
```
npm install
```


3. Start the development server:

```
npm start
```

4. Refer [lissenote_backend](https://github.com/GNAR55/lissenote_backend) to get the Backend Running


The app should now be running on http://localhost:3000.

## Built With

- [React](https://reactjs.org/) - The frontend framework used
- [Flask](https://flask.palletsprojects.com/) - The backend framework used
- [Wave2vec](https://github.com/TomiBajsic/Wave2Vec) - Used for speech recognition
- [Wikipedia API](https://www.mediawiki.org/wiki/API:Main_page)


