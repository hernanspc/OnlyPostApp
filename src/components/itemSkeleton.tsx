import React from 'react'
import { Skeleton, VStack, HStack, Center, NativeBaseProvider } from "native-base";

const ItemSkeleton = () => {
    return (
        <Center w="100%">
            <HStack w="90%" maxW="400" space={8} rounded="md">
                <Skeleton flex="1" h="150" rounded="md" startColor="coolGray.100" />
                <VStack flex="3" space="4">
                    <Skeleton startColor="amber.300" />
                    <Skeleton.Text />
                    <HStack space="2" alignItems="center">
                        <Skeleton h="3" flex="2" rounded="full" />
                        <Skeleton h="3" flex="1" rounded="full" startColor="indigo.300" />
                    </HStack>
                </VStack>
            </HStack>
        </Center>
    )
}

export default ItemSkeleton