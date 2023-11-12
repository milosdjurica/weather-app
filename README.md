<a name="readme-top"></a>

[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
 
  <h3 align="center">Weather Forecast</h3>

  <p align="center">
    This project fetches real-time data and presents a weather forecast overview, including current conditions, hourly and 3-day predictions for any city.
    <br/>
    <a href="https://weather-app-milosdjurica.vercel.app/">View Demo</a>
    ·
    <a href="https://github.com/milosdjurica/weather-app/issues">Report Bug</a>
    ·
    <a href="https://github.com/milosdjurica/weather-app/issues">Request Feature</a>

  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <!-- <li><a href="#roadmap">Roadmap</a></li> -->
    <li><a href="#contributing">Contributing</a></li>
    <!-- <li><a href="#license">License</a></li> -->
    <li><a href="#contact">Contact</a></li>
    <!-- <li><a href="#acknowledgments">Acknowledgments</a></li> -->
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

[![Weather Forecast Website][product-screenshot]](https://weather-app-milosdjurica.vercel.app/)

This project fetches real-time data and presents a weather forecast overview, including current conditions, hourly and 3-day predictions for any city.
Technologies used: React, Next.js, Weather API, Tailwind CSS, Shadcn, Zustand.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

Application is created using Next.js and TailwindCSS. For movies data I am using TMDB API (largest API for movies).

- [![Next][Next.js]][Next-url]
- [![React][React.js]][React-url]
- [![Tailwind CSS](https://img.shields.io/badge/tailwind-css-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
- Weather API
- ShadCN
- Zustand

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

Before you can start your own copy of this app on your own machine, you will need to get API key from TMDB API.

- npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Get a free API Key at [https://rapidapi.com/weatherapi/api/weatherapi-com/pricing](https://rapidapi.com/weatherapi/api/weatherapi-com/pricing)
2. Clone the repo
   ```sh
   git clone https://github.com/milosdjurica/weather-app.git
   ```
3. Install NPM packages

   ```sh
   npm install
   #or
   yarn
   ```

4. Enter your API in `.env`

   ```js
   NEXT_PUBLIC_API_KEY = "ENTER YOUR API KEY";
   NEXT_PUBLIC_URL = "copy value from request example";
   NEXT_PUBLIC_API_HOST = "copy value from request example";
   ```

5. Start app in dev mode

   ```sh
   npm run dev
   #or
   yarn dev
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage

Now you should be able to start application in your local environment and see the weather forecast.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->

<!-- ## Roadmap

- [x] Add Changelog
- [x] Add back to top links
- [ ] Add Additional Templates w/ Examples
- [ ] Add "components" document to easily copy & paste sections of the readme
- [ ] Multi-language Support
  - [ ] Chinese
  - [ ] Spanish

See the [open issues](https://github.com/milosdjurica/language-learning-app/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p> -->

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Miloš Đurica - [My LinkedIn](https://www.linkedin.com/in/milosdjurica/) - milosdjurica.work@gmail.com

Project Link: [https://github.com/milosdjurica/weather-app](https://github.com/milosdjurica/weather-app)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/milosdjurica/language-learning-app.svg?style=for-the-badge
[contributors-url]: https://github.com/milosdjurica/language-learning-app/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/milosdjurica/language-learning-app.svg?style=for-the-badge
[forks-url]: https://github.com/milosdjurica/language-learning-app/network/members
[stars-shield]: https://img.shields.io/github/stars/milosdjurica/language-learning-app.svg?style=for-the-badge
[stars-url]: https://github.com/milosdjurica/language-learning-app/stargazers
[issues-shield]: https://img.shields.io/github/issues/milosdjurica/language-learning-app.svg?style=for-the-badge
[issues-url]: https://github.com/milosdjurica/language-learning-app/issues
[license-shield]: https://img.shields.io/github/license/milosdjurica/language-learning-app.svg?style=for-the-badge
[license-url]: https://github.com/milosdjurica/language-learning-app/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/milosdjurica
[product-screenshot]: public/assets/readme.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Tailwind-url]: https://tailwindcss.com
