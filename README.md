# Netflix GPT

## Overview
Netflix GPT is a dynamic web application that integrates GPT-powered movie recommendations into a Netflix-like platform. This clone provides a seamless experience for users to explore and discover movies with advanced search capabilities and personalized recommendations. The project uses Google Firebase for authentication, TMDB API for fetching movie data, React Router for navigation, and Redux for state management.

**Live Demo**: [Netflix GPT](https://video-gpt-a69a4.firebaseapp.com/)

## Features
- **Google Firebase Authentication**: Secure sign-up and sign-in functionality.
- **GPT-Driven Search**: Get movie recommendations powered by GPT.
- **TMDB API Integration**: Fetch real-time data for trending, popular, and top-rated movies.
- **Responsive Design**: Optimized for all screen sizes.
- **Custom Hooks**: Modular and reusable hooks for API calls.
- **State Management**: Redux is used to manage global state effectively.
- **React Router**: Smooth navigation between pages.

## Project Structure
```plaintext
├── README.md
├── firebase.json
├── package.json
├── tailwind.config.js
├── .firebaserc
├── public/
│   └── index.html
├── src/
│   ├── App.test.js
│   ├── index.css
│   ├── index.js
│   ├── setupTests.js
│   ├── Component/
│   │   ├── Body.js
│   │   ├── Browse.js
│   │   ├── GPTSearch.js
│   │   ├── GptMovieSuggestion.js
│   │   ├── GptSearchBar.js
│   │   ├── Header.js
│   │   ├── Login.js
│   │   ├── MainContainer.js
│   │   ├── MovieCards.js
│   │   ├── MovieList.js
│   │   ├── SecondaryContainer.js
│   │   ├── VedioTitle.js
│   │   └── VideoBackground.js
│   ├── assets/
│   └── utils/
│       ├── GPTSlice.js
│       ├── Validate.js
│       ├── appstore.js
│       ├── configSlice.js
│       ├── constants.js
│       ├── firebase.js
│       ├── languageConstant.js
│       ├── movieSlice.js
│       ├── openAi.js
│       ├── useMovieTrailer.js
│       ├── useNowPlayingMovie.js
│       ├── usePopularApi.js
│       ├── useTopRated.js
│       ├── useTrendingMovie.js
│       └── userSlice.js
└── .firebase/
    └── hosting.YnVpbGQ.cache
```

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/taniyakamboj15/netflix-gpt.git
   ```
2. Navigate to the project directory:
   ```bash
   cd netflix-gpt
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start
   ```
5. Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

## Technologies Used
- **Frontend**: React.js, Tailwind CSS
- **Backend**: Firebase Authentication
- **APIs**: TMDB API, OpenAI GPT
- **State Management**: Redux
- **Routing**: React Router
- **Hosting**: Firebase Hosting

## Acknowledgments
- **TMDB API**: For providing detailed movie data.
- **OpenAI GPT**: For enabling intelligent movie recommendations.
- **Firebase**: For secure authentication and hosting.

---
## ScreenShots
![taniyanetlix](https://github.com/user-attachments/assets/23e7b2b5-1f48-424c-bee1-d7ec5a9cb0be)
![taniyanetflix4](https://github.com/user-attachments/assets/3a154bcf-20fb-4f6a-8830-83e10e8e7808)
![Screenshot 2025-01-27 235119](https://github.com/user-attachments/assets/a58998df-89da-4818-8f4f-e661fb7970e2)
![taniyanetflix2](https://github.com/user-attachments/assets/e00f3910-3b96-4408-858b-52e52ee97073)






**Author**: Taniya Kamboj

If you have any questions, feel free to reach out or contribute to the project!

