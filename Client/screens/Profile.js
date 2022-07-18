import React from "react";
import { Text, Image, ImageBackground, StyleSheet, View, } from "react-native";
import { icons, images } from "../constants";

function Profile(props) {
    return (
        <View style={{ flex: 1 }}>
            <View style={{
                height: "10%",
                backgroundColor: '#3AA0E7',
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "row",
            }}>
                <Image
                    source={icons.back}
                ></Image>
                <Text style={{
                    color: 'white',
                    fontSize: 16,
                    fontWeight: "800",
                    marginLeft: 90,
                }}>dr. Kathryn Murphy</Text>
                <Image
                    source={icons.share}
                    style={{
                        marginLeft: 90,
                    }}
                ></Image>
            </View>
            <View style={{
                height: "25%",
                backgroundColor: '#F0F5FA',
            }}>
                <View style={{
                    flexDirection: 'row',
                    marginTop: 25,
                }}>
                    <Text style={{ fontWeight: "800", marginLeft: 30, }}>Rating</Text>
                    <Text style={{ fontWeight: '400', color: '#FF9972', marginLeft: 290, }}>See All</Text>
                </View>
                <View style={{ width: 375, marginLeft: 28, }}>
                    <View style={{
                        backgroundColor: 'white',
                        height: 133,
                        marginTop: 15,
                        borderRadius: 10,
                    }}>
                        <View style={{
                            flexDirection: "row",
                            marginTop: 20,
                            marginLeft: 20,
                            // alignItems:"center",
                        }}><Image
                            source={images.JaneCooper}
                        ></Image>
                            <View style={{ marginLeft: 20, }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Image source={icons.star} style={{ height: 10, width: 10, marginLeft: 2, }}></Image>
                                    <Image source={icons.star} style={{ height: 10, width: 10, marginLeft: 2, }}></Image>
                                    <Image source={icons.star} style={{ height: 10, width: 10, marginLeft: 2, }}></Image>
                                    <Image source={icons.star} style={{ height: 10, width: 10, marginLeft: 2, }}></Image>
                                    <Image source={icons.star} style={{ height: 10, width: 10, marginLeft: 2, }}></Image>
                                </View>
                                <Text style={{
                                    fontsize: 12,
                                    fontWeight: "bold",
                                }}>Jane Cooper</Text>
                                <Text>---------------------------------------------------------------------</Text>
                                <Text style={{ width: 250, }}>Lorem ipsum dolor sit amet ectetur adipiscing elit adispicing.</Text>
                            </View>
                            <Text style={{ marginLeft: -50, }}>5/19/12</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={{
                height: "55%",
                backgroundColor: '#F0F5FA',
            }}>
                <Text style={{
                    fontWeight: '800',
                    marginTop: 20,
                    marginLeft: 28,
                }}>Doctor's profile</Text>
                <View style={{
                    backgroundColor: 'orange',
                    height: 350,
                    width: 376,
                    marginLeft: 28,
                    marginTop: 20,
                }}>
                    <View style={{ marginLeft: 22, }}>
                        <Text style={{
                            marginTop: 19,
                            marginRight: 20,
                            lineHeight: 20,
                            color: "#475464",
                        }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit amet vestibulum nunc tempor aliquet habitant eget hendrerit eu. Eros nibh venenatis nibh urna facilisis. </Text>
                        <Text style={{
                            color: "#475464",
                            lineHeight: 18,
                            fontSize: 12,
                            fontWeight: '700',
                            letterSpacing: 1,
                            marginTop: 10,
                        }}>MEDICAL TREATMENT</Text>
                        <View style={{ flexDirection: 'row', alignItems: "center", }}>
                            <View style={{
                                backgroundColor: '#2892E4',
                                width: 7,
                                height: 7,
                                borderRadius: 50,
                            }}></View>
                            <Text>Dental check-ups</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={{
                height: "10%",
            }}>
                <View style={{
                    flexDirection: 'row',
                    marginLeft: 28,
                    marginTop: 15,
                }}>
                    <View>
                        <Text style={{
                            color: '#475464',
                            lineHeight: 18,
                        }}>Consulting Prices</Text>
                        <Text style={{
                            color: '#3CBAF0',
                            fontWeight: '700',
                            fontSize: 18,
                            marginTop: 5,
                        }}>$50</Text>
                    </View>
                    <View style={{
                        backgroundColor: '#FF9972',
                        width: 193,
                        height: 50,
                        marginLeft: 50,
                        borderRadius: 34,
                        alignItems: "center",
                        justifyContent: "center",
                    }}>
                        <Text style={{
                            fontWeight:'700',
                            lineHeight:19,
                            color:'white',
                        }}>Make Appoinment</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}
export default Profile;