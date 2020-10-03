import { h } from "preact";
import { Helmet } from "react-helmet";

export default (props) => (
  <main class="mt-10 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 xl:mt-28">
    <div class="text-center">
      <h2 class="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
        A site built using the
        <br />
        <span class="text-indigo-600"> beta version of Toast</span>
      </h2>
    </div>
  </main>
);
