// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyAsOrNLT6QG7U5F7eTprMKviJZdfd2ea_k",
    authDomain: "vas-server.firebaseapp.com",
    databaseURL: "https://vas-server.firebaseio.com",
    projectId: "vas-server",
    storageBucket: "vas-server.appspot.com",
    messagingSenderId: "350536510273"
  }
};
