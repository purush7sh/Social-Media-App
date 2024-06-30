import Header from "./assets/components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Footer from "./assets/components/Footer";
import Sidebar from "./assets/components/Sidebar";
import CreatePost from "./assets/components/CreatePost";
import PostList from "./assets/components/PostList";
import { useState } from "react";
import PostListProvider from "./assets/store/post-list-store";
function App() {
  const [selectedTab, setSelectedTab] = useState("Create Post");

  
  return (
    <>
      <PostListProvider>
      <div className="app-container">
        <Sidebar SelectedTab={selectedTab} SetSelectedTab = {setSelectedTab} ></Sidebar>
        <div className="content">
          <Header></Header>
          {selectedTab === "Home" ? (
            <PostList></PostList>
          ) : (
            <CreatePost></CreatePost>
          )}

         
            <Footer></Footer>
          
        </div>
      </div>
      </PostListProvider>
    </>
  );
}

export default App;
