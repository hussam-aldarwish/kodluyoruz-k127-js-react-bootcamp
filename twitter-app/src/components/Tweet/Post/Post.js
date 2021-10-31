import React, { useEffect, useState } from "react";
import { BsChat } from "react-icons/bs";
import { BiRepost } from "react-icons/bi";
import { FiHeart, FiUpload } from "react-icons/fi";
import "./Post.scss";

import { doc, getDoc, getFirestore } from "firebase/firestore";
import { getStorage, ref, getDownloadURL } from "firebase/storage";

export default function Post({ uid, text, image, postedOn }) {
  const db = getFirestore();
  const storage = getStorage();
  const [url, setUrl] = useState(null);

  const docRef = doc(db, "users", uid);
  const [user, setuser] = useState({
    displayName: "Twitter User",
    username: "@username",
  });

  useEffect(() => {
    async function fetchUser() {
      const docSnap = await getDoc(docRef);
      setuser(docSnap.data());

      if (image) {
        const srcUrl = await getDownloadURL(ref(storage, image));
        setUrl(srcUrl);
      }
    }
    fetchUser();
  });

  return (
    <div className="postCont">
      <div className="post">
        <div className="post-avatar">
          <img src="/tweet.png" className="avatar" alt="" />
        </div>
        <div className="post-body">
          <div className="post-header">
            <div className="post-headerText">
              <h3>
                {user.displayName}
                <span className="username"> {user.username}</span>
              </h3>
            </div>
            <div className="post-headerDescription">
              {text && <h3>{text}</h3>}
            </div>
          </div>
          {url && <img src={url} alt="" />}
          <p>{postedOn}</p>
          <div className="post-footer">
            <BsChat fontSize="18px" className="message" />
            <BiRepost fontSize="22px" className="retweet" />
            <FiHeart fontSize="18px" className="heart" />
            <FiUpload fontSize="18px" className="share" />
          </div>
        </div>
      </div>
    </div>
  );
}
