<?php
if ($_POST["submit"]) {
    mail("obs@obs.wtf", "Message from " + $_POST["name"], $_POST["message"], "From: " + $_POST["email"]);
}
?>
