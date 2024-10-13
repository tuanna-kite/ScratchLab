import { Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { HStack, Image, ScrollView, Text, VStack } from '@gluestack-ui/themed';
import { EDisplayType, IData } from '../../../types';
import { useNavigation } from '@react-navigation/native';

type Props = {
  data: IData[];
  displayType: EDisplayType;
  title: string;
};

const { width } = Dimensions.get('screen');

const SIZE_TYPE: {
  [key in EDisplayType]: {
    widthSize: number;
    heightSize: number;
  };
} = {
  [EDisplayType.NORMAL]: {
    widthSize: 152,
    heightSize: 152,
  },
  [EDisplayType.LARGE]: {
    widthSize: width - 32,
    heightSize: 192,
  },
};

const CardList = ({ data, displayType, title }: Props) => {
  const navigation = useNavigation<any>();
  const handleNavigate = (id: number) => {
    const lesson = data.find((item) => item.id === id);
    navigation.navigate('Detail', { lesson });
  };
  return (
    <VStack>
      <HStack justifyContent='space-between' mb={'$4'}>
        <Text fontWeight='$semibold' fontSize={'$xl'} color='$primary600'>
          {title}
        </Text>
      </HStack>
      <ScrollView w={'$full'} horizontal showsHorizontalScrollIndicator={false}>
        <HStack gap={'$4'}>
          {data.map((item) => (
            <TouchableOpacity
              key={item.id}
              onPress={() => handleNavigate(item.id)}
            >
              <VStack gap={'$3'} width={SIZE_TYPE[displayType].widthSize}>
                <Image
                  source={item.image}
                  width={SIZE_TYPE[displayType].widthSize}
                  height={SIZE_TYPE[displayType].heightSize}
                  rounded={'$xl'}
                  alt='image'
                />
                <Text fontSize={'$md'} fontWeight='$semibold' numberOfLines={1}>
                  {item.title}
                </Text>
                <Text
                  ellipsizeMode='tail'
                  numberOfLines={2}
                  color={'$coolGray500'}
                >
                  {item.description}
                </Text>
              </VStack>
            </TouchableOpacity>
          ))}
        </HStack>
      </ScrollView>
    </VStack>
  );
};

export default CardList;

const styles = StyleSheet.create({});
