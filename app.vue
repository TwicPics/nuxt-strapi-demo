<script setup lang="ts">
import { Article } from '~/types'

const { find } = useStrapi()
const config = useRuntimeConfig()

const { data: articles, pending, error } = await useAsyncData(
  'articles',
  () => find<Article>('articles', { populate: 'Cover' })
)
const TWICPICS_PATH = 'local-strapi'
</script>

<template>
  <div>
    <h1>Hello world</h1>
    <div v-if="pending">Loading articles...</div>
    <div v-else-if="error">An error occurred.</div>
    <div v-else>
      <div v-for="article in articles?.data" :key="article.id">
        <h2>
          {{ article.attributes.Title }}
        </h2>
        <p>
          {{ article.attributes.Excerpt }}
        </p>
        <TwicImg :src="`${TWICPICS_PATH}${article.attributes.Cover.data.attributes.formats.thumbnail.url}`"
          :alt="article.attributes.Cover.data.attributes.alternativeText"
          :ratio="`${article.attributes.Cover.data.attributes.formats.thumbnail.width}:${article.attributes.Cover.data.attributes.formats.thumbnail.height}`"
          :style="{ height: `${article.attributes.Cover.data.attributes.formats.thumbnail.height}px`, width: `${article.attributes.Cover.data.attributes.formats.thumbnail.width}px` }"
          class="thumbnail" />
      </div>
    </div>
  </div>
</template>

