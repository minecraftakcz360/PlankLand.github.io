const Members = 
{
    Rustycz: {
        Name: document.getElementById("MRustyczName"),
        DisButton: document.getElementById("MRustyczDis"),
        MinButton: document.getElementById("MRustyczMin"),
        DisName: "@rustycz",
        MinName: "Rustycz",
    }
};


Members.Rustycz.DisButton.addEventListener("click", function()
{
    Members.Rustycz.Name.textContent = Members.Rustycz.DisName;
});

Members.Rustycz.MinButton.addEventListener("click", function()
{
    Members.Rustycz.Name.textContent = Members.Rustycz.MinName;
});