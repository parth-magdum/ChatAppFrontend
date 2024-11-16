import { Avatar } from "@chakra-ui/avatar";
import { Box, Text } from "@chakra-ui/layout";
import { ChatState } from "../../Context/chatProvider";



const UserListItem = ({ user, handleFunction }) => {

    const { chats } = ChatState();
    const isAdded = () => {
        let flag = 0;
        chats.map(chat => {
            if (!chat.isGroupChat && ((chat.users[0]._id === user._id) || (chat.users[1]._id === user._id))) { flag = 1 };
        })
        if (flag == 1) return true;
        return false
    }


    return (

        < Box
            display={isAdded() ? 'none' : 'flex'}
            onClick={handleFunction}
            cursor="pointer"
            bg="#E8E8E8"
            _hover={{
                background: "#38B2AC",
                color: "white",
            }
            }
            w="100%"
            d="flex"
            alignItems="center"
            color="black"
            px={3}
            py={2}
            mb={2}
            borderRadius="lg"
        >
            <Avatar
                mr={2}
                size="sm"
                cursor="pointer"
                name={user.name}
                src={user.pic}
            />
            <Box>
                <Text>{user.name}</Text>
                <Text fontSize="xs">
                    <b>Email : </b>
                    {user.email}
                </Text>
            </Box>
        </Box >
    );
};

export default UserListItem;