import React from "react";
import { Image, View } from "react-native";
import style from "./style";

const HeaderBigLogo = () => {
  return (
    <View style={style.paddingLeft}>
      <Image
        source={require("../../assets/images/logo.png")}
        style={style.logoBig}
      />
    </View>
  );
};

export default HeaderBigLogo;
