import { component$, Slot, useStylesScoped$ } from "@builder.io/qwik";

import Header from "../components/header/header";

import styles from "./layout.scss?inline";

export default component$(() => {
  useStylesScoped$(styles);
  return (
    <>
      <div>
        <Header />
        <main>
          <aside></aside>
          <section aria-labelledby="main-home-info">
            <Slot name="main" />
          </section>
        </main>
      </div>
    </>
  );
});
