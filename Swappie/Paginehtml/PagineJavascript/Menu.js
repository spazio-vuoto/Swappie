// Menu a tendina (hamburger) per schermi piccoli
const header = document.querySelector(".secondoDiv");
const toggle = header ? header.querySelector(".menuToggle") : null;

function impostaMenu(aperto) {
    header.classList.toggle("navAperta", aperto);
    toggle.setAttribute("aria-expanded", aperto);
    toggle.setAttribute("aria-label", aperto ? "Chiudi il menu" : "Apri il menu");
}

if (toggle) {
    toggle.addEventListener("click", () => {
        impostaMenu(!header.classList.contains("navAperta"));
    });
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") impostaMenu(false);
    });
    window.addEventListener("resize", () => {
        if (window.innerWidth > 900) impostaMenu(false);
    });
}

// Footer a fisarmonica su telefono (il CSS la attiva solo sotto i 700px)
const footer = document.querySelector(".ventunesimoDiv");
if (footer) {
    footer.classList.add("footerAccordion");
    footer.querySelectorAll(":scope > ul").forEach((lista) => {
        const intestazione = lista.firstElementChild;
        if (!intestazione) return;
        intestazione.setAttribute("role", "button");
        intestazione.setAttribute("tabindex", "0");
        intestazione.setAttribute("aria-expanded", "false");
        const cambia = () => {
            const aperta = lista.classList.toggle("aperta");
            intestazione.setAttribute("aria-expanded", aperta);
        };
        intestazione.addEventListener("click", cambia);
        intestazione.addEventListener("keydown", (e) => {
            if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                cambia();
            }
        });
    });
}
