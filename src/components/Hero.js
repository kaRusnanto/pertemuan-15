import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Button from './ui/Button';
import { Flex, Heading, Image, Stack, Text, useBreakpointValue } from '@chakra-ui/react';

const Hero = () => {

    const [movie, setMovie] = useState({})

    async function getDataApi() {
        const url = "https://www.omdbapi.com/?apikey=fcf50ae6&i=tt2975590"

        const response = await fetch(url)
        const data = await response.json()

        setMovie(data)
    }

    useEffect(
        function(){
            getDataApi()
        }, []
    )

    console.log(movie);

        return (
            <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
              <Flex p={8} flex={1} align={'center'} justify={'center'}>
                <Stack spacing={6} w={'full'} maxW={'lg'}>
                  <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
                  <Text color={'red.700'} as={'span'}>
                      {movie.Title}
                    </Text>
                  </Heading>
                  <Text color={'light'} as={'span'}>
                      {movie.Genre}
                    </Text>
                  <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.300'}>
                    {movie.Plot}
                  </Text>
                  <Text fontSize={{ base: 'md', lg: 'lg' }} color={'red.800'}>
                    {movie.Writer}
                  </Text>
                  <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
                    <Button variant='primary'>Watch</Button>
                    <Button variant='secondary'>Trailer</Button>
                  </Stack>
                </Stack>
              </Flex>
              <Flex flex={1} justifyContent={'center'}>
                <Image
                  alt={'Login Image'}
                  maxH={'800'}
                  width={'auto'}
                  objectFit={'cover'}
                  borderRadius={"25px"}

                  src={
                    movie.Poster
                  }
                />
              </Flex>
            </Stack>
          )
}



export default Hero;