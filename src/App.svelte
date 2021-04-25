<script>
  import logo from "./assets/svelte.png";
  import Version from "./lib/Version.svelte";
  import Navbar from "./lib/Navbar.svelte";
  import Docs from "./lib/Docs.svelte";
  import Header from "./lib/Header.svelte";
  import Customizer from "./lib/Customizer.svelte"
</script>

<Navbar />

<Header />

<main class="outer-container">
  <div class="inner-container">
    <Docs />
    <Customizer />
  </div>
</main>

<style>
  :global(html) {
    font-family: "Lato";
  }
</style>
