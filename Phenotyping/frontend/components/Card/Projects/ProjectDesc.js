//! component used for PROJECT DESCRIPTION and READ MORE after user chooses which project they want

import React, { useState } from "react";
import { View, Text } from "react-native";
import { DataCollectors, Title } from "../../SubInfo";
import { COLORS, SIZES, FONTS } from "../../../constants";

const ProjectDesc = ({ data }) => {
  //--------------- logic for the 'read more' ------------------
  const [text, setText] = useState(data.description);
  const [readMore, setReadMore] = useState(true);
  //--------------- logic for the 'read more' ------------------
  return (
    <>
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Title
          title={data.project}
          subTitle={data.location}
          titleSize={SIZES.extraLarge}
          subTitleSize={SIZES.font}
        />

        <DataCollectors collecting={data.collecting} />
      </View>

      <View style={{ marginVertical: SIZES.extraLarge * 1.5 }}>
        <Text
          style={{
            fontSize: SIZES.large, //was originally SIZES.font
            fontFamily: FONTS.semiBold,
            color: COLORS.primary,
          }}
        >
          Description
        </Text>
        <View
          style={{
            marginTop: SIZES.base,
          }}
        >
          <Text
            style={{
              color: COLORS.secondary,
              fontSize: SIZES.small,
              fontFamily: FONTS.regular,
              lineHeight: SIZES.large,
            }}
          >
            {text}
            {!readMore && "..."}
            <Text
              style={{
                color: COLORS.primary,
                fontSize: SIZES.small,
                fontFamily: FONTS.semiBold,
              }}
              //!on iphone sized devices, have the description start closed
              onPress={() => {
                if (readMore) {
                  setText(data.description.slice(0, 200));
                  setReadMore(false);
                } else {
                  setText(data.description);
                  setReadMore(true);
                }
              }}
            >
              {readMore ? " Show Less" : " Read More"}
            </Text>
          </Text>
        </View>
      </View>
    </>
  );
};

export default ProjectDesc;
