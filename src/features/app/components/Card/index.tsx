import React from "react";
import { CardBody, Card as CardComponent, CardHeader } from "@nextui-org/react";

interface CardProps {
  header: React.ReactNode;
  body: React.ReactNode;
  cardWidth?: string;
}

const Card = ({ header, body, cardWidth }: CardProps) => {
  return (
    <CardComponent style={{ width: cardWidth }}>
      <CardHeader>{header}</CardHeader>
      <CardBody>{body}</CardBody>
    </CardComponent>
  );
};

export default Card;
