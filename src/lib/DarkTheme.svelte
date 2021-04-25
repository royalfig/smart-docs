<script>
  function changeColorMode(e) {
    if (e.currentTarget.classList.contains("light")) {
      document.documentElement.setAttribute("color-mode", "light");
      localStorage.setItem("pref", "light");
      return;
    }
    document.documentElement.setAttribute("color-mode", "dark");
    localStorage.setItem("pref", "dark");
  }

  let hideButtons = false;
  if (!(window.CSS && CSS.supports("color", "var(--primary)"))) {
    hideButtons = true;
  }
</script>

<!-- markup (zero or more items) goes here -->
{#if !hideButtons}
  <button
    on:click={changeColorMode}
    class="color-mode-btn light"
    aria-label="Toggle light mode"
  >
    <svg
      aria-hidden="true"
      id="sun"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  </button>

  <button
    on:click={changeColorMode}
    class="color-mode-btn dark"
    aria-label="Toggle dark mode"
  >
    <svg
      aria-hidden="true"
      id="moon"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  </button>
  <button
    class="navbar__search"
    id="search-btn"
    data-target="search-modal"
    aria-label="Search"
  >
    <svg aria-hidden="true">
      <use href="#search" />
    </svg>
  </button>
{/if}

<style>
  /* your styles go here */
</style>
