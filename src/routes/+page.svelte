<script>
  import CheckAuth from "../demo/auth/CheckAuth.svelte";
  import Todo from "../demo/todo/Todo.svelte";
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
  <li><Todo /></li>
</ul>
