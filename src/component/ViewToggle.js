import { useContext } from "react";
import { ContextStore } from "../App";
import { IdcardOutlined, UnorderedListOutlined } from "@ant-design/icons";
import {  Button, Card } from "antd";
import businessPhoto from "../Images/images-Business.jpg";
const ViewToggle = () => {
  const { viewMode, setViewMode } = useContext(ContextStore);

  return (
    <>
      <Card
        style={{
          width: "95%",
          padding: "0",
          margin: "10px",
          
        }}
      >
        <div className="cardTop">
         
           <img src={businessPhoto} alt="Business Image" style={{ width: "100px",height:"50" ,borderRadius:"50%"}} />
          <div>
            <h2>Hi Reader</h2>
            <p>Here's your News!</p>
          </div>
        </div>
      </Card>
      <Card
        className="toggle-card"
        style={{
          width: "95%",
          padding: "0",
          margin: "20px",
        }}
      >
        <p>View Toggle</p>
        <Button.Group className="toggle-buttons">
          <Button onClick={() => setViewMode("grid")}>
            <IdcardOutlined  className="iconsize" />
          </Button>
          <Button onClick={() => setViewMode("list")}>
            <UnorderedListOutlined className="iconsize" />
          </Button>
        </Button.Group>
      </Card>
   
    </>
  );
};

export default ViewToggle;
