import { Container,Spinner, Progress } from '@chakra-ui/react'


const Loader = () => {
  return (
    <Container centerContent margin={100}>

<Spinner
  thickness='40px'
  speed='0.65s'
  emptyColor='white'
  color='blue'

  size='xl'
/>


    </Container>
  )
}

export default Loader