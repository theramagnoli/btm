npm
<template>
  <div
    class="relative items-center justify-center h-auto laptop:h-96 w-full laptop:w-[500px] desktop:w-[550px] group hidden laptop:flex"
  >
    <NuxtImg
      src="images/GroupInPuntaAllen.png"
      format="webp"
      fit="cover"
      quality="50"
      alt="Group in Punta Allen"
      class="object-cover laptop:w-[375px] desktop:w-[400px] rounded-sm animation-zoom-in-out group-hover:opacity-70 transition-all duration-500"
    />
    <NuxtImg
      src="images/MakingTortillas.jpg"
      format="webp"
      fit="cover"
      quality="50"
      alt="Couple making tortillas"
      class="absolute h-[150px] rounded-sm laptop:top-[25px] laptop:left-[10px] desktop:top-[25px] desktop:left-[25px]"
    />
    <NuxtImg
      src="images/CoupleAtLazyRiver.jpg"
      format="webp"
      fit="cover"
      quality="50"
      alt="Couple at lazy river"
      class="absolute h-[125px] rounded-sm laptop:top-[5px] laptop:right-[30px] desktop:top-[5px] desktop:right-[50px]"
    />
    <NuxtImg
      src="images/CenoteIkKil.jpg"
      format="webp"
      fit="cover"
      quality="50"
      alt="Cenote Ik Kil"
      class="absolute h-[175px] rounded-sm laptop:bottom-[55px] laptop:left-[0px] desktop:bottom-[40px] desktop:left-[5px]"
    />
    <NuxtImg
      src="images/KidJumping.png"
      format="webp"
      fit="cover"
      quality="50"
      alt="Kid jumping into cenote"
      class="absolute h-[125px] rounded-sm bottom-[5px]"
    />
    <NuxtImg
      src="images/GuidePraisingSol.jpg"
      format="webp"
      fit="cover"
      quality="50"
      alt="Guide praising Sol"
      class="absolute h-[155px] rounded-sm bottom-[100px] right-[0px]"
    />
  </div>
</template>

<style>
@keyframes zoom-in-out {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.04);
  }
  100% {
    transform: scale(1);
  }
}

.animation-zoom-in-out {
  animation: zoom-in-out 6s ease-in-out infinite;
}
</style>
