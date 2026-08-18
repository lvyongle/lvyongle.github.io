<!-- .vitepress/components/PasswordProtect.vue -->
<!--
  使用方法：
  <PasswordProtect  title="私密文档访问验证"/>
-->
<script setup>
import { ref, onMounted } from 'vue'

const props = defineProps({
  password: {
    type: String,
    // required: true,
    default: 'lvyongle8848@163.com',
  },
  title: {
    type: String,
    default: '此页面需要密码访问'
  }
})

const isUnlocked = ref(false)
const inputPassword = ref('')
const errorMessage = ref('')

onMounted(() => {
  const saved = localStorage.getItem(`page_password_${props.password}`)
  if (saved === props.password) {
    isUnlocked.value = true
  }
})

const unlockPage = () => {
  if (inputPassword.value === props.password) {
    isUnlocked.value = true
    errorMessage.value = ''
    localStorage.setItem(`page_password_${props.password}`, props.password)
  } else {
    errorMessage.value = '密码错误，请重试'
    inputPassword.value = ''
  }
}
</script>

<template>
  <div v-if="!isUnlocked" class="password-protect">
    <div class="password-modal">
      <h3>🔒 {{ title }}</h3>
      <p class="hint">请输入密码以访问此页面</p>

      <div class="password-input-group">
        <input
            v-model="inputPassword"
            type="password"
            placeholder="请输入密码"
            @keyup.enter="unlockPage"
            class="password-input"
        />
        <button @click="unlockPage" class="unlock-btn">
          解锁
        </button>
      </div>

      <p v-if="errorMessage" class="error-message">
        {{ errorMessage }}
      </p>
    </div>
  </div>

  <div v-if="isUnlocked">
    <slot />
  </div>
</template>

<style scoped>
.password-protect {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(100, 100, 100, 0.99);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}

.dark .password-protect {
  background: rgba(30, 30, 30, 0.95);
}

.password-modal {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  text-align: center;
  max-width: 400px;
  width: 90%;
}

.dark .password-modal {
  background: #2d2d2d;
  color: #e0e0e0;
}

.password-modal h3 {
  margin-top: 0;
  margin-bottom: 1rem;
  color: #333;
}

.dark .password-modal h3 {
  color: #fff;
}

.hint {
  color: #666;
  margin-bottom: 1.5rem;
}

.dark .hint {
  color: #999;
}

.password-input-group {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.password-input {
  flex: 1;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
}

.dark .password-input {
  background: #1a1a1a;
  border-color: #444;
  color: #fff;
}

.unlock-btn {
  padding: 0.75rem 1.5rem;
  background: #3eaf7c;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  transition: background 0.3s;
}

.unlock-btn:hover {
  background: #359a6d;
}

.error-message {
  color: #f56c6c;
  margin: 0;
  font-size: 0.9rem;
}
</style>