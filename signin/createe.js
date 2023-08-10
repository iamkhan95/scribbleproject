 const homeButton = document.getElementById("home-button");
            homeButton.addEventListener("click", () => {
            // Redirect to the main page
    window.location.href = "main.html"; // Replace with your actual main page URL
});
            
document.addEventListener("DOMContentLoaded", () => {
    const postButton = document.getElementById("post-button");
    const previousPostCards = document.querySelector(".previous-post-cards");
    postButton.innerHTML = '<i class="far fa-paper-plane"></i> Post';

    postButton.addEventListener("click", () => {
        const title = document.getElementById("title").value;
        const content = document.getElementById("content").value;

        if (title.trim() !== "" && content.trim() !== "") {
            const blogCard = document.createElement("div");
            blogCard.className = "blog-card";
            blogCard.innerHTML = `
                <h2>${title}</h2>
                <p>${content}</p>
                <div class="buttons">
                    <button class="button like-button">Like</button>
                    <button class="button edit-button">Edit</button>
                    <button class="button comment-button">Comment</button>
                    <button class="button delete-button">Delete</button>
                </div>
                <div class="comment-section">
                    <ul class="comment-list"></ul>
                    <input type="text" class="comment-input" placeholder="Add a comment">
                </div>
            `;

            const deleteButton = blogCard.querySelector(".delete-button");
        deleteButton.innerHTML = '<i class="far fa-trash-alt"></i> Delete';

    deleteButton.addEventListener("click", () => {
    if (confirm("Are you sure you want to delete this blog?")) {
        previousPostCards.removeChild(blogCard);
    }
});

            const likeButton = blogCard.querySelector(".like-button");
            likeButton.innerHTML = '<i class="far fa-thumbs-up"></i> Like';
            let likeCount = 0;

            likeButton.addEventListener("click", () => {
                likeCount++;
                const likeMessage = likeCount === 1 ? "person" : "people";
                likeButton.textContent = `${likeCount} ${likeMessage} liked this post`;
                likeButton.disabled = true;
            });


            const editButton = blogCard.querySelector(".edit-button");
            editButton.innerHTML = '<i class="far fa-edit"></i> Edit';
            const titleElement = blogCard.querySelector("h2");
            const contentElement = blogCard.querySelector("p");

            editButton.addEventListener("click", () => {
                const newTitle = prompt("Enter new title:", titleElement.textContent);
                if (newTitle !== null) {
                    titleElement.textContent = newTitle;
                }

                const newContent = prompt("Enter new content:", contentElement.textContent);
                if (newContent !== null) {
                    contentElement.textContent = newContent;
                }
            });

            const commentButton = blogCard.querySelector(".comment-button");
            const commentList = blogCard.querySelector(".comment-list");
            const commentInput = blogCard.querySelector(".comment-input");
            commentButton.innerHTML = '<i class="far fa-comment"></i> Add Comment';

            commentButton.addEventListener("click", () => {
                const commentText = commentInput.value;
                if (commentText.trim() !== "") {
                    const li = document.createElement("li");
                    li.textContent = commentText;
                    commentList.appendChild(li);
                    commentInput.value = "";
                }
            });


            previousPostCards.appendChild(blogCard);

            // Clear input fields
            document.getElementById("title").value = "";
            document.getElementById("content").value = "";

            alert("Posted successfully!");
        } else {
            alert("Please fill in all the fields.");
        }
    });

    // Rest of your code...
});
