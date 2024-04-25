<script>
    import { language } from "$lib/stores/language.js";
    import { PHASE_ONE } from "$lib/locales/translations.json";
</script>


<p class="dark:text-slate-100 dark:tracking-wide  sm:text-4xl">
    {@html PHASE_ONE.intro[$language]}
</p>


<style>
    p {
        text-align: center;
        font-weight: normal;
        line-height: 1.5em;
    }
</style>