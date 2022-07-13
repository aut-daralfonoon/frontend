<template>
  <footer class="footer">
    {{ "تهیه شده توسط انجمن علمی دانشجویی دانشکده مهندسی کامپیوتر دانشگاه صنعتی امیرکبیر" }}
  </footer>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped>
/* Style the footer with a background and some padding */
.footer {
  /* send footer to bottom of page */
  position:absolute;
  bottom:0;
  width: 100%;
  /* other styles */
  overflow: hidden;
  font-size: 0.7em;
  background-color: #efe1ba;
  text-align: center;
  padding: 10px;
}
</style>