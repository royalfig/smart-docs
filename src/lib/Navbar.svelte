<script>
  import Version from "./Version.svelte";
</script>

<nav>
  <div class="nav__left"><p>Smart Docs</p></div>
  <div class="nav__right">
    <Version />
  </div>
</nav>

<style>
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 2rem;
  }
</style>
