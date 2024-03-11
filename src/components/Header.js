import React from 'react'

import { Button, Drawer, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerBody, DrawerOverlay, VStack, useDisclosure, HStack } from '@chakra-ui/react'
import { BiMenuAltLeft } from 'react-icons/bi'
import { Link } from 'react-router-dom'

const Header = () => {

    const {isOpen, onClose, onOpen} = useDisclosure()

  return (
    <>
      <Button 
        zIndex={'overlay'}
        pos={"fixed"} 
        top={'4'} 
        left={'4'} 
        colorScheme='purple' 
        p={'0'} 
        w={'10'} 
        h={'10'} 
        borderRadius={'full'}
        onClick={onOpen}
      >
        <BiMenuAltLeft size={"20"} />
      </Button>

      <Drawer isOpen={isOpen} onClose={onClose} placement='left'>
        <DrawerOverlay />

        <DrawerContent >
            <DrawerCloseButton />
            <DrawerHeader>Video Hub</DrawerHeader>
            <DrawerBody>
                <VStack alignItems={'flex-start'}>
                    <Button onClick={onClose} variant={'ghost'} colorScheme='purple' >
                        <Link to={'/'}>Home</Link>
                    </Button>

                    <Button onClick={onClose} variant={'ghost'} colorScheme='purple' >
                        <Link to={'/videos'}>Videos</Link>
                    </Button>

                    <Button onClick={onClose} variant={'ghost'} colorScheme='purple' >
                        <Link to={'/videos?category=free'}>Free Videos</Link>
                    </Button>

                    <Button onClick={onClose} variant={'ghost'} colorScheme='purple' >
                        <Link to={'/upload'}>Upload Video</Link>
                    </Button>
                </VStack>

                <HStack pos={'absolute'} bottom={'10'} left={'0'} w={'full'} justifyContent={'space-evenly'}>

                    <Button onClick={onClose} colorScheme='purple'>
                        <Link to={'/login'}>Log In</Link>
                    </Button>

                    <Button onClick={onClose} colorScheme='purple' variant={'outline'}>
                        <Link to={'/signup'}>Sign Up</Link>
                    </Button>
                </HStack>
            </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default Header