<template>
  <section>
    <HeaderBanner class="mb-10">
      {{ $t("Home.ContactFormSection.Header") }}
    </HeaderBanner>
    <form id="contactForm" action="https://formspree.io/f/xnnvpeoj" method="POST">
      <fieldset class="fieldset bg-base-200 border-accent rounded-box max-lg:w-full lg:w-lg border p-4 gap-5 mx-auto">
        <legend class="fieldset-legend sr-only">{{ $t('Home.ContactFormSection.Header') }}</legend>
        
        <label id="contactName" class="label sr-only">{{ $t("Home.ContactFormSection.Name") }}</label>
        <input type="text" class="input lg:input-lg w-full" :placeholder="$t('Home.ContactFormSection.Name')" :name="$t('Home.ContactFormSection.Name')" aria-describedby="contactName" required />

        <label id="contactEmail" class="label sr-only">{{ $t('Home.ContactFormSection.Email') }}</label>
        <input type="email" class="input lg:input-lg w-full" :placeholder="$t('Home.ContactFormSection.Email')" :name="$t('Home.ContactFormSection.Email')" aria-describedby="contactEmail" required />

        <label id="contactSubject" class="label sr-only">{{ $t('Home.ContactFormSection.SelectASubject') }}</label>
        <select class="select lg:select-lg w-full" :placeholder="$t('Home.ContactFormSection.SelectASubject')" :name="$t('Home.ContactFormSection.SelectASubject')" aria-describedby="contactSubject" required>
          <option value="" disabled selected>{{ $t('Home.ContactFormSection.SelectASubject') }}</option>
          <option value="Freelance Project Inquiry">Freelance Project Inquiry</option>
          <option value="Full-Time Employment Opportunity">Full-Time Employment Opportunity</option>
          <option value="Part-Time or Contract Work">Part-Time or Contract Work</option>
          <option value="Startup or Partnership Opportunity">Startup or Partnership Opportunity</option>
          <option value="Technical Consultation Request">Technical Consultation Request</option>
          <option value="Website or App Maintenance Request">Website or App Maintenance Request</option>
          <option value="Speaking or Event Engagement">Speaking or Event Engagement</option>
          <option value="Collaboration on Open Source or Side Project">Collaboration on Open Source or Side Project</option>
          <option value="Media or Interview Request">Media or Interview Request</option>
          <option value="General Networking / Connect">General Networking / Connect</option>
          <option value="Other (please specify in your message)">Other (please specify in your message)</option>
        </select>

        <label id="contactMessage" class="label sr-only">{{ $t('Home.ContactFormSection.Message') }}</label>
        <textarea class="textarea lg:input-lg w-full" :placeholder="$t('Home.ContactFormSection.MessagePlaceholder')" :name="$t('Home.ContactFormSection.Message')" aria-describedby="contactMessage"></textarea>

        <button class="btn btn-accent lg:text-lg">
            {{ $t('Home.ContactFormSection.Submit') }}
        </button>
      </fieldset>
    </form>
  </section>
</template>

<!-- <script setup lang="ts">
   var onSubmit = (token: any) => {
     (document?.getElementById("contactForm") as HTMLFormElement)?.submit();
   };
</script> -->