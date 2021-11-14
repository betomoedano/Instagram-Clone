import React from "react";
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
} from "react-native";
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg"


export default function UserPictureAndFollows(props) {

    const { user } = props;

    function SvgProfilePicture() {
        return (
          <Svg
            width={88}
            height={88}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <Path
              d="M86.667 44c0 23.611-19.122 42.75-42.708 42.75C20.372 86.75 1.25 67.611 1.25 44S20.372 1.25 43.959 1.25c23.586 0 42.708 19.139 42.708 42.75z"
              stroke="url(#prefix__paint0_linear_279_663)"
              strokeWidth={2.5}
            />
            <Defs>
              <LinearGradient
                id="prefix__paint0_linear_279_663"
                x1={43.959}
                y1={0}
                x2={43.959}
                y2={88}
                gradientUnits="userSpaceOnUse"
              >
                <Stop stopColor="#DE0046" />
                <Stop offset={1} stopColor="#F7A34B" />
              </LinearGradient>
            </Defs>
          </Svg>
        )
      }

    return(
        <View style={styles.container}>
            <TouchableOpacity>
                <SvgProfilePicture />
                <Image
                    style={styles.userPicture}
                    source={{uri: user.profilePicture}}
                />                
            </TouchableOpacity>    

            <View style={styles.followsContainer}>
                <Text style={styles.textBold}>{user.posts}</Text>
                <Text>Post</Text>                
            </View>
            <View style={styles.followsContainer}>
                <Text style={styles.textBold}>{user.follers}</Text>
                <Text>Followers</Text>               
            </View>
            <View style={styles.followsContainer}>
                <Text style={styles.textBold}>{user.following}</Text>
                <Text>Following</Text>             
            </View>


        </View>
    )
}

const styles = StyleSheet.create({
    userPicture: {
        width: 77,
        height: 77,
        borderRadius: 100,
        marginRight: 10,
        position: 'absolute',
        alignSelf: 'center',
        top: 5,
    },
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 15,
    },
    followsContainer: {
        alignContent: "center",
        justifyContent: "center",
    }, 
    textBold: {
        fontWeight: "bold",
        textAlign: "center",
    }
})
