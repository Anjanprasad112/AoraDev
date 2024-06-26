import { StatusBar } from "expo-status-bar";
import { Image, ScrollView, Text, View } from "react-native";
import { Link } from "expo-router";
import { Redirect, router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../constants";
import CustomButton from "../components/CustomButton";
import { useGlobalContext } from "../context/GlobalProvider";

export default function App() {
  const { loading, isLogged } = useGlobalContext();
  if (!loading && isLogged) return <Redirect href="/home" />;
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full items-center justify-center min-h-[90vh] px-4">
          <Image
            source={images.logo}
            className="w-[130px] h-[80px]"
            resizeMode="contain"
          />
          <Image
            source={images.cards}
            className="max-w-[380px] w-full h-[300px]"
            resizeMode="contain"
          />
          <View className="relative mt-2  ">
            <Text className="text-2xl text-white font-bold text-center">
              Discover Endless Possibilities with {""}
              <Text className="text-secondary-200">Aora</Text>
            </Text>
          </View>

          <Text className="text-sm text-gray-100 mt-2 text-center">
            Where Creativity Meets Innovation: Embark on a Journey of Limitless
            Exploration with Aora
          </Text>
          <CustomButton 
          title={`Continue with Email`}
          handlePress={()=>router.push('/sign-in')}
          containerStyles={`w-full mt-7`}
          />
        </View>
      </ScrollView>
      <StatusBar backgroundColor="#161622" style="light"/>
    </SafeAreaView>
  );
}
