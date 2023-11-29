import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { COLORS, fields } from "../constants";

const FieldsFilter = () => {
  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {fields.map((field, index) => {
          return (
            <TouchableOpacity>
              <View
                style={{
                  backgroundColor: index === 0 ? COLORS.rowcolor : COLORS.light,
                  marginRight: 36,
                  borderRadius: 8,
                  paddingHorizontal: 16,
                  paddingVertical: 10,
                  shadowColor: "#000",
                  shadowOffset: { width: 0, height: 4 },
                  shadowOpacity: 0.1,
                  shadowRadius: 7,
                  marginVertical: 16,
                }}
              >
                <Text
                  style={{ color: index === 0 && COLORS.light, fontSize: 18 }}
                >
                  {" "}
                  {field.field}
                </Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default FieldsFilter;
