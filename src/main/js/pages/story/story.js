import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Navigation from "../../components/navigation/navigation";
import { getStorageValue } from "../../utils/useLocalStorage";
import posts from "../../post-data";

// Function to find post using id as a param
function findPost(posts, id) {
    // Find element with matching id
    const post = posts.find((element) => {
        return Number(element.id) === Number(id);
    });

    // Log message and exit if error
    if (!post) {
        console.log("Product Not Found");
        return;
    }

    // Return result
    return post;
}

const Story = (props) => {
    // Grab id param value currently entered within the url | Example = http://localhost:3001/story/2 - 2 would be considered the id param
    const { id } = useParams();
    // Retrieve the value that is stored in local storage using a specified key
    const postData = getStorageValue("post", posts);
    // The resulting post from id search
    const post = findPost(postData, id);

    // Function that triggers as soon as the page loads
    useEffect(() => {
        // Scroll to the top of the screen as the page loads
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Navigation />
            <div id="story">
                <div className="story__button__container__back">
                    <Link to="/feed">
                        <button className="story__button__back">
                            <i className="fas fa-arrow-left"></i>{" "}
                            <span>Back</span>
                        </button>
                    </Link>
                </div>
                <h2 id="story__container__image__title">{post.title}</h2>
                <div id="story__container__image">
                    <img
                        className="story__container__image__wide"
                        src={post.postImage}
                        alt="Writing"
                    />
                </div>
                <div id="story__container__text">
                    <p>{post.text}</p>
                </div>
            </div>
        </>
    );
};

export default Story;
