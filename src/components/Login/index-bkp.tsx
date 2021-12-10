import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading
} from '@chakra-ui/react'

export default function LoginPage () {
  return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={'gray.25'}
        rounded={'lg'}
        boxShadow={'lg'}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6} bg={'gray.100'}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>Entre na sua conta</Heading>
          </Stack>
          <Box
            p={8}>
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Email</FormLabel>
                <Input bg={'gray.110'} placeholder="Digite seu email" type="email" />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Senha</FormLabel>
                <Input bg={'gray.110'} placeholder="Informe sua senha" type="password" />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}>
                  <Checkbox>Lembre-me</Checkbox>
                  <Link color={'blue.400'}>Esqueceu a senha?</Link>
                </Stack>
                <Button
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500'
                  }}>
                  Entrar
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
  )
}
