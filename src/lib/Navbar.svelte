<script>
  import DarkTheme from "./DarkTheme.svelte";
  import { getLatestVersion } from "./version";
  import Menu from "./Menu.svelte";
  const data = getLatestVersion();
  let show = false;
  function showMenu() {
    show = true;
  }
</script>

<Menu {show} />

<nav class="navbar">
  <div class="navbar__top">
    <div class="navbar__top--left">
      {#await data then value}
        <span class="navbar__new-tag">New</span>
        <p>{value.version}</p>
      {/await}
    </div>
    <div class="navbar__top--right">
      <DarkTheme />
    </div>
  </div>
  <div class="navbar__bottom">
    <div class="navbar__bottom--left"><p>Smart Docs</p></div>
    <div class="navbar__bottom--right">
      <a class="navbar__signin" href="/">Customizer</a>
      {#await data then value}
        <a class="navbar__signup" href={value.url} download="smart">Download</a>
      {/await}
    </div>
    <div class="navbar__bottom--right--mobile">
      <button
        on:click={showMenu}
        class="navbar__hamburger-btn"
        id="menu-btn"
        data-target="menu"
        aria-label="menu"
      >
        <svg
          id="menu-icon"
          viewbox="0 0 24 24"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
      </button>
    </div>
  </div>
</nav>

<style>
</style>
