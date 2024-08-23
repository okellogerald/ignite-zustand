// TODO: write documentation about fonts and typography along with guides on how to add custom fonts in own
// markdown file and add links from here

import { Platform } from "react-native"
import {
  Jost_300Light as JLight,
  Jost_400Regular as JRegular,
  Jost_500Medium as JMedium,
  Jost_600SemiBold as JSemiBold,
  Jost_700Bold as JBold,
  Jost_800ExtraBold as JExtraBold,
  Jost_900Black as JBlack,
} from "@expo-google-fonts/jost";

export const customFontsToLoad = {
  JLight,
  JRegular,
  JMedium,
  JBold,
  JSemiBold,
  JExtraBold,
  JBlack,
};

const fonts = {
  jost: {
    // Cross-platform Google font.
    light: "JLight",
    normal: "JRegular",
    medium: "JMedium",
    semiBold: "JSemiBold",
    bold: "JBold",
    extraBold: "JExtraBold",
    black: "JBlack",
  },
  helveticaNeue: {
    // iOS only font.
    thin: "HelveticaNeue-Thin",
    light: "HelveticaNeue-Light",
    normal: "Helvetica Neue",
    medium: "HelveticaNeue-Medium",
  },
  courier: {
    // iOS only font.
    normal: "Courier",
  },
  sansSerif: {
    // Android only font.
    thin: "sans-serif-thin",
    light: "sans-serif-light",
    normal: "sans-serif",
    medium: "sans-serif-medium",
  },
  monospace: {
    // Android only font.
    normal: "monospace",
  },
}

export const typography = {
  /**
   * The fonts are available to use, but prefer using the semantic name.
   */
  fonts,
  /**
   * The primary font. Used in most places.
   */
  primary: fonts.jost,
  /**
   * An alternate font used for perhaps titles and stuff.
   */
  secondary: Platform.select({ ios: fonts.helveticaNeue, android: fonts.sansSerif }),
  /**
   * Lets get fancy with a monospace font!
   */
  code: Platform.select({ ios: fonts.courier, android: fonts.monospace }),
}
