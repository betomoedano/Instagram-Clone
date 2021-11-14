import React from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import { FakeImagesData } from '../FakePicturesData'

export default function UserPostProfile(props) {

    const Story = (props) => {
        return(
            <TouchableOpacity>
                <View>
                    <Image source={{uri: props.image}} style={styles.image}/>
                </View>

            </TouchableOpacity>
        )
    }

    return(
        <View>
            <FlatList
                data={FakeImagesData}
                renderItem={({item}) => <Story image={item.url} name={item.name}/>}
                keyExtractor={(item, index) => index.toString()}
                showsHorizontalScrollIndicator={false}
                numColumns={3}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        width: 130,
        height: 130,
    },
    text: {
        textAlign: 'center',
    }
})