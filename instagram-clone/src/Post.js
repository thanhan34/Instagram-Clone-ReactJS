import React, { useEffect, useState } from 'react';
import './Post.css';
import Avatar from '@material-ui/core/Avatar';
import { db } from './firebase';
import firebase from 'firebase';
function Post({postID, user , username, caption, imageUrl}) {
    const [comments, setComments] = useState([]);
    const [comment, setComment] = useState('');
    useEffect(() => {
        let unsubscribe;
        if (postID) {
            unsubscribe = db
                .collection("posts")
                .doc(postID)
                .collection("comments")
                .orderBy("timestamp","desc")
                .onSnapshot((snapshot) => {
                    setComments(snapshot.docs.map((doc) => doc.data()));
                })
        }
        return () => {
            unsubscribe();
        };
    }, [postID]);

    const postComment = (event) => {
        event.preventDefault();
        db.collection("posts").doc(postID).collection("comments").add({
            text: comment,
            username: user.displayName
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })
        setComment('');
    }
    return (
        <div className="post">
            <div className="post__header">
                <Avatar 
                    className="post__avatar"
                    alt="An"
                    src="https://scontent.fbne5-1.fna.fbcdn.net/v/t1.0-9/59494580_2393028384051447_1306141864436432896_n.jpg?_nc_cat=104&_nc_sid=0debeb&_nc_ohc=u92SrY_mSwAAX9P_QdS&_nc_ht=scontent.fbne5-1.fna&oh=6729e9be3368bf7e8d0cfd5c90cb3ece&oe=5F860D42"
                />
            <h3>{username}</h3>  
            </div>
                      
            <img className="post_image" src={imageUrl} alt=""/>
            <h4 className="post_text"><strong>hadesdoan:</strong>{caption}</h4>
            
            <div className="post_comments">
                {comments.map((comment) => (
                    <p>
                        <strong>{comment.username}</strong> {comment.text}
                    </p>
                ))}
            </div>
            
            
            <form className="post_commentBox">
                <input
                    className="post__input"
                    type="text"
                    placeholder="Add a comment..."
                    value={comment}
                    onChange={(e)=> setComment(e.target.value)}
                >
                </input>
                <button
                    className="post__button"
                    disabled={!comment}
                    type="submit"
                    onClick={postComment}
                >
                        Post
                </button>
            </form>
        </div>
    )
}

export default Post
