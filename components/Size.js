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
import small from '../assets/images/small.png';
import medium from '../assets/images/medium.png';
import large from '../assets/images/large.png';
import {useSelector, useDispatch} from 'react-redux';
import {setSize} from '../redux/actions';

export default Size = ({navigation}) => {
  const {data} = useSelector(state => state.userReducer);
  const dispatch = useDispatch();

  const renderSizeItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          dispatch(setSize(item.name));
          navigation.navigate('Extra');
        }}>
        <View style={styles.sizeItemWrapper}>
          <Image style={styles.sizeItemImage} source={large} />
          <Text style={styles.sizeItemTitle}>{item.name}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.titlesWrapper}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Style');
          }}>
          <Text style={styles.title1}> {'<  '} Brew with Lex</Text>
        </TouchableOpacity>
        <Text style={styles.title2}>Select your size</Text>
      </View>

      <View style={styles.sizeWrapper}>
        <FlatList
          data={data.sizes}
          renderItem={renderSizeItem}
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
  sizeWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: 0,
    position: 'absolute',
    width: 420,
    height: 604,
    paddingLeft: 30,
    paddingTop: 100,
  },
  sizeItemWrapper: {
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
  sizeItemTitle: {
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
  sizeItemImage: {
    position: 'absolute',
    width: 46,
    height: 46,
    left: 24,
    top: 24,
    right: 1,
  },
});
