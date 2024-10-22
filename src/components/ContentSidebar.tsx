import { Card, Flex, Typography, Image } from "antd";
import plant from '../assets/Plants/plant01.png'

const ContentSidebar = () => {
  return(
    <div>
      <Card className="card">
        <Flex vertical gap='large'>
          <Typography.Title level={4}>
            Today <br /> 5 orders
          </Typography.Title>
          <Typography.Title level={4}>
            This month <br /> 240 orders
          </Typography.Title>
        </Flex>

        <Image src={plant} alt="plant" style={{
          position: "absolute",
          bottom: -50,
          left: 80,
          height: '300px',
          width: 'auto'}} />
      </Card>
    </div>
  );
}

export default ContentSidebar