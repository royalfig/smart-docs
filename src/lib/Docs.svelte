<script>
  import { Remarkable } from "remarkable";
  const API = "https://api.github.com/repos/royalfig/smart/readme";
  var md = new Remarkable({ typographer: true });
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
  <div class="post__content">{@html value}</div>
{/await}
