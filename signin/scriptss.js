// VIEW ALLBOLGS PAGE CODE IS HERE

document.addEventListener("DOMContentLoaded", () => {
    if (document.title === "View all Blogs") {
        const blogContainer = document.querySelector(".blog-container");
        

        // CREATE THE BLOG CARDS IN PAGE

        const homeButton = document.getElementById("home-button");
            homeButton.addEventListener("click", () => {
            // Redirect to the main page
    window.location.href = "main.html"; // Replace with your actual main page URL
});
            
        const createBlogCard = (userName, blogTitle, blogDescription) => {
            const blogCard = document.createElement("div");
            blogCard.className = "blog-card";

            const userBox = document.createElement("div");
            userBox.className = "user-box";
            userBox.textContent = `User: ${userName}`;

            const blogInfo = document.createElement("div");
            blogInfo.className = "blog-info";

            const titleElement = document.createElement("h2");
            titleElement.textContent = blogTitle;

            const descriptionElement = document.createElement("p");
            descriptionElement.textContent = blogDescription;

            const buttonsDiv = document.createElement("div");
            buttonsDiv.className = "buttons";

            const likeButton = document.createElement("button");
            likeButton.className = "button like-button";
            likeButton.textContent = "Like";
            const likeCount = document.createElement("span");
            likeCount.textContent = "0 Likes";
            likeButton.innerHTML = '<i class="far fa-thumbs-up"></i> Like';

            const editButton = document.createElement("button");
            editButton.className = "button edit-button";
            editButton.innerHTML = '<i class="far fa-edit"></i> Edit';

            const deleteButton = document.createElement("button");
            deleteButton.className = "button delete-button";
            deleteButton.textContent = "Delete";
            deleteButton.innerHTML = '<i class="far fa-trash-alt"></i> Delete';

            const commentsSection = document.createElement("div");
            commentsSection.className = "comments";

            const commentList = document.createElement("ul");
            commentList.className = "comment-list";

            const commentInput = document.createElement("input");
            commentInput.className ="boxinp";
            commentInput.type = "text";
            commentInput.placeholder = "Add a comment";

            const addCommentButton = document.createElement("button");
            addCommentButton.className = "button add-comment-button";
            addCommentButton.textContent = "Add Comment";
            addCommentButton.innerHTML = '<i class="far fa-comment"></i> Add Comment';


            // CODE FOR BUTTONS WHO WILL PERFORM THE ACTIONS LIKE , EDIT, DELETE & ETC 

            likeButton.addEventListener("click", () => {
                const likeCountNumber = parseInt(likeCount.textContent);
                likeCount.textContent = `${likeCountNumber + 1} Likes`;
                likeButton.textContent = "Liked";
                likeButton.disabled = true;
            });


            addCommentButton.addEventListener("click", () => {
                const commentText = commentInput.value;
                if (commentText.trim() !== "") {
                    const li = document.createElement("li");
                    li.textContent = commentText;
                    commentList.appendChild(li);
                    commentInput.value = "";
                }
            });

              const editBlog = (blogCard, titleElement, descriptionElement) => {
        const newTitle = prompt("Enter new blog title:", titleElement.textContent);
        const newDescription = prompt("Enter new blog description:", descriptionElement.textContent);

        if (newTitle && newDescription) {
            titleElement.textContent = newTitle;
            descriptionElement.textContent = newDescription;
        }
    };

    const deleteBlog = (blogCard) => {
        if (confirm("Are you sure you want to delete this blog?")) {
            blogContainer.removeChild(blogCard);
        }
    };

    editButton.addEventListener("click", () => {
                const newTitle = prompt("Enter new blog title:", blogTitle);
                const newDescription = prompt("Enter new blog description:", blogDescription);
                if (newTitle !== null && newDescription !== null) {
                    titleElement.textContent = newTitle;
                    descriptionElement.textContent = newDescription;
                }
            });

            deleteButton.addEventListener("click", () => {
                if (confirm("Are you sure you want to delete this blog?")) {
                    blogContainer.removeChild(blogCard);
                }
            });


            // REST OF CODE IS HERE

            buttonsDiv.appendChild(likeButton);
            buttonsDiv.appendChild(editButton);
            buttonsDiv.appendChild(deleteButton);

            commentsSection.appendChild(commentList);
            commentsSection.appendChild(commentInput);
            commentsSection.appendChild(addCommentButton);

            blogInfo.appendChild(titleElement);
            blogInfo.appendChild(descriptionElement);

            blogCard.appendChild(userBox);
            blogCard.appendChild(blogInfo);
            blogCard.appendChild(buttonsDiv);
            blogCard.appendChild(likeCount); // Display like count
            blogCard.appendChild(commentsSection);

            blogContainer.appendChild(blogCard);
        };

        // CREATIGN BLOGS IN VIEWALL BLOGS PAGE
        const fakeUserNames = ["Alice", "Bob", "Charlie", "David", "Eve", "Frank", "Grace", "Helen", "Isaac", "Julia"];
        const fakeBlogTitles = ["Nuh Vilance", "Manipur Tragedy", "Perimed the Alien", "Elone the man", "The Ratan TATA","Nuh Vilance", "Manipur Tragedy", "Perimed the Alien", "Elone the man", "The Ratan TATA"];
        const fakeDescriptions = ["On July 31, an Islamist mob pelted stones at a Hindu religious procession in Haryana’s Nuh district. The devotees gathered to attend the procession, which covered temples in the district.", 
            "On 3 May 2023, ethnic violence erupted in India's north-eastern state of Manipur between the Meitei people, a majority that lives in the Imphal Valley, and the Kuki tribal community from the surrounding hills. As of 29 July, 181 people have been killed in the violence.", 
            "The Great Pyramid is impressive for many reasons, but one of the most interesting characteristics of this celebrated monument is that it can also tell time. The structure actually acts as an enormous sundial, with its shadow telling the hour by falling on marks made in the stone", 
            "Elon Musk cofounded the electronic payment firm PayPal, and in 2002 he founded SpaceX, a company that makes rockets and spacecraft. He was a major early funder of Tesla, which makes electric cars and batteries, and became its chief executive officer in 2008.",
             "Ratan Naval Tata is an Indian industrialist, philanthropist and former chairman of Tata Sons. He was a chairman of the Tata Group from 1990 to 2012, and interim chairman from October 2016 through February 2017. He continues to head its charitable trusts.","On July 31, an Islamist mob pelted stones at a Hindu religious procession in Haryana’s Nuh district. The devotees gathered to attend the procession, which covered temples in the district.", 
            "On 3 May 2023, ethnic violence erupted in India's north-eastern state of Manipur between the Meitei people, a majority that lives in the Imphal Valley, and the Kuki tribal community from the surrounding hills. As of 29 July, 181 people have been killed in the violence.", 
            "The Great Pyramid is impressive for many reasons, but one of the most interesting characteristics of this celebrated monument is that it can also tell time. The structure actually acts as an enormous sundial, with its shadow telling the hour by falling on marks made in the stone", 
            "Elon Musk cofounded the electronic payment firm PayPal, and in 2002 he founded SpaceX, a company that makes rockets and spacecraft. He was a major early funder of Tesla, which makes electric cars and batteries, and became its chief executive officer in 2008.",
             "Ratan Naval Tata is an Indian industrialist, philanthropist and former chairman of Tata Sons. He was a chairman of the Tata Group from 1990 to 2012, and interim chairman from October 2016 through February 2017. He continues to head its charitable trusts"];

        for (let i = 0; i < 10; i++) {
            createBlogCard(fakeUserNames[i], fakeBlogTitles[i], fakeDescriptions[i]);
        }
    }

    // CREATE BLOG PAGE CODE IS HERE
    if (document.title === "Create Blog") {
        const postButton = document.getElementById("post-button");
        const previousPostCards = document.querySelector(".previous-post-cards");

        postButton.addEventListener("click", () => {
            const creator = document.getElementById("creator").value;
            const topic = document.getElementById("topic").value;
            const description = document.getElementById("description").value;

            if (creator.trim() !== "" && topic.trim() !== "" && description.trim() !== "") {
                const previousPostCard = document.createElement("div");
                previousPostCard.className = "previous-post-card";
                previousPostCard.innerHTML = `
                    <h3>${topic}</h3>
                    <p>By: ${creator}</p>
                    <p>${description}</p>
                `;

                previousPostCards.appendChild(previousPostCard);

                // CLEAR INPUTE FIELDS
                document.getElementById("creator").value = "";
                document.getElementById("topic").value = "";
                document.getElementById("description").value = "";

                alert("Posted successfully!");
            } else {
                alert("Please fill in all the fields.");
            }
        });
    }
});






