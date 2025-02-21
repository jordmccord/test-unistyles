export default ({ config }) => ({
  ...config,
  name: "Test UI",
  slug: "test-ui",
  scheme: "test-ui",
  owner: "jord-uw",
  version: "1.0.0",
  orientation: "portrait",
  icon: "./assets/images/icon.png",
  extra: {
    storybookEnabled: true,
    eas: {
      projectId: "8d90953c-8012-4d0c-bc37-fcfc280c4861",
    },
  },
  plugins: [
    "expo-font",
    [
      "expo-xml-font",
      [
        {
          name: "Inter",
          folder: "./assets/fonts",
          variants: [
            { fontFile: "inter_bold", fontWeight: 700 },
            { fontFile: "inter_regular", fontWeight: 400 },
          ],
        },
        {
          name: "Work Sans",
          folder: "./assets/fonts",
          variants: [
            { fontFile: "worksans_black", fontWeight: 900 },
            { fontFile: "worksans_bold", fontWeight: 700 },
            { fontFile: "worksans_extrabold", fontWeight: 800 },
            { fontFile: "worksans_extralight", fontWeight: 200 },
            { fontFile: "worksans_light", fontWeight: 300 },
            { fontFile: "worksans_medium", fontWeight: 500 },
            { fontFile: "worksans_regular", fontWeight: 400 },
            { fontFile: "worksans_semibold", fontWeight: 600 },
            { fontFile: "worksans_thin", fontWeight: 100 },
          ],
        },
      ],
    ],
  ],
  updates: {
    fallbackToCacheTimeout: 0,
  },
  assetBundlePatterns: ["**/*"],
  ios: {
    supportsTablet: true,
    bundleIdentifier: "com.unistylestest.testui",
    infoPlist: {
      LSApplicationQueriesSchemes: ["test-ui"],
      ITSAppUsesNonExemptEncryption: false,
    },
  },
  android: {
    package: "com.unistylestest.testui",
    adaptiveIcon: {
      foregroundImage: "./assets/images/adaptive-icon.png",
      backgroundColor: "#ffffff",
    },
  },
  web: {
    favicon: "./assets/favicon.png",
  },
});
