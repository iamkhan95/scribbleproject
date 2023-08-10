document.addEventListener('DOMContentLoaded', function () {
    const signUpButton = document.querySelector('.sign-up-btn');
    const signInButton = document.querySelector('.sign-in-btn');
    const signupOverlay = document.getElementById('signup-overlay');
    const signinOverlay = document.getElementById('signin-overlay');
    const signupCloseButton = document.getElementById('signup-close');
    const signinCloseButton = document.getElementById('signin-close');
    const signupForm = document.querySelector('.signup-form');
    const signinForm = document.querySelector('.signin-form');
    const signupSuccessMessage = document.getElementById('signup-success');
    const signinSuccessMessage = document.getElementById('signin-success');

    signUpButton.addEventListener('click', function () {
        signupOverlay.style.display = 'block';
    });

    signInButton.addEventListener('click', function () {
        signinOverlay.style.display = 'block';
    });

    signupCloseButton.addEventListener('click', function () {
        signupOverlay.style.display = 'none';
        signupForm.reset();
        signupSuccessMessage.style.display = 'none';
    });

    signinCloseButton.addEventListener('click', function () {
        signinOverlay.style.display = 'none';
        signinForm.reset();
        signinSuccessMessage.style.display = 'none';
    });

    signupForm.addEventListener('submit', function (event) {
        event.preventDefault();
        signupSuccessMessage.style.display = 'block';
    });

    signinForm.addEventListener('submit', function (event) {
        event.preventDefault();
        signinSuccessMessage.style.display = 'block';

    });
});


document.addEventListener('DOMContentLoaded', function () {
    const allPostsButton = document.querySelector('.all-posts-btn');
    const createPostButton = document.querySelector('.create-post-btn');

    allPostsButton.addEventListener('click', function () {
        window.location.href = 'bloglist.html';
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const allPostsButton = document.querySelector('.all-posts-btn');
    const createPostButton = document.querySelector('.create-post-btn');

    createPostButton.addEventListener('click', function () {
        window.location.href = 'creat.html';
    });
});


/* creat blog page code */
document.getElementById("viewBlogsButton").addEventListener("click", function() {
    // Add functionality for Create Blogs button here
    alert("This Will take you to new Window!");
});

document.getElementById("viewBlogsButton").addEventListener("click", function() {
    // Redirect to the View Blogs page
    window.location.href = "view-all-blogs.html";
});


// Code for creat blog page transfer the page
document.getElementById("createBlogsButton").addEventListener("click", function() {
    // Add functionality for Create Blogs button here
    alert("This Will take you to new Window!");
});

// The rest of your existing script code
document.getElementById("createBlogsButton").addEventListener("click", function() {
    // Redirect to the View Blogs page
    window.location.href = "create-blog.html";
});
