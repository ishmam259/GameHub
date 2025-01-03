import { Game } from "../hooks/useGames";
import { CardBody } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import { Image,Card } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";

interface Props {
  game: Game;
}
const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius={10} overflow='hidden'>
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize='2xl'>{game.name}</Heading>
        {game.parent_platforms.map(({platform}) => <Text>{platform.name}</Text>)}
      </CardBody>
    </Card>
  );
};

export default GameCard;
