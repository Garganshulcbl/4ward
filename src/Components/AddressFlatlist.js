import { View, Text, FlatList, Image } from 'react-native'
import React from 'react'
import ImagePath from '../Constants/ImagePath'

export default function AddressFlatlist({ flatdata }) {
    return (
        <FlatList
            data={flatdata}
            // keyExtractor={item=>item.id.toString()}
            renderItem={({ item }) => (
                <View style={{ marginTop: 30, flexDirection: 'row', justifyContent:'space-between' }}>
                    <Text style={{color: '#C7C8C7', fontSize:15}}>{item.text}</Text>
                    {<Image source={item.img}/>}
                </View>
                
            )}
        />
    )
}