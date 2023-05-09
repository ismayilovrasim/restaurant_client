import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
import React from 'react';
const { Meta } = Card;

const Card01 = ({ title, description, img }) => {

    return (

        <Card
            style={{
                width: 300,
                marginBottom:50
            }}
            cover={
                <img
                    alt="example"
                    src={img}
                />
            }
        >
            <Meta
                avatar={<Avatar src={img} />}
                title={title}
                description={description}
            />
        </Card>

    )


}
export default Card01