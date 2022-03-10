import { Heading, HStack, Stack, Text } from '@chakra-ui/react';
import Avatar from '@davatar/react/dist/Image';
import * as React from 'react';
import ReactTimeago from 'react-timeago';
import { Comment } from '../hooks/useCommentsContract';
import Username from './Username';


interface ComponentProps {
    comment: Comment;
}

const Comment: React.FunctionComponent<ComponentProps> = ({comment}) => {
    return (
        <HStack spacing={3} alignItems="start" >
            <Avatar size={48} address={comment.creator_address} />
            <Stack spacing={1} flex={1} bg="whiteAlpha.100" rounded="2xl" p={3}>
                <Heading color="whiteAlpha.900" fontSize="1g">
                    <Username address={comment.creator_address} />
                </Heading>
                <Text color="whiteAlpha.800" fontSize="1g">
                    {comment.message}
                </Text>
                <Text color="whiteAlpha.700" fontSize="md">
                   <ReactTimeago date={comment.created_at.toNumber() * 1000} />
                </Text>
            </Stack>
        </HStack>
    )
};

export default Comment;