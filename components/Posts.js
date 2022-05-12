import {collection } from 'firebase/firestore';
import { useCollection } from "react-firebase-hooks/firestore"
import Post from "./Post" 
import { db } from "../firebase";
import { doc, onSnapshot } from "firebase/firestore";

function Posts() {

    // const [realTimePosts] = useCollection(
    //   doc(db, 'posts')
    // );

    const [value] = useCollection(
      collection(db, 'posts'),
      {
        snapshotListenOptions: { includeMetadataChanges: true },
      }
    );
    
  //   const [realTimePosts] = onSnapshot(doc(db, "posts", "SF"), (doc) => {
  //     console.log("Current data: ", doc.data());
  // });

    // const [realTimePosts] = useCollection(doc(db,"posts"));

  return (
    <div>

    {value && (
      <span>
        {/* Collection:{' '} */}
        {value.docs.map((post) => {
          console.log(post.data());
          return(
          <div>
            <Post
              key={post.id}
              name={post.data().name}
              message={post.data().message}
              email={post.data().email}
              image={post.data().image}
              postImage={post.data().postImage}
            />
          </div>
        )})}
      </span>
    )}


        {/* {realTimePosts?.docs.map((post) => {
          return(
            <div>
            <Post
              key={post.id}
              name={post.data().name}
              message={post.data().message}
              email={post.data().email}
              image={post.data().image}
              postImage={post.data().postImage}
            />
            </div>
          ) 
        })}     */}
    </div>
  )
}

export default Posts

//https://firebase.google.com/docs/storage/web/upload-files#web-version-9_6

//https://firebase.google.com/docs/firestore/query-data/listen#web-version-9

//https://github.com/firebase/snippets-web/blob/1c4c6834f310bf53a98b3fa3c2e2191396cacd69/snippets/firestore-next/test-firestore/listen_document.js#L8-L12

//https://github.com/CSFrequency/react-firebase-hooks/blob/master/firestore/README.md#:~:text=Retrieve%20and%20monitor%20a%20collection%20value%20in%20Cloud,data.%20The%20useCollection%20hook%20takes%20the%20following%20parameters%3A

//https://firebase.google.com/docs/firestore/query-data/get-data