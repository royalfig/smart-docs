<script>
  import DarkTheme from "./DarkTheme.svelte";
  // your script goes here
  let featured = 1;
  let latest = 2;
  let colorMode = 3;

  let presets = [
    { id: 0, text: `` },
    { id: 1, text: `Academia` },
    { id: 2, text: `Blog` },
    {
      id: 3,
      text: `Food`,
    },
    {
      id: 4,
      text: `Developer`,
    },
    {
      id: 5,
      text: `Designer`,
    },
    {
      id: 6,
      text: `Travel`,
    },
    {
      id: 7,
      text: `Music`,
    },
  ];

  let preset;

  let selectedPreset = "";

  let tag1 = "";
  let tag2 = "";
  let tag3 = "";
  let tag4 = "";
</script>

<!-- markup (zero or more items) goes here -->
<div class="post post__content">
  <h2>Customizer</h2>

  <h3>The Featured Section</h3>
  <p>
    By including a Featured section, you can select up to three posts to be
    showcased on the homepage of your site.
  </p>
  <p>
    Don't know how to <code>feature</code> a post? The option is included in the
    post editor. See Ghost's instructions for more info.
  </p>
  <div class="form-group radio-btns">
    <p><strong>Include a <code>Featured</code> section?</strong></p>
    <label>
      <input type="radio" group={featured} value={1} name="featured" checked />
      Yes
    </label>

    <label>
      <input type="radio" group={featured} value={2} name="featured" />
      No
    </label>
  </div>

  <h3>The Latest Section</h3>
  <p>
    The <code>Latest</code> section includes your five latest posts that aren't Featured
    or included in the custom sections you define below. If you don't include a Latest
    section, then posts not tagged with a category created below or included as Featured
    won't be included on your homepage. (The most recent post always show in the
    top left area of the navbar on larger devices.)
  </p>

  <div class="form-group radio-btns">
    <p><strong>Include a <code>Latest</code> section?</strong></p>
    <label>
      <input type="radio" group={latest} value={1} name="latest" checked />
      Yes
    </label>

    <label>
      <input type="radio" group={latest} value={2} name="latest" />
      No
    </label>
  </div>

  <h3>Set Your Default Color Mode</h3>
  <p>
    Smart Theme will first look to see if the user has set a system preference
    for dark or light mode and respect that preference. If the user changes the
    color mode, the theme will remember that choice and default to it.
  </p>

  <p>
    In cases where no preference is provided, either by the system or the user,
    you choose whether you want your site to default to dark or light mode.
  </p>

  <DarkTheme />

  <div class="form-group radio-btns">
    <p><strong>Choose your default theme</strong></p>
    <label>
      <input
        type="radio"
        group={colorMode}
        value={1}
        name="color-mode"
        checked
      />
      Dark
    </label>

    <label>
      <input type="radio" group={colorMode} value={2} name="color-mode" />
      Light
    </label>
  </div>

  <h3>Customize your categories</h3>
  <p>
    These custom categories will appear on your homepage in the order selected
    here. Each category will populate with up to the latest five posts tagged
    with the category name.
  </p>
  <p>Gotchas</p>
  <ul>
    <li>
      If you tag a post with two of your custom tags, then it will appear in
      whichever category comes first on your page.
    </li>
    <li>
      If you enabled the Featured section, then featured posts will not be
      included in your custom sections.
    </li>
  </ul>

  <a href="/"
    >See the documentation for detailed instuctions on how to use this feature</a
  >
  <div class="form-group">
    <p><strong>Choose a preset</strong></p>
    <select value={preset} on:change={() => (selectedPreset = "")}>
      {#each presets as preset}
        <option value={preset}>
          {preset.text}
        </option>
      {/each}
    </select>
  </div>

  <div class="form-group">
    <label for="tag1">Category 1</label>
    <input type="text" value={tag1} id="tag1" />
    <label for="tag2">Category 2</label>

    <input type="text" value={tag2} id="tag2" />
    <label for="tag3">Category 3</label>

    <input type="text" value={tag3} id="tag3" />
    <label for="tag4">Category 4</label>

    <input type="text" value={tag4} id="tag4" />
  </div>
</div>

<style>
  .form-group {
    padding: 1rem;
    border-radius: 4px;
    background-color: var(--surface2);
    margin: 1rem 0;
    border: 1px solid var(--text4);
  }

  .form-group label {
    display: flex;
    align-items: center;
    text-transform: initial;
    color: var(--text);
    font-weight: inherit;
    font-size: inherit;
    font-family: inherit;
    margin: 0;
  }

  .form-group label + label {
    margin-top: 1rem;
  }
  .form-group input[type="radio"] {
    margin-right: 0.25rem;
    height: 1rem;
    width: 1rem;
  }

  .form-group select {
    font-family: inherit;
    font-size: inherit;
    border-radius: 4px;
    padding: 0.25rem;
  }

  .form-group input[type="text"] {
    display: block;
    font-weight: inherit;
    font-size: inherit;
    font-family: inherit;
    border-radius: 4px;
    margin-bottom: 1rem;
    border: none;
    padding: 0.25rem;
  }
</style>
