import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import TextBox from '../../Components/TextBox'
import AddressFlatlist from '../../Components/AddressFlatlist'
import { FlatlistData, FlatlistDataSearch } from '../../Constants/FlatlistData'
import { SearchStyle } from '../Search/SearchStyle'

export default function Search() {
  return (
    <View style={SearchStyle.container}>
      <View>
        <View style={SearchStyle.textBoxView}>
          <TextBox placeholder={'Sector'} Show={'Enter location manually'} />
        </View>
        <View style={SearchStyle.suggestionsView}>
          <Text style={SearchStyle.suggestionsText}>
            Suggestions
          </Text>
        </View>
        <View>
          <AddressFlatlist flatdata={FlatlistDataSearch} />
        </View>
      </View>
    </View>
  )
}

