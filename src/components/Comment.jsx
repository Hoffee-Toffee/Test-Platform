import React from "react";

function Comment() {
    // Get the comment passed to the component from the parent
    let props = arguments[0];

    let users = require("../data.json").users;
    let comments = require("../data.json").comments;

    let comment = comments[parseInt(props.comment)];

    let toReturn = [];

    toReturn.push(
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{users[comment.author].name}</h5>
                <p className="card-text">{comment.content}</p>
            </div>
        </div>
    );

    console.log("Replies to comment" + comment.id);
    // Loop through any comments that are replies to this comment
    comments.filter((c) => c.parent == `comment${comment.id}`).forEach((c) => {
        toReturn.push(<Comment comment={c.id} />);
    });

    return (
        <div className="col-12">
            {toReturn}
        </div>
    );
}

export default Comment;