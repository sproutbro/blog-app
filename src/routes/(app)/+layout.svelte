<script>
    /** @type {import('./$types').PageData} */
    export let data;

    let isMenuOpen = false;

    const toggleMenu = () => {
        isMenuOpen = !isMenuOpen;
    };

    const navLinks = [
        { href: "/", label: "Home" },
        { href: "/profile", label: "Profile" },
        { href: "/daily", label: "Daily" },
        { href: "/develop", label: "Develop" },
        { href: "/board", label: "Board" },
    ];
</script>

<header>
    <h1>Blog</h1>
    <button class="menu-button" on:click={toggleMenu}> &#9776; </button>
    <nav>
        {#each navLinks as { href, label }}
            <a {href}>{label}</a>
        {/each}
        {#if data.isLogin}
            <a href="/user/profile" class="login-btn">User</a>
        {:else}
            <a href="/auth/login" class="login-btn">Login</a>
        {/if}
    </nav>
    <div class="mobile-menu {isMenuOpen ? 'open' : ''}">
        {#each navLinks as { href, label }}
            <a {href} on:click={() => (isMenuOpen = false)}>{label}</a>
        {/each}

        {#if data.isLogin}
            <a
                href="/user/profile"
                class="login-btn"
                on:click={() => (isMenuOpen = false)}>User</a
            >
        {:else}
            <a
                href="/auth/login"
                class="login-btn"
                on:click={() => (isMenuOpen = false)}>Login</a
            >
        {/if}
    </div>
</header>

<main>
    <slot />
</main>
