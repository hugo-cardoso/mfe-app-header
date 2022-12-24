import React from "react";
import ReactDOM from "react-dom/client";
import AppComponent from "./App";
import type { AppProps } from "./types";

const ID = "header";
let App: ReactDOM.Root;

(window as any)[ID] = {
  mount: (wrapper: HTMLElement, props: AppProps) => {
    App = ReactDOM.createRoot(wrapper);

    App.render(
      <React.StrictMode>
        <AppComponent props={props} />
      </React.StrictMode>
    );
  },
  unmount: () => {
    App.unmount();
  },
};

if (import.meta.env.DEV) {
  ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
      <AppComponent
        props={{
          changeRoute: (route: string) => {
            console.log(route);
          },
        }}
      />
    </React.StrictMode>
  );
}
