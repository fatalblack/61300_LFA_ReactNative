import { StyleSheet, Pressable, View, Text } from 'react-native';
import { Colors } from '../../globals/styles/Colors';
import { IsUnderMinWidth } from '../../globals/styles/DisplaySizes';

function AddButton({title, onPress}) {
  const isUnderMinWidth = IsUnderMinWidth();

  return (
    <View style={stylesAddButton.container}>
      <Pressable onPress={onPress} style={stylesAddButton.submitButton}>
        <Text style={[stylesAddButton.submitText, isUnderMinWidth ? stylesAddButton.submitTextMin : stylesAddButton.submitTextMax]}>
          {title}
        </Text>
      </Pressable>
    </View>
  );
}

const stylesAddButton = StyleSheet.create({
  container: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    paddingHorizontal: 10
  },
  submitButton: {
    height: 40,
    width: '100%',
    alignSelf: 'flex-start',
    padding: 5,
    margin: 10,
    borderRadius: 3,
    backgroundColor: Colors.grayDark
  },
  submitText: {
    color: Colors.white,
    textAlign: 'center',
  },
  submitTextMin: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  submitTextMax: {
    fontWeight: '600',
    fontSize: 22,
  },
});

export default AddButton;