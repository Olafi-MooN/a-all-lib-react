import "material-icons/iconfont/material-icons.css";
import '../src/styles/colors.css';
import '../src/styles/fonts.css';
import '../src/styles/global.css';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  layout: 'centered',
  backgrounds: {
    default: 'dark',
    values: [
      {
        name: 'dark',
        value: '#2f2f2f',
      },
    ],
  },
}