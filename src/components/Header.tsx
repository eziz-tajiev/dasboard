import { Avatar, Flex, Typography } from 'antd';
import Search from 'antd/es/transfer/search';
import { MessageOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons'

const CustomHeader = () => {
  return(
    <Flex align='center' justify='space-between'>
        <Typography.Title level={3} type='secondary'>
          Welcome back, John
        </Typography.Title>

        <Flex align='cener' gap="3rem">
          <Search placeholder='Search Dashboard' />
          <Flex align='center' gap='10px'>
            <MessageOutlined className='header-icon' />
            <NotificationOutlined className='header-icon' />
            <Avatar icon={<UserOutlined />} />

          </Flex>
        </Flex>
    </Flex>
  );
}

export default CustomHeader