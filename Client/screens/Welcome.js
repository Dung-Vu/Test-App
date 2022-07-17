import React from 'react';
import { Text, View, Image, ImageBackground, StyleSheet, } from 'react-native';
import { Header } from 'react-native/Libraries/NewAppScreen';
import { icons, images } from '../constants';

function Welcome(props) {
    const styles = StyleSheet.create({
        titleHeader: { fontSize: 32, fontWeight: 'bold', color: 'white' },
        styleIcon: {
            width: 84,
            height: 84,
            backgroundColor: '#3CBAF0',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 10,
            marginRight: 10,
        },
        sizeIcon: { width: 26, height: 30, },
        styleIconBottom: {
            width: 80,
            alignItems: 'center',
            justifyContent: 'center',
            marginRight:30,
        },
        sizeIconBottom: { width: 28, height:28, },
    });
    return (
        <View style={{ flex: 1 }}>
            <View
                style={{
                    height: '50%',
                    backgroundColor: '#3CBAF0',
                    borderBottomRightRadius: 60,
                }}>
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        // justifyContent: "flex-start",
                        marginTop: 17,
                    }}>
                    <Text
                        style={{
                            color: 'white',
                            left: 27,
                        }}>
                        Hi,
                    </Text>
                    <Text
                        style={{
                            color: 'white',
                            fontWeight: 'bold',
                            top: 30,
                        }}>
                        Saepul Nahwan
                    </Text>
                    <Image
                        source={images.people}
                        style={{
                            top: 15,
                            marginLeft: 240,
                            width: 34.87,
                            height: 34.87,
                        }}></Image>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{
                        marginLeft: 60,
                        top: 130,
                    }}>
                        <Text style={styles.titleHeader}>Find Your</Text>
                        <Text style={styles.titleHeader}>Desired</Text>
                        <Text style={styles.titleHeader}>Doctor</Text>
                    </View>
                    <Image
                        source={images.doctor}
                        style={{
                            top: 56,
                            marginLeft: -8,
                            width: 243,
                            height: 288,
                            borderBottomRightRadius: 60,
                        }}></Image>
                </View>
                <View style={{
                    backgroundColor: 'white',
                    width: 320,
                    height: 50,
                    // justifyContent: 'center',
                    flexDirection: 'row',
                    alignItems: 'center',
                    borderRadius: 34,
                    left: 55,
                    bottom: 18,
                }}>
                    <Image
                        source={icons.search}
                        style={{
                            width: 20,
                            height: 20,
                            left: 20,
                        }}
                    ></Image>
                    <Text style={{ color: '#475464', left: 40, }}>Find a Doctor or Specialist ...</Text></View>
            </View>
            <View style={{ height: '40%', backgroundColor: '#FBFCFF', }}>
                <View style={{
                    flexDirection: 'row',
                    marginTop: 24,
                    marginLeft: 32,
                }}>
                    <View style={styles.styleIcon}>
                        <Image
                            source={icons.dentist}
                            style={styles.sizeIcon}
                        ></Image>
                        <Text>Dennist</Text>
                    </View>
                    <View style={styles.styleIcon}>
                        <Image
                            source={icons.heart}
                            style={styles.sizeIcon}
                        ></Image>
                        <Text>Heart</Text>
                    </View>
                    <View style={styles.styleIcon}>
                        <Image
                            source={icons.neurology}
                            style={styles.sizeIcon}
                        ></Image>
                        <Text>Neurology</Text>
                    </View>
                    <View style={styles.styleIcon}>
                        <Image
                            source={icons.orthopedic}
                            style={styles.sizeIcon}
                        ></Image>
                        <Text>Orthopedic</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 30, marginLeft: 27, }}>
                    <Text style={{ fontWeight: '700', }}>Top Rated Doctor</Text>
                    <Text style={{ marginLeft: 170, color: '#FF9972' }}>View All</Text>
                </View>
                <View style={{ flexDirection: 'row', padding: 27 }}>
                    <View style={{ flexDirection: 'row', }}>
                        <ImageBackground style={{ backgroundColor: '#319CE3', borderRadius: 40, }}>
                            <Image
                                source={images.doctor}
                                style={{
                                    width: 76,
                                    height: 70,
                                    borderRadius: 40,
                                }}
                            ></Image>
                        </ImageBackground>
                        <View style={{ backgroundColor: '#0CDD6C', width: 12, height: 11, borderRadius: 30, marginTop: 59, marginLeft: -20, }}></View>
                    </View>
                    <View style={{ justifyContent: 'center', marginLeft: 30, }}>
                        <Text style={{ fontWeight: '700' }}>dr. Kathryn Murphy</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                            <Image source={icons.dentist} style={{ width: 14, height: 14, }}></Image>
                            <Text style={{ marginLeft: 6, fontSize: 12, fontWeight: '400', }}>Dentist - Stillwater Clinic</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                            <Image source={icons.star} style={{ height: 10, width: 10, marginLeft: 2, }}></Image>
                            <Image source={icons.star} style={{ height: 10, width: 10, marginLeft: 2, }}></Image>
                            <Image source={icons.star} style={{ height: 10, width: 10, marginLeft: 2, }}></Image>
                            <Image source={icons.star} style={{ height: 10, width: 10, marginLeft: 2, }}></Image>
                            <Image source={icons.star} style={{ height: 10, width: 10, marginLeft: 2, }}></Image>
                            <Text style={{ marginLeft: 8, fontSize: 12, fontWeight: '400', }}>(1541 Ratings)</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={{
                height: '10%',
                flexDirection: 'row',
            }}>
                <View style={styles.styleIconBottom}>
                    <Image
                        source={icons.stethoscope}
                        style={styles.sizeIconBottom}
                    ></Image>
                    <Text style={{ fontSize: 10, fontWeight: '400', }}>Appointment</Text>
                </View>
                <View style={styles.styleIconBottom}>
                    <Image
                        source={icons.chat}
                        style={styles.sizeIconBottom}
                    ></Image>
                    <Text style={{ fontSize: 10, fontWeight: '400', }}>Chat</Text>
                </View>
                <View style={styles.styleIconBottom}>
                    <Image
                        source={icons.calendar}
                        style={styles.sizeIconBottom}
                    ></Image>
                    <Text style={{ fontSize: 10, fontWeight: '400', }}>History</Text>
                </View>
                <View style={styles.styleIconBottom}>
                    <Image
                        source={icons.account}
                        style={styles.sizeIconBottom}
                    ></Image>
                    <Text style={{ fontSize: 10, fontWeight: '400', }}>Profile</Text>
                </View>
            </View>
        </View>


    );
}
export default Welcome;
