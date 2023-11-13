import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useContext, useState } from "react";
import { COLORS, SIZES } from "../constants/theme";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

const FoodPage = ({ route, navigation }) => {
  const item = route.params.item;
  const [isChecked, setIsChecked] = useState(false);
  const [additives, setAdditives] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [restaurant, setRestaurant] = useState(1);
  const [count, setCount] = useState(1);
  const [preference, setPreference] = useState("");

  // const { cartCount, setCartCount } = useContext(CartCountContext);

  return (
    <View style={{ backgroundColor: COLORS.lightWhite, height: SIZES.height }}>
      <View>
        <Image
          source={{ uri: item.imageUrl[0] }}
          style={{
            width: SIZES.width,
            height: SIZES.height / 4,
            borderBottomRightRadius: 30,
          }}
        />
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backbtn}
        >
          <Ionicons
            name="chevron-back-circle"
            size={30}
            color={COLORS.tertiary}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {}} style={styles.marginRight}>
          <MaterialCommunityIcons
            name="share-circle"
            size={30}
            color={COLORS.tertiary}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FoodPage;

const styles = StyleSheet.create({
  backbtn: {
    marginLeft: 12,
    alignItems: "center",
    zIndex: 999,
    position: "absolute",
    top: SIZES.xxLarge,
  },
  sharebtn: {
    marginRight: 12,
    alignItems: "center",
    zIndex: 999,
    right: 0,
    position: "absolute",
    top: SIZES.xxLarge,
  },
});
