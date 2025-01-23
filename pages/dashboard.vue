<template>
  <div>
    <div class="bg-gray-200">
      <div class="flex flex-row p-[30px] justify-between">
        <div class="dash">
          <h2 class="text-2xl font-bold text-gray-800">Dashboard</h2>
          <p class="text-gray-400">Now You are in Dashboard</p>
        </div>
        <div class="">
          <button
            class="mr-2 text-center text-blue-500 border bg-blue-100 border-solid rounded-[20px] w-[150px] h-[40px] hover:bg-blue-700 hover:text-white"
          >
            Manage
          </button>
          <button
            class="text-center text-white border bg-blue-700 border-solid rounded-[20px] w-[150px] h-[40px] hover:bg-blue-500 hover:text-white"
          >
            Add Content
          </button>
        </div>
      </div>
      <div class="support">
        <div class="component p-[30px] flex gap-[80px]">
          <div
            class="bg-white w-[225px] h-[100px] border border-solid rounded-[10px] p-[20px] flex items-center gap-[15px]"
          >
            <div class="w-15 h-full bg-blue-500 rounded-[10px]">
              <div class="p-[9px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="50"
                  width="30"
                  viewBox="0 0 640 512"
                >
                  <path
                    fill="white"
                    d="M144 0a80 80 0 1 1 0 160A80 80 0 1 1 144 0zM512 0a80 80 0 1 1 0 160A80 80 0 1 1 512 0zM0 298.7C0 239.8 47.8 192 106.7 192l42.7 0c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0L21.3 320C9.6 320 0 310.4 0 298.7zM405.3 320c-.2 0-.4 0-.7 0c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7l42.7 0C592.2 192 640 239.8 640 298.7c0 11.8-9.6 21.3-21.3 21.3l-213.3 0zM224 224a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zM128 485.3C128 411.7 187.7 352 261.3 352l117.3 0C452.3 352 512 411.7 512 485.3c0 14.7-11.9 26.7-26.7 26.7l-330.7 0c-14.7 0-26.7-11.9-26.7-26.7z"
                  />
                </svg>
              </div>
            </div>
            <div class="w-60">
              <h6 class="text-gray-400">Visitors</h6>
              <h5 class="text-[20px] font-semibold leading-[1.6]">1,927</h5>
            </div>
          </div>

          <div
            class="bg-white w-[225px] h-[100px] border border-solid rounded-[10px] flex p-[20px] items-center gap-[10px]"
          >
            <div class="w-15 h-full bg-blue-400 rounded-[10px]">
              <div class="p-[9px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="50"
                  width="30"
                  viewBox="0 0 640 512"
                >
                  <path
                    fill="white"
                    d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304l91.4 0C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7L29.7 512C13.3 512 0 498.7 0 482.3zM625 177L497 305c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L591 143c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                  />
                </svg>
              </div>
            </div>
            <div class="w-60">
              <h6 class="text-gray-400">Subscribe</h6>
              <h5 class="text-[20px] font-semibold leading-[1.6]">1303</h5>
            </div>
          </div>
          <div
            class="bg-white w-[225px] h-[100px] border border-solid rounded-[10px] p-[20px] flex items-center gap-[10px]"
          >
            <div class="w-15 h-full bg-green-500 rounded-[10px]">
              <div class="p-[9px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="50"
                  width="30"
                  viewBox="0 0 640 512"
                >
                  <path
                    fill="white"
                    d="M0 32C0 14.3 14.3 0 32 0L48 0c44.2 0 80 35.8 80 80l0 288c0 8.8 7.2 16 16 16l464 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-66.7 0c1.8 5 2.7 10.4 2.7 16c0 26.5-21.5 48-48 48s-48-21.5-48-48c0-5.6 1-11 2.7-16l-197.5 0c1.8 5 2.7 10.4 2.7 16c0 26.5-21.5 48-48 48s-48-21.5-48-48c0-5.6 1-11 2.7-16L144 448c-44.2 0-80-35.8-80-80L64 80c0-8.8-7.2-16-16-16L32 64C14.3 64 0 49.7 0 32zM432 96l0-40c0-4.4-3.6-8-8-8l-80 0c-4.4 0-8 3.6-8 8l0 40 96 0zM288 96l0-40c0-30.9 25.1-56 56-56l80 0c30.9 0 56 25.1 56 56l0 40 0 224-192 0 0-224zM512 320l0-224 16 0c26.5 0 48 21.5 48 48l0 128c0 26.5-21.5 48-48 48l-16 0zM240 96l16 0 0 224-16 0c-26.5 0-48-21.5-48-48l0-128c0-26.5 21.5-48 48-48z"
                  />
                </svg>
              </div>
            </div>
            <div class="w-60">
              <h6 class="text-gray-400">Sales</h6>
              <h5 class="text-[20px] font-semibold leading-[1.6]">$ 1,927</h5>
            </div>
          </div>

          <div
            class="bg-white w-[225px] h-[100px] border border-solid rounded-[10px] p-[20px] flex items-center gap-[10px]"
          >
            <div class="w-15 h-full bg-violet-500 rounded-[10px]">
              <div class="p-[9px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="50"
                  width="30"
                  viewBox="0 0 640 512"
                >
                  <path
                    fill="white"
                    d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z"
                  />
                </svg>
              </div>
            </div>
            <div class="w-60">
              <h6 class="text-gray-400">Order</h6>
              <h5 class="text-[20px] font-semibold leading-[1.6]">1,927</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
