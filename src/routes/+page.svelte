<script>
  import CheckAuth from "../modules/auth/svelte/CheckAuth.svelte";
</script>

<h1>Welcome to remult-sk-starter!</h1>

<ul>
  <li>
    <a href="https://kit.svelte.dev/">SvelteKit</a>,
    <a href="https://www.postgresql.org/">Postgres</a>,
    <a href="https://authjs.dev">auth.js</a>,
    <a href="https://remult.dev">remult</a>
  </li>
  <li><CheckAuth /></li>
  <li>Admin: <a href="/api/admin">Admin</a></li>
</ul>
