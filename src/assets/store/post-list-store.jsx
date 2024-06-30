import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  let newPostList = currPostList
  if(action.type === 'DELETE_POST'){
  newPostList = currPostList.filter((post) => post.id !== action.payload.postId)
  } else if (action.type === 'ADD_POST'){
    newPostList = [action.payload, ...currPostList]
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, DEFAULT_POST_LIST );

  const addPost = (userId, postTitle,postBody, reactions,tags) => {
   dispatchPostList({
    type:'ADD_POST',
    payload:{
      id: Date.now(),
    title: postTitle,
    body: postBody,
    reactions: reactions,
    userId: userId,
    tags: tags,
    }
   })
  };

  const deletePost = (postId) => {
    dispatchPostList ({
      type:'DELETE_POST',
      payload : {
         postId,
      }
    })
  };
  return (
    <PostList.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};

const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Going to Mumbai ",
    body: "Hi friends iam going to Mumbai for my vacation , hopes to enjoy a lot Peace lot",
    reactions: 2,
    userId: "user-9",
    tags: ["vacation", "Mumbai", "Enjoying"],
  },
  {
    id: "2",
    title: "i cleared th exam ",
    body: "After 4 years i completed my Btech , Hard to believe ",
    reactions: 15,
    userId: "user-12",
    tags: ["Garduating", "unbelievble"],
  },
]
export default PostListProvider;
