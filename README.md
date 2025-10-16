Smart Recipe Generator

Project Overview

The Smart Recipe Generator is a responsive web application that allows users to input ingredients they have available and receive recipe suggestions tailored to their inputs. It also supports dietary preferences, recipe filtering by difficulty and cooking time, and provides nutritional information for each recipe.

Features

Ingredient Input: Users can manually enter ingredients or select from a predefined list.

Dietary Preferences: Filter recipes by vegetarian, vegan, or gluten-free options.

Recipe Matching Algorithm: Suggests recipes based on ingredient match percentage and dietary filters.

Recipe Details: Each recipe contains ingredients, detailed cooking instructions, nutritional data (calories, protein, carbs, fat), and cuisine type.

Filters: Difficulty level (Easy, Medium, Hard) and cooking time filters (<20 min, 20-40 min, >40 min).

User Interaction: Add/remove ingredients, clear input, and dynamically view matching recipes.

Responsive UI: Designed to work on desktop and mobile devices seamlessly.

Technology Stack
Frontend: HTML5, CSS3, JavaScript (ES6+)

Data Storage: Recipes are stored client-side in JSON format embedded in JavaScript

Deployment: Can be deployed on any static web hosting platform like GitHub Pages

Installation and Running

Running Locally
Download or clone the repository.

Open the index.html file in a modern web browser (Google Chrome, Firefox, Microsoft Edge).

Use the input fields to enter ingredients and apply filters to find recipe suggestions.


Project Structure

index.html - Main HTML page, contains the page structure and connects scripts and styles

styles.css - Contains the styles for the app for layout and appearance

app.js - JavaScript file with all app logic, including ingredient management and recipe filtering

recipes_database.json (optional) - JSON file containing recipe data (data embedded in app.js in this version)

Screenshots

<img width="1919" height="871" alt="Screenshot 2025-10-16 220444" src="https://github.com/user-attachments/assets/b09086f8-e831-44c5-a95c-38008ad5c716" />
<img width="1919" height="866" alt="Screenshot 2025-10-16 220500" src="https://github.com/user-attachments/assets/b89c0dc1-7279-45eb-a2ea-02f97f6578e9" />
<img width="1919" height="870" alt="Screenshot 2025-10-16 220528" src="https://github.com/user-attachments/assets/5447dea0-5e08-4fb7-a5ef-a95aa1544dc3" />
<img width="1919" height="860" alt="Screenshot 2025-10-16 220543" src="https://github.com/user-attachments/assets/b6694170-ea61-4446-bad8-65141a1307f6" />
<img width="1919" height="860" alt="Screenshot 2025-10-16 220600" src="https://github.com/user-attachments/assets/7851effd-2407-4f1c-ab98-4afdb407897d" />


Usage

Type ingredients you have in the input box and click 'Add'.

Selected ingredients show as tags and are considered for matching recipes.

Use checkboxes to filter for vegetarian, vegan, or gluten-free recipes.

Adjust difficulty and cooking time filters to narrow results.

Clear all ingredients or filters as needed for new searches.

View recipe details including ingredients and cooking steps in the results section.

Future Enhancements

Add user login and profile saving for personalized recommendations.

Enhance ingredient substitution suggestions based on user pantry.

Add star rating system and ability to save favorite recipes.

Use AI-based image recognition for ingredient input from photos.

Implement backend API for dynamic recipe database updates.

Known Limitations

Filtering is currently based on exact ingredient matching; no fuzzy matching.

Nutritional values are static and approximate for recipes.

No user authentication or persistent server-side data storage.

Contact and Support

For questions or issues related to this project, please contact: Shaurya Pal Singh

Email: pal45shaurya@gmail.com
