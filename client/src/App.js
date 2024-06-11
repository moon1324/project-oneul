import { ThemeProvider } from "styled-components";
import { RouterProvider } from "react-router-dom";
import "./App.css";

import router from "./routes/router";
import theme from "./global/theme";
import GlobalStyle from "./global/global";
import { FormProvider } from "./pages/myMind/context/FormContext";

function App() {
    return (
        <>
            <ThemeProvider theme={theme}>
                <FormProvider >
                    <RouterProvider router={router} />
                    <GlobalStyle />
                </FormProvider>
            </ThemeProvider>
        </>
    );
}

export default App;
