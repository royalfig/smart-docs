<script>
  const API = "https://api.github.com/repos/royalfig/smart/releases/latest";
  async function getLatestVersion() {
    const res = await fetch(API);
    const { tag_name, assets } = await res.json();

    return { version: tag_name, url: assets[0].browser_download_url };
  }

  const data = getLatestVersion();
  console.log(data.then((x) => console.log(x)));
</script>

{#await data then value}
  <a class="navbar__signup" href={value.url} download="smart"
    >Download {value.version}</a
  >
{/await}

<style>
</style>
