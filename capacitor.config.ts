import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.mph.app',
  appName: 'multi-purpose-hinge',
  webDir: 'dist',
  server: {
    androidScheme: 'http',
	allowNavigation: [ "http://192.168.4.1","http://3.140.70.42:3000" ]
  }
};

export default config;
