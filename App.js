import React from 'react';
import {ScrollView, StyleSheet,  Text, View, Image, ImageBackground} from 'react-native';
import {Element3, Receipt21, Clock, Message} from 'iconsax-react-native';
import { fontType, colors } from './src/theme';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>DiCo</Text>
        <Element3 color={colors.black()} variant="Linear" size={24} />
      </View>
      <View style={styles.listCategory}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={{...category.item, marginLeft: 24}}>
            <Text style={{...category.title, color: colors.blue()}}>
              Popular
            </Text>
          </View>
          <View style={category.item}>
            <Text style={category.title}>Sepak Bola</Text>
          </View>
          <View style={category.item}>
            <Text style={category.title}>Bulu Tangkis</Text>
          </View>
          <View style={category.item}>
            <Text style={category.title}>Lari</Text>
          </View>
          <View style={category.item}>
            <Text style={category.title}>Fitness</Text>
          </View>
          <View style={{...category.item, marginRight: 24}}>
            <Text style={category.title}>Lainnya</Text>
          </View>
        </ScrollView>
      </View>
      <ListBlog />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white(),
  },
  header: {
    paddingHorizontal: 24,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    height:52,
    elevation: 8,
    paddingTop:8,
    paddingBottom:4
  },
  title: {
    fontSize: 20,
    fontFamily: fontType['Pjs-ExtraBold'],
    color: colors.black(),
  },
  listCategory: {
    paddingVertical: 10,
  },
  listBlog: {
    paddingVertical: 10,
    gap: 10,
  },
});
const category = StyleSheet.create({
  item: {
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 25,
    alignItems: 'center',
    backgroundColor: colors.grey(0.08),
    marginHorizontal:5
  },
  title: {
    fontFamily: fontType['Pjs-SemiBold'],
    fontSize: 14,
    lineHeight: 18,
    color: colors.grey(),
  },
});
const ListBlog = () => {
  return (
    <ScrollView>
      <View style={styles.listBlog}>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          horizontal
          contentContainerStyle={{gap: 15}}>
          <View style={{...itemHorizontal.cardItem, marginLeft: 24}}>
            <ImageBackground
              style={itemHorizontal.cardImage}
              resizeMode="cover"
              imageStyle={{borderRadius: 15}}
              source={{
                uri: 'https://media.istockphoto.com/id/597959750/id/foto/ruang-kebugaran-di-pagi-hari.webp?b=1&s=612x612&w=0&k=20&c=pXldvfGy8JZFezlkfmC2oiZVbw2p9XeTBANeb428Ns8=',
              }}>
              <View style={itemHorizontal.cardContent}>
                <View style={itemHorizontal.cardInfo}>
                  <Text style={itemHorizontal.cardTitle}>
                    Hanya dengan berberapa menit
                  </Text>
                </View>
                <View>
                  <View style={itemHorizontal.cardIcon}>
                    <Receipt21 color={colors.white()} variant="Linear" size={20} />
                  </View>
                </View>
              </View>
            </ImageBackground>
          </View>
          <View style={itemHorizontal.cardItem}>
            <ImageBackground
              style={itemHorizontal.cardImage}
              resizeMode="cover"
              imageStyle={{borderRadius: 15}}
              source={{
                uri: 'https://media.istockphoto.com/id/1188298217/id/foto/latar-belakang-interior-ruangan-di-gym-atau-pusat-kebugaran-sepenuhnya-melengkapi-peralatan.webp?b=1&s=612x612&w=0&k=20&c=UaqDmzjH9X4P_vEkGYsoof9sN6k3oYw7HIIjyWim_fs=',
              }}>
              <View style={itemHorizontal.cardContent}>
                <View style={itemHorizontal.cardInfo}>
                  <Text style={itemHorizontal.cardTitle}>
                    Olahraga mampu membuatmu tumbuh lebih baik
                  </Text>
                </View>
                <View>
                  <View style={itemHorizontal.cardIcon}>
                    <Receipt21 color={colors.white()} variant="Linear" size={20} />
                  </View>
                </View>
              </View>
            </ImageBackground>
          </View>
          <View style={itemHorizontal.cardItem}>
            <ImageBackground
              style={itemHorizontal.cardImage}
              resizeMode="cover"
              imageStyle={{borderRadius: 15}}
              source={{
                uri: 'https://cdn.pixabay.com/photo/2013/07/13/13/34/football-161132_1280.png',
              }}>
              <View style={itemHorizontal.cardContent}>
                <View style={itemHorizontal.cardInfo}>
                  <Text style={itemHorizontal.cardTitle}>
                    Latihan dan terus latihan
                  </Text>
                </View>
                <View>
                  <View style={itemHorizontal.cardIcon}>
                    <Receipt21 color={colors.white()} variant="Linear" size={20} />
                  </View>
                </View>
              </View>
            </ImageBackground>
          </View>
          <View style={itemHorizontal.cardItem}>
            <ImageBackground
              style={itemHorizontal.cardImage}
              resizeMode="cover"
              imageStyle={{borderRadius: 15}}
              source={{
                uri: 'https://images.unsplash.com/photo-1577048982768-5cb3e7ddfa23?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1738&q=80',
              }}>
              <View style={itemHorizontal.cardContent}>
                <View style={itemHorizontal.cardInfo}>
                  <Text style={itemHorizontal.cardTitle}>
                    Baking 101: Mastering the Art of Baking
                  </Text>
                  <Text style={itemHorizontal.cardText}>Nov 10, 2023</Text>
                </View>
                <View>
                  <View style={itemHorizontal.cardIcon}>
                    <Receipt21 color={colors.white()} variant="Linear" size={20} />
                  </View>
                </View>
              </View>
            </ImageBackground>
          </View>
          <View style={{...itemHorizontal.cardItem, marginRight: 24}}>
            <ImageBackground
              style={itemHorizontal.cardImage}
              resizeMode="cover"
              imageStyle={{borderRadius: 15}}
              source={{
                uri: 'https://images.unsplash.com/photo-1603048588665-791ca8aea617?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1520&q=80',
              }}>
              <View style={itemHorizontal.cardContent}>
                <View style={itemHorizontal.cardInfo}>
                  <Text style={itemHorizontal.cardTitle}>
                    Rediscovering Vinyl: The Resurgence of Analog
                  </Text>

                </View>
                <View>
                  <View style={itemHorizontal.cardIcon}>
                    <Receipt21 color={colors.white()} variant="Linear" size={20} />
                  </View>
                </View>
              </View>
            </ImageBackground>
          </View>
        </ScrollView>
        <View style={itemVertical.listCard}>
          <View style={itemVertical.cardItem}>
            <Image
              style={itemVertical.cardImage}
              source={{
                uri: 'https://cdn.pixabay.com/photo/2017/01/31/15/31/tennis-2025095_1280.png',
              }}
            />
            <View style={itemVertical.cardContent}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <View style={{gap: 5, width: '70%'}}>
                  <Text style={itemVertical.cardCategory}>BaseBall</Text>
                </View>
                <Receipt21
                  color={colors.grey(0.6)}
                  variant="Linear"
                  size={20}
                />
              </View>
              <View style={itemVertical.cardInfo}>
                <Clock
                  size={10}
                  variant="Linear"
                  color={colors.grey(0.6)}
                />
                <Message
                  size={10}
                  variant="Linear"
                  color={colors.grey(0.6)}
                />
              </View>
            </View>
          </View>
          <View style={itemVertical.cardItem}>
            <Image
              style={itemVertical.cardImage}
              source={{
                uri: 'https://cdn.pixabay.com/photo/2013/07/13/13/34/football-161132_1280.png',
              }}
            />
            <View style={itemVertical.cardContent}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <View style={{gap: 5, width: '70%'}}>
                  <Text style={itemVertical.cardCategory}>Sepak Bola</Text>
                </View>
                <Receipt21
                  color={colors.grey(0.6)}
                  variant="Linear"
                  size={20}
                />
              </View>
              <View style={itemVertical.cardInfo}>
                <Clock
                  size={10}
                  variant="Linear"
                  color={colors.grey(0.6)}
                />
                <Message
                  size={10}
                  variant="Linear"
                  color={colors.grey(0.6)}
                />
              </View>
            </View>
          </View>
          <View style={itemVertical.cardItem}>
            <Image
              style={itemVertical.cardImage}
              source={{
                uri: 'https://cdn.pixabay.com/photo/2014/04/03/11/36/ping-pong-311935_1280.png',
              }}
            />
            <View style={itemVertical.cardContent}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <View style={{gap: 5, width: '70%'}}>
                  <Text style={itemVertical.cardCategory}>Ping pong</Text>
                 
                </View>
                <Receipt21
                  color={colors.grey(0.6)}
                  variant="Linear"
                  size={20}
                />
              </View>
              <View style={itemVertical.cardInfo}>
                <Clock
                  size={10}
                  variant="Linear"
                  color={colors.grey(0.6)}
                />
                <Message
                  size={10}
                  variant="Linear"
                  color={colors.grey(0.6)}
                />
              </View>
            </View>
          </View>
          <View style={itemVertical.cardItem}>
            <Image
              style={itemVertical.cardImage}
              source={{
                uri: 'https://cdn.pixabay.com/photo/2019/06/10/15/11/basketball-4264543_1280.png',
              }}
            />
             <View style={{gap: 5, width: '70%'}}>
                  <Text style={itemVertical.cardCategory}>Basket</Text>
                 
              </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
const itemVertical = StyleSheet.create({
  listCard: {
    paddingHorizontal: 24,
    paddingVertical: 10,
    gap: 15,
  },
  cardItem: {
    backgroundColor: colors.blue(0.03),
    flexDirection: 'row',
    borderRadius: 10,
  },
  cardCategory: {
    color: colors.blue(),
    fontSize: 10,
    fontFamily: fontType['Pjs-SemiBold'],
  },
  cardTitle: {
    fontSize: 14,
    fontFamily: fontType['Pjs-Bold'],
    color: colors.black(),
  },
  cardText: {
    fontSize: 10,
    fontFamily: fontType['Pjs-Medium'],
    color: colors.blue(0.6),
  },
  cardImage: {
    width: 94,
    height: 94,
    borderRadius: 10,
    resizeMode: 'cover',
  },
  cardInfo: {
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
  },
  cardContent: {
    gap: 10,
    justifyContent: 'space-between',
    paddingRight: 10,
    paddingLeft: 15,
    flex: 1,
    paddingVertical: 10,
  },
});
const itemHorizontal = StyleSheet.create({
  cardItem: {
    width: 280,
  },
  cardImage: {
    width: '100%',
    height: 200,
    borderRadius: 5,
  },
  cardContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
  },
  cardInfo: {
    justifyContent: 'flex-end',
    height: '100%',
    gap: 10,
    maxWidth: '60%',
  },
  cardTitle: {
    fontFamily: fontType['Pjs-Bold'],
    fontSize: 14,
    color: colors.white(),
  },
  cardText: {
    fontSize: 10,
    color: colors.white(),
    fontFamily: fontType['Pjs-Medium'],
  },
  cardIcon: {
    backgroundColor: colors.white(0.33),
    padding: 5,
    borderColor: colors.white(),
    borderWidth: 0.5,
    borderRadius: 5,
  },
});
