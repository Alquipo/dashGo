import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align='center'>
      <Box mr='4' textAlign='right'>
        <Text>Alquipo Neto</Text>
        <Text color='gray.300' fontSize='small'>alquiponet@outlook.com.br</Text>
      </Box>

      <Avatar size='md' name='Alquipo Neto' src="https://github.com/alquipo.png"/>
  </Flex>
  )
}