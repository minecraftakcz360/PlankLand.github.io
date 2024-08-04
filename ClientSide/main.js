const MembersLink = document.getElementById("MembersLink");
const HomeLink = document.getElementById("HomeLink");
const LinksLink = document.getElementById("LinksLink")
const PluginsLink = document.getElementById("PluginsLink")

function OpenLink(link) 
{
    window.open(link, "_top")
};

MembersLink.addEventListener("click", function()
{
    OpenLink("Members.html")
})

HomeLink.addEventListener("click", function()
{
    OpenLink("Home.html")
})

LinksLink.addEventListener("click", function()
{
    OpenLink("Links.html")
})

PluginsLink.addEventListener("click", function()
{
    OpenLink("Plugins.html")
})