import { useContext, useState } from "react";
// import { ContextStore } from "../context/PostContext";
import "./PostList.css";
import { ContextStore } from "../App";
import { Modal } from "antd";
import businessPhoto from "../Images/images-Business.jpg";
const PostList = () => {
  const { postData, currentPage, removeCard, viewMode } =
    useContext(ContextStore);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [singleData, setSingleData] = useState("");
  console.log("singleData", singleData);
  const showModal = (data) => {
    setIsModalOpen(true);
    setSingleData(data);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const startIndex = (currentPage - 1) * 6;
  const displayedPosts = postData.slice(startIndex, startIndex + 6);

  return (
    <>
      <div className={`post-container ${viewMode}`}>
        {displayedPosts.map((item) => (
          <div
            key={item.id}
            className="post-card"
            onClick={() => showModal(item)}
          >
            <h3>
              {item.title}
              <button
              onClick={(e) => {
                e.stopPropagation();
                removeCard(item.id);
              }} 
              style={{marginLeft:"20px"}}

            >
              ❌
            </button>
            </h3>
            <img src={businessPhoto} alt="Business Image" style={{ width: "200px" ,height:"200" }} />

            <p>{item.body}</p>
           
          </div>
        ))}
      </div>
      <Modal
        title={singleData?.id}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <h1>title :{singleData?.title}</h1>
        <p>detail :{singleData?.body}</p>
      </Modal>
    </>
  );
};

export default PostList;
