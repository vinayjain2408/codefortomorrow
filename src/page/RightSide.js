import React, { useEffect, useState } from 'react';
import { List, Card, Avatar, Pagination, Modal, Row, Col } from 'antd';
import './RightSide.css';
import axios from "axios";
const { Meta } = Card;
function RightSide({ viewMode }) {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(6);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const fetchData = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    setData(response?.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const paginatedData = data.slice(startIndex, endIndex);

  const handlePageChange = (page, pageSize) => {
    setCurrentPage(page);
    setPageSize(pageSize);
  };
  const showModal = (item) => {
    setSelectedItem(item);
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  console.log("paginatedData",paginatedData)
  return (
    <div className="right-container">
      {
        viewMode === "grid" ?
        <div className="card-grid">
        <Row gutter={[16, 16]} justify="center">
          {paginatedData?.map((item, index) => (
            <Col key={index} xs={24} sm={12} md={8} lg={8}> {/* Adjust based on screen size */}
              <Card
                style={{
                  width: '100%',
                  height:'400px'
                }}
            
              >
                <Meta
                  avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />}
                  title={item?.title}
                />
                <p>{item?.body}</p>
                <img
                    alt="example"
                    src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                  />
              </Card>
            </Col>
          ))}
        </Row>
      </div>
          :
          <List
            itemLayout="horizontal"
            dataSource={paginatedData}
            renderItem={item => (
              <List.Item onClick={() => showModal(item)}>
                <Card className="news-card">
                  <List.Item.Meta
                    avatar={<Avatar src="https://via.placeholder.com/50" />}
                    title={item.title}
                  />
                  <div>{item.body}</div>
                </Card>
              </List.Item>
            )}
          />
      }



      {selectedItem && (
        <Modal
          title={selectedItem.title}
          visible={isModalVisible}
          onCancel={handleCancel}
          width={800}
        >
          <p>{selectedItem.body}</p>
        </Modal>
      )}

      {/* Pagination Component */}
      <Pagination
        current={currentPage}
        pageSize={pageSize}
        total={data.length}
        onChange={handlePageChange}
        pageSizeOptions={['5', '10', '15']}
        style={{ textAlign: 'center', marginTop: '20px' }}
      />
    </div>
  );
}

export default RightSide;
