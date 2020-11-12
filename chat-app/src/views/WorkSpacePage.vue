<template>
  {{workspace}}
  {{user.uid}}
  <h2>Work Space</h2>
  <div>
    <ul>
      <li v-for="(workspace, index) in workspaces" :key="index">
        <channelSelectButton @selected="workspaceSelected(workspace)" :channel="workspace.channel_name"></channelSelectButton>
      </li>
    </ul>
  </div>
  <channelCreateButton @added-channel="addWorkspace"></channelCreateButton>
  <register :workspace="workspace" :user="user"></register>
</template>

<style>
</style>


<script>

import channelCreateButton from '@/components/ChannelCreateButton.vue'
import channelSelectButton from '@/components/ChannelSelectButton.vue'

import register from '@/components/WorkSpaceRegister.vue'


export default {
  name: "WorksapcePage",
  props:{
    workspaces: Array,
    workspace: Object,
    user: Object
  },
  components:{
    channelCreateButton,
    channelSelectButton,
    register
  },
  data(){
    return{
    }
  },
  methods: {
    addWorkspace(newWorkspaceName){
      this.$emit("added-workspace",newWorkspaceName)
    },
    workspaceSelected(selectedWorkspace){
      this.$emit("selected-workspace", selectedWorkspace)
    },
  }
};
</script>
