<template>
  <div id="app">
    <h1>Create a travelgram</h1>
    <form @submit.prevent class="styled">
      <VInput v-model="travelgramId" label="Your travelgram ID:" />
      <VFile v-model="files" label="Select a file" multiple>
        <template #default="{ files, droppable }">
          <p v-if="droppable" aria-hidden="true">Go ahead, let go.</p>
          <p v-else-if="files.length" aria-hidden="true">
            {{ files.map(file => file.name) }}
          </p>
          <p v-else aria-hidden="true">Drop some photos of your trip here.</p>
        </template>
      </VFile>
      <p v-if="files.length">
        You have selected {{files.length}} photos.
      </p>
    </form>
    <div class="image-container">
      <ImageFromFile :file="file" v-for="(file, idx) in files" :key="idx" />
    </div>
  </div>
</template>

<script>
import ImageFromFile from './components/ImageFromFile'
export default {
  name: 'App',
  components: {
    ImageFromFile
  },
  data: () => ({
    travelgramId: '',
    files: [],
  })
}
</script>

<style lang="postcss">
@import url('https://fonts.googleapis.com/css?family=Open+Sans:300&display=swap');
@font-face {
    font-family: 'Cheddar Jack';
    src: url('./assets/fonts/CheddarJack.woff2') format('woff2'),
        url('./assets/fonts/CheddarJack.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
*, *:before, *:after {
  box-sizing: border-box;
}
html {
  font-size: 100%;
}
body {
  padding: 0;
  margin: 0;
  font-size: 1rem;
  font-family: 'Open Sans', sans-serif;
}
[id="app"] {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
h1 {
  font-family: 'Cheddar Jack'; font-weight: normal; font-style: normal;
  font-size: rfs(4rem);
  margin: 0;
}
form.styled {
  display: flex;
  flex-direction: column;
  margin: 2rem auto;
  padding: 2rem;
  width: 100%;
  max-width: 30rem;
  background-color: rgba(255, 255, 255, 0.5);
  border: 1px solid #ccc;
  border-radius: 1rem;
}
.vts-input__text,
.vts-file__text {
  display: block;
  font-size: rfs(1.1rem);
  font-weight: 300;
  margin-bottom: 0.4rem;
}

.vts-input__input {
  display: block;
  width: 100%;
  padding: 0.8rem 1rem;
  margin-bottom: rfs(2rem);
}

.vts-file__dropzone {
  display: flex;
  justify-content: center;
  border: 3px dashed #fc6d4b;
  border-radius: 5px;
  padding: 30px;
    background: url(http://travelgram.co/cdn.travelgram.co/medias/background/background-carreaux.jpg);

  transition: background-color 0.2s ease;
}

.vts-file--droppable .vts-file__dropzone {
  background: tomato;
}

.vts-file--selected .vts-file__dropzone {
  border-style: solid;
}
.image-container {
  position: absolute;
  z-index: -1;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  padding: 1rem 0;
  border-top: solid 1px #ccc;
  img {
    object-fit: cover;
    object-position: center;
    width: 10rem;
    height: 10rem;
    margin: 0 1rem;
    display: block;
  }
}
</style>
