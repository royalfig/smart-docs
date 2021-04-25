<script>
  // your script goes here
  export let show = false;
</script>

<!-- markup (zero or more items) goes here -->
{#if show}
  <nav class="modal" id="menu" aria-expanded="false">
    <div class="modal__container">
      <header class="modal__header">
        <button
          class="modal__close-btn"
          data-target="menu"
          aria-label="Close menu"
          tabindex="-1"
        >
          <svg
            id="close"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
        <h2 class="modal__title">Smart Docs</h2>
      </header>

      <footer class="modal__footer">
        <p>
          Designed by <a href="https://ryanfeigenbaum.com">Ryan Feigenbaum</a>
        </p>
      </footer>
    </div>
  </nav>
{/if}

<style>
  /* your styles go here */
</style>
