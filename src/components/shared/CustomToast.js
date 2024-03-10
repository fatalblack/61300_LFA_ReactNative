import { StyleSheet } from 'react-native';
import Toast, { BaseToast, ErrorToast } from 'react-native-toast-message';
import { Colors } from '../../globals/styles/Colors';

function CustomToast(){
  const toastConfig = {
    success: (props) => (
      <BaseToast
        {...props}
        style={[stylesCustomToast.container, stylesCustomToast.containerSuccess]}
        text1Style={stylesCustomToast.text1}
        text2Style={stylesCustomToast.text2}
      />
    ),
    info: (props) => (
      <BaseToast
        {...props}
        style={[stylesCustomToast.container, stylesCustomToast.containerInfo]}
        text1Style={stylesCustomToast.text1}
        text2Style={stylesCustomToast.text2}
      />
    ),
    error: (props) => (
      <ErrorToast
        {...props}
        style={[stylesCustomToast.container, stylesCustomToast.containerError]}
        text1Style={stylesCustomToast.text1}
        text2Style={stylesCustomToast.text2}
      />
    )
  };
  
  return (<Toast config={toastConfig} />);
}

const stylesCustomToast = StyleSheet.create({
  container: {
    borderLeftWidth: 3,
    width: '100%',
    height: '100%',
    paddingVertical: 5
  },
  containerSuccess: {
    borderLeftColor: Colors.greenToast,
  },
  containerError: {
    borderLeftColor: Colors.redToast,
  },
  containerInfo: {
    borderLeftColor: Colors.blueToast,
  },
  text1: {
    fontSize: 14
  },
  text2: {
    fontSize: 12
  },
});

export default CustomToast;