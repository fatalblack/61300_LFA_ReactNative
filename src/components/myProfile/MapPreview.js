import { Image, StyleSheet, View } from 'react-native';
import React from 'react';
import { googleAPI } from '../../firebase/googleAPI';
import { IsLandscape } from '../../globals/styles/DisplaySizes';

const MapPreview = ({location}) => {
  const mapPreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${location.latitude},${location.longitude}&zoom=13&size=600x300&maptype=roadmap
&markers=color:red%7Clabel:%7C${location.latitude},${location.longitude}&key=${googleAPI.mapStatic}`;

  const isLandscape = IsLandscape();

  return(
    <View style={stylesMapPreview.mapPreview}>
      <Image source={{ uri: mapPreviewUrl }} style={isLandscape ? stylesMapPreview.mapImageLandscape : stylesMapPreview.mapImage} />
    </View>
  );
};

const stylesMapPreview = StyleSheet.create({
  mapPreview: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  mapImage: {
    width: 300,
    height: 300
  },
  mapImageLandscape: {
    width: 350,
    height: 350
  }
});

export default MapPreview;