<script>
  import { onMount } from "svelte";
  import { Remarkable } from "remarkable";
  import hljs from "highlight.js";
  import tablePrependInit from "../../../smart/src/js/post/responsiveTables";

  onMount(() => {
    tablePrependInit();
  });

  const API = "https://api.github.com/repos/royalfig/smart/readme";
  var md = new Remarkable("full", {
    typographer: true,
    highlight: function (str, lang) {
      if (lang && hljs.getLanguage(lang)) {
        try {
          return hljs.highlight(lang, str).value;
        } catch (err) {}
      }

      try {
        return hljs.highlightAuto(str).value;
      } catch (err) {}

      return ""; // use external default escaping
    },
  });
  async function getReadme(API) {
    const res = await fetch(API);
    const { content } = await res.json();
    const contentDecoded = atob(content);
    const html = md.render(contentDecoded);
    return html;
  }

  const content = getReadme(API);
</script>

{#await content then value}
  <main class="main">
    <div class="post">
      <div class="post__content">
        {@html value}
      </div>
    </div>
  </main>
{/await}
