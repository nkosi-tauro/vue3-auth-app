<template>
  <div class="about">
    <Header/>
    <!-- component -->
    <section class="py-10 bg-gray-100 bg-opacity-50 h-screen">
      <div class="mx-auto container max-w-2xl md:w-3/4 shadow-md">
        <div
          class="bg-gray-100 p-4 border-t-2 bg-opacity-5 border-indigo-400 rounded-t"
        >
          <div class="max-w-sm mx-auto md:w-full md:mx-0">
            <div class="inline-flex items-center space-x-4">
              <img
                class="w-10 h-10 object-cover rounded-full"
                alt="User avatar"
                :src="image"
              />

              <h1 class="text-gray-600">{{name}}</h1>
            </div>
          </div>
        </div>
        <div class="bg-white space-y-6">
          <div
            class="md:inline-flex space-y-4 md:space-y-0 w-full p-4 text-gray-500 items-center"
          >
            <h2 class="md:w-1/3 max-w-sm mx-auto">Account</h2>
            <div class="md:w-2/3 max-w-sm mx-auto">
              <label class="text-sm text-gray-400">Email</label>
              <div class="w-full inline-flex border">
                <div class="pt-2 w-1/12 bg-gray-100 bg-opacity-50">
                  <svg
                    fill="none"
                    class="w-6 text-gray-400 mx-auto"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <input
                  type="email"
                  class="w-11/12 focus:outline-none focus:text-gray-600 p-2"
                  placeholder="email@example.com"
                  disabled
                />
              </div>
            </div>
          </div>

          <hr />
          <div
            class="md:inline-flex space-y-4 md:space-y-0 w-full p-4 text-gray-500 items-center"
          >
            <h2 class="md:w-1/3 mx-auto max-w-sm">Personal info</h2>
            <div class="md:w-2/3 mx-auto max-w-sm space-y-5">
              <div>
                <label class="text-sm text-gray-400">Full name</label>
                <div class="w-full inline-flex border">
                  <div class="w-1/12 pt-2 bg-gray-100">
                    <svg
                      fill="none"
                      class="w-6 text-gray-400 mx-auto"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </div>
                  <input
                    type="text"
                    class="w-11/12 focus:outline-none focus:text-gray-600 p-2"
                    placeholder="Charly Olivas"
                  />
                </div>
              </div>
              <div>
                <label class="text-sm text-gray-400">Phone number</label>
                <div class="w-full inline-flex border">
                  <div class="pt-2 w-1/12 bg-gray-100">
                    <svg
                      fill="none"
                      class="w-6 text-gray-400 mx-auto"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <input
                    type="text"
                    class="w-11/12 focus:outline-none focus:text-gray-600 p-2"
                    placeholder="12341234"
                  />
                </div>
              </div>
            </div>
          </div>

          <hr />
          <div
            class="md:inline-flex w-full space-y-4 md:space-y-0 p-8 text-gray-500 items-center"
          >
            <h2 class="md:w-4/12 max-w-sm mx-auto">Change password</h2>

            <div
              class=" w-full  max-w-sm mx-auto space-y-5 md:inline-flex pl-2"
            >
          <div class="w-full inline-flex border-b">
                <div class="w-1/12 pt-2 bg-gray-100">
                  <svg
                    fill="none"
                    class="w-6 text-gray-400 mx-auto"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </div>
                <input
                  type="password"
                  class="w-11/12 focus:outline-none focus:text-gray-600 p-2 "
                  placeholder="New"
                  disabled
                />
              </div>
            </div>
          </div>

          <hr />
          <div class="w-full p-4 text-right text-gray-500">
            <button class="inline-flex rounded-md text-center text-white py-2 px-4 bg-indigo-400 items-center focus:outline-none mr-4">
              Save
            </button>
       
          </div>
        </div>
      </div>
    </section>
  </div>
</template>


<script>
import Header from "../components/Header.vue";
import firebaseUser from '../store/user.js'

export default {
  name: "About",
  components: {
    Header,
  },
  setup(){
    const { name, image } = firebaseUser()
    return {name, image}
  }
};
</script>