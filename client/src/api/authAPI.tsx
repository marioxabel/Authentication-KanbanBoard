import { UserLogin } from "../interfaces/UserLogin";

const login = async (userInfo: UserLogin) => {
  // TODO: make a POST request to the login route
  try {
    const response = await fetch('/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userInfo)
    });

    // Throw error if response status is not OK (200-299)
    if (!response.ok) {
      const errorData = await response.json(); // Parse error response as JSON
      throw new Error(`Error: ${errorData.message}`); // Throw a detailed error message    
    }

    // Parse the response body as JSON
    const data = await response.json();

    return data;  // Return the data received from the server
    
  } catch (error) {
    console.log('Error from user login: ', error);  // Log any errors that occur during fetch
    return Promise.reject('Could not fetch user info');  // Return a rejected promise with an error message
  }
}



export { login };
