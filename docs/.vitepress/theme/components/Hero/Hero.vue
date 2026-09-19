<script setup lang="ts">
import { SidebarGroup, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';
import { type SharedData } from '@/types';
import { Link, usePage } from '@inertiajs/vue3';
import type { Component } from 'vue';
import { ChevronRight, LayoutGrid, type LucideIcon } from 'lucide-vue-next'

interface NavItem {
    title: string;
    url: string;
    icon: Component;
}

defineProps<{
    items: NavItem[];
}>();

const page = usePage<SharedData>();
</script>

<template>
    <div class="relative flex justify-center h-screen w-full overflow-hidden">
        <!-- Background video -->
        <video
            class="absolute inset-0 w-full object-cover"
            src="/videos/corporate.mp4"
            autoplay
            loop
            muted
            playsinline
        />
        
        <!-- Dark overlay (optional) -->
        <div class="absolute inset-0 bg-black/10 z-[1]"></div>
        
       <!-- Content - positioned just below center -->
        
          <!-- <div class="mx-auto h-full w-full flex flex-col justify-center max-w-7xl z-10">
             
                  <div class="relative">
                       
                      <p class="tracking-normal [word-spacing:0.3rem]" id="text1">{{ trans('home.text1') }}</p>
                      <p class="tracking-normal [word-spacing:0.3rem]" id="text2">{{ trans('home.text2') }}</p>
                      <p class="tracking-normal [word-spacing:0.3rem]" id="text3">{{ trans('home.text3') }}</p>
                      <Link href="/contact-us">
                        <Button class="mt-10 mr-2" variant="outline" size="lg">
                          {{ trans('button.hero.cta1') }}
                        </Button>
                      </Link>
                      <Link href="/about">
                        <Button variant="secondary" class="mt-4" size="lg">
                          {{ trans('button.hero.cta2') }}
                        </Button>
                      </Link>
                  </div>-->
              
          </div> 
</template>
