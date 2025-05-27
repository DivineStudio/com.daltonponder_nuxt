<template>
  <section>
    <HeaderBanner class="mb-10">
      {{ $t("Home.EdCertSection.Header") }}
    </HeaderBanner>
    <div class="flex flex-col lg:flex-row gap-10">
      <ul class="list border-accent border-1 bg-base-200 shadow-lg/40 rounded-box flex-1/2">
        <li class="p-4 pb-2 text-xs opacity-60 tracking-wide">{{ $t("Home.EdCertSection.EducationHeader") }}</li>
        <li class="list-row">
          <div><img class="size-10 rounded-none" src="public/logos/CCLogo.webp" :alt="$t('Image.CCLogoAlt')"/></div>
          <div>
            <div>B.S. Computer Information Systems</div>
            <div class="text-xs uppercase font-semibold opacity-60">Columbia College</div>
          </div>
          <div>
            <div class="text-xs opacity-60 text-end">{{ $t("Home.EdCertSection.Graduated") }}:<br/>2020</div>
          </div>
        </li>
        <li class="list-row">
          <div><img class="size-10 rounded-none" src="public/logos/WGULogo.webp" :alt="$t('Image.WGULogoAlt')"/></div>
          <div>
            <div>M.S. Cybersecurity and Information Assurance</div>
            <div class="text-xs uppercase font-semibold opacity-60">Western Governors University</div>
          </div>
          <div>
            <div class="text-xs opacity-60 text-end">{{ $t("Home.EdCertSection.Graduated") }}:<br/>2023</div>
          </div>
        </li>
        <li class="list-row">
          <div><img class="size-10 rounded-none" src="public/logos/SNHULogo.webp" :alt="$t('Image.SNHULogoAlt')"/></div>
          <div>
            <div>M.S. Information Technology</div>
            <div class="opacity-80 mb-1 italic">Concentration: Software Application Development</div>
            <div class="text-xs uppercase font-semibold opacity-60">Southern New Hampshire University</div>
          </div>
          <div>
            <div class="text-xs opacity-60 text-end">{{ $t("Home.EdCertSection.Expected") }}:<br/>2026</div>
          </div>
        </li>  
      </ul>    
      <ul class="list border-accent border-1 bg-base-200 shadow-lg/40 rounded-box flex-1/2">
        <li class="p-4 pb-2 text-xs opacity-60 tracking-wide">{{ $t("Home.EdCertSection.CertificationsHeader") }}</li>
        <li class="list-row">
          <div><img class="size-10 rounded-none" src="public/logos/CEHLogo.webp" :alt="$t('Image.CEHLogoAlt')"/></div>
          <div>
            <div>Certified Ethical Hacker</div>
            <div class="text-xs uppercase font-semibold opacity-60">EC-Council</div>
          </div>
          <div>
            <div class="text-xs opacity-60 text-end">{{ $t("Home.EdCertSection.Expires") }}:<br/>Feb. 11, 2026</div>
          </div>
        </li>
        <li class="list-row">
          <div><img class="size-10 rounded-none" src="public/logos/SitefinityLogo.webp" :alt="$t('Image.SitefinityLogoAlt')"/></div>
          <div>
            <div>Certified Sitefinity Developer</div>
            <div class="text-xs uppercase font-semibold opacity-60">Progress</div>
          </div>
          <div>
            <div class="text-xs opacity-60 text-end">{{ $t("Home.EdCertSection.Expires") }}:<br/>July 26, 2026</div>
          </div>
        </li>
        <li class="list-row">
          <div><img class="size-10 rounded-none" src="public/logos/SitefinityLogo.webp" :alt="$t('Image.SitefinityLogoAlt')"/></div>
          <div>
            <div>Certified .NET Core Sitefinity Developer</div>
            <div class="text-xs uppercase font-semibold opacity-60">Progress</div>
          </div>
          <div>
            <div class="text-xs opacity-60 text-end">{{ $t("Home.EdCertSection.Expires") }}:<br/>Dec. 8, 2025</div>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>