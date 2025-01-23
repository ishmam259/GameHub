import { Box, Grid, GridItem, Show } from "@chakra-ui/react";
import { useState } from "react";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import NavBar from "./components/NavBar";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";
import { Genre } from "./hooks/useGenres";
import SortSelector from "./components/SortSelector";
import { Flex } from "@chakra-ui/react";

export interface GameQuery {
  platform: Platform | null;
  genre: Genre | null;
  sortOrder: string;
  searchText: string;
}


function App() {
  const [GameQuery, setGameQuery]= useState<GameQuery>({ platform: null, genre: null, sortOrder: '' });
  
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: '1fr',
        lg: '200px 1fr'
      }}
    >
      <GridItem area="nav">
        <NavBar onSearch={(searchText)=> setGameQuery({...GameQuery,searchText})}/>
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList selectedGenre={GameQuery.genre} onSelectGenre={(genre) => setGameQuery({...GameQuery,genre})} />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Flex  paddingLeft={2} marginBottom={5}>
          <Box marginRight={5}>
          <PlatformSelector 
            selectedPlatform={GameQuery.platform} 
            onSelectPlatform={(platform: Platform) => setGameQuery({...GameQuery, platform}) } 
          />
          </Box>
          <SortSelector 
            sortOrder={GameQuery.sortOrder} 
            onSelectSortOrder={(sortOrder: string) => setGameQuery({...GameQuery, sortOrder})} 
          />
        </Flex>
        <GameGrid gameQuery={GameQuery}/>
      </GridItem>
    </Grid>
  );
}


export default App; 