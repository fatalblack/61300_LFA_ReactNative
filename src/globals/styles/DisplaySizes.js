import { useWindowDimensions } from 'react-native';
import { useState, useEffect } from 'react';

export const DisplaySizes = {
    minWidth: 321,
    paddingBottomNavigator: 100,
    paddingBottomNavigatorLandscape: 60
};

export const IsUnderMinWidth = () => {
    const { height, width } = useWindowDimensions();
    const [isUnderMinWidth, setIsUnderMinWidth] = useState(false);

    useEffect(() => {
      setIsUnderMinWidth(width < DisplaySizes.minWidth);
    }, [height, width]);
    
    return isUnderMinWidth;
}

export const IsLandscape = () => {
  const { height, width } = useWindowDimensions();
  const [isLandscape, setIsLandscape] = useState(false);

  useEffect(() => {
    setIsLandscape(width > height);
  }, [height, width]);
  
  return isLandscape;
}