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

<div>
  {#await data then value}
    <p>{value.version}</p>
    <p>
      <a href={value.url} download="smart">Download</a>
    </p>
  {/await}
</div>

<style>
  div {
    display: flex;
  }

  p {
    margin-right: 1rem;
  }
</style>
