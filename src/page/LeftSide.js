import React, { useState } from 'react';
import { Avatar, Card, Button, Drawer, Form, Input } from 'antd';
import "./LeftSide.css"
import { UnorderedListOutlined } from '@ant-design/icons';
function LeftSide({ setViewMode }) {
    const [isDrawerVisible, setIsDrawerVisible] = useState(false); // State to control drawer visibility
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        address: '',
        country: '',
        email: '',
        phone: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (values) => {
        if (formData?.address !== '' && formData?.country !== '' && formData?.email !== '' && formData?.firstName !== '' && formData?.lastName !== '' && formData?.phone !== '') {
            console.log('Feedback Submitted:', values);
            console.log('Feedback Submitted:', formData);
            setIsDrawerVisible(false);
            setFormData({
                firstName: '',
                lastName: '',
                address: '',
                country: '',
                email: '',
                phone: '',
            });
        }

    };
    const showDrawer = () => {
        setIsDrawerVisible(true);
    };

    const onClose = () => {
        setIsDrawerVisible(false);
    };

    return (
        <div>
            {/* <Card
                style={{
                    minWidth: 300,
                }}
            >
                <Card.Meta
                    avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />}
                    title="Hi Reader, Here's your News!"
                />
            </Card> */}

            <Card
                style={{
                    width: "250px",
                    padding: "0",
                    margin:"20px"
                }}
            >
                <div className='cardTop'>
                    <Card.Meta
                        avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />}

                    />
                    <div>
                        <h3>Hi Reader</h3>
                        <p>Here's your News!</p>
                    </div>
                </div>
            </Card>
            <Card className="toggle-card" style={{
                    width: "300px",
                    padding: "0",
                    margin:"20px"
                }}>
                <p>View Toggle</p>
                <Button.Group className="toggle-buttons">
                    <Button onClick={() => setViewMode('grid')}><IdcardOutlined /></Button>
                    <Button onClick={() => setViewMode('list')}><UnorderedListOutlined /></Button>
                </Button.Group>
            </Card>
            <Card
                style={{
                    width: '100%',
                    marginTop: '20px',
                }}
            >
                <h3>Have a Feedback?</h3>
                <Button
                    type="primary"
                    size="large"
                    onClick={showDrawer} // Show the drawer when clicked
                    style={{ backgroundColor: '#ff7f7f', border: 'none' }}
                >
                    We're Listening!
                </Button>
            </Card>

            {/* Feedback Drawer */}

            <Drawer
                title="Feedback"
                placement="left"
                onClose={onClose}
                width={700}
                visible={isDrawerVisible}
            >
                <div className="leftContainer">
                    <div className="leftSide">
                        <Card
                            style={{
                                width: "200px",
                                padding: "0"
                            }}
                        >
                            <div className='cardTop'>
                                <Card.Meta
                                    avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />}

                                />
                                <div>
                                    <h3>Hi Reader</h3>
                                    <p>Here's your News!</p>
                                </div>
                            </div>
                        </Card>

                        <Card
                            style={{
                                width: '80%',
                                marginTop: '20px',
                            }}
                        >
                            <h3 className='wigthBold'>Have a Feedback?</h3>
                            <Button
                                type="primary"
                                size="large"
                                onClick={showDrawer} // Show the drawer when clicked
                                style={{ backgroundColor: '#ff7f7f', border: 'none' }}
                            >
                                We're Listening!
                            </Button>
                        </Card>
                    </div>
                    <div className="rightSide">
                        <h2>Thank you so much for taking the time!</h2>
                        <p>Please provide the below details!</p>

                        <Form layout="vertical" onFinish={handleSubmit}>
                            <Form.Item label="First Name" required>
                                <Input
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                />
                            </Form.Item>

                            <Form.Item label="Last Name" required>
                                <Input
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                />
                            </Form.Item>

                            <Form.Item label="Address" required>
                                <Input.TextArea
                                    name="address"
                                    placeholder="Enter your full Postal Address"
                                    value={formData.address}
                                    onChange={handleChange}
                                />
                            </Form.Item>

                            <Form.Item label="Country" required>
                                <Input
                                    name="country"
                                    value={formData.country}
                                    onChange={handleChange}
                                />
                            </Form.Item>

                            <Form.Item
                                label="Email ID"
                                required
                                validateStatus={formData.email ? '' : 'error'}
                                help={formData.email ? '' : 'Please enter a valid e-mail'}
                            >
                                <Input
                                    name="email"
                                    placeholder="example@sample.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </Form.Item>

                            <Form.Item
                                label="Phone Number"
                                required
                                validateStatus={formData.phone ? '' : 'error'}
                                help={formData.phone ? '' : 'Please enter a valid number'}
                            >
                                <Input
                                    name="phone"
                                    addonBefore="+91"
                                    placeholder="123456789"
                                    value={formData.phone}
                                    onChange={handleChange}
                                />
                            </Form.Item>

                            <Button type="primary" htmlType="submit" block>
                                Submit Feedback
                            </Button>
                        </Form>
                    </div>
                </div>
            </Drawer>

        </div>
    );
}

export default LeftSide;
