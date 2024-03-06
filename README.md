# CraveDeals Frontend

The frontend component of CraveDeals provides a user-friendly interface for educational and non-commercial purposes, allowing users to browse and discover the best deals and offers from top restaurants in Bangalore. Here's an overview of the frontend architecture and technologies used:

## Overview

CraveDeals frontend is built using React.js for its component-based architecture and dynamic user interface. Tailwind CSS is utilized for styling, providing rapid UI development and customization. Axios is used for making HTTP requests to the backend API, enabling seamless communication between the frontend and backend components. Additionally, Redux is used for state management, allowing fast content load by storing restaurant data in the Redux store.

## Technologies Used

- **React.js**: JavaScript library for building user interfaces.
- **Tailwind CSS**: Utility-first CSS framework for designing modern and responsive user interfaces.
- **Axios**: Promise-based HTTP client for making requests to the backend API.
- **Redux**: State management library for JavaScript applications.

## Installation and Setup

1. Clone the frontend repository from GitHub: [CraveDeals Frontend Repository](https://github.com/akhilnandavara/CraveDeals).
2. Navigate to the project directory and install dependencies using Yarn:

   ```
   yarn install
   ```

3. Ensure the backend server is running and accessible from the frontend.
4. Start the frontend development server:

   ```
   yarn start
   ```

5. The frontend application will be available at `http://localhost:3000` in your web browser.

## Folder Structure

The frontend project follows a standard React.js folder structure:

- **public**: Contains static assets accessible directly from the application. You can place images, icons, fonts, and other resources in this folder. These assets can be referenced using relative paths in your code.
- **src**: Contains the source code files for the frontend application.
  - **components**: Holds reusable React components used throughout the application.
  - **pages**: Contains top-level components representing different pages of the application.
  - **styles**: Includes CSS or SCSS files for styling the components.
  - **services**: Provides utility functions or services, such as API communication using Axios.
  - **redux**: Contains Redux-related files such as actions, reducers, and store configuration.

## Contributing

Contributions to the frontend of CraveDeals, for educational and non-commercial purposes, are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request on the GitHub repository.

## License

This frontend component of CraveDeals is licensed under the MIT License for educational and non-commercial use. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Special thanks to the React.js, Tailwind CSS, Axios, and Redux developers and communities for their invaluable contributions to open-source projects.