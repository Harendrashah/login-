<template>
  <div>
    <div
      class="bg-black font-extralight rounded sidebar-container"
      :class="isCollapsed ? ' w-[265px]' : ' w-[100px]'"
    >
      <div :class="{ collapsed: isCollapsed }">
        <div class="sidebar-logo">
          <NuxtLink to="/" class="logo black opacity-1 relative h-[100%] flex">
            <div v-if="isCollapsed" class="flex">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Emblem_of_Nepal.svg/375px-Emblem_of_Nepal.svg.png"
                alt="navbar brand"
                class="pt-0 pb-0 mt-[8px] mr-0 h-[50px]"
              />
              <p
                class="text-white flex justify-center items-center px-[25px] mt-[5px] text-xl font-normal relative mb-[3px] none"
              >
                Nepal
              </p>
            </div>
            <div
              class="flex justify-end items-end px-[30px]"
              @click="toggleSidebar"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="40"
                width="30"
                viewBox="0 0 448 512"
              >
                <path
                  fill="white"
                  d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"
                />
              </svg>
            </div>
          </NuxtLink>
        </div>
      </div>
      <div class="slidebar-content !pt-0 !pb-[60px]">
        <ul class="nav float-none mt-[20px]">
          <li class="nav-item list-item">
            <NuxtLink
              to="/"
              class="flex items-center py-[6px] px-[25px] text-xl font-normal relative mb-[3px] none hover:bg-gray-500"
            >
              <!-- <div class="flex items-center"> -->
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="25"
                width="20"
                viewBox="0 0 576 512"
              >
                <path
                  class="hover:fill-blue-500"
                  fill="gray"
                  d="M543.8 287.6c17 0 32-14 32-32.1c1-9-3-17-11-24L512 185l0-121c0-17.7-14.3-32-32-32l-32 0c-17.7 0-32 14.3-32 32l0 36.7L309.5 7c-6-5-14-7-21-7s-15 1-22 8L10 231.5c-7 7-10 15-10 24c0 18 14 32.1 32 32.1l32 0 0 69.7c-.1 .9-.1 1.8-.1 2.8l0 112c0 22.1 17.9 40 40 40l16 0c1.2 0 2.4-.1 3.6-.2c1.5 .1 3 .2 4.5 .2l31.9 0 24 0c22.1 0 40-17.9 40-40l0-24 0-64c0-17.7 14.3-32 32-32l64 0c17.7 0 32 14.3 32 32l0 64 0 24c0 22.1 17.9 40 40 40l24 0 32.5 0c1.4 0 2.8 0 4.2-.1c1.1 .1 2.2 .1 3.3 .1l16 0c22.1 0 40-17.9 40-40l0-16.2c.3-2.6 .5-5.3 .5-8.1l-.7-160.2 32 0z"
                />
              </svg>

              <div class="flex justify-between w-full" v-if="isCollapsed">
                <p class="text-white pl-[15px]">Dashboard</p>
                <!-- </div> -->
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="15"
                  width="15"
                  viewBox="0 0 320 512"
                >
                  <path
                    fill="gray"
                    d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"
                  />
                </svg>
              </div>
            </NuxtLink>
          </li>
          <h4
            class="text-gray-400 m-[15px] py-[6px] font-none relative mb-[10px] uppercase font-bold"
          >
            <div class="flex w-full justify-between" v-if="isCollapsed">
              Components
              <hr class="ml-2 w-full" />
            </div>
          </h4>

          <div>
            <a
              href="#base"
              @click="toggleBaseDropdown"
              class="flex items-center justify-between py-[6px] px-[25px] text-xl font-normal relative mb-[3px] none hover:bg-gray-500 cursor-pointer"
            >
              <!-- <div class="flex items-center"> -->
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="15"
                width="15"
                viewBox="0 0 576 512"
              >
                <path
                  class="hover:fill-blue-500"
                  fill="gray"
                  d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"
                />
              </svg>
              <div class="flex justify-between w-full" v-if="isCollapsed">
                <p class="text-white pl-[15px]">Base</p>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="15"
                  width="15"
                  viewBox="0 0 320 512"
                >
                  <path
                    fill="gray"
                    d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"
                  />
                </svg>
              </div>
            </a>
            <ul
              v-if="baseDropdownOpen"
              class="pl-6 ml-[45px] text-gray-400 nav-droplist list-disc"
            >
              <li class="pb-1">
                <a href="#">Avatars</a>
              </li>
              <li class="pb-1">
                <a href="#">Buttons</a>
              </li>
              <li class="pb-1">
                <a href="#">Grid System</a>
              </li>
              <li class="pb-1">
                <a href="#">Panels</a>
              </li>
              <li class="pb-1">
                <a href="#">Notifications</a>
              </li>
              <li class="pb-1">
                <a href="#">Sweet Alert</a>
              </li>
              <li class="pb-1">
                <a href="#">Font Awesome Icons</a>
              </li>
              <li class="pb-1">
                <a href="#" class="">Simple Line Icons</a>
              </li>
              <li class="pb-1">
                <a href="#">Typography</a>
              </li>
            </ul>
          </div>
          <a
            href="#sidebar"
            @click="toggleSidebarDropdown"
            class="cursor-pointer flex items-center justify-between py-[6px] px-[25px] text-xl font-normal relative mb-[3px] none hover:bg-gray-500"
          >
            <!-- <div class="flex items-center"> -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="15"
              width="15"
              viewBox="0 0 512 512"
            >
              <path
                class="hover:fill-blue-500"
                fill="gray"
                d="M40 48C26.7 48 16 58.7 16 72l0 48c0 13.3 10.7 24 24 24l48 0c13.3 0 24-10.7 24-24l0-48c0-13.3-10.7-24-24-24L40 48zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L192 64zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-288 0zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-288 0zM16 232l0 48c0 13.3 10.7 24 24 24l48 0c13.3 0 24-10.7 24-24l0-48c0-13.3-10.7-24-24-24l-48 0c-13.3 0-24 10.7-24 24zM40 368c-13.3 0-24 10.7-24 24l0 48c0 13.3 10.7 24 24 24l48 0c13.3 0 24-10.7 24-24l0-48c0-13.3-10.7-24-24-24l-48 0z"
              />
            </svg>
            <div class="flex justify-between w-full" v-if="isCollapsed">
              <p class="text-white pl-[15px]">Sidebar Layout</p>
              <!-- </div> -->
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="15"
                width="15"
                viewBox="0 0 320 512"
              >
                <path
                  fill="gray"
                  d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"
                />
              </svg>
            </div>
          </a>
          <ul
            v-if="sidebarDropdownOpen"
            class="pl-6 ml-[45px] text-gray-400 nav-droplist list-disc"
          >
            <li class="pb-1">
              <a href="#">Icon Bar</a>
            </li>
            <li class="pb-1">
              <NuxtLink to="/cardPage"> card </NuxtLink>
            </li>
            <li class="pb-1">
              <NuxtLink to="/">Follower</NuxtLink>
            </li>
            <li class="pb-1">
              <a href="#">Following</a>
            </li>
            <li class="pb-1">
              <a href="#">Revenue</a>
            </li>
          </ul>
          <a
            href="#forms"
            class="flex items-center justify-between py-[6px] px-[25px] text-xl font-normal relative mb-[3px] none hover:bg-gray-500"
          >
            <!-- <div class="flex items-center"> -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="15"
              width="15"
              viewBox="0 0 512 512"
            >
              <path
                class="hover:fill-blue-500"
                fill="gray"
                d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160L0 416c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-96c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7-14.3 32-32 32L96 448c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 64z"
              />
            </svg>
            <div class="flex justify-between w-full" v-if="isCollapsed">
              <p class="text-white pl-[15px]">Forms</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="15"
                width="15"
                viewBox="0 0 320 512"
              >
                <path
                  class="hover:fill-blue-500"
                  fill="gray"
                  d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"
                />
              </svg>
            </div>
          </a>
          <a
            href="#tables"
            class="flex items-center justify-between py-[6px] px-[25px] text-xl font-normal relative mb-[3px] none hover:bg-gray-500"
          >
            <!-- <div class="flex items-center"> -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="15"
              width="15"
              viewBox="0 0 512 512"
            >
              <path
                class="hover:fill-blue-500"
                fill="gray"
                d="M64 256l0-96 160 0 0 96L64 256zm0 64l160 0 0 96L64 416l0-96zm224 96l0-96 160 0 0 96-160 0zM448 256l-160 0 0-96 160 0 0 96zM64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32z"
              />
            </svg>
            <div class="flex justify-between w-full" v-if="isCollapsed">
              <p class="text-white pl-[15px]">Table</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="15"
                width="15"
                viewBox="0 0 320 512"
              >
                <path
                  fill="gray"
                  d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"
                />
              </svg>
            </div>
          </a>
          <a
            href="#maps"
            class="flex items-center justify-between py-[6px] px-[25px] text-xl font-normal relative mb-[3px] none hover:bg-gray-500"
          >
            <!-- <div class="flex items-center"> -->

            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="15"
              width="15"
              viewBox="0 0 384 512"
            >
              <path
                class="hover:fill-blue-500"
                fill="gray"
                d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"
              />
            </svg>
            <div class="flex justify-between w-full" v-if="isCollapsed">
              <p class="text-white pl-[15px]">Maps</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="15"
                width="15"
                viewBox="0 0 320 512"
              >
                <path
                  fill="gray"
                  d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"
                />
              </svg>
            </div>
          </a>
          <a
            href="#charts"
            class="flex items-center justify-between py-[6px] px-[25px] text-xl font-normal relative mb-[3px] none hover:bg-gray-500"
          >
            <!-- <div class="flex items-center"> -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="15"
              width="15"
              viewBox="0 0 512 512"
            >
              <path
                class="hover:fill-blue-500"
                fill="gray"
                d="M32 32c17.7 0 32 14.3 32 32l0 336c0 8.8 7.2 16 16 16l400 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L80 480c-44.2 0-80-35.8-80-80L0 64C0 46.3 14.3 32 32 32zM160 224c17.7 0 32 14.3 32 32l0 64c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32zm128-64l0 160c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-160c0-17.7 14.3-32 32-32s32 14.3 32 32zm64 32c17.7 0 32 14.3 32 32l0 96c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-96c0-17.7 14.3-32 32-32zM480 96l0 224c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-224c0-17.7 14.3-32 32-32s32 14.3 32 32z"
              />
            </svg>
            <div class="flex justify-between w-full" v-if="isCollapsed">
              <p class="text-white pl-[15px]">Charts</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="15"
                width="15"
                viewBox="0 0 320 512"
              >
                <path
                  fill="gray"
                  d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"
                />
              </svg>
            </div>
          </a>
          <a
            href="#widgets"
            class="flex items-center justify-between py-[6px] px-[25px] text-xl font-normal relative mb-[3px] none hover:bg-gray-500"
          >
            <!-- <div class="flex items-center"> -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="15"
              width="15"
              viewBox="0 0 576 512"
            >
              <path
                class="hover:fill-blue-500"
                fill="gray"
                d="M64 0C28.7 0 0 28.7 0 64L0 352c0 35.3 28.7 64 64 64l176 0-10.7 32L160 448c-17.7 0-32 14.3-32 32s14.3 32 32 32l256 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-69.3 0L336 416l176 0c35.3 0 64-28.7 64-64l0-288c0-35.3-28.7-64-64-64L64 0zM512 64l0 224L64 288 64 64l448 0z"
              />
            </svg>
            <div class="flex justify-between w-full" v-if="isCollapsed">
              <p class="text-white pl-[15px]">Widgets</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="15"
                width="15"
                viewBox="0 0 320 512"
              >
                <path
                  fill="gray"
                  d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"
                />
              </svg>
            </div>
          </a>
          <a
            href="#documentation"
            class="flex items-center justify-between py-[6px] px-[25px] text-xl font-normal relative mb-[3px] none hover:bg-gray-500"
          >
            <!-- <div class="flex items-center"> -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="15"
              width="15"
              viewBox="0 0 384 512"
            >
              <path
                class="hover:fill-blue-500"
                fill="gray"
                d="M0 64C0 28.7 28.7 0 64 0L224 0l0 128c0 17.7 14.3 32 32 32l128 0 0 288c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64zm384 64l-128 0L256 0 384 128z"
              />
            </svg>
            <div class="flex justify-between w-full" v-if="isCollapsed">
              <p class="text-white pl-[15px]">Documentation</p>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="15"
                width="15"
                viewBox="0 0 320 512"
              >
                <path
                  fill="gray"
                  d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"
                />
              </svg>
            </div>
          </a>
          <a
            href="#menu"
            class="flex items-center justify-between py-[6px] px-[25px] text-xl font-normal relative mb-[3px] none hover:bg-gray-500"
          >
            <!-- <div class="flex items-center"> -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="15"
              width="15"
              viewBox="0 0 512 512"
            >
              <path
                class="hover:fill-blue-500"
                fill="gray"
                d="M40 48C26.7 48 16 58.7 16 72l0 48c0 13.3 10.7 24 24 24l48 0c13.3 0 24-10.7 24-24l0-48c0-13.3-10.7-24-24-24L40 48zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L192 64zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-288 0zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-288 0zM16 232l0 48c0 13.3 10.7 24 24 24l48 0c13.3 0 24-10.7 24-24l0-48c0-13.3-10.7-24-24-24l-48 0c-13.3 0-24 10.7-24 24zM40 368c-13.3 0-24 10.7-24 24l0 48c0 13.3 10.7 24 24 24l48 0c13.3 0 24-10.7 24-24l0-48c0-13.3-10.7-24-24-24l-48 0z"
              />
            </svg>
            <div class="flex justify-between w-full" v-if="isCollapsed">
              <p class="text-white pl-[15px]">Menu Levels</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="15"
                width="15"
                viewBox="0 0 320 512"
              >
                <path
                  fill="gray"
                  d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"
                />
              </svg>
            </div>
          </a>
        </ul>
        <!-- </div> -->
        <!-- </div> -->
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const baseDropdownOpen = ref(false);
const sidebarDropdownOpen = ref(false);

const toggleBaseDropdown = () => {
  baseDropdownOpen.value = !baseDropdownOpen.value;
};
const toggleSidebarDropdown = () => {
  sidebarDropdownOpen.value = !sidebarDropdownOpen.value;
};

const isCollapsed = ref(true);

// watch(
//   () => isCollapsed.value,
//   () => {
//     if (isCollapsed.value == false) {
//       console.log(isCollapsed.value);
//       localStorage.setItem("collapsed", isCollapsed.value);
//     } else {
//       localStorage.removeItem("collapsed");
//       localStorage.clear();
//     }
//   }
// );

const toggleSidebar = () => {
  isCollapsed.value = !isCollapsed.value;
};
</script>

<style scoped>
ul.nav-droplist li a {
  font-size: 16px;
  color: darkgray;
}

ul.nav-droplist li a:hover {
  color: white;
}

.sidebar-container {
  height: 100vh;
  overflow-y: scroll;
  /* display: hidden; */
}
</style>
