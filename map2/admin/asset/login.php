<div id="login">
    <div id="loginDialog" 
        data-role="dialog"
        data-overlay="true"
        data-overlay-color="bg-blue"
        data-show="true"
    >
        <form class="padding20" action="index.php">
            <h1 class="text-light">Tourist <span style="letter-spacing: 5px"><b class="fg-grayDark">SP<b class="mif-earth"></b>T</span></h1>
            <hr class="thin"/>
            <br />
            <div class="input-control text full-size" data-role="input">
                <label for="user_login">User email:</label>
                <input type="text" name="user_login" id="user_login">
                <button class="button helper-button clear"><span class="mif-cross"></span></button>
            </div>
            <br />
            <br />
            <div class="input-control password full-size" data-role="input">
                <label for="user_password">User password:</label>
                <input type="password" name="user_password" id="user_password">
                <button class="button helper-button reveal"><span class="mif-looks"></span></button>
            </div>
            <br />
            <br />
            <div class="form-actions">
                <button type="submit" class="button primary">Login</button>
                <a href="../" class="button link">Cancel</a>
            </div>
        </form>
    </div>
</div>