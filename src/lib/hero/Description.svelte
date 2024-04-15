<script>
    import { language } from "$lib/stores/language.js";
    import { PHASE_ONE } from "$lib/locales/translations.json";
</script>


<p>
    {@html PHASE_ONE.intro[$language]}
</p>


<style>
    @media screen and (max-width: 1100px) {
        p {
            font-size: 1.8rem !important;
        }
    }

    p {
        width: 100%;
        text-align: center;
        font-size: 2.5rem !important;
        font-weight: normal;
        line-height: 1.5em;
    }
</style>