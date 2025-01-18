<div class="container">
    <div class="sidebar">
        <h2>어드민 메뉴</h2>
        <ul class="menu">
            <li><a href="/admin/daily">Daily</a></li>
            <li>사용자 관리리</li>
            <li>통계</li>
        </ul>
    </div>
    <div class="content">
        <slot />
    </div>
</div>

<style>
    .container {
        display: flex;
        height: 100vh;
    }

    .sidebar {
        width: 250px;
        background-color: #2c3e50;
        color: white;
        display: flex;
        flex-direction: column;
        padding: 20px;
    }

    .sidebar h2 {
        margin-bottom: 20px;
        font-size: 1.5rem;
        text-align: center;
    }

    .menu {
        list-style: none;
    }

    .menu li {
        margin-bottom: 15px;
    }

    .menu a {
        text-decoration: none;
        color: white;
        font-size: 1rem;
        display: block;
        padding: 10px 15px;
        border-radius: 5px;
        transition: background-color 0.3s;
    }

    .menu a:hover {
        background-color: #34495e;
    }
</style>
