import React from 'react'
import './Post.css'
import Avatar from '@material-ui/core/Avatar'
function Post({username, caption, urlImage}) {
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
                      
            <img className="post_image" src={urlImage} alt=""/>
            <h4 className="post_text"><strong>hadesdoan:</strong>{caption}</h4>
        </div>
    )
}

export default Post
