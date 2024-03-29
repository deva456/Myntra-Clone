import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Button,
  useDisclosure,
} from '@chakra-ui/react'
import React from 'react'
import {TfiClose } from 'react-icons/tfi';

const RemoveItem = ({id,handleDelete}) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const cancelRef = React.useRef()

  const deleteCart = () => {
     handleDelete(id)
     onClose()
  }

  return (
    <>
      
      <TfiClose
        style={{ fontSize: "1.3rem"}}
        onClick={onOpen} 
      />
      

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent m={"auto"}>
            <AlertDialogHeader fontSize='lg' fontWeight='bold'>
              Move From Bag
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure you want to move this item from bag ?
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme='red' onClick={ deleteCart } ml={3}>
                Remove
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  )
}

export default RemoveItem