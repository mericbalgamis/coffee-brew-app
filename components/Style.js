import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import colors from '../assets/colors/colors';
import cappuccino from '../assets/images/cappuccino.png';
import espresso from '../assets/images/espresso.png';
import imageData from '../assets/data/styleData';
import {useSelector, useDispatch} from 'react-redux';
import {setStyle} from '../redux/actions';

export default Style = ({navigation}) => {
  const {style, data} = useSelector(state => state.userReducer);
  const dispatch = useDispatch();

  const renderStyleItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          dispatch(setStyle(item.name));
          navigation.navigate('Size');
        }}>
        <View style={styles.styleItemWrapper}>
          <Image
            style={styles.styleItemImage}
            //source={item.image ? item.image : null}
            //source={require('../images/' + item.name)}
            source={imageData.cappuccino.image}
          />
          <Text style={styles.styleItemTitle}>{item.name}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const pickImage = name => {
    imageData.map(image => {
      if (image.name == name) {
        console.log(name + ' ' + image.name);
        console.log(image.image);
        return image.image;
      } else {
        return '';
      }
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.titlesWrapper}>
        <Text style={styles.title1}>Brew with Lex</Text>
        <Text style={styles.title2}>Select your style</Text>
      </View>

      <View style={styles.styleWrapper}>
        <FlatList
          data={data.types}
          renderItem={renderStyleItem}
          keyExtractor={item => item._id}></FlatList>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  titlesWrapper: {
    flexDirection: 'column',
    position: 'absolute',
    width: 375,
    height: 131,
    left: 0,
    right: 0,
  },
  title1: {
    fontWeight: '600',
    display: 'flex',
    alignItems: 'center',
    fontFamily: 'Mulish-Bold',
    fontSize: 16,
    color: colors.black,
    marginLeft: 17,
    marginRight: 14,
    marginTop: 22,
  },
  title2: {
    fontWeight: '500',
    fontFamily: 'Mulish-Medium',
    fontSize: 24,
    color: colors.black,
    marginLeft: 16,
    marginRight: 16,
    marginBottom: 16,
    marginTop: 4,
  },
  styleWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: 0,
    position: 'absolute',
    width: 420,
    height: 604,
    paddingLeft: 35,
    paddingTop: 100,
  },
  styleItemWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 24,
    backgroundColor: colors.buttonBackground,
    borderRadius: 4,
    width: 343,
    height: 94,
    marginBottom: 8,
  },
  styleItemTitle: {
    width: 200,
    height: 65,
    left: 60,
    top: 24,
    fontWeight: '600',
    display: 'flex',
    alignItems: 'center',
    fontFamily: 'Mulish-SemiBold',
    fontSize: 14,
    color: colors.background,
  },
  styleItemImage: {
    position: 'absolute',
    width: 46,
    height: 46,
    left: 24,
    top: 24,
    right: 1,
  },
});
