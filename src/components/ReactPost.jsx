import { useState } from "react"
import PostLiked from "./PostLiked"

const ReactPost = ({question, answer}) => {
	const [postLiked, setLikeButton] = useState(false);


	return(
		<div className="post_wrap">
			<div className="post">
				<h3><strong>{question}</strong></h3>
				<p>{answer}</p>
				{postLiked?<PostLiked/>:<button className="btn btn-like" onClick={()=>setLikeButton(!postLiked)}>Like</button>}
			</div>
		</div>
	)
}

export default ReactPost