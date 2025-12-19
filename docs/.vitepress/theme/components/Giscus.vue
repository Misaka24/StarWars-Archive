<script setup>
import { onMounted, watch } from 'vue';
import { useRoute } from 'vitepress';

const route = useRoute();
const insertGiscus = () => {
  const script = document.createElement('script');
  script.src = 'https://giscus.app/client.js';
  script.setAttribute('data-repo', 'Misaka24/StarWars-Archive-Comments');
  script.setAttribute('data-repo-id', 'R_kgDOQrc_1Q');
  script.setAttribute('data-category', 'Comments');
  script.setAttribute('data-category-id', 'DIC_kwDOQrc_1c4Cz_fM');
  script.setAttribute('data-mapping', 'pathname');
  script.setAttribute('data-strict', '0');
  script.setAttribute('data-reactions-enabled', '1');
  script.setAttribute('data-emit-metadata', '0');
  script.setAttribute('data-input-position', 'top');
  script.setAttribute('data-theme', 'dark'); 
  script.setAttribute('data-lang', 'zh-CN');
  script.setAttribute('data-loading', 'lazy');
  script.setAttribute('crossorigin', 'anonymous');
  script.async = true;
  document.getElementById('giscus-container')?.appendChild(script);
};

onMounted(() => {
  insertGiscus();
});

watch(
  () => route.path,
  () => {
    const iframe = document.querySelector('iframe.giscus-frame');
    if (!iframe) return;
    iframe.contentWindow.postMessage(
      {
        giscus: {
          setConfig: {
            term: route.path,
            theme: 'dark', 
          },
        },
      },
      'https://giscus.app'
    );
  }
);
</script>

<template>
  <div id="giscus-container" class="comments-wrapper">
    </div>
</template>

<style scoped>
.comments-wrapper {
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid var(--vp-c-divider);
}

:deep(.giscus) {
  --giscus-main-max-width: 100%;
}
</style>