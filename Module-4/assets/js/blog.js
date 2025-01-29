// TODO: Create a variable that selects the main element, and a variable that selects the back button element
const main = document.querySelector('main');
const backBtn = document.getElementById("back");
// TODO: Create a function that builds an element and appends it to the DOM
function createAndAppendElement (){
    const article = main.createElement("article");
    main.appendChild(article);
    const articleH2 = article.createElement("h2");
    article.appendChild(articleH2);
    const articleP = article.createElement("p");
    article.appendChild(articleP);
    const articleUserName = article.createElement("blockquote");
    article.appendChild(articleUserName);
    articleH2.textContent = title.value;
    articleP.textContent = content.value;
    articleUserName.textContent = userName.value;
}
// TODO: Create a function that handles the case where there are no blog posts to display
function noPosts(){
    const blogPosts = JSON.parse(localStorage.getItem('blogs')) || [];
    const postsContainer = document.getElementById('posts-container'); // Make sure this ID matches your HTML
    postsContainer.innerHTML = ''; // Clear any existing content
    if (blogPosts.length === 0) {
        // Display message if no posts are found
        postsContainer.innerHTML = '<p>No Blog posts yet...</p>';
    }
    else {return}
}
// TODO: Create a function called `renderBlogList` that renders the list of blog posts if they exist. If not, call the no posts function.
// Function to render blog posts
function renderBlogList() {
    const postsContainer = document.getElementById('posts-container'); // Make sure this ID matches your HTML
    postsContainer.innerHTML = ''; // Clear any existing content

    // Retrieve blog posts from local storage
    const blogPosts = JSON.parse(localStorage.getItem('blogs')) || [];

    if (blogPosts.length === 0) {
        noPosts();
    } else {
        // Loop through each blog post and create elements to display them
        blogPosts.forEach(post => {
            const postElement = document.createElement('article');
            postElement.classList.add('blog-post');
            
            postElement.innerHTML = `
                <h2>${post.title}</h2>
                <p>By: ${post.username}</p>
                <blockquote>${post.content}</blockquote>
            `;

            postsContainer.appendChild(postElement);
        });
    }
}

// Call the function to render posts when the page loads
document.addEventListener('DOMContentLoaded', renderBlogList);


// TODO: Call the `renderBlogList` function

// TODO: Redirect to the home page using the `redirectPage` function found in logic.js when the back button is clicked
backBtn.addEventListener("click", function(){
    redirectPage("./index.html");
});