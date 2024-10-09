<script lang="ts">
  import { remult } from "remult";
</script>

{#if !remult.user}
  <div>Auth: ⌛</div>
{:else if remult.authenticated()}
  <div>
    Auth:✅ Hello {remult.user?.name}
    <pre>{JSON.stringify(remult.user)}</pre>
    <img src={remult.user.avatar_url} alt="Avatar" width="50" />
    <a href="/auth/signout">Sign Out</a>
  </div>
{:else}
  <div>
    Auth:✅ Not authenticated, <a href="/auth/signin">Sign In</a>
  </div>
{/if}
