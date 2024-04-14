import { StatusBar,Text, View } from 'react-native'
import React from 'react'

const profile = () => {
  return (
    <View className="flex-1 items-center justify-center bg-red-500">
      <Text className="text-3xl">Open up App.js to start working on your app!
        this is a profile page
      </Text>
      <StatusBar style="auto" />
    </View>
  )
}

export default profile

// const styles = StyleSheet.create({})