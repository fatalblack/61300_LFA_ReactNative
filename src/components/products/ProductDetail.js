import { StyleSheet, Text, View, Image, Pressable, useWindowDimensions, ScrollView } from 'react-native';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Colors } from '../../globals/styles/Colors';
import { DisplaySizes, IsUnderMinWidth, IsLandscape } from '../../globals/styles/DisplaySizes';
import { useGetProductByIdQuery } from '../../services/shopService';
import ProductAddInput from './ProductAddInput';

function ProductDetail({navigation}) {
  const { height, width } = useWindowDimensions();
  const [ imageHeight, setImageHeight ] = useState(0);
  const [ imageWidth, setImageWidth ] = useState(0);
  const [ item, setItem ] = useState(null);
  const productId = useSelector(state => state.shopReducer.value.productIdSelected);
  const { data: product, isLoading, error } = useGetProductByIdQuery(productId);

  const isUnderMinWidth = IsUnderMinWidth();
  const isLandscape = IsLandscape();

  useEffect(()=>{
    if(width > height){
      setImageHeight(height*0.5);
      setImageWidth(width*0.5);
    }else{
      setImageHeight(height*0.5);
      setImageWidth(width);
    }
  }, [width, height]);

  useEffect(()=>{
    if(!isLoading && product){
      setItem(Object.values(product)[0]);
    }
  }, [product]);

  const onBackToList = () => {
    navigation.navigate("ProductList", {categoryId: item.categoryId});
  };

  return(
    item ?
    <ScrollView>
      <View style={stylesProductDetail.container}>
        <View style={stylesProductDetail.zoneBack}>
          <Pressable
            onPress={onBackToList}
            style={[stylesProductDetail.buttonBack, isUnderMinWidth ? stylesProductDetail.buttonBackMin : stylesProductDetail.buttonBackMax]}>
            <Text style={[stylesProductDetail.textBack, isUnderMinWidth ? stylesProductDetail.textBackMin : stylesProductDetail.textBackMax]}>
              Volver a la lista
            </Text>
          </Pressable>
        </View>
        <View style={isLandscape ? stylesProductDetail.zoneInfoLandscape : stylesProductDetail.zoneInfoPortrait}>
          <View style={{width: isLandscape ? '50%' : '100%'}}>
            <View style={{width: imageWidth, height: imageHeight}}>
              <Image source={{ uri:item.image }} style={stylesProductDetail.image} width={imageWidth} height={imageHeight} resizeMode='cover' />
            </View>
          </View>
          <View style={{width: isLandscape ? '50%' : '100%'}}>
            <Text style={[stylesProductDetail.text, isUnderMinWidth ? stylesProductDetail.textMin : stylesProductDetail.textMax]}>
              {item.title}
            </Text>
            <Text style={[stylesProductDetail.text, isUnderMinWidth ? stylesProductDetail.textDescriptionMin : stylesProductDetail.textDescriptionMax]}>
              {item.description}
            </Text>
            <Text style={[stylesProductDetail.textPrice, isUnderMinWidth ? stylesProductDetail.textPriceMin : stylesProductDetail.textPriceMax]}>
              ${item.price}
            </Text>
            <View style={stylesProductDetail.buyContainer}>
              <ProductAddInput item={item} />
            </View>
          </View>
        </View>
      </View>
    </ScrollView> :
    <></>
  );
}

const stylesProductDetail = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flex: 1,
    paddingBottom: DisplaySizes.paddingBottomNavigator,
  },
  zoneBack:{
    width: '100%'
  },
  zoneInfoLandscape:{
    flexDirection: 'row',
    width: '100%',
    marginTop: 10
  },
  zoneInfoPortrait:{
    flexDirection: 'column',
    width: '100%',
  },
  text: {
    width: '100%',
    color: Colors.grayDark,
    fontFamily: 'PlayFairBold',
    textAlign: 'left'
  },
  textMin: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    fontSize: 18,
  },
  textMax: {
    padding: 10,
    fontSize: 22,
  },
  textDescriptionMin: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    fontSize: 16,
  },
  textDescriptionMax: {
    padding: 10,
    fontSize: 20,
  },
  textPrice: {
    width: '100%',
    color: Colors.grayDark,
    fontFamily: 'PlayFairBold'
  },
  textPriceMin: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    fontSize: 20,
  },
  textPriceMax: {
    padding: 10,
    fontSize: 24,
  },
  image: {
    flex: 1,
    width: '100%'
  },
  buttonBack: {
    width: '100%',
    backgroundColor: Colors.pinkAlter
  },
  buttonBackMin: {
    height: 36,
  },
  buttonBackMax: {
    height: 40,
  },
  textBack: {
    color: Colors.grayDark,
    fontFamily: 'JosefinBold',
    textAlign: 'center'
  },
  textBackMin: {
    lineHeight: 36,
    fontSize: 18,
  },
  textBackMax: {
    width: '100%',
    lineHeight: 40,
    fontSize: 22,
  },
  buyContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    width: 80,
    alignSelf: 'center'
  }
});

export default ProductDetail;