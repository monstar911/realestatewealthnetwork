<template>
  <!-- Chat Toggle Button - Only show when chat is closed -->
  <button
    id="chat-toggle-button"
    class="z-[100] fixed top-[calc(50%_-_65px)] right-[10px] w-10 h-[130px] bg-[#c2183f] text-white text-sm font-medium border-none flex items-center justify-center rounded-xl cursor-pointer [writing-mode:vertical-rl] rotate-180 gap-1 shadow-[0_0_10px_3px_rgba(0,0,0,0.2)] hover:shadow-[0_0_10px_3px_rgba(0,0,0,0.3)] transition-all"
    @click="openChat"
    v-if="!isOpen"
  >
    <div
      class="min-w-[10px] min-h-[10px] max-w-[10px] max-h-[10px] bg-[#0dd265] rounded-full border-solid border-white border-[1.5px]"
    ></div>
    <span class="inline-block whitespace-nowrap">Chat with us!</span>
  </button>

  <Transition name="fade" id="chat-box">
    <div
      class="z-[100] fixed bottom-5 right-5 w-[calc(100%_-_40px)] max-w-[380px] h-[600px] bg-white rounded-lg shadow-[0_2px_10px_rgba(0,0,0,0.2)] flex flex-col text-black items-end"
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
      <div
        class="w-full overflow-y-scroll pl-[17px] pr-[13px] mr-[5px] pt-[15px] pb-[45px] flex flex-col items-center"
        id="chat"
      >
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
                  {{ agent.name.charAt(0) }}
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
              We are here to help!<br />
              <br />
              Holiday Hours<br />
              Friday, December 13: 8:30 to 12PM EST<br />
              Tuesday, December 24: 8:30 to 12PM EST<br />
              Wednesday, December 25: Closed<br />
              Wednesday, January 1: Closed<br />
              Happy Holidays!<br />
              <br />
              Below are our normal Client Support hours:<br />
              Monday-Friday: 8:30 AM EST to 5 PM EST<br />
              Weekends: Limited support primarily via email<br />
            </p>
          </div>
        </div>

        <!-- We run on Chatra -->
        <div
          class="absolute bottom-[60px] px-[6px] py-[3px] rounded-full bg-white"
        >
          <a
            class="text-[#5b66eb] p-0 text-xs flex items-center w-fit grayscale opacity-50 hover:opacity-100 hover:grayscale-0 cursor-pointer transition-all"
            href="https://chatra.com/?utm_source=logo_p&utm_campaign=US_realestatewealthnetwork.com&utm_medium=selfie_en_get"
          >
            <img src="../../src/assets/message.png" class="h-5" />
            We run on Chatra
          </a>
        </div>
      </div>

      <div
        class="absolute bottom-[40px] right-0 rounded-lg p-4 pb-10 w-[300px] h-[150px] bg-[url('../../src/assets/emoji.png')] grid grid-cols-7"
        v-if="isEmojiShowed"
      >
        <button
          class="p-0 bg-transparent border-none h-9 text-[25px] flex items-center justify-center hover:scale-125 transition-transform"
          style="outline: none"
          v-for="emoticon in emoticons"
          @click="addEmoji(emoticon)"
        >
          {{ emoticon }}
        </button>
      </div>

      <!-- Chat Input -->
      <div
        class="w-full px-[15px] py-[4.5px] border-t border-gray-200 flex items-center"
      >
        <input
          type="text"
          placeholder="Message..."
          v-model="message"
          @keyup.enter="sendMessage"
          @input="textChange"
          class="flex-grow px-[7.5px] py-[12px] border-none bg-transparent rounded text-[15px] outline-none"
        />
        <button
          class="bg-transparent border-none ursor-pointer grayscale opacity-50 hover:opacity-100 hover:grayscale-0 p-0 transition-all"
          style="outline: none"
          @click="toggleEmoji"
        >
          <img src="../../src/assets/emoticon.png" class="outline-none" />
        </button>
        <button
          class="bg-transparent border-none cursor-pointer grayscale opacity-50 hover:opacity-100 hover:grayscale-0 p-0 transition-all"
          style="outline: none"
          @click="sendMessage"
        >
          <img
            src="../../src/assets/send.png"
            class="outline-none"
            v-if="isFilled"
          />
          <img
            src="../../src/assets/link.png"
            class="outline-none"
            v-if="!isFilled"
          />
        </button>
      </div>
    </div>
  </Transition>
</template>

<script>
export default {
  name: "ChatBox",
  data() {
    return {
      isOpen: false,
      isFilled: false,
      isEmojiShowed: false,
      agents: [
        { id: 1, name: "Cassie", status: "online" },
        { id: 2, name: "Melonie", status: "online" },
      ],
      message: "",
      emoticons: [
        "😄",
        "😊",
        "😭",
        "😕",
        "😫",
        "😐",
        "😍",
        "😡",
        "😏",
        "😔",
        "😚",
        "😎",
        "😱",
        "😌",
        "👍",
        "👎",
        "👋",
        "👌",
        "✌️",
        "😇",
        "🦄",
      ],
    };
  },
  methods: {
    openChat() {
      this.isOpen = true;
    },
    textChange() {
      if (this.message.length > 0) {
        this.isFilled = true;
      } else {
        this.isFilled = false;
      }
    },
    closeChat() {
      this.isOpen = false;
    },
    toggleEmoji() {
      this.isEmojiShowed = !this.isEmojiShowed;
    },
    addEmoji(emoji) {
      this.isEmojiShowed = false;
      this.message = this.message + emoji;
      this.isFilled = true;
    },
    sendMessage() {
      if (this.message.trim()) {
        console.log("Message sent:", this.message);
        this.message = "";
        this.isFilled = false;
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

#chat {
  scrollbar-gutter: stable;
  transition: color 1s;
}

#chat::-webkit-scrollbar {
  background-color: transparent;
  width: 7px;
}

#chat::-webkit-scrollbar-button {
  width: 0;
  height: 0;
}

#chat::-webkit-scrollbar-track {
  margin: 10px;
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

* {
  outline: none;
}
</style>
