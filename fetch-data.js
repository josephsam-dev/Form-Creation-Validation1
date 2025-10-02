// Add an event listener to run the async function when the HTML is fully loaded.
document.addEventListener('DOMContentLoaded', fetchUserData);

/**
 * Asynchronously fetches user data from an API and displays it on the page.
 */
async function fetchUserData() {
    // Define the API URL
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';

    // Select the container element where data will be displayed
    const dataContainer = document.getElementById('api-data');

    // Use a try-catch block for fetching data and handling errors
    try {
        // Fetch data from the API
        const response = await fetch(apiUrl);
        
        // Check if the request was successful
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Convert the response to JSON
        const users = await response.json();

        // Clear the "Loading..." message
        dataContainer.innerHTML = '';

        // Create a <ul> element to hold the user list
        const userList = document.createElement('ul');

        // Loop through the users array and create a <li> for each user's name
        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = user.name;
            userList.appendChild(listItem);
        });

        // Append the completed list to the data container
        dataContainer.appendChild(userList);

    } catch (error) {
        // Handle any errors that occurred during the fetch operation
        console.error('Error fetching data:', error); // Log the error for debugging
        dataContainer.innerHTML = ''; // Clear the container
        dataContainer.textContent = 'Failed to load user data.';
    }
}
