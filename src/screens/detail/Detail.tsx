import { StyleSheet } from 'react-native';
import React from 'react';
import {
  Box,
  Button,
  ButtonIcon,
  Heading,
  HStack,
  Text,
  VStack,
} from '@gluestack-ui/themed';
import { useNavigation, useRoute } from '@react-navigation/native';
import { ArrowLeft2 } from 'iconsax-react-native';
import { IData } from '../../types';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import WebView from 'react-native-webview';

const Detail = () => {
  const { top } = useSafeAreaInsets();
  const paddingTop = top + 12;
  const navigation = useNavigation<any>();
  const route = useRoute<any>();
  const lesson = route.params.lesson as IData;

  return (
    <VStack flex={1} bg='$white'>
      <HStack
        alignItems='center'
        space='md'
        pt={paddingTop}
        pb='$2'
        bg='$darkBlue500'
      >
        <HStack>
          <Button
            variant='link'
            size='lg'
            px='$2'
            onPress={() => navigation.goBack()}
          >
            <ButtonIcon as={ArrowLeft2} size='xl' color='$white' />
          </Button>
        </HStack>
        <Heading color='$white'>{lesson.title}</Heading>
      </HStack>

      <VStack flex={1} p='$4' gap='$4'>
        <Box
          bg='$red400'
          w='$full'
          aspectRatio={16 / 9}
          rounded='$md'
          overflow='hidden'
        >
          <WebView
            source={{
              html: `
              <meta name="viewport" content="width=device-width, initial-scale=1.0" />
              <iframe  width="80%" height="100%" src="${lesson.videoUrl}" title="${lesson.title}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
            }}
            style={{ width: 500, height: 500 }}
          />
        </Box>
        <VStack gap='$2'>
          <Heading>Mô tả</Heading>
          <Text>{lesson.description}</Text>
        </VStack>
        {lesson.content && (
          <VStack gap='$2'>
            <Heading>Nội dung</Heading>
            {lesson.content.map((item, index) => (
              <HStack key={index} gap='$2'>
                <Text>-</Text>
                <Text>{item}</Text>
              </HStack>
            ))}
          </VStack>
        )}
      </VStack>
    </VStack>
  );
};

export default Detail;

const styles = StyleSheet.create({});
