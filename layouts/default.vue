<template>
  <div class="container" id="body-container" :class="$store.state.displayAd!=0?'showTopbarAd':'hideTopbarAd'">
    <Header />
    <main>
      <nuxt />
    </main>
    <Footer />
  </div>
</template>
