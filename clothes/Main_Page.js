import React, {useState} from 'react';
import {
  horizontalScale,
  verticalScale,
  moderateScale,
} from '../Responsive/Responsive';
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Modal,
  ScrollView,
  Image,
  FlatList,
} from 'react-native';
import LottieView from 'lottie-react-native';
import {clothe} from '../Assets/Consts/Lotties';
import {dress, pants, scarf, shirt} from '../Assets/Consts/Images';
import AntDesign from 'react-native-vector-icons/AntDesign';

function Main_Page() {
  const [modalShow, setmodalshow] = useState(false);
  const [modalShow2, setmodalshow2] = useState(false);
  const [newarrivalData, setnewarrivalData] = useState([
    {
      photo: scarf,
      text: 'plastinian Scarf',
      price: '50$',
      opened: false,
      detailstx: 'plastinian empodridry scrf finshed by magic one yes',
    },
    {
      photo: shirt,
      text: 'Shirt',
      price: '70$',
      opened: false,
      detailstx: 'plastinian empodridry scrf finshed by magic one yes',
    },
    {
      photo: pants,
      text: 'pant',
      price: '99$',
      opened: false,
      detailstx: 'plastinian empodridry scrf finshed by magic one yes',
    },
  ]);
  const [recentlyData, setresentlylData] = useState([
    {
      photo: scarf,
      text: 'plastinian Scarf',
      price: '50$',
      opened: false,
    },
    {
      photo: shirt,
      text: 'Shirt',
      price: '70$',
      opened: false,
    },
    {
      photo: pants,
      text: 'pant',
      price: '99$',
      opened: false,
    },
  ]);
  const [opendpj, setopendpj] = useState({});
  const openCatogery = index => {
    setopendpj(newarrivalData[index]);
    setmodalshow2(true);
  };
  return (
    <>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={'#e9dece'}></StatusBar>
      
        <View
          style={{
            flex: 1,
            backgroundColor: '#e9dece',
          }}>
          <View
            style={{
              flex: 1,
              backgroundColor: '#e9dece',
              margin: moderateScale(15),
            }}>
            <ScrollView>
            <View
              style={{
                width: horizontalScale(256),
              }}>
              <Text
                style={{
                  color: '#561414',
                  fontSize: moderateScale(50),
                  fontFamily: 'Vanilla Caramel',
                }}>
                Elgant Simple Clothing & handicrafts
              </Text>
            </View>
            <View>
              <LottieView
                style={{
                  width: horizontalScale(400),
                  height: verticalScale(400),
                  alignSelf: 'center',
                  // backgroundColor:"#ddd"
                }}
                source={clothe}
                autoPlay
                loop
              />
            </View>
            <View
              style={{
                height: verticalScale(90),
                // backgroundColor:"#00f",
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <View
                style={{
                  width: horizontalScale(200),
                }}>
                <Text
                  style={{
                    fontSize: moderateScale(17),
                    color: '#877f7f',
                  }}>
                  Affordaple Clothins and handicrafts made by plastinian hands
                </Text>
              </View>
              <TouchableOpacity
                onPress={() => {
                  setmodalshow(true);
                }}
                style={{
                  width: horizontalScale(90),
                  height: verticalScale(90),
                  borderRadius: moderateScale(45),
                  backgroundColor: '#561414',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    color: '#fff',
                    fontSize: 17,
                  }}>
                  Start
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
          </View>
        </View>

      <Modal
        visible={modalShow}
        onRequestClose={() => {
          setmodalshow(false);
        }}>
        <View
          style={{
            flex: 1,
            backgroundColor: '#e9dece',
          }}>
          <View
            style={{
              flex: 1,
              // backgroundColor:"#dece",
              marginHorizontal: horizontalScale(15),
            }}>
            <View
              style={{
                height: verticalScale(50),
                // backgroundColor:"#00f",
                justifyContent: 'space-between',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <AntDesign
                name="bars"
                size={moderateScale(35)}
                color={'#561414'}
              />
              <AntDesign
                name="shoppingcart"
                size={moderateScale(35)}
                color={'#561414'}
              />
            </View>
            <ScrollView>
              <View
                style={{
                  height: verticalScale(50),
                  justifyContent: 'center',
                  marginTop: verticalScale(15),
                }}>
                <Text
                  style={{
                    fontSize: moderateScale(17),
                    fontWeight: '500',
                    color: '#561414',
                  }}>
                  Hot deals
                </Text>
              </View>
              <View>
                <View
                  style={{
                    height: verticalScale(150),
                    backgroundColor: '#e2c8a0',
                    borderRadius: moderateScale(10),
                    flexDirection: 'row',
                    padding: moderateScale(10),
                  }}>
                  <View>
                    <Image
                      source={dress}
                      resizeMode="contain"
                      style={{
                        width: horizontalScale(170),
                        height: verticalScale(140),
                      }}
                    />
                  </View>
                  <View
                    style={{
                      // backgroundColor:"#d00",
                      width: horizontalScale(150),
                    }}>
                    <View
                      style={{
                        flexDirection: 'row',
                      }}>
                      <Text style={{color: '#000', fontSize: moderateScale(25)}}>D.</Text>
                      <Text style={{color: '#561414', fontSize: moderateScale(23)}}>
                        DISCOUNT UP
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                      }}>
                      <Text style={{color: '#000', fontSize: moderateScale(25)}}>I.</Text>
                      <Text style={{color: '#561414', fontSize: moderateScale(23)}}>
                        To 20 %
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                      }}>
                      <Text style={{color: '#000', fontSize: moderateScale(25)}}>Y.</Text>
                      <Text style={{color: '#561414', fontSize: moderateScale(23)}}>
                        Starting At march 19
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
              <View
                style={{
                  // backgroundColor:"#0f0",
                  height: verticalScale(80),
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    fontSize: moderateScale(17),
                    fontWeight: '500',
                    color: '#561414',
                  }}>
                  New Arrivals
                </Text>
              </View>
              <View>
                <FlatList
                  horizontal={true}
                  data={newarrivalData}
                  renderItem={({item, index}) => (
                    <>
                      <TouchableOpacity
                        onPress={() => {
                          openCatogery(index);
                        }}
                        style={{
                          width: horizontalScale(310),
                          height: verticalScale(300),
                          backgroundColor: '#f6f5f5',
                          borderRadius: moderateScale(5),
                          marginRight: moderateScale(5),
                          padding: moderateScale(10),
                        }}>
                        <View
                          style={{
                            height: verticalScale(50),
                            // backgroundColor:"#00f",
                            justifyContent: 'center',
                            alignItems: 'flex-end',
                          }}>
                          <View
                            style={{
                              height: verticalScale(40),
                              width: horizontalScale(40),
                              borderRadius: moderateScale(20),
                              backgroundColor: '#a2616155',
                              justifyContent: 'center',
                              alignItems: 'center',
                            }}>
                            <AntDesign
                              name="hearto"
                              size={moderateScale(30)}
                              color={'#561414'}
                            />
                          </View>
                        </View>
                        <View>
                          <Image
                            source={item.photo}
                            resizeMode="contain"
                            style={{
                              width: horizontalScale(150),
                              height: verticalScale(150),
                              alignSelf: 'center',
                            }}
                          />
                        </View>
                        <View
                          style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            marginTop: verticalScale(25),
                          }}>
                          <View>
                            <Text
                              style={{
                                fontSize: moderateScale(20),
                                color: '#000',
                                fontWeight: 'bold',
                              }}>
                              {' '}
                              {item.text}{' '}
                            </Text>
                            <Text
                              style={{
                                fontSize: moderateScale(16),
                                color: '#561414',
                                marginLeft: verticalScale(7),
                                fontWeight: '500',
                              }}>
                              {item.price}
                            </Text>
                          </View>
                          <TouchableOpacity>
                            <AntDesign
                              name="shoppingcart"
                              size={moderateScale(35)}
                              color={'#561414'}
                            />
                          </TouchableOpacity>
                        </View>
                      </TouchableOpacity>
                    </>
                  )}
                />
              </View>
              <View
                style={{
                  height: verticalScale(70),
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    fontSize: moderateScale(17),
                    fontWeight: '500',
                    color: '#561414',
                  }}>
                  Recently Viewed
                </Text>
              </View>
              <View
              style={{
                marginBottom:verticalScale(20)
              }}
              >
                <FlatList
                  data={recentlyData}
                  horizontal={true}
                  renderItem={({item, index}) => (
                    <>
                      <View
                        style={{
                          height: verticalScale(70),
                          backgroundColor: '#fff',
                          marginRight: horizontalScale(5),
                          borderRadius: moderateScale(5),
                          padding: moderateScale(10),
                          justifyContent: 'center',
                          width:horizontalScale(310)
                        }}>
                        <View
                          style={{
                            flexDirection: 'row',
                            // justifyContent:"space-between"
                          }}>
                          <Image
                            source={item.photo}
                            resizeMode="contain"
                            style={{
                              height: verticalScale(50),
                              width: horizontalScale(50),
                              marginRight: horizontalScale(40),
                            }}
                          />
                          <Text
                            style={{
                              fontSize: moderateScale(20),
                              color: '#000',
                            }}>
                            go for it now !!!!
                          </Text>
                        </View>
                      </View>
                    </>
                  )}
                />
              </View>
            </ScrollView>
          </View>
        </View>
      </Modal>

      <Modal
        visible={modalShow2}
        onRequestClose={() => {
          setmodalshow2(false);
        }}>
        <View
          style={{
            flex: 1,
            backgroundColor: '#e9dece',
          }}>
          <View
            style={{
              flex: 1,
              backgroundColor: '#e9dece',
              margin: moderateScale(15),
            }}>
            <View
              style={{
                height: verticalScale(50),
              }}>
              <TouchableOpacity
                onPress={() => {
                  setmodalshow2(false);
                }}>
                <AntDesign
                  name="arrowleft"
                  size={moderateScale(30)}
                  color={'#561414'}
                />
              </TouchableOpacity>
            </View>
            <View
              style={{
                width: horizontalScale(190),
              }}>
              <Text
                style={{
                  fontSize: moderateScale(25),
                  fontWeight: '500',
                  color: '#561414',
                }}>
                {opendpj.text}
              </Text>
            </View>
            <View
              style={{
                height: verticalScale(400),
                justifyContent: 'center',
                alignItems: 'center',
                // backgroundColor: '#ffd',
              }}>
              <Image
                source={opendpj.photo}
                resizeMode="contain"
                style={{
                  width: horizontalScale(300),
                  height: verticalScale(350),
                }}
              />
            </View>
            <View>
              <Text
                style={{
                  fontSize: moderateScale(22),
                  // fontWeight:"500",
                  color: '#000',
                }}>
                {opendpj.detailstx}
              </Text>
            </View>

            <View
              style={{
                height: verticalScale(95),
                backgroundColor: '#ffffff5d',
                marginTop: verticalScale(90),
                borderRadius: moderateScale(20),
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <AntDesign
                  name="shoppingcart"
                  size={moderateScale(35)}
                  color={'#561414'}
                />
                <Text
                  style={{
                    fontSize: moderateScale(20),
                    fontWeight: '500',
                    color: '#561414',
                    marginLeft: horizontalScale(20),
                  }}>
                  {opendpj.price}
                </Text>
              </View>
              <TouchableOpacity
                onPress={() => {
                  setmodalshow(true);
                }}
                style={{
                  width: horizontalScale(90),
                  height: verticalScale(90),
                  borderRadius: moderateScale(45),
                  backgroundColor: '#561414',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    color: '#fff',
                    fontSize: 17,
                  }}>
                  Buy
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
}

export default Main_Page;
