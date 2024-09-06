import logo from "./extensions/Icon.png";

const config = {
  head: {
    favicon: logo,
  },
  // Replace the Strapi logo in auth (login) views
  auth: {
    logo,
  },
  // Replace the Strapi logo in the main navigation
  menu: {
    logo,
  },
  // Extend the translations
  translations: {
    en: {
      "app.components.LeftMenu.navbrand.title": "Shuu",

      "app.components.LeftMenu.navbrand.workplace": "Shuu",

      "Auth.form.welcome.title": "Welcome to Shuu",

      "Auth.form.welcome.subtitle": "Login to your account",
      "Auth.form.button.login.strapi": "Log in via Shuu",
      "Auth.form.register.subtitle": "Credentials are only used to authenticate in Shuu. All saved data will be stored in your database.",
      "HomePage.welcome.congrats.content": "You are logged in as the first administrator. To discover the powerful features provided by Shuu,",
      "Settings.profile.form.section.experience.interfaceLanguageHelp":
      "Preference changes will apply only to you.",
    },
    theme: {
      theme: {
        colors: {
          primary100: '#eff8f7',
          primary200: '#c4f0eb',
          primary500: '#8ae2d6',
          primary600: '#60bdb2',
          primary700: '#0a7a7f',
        },
      }
    }
  },
  tutorials: false,
  notifications: { releases: false },
};

const bootstrap = (app) => {
  console.log(app);
};

export default {
  config,
  bootstrap,
};