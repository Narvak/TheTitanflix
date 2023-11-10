import {Video} from "expo-av";
import React from "react";
import {Text, View} from "react-native";
import {useVideoContext} from "../../context/videoContext";

export const VideoPage = () => {
    const { currentVideoParams } = useVideoContext();
    // faire un context pour le film en cours de lecture
    return (
        <View>
            <Text style={{ color: 'white' }}>{currentVideoParams?.title}</Text>
            <Video
                source={{uri: currentVideoParams?.uri}}
                style={{width: "100%", height: 300}}
                useNativeControls
                resizeMode="contain"
            />
        </View>
    )
}
