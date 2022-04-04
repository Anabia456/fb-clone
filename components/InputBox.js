import Image from "next/image"
import { useSession } from "next-auth/react"
import { EmojiHappyIcon } from "@heroicons/react/outline"
import { CameraIcon, VideoCameraIcon } from "@heroicons/react/solid"
import { useRef, useState } from "react/cjs/react.development";
import { db } from "../firebase";
import { collection, addDoc, doc } from "firebase/firestore"; 
import firebase from "firebase/app";
// import { firestore } from "firestore/app";
// import { firebase } from "firebase/app";

function InputBox() {
    const session = useSession();
    const inputRef = useRef(null);
    const filePickerRef = useRef(null);
    //state to hold/sustain image until it's not posted
    const [imageToPost, setImageToPost] = useState(null);

    const sendPost = (e) => {
        e.preventDefault();

        //if it hasnot any value or the inputbox is empty then return it
        if(!inputRef.current.value) return;

        // collecion of posts where we gonna push the msg
        db.collection('posts').add({
             //whatever typed in inputbox
            message: inputRef.current.value,
            // name & email & image of user gonna comes from session
            name: session.data.user.name,
            email: session.data.user.email,
            Image: session.data.user.image,
            timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
        });

        // addDoc(collection(db, "posts"), {
        //     message: inputRef.current.value,
        //     name: session.data.user.name,
        //     email: session.data.user.email,
        //     Image: session.data.user.image,
        //     timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
        //   });

        inputRef.current.value = "";
    };

    const addImageToPost = (e) => {
        //initialize special api code file reader
        const reader = new FileReader();
        if(e.target.files[0]){
            //this will gonna read that image file as data url
            reader.readAsDataURL(e.target.files[0]);
        }

        // as reader is asynchronous function so we are gonna give onload
        //when it loads and reader event comes back
        reader.onload = (readerEvent) => {
            setImageToPost(readerEvent.target.result);
        }; 
    };

    //will again set image post to null
    const removeImage = () => {
        setImageToPost(null);
    }

  return (
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
                    <img src="{imageToPost}" className="h-10 object-contain"/>
                    <p className="text-xs text-red-500 text-center">Remove</p>
                </div>
            )}
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
  )
}



export default InputBox




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
        // // })