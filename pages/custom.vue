<template>
  <div>
    <div class="flex justify-center p-8">
      <div
        class="container"
        id="container"
        :class="{
          'right-panel-active': isRightPanelActive,
          'left-Panel-active': isLeftPanelActive,
        }"
      >
        <div class="form-container sign-up-container">
          <form @submit.prevent="submitSignUp">
            <h1 class="text-3xl font-bold underline">Create Account</h1>
            <div class="social-container">
              <div class="flex gap-[10px]">
                <a href="#"
                  ><img
                    class="hover:bg-slate-300 rounded"
                    src="https://cdn4.iconfinder.com/data/icons/logos-brands-7/512/google_logo-google_icongoogle-512.png"
                    alt=""
                /></a>

                <a href="#"
                  ><svg
                    class="hover:bg-slate-300 rounded"
                    xmlns="http://www.w3.org/2000/svg"
                    height="40"
                    width="40"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="blue"
                      d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"
                    /></svg
                ></a>
                <a href="#"
                  ><svg
                    class="hover:bg-slate-300 rounded"
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 448 512"
                  >
                    <path
                      fill="#007bb5"
                      d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
                    /></svg
                ></a>
                <a href="#">
                  <svg
                    class="hover:bg-slate-300 rounded"
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 448 512"
                  >
                    <path
                      fill="brown"
                      d="M194.4 211.7a53.3 53.3 0 1 0 59.3 88.7 53.3 53.3 0 1 0 -59.3-88.7zm142.3-68.4c-5.2-5.2-11.5-9.3-18.4-12c-18.1-7.1-57.6-6.8-83.1-6.5c-4.1 0-7.9 .1-11.2 .1c-3.3 0-7.2 0-11.4-.1c-25.5-.3-64.8-.7-82.9 6.5c-6.9 2.7-13.1 6.8-18.4 12s-9.3 11.5-12 18.4c-7.1 18.1-6.7 57.7-6.5 83.2c0 4.1 .1 7.9 .1 11.1s0 7-.1 11.1c-.2 25.5-.6 65.1 6.5 83.2c2.7 6.9 6.8 13.1 12 18.4s11.5 9.3 18.4 12c18.1 7.1 57.6 6.8 83.1 6.5c4.1 0 7.9-.1 11.2-.1c3.3 0 7.2 0 11.4 .1c25.5 .3 64.8 .7 82.9-6.5c6.9-2.7 13.1-6.8 18.4-12s9.3-11.5 12-18.4c7.2-18 6.8-57.4 6.5-83c0-4.2-.1-8.1-.1-11.4s0-7.1 .1-11.4c.3-25.5 .7-64.9-6.5-83l0 0c-2.7-6.9-6.8-13.1-12-18.4zm-67.1 44.5A82 82 0 1 1 178.4 324.2a82 82 0 1 1 91.1-136.4zm29.2-1.3c-3.1-2.1-5.6-5.1-7.1-8.6s-1.8-7.3-1.1-11.1s2.6-7.1 5.2-9.8s6.1-4.5 9.8-5.2s7.6-.4 11.1 1.1s6.5 3.9 8.6 7s3.2 6.8 3.2 10.6c0 2.5-.5 5-1.4 7.3s-2.4 4.4-4.1 6.2s-3.9 3.2-6.2 4.2s-4.8 1.5-7.3 1.5l0 0c-3.8 0-7.5-1.1-10.6-3.2zM448 96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96zM357 389c-18.7 18.7-41.4 24.6-67 25.9c-26.4 1.5-105.6 1.5-132 0c-25.6-1.3-48.3-7.2-67-25.9s-24.6-41.4-25.8-67c-1.5-26.4-1.5-105.6 0-132c1.3-25.6 7.1-48.3 25.8-67s41.5-24.6 67-25.8c26.4-1.5 105.6-1.5 132 0c25.6 1.3 48.3 7.1 67 25.8s24.6 41.4 25.8 67c1.5 26.3 1.5 105.4 0 131.9c-1.3 25.6-7.1 48.3-25.8 67z"
                    /></svg
                ></a>
              </div>
            </div>
            <span class="underline">or use your email for registration</span>
            <input
              type="text"
              placeholder="Name"
              v-model="signUpData.name"
              required
            />
            <input
              type="email"
              placeholder="Email"
              v-model="signUpData.email"
              required
            />
            <input
              type="number"
              placeholder="phone"
              v-model="signUpData.phone"
              required
              @input="validatePhone"
              :class="{ 'border-red-500': phoneError }"
            />
            <span v-if="phoneError" class="text-red-500 text-sm"
              >Invalid phone number</span
            >

            <input
              type="password"
              placeholder="Password"
              v-model="signUpData.password"
              required
            />
            <button @click="handleSignup">Sign Up</button>
          </form>
        </div>
        <div class="form-container sign-in-container">
          <form @submit.prevent="submitSignIn">
            <h1 class="font-bold text-3xl underline">Sign In</h1>
            <div class="social-container">
              <div class="flex gap-[10px]">
                <a href="#"
                  ><img
                    src="https://cdn4.iconfinder.com/data/icons/logos-brands-7/512/google_logo-google_icongoogle-512.png"
                    alt=""
                /></a>

                <a href="#"
                  ><svg
                    class="hover:bg-slate-300 rounded"
                    xmlns="http://www.w3.org/2000/svg"
                    height="40"
                    width="40"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="blue"
                      d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"
                    /></svg
                ></a>
                <a href="#"
                  ><svg
                    class="hover:bg-slate-300 rounded"
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 448 512"
                  >
                    <path
                      fill="#007bb5"
                      d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
                    /></svg
                ></a>
                <a href="#">
                  <svg
                    class="hover:bg-slate-300 rounded"
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 448 512"
                  >
                    <path
                      fill="brown"
                      d="M194.4 211.7a53.3 53.3 0 1 0 59.3 88.7 53.3 53.3 0 1 0 -59.3-88.7zm142.3-68.4c-5.2-5.2-11.5-9.3-18.4-12c-18.1-7.1-57.6-6.8-83.1-6.5c-4.1 0-7.9 .1-11.2 .1c-3.3 0-7.2 0-11.4-.1c-25.5-.3-64.8-.7-82.9 6.5c-6.9 2.7-13.1 6.8-18.4 12s-9.3 11.5-12 18.4c-7.1 18.1-6.7 57.7-6.5 83.2c0 4.1 .1 7.9 .1 11.1s0 7-.1 11.1c-.2 25.5-.6 65.1 6.5 83.2c2.7 6.9 6.8 13.1 12 18.4s11.5 9.3 18.4 12c18.1 7.1 57.6 6.8 83.1 6.5c4.1 0 7.9-.1 11.2-.1c3.3 0 7.2 0 11.4 .1c25.5 .3 64.8 .7 82.9-6.5c6.9-2.7 13.1-6.8 18.4-12s9.3-11.5 12-18.4c7.2-18 6.8-57.4 6.5-83c0-4.2-.1-8.1-.1-11.4s0-7.1 .1-11.4c.3-25.5 .7-64.9-6.5-83l0 0c-2.7-6.9-6.8-13.1-12-18.4zm-67.1 44.5A82 82 0 1 1 178.4 324.2a82 82 0 1 1 91.1-136.4zm29.2-1.3c-3.1-2.1-5.6-5.1-7.1-8.6s-1.8-7.3-1.1-11.1s2.6-7.1 5.2-9.8s6.1-4.5 9.8-5.2s7.6-.4 11.1 1.1s6.5 3.9 8.6 7s3.2 6.8 3.2 10.6c0 2.5-.5 5-1.4 7.3s-2.4 4.4-4.1 6.2s-3.9 3.2-6.2 4.2s-4.8 1.5-7.3 1.5l0 0c-3.8 0-7.5-1.1-10.6-3.2zM448 96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96zM357 389c-18.7 18.7-41.4 24.6-67 25.9c-26.4 1.5-105.6 1.5-132 0c-25.6-1.3-48.3-7.2-67-25.9s-24.6-41.4-25.8-67c-1.5-26.4-1.5-105.6 0-132c1.3-25.6 7.1-48.3 25.8-67s41.5-24.6 67-25.8c26.4-1.5 105.6-1.5 132 0c25.6 1.3 48.3 7.1 67 25.8s24.6 41.4 25.8 67c1.5 26.3 1.5 105.4 0 131.9c-1.3 25.6-7.1 48.3-25.8 67z"
                    /></svg
                ></a>
              </div>
            </div>
            <span class="underline">or use your account</span>
            <input
              type="email"
              placeholder="Email"
              v-model="signInData.email"
              required
            />
            <input
              type="password"
              placeholder="Password"
              v-model="signInData.password"
              required
            />
            <a href="#">Forgot your password?</a>
            <button class="ghost" @click="submitSignIn" id="signIn">
              Sign In
            </button>
          </form>
        </div>
        <div class="overlay-container">
          <div class="overlay">
            <div class="overlay-panel overlay-left">
              <h1 class="font-bold text-2xl">Welcome Back!</h1>
              <p class="font-serif">
                To keep connected with us please login with your personal info
              </p>
              <button @click="togglePanel('signIn')" class="ghost" id="signIn">
                Sign In
              </button>
            </div>
            <div class="overlay-panel overlay-right">
              <h1 class="text-red-400 text-4xl">Hello, Friend!</h1>
              <p class="text-red-400 font-medium text-2xl">
                Enter your personal details and start journey with us
              </p>
              <div class="">
                <button
                  @click="togglePanel('signUp')"
                  class="ghost bg-red-400"
                  id="signUp"
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <slot />
  </div>
</template>

<script setup>
import { ref } from "vue";

definePageMeta({
  layout: false,
  middleware: "guest",
});

const signUpData = ref({
  name: "",
  email: "",
  phone: "",
  password: "",
});
const signInData = ref({
  email: "",
  password: "",
});

const phoneError = ref(false);

const validatePhone = () => {
  const phone = signUpData.value.phone;
  const phonePattern = /^\d{10}$/;

  phoneError.value = !phonePattern.test(phone);
};

const isRightPanelActive = ref(false);
const isLeftPanelActive = ref(false);
const togglePanel = (panel) => {
  isRightPanelActive.value = panel === "signUp";
  isLeftPanelActive.value = panel === "signIn";
};

const handleSignup = () => {
  localStorage.setItem("email", signUpData.value.email);
  localStorage.setItem("name", signUpData.value.name);
  localStorage.setItem("phone", signUpData.value.phone);
  localStorage.setItem("password", signUpData.value.password);
  signUpData.value = {
    name: "",
    email: "",
    phone: "",
    password: "",
  };
};

const submitSignUp = () => {
  console.log("Sign up data:", signUpData.value);
};

const submitSignIn = () => {
  const email1 = localStorage.getItem("email");
  const password1 = localStorage.getItem("password");
  if (
    signInData.value.email === email1 &&
    signInData.value.password === password1
  ) {
    localStorage.setItem("loggedIn", true);
    window.location.href = "/dashboard";
  } else {
    alert("Email or password is incorrect");
  }
  console.log("Sign in data:", signInData.value);
};
</script>

<style scoped>
img {
  border: 0px solid #ddd;
  border-radius: 0px;
  padding: 0px;
  width: 100px;
  height: 100px;
}

* {
  box-sizing: border-box;
}

body {
  background: #f6f5f7;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: "Montserrat", sans-serif;
  height: 100vh;
  margin: -20px 0 50px;
}

h1 {
  font-weight: bold;
}

h2 {
  text-align: center;
}

p {
  font-size: 15px;
  font-weight: 50px;
  line-height: 20px;
  letter-spacing: 0.5px;
  margin-bottom: 40px;
}

span {
  font-size: 12px;
}

a {
  color: #333;
  font-size: 14px;
  text-decoration: none;
  margin: 15px 0;
}
a img {
  width: 40px;
  height: 40px;
}

button {
  border-radius: 20px;
  border: 1px solid #ff4b2b;
  background-color: #ff4b2b;
  color: #ffffff;
  font-size: 12px;
  font-weight: bold;
  padding: 12px 45px;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: transform 80ms ease-in;
}

button:active {
  transform: scale(0.95);
}

button:focus {
  outline: none;
}

button.ghost {
  border-color: #ffffff;
}

form {
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 50px;
  height: 100%;
  text-align: center;
}

input {
  background-color: #eee;
  border: none;
  padding: 12px 15px;
  margin: 8px 0;
  width: 100%;
}

input:hover {
  opacity: 0.7;
  cursor: pointer;
}

.container {
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  position: relative;
  overflow: hidden;
  width: 768px;
  max-width: 100%;
  min-height: 480px;
}

.form-container {
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;
}

.sign-in-container {
  left: 0;
  width: 50%;
  z-index: 2;
}

.container.right-panel-active .sign-in-container {
  transform: translateX(100%);
}

.sign-up-container {
  left: 0;
  width: 50%;
  opacity: 0;
  z-index: 1;
}

.container.right-panel-active .sign-up-container {
  transform: translateX(100%);
  opacity: 1;
  z-index: 5;
  animation: show 0.6s;
}

@keyframes show {
  0%,
  49.99% {
    opacity: 0;
    z-index: 1;
  }

  50%,
  100% {
    opacity: 1;
    z-index: 5;
  }
}
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.overlay-container {
  position: absolute;

  top: 0;
  left: 50%;
  width: 50%;
  height: 100%;
  overflow: hidden;
  transition: transform 0.6s ease-in-out;
  z-index: 100;
}

.container.right-panel-active .overlay-container {
  transform: translateX(-100%);
}

.overlay {
  background-image: url(https://www.truthscreen.com/theme/Truthscreen/img/login-img.jpg);
  background-image: -webkit-linear-gradient(to right, url(https://www.truthscreen.com/theme/Truthscreen/img/login-img.jpg));
  background-image: linear-gradient(to right, url(https://www.truthscreen.com/theme/Truthscreen/img/login-img.jpg));
  background-size: cover;
  background-position: 0 0;
  color: #ffffff;
  position: relative;
  left: -100%;
  height: 100%;
  width: 200%;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
}

.container.right-panel-active .overlay {
  transform: translateX(50%);
}

.overlay-panel {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 40px;
  text-align: center;
  top: 0;
  height: 100%;
  width: 50%;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
}

.overlay-left {
  transform: translateX(-20%);
  background-color: rgba(222, 190, 190, 0.4);
}

.container.right-panel-active .overlay-left {
  transform: translateX(0);
}

.overlay-right {
  right: 0;

  transform: translateX(0);
  background-color: rgba(222, 190, 190, 0.4);
}

.container.right-panel-active .overlay-right {
  transform: translateX(20%);
}

.social-container {
  margin: 13px 0;
}

footer i {
  color: red;
}

footer a {
  color: #3c97bf;
  text-decoration: none;
}
.container-main {
  width: calc(100% - 265px) !important;
}
.home-section {
  height: calc(100vh - 100px) !important;
  overflow-y: scroll;
}

.setting-display {
  position: absolute !important;
  top: 50% !important;
  left: 96% !important;
}
</style>
