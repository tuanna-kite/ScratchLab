import { StyleSheet } from 'react-native';
import React from 'react';
import { Box, Heading, Image, Text, VStack } from '@gluestack-ui/themed';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParams } from '../../navigations/config';

type Props = {} & NativeStackScreenProps<RootStackParams, 'PracticeDetail'>;

const PracticeDetail = ({ route, ...props }: Props) => {
  return (
    <Box flex={1} bg='$white' p='$4'>
      <VStack gap='$2'>
        <Heading fontWeight='$semibold'>
          Bài tập {route.params.index + 1}: {route.params.title}
        </Heading>
        <Box borderWidth={1} borderColor='$coolGray100' rounded={'$3xl'}>
          <Image
            w={'$full'}
            h={'$40'}
            alt='img-practice'
            source={route.params.image}
          />
        </Box>
        <Text fontSize={'$md'} color='$coolGray800'>
          {route.params.description}
        </Text>
        {route.params.content?.map((content, idx) => (
          <Text
            key={idx}
            fontSize={'$md'}
            ml={content.includes('\t') ? '$4' : 0}
          >
            {content}
          </Text>
        ))}
      </VStack>
    </Box>
  );
};

export default PracticeDetail;

const styles = StyleSheet.create({});
