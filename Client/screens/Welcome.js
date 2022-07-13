import React from "react";
import {
    Text,
    View,
    Image,
    ImageBackground,

} from "react-native";
import { Header } from "react-native/Libraries/NewAppScreen";
import { icons, images } from '../constants'

function Welcome(props) {
    const TextHearder = "Hi,\nSaepul Nahwan"
    return <View style={{
        flex: 100,
    }}>
        <View style={{
            flex: 50,
        }}>
            <View style={{
                backgroundColor: '#3CBAF0',
                borderBottomRightRadius: 60,
            }}>
                <View style={{
                    flexDirection: 'row',
                    // alignItems: 'center',
                    // justifyContent: "flex-start",
                    marginTop:17,
                }}>
                    <Text style={{
                        color: 'white',
                        left: 27,
                    }}>Hi,</Text>
                    <Text style={{
                        color: 'white',
                        fontWeight:"bold",
                        top:30,
                    }}>Saepul Nahwan</Text>
                    <Image source={images.people}
                        style={{
                            marginLeft:230,
                            width: 34.87,
                            height: 34.87,
                        }}
                    ></Image>
                </View>
                <Image source={images.doctor}
                    style={{
                        marginLeft: 170,
                        width: 243,
                        height: 288,
                        borderBottomRightRadius: 60,
                    }}
                ></Image>
            </View>
        </View>
        <View style={{
            flex: 40,
            backgroundColor: 'yellow'
        }}>

        </View>
        <View style={{
            flex: 10,
            backgroundColor: 'red'
        }}>

        </View>
    </View>
}
export default Welcome