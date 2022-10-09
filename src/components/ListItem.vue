<template>
  <article class="p-4 sm:p-6 lg:p-4 xl:p-6 space-x-4 items-start sm:space-x-6 lg:space-x-4 xl:space-x-6 flex">
        <img :src="'https://image.tmdb.org/t/p/w400' + movie.poster_path" loading="lazy" decoding="async" alt="" width="60" height="88" class="flex-none rounded-md bg-slate-100 shadow-lg shadow-zinc-400" />
        <div class="min-w-0 relative flex-auto">
            <h2 class="font-semibold text-slate-900 truncate sm:pr-20 dark:text-slate-100">{{ movie.title }}</h2>
            <dl class="mt-2 flex flex-wrap text-sm leading-6 font-medium">
                <div class="hidden absolute top-0 right-0 sm:flex items-center space-x-1 dark:text-slate-100">
                    <dt class="text-sky-500">
                        <span class="sr-only">Star rating</span>
                        <svg width="16" height="20" fill="currentColor">
                            <path
                                d="M7.05 3.691c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.372 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.539 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.363-1.118L.98 9.483c-.784-.57-.381-1.81.587-1.81H5.03a1 1 0 00.95-.69L7.05 3.69z"
                            ></path>
                        </svg>
                    </dt>
                    <dd>{{ movie.vote_average }}</dd>
                </div>
                <div class="dark:text-slate-200">
                    <dt class="sr-only">Rating</dt>
                    <dd class="px-1.5 ring-1 ring-slate-200 rounded dark:ring-slate-600">{{ movie.original_language.toString().toUpperCase() }}</dd>
                </div>
                <div class="ml-2">
                    <dt class="sr-only">Year</dt>
                    <dd>{{ dayjs(movie.release_date).format('YYYY') }}</dd>
                </div>
                <div>
                    <dt class="sr-only">Genre</dt>
                    <dd class="flex items-center">
                        <svg width="2" height="2" fill="currentColor" class="mx-2 text-slate-300" aria-hidden="true"><circle cx="1" cy="1" r="1"></circle></svg>Comedy
                    </dd>
                </div>
                <div>
                    <dt class="sr-only">Runtime</dt>
                    <dd class="flex items-center">
                        <svg width="2" height="2" fill="currentColor" class="mx-2 text-slate-300" aria-hidden="true"><circle cx="1" cy="1" r="1"></circle></svg>1h 46m
                    </dd>
                </div>
                <div class="flex-none w-full mt-2 font-normal">
                    <dt class="sr-only">Cast</dt>
                    <dd class="text-slate-400">Simon Pegg, Zach Galifianakis</dd>
                </div>
            </dl>
        </div>
    </article>
</template>

<script setup lang="ts">
import dayjs from 'dayjs'

defineProps<{
  movie: any;
}>();
</script>
