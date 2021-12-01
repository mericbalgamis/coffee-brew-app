import * as React from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import colors from '../assets/colors/colors';
import scan from '../assets/images/scan.png';
import {getData} from '../redux/actions';
import {useSelector, useDispatch} from 'react-redux';
import {useEffect} from 'react';

export default Scan = ({navigation}) => {
  const {data} = useSelector(state => state.userReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData());
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.titlesWrapper}>
        <Text style={styles.title1}>Dark Roasted Beans</Text>
        <Text style={styles.title2}>Tab the machine to start</Text>
      </View>

      <TouchableOpacity onPress={() => navigation.navigate('Style')}>
        <View style={styles.imageWrapper}>
          <Image source={scan} style={styles.scanImage} />
        </View>
      </TouchableOpacity>

      <Text style={styles.helpText}>How does this work?</Text>
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
    //position: 'absolute',
    fontWeight: '500',
    fontFamily: 'Mulish-Medium',
    fontSize: 24,
    color: colors.black,
    marginLeft: 16,
    marginRight: 16,
    marginBottom: 16,
    marginTop: 4,
  },
  imageWrapper: {
    width: 375,
    height: 410,
    left: 0,
    top: 145,
  },
  helpText: {
    fontFamily: 'Mulish-Medium',
    fontSize: 16,
    color: colors.black,
    height: 22,
    marginLeft: 24,
    marginRight: 102,
    marginTop: 150,
    textDecorationLine: 'underline',
  },
});
