<script>
    import "../../app.css";
    import { page } from "$app/stores";

    let isMenuOpen = false;

    const toggleMenu = () => {
        isMenuOpen = !isMenuOpen;
    };

    const navLinks = [
        { href: "/", label: "Home" },
        { href: "/daily", label: "Daily" },
        { href: "/develop", label: "Develop" },
        { href: "/contact", label: "Contact" },
    ];

    $: currentPath = $page.url.pathname;

    const isActive = (href) =>
        currentPath === href || currentPath.startsWith(href + "/");
</script>

<header>
    <h1>Blog</h1>
    <button class="menu-button" on:click={toggleMenu}> &#9776; </button>
    <nav>
        {#each navLinks as { href, label }}
            <a {href} class:login-btn={isActive(href)}>{label}</a>
        {/each}
    </nav>
    <div class="mobile-menu {isMenuOpen ? 'open' : ''}">
        {#each navLinks as { href, label }}
            <a
                {href}
                class:login-btn={isActive(href)}
                on:click={() => (isMenuOpen = false)}>{label}</a
            >
        {/each}
    </div>
</header>

<main>
    <slot />
</main>
