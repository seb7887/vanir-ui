import React from 'react'
import { Button, Flex } from 'vanir-ui'
import { HiArrowRight } from 'react-icons/hi'
import { GoMarkGithub } from 'react-icons/go'
import { Link } from 'react-router-dom'
import { Footer } from '../components'

export const Home: React.FC = () => {
  return (
    <Flex direction="column" className="h-screen">
      <Flex className="w-full h-full" justify="center" align="center">
        <Flex className="w-96" justify="between">
          <Link to="/docs/getting-started">
            <Button
              variant="solid"
              colorScheme="purple"
              rightIcon={<HiArrowRight />}
              size="lg"
            >
              Get Started
            </Button>
          </Link>
          <a href="https://github.com/seb7887/vanir-ui">
            <Button
              variant="outline"
              colorScheme="purple"
              size="lg"
              leftIcon={<GoMarkGithub />}
            >
              Github
            </Button>
          </a>
        </Flex>
      </Flex>
      <Footer />
    </Flex>
  )
}

export default Home
