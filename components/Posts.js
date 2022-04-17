import { doc, collection } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore"
import Post from "./Post" 
import { db } from "../firebase";

function Posts() {

    // const [realTimePosts] = useCollection(
    //   doc(collection(db, 'posts'))
    // );

  return (
    <div>
        {/* {realTimePosts?.docs.map((post) => {

            <Post
              key={post.id}
              name={post.data().name}
              message={post.data().message}
              email={post.data().email}
              image={post.data().image}
              postImage={post.data().postImage}
            />
        })} */}
    </div>
  )
}

export default Posts