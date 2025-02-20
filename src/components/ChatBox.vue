<template>
  <div
    class="fixed bottom-1/2 right-0 z-[1000] font-sans translate-y-1/2"
    :class="{ 'chat-box-open': isOpen }"
  >
    <!-- Chat Toggle Button - Only show when chat is closed -->
    <button
      class="bg-[#dc1431] text-white border-none py-4 px-2 rounded-r-md cursor-pointer font-medium text-sm shadow-sm [writing-mode:vertical-rl] rotate-180"
      @click="openChat"
      v-if="!isOpen"
    >
      <span class="inline-block whitespace-nowrap">Chat with us!</span>
    </button>

    <!-- Chat Window -->
    <Transition name="fade">
      <div
        class="absolute right-0 top-0 w-80 h-[480px] bg-white rounded-lg shadow-lg flex flex-col text-gray-800 -translate-y-1/2 visible backface-hidden [will-change:transform,opacity,visibility]"
        v-if="isOpen"
      >
        <div
          class="p-2 text-right bg-[#dc1431] rounded-t-lg flex items-center justify-between"
        >
          <div class="flex items-center gap-2">
            <div
              class="min-w-[10px] min-h-[10px] max-w-[10px] max-h-[10px] bg-[#2ecc71] rounded-full"
            ></div>
            Chat with us!
          </div>
          <span
            class="text-2xl cursor-pointer text-gray-600 px-3 py-1"
            @click="closeChat"
            >×</span
          >
        </div>

        <!-- Agents Section -->
        <div class="px-5 pb-5 flex gap-[30px] justify-center">
          <div
            class="text-center relative"
            v-for="agent in agents"
            :key="agent.id"
          >
            <div
              class="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-[5px] relative"
            >
              <span class="text-xl text-gray-600">{{
                agent.name.charAt(0)
              }}</span>
              <div
                class="w-2 h-2 bg-[#2ecc71] rounded-full absolute bottom-0.5 right-0.5 border-2 border-white"
              ></div>
            </div>
            <div class="text-sm text-gray-800">{{ agent.name }}</div>
          </div>
        </div>

        <!-- Welcome Message -->
        <div
          class="p-5 flex-grow overflow-y-auto text-sm leading-relaxed border-t border-gray-200"
        >
          <p class="text-center mb-5 font-medium">We are here to help!</p>

          <div class="my-4">
            <h4 class="mb-2.5 font-semibold">Holiday Hours</h4>
            <p v-for="(hour, index) in holidayHours" :key="index">
              {{ hour }}
            </p>
          </div>

          <div class="normal-hours">
            <p>Below are our normal Client Support hours:</p>
            <p>Monday-Friday: 8:30 AM EST to 5 PM EST</p>
            <p>Weekends: Limited support primarily via email</p>
          </div>

          <div class="text-center text-gray-400 text-xs mt-5">
            <small>We run on Chatra</small>
          </div>
        </div>

        <!-- Chat Input -->
        <div class="p-3 border-t border-gray-200 flex gap-2 items-center">
          <input
            type="text"
            placeholder="Message..."
            v-model="message"
            @keyup.enter="sendMessage"
            class="flex-grow px-3 py-2 border border-gray-300 rounded focus:border-[#dc1431] text-sm outline-none"
          />
          <button
            class="bg-transparent border-none cursor-pointer text-lg text-gray-600 p-1 hover:text-[#dc1431]"
          >
            😊
          </button>
          <button
            class="bg-transparent border-none cursor-pointer text-lg text-gray-600 p-1 hover:text-[#dc1431]"
          >
            →
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
      message: "",
      agents: [
        { id: 1, name: "Cassie", status: "online" },
        { id: 2, name: "Melonie", status: "online" },
      ],
      holidayHours: [
        "Friday, December 13: 8:30 to 12PM EST",
        "Tuesday, December 24: 8:30 to 12PM EST",
        "Wednesday, December 25: Closed",
        "Wednesday, January 1: Closed",
        "Happy Holidays!",
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
  transform: translateY(-50%) scale(0);
  visibility: hidden;
}

.fade-leave-to {
  opacity: 0;
  transform: translateY(-50%) scale(0);
  visibility: hidden;
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
  transform: translateY(-50%) scale(1);
  visibility: visible;
}
</style>
