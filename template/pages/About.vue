<template>
    <section class="container">
        <div>
            <logo/>
            <h1 class="title">
                {{ pageTitle }}
            </h1>
            <h2 class="subtitle">
                A simple "About" page.
            </h2>
            <br>
            <br>
            <br>
            <div class="links">
                <nuxt-link to="/" class="button--green" rel="noopener">Go Home</nuxt-link>
                <a href="https://github.com/RightBrainTechBD/nuxt-template-for-shared-hosting" target="_blank" class="button--grey" rel="noopener">GitHub</a>
            </div>
        </div>
    </section>
</template>

<script>
    import Logo from '~/components/Logo.vue'

    export default {
      components: {Logo},
      data () {
        return {
          pageTitle: 'About'
        }
      },
      mounted () {

      },
      methods: {

      },
      destroyed () {

      }
    }
</script>

<style>
    .container {
        min-height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
    }

    .title {
        font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
        display: block;
        font-weight: 300;
        font-size: 100px;
        color: #35495e;
        letter-spacing: 1px;
    }

    .subtitle {
        font-weight: 300;
        font-size: 42px;
        color: #526488;
        word-spacing: 5px;
        padding-bottom: 15px;
    }

    .links {
        padding-top: 15px;
    }
</style>
