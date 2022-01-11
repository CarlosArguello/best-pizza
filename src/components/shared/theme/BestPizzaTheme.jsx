import { ThemeProvider } from '@mui/material';
import { BestPizzaThemeConfig } from './BestPizzaTheme.config';

export const BestPizzaTheme = ({ children }) => (
  <ThemeProvider theme={BestPizzaThemeConfig}>{children}</ThemeProvider>
);
