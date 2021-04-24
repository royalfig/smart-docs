<script>
  import logo from "./assets/svelte.png";
  import Version from "./lib/Version.svelte";
  import Navbar from "./lib/Navbar.svelte";
  import Docs from "./lib/Docs.svelte";
</script>

<Navbar />

<header>
  <h1>Smart</h1>
  <p>Docs</p>
</header>

<main class="outer-container">
  <div class="inner-container">
    <Docs />
  </div>
</main>

<style>
  :global(html) {
    font-family: "Lato";
  }
</style>
