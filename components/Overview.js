import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  SectionList,
  ScrollView,
} from 'react-native';
import colors from '../assets/colors/colors';
import {SafeAreaView} from 'react-native-safe-area-context';
import back from '../assets/images/back.png';
import milkImage from '../assets/images/milk.png';
import medium from '../assets/images/medium.png';
import cappuccino from '../assets/images/cappuccino.png';
import add from '../assets/images/add.png';

import {useSelector, useDispatch} from 'react-redux';
import {deleteExtras, setExtras} from '../redux/actions';

export default Overview = ({navigation}) => {
  const {data, style, size, milk, sugar} = useSelector(
    state => state.userReducer,
  );
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <View>{console.log(style, size, milk, sugar)}</View>
      <View style={styles.titlesWrapper}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Extra');
          }}>
          <Text style={styles.title1}> {'<  '} Brew with Lex</Text>
        </TouchableOpacity>
        <Text style={styles.title2}>Overview</Text>
      </View>

      <ScrollView
        style={styles.overviewWrapper}
        contentContainerStyle={styles.scrollViewContainer}>
        <View style={styles.styleWrapper}>
          <Image style={styles.styleImage} source={cappuccino} />
          <Text style={styles.styleTitle}>{style}</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Style');
            }}>
            <Text style={styles.styleEditText}>Edit</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.line1}></View>

        <View style={styles.sizeWrapper}>
          <Image style={styles.sizeImage} source={medium} />
          <Text style={styles.sizeTitle}>{size}</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Size');
            }}>
            <Text style={styles.sizeEditText}>Edit</Text>
          </TouchableOpacity>
        </View>

        {milk != '' && <View style={styles.line1}></View>}

        {milk != '' && (
          <View style={styles.extraWrapper}>
            <Image style={styles.extraImage} source={milkImage} />
            <Text style={styles.extraTitle}>{'Milk'}</Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Extra');
              }}>
              <Text style={styles.extraEditText}>Edit</Text>
            </TouchableOpacity>

            <View style={styles.line1}></View>

            <View style={styles.extraDetailWrapper}>
              <Text style={styles.extraDetailText}>{milk}</Text>
              <Image style={styles.extraDetailImage} source={add} />
            </View>
          </View>
        )}

        {sugar != '' && <View style={styles.line1}></View>}

        {sugar != '' && (
          <View style={styles.extraWrapper}>
            <Image style={styles.extraImage} source={cappuccino} />
            <Text style={styles.extraTitle}>{'Sugar'}</Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Extra');
              }}>
              <Text style={styles.extraEditText}>Edit</Text>
            </TouchableOpacity>

            <View style={styles.line1}></View>

            <View style={styles.extraDetailWrapper}>
              <Text style={styles.extraDetailText}>{sugar}</Text>
              <Image style={styles.extraDetailImage} source={add} />
            </View>
          </View>
        )}
      </ScrollView>

      <View style={styles.submitButtonWrapper}>
        <Text style={styles.submitButtonText}>Brew your coffee</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scrollViewContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.buttonBackground,
    paddingBottom: 100,
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
  overviewWrapper: {
    display: 'flex',
    position: 'absolute',
    flexDirection: 'column',
    //alignItems: 'center',
    padding: 10,
    backgroundColor: colors.buttonBackground,
    width: 343,
    height: 420,
    marginLeft: 30,
    marginTop: 100,
    borderRadius: 4,
    flex: 1,
  },
  styleWrapper: {
    position: 'static',
    flex: 0,
    width: 343,
    height: 0,
    left: 0,
    order: 0,
    top: 24,
    flexGrow: 0,
    //marginBottom: 20,
  },
  styleImage: {
    position: 'absolute',
    width: 46,
    height: 46,
    left: 24,
    marginTop: 0,
  },
  styleTitle: {
    position: 'absolute',
    width: 229,
    height: 46,
    left: 90,
    top: 15,
    fontWeight: '600',
    display: 'flex',
    alignItems: 'center',
    fontFamily: 'Mulish-SemiBold',
    fontSize: 14,
    color: colors.background,
  },
  styleEditText: {
    position: 'absolute',
    width: 22,
    height: 16,
    right: 24,
    fontFamily: 'Mulish-Medium',
    color: colors.background,
    fontSize: 12,
    lineHeight: 16,
    textAlign: 'right',
    top: 15,
  },
  sizeWrapper: {
    position: 'static',
    flex: 0,
    width: 295,
    height: 50,
    left: 0,
    order: 2,
    top: 75,
    flexGrow: 0,
  },
  sizeImage: {
    position: 'absolute',
    width: 46,
    height: 46,
    left: 0,
  },
  sizeTitle: {
    position: 'absolute',
    width: 229,
    height: 46,
    left: 70,
    top: 15,
    fontFamily: 'Mulish-SemiBold',
    fontSize: 14,
    alignItems: 'center',
    fontWeight: '600',
    display: 'flex',
    color: colors.background,
  },
  sizeEditText: {
    position: 'absolute',
    width: 22,
    height: 16,
    right: 0,
    fontFamily: 'Mulish-Medium',
    color: colors.background,
    fontSize: 12,
    lineHeight: 16,
    textAlign: 'right',
    top: 15,
  },
  extraWrapper: {
    position: 'static',
    width: 295,
    height: 143,
    left: 0,
    top: 50,
    flex: 0,
    order: 4,
    flexGrow: 0,
  },
  extraImage: {
    position: 'absolute',
    width: 46,
    height: 46,
    left: 0,
    top: 20,
  },
  extraTitle: {
    position: 'absolute',
    width: 70,
    height: 19,
    left: 66,
    top: 40,
    fontFamily: 'Mulish-SemiBold',
    fontSize: 14,
    alignItems: 'center',
    fontWeight: '600',
    color: colors.background,
  },
  extraEditText: {
    position: 'absolute',
    width: 22,
    height: 16,
    right: 0,
    fontFamily: 'Mulish-Medium',
    color: colors.background,
    fontSize: 12,
    lineHeight: 16,
    textAlign: 'right',
    top: 40,
  },
  extraDetailWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    position: 'static',
    width: 285,
    height: 56,
    top: 80,
    backgroundColor: colors.extra,
    borderRadius: 8,
    flex: 0,
    order: 2,
    flexGrow: 0,
  },
  extraDetailImage: {
    position: 'absolute',
    width: 24,
    height: 24,
    left: 255,
    top: 16,
  },
  extraDetailText: {
    width: 215,
    height: 19,
    left: 16,
    top: 0,
    fontWeight: '600',
    fontSize: 14,
    fontFamily: 'Mulish-Medium',
    color: colors.background,
    flex: 0,
    flexGrow: 1,
  },
  extra2Wrapper: {
    position: 'static',
    width: 295,
    height: 46,
    left: 0,
    top: 100,
    flex: 0,
    order: 6,
    flexGrow: 0,
    top: 70,
  },
  extra2Image: {
    position: 'absolute',
    width: 46,
    height: 46,
    left: 0,
    top: 5,
  },
  extra2Title: {
    position: 'absolute',
    width: 70,
    height: 19,
    left: 66,
    top: 15,
    fontFamily: 'Mulish-SemiBold',
    fontSize: 14,
    alignItems: 'center',
    fontWeight: '600',
    color: colors.background,
  },
  extra2EditText: {
    position: 'absolute',
    width: 22,
    height: 16,
    right: 0,
    fontFamily: 'Mulish-Medium',
    color: colors.background,
    fontSize: 12,
    lineHeight: 16,
    textAlign: 'right',
    top: 15,
  },
  submitButtonWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 24,
    position: 'absolute',
    width: 343,
    height: 94,
    marginLeft: 30,
    backgroundColor: colors.buttonBackground,
    borderRadius: 4,
    bottom: 10,
  },
  submitButtonText: {
    width: 295,
    height: 46,
    marginLeft: 24,
    marginTop: 24,
    fontWeight: '600',
    display: 'flex',
    alignItems: 'center',
    fontFamily: 'Mulish-Bold',
    fontSize: 18,
    color: colors.background,
    flex: 0,
    flexGrow: 1,
  },
  line1: {
    position: 'static',
    width: 280,
    height: 0,
    left: 0,
    marginLeft: 0,
    top: 80,
    borderTopColor: colors.background,
    borderTopWidth: 1,
    flex: 0,
    order: 1,
    flexGrow: 0,
    marginBottom: 20,
  },
});
