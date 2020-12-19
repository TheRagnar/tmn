import React from "react";
import { View, Image, Text } from "react-native";
import style from "./style";

const HeaderCenter = ({ title }) => {
  return (
    <View style={style.center}>
      {title ? (
        <Text style={style.title}>
          {title}
        </Text>
      ) : (
          <Image
            source={require("../../assets/images/logo2.png")}
            style={style.logo2}
          />
        )}
    </View>
  );
};

export default HeaderCenter;
