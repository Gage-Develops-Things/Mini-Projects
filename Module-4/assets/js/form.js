// TODO: Create a variable that selects the form element
const userName = document.getElementById("username");
const title = document.getElementById("title");
const content = document.getElementById("content");
const error = document.getElementById("error");
const form = document.querySelector('form');

// TODO: Create a function that handles the form submission. Grab the form data and store it in local storage, then redirect to the blog page using the `redirectPage` function. If the form is submitted with missing data, display an error message to the user.

// Function to handle form submission
function handleFormSubmit(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get the values from the input fields
    const usernameValue = userName.value.trim();
    const titleValue = title.value.trim();
    const contentValue = content.value.trim();

    // Check if any of the fields are empty
    if (!usernameValue || !titleValue || !contentValue) {
        document.getElementById('error').textContent = "Please complete the form."; // Show error message
        return; // Exit the function if validation fails
    }

    // Create a blog post object
    const blogPost = {
        username: usernameValue,
        title: titleValue,
        content: contentValue,
    };

    // Get existing posts from local storage or initialize an empty array
    const existingPosts = JSON.parse(localStorage.getItem('blogs')) || [];

    // Add the new post to the array
    existingPosts.push(blogPost);

    // Save the updated posts back to local storage
    localStorage.setItem('blogs', JSON.stringify(existingPosts));

    // Redirect to the posts page            OLD WAY     ------>     window.location.href = 'blog.html';
    //window.location.href = 'blog.html';
    let url = 'blog.html';

    redirectPage (url);

}

// TODO: Add an event listener to the form on submit. Call the function to handle the form submission.
form.addEventListener('submit', handleFormSubmit);