import Image from "next/image"
import { useSession } from "next-auth/react"
import { EmojiHappyIcon } from "@heroicons/react/outline"
import { CameraIcon, VideoCameraIcon } from "@heroicons/react/solid"
import { useRef, useState } from "react/cjs/react.development";
import { db, storage } from "../firebase";
import { collection ,doc, setDoc } from "firebase/firestore"; 
import { ref, uploadString, getDownloadURL, uploadBytesResumable  } from "firebase/storage";
import { useCollection } from "react-firebase-hooks/firestore"
import { nanoid } from 'nanoid'

function InputBox() {
    const session = useSession();
    const inputRef = useRef(null);
    const filePickerRef = useRef(null);
    //state to hold/sustain image until it's not posted
    const [imageToPost, setImageToPost] = useState(null);

    const sendPost = async(e) => {
        e.preventDefault();

        //if it hasnot any value or the inputbox is empty then return it
        if(!inputRef.current.value) return;

        const randomId = nanoid() 
        console.log("image:" , imageToPost);

        await setDoc(doc(db, "posts", randomId),{
            message: inputRef.current.value,
            // name & email & image of user gonna comes from session
            name: session.data.user.name,
            email: session.data.user.email,
            Image: session.data.user.image,
            postImage: imageToPost,
            // timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
        }).then(doc => {

                // const storageRef = ref(storage, `posts/${doc}`);
                // const uploadTask = uploadBytesResumable(storageRef, imageToPost, 'data_url');
                console.log(doc);
                // const storage = getStorage();
                // const storageRef = ref(storage, 'some-child');

                // 'file' comes from the Blob or File API
                // uploadBytes(storageRef, imageToPost).then((snapshot) => {
                // console.log('Uploaded a blob or file!');
                // });

                // uploadTask.on('state_changed', null,
                // (error) => {
                //   alert(error);
                // },
                // () => {
                //   getDownloadURL(uploadTask.snapshot.ref)
                //   .then((url) => {
                //     // const postRef = doc1(db, 'posts', 'LA');
                //     // setDoc(postRef, { postImage: url }, { merge: true });
                //     //     console.log(url);
                //     //   setDoc(doc(db, "posts", "LA"),
                //     //   { postImage: url },
                //     //   { merge: true}).catch((err) => console.log(err));

                 

                //   });
                });
    
        inputRef.current.value = "";
        removeImage();
    };


    // const uploadImage = async(e) => {
    //     const storageRef = ref(storage, `posts/${"abc"}`);
    //     const uploadTask = uploadBytesResumable(storageRef, imageToPost, 'data_url');
    //      uploadTask.on('state_changed', null,
    //             (error) => {
    //               alert(error);
    //             },
    //             () => {
    //               getDownloadURL(uploadTask.snapshot.ref)
    //               .then((url) => {
    //                   setDoc(doc(db, "posts", "LA"),
    //                   { postImage: url },
    //                   { merge: true}).catch((err) => console.log(err));

    //               }).catch((err) => console.log(err));
    //             });
    // }

    const addImageToPost = async (e) => {
        const metadata = {
            contentType: 'image/jpeg'
        };
        const file = e.target.files[0]
        //destructuring name of file
        const {name} = file
        //${name}_${Date.now().toString()} name of image, currrent date in string for unoque identity
        const storageRef = ref(storage, `images/${name}_${Date.now().toString()}`);
    
        const uploadTask = uploadBytesResumable(storageRef, file, metadata);
                
        await uploadTask.on('state_changed',
         (snapshot) => {
            console.log(snapshot.state);
            console.log("snapshot" , snapshot);
        }), () => {
            getDownloadURL(uploadTask.snapshot.ref)
            .then((url) => {
                console.log("url",url);
                setImageToPost(url);
              }).catch((err) => console.log(err));
        }
    };

    //will again set image post to null
    const removeImage = () => {
        setImageToPost(null);
    }

  return (
      <div>
        <div className="bg-white rounded-2xl shadow-md p-2 text-gray-500 font-medium mt-6">
            <div className="flex space-x-4 p-4 items-center">
                <Image 
                    className="rounded-full"
                    src="https://links.papareact.com/zof"
                    width={40}
                    height={40}
                    layout="fixed"
                />
                <form className="flex flex-1">
                    <input
                    className="rounded-full h-12 bg-gray-100 flex-grow px-5 focus:outline-none" 
                    type="text" 
                    ref={inputRef}
                    placeholder={`What's on your mind, ${session.data.user.name}?`}/>
                    <button hidden onClick={sendPost} type="submit">Submit</button>
                </form>

                {imageToPost && (
                    <div onClick={removeImage} className="flex flex-col filter hover:brightness-110 
                    transition-duration-150 transform hover:scale-105 cursor-pointer">
                        <img src={imageToPost} className="h-10 object-contain"/>
                        <p className="text-xs text-red-500 text-center">Remove</p>
                    </div>
                )}
                {/* <button onClick={uploadImage}>Upload</button> */}
            </div>
                <div className="flex justify-evenly border-t">
                    <div className="inputIcon">
                        <VideoCameraIcon className="h-7 text-red-500" />
                        <p className="text:xs sm: text-sm xl:text-base">Live Video</p>
                    </div>

                    <div className="inputIcon" onClick={() => filePickerRef.current.click()}>
                        <CameraIcon className="h-7 text-green-400" />
                        <p className="text:xs sm: text-sm xl:text-base">Photo/Video</p>
                        <input ref={filePickerRef} onChange={addImageToPost} type="file" hidden/>
                    </div>
                
                    <div className="inputIcon">
                        <EmojiHappyIcon className="h-7 text-yellow-300" />
                        <p className="text:xs sm: text-sm xl:text-base">Feeling/Activity</p>
                    </div>
                
                </div>
        </div>
        
    </div>
  )
}



export default InputBox

//https://www.simplenextjs.com/posts/next-firestore


        // collecion of posts where we gonna push the msg
        // db.collection('posts').add({
        //     //whatever typed in inputbox
        //     message: inputRef.current.value,
        //     //name & email & image of user gonna comes from session
        //     name: session.data.user.name,
        //     email: session.data.user.email,
        //     Image: session.data.user.image,
        //     timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
        // });

        // addDoc(collection(db, "posts"), {
        //         message: inputRef.current.value,
        //         name: session.data.user.name,
        //         email: session.data.user.email,
        //         Image: session.data.user.image,
        //         timeStamp: firebase.firestore.FieldValue.serverTimestamp()
        //   })

        // addDoc(collection(db, "posts"), {
        //     message:inputRef.current.value,
        //     name:session.data.user.name,
        //     email:session.data.user.email,
        //     image:session.data.user.image,
        //     timeStamp: firebase.firestore.FieldValue.serverTimestamp()
        // })


        // // const collectionRef = doc(db, 'posts');
        // //     const docRef = addDoc(collectionRef, {
        // //         message:inputRef.current.value,
        // //         name:session.data.user.name,
        // //         email:session.data.user.email,
        // //         image:session.data.user.image,
        // //         timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
        // //     });

        // // const colRef = addDoc(collection(db, "posts"), {
        // //     message:inputRef.current.value,
        // //     name:session.data.user.name,
        // //     email:session.data.user.email,
        // //     image:session.data.user.image,
        // //     timeStamp: firebase.firestore.FieldValue.serverTimestamp()
