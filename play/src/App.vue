<script setup lang="ts">
import {ref} from "vue";
import {CpCard, CpButton} from "@cyberpunk-vue/components";

const scriptExpanded = ref(false);
const scriptExpanded2 = ref(false);
const scriptExpanded3 = ref(false);
const scriptExpanded4 = ref(false);
const scriptExpanded5 = ref(false);
const scriptExpanded6 = ref(false);
const scriptExpanded7 = ref(false);
const scriptExpanded8 = ref(false);
</script>

<template>
  <div class="playground">
    <!--示例1：Grid 布局-->
    <div style="display:grid;">
      <cp-card title="Card 1" :collapse="!scriptExpanded" style="height: 100%">
        <template #extra>
          <cp-button @click="scriptExpanded = !scriptExpanded">{{scriptExpanded ? '折叠' : '展开'}}</cp-button>
        </template>
        Card 1 Content
      </cp-card>

      <cp-card title="Card 2" :collapse="!scriptExpanded2">
        <template #extra>
          <cp-button @click="scriptExpanded2 = !scriptExpanded2">{{scriptExpanded2 ? '折叠' : '展开'}}</cp-button>
        </template>
        Card 2 Content
      </cp-card>
    </div>

    <!--示例2：Flex 布局-->
    <div style="display: flex;flex-direction: column">
      <cp-card title="Card 3" :collapse="!scriptExpanded3" style="height: 100%">
        <template #extra>
          <cp-button @click="scriptExpanded3 = !scriptExpanded3">{{scriptExpanded3 ? '折叠' : '展开'}}</cp-button>
        </template>
        Card 3 Content
      </cp-card>

      <cp-card title="Card 4" :collapse="!scriptExpanded4">
        <template #extra>
          <cp-button @click="scriptExpanded4 = !scriptExpanded4">{{scriptExpanded4 ? '折叠' : '展开'}}</cp-button>
        </template>
        Card 4 Content
      </cp-card>
    </div>

    <!--示例3：普通布局-->
    <div>
      <cp-card title="Card 5" :collapse="!scriptExpanded5" style="height: 100%">
        <template #extra>
          <cp-button @click="scriptExpanded5 = !scriptExpanded5">{{scriptExpanded5 ? '折叠' : '展开'}}</cp-button>
        </template>
        Card 5 Content
      </cp-card>

      <cp-card title="Card 6" :collapse="!scriptExpanded6">
        <template #extra>
          <cp-button @click="scriptExpanded6 = !scriptExpanded6">{{scriptExpanded6 ? '折叠' : '展开'}}</cp-button>
        </template>
        Card 6 Content
      </cp-card>
    </div>

    <!--示例4：未确定高度-->
    <div>
      <div>
        <cp-card title="Card 7" :collapse="!scriptExpanded7" style="height: 100%">
          <template #extra>
            <cp-button @click="scriptExpanded7 = !scriptExpanded7">{{scriptExpanded7 ? '折叠' : '展开'}}</cp-button>
          </template>
          Card 7 Content
        </cp-card>

        <cp-card title="Card 8" :collapse="!scriptExpanded8">
          <template #extra>
            <cp-button @click="scriptExpanded8 = !scriptExpanded8">{{scriptExpanded8 ? '折叠' : '展开'}}</cp-button>
          </template>
          Card 8 Content
        </cp-card>
      </div>
    </div>

  </div>
</template>

<style scoped>
.playground {
  display: flex;
  padding: 50px;
  height: 100%;
  gap: 10px;
}

.playground > div {
  flex: 1;
}
</style>
