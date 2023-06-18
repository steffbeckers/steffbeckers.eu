<template>
  <div class="flex flex-col h-full overflow-y-hidden">
    <Header></Header>
    <section id="content" class="flex flex-grow overflow-y-scroll">
      <div class="container mx-auto py-4 px-4">
        <slot />
      </div>
    </section>
    <Footer></Footer>
  </div>
</template>
