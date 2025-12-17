<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h3>Signup</h3>
    
    <form action="includes/formhandler.inc.php" method="POST">
        <input type="text" name="username" placeholder="Username" />
        <input type="password" name="pwd" placeholder="Password" />
        <input type="text" name="email" placeholder="E-Mail" />
        <button>Signup</button>
    </form>

    <h3>Update</h3>

     <form action="includes/userupdate.inc.php" method="POST">
        <input type="text" name="username" placeholder="Username" />
        <input type="password" name="pwd" placeholder="Password" />
        <input type="text" name="email" placeholder="E-Mail" />
        <button>Update</button>
    </form>

    <h3>Delete</h3>

    <form action="includes/userdelete.inc.php" method="POST">
        <input type="text" name="username" placeholder="Username" />
        <input type="password" name="pwd" placeholder="Password" />
        <button>Delete</button>
    </form>

    <form class="searchform" action="search.php" method="POST">
        <label for="search">Search for user:</label>
        <input id="search" type="text" name="usersearch" placeholder="Search..." />
        <button>Search</button>
    </form>

</body>
</html>