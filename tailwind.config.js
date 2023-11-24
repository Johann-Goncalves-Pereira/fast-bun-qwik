import theme from "./.theme/_theme.json";
const {
  colors,
  border_radius,
  font_family,
  font_weight,
  light_colors,
  screens,
  z_index,
} = theme;

const color = theme.schema === "dark" ? colors : light_colors;

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{jsx,tsx}"],
  theme: {
    colors: {
      //& Surface
      "surface-100": color.surface[100],
      "surface-200": color.surface[200],
      "surface-300": color.surface[300],
      "surface-400": color.surface[400],
      "surface-500": color.surface[500],
      "surface-600": color.surface[600],
      "surface-700": color.surface[700],
      "surface-800": color.surface[800],
      "surface-900": color.surface[900],
      // & Brand
      "brand-100": color.brand[100],
      "brand-200": color.brand[200],
      "brand-300": color.brand[300],
      "brand-400": color.brand[400],
      "brand-500": color.brand[500],
      "brand-600": color.brand[600],
      "brand-700": color.brand[700],
      "brand-800": color.brand[800],
      "brand-900": color.brand[900],
    },
    borderRadius: {
      none: border_radius.none,
      sm: border_radius.sm,
      "": border_radius.DEFAULT,
      md: border_radius.md,
      lg: border_radius.lg,
      xl: border_radius.xl,
      "2xl": border_radius["2xl"],
      "3xl": border_radius["3xl"],
      full: border_radius.full,
    },
    fontFamily: {
      sans: font_family.sans,
      serif: font_family.serif,
      mono: font_family.mono,
    },
    fontWeight: {
      1: font_weight[1],
      2: font_weight[2],
      3: font_weight[3],
      4: font_weight[4],
      5: font_weight[5],
      6: font_weight[6],
      7: font_weight[7],
      8: font_weight[8],
      9: font_weight[9],
    },
    screens: {
      "5sm": screens["5sm"],
      "4sm": screens["4sm"],
      "3sm": screens["3sm"],
      "2sm": screens["2sm"],
      sm: screens["sm"],
      md: screens["md"],
      lg: screens["lg"],
      xl: screens["xl"],
      "2xl": screens["2xl"],
      "3xl": screens["3xl"],
      "4xl": screens["4xl"],
      uxl: screens["uxl"],
      "2uxl": screens["2uxl"],
      "3uxl": screens["3uxl"],
    },
    zIndex: {
      auto: z_index.auto,
      "-50": z_index["-50"],
      "-40": z_index["-40"],
      "-30": z_index["-30"],
      "-20": z_index["-20"],
      "-10": z_index["-10"],
      0: z_index[0],
      10: z_index[10],
      20: z_index[20],
      30: z_index[30],
      40: z_index[40],
      50: z_index[50],
    },
  },
  plugins: [],
};
