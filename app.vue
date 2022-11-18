<script setup lang="ts">
import { Article } from '~/types'

const { find } = useStrapi()
const config = useRuntimeConfig()

const { data: articles, pending, refresh, error } = await useAsyncData(
  'articles',
  () => find<Article>('articles', { populate: 'Cover' })
)
</script>

<template>
  <div>
    <h1>Hello world</h1>
    <div v-if="pending">Loading articles...</div>
    <div v-else-if="error">An error occurred.</div>
    <div v-else>
      <ul>
        <li v-for="article in articles?.data" :key="article.id">
          <h2>
            {{ article.attributes.Title }}
          </h2>
          <p>
            {{ article.attributes.Excerpt }}
          </p>
          <img :src="`${config.public.strapi.url}${article.attributes.Cover.data.attributes.formats.thumbnail.url}`"
            :alt="article.attributes.Cover.data.attributes.alternativeText"
            :height="article.attributes.Cover.data.attributes.formats.thumbnail.height"
            :width="article.attributes.Cover.data.attributes.formats.thumbnail.width" />
        </li>
      </ul>
    </div>
  </div>
</template>
