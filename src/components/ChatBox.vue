<template>
  <div
    class="fixed left-0 top-0 right-0 bottom-0 z-[1000] font-sans flex items-center"
    :class="{ 'chat-box-open': isOpen }"
  >
    <!-- Chat Toggle Button - Only show when chat is closed -->
    <button
      class="absolute right-[10px] w-10 h-[130px] bg-[#c2183f] text-white text-sm font-medium border-none flex items-center justify-center rounded-xl cursor-pointer [writing-mode:vertical-rl] rotate-180 gap-1 shadow-[0_0_10px_3px_rgba(0,0,0,0.2)] hover:shadow-[0_0_10px_3px_rgba(0,0,0,0.3)] transition-all"
      @click="openChat"
      v-if="!isOpen"
    >
      <div class="min-w-[10px] min-h-[10px] max-w-[10px] max-h-[10px] bg-[#0dd265] rounded-full border-solid border-white border-[1.5px]"></div>
      <span class="inline-block whitespace-nowrap">Chat with us!</span>
    </button>

    <Transition name="fade">
      <div
        class="absolute bottom-5 right-5 w-[calc(100%_-_40px)] max-w-[380px] h-[600px] bg-white rounded-lg shadow-[0_2px_10px_rgba(0,0,0,0.2)] flex flex-col text-black items-center"
        v-if="isOpen"
      >
        <!-- Header -->
        <div
          class="w-full text-right bg-[#c2183f] rounded-t-lg flex items-center justify-between py-[7.5px] shadow-[0_2px_10px_rgba(0,0,0,0.2)]"
        >
          <div class="flex items-center gap-1 text-white px-[15px]">
            <div
              class="min-w-[10px] min-h-[10px] max-w-[10px] max-h-[10px] bg-[#0dd265] rounded-full border-solid border-white border-[1.5px]"
            ></div>
            Chat with us!
          </div>
          <span
            class="text-base cursor-pointer text-white h-10 flex items-center justify-center px-5 opacity-50 hover:opacity-100"
            @click="closeChat"
            >×</span
          >
        </div>

        <!-- Body -->
        <div class="w-full overflow-y-scroll pl-3 pr-[18px] pt-[15px] pb-[45px] flex flex-col items-center" id="chat">
          <div
            class="w-full relative text-[15px] leading-relaxed flex flex-col items-center"
          >
          <div class="py-[22.5px] px-[15px] flex gap-[50px] justify-center">
            <div
              class="text-center relative"
              v-for="agent in agents"
              :key="agent.id"
            >
              <div
                class="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-[5px] relative"
              >
                <span class="text-[15px] font-bold">
                  {{agent.name.charAt(0)}}
                </span>
                <div
                  class="w-[10px] h-[10px] bg-[#2ecc71] rounded-full absolute bottom-1.5 right-1.5 border-[1.5px] border-white"
                ></div>
              </div>
              <div class="text-[15px]">{{ agent.name }}</div>
            </div>
          </div>

          <div class="py-[22.5px] px-[15px]">
            <p class="text-[15px]">
              We are here to help!<br/>
              <br/>
              Holiday Hours<br/>
              Friday, December 13: 8:30 to 12PM EST<br/>
              Tuesday, December 24: 8:30 to 12PM EST<br/>
              Wednesday, December 25: Closed<br/>
              Wednesday, January 1: Closed<br/>
              Happy Holidays!<br/>
              <br/>
              Below are our normal Client Support hours:<br/>
              Monday-Friday: 8:30 AM EST to 5 PM EST<br/>
              Weekends: Limited support primarily via email<br/>
              </p>
            </div>
          </div>

          <!-- We run on Chatra -->
          <div class="absolute bottom-[60px] text-[#5b66eb] text-xs flex items-center px-[6px] py-[3px] rounded-full bg-white w-fit grayscale hover:grayscale-0 cursor-pointer transition-all">
            <img src="../../src/assets/message.png" class="h-5"/>
            We run on Chatra
          </div>
        </div>

        <!-- Chat Input -->
        <div class="w-full px-[15px] py-[4.5px] border-t border-gray-200 flex items-center">
          <input
            type="text"
            placeholder="Message..."
            v-model="message"
            @keyup.enter="sendMessage"
            class="flex-grow px-[7.5px] py-[12px] border-none bg-transparent rounded text-sm outline-none"
          />
          <button
            class="bg-transparent border-none cursor-pointer grayscale hover:grayscale-0 p-0 transition-all"
          >
            <img src="../../src/assets/emoticon.png" />
          </button>
          <button
            class="bg-transparent border-none cursor-pointer grayscale hover:grayscale-0 p-0 transition-all"
          >
            <img src="../../src/assets/link.png" />
          </button>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script>
export default {
  name: "ChatBox",
  data() {
    return {
      isOpen: false,
      agents: [
        { id: 1, name: "Cassie", status: "online" },
        { id: 2, name: "Melonie", status: "online" },
      ],
    };
  },
  methods: {
    openChat() {
      this.isOpen = true;
    },
    closeChat() {
      this.isOpen = false;
    },
    sendMessage() {
      if (this.message.trim()) {
        console.log("Message sent:", this.message);
        this.message = "";
      }
    },
  },
};
</script>

<style scoped>
/* Animation styles */
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  transform-origin: right center;
  visibility: visible;
}

.fade-enter-from {
  opacity: 0;
  transform: translateY(-30%) scale(0);
  visibility: hidden;
}

.fade-leave-to {
  opacity: 0;
  transform: translateY(-30%) scale(0);
  visibility: hidden;
}

#chat::-webkit-scrollbar {
  background-color: transparent;
  width: 7px;
  height: 7px;
}

#chat::-webkit-scrollbar-thumb {
  background-color: transparent;
  border: 1px solid transparent;
  cursor: grab;
  border-radius: 10px;
}

#chat::-webkit-scrollbar-thumb:active {
  cursor: grabbing;
}

#chat:hover::-webkit-scrollbar-thumb {
  background-color: #e0e0e0;
  border: 1px solid #d0d0d0;
}
</style>
