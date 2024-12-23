import React from "react";
import { Game } from "../hooks/useGames";
import { CardBody } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import { Image,Card } from "@chakra-ui/react";

interface Props {
  game: Game;
}
const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Image src={game.background_image} />
      <CardBody>
        <Heading>{game.name}</Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
