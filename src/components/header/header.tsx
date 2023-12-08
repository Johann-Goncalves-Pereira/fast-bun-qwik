import { component$, useStylesScoped$ } from "@builder.io/qwik";

import styles from "./styles.scss?inline";

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <header class="header">
      <aside class="aside">
        <img
          width={30}
          height={30}
          class="aside__photo"
          alt="Profile Picture"
          src="favicon.svg"
          loading="lazy"
        />
        <strong class="font-6 text-ellipsis">Johann Gonçalves Pereira</strong>
        <p class="">+3 years of experience</p>
      </aside>

      <div class="control">
        <button>CV</button>
        <button>Demos</button>

        <button></button>
        <button></button>
        <button></button>
      </div>
    </header>
  );
});
