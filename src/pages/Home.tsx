import { Button, Flex, Image, Input, Link, Text } from '@chakra-ui/react'

export function Home() {
  return (
    <Flex h="100vh" flexDir="column" justify="center">
      <Flex
        py="5rem"
        bgColor="secondary"
        w="100%"
        flexDir="column"
        align="center"
        justify="center"
      >
        <Image src="logo.png" alt="Lobinho" />

        <Flex mt="3rem" w="100%" maxW="360px" flexDir="column">
          <Input
            flex="1"
            borderRadius="15px"
            placeholder="Seu nome"
            p="0.5rem 0"
            textAlign="center"
            fontWeight="semibold"
            variant="filled"
            _focus={{
              bgColor: 'white'
            }}
          />
          <Flex mt="1rem">
            <Input
              flex="1"
              h="100%"
              borderRadius="15px"
              placeholder="ID da sala"
              textAlign="center"
              fontSize="2rem"
              fontWeight="semibold"
              variant="filled"
              _focus={{
                bgColor: 'white'
              }}
            />
            <Button
              bgColor="primary"
              ml="1rem"
              p="2rem 1rem"
              transition="filter 0.2s"
              _hover={{
                filter: 'brightness(1.2)'
              }}
            >
              <Image src="play.svg" alt="Play" />
            </Button>
          </Flex>
          <Text color="white" fontSize="1.5rem" textAlign="center" mt="0.5rem">
            ou{' '}
            <Link
              textDecor="underline"
              fontWeight="bold"
              transition="filter 0.2s"
              _hover={{
                filter: 'brightness(0.9)'
              }}
            >
              Crie uma sala!
            </Link>
          </Text>
        </Flex>
      </Flex>
    </Flex>
  )
}
