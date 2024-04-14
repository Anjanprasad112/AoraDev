import { View, Text,Image ,ScrollView,Alert} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {images} from "../../constants";
import { Link,router } from "expo-router";

import FormField from "../../components/FormField";
import CustomButton from "../../components/CustomButton";
import { signIn } from "../../lib/appwrite";

const SignIn = () => {
  const [form, setform] = useState({
    email: "",
    password: "",
  })
  const [issubmit, setissubmit] = useState(false)

  const submit=async()=>{
    if(!form.password || !form.email){
      Alert.alert("Error","Please fill in all fields");
    }
    setissubmit(true);

      try {
        const result = await signIn(form.email, form.password);
        router.push('/home');
      } catch (error) {
        Alert.alert("Error",error.message);
        
      }finally{
        setissubmit(false);
      }
  }

  
  return (
    <>
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full justify-center min-h-[85vh] px-4 my-6">
        <Image source={images.logo} resizeMode="contain" className="w-[115px] h-[35px]"/>
        <Text className="text-2xl font-psemibold mt-10 text-white text-semibold">Log in to Aora</Text>
        <FormField
        title="Email"
        value={form.email}
        handleChangeText={(e) => setform({...form, email: e})}
        otherStyles="mt-7"
        keyboardType="email-address"
        />
        <FormField
        title="Password"
        value={form.password}
        handleChangeText={(e) => setform({...form, password: e})}
        otherStyles="mt-7"
        />

        <CustomButton
        title={`Log In`}
        handlePress={submit}
        containerStyles={`mt-7`}
        isLoading={issubmit}
        />
        <View className="justify-center pt-5 flex-row gap-2">
          <Text className="text-base text-gray-100 font-pregular">
            Don't have an account?{" "}
          </Text>
          <Link href={`/sign-up`} className="text-base font-psemibold text-secondary-100">Sign Up</Link>
        </View>
        </View>
      </ScrollView>
    </SafeAreaView>
    </>
  );
};

export default SignIn;
