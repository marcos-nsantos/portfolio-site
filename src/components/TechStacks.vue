<template>
  <div
    class="grid grid-flow-row justify-items-center grid-cols-5 gap-7 text-2xl lg:grid-flow-col lg:text-3xl"
  >
    <font-awesome-icon
      class="hover:scale-12 transition-transform duration-200"
      icon="fa-brands fa-golang"
      aria-roledescription="Go. Programming language"
    ></font-awesome-icon>

    <font-awesome-icon
      class="hover:scale-12 transition-transform duration-200"
      aria-roledescription="Python. Programming language"
      icon="fa-brands fa-python"
    ></font-awesome-icon>

    <font-awesome-icon
      class="hover:scale-12 transition-transform duration-200"
      icon="fa-brands fa-docker"
      aria-roledescription="Docker. Containerization platform"
    ></font-awesome-icon>

    <font-awesome-icon
      class="hover:scale-12 transition-transform duration-200"
      icon="fa-brands fa-git-alt"
      aria-roledescription="Git. Version control system"
    ></font-awesome-icon>

    <font-awesome-icon
      class="hover:scale-12 transition-transform duration-200"
      icon="fa-brands fa-aws"
      aria-roledescription="AWS. Cloud computing platform"
    ></font-awesome-icon>

    <font-awesome-icon
      class="hover:scale-12 transition-transform duration-200"
      icon="fa-brands fa-linux"
      aria-roledescription="Linux. Distribution of the Unix operating system"
    ></font-awesome-icon>

    <font-awesome-icon
      class="hover:scale-12 transition-transform duration-200"
      icon="fa-brands fa-vuejs"
      aria-roledescription="Vue. SPA JavaScript framework"
    ></font-awesome-icon>

    <font-awesome-icon
      class="hover:scale-12 transition-transform duration-200"
      icon="fa-brands fa-html5"
      aria-roledescription="HTML5. Markup language"
    ></font-awesome-icon>

    <font-awesome-icon
      class="hover:scale-12 transition-transform duration-200"
      icon="fa-brands fa-css3-alt"
      aria-roledescription="CSS3. Style sheet language"
    ></font-awesome-icon>

    <font-awesome-icon
      class="hover:scale-12 transition-transform duration-200"
      icon="fa-brands fa-js-square"
      aria-roledescription="JavaScript. Programming language"
    ></font-awesome-icon>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
export default {
  name: "TechStacksIcons",
  components: { FontAwesomeIcon },
};
</script>
