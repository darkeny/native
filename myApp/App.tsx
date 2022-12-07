import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { SafeAreaView, } from 'react-native';
import { ThemeProvider } from 'styled-components';
import dark from './src/theme/dark';
import light from './src/theme/light';
import { Container, GroupButton, Resulte, CircleButton } from './styles';


export default function App() {
  const [value, setValue] = useState(0)

  return (
    <ThemeProvider theme={light}>
      <Container>
        <StatusBar style='light' />
        <SafeAreaView>
          <Resulte>
            {value}
          </Resulte>
          <GroupButton>
            <CircleButton />
          </GroupButton>
        </SafeAreaView>
      </Container>
    </ThemeProvider>
  );
}

