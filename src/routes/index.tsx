import { component$, useStylesScoped$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import styles from "./styles.scss?inline";

export default component$(() => {
  useStylesScoped$(styles);
  return (
    <>
      <main>
        <p class="xs">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          eum alias, veniam, possimus, suscipit obcaecati blanditiis inventore
          cum repudiandae consequatur ratione ullam. Nulla necessitatibus
          adipisci aperiam ducimus architecto atque quia.
        </p>
        {/* <p class="sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          eum alias, veniam, possimus, suscipit obcaecati blanditiis inventore
          cum repudiandae consequatur ratione ullam. Nulla necessitatibus
          adipisci aperiam ducimus architecto atque quia.
        </p>
        <p class="default">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          eum alias, veniam, possimus, suscipit obcaecati blanditiis inventore
          cum repudiandae consequatur ratione ullam. Nulla necessitatibus
          adipisci aperiam ducimus architecto atque quia.
        </p>
        <p class="lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          eum alias, veniam, possimus, suscipit obcaecati blanditiis inventore
          cum repudiandae consequatur ratione ullam. Nulla necessitatibus
          adipisci aperiam ducimus architecto atque quia.
        </p>
        <p class="xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          eum alias, veniam, possimus, suscipit obcaecati blanditiis inventore
          cum repudiandae consequatur ratione ullam. Nulla necessitatibus
          adipisci aperiam ducimus architecto atque quia.
        </p>
        <p class="xxl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          eum alias, veniam, possimus, suscipit obcaecati blanditiis inventore
          cum repudiandae consequatur ratione ullam. Nulla necessitatibus
          adipisci aperiam ducimus architecto atque quia.
        </p>
        <p class="xxxl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          eum alias, veniam, possimus, suscipit obcaecati blanditiis inventore
          cum repudiandae consequatur ratione ullam. Nulla necessitatibus
          adipisci aperiam ducimus architecto atque quia.
        </p>
        <p class="xxxxl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          eum alias, veniam, possimus, suscipit obcaecati blanditiis inventore
          cum repudiandae consequatur ratione ullam. Nulla necessitatibus
          adipisci aperiam ducimus architecto atque quia.
        </p>
        <p class="xxxxxl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          eum alias, veniam, possimus, suscipit obcaecati blanditiis inventore
          cum repudiandae consequatur ratione ullam. Nulla necessitatibus
          adipisci aperiam ducimus architecto atque quia.
        </p>
        <p class="xxxxxxl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          eum alias, veniam, possimus, suscipit obcaecati blanditiis inventore
          cum repudiandae consequatur ratione ullam. Nulla necessitatibus
          adipisci aperiam ducimus architecto atque quia.
        </p>
        <p class="xxxxxxxl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          eum alias, veniam, possimus, suscipit obcaecati blanditiis inventore
          cum repudiandae consequatur ratione ullam. Nulla necessitatibus
          adipisci aperiam ducimus architecto atque quia.
        </p> */}
        <p class="xxxxxxxxl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          eum alias, veniam, possimus, suscipit obcaecati blanditiis inventore
          cum repudiandae consequatur ratione ullam. Nulla necessitatibus
          adipisci aperiam ducimus architecto atque quia.
        </p>
      </main>
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
