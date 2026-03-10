console.log("Page Shield dry run script loaded");
document.documentElement.setAttribute("data-ps-test-script", "loaded");

fetch("/ps-test-ping.json", { method: "GET", credentials: "same-origin" })
  .then(() => console.log("ps-test-ping sent"))
  .catch((e) => console.log("ps-test-ping failed", e));

document.cookie = "ps_dryrun_cookie=1; path=/; SameSite=Lax";
console.log("ps_dryrun_cookie set");
