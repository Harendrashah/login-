<template>
  <div>
    <div class="bg-gray-300 w-[100%] h-[100vh]">
      <div class="text-xl font-medium p-5">Pricing</div>
      <div class="justify-center items-center mb-1 p-10 flex gap-3">
        <div
          class="bg-white rounded-[5px] w-[25%] min-h-[90vh] relative overflow-hidden"
        >
          <div class="demo bg-green-500"></div>

          <div class="text-demo flex flex-col pt-5 pr-5 pb-15 pl-5 gap-3">
            <div class="text-white text-2xl font-medium">Standard</div>
            <div class="text-white text-xl font-normal">Lorem Lorem</div>
          </div>
          <!-- <h1>dfghjkl</h1> -->
          <!-- <div
              class="border-l-1 m-[60%] border-l-green-500 border-r-green-500 inline-block w-[170px] h-[110px] p-[15px] border-t-none border-b-none relative"
            >
              <div class="months">ghjk</div>
            </div> -->
          <div class="relative">
            <div class="prices">
              <!-- <div class="outlines"> -->
              <div class="buttonline">
                <!-- <div class="absolute"> -->
                <!-- <div class="rotate-45deg"> -->
                <div class="price">
                  <div class="months"></div>
                  <div class="month"></div>
                </div>
                <!-- </div> -->
                <!-- </div> -->
                <!-- </div> -->
              </div>
            </div>
          </div>
        </div>

        <div
          class="bg-white rounded-[5px] w-[25%] min-h-[60vh] relative overflow-hidden p-12"
        >
          <div class="demo bg-blue-500"></div>
          <div class="text-demo flex flex-col pt-5 pr-5 pb-15 pl-5 gap-3">
            <div class="text-white text-2xl font-medium">Standard</div>
            <div class="text-white text-xl font-normal">Lorem Lorem</div>
          </div>
        </div>
        <div
          class="bg-white rounded-[5px] w-[25%] min-h-[60vh] relative overflow-hidden p-12"
        >
          <div class="demo bg-violet-500"></div>
          <div class="text-demo flex flex-col pt-5 pr-5 pb-15 pl-5 gap-3">
            <div class="text-white text-2xl font-medium">Standard</div>
            <div class="text-white text-xl font-normal">Lorem Lorem</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.demo {
  /* background: rgb(130, 229, 130); */
  content: "";
  width: 100%;
  height: 350px;
  position: absolute;
  top: -150px;
  left: 0;
  transform: skewY(-20deg);
  /* z-index: 0; */
}

.text-demo {
  position: absolute;
  top: 10px;
}
.months {
  background: white;
  width: 121px;
  height: 121px;
  border: 3px solid;
  border-right: none;
  border-bottom: none;
  border-color: rgb(34, 197, 94);

  position: absolute;
  top: -60px;
  content: "";
  left: 50%;
  transform: translateX(-50%) scaleY(0.5) rotate(45deg);
}
.month {
  background: white;
  width: 121px;
  height: 121px;
  border: 3px solid;
  border-right: none;
  border-bottom: none;
  border-color: rgb(34, 197, 94);

  position: absolute;
  top: 49px;
  content: "";
  left: 50%;
  transform: translateX(-50%) scaleY(0.5) rotate(224deg);
}
/* .months {
    background: white;
    width: 121px;
    height: 121px;
    border: 3px solid;
    border-right: none;
    border-bottom: none;
    border-color: rgb(34, 197, 94);
  
    position: absolute;
    top: -60px;
    content: "";
    left: 50%;
    transform: translateX(-50%) scaleY(0.5) rotate(45deg);
  } */
/* .outlines {
    border-color: rgb(34, 197, 94);
    width: 121px;
    height: 121px;
    border: 3px solid;
    border-right: none;
    border-bottom: none;
    position: absolute;
    top: -60px;
    content: "";
    left: 50%;
    transform: translateX(-50%) scaleY(0.5) rotate(45deg);
  } */

/* .outlines {
    background: white;
    width: 131px;
    height: 131px;
    border: 3px solid;
    border-right: none;
    border-bottom: none;
    border-color: rgb(34, 197, 94);
  
    position: absolute;
    top: -50px;
    content: "";
    left: 50%;
    transform: translateX(-50%) scaleY(0.5) rotate(45deg);
  } */
.buttonline {
  background: white;
  width: 127px;
  height: 127px;
  border: 3px solid;
  border-right: none;
  border-bottom: none;
  border-color: rgb(34, 197, 94);

  position: absolute;
  top: 57px;
  content: "";
  left: 50%;
  transform: translateX(-50%) scaleY(0.5) rotate(224deg);
}
.price {
  background: white;
  display: inline-block;
  width: 170px;
  height: 110px;
  padding: 15px;
  border: 2px solid;
  border-top: none;
  border-bottom: none;
  position: relative;
  border-color: rgb(34, 197, 94);
  top: 148px;
  left: 94px;
}
.prices {
  background: white;
  display: inline-block;
  width: 180px;
  height: 120px;
  padding: 15px;
  border: 2px solid;
  border-top: none;
  border-bottom: none;
  position: relative;
  border-color: rgb(34, 197, 94);
  top: 138px;
  left: 77px;
}
</style>
