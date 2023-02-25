import React, { useRef } from "react"

import { useDispatch, useSelector } from "react-redux"
import { signin } from "@/store/userSlice"

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  useColorModeValue,
} from "@chakra-ui/react"

import useSound from "use-sound"

export default function Login() {
  const dispatch = useDispatch()
  const bgColor = useColorModeValue("#E4E4E7", "#18181B")

  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const user = form.username.value;

    dispatch(signin({ user }));
  };

  const [playSound] = useSound("/sounds/sine-click.mp3", { volume: 0.5 });

  return (
    <>
      <Button mr="18px" onClick={onOpen}>
        Login
      </Button>
      <Modal
        initialFocusRef={initialRef}
        isOpen={isOpen}
        onClose={onClose}
        motionPreset="slideInBottom"
      >
        <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(10px)" />
        <ModalContent bg={bgColor}>
          <ModalHeader className="text-center text-3xl font-semibold text-gray-700 dark:text-gray-200 transition-color duration-150 ease-in">
            Login
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col items-center mt-8 mb-4"
            >
              <label className="text-zinc-50 dark:text-zinc-800 bg-zinc-800 dark:bg-zinc-50 rounded-lg px-3 transition-all duration-150 ease-in">
                Name:{" "}
                <input
                  ref={initialRef}
                  name="username"
                  className="text-zinc-50 dark:text-zinc-800 bg-transparent rounded-lg border-none outline-none py-1 px-2 focus:border-none focus:shadow-none focus:ring-0 focus-visible:outline-none transition-color duration-150 ease-in"
                />
              </label>
              <button
                onClick={() => playSound()}
                type="submit"
                className="text-gray-100 bg-fuchsia-600 width-max px-6 py-2 mt-4 mb-2 rounded-md hover:scale-95 active:scale-90 transition-all ease duration-200"
              >
                Login
              </button>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export function RequireLogin({ children }) {
  const dispatch = useDispatch()
  const bgColor = useColorModeValue("#E4E4E7", "#18181B")
  const user = useSelector((state) => state.user.user);

  const { onClose } = useDisclosure();

  const initialRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const user = form.username.value;

    dispatch(signin({ user }));
  };

  const [playSound] = useSound("/sounds/sine-click.mp3", { volume: 0.5 });

  if (!user) {
    return (
      <>
        <Modal
          initialFocusRef={initialRef}
          isOpen={true}
          onClose={onClose}
          closeOnOverlayClick={false}
          motionPreset="slideInBottom"
          isCentered
        >
          <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(10px)" />
          <ModalContent bg={bgColor}>
            <ModalHeader className="text-center text-3xl font-semibold text-gray-700 dark:text-gray-200 transition-color duration-150 ease-in">
              Login
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody className="flex flex-col mt-4">
              <span className="text-center opacity-60">
                Login to use the cart
              </span>
              <form
                onSubmit={handleSubmit}
                className="flex flex-col items-center mt-4 mb-4"
              >
                <label className="text-zinc-50 dark:text-zinc-800 bg-zinc-800 dark:bg-zinc-50 rounded-lg px-3 transition-all duration-150 ease-in">
                  Name:{" "}
                  <input
                    ref={initialRef}
                    name="username"
                    className="text-zinc-50 dark:text-zinc-800 bg-transparent rounded-lg border-none outline-none py-1 px-2 focus:border-none focus:shadow-none focus:ring-0 focus-visible:outline-none transition-color duration-150 ease-in"
                  />
                </label>
                <button
                  onClick={() => playSound()}
                  type="submit"
                  className="text-gray-100 bg-fuchsia-600 width-max px-6 py-2 mt-4 mb-2 rounded-md hover:scale-95 active:scale-90 transition-all ease duration-200"
                >
                  Login
                </button>
              </form>
            </ModalBody>
          </ModalContent>
        </Modal>
      </>
    );
  }

  return children;
}
