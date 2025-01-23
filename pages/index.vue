<template>
  <div>
    <div class="bg-gray-300 w-[100%] h-[100vh]">
      <div class="bg-blue-300 font-extralight rounded sidebar-container">
        <div class="sidebar-logo">
          <div class="logo black opacity-1 relative h-[100%] flex">
            <div class="flex">
              <img
                src="https://i.pinimg.com/736x/ee/3b/5b/ee3b5b2488ae85947c0ccb7a03bba0ce.jpg"
                alt="navbar brand"
                class="pt-0 pb-0 mb-1 mt-[8px] ml-1 h-[70px] w-[70px] rounded-full"
              />
              <p
                class="text-black flex justify-center items-center px-[15px] mt-[5px] text-xl font-normal relative mb-[3px] none"
              >
                𝓗𝓴 𝓼𝓱𝓪𝓻𝓮 & 𝓬𝓪𝓻𝓮
              </p>
            </div>
            <div
              class="flex justify-between left-[18rem] gap-12 items-center px-[15px] mt-[5px] text-xl font-normal relative mb-[3px] none"
            >
              <div class="flex">
                <button class="text-black">Home</button>
                <svg
                  class="mt-[6px]"
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 448 512"
                >
                  <path
                    d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"
                  />
                </svg>
              </div>
              <div class="flex">
                <button class="text-black">Course</button>
                <svg
                  class="mt-[6px]"
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 448 512"
                >
                  <path
                    d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"
                  />
                </svg>
              </div>
              <div class="flex">
                <button class="text-black">Contact</button>
                <svg
                  class="mt-[6px]"
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 448 512"
                >
                  <path
                    d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"
                  />
                </svg>
              </div>
              <div class="flex">
                <button class="text-black">Abouts</button>
                <svg
                  class="mt-[6px]"
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 448 512"
                >
                  <path
                    d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"
                  />
                </svg>
              </div>
              <div v-if="!loggedIn" class="pb-1 hover:opacity-60 ml-[200px]">
                <NuxtLayout name="custom">
                  <NuxtLink to="/custom">Login</NuxtLink>
                </NuxtLayout>
              </div>

              <div v-else class="pb-1 hover:opacity-60">
                <NuxtLayout name="logout">
                  <NuxtLink to="/logout">logout </NuxtLink>
                </NuxtLayout>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="p-3 m-3">
        <div class="flex justify-between">
          <div>
            <h1 class="text-2xl font-semibold">
              Geeting <span class="text-violet-500">Quality</span> Education Is
              Now
            </h1>
            <!-- <h1 class="text-2xl font-semibold"></h1> -->
            <h1 class="text-2xl font-semibold">
              More <span class="text-violet-500">Easy </span>
            </h1>
          </div>

          <div class="search-container">
            <input
              type="text"
              placeholder="What do you want to learn"
              v-model="query"
              class="search-input"
              @keydown.enter="searchCourse"
            />
            <button class="search-button" @click="searchCourse">
              Search Course
            </button>
          </div>
        </div>
      </div>

      <section class="p-6 bg-white rounded-lg shadow-lg m-3">
        <h2 class="text-xl font-semibold mb-4">Featured Courses</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="course in filteredCourses"
            :key="course.id"
            class="p-4 border rounded-lg"
          >
            <img
              :src="course.image"
              alt="Course Image"
              class="w-full h-[311px]; object-cover rounded-md mb-3"
            />
            <h3 class="text-lg font-semibold">{{ course.title }}</h3>
            <p class="text-sm text-gray-700">{{ course.description }}</p>
          </div>
        </div>
      </section>

      <div class="w-[100%] h-[100%] bg-gray-300">
        <section class="p-6 bg-gray-100 rounded-lg shadow-lg m-3">
          <h2 class="text-xl font-semibold text-center mb-4">
            Student Testimonials
          </h2>
          <div class="flex flex-col md:flex-row gap-[15.25rem]">
            <div
              v-for="testimonial in testimonials"
              :key="testimonial.id"
              class="p-4 border rounded-lg bg-white shadow"
            >
              <p class="text-sm gap-8 text-gray-700 italic">
                "{{ testimonial.text }}"
              </p>
              <div class="mt-3 text-right font-semibold text-violet-500">
                - {{ testimonial.author }}
              </div>
            </div>
          </div>
        </section>
        <section
          class="p-8 w-[80%] bg-blue-500 text-white rounded-lg shadow-lg m-[9rem] text-center"
        >
          <h2 class="text-xl font-semibold mb-2">Ready to Start Learning?</h2>
          <p class="text-sm mb-4">
            Join our community and gain access to top-quality educational
            resources.
          </p>
        </section>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
import { defineEmits } from "vue";

const query = ref("");

const emit = defineEmits(["search"]);

function searchCourse() {
  console.log(`Searching for: ${query.value}`);
  emit("search", query.value);
}
definePageMeta({
  layout: false,
});
const loggedIn = ref(null);
onMounted(() => {
  loggedIn.value = localStorage.getItem("loggedIn");
});
const courses = ref([
  {
    id: 1,
    title: "Web Development Basics",
    description: "Learn HTML, CSS, and JavaScript.",
    image:
      "https://statdprdprcitnslrs03.blob.core.windows.net/tns-assets/web/course_thumbnails/web_development.jpg",
  },
  {
    id: 2,
    title: "Advanced Vue.js",
    description: "Deep dive into Vue.js and its ecosystem.",
    image:
      "https://www.spec-india.com/wp-content/uploads/2023/05/Hire-Vuejs-Developer.png",
  },
  {
    id: 3,
    title: "Introduction to Data Science",
    description: "Start your journey in data science.",
    image:
      "https://srmmcet.edu.in/wp-content/uploads/2023/11/DATA-SCIENCE-USECASES-1.png",
  },
]);

const testimonials = ref([
  {
    id: 1,
    text: "This platform transformed my learning experience!",
    author: "Alice",
  },
  {
    id: 2,
    text: "The courses are top-notch and easy to follow.",
    author: "Bob",
  },
  { id: 3, text: "Great platform for learning new skills.", author: "Charlie" },
]);
const filteredCourses = computed(() => {
  if (!query.value) {
    return courses.value;
  }
  return courses.value.filter((course) =>
    course.title.toLowerCase().includes(query.value.toLowerCase())
  );
});
</script>
<style scoped>
.search-container {
  display: flex;
  align-items: center;
  background-color: #f2f2f2;
  padding: 10px;
  border-radius: 5px;
  width: 400px;
  height: 50px;
}

.search-input {
  border: none;
  outline: none;
  background: none;
  padding: 10px;
  font-size: 16px;
  flex-grow: 1;
}

.search-button {
  background-color: #4a4aff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
}

.search-input::placeholder {
  color: #aaa;
}
</style>
