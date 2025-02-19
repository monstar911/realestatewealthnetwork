<template>
  <div class="chat-box" :class="{ 'chat-box-open': isOpen }">
    <!-- Chat Toggle Button - Only show when chat is closed -->
    <button class="chat-toggle" @click="openChat" v-if="!isOpen">
      <span class="chat-toggle-text">Chat with us!</span>
    </button>

    <!-- Chat Window -->
    <Transition name="fade">
      <div class="chat-window" v-if="isOpen">
        <div class="chat-header">
          <div class="chat-header-text">
            <div class="green-badge"></div>
            Chat with us!
          </div>
          <span class="close-btn" @click="closeChat">×</span>
        </div>

        <!-- Agents Section -->
        <div class="agents-section">
          <div class="agent" v-for="agent in agents" :key="agent.id">
            <div class="agent-circle">
              <span>{{ agent.name.charAt(0) }}</span>
              <div class="status-dot"></div>
            </div>
            <div class="agent-name">{{ agent.name }}</div>
          </div>
        </div>

        <!-- Welcome Message -->
        <div class="welcome-message">
          <p class="help-text">We are here to help!</p>

          <div class="hours-info">
            <h4>Holiday Hours</h4>
            <p v-for="(hour, index) in holidayHours" :key="index">
              {{ hour }}
            </p>
          </div>

          <div class="normal-hours">
            <p>Below are our normal Client Support hours:</p>
            <p>Monday-Friday: 8:30 AM EST to 5 PM EST</p>
            <p>Weekends: Limited support primarily via email</p>
          </div>

          <div class="powered-by">
            <small>We run on Chatra</small>
          </div>
        </div>

        <!-- Chat Input -->
        <div class="chat-input">
          <input
            type="text"
            placeholder="Message..."
            v-model="message"
            @keyup.enter="sendMessage"
          />
          <button class="emoji-btn">😊</button>
          <button class="send-btn">→</button>
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
.chat-box {
  position: fixed;
  bottom: 50%;
  right: -20px;
  z-index: 1000;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  transform: translateY(50%);
}

.chat-toggle {
  background-color: #dc1431;
  color: white;
  border: none;
  padding: 16px 8px;
  border-radius: 4px 0 0 4px;
  cursor: pointer;
  font-weight: 500;
  font-size: 14px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  writing-mode: vertical-rl;
  transform: rotate(180deg);
}

.chat-toggle-text {
  display: inline-block;
  white-space: nowrap;
}

.chat-window {
  position: absolute;
  right: 40px;
  top: 50%;
  width: 320px;
  height: 480px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  color: #333;
  transform: translateY(-50%);
  visibility: visible;
  backface-visibility: hidden;
  will-change: transform, opacity, visibility;
}

.chat-header {
  padding: 8px;
  text-align: right;
  background-color: #dc1431;
  border-radius: 8px 8px 0 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.chat-header-text {
  display: flex;
  align-items: center;
  gap: 8px;
}

.green-badge {
  min-width: 10px;
  min-height: 10px;
  max-width: 10px;
  max-height: 10px;
  background-color: #2ecc71;
  border-radius: 50%;
}

.close-btn {
  font-size: 24px;
  cursor: pointer;
  color: #666;
  padding: 4px 12px;
}

.agents-section {
  padding: 0 20px 20px;
  display: flex;
  gap: 30px;
  justify-content: center;
}

.agent {
  text-align: center;
  position: relative;
}

.agent-circle {
  width: 48px;
  height: 48px;
  background: #f0f0f0;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 5px;
  position: relative;
}

.agent-circle span {
  font-size: 20px;
  color: #666;
}

.agent-name {
  font-size: 13px;
  color: #333;
}

.status-dot {
  width: 8px;
  height: 8px;
  background: #2ecc71;
  border-radius: 50%;
  position: absolute;
  bottom: 2px;
  right: 2px;
  border: 2px solid white;
}

.welcome-message {
  padding: 20px;
  flex-grow: 1;
  overflow-y: auto;
  font-size: 14px;
  line-height: 1.5;
  border-top: 1px solid #eee;
}

.help-text {
  text-align: center;
  margin-bottom: 20px;
  font-weight: 500;
}

.hours-info {
  margin: 15px 0;
}

.hours-info h4 {
  margin-bottom: 10px;
  font-weight: 600;
}

.powered-by {
  text-align: center;
  color: #999;
  font-size: 12px;
  margin-top: 20px;
}

.chat-input {
  padding: 12px;
  border-top: 1px solid #eee;
  display: flex;
  gap: 8px;
  align-items: center;
}

.chat-input input {
  flex-grow: 1;
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  outline: none;
}

.chat-input input:focus {
  border-color: #dc1431;
}

.emoji-btn,
.send-btn {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 18px;
  color: #666;
  padding: 4px;
}

.emoji-btn:hover,
.send-btn:hover {
  color: #dc1431;
}

/* Update the animation styles */
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
