<script>
    import { language } from "$lib/stores/language.js";
    import { PHASE_ONE } from "$lib/locales/translations.json";
</script>


<p class="dark:text-white dark:tracking-wide mt-5 text-xl sm:text-3xl
    uppercase">
    {@html PHASE_ONE.intro[$language]}
</p>


<style>
    p {
        text-align: start;
        font-weight: normal;
        line-height: 1.5em;
    }
</style>