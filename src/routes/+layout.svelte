<script lang="ts">
  import { remult } from "remult";

  export let data;
  remult.user = data.remultUser;
</script>

<slot></slot>
