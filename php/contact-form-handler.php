<?php
    mail("obs@obs.wtf", "Message from " + $POST_["name"], $_POST["message"], "From: " + $_POST["email"]);
?>
