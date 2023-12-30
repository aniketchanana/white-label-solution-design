import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
} from '@chakra-ui/react';
import React from 'react';

const ErrorDialog = ({
  errorMessage,
  setErrorMessage,
  title,
}: {
  errorMessage: string;
  setErrorMessage: (e: string) => void;
  title: string;
}) => {
  const cancelRef = React.useRef(null);
  const onClose = () => setErrorMessage('');
  return (
    <AlertDialog
      isOpen={!!errorMessage}
      leastDestructiveRef={cancelRef}
      onClose={onClose}
    >
      <AlertDialogOverlay>
        <AlertDialogContent>
          <AlertDialogHeader fontSize='lg' fontWeight='bold'>
            {title}
          </AlertDialogHeader>

          <AlertDialogBody>{errorMessage}</AlertDialogBody>

          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={onClose}>
              Close
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
};

export default ErrorDialog;
