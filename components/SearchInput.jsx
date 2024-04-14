import { View, Text, TextInput, TouchableOpacity,Image } from "react-native";
import { useState } from "react";
import { icons } from "../constants";
const SearchInput = ({
  title,
  value,
  placeholder,
  handleChangeText,
  otherStyles,
  ...props
}) => {
  const [showPassword, setshowPassword] = useState(false);
  return (
    
      <View className="w-full h-16 border-2 px-2 border-black-200 bg-black-100 rounded-2xl focus:border-secondary items-center flex-row">
        <TextInput
          className="text-base mt-0.5 text-white flex-1 font-pregular"
          value={value}
          placeholder={placeholder}
          placeholderTextColor="#7b7b8b"
          onChangeText={handleChangeText}
          secureTextEntry={title === "Password" && !showPassword}
        />
        <TouchableOpacity className="">
            <Image
              source={icons.search}
              className="w-5 h-5 mx-2"
              resizeMode="contain"
            />
        </TouchableOpacity>
        
      </View>
  );
};

export default SearchInput;
