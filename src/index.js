import React, { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./styles.css"

import App from "./App"

// const root = creatRoot(document.getElementById("root"))
const root = createRoot(document.getElementById("root"));

root.render(
    <StrictMode>
        <App></App>
    </StrictMode>
)
