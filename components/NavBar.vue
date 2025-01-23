<template>
  <div>
    <div class="bg-green-300 w-[100%]">
      <div
        class="h-[100px] flex flex-row justify-between gap-4 items-center mr-[7px]"
      >
        <div class="pl-[30px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="30"
            width="30"
            viewBox="0 0 576 512"
          >
            <path
              fill=""
              d="M575.8 255.5c0 18-15 32.1-32 32.1l-32 0 .7 160.2c0 2.7-.2 5.4-.5 8.1l0 16.2c0 22.1-17.9 40-40 40l-16 0c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1L416 512l-24 0c-22.1 0-40-17.9-40-40l0-24 0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 64 0 24c0 22.1-17.9 40-40 40l-24 0-31.9 0c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2l-16 0c-22.1 0-40-17.9-40-40l0-112c0-.9 0-1.9 .1-2.8l0-69.7-32 0c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"
            />
          </svg>
        </div>
        <div class="flex items-center gap-6 pr-[30px]">
          <div
            class="search-bar flex justify-end items-center relative ml-[20px]"
          >
            <input
              v-model="searchTerm"
              type="text"
              placeholder="search...."
              class="p-[8px] pl-[30px] border-black rounded border-[1px]"
            />
            <button
              @click="handleSearch"
              class="bg-transparent border-none absolute cursor-pointer ml-[2px] text-[18px]"
            >
              <svg
                class="mr-5"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 512 512"
              >
                <path
                  fill="gary"
                  d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
                />
              </svg>
            </button>
            <div class="content">
              <p v-if="searchResults.length > 0">Results:</p>
              <ul v-if="searchResults.length > 0">
                <li v-for="(result, index) in searchResults" :key="index">
                  {{ result }}
                </li>
              </ul>
              <p v-else-if="searchTerm">
                No results found for "{{ searchTerm }}"
              </p>
            </div>
          </div>
          <div>
            <div class="relative">
              <a href="#login" @click="toggleloginDropdown">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  width="20"
                  viewBox="0 0 448 512"
                >
                  <path
                    fill="gray"
                    d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464l349.5 0c-8.9-63.3-63.3-112-129-112l-91.4 0c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304l91.4 0C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7L29.7 512C13.3 512 0 498.7 0 482.3z"
                  />
                </svg>
              </a>
            </div>
            <div
              class="w-[140px] absolute top-20 right-16 border bg-gray-700 px-6 py-4"
              v-if="loginDropdownOpen"
            >
              <ul class="text-gray-400 text-center">
                <li class="pb-1 hover:opacity-60">
                  <a href="#">Profile</a>
                </li>
                <li v-if="!loggedIn" class="pb-1 hover:opacity-60">
                  <NuxtLayout name="custom">
                    <NuxtLink to="/custom">Login</NuxtLink>
                  </NuxtLayout>
                </li>

                <li v-else class="pb-1 hover:opacity-60">
                  <NuxtLayout name="logout">
                    <NuxtLink to="/logout" @click="loggedIn = false"
                      >logout
                    </NuxtLink>
                  </NuxtLayout>
                </li>

                <li class="pb-1 hover:opacity-60">
                  <a href="#">Switch</a>
                </li>
              </ul>
            </div>
          </div>

          <div class="hover:to-black">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="20"
              width="20"
              viewBox="0 0 512 512"
            >
              <path
                fill="gray"
                d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z"
              />
            </svg>
          </div>
          <div class="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="20"
              width="20"
              viewBox="0 0 448 512"
            >
              <path
                fill="gray"
                d="M224 0c-17.7 0-32 14.3-32 32l0 19.2C119 66 64 130.6 64 208l0 25.4c0 45.4-15.5 89.5-43.8 124.9L5.3 377c-5.8 7.2-6.9 17.1-2.9 25.4S14.8 416 24 416l400 0c9.2 0 17.6-5.3 21.6-13.6s2.9-18.2-2.9-25.4l-14.9-18.6C399.5 322.9 384 278.8 384 233.4l0-25.4c0-77.4-55-142-128-156.8L256 32c0-17.7-14.3-32-32-32zm0 96c61.9 0 112 50.1 112 112l0 25.4c0 47.9 13.9 94.6 39.7 134.6L72.3 368C98.1 328 112 281.3 112 233.4l0-25.4c0-61.9 50.1-112 112-112zm64 352l-64 0-64 0c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7s18.7-28.3 18.7-45.3z"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
const searchTerm = ref("");
const searchResults = ref([]);

const pageContent = ref([]);

const handleSearch = () => {
  if (searchTerm.value) {
    searchResults.value = pageContent.value.filter((content) =>
      content.toLowerCase().includes(searchTerm.value.toLowerCase())
    );
  } else {
    searchResults.value = [];
  }
};

const loginDropdownOpen = ref(false);

const toggleloginDropdown = () => {
  loginDropdownOpen.value = !loginDropdownOpen.value;
};

const loggedIn = ref(null);

onMounted(() => {
  loggedIn.value = localStorage.getItem("loggedIn");
});
</script>
