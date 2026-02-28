import { Typography } from 'antd';

const { Title, Paragraph } = Typography;

export function HomePage() {
  return (
    <>
      <Title level={2}>Welcome to KPA</Title>
      <Paragraph>
        KPA is a local service platform supporting ride booking, delivery, logistics, and agriculture marketplace.
      </Paragraph>
    </>
  );
}
