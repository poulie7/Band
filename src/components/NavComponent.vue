<script>
</script>
<template>
  <main>
    <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/tour">Tour</RouterLink>
        <RouterLink to="/contact">Kontakt</RouterLink>
        <RouterLink to="/discography">Discography</RouterLink>
      </nav>
  </main>
</template>
<style scoped>
nav {
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: #fff;
  padding: 1rem;
}
nav a {
  text-decoration: none;
  color: #fff;
  font-size: 1.5rem;
}

nav a:hover {
  color: #000;
} 
</style>