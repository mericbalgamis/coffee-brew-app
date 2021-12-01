import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  SectionList,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import colors from '../assets/colors/colors';
import milkImage from '../assets/images/milk.png';
import sugarImage from '../assets/images/sugar.png';
import add from '../assets/images/add.png';
import remove from '../assets/images/remove.png';
import back from '../assets/images/back.png';

import {useSelector, useDispatch} from 'react-redux';
import {setMilk, setSugar, removeMilk, removeSugar} from '../redux/actions';

export default Extra = ({navigation}) => {
  const {data, style, size, milk, sugar} = useSelector(
    state => state.userReducer,
  );
  const sugarId = data.extras[1]._id;
  const dispatch = useDispatch();
  //console.log(data);

  const renderExtraItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          console.log('milk:' + milk + ',sugar:' + sugar);
          //console.log(data.extras.subselections);

          if (item.name == 'A lot' || item.name == 'Normal') {
            //console.log('sugar');
            if (sugar == item.name) {
              dispatch(setSugar(''));
            } else {
              dispatch(setSugar(item.name));
            }
          } else {
            //console.log('milk');
            if (milk == item.name) {
              dispatch(setMilk(''));
            } else {
              dispatch(setMilk(item.name));
            }
          }

          navigation.navigate('Overview');
        }}>
        <View style={styles.extraItemDetailWrapper}>
          <Text style={styles.extraItemDetailTitle}>{item.name}</Text>
          <Image
            style={styles.extraItemDetailImage}
            source={sugar == item.name || milk == item.name ? add : remove}
          />
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.titlesWrapper}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Size');
          }}>
          <Text style={styles.title1}> {'<  '} Brew with Lex</Text>
        </TouchableOpacity>
        <Text style={styles.title2}>Select your extra's</Text>
      </View>

      <View style={styles.extraWrapper}>
        <FlatList
          data={data.extras}
          renderItem={({item}) => (
            <View style={styles.extraItemWrapper}>
              <Image style={styles.extraItemImage} source={milkImage} />
              <View style={styles.line}></View>
              <Text style={styles.extraItemTitle}>{item.name}</Text>
              <FlatList
                data={item.subselections}
                renderItem={renderExtraItem}
                keyExtractor={item => item._id}
              />
            </View>
          )}
          keyExtractor={item => item._id}
        />
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
  extraWrapper: {
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
  extraItemWrapper: {
    display: 'flex',
    position: 'static',
    flex: 0,
    flexDirection: 'column',
    alignItems: 'flex-start',
    backgroundColor: colors.buttonBackground,
    padding: 24,
    borderRadius: 4,
    width: 343,
    height: 319,
    left: 0,
    top: 0,
    flexGrow: 0,
    marginBottom: 8,
  },
  extraItemDetailWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    backgroundColor: colors.extra,
    borderRadius: 8,
    padding: 16,
    width: 285,
    height: 56,
    left: 0,
    marginTop: 4,
    margin: 4,
  },
  extraItemTitle: {
    width: 200,
    height: 65,
    marginLeft: 60,
    marginTop: 13,
    fontWeight: '600',
    display: 'flex',
    alignItems: 'center',
    fontFamily: 'Mulish-SemiBold',
    fontSize: 14,
    color: colors.background,
  },
  extraItemDetailTitle: {
    color: colors.background,
  },
  extraItemImage: {
    position: 'absolute',
    width: 46,
    height: 46,
    left: 24,
    top: 24,
    right: 1,
  },
  extraItemDetailImage: {
    position: 'absolute',
    width: 24,
    height: 24,
    right: 8,
    top: 15,
  },
  line: {
    position: 'relative',
    alignSelf: 'center',
    width: 280,
    height: 0,
    marginLeft: 0,
    top: 71,
    borderTopColor: colors.background,
    borderTopWidth: 1,
  },
  backButton: {
    marginLeft: 33.33,
    marginRight: 33.33,
    marginTop: 20.83,
    marginBottom: 20.83,
    order: 0,
    flexGrow: 0,
  },
  backButtonWrapper: {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: 0,
    width: 344,
    height: 24,
    marginLeft: 17,
    marginTop: 54,
  },
});
