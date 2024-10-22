import { Flex, Typography, Button, Card, Image } from "antd";
import '../App.css'
import { plantData } from "../Data/plantData";

const { Meta } = Card;

const ProductList = () => {
  return (
   <>
   <Flex align="center" justify="space-between">
    <Typography.Title level={3} className="primary--color">
      My Listing
    </Typography.Title>
    <Button type = 'link' className="gray--color">
      View All
    </Button>
   </Flex>

   <Flex align="center" gap='large'>
    {plantData.map((plant) => (
      <Card key={plant.id} hoverable className="plant-card">
        <Image src={plant.picture} style={{width: '130px'}}/>
        <Meta title={plant.name} style={{ marginTop: '1rem' }} />
      </Card>
    ))}
   </Flex>
   </>
  );
}

export default ProductList